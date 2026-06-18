# 前后端联调指南

本文档说明如何将静态前端页面接入 `graph-json-service` 后端服务，完成本地联调。

## 1. 前置环境

需要准备：

- JDK 11+
- Maven
- MySQL 5.7
- Redis
- Postman、curl 或其他 HTTP 调试工具

后端工程目录：

```text
outputs/graph-json-service
```

前端页面目录：

```text
outputs/directed-graph-prototype
```

## 2. 初始化数据库

创建数据库：

```sql
CREATE DATABASE graph_demo DEFAULT CHARSET utf8mb4 COLLATE utf8mb4_general_ci;
```

执行建表 SQL：

```text
outputs/graph-json-service/src/main/resources/db/schema.sql
```

表中 `del_flag` 含义：

- `0`：当前有效 JSON
- `1`：已废弃 JSON

同一个 `version_code` 只允许存在一条 `del_flag = 0` 的有效记录。

## 3. 修改后端配置

修改：

```text
outputs/graph-json-service/src/main/resources/application.yml
```

示例：

```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/graph_demo?useUnicode=true&characterEncoding=utf8&useSSL=false&serverTimezone=Asia/Shanghai
    username: root
    password: root
  redis:
    host: localhost
    port: 6379

graph:
  cache:
    enabled: true
    ttl-seconds: 1800
```

如果本地暂时没有 Redis，可以先把缓存关掉：

```yaml
graph:
  cache:
    enabled: false
```

## 4. 启动后端

进入后端目录：

```bash
cd outputs/graph-json-service
```

构建：

```bash
mvn clean package
```

启动：

```bash
java -jar target/graph-json-service-1.0.0.jar
```

默认服务地址：

```text
http://localhost:8080
```

## 5. 录入第一份 JSON

调用录入接口：

```http
POST http://localhost:8080/api/graph-json
Content-Type: application/json
```

请求体：

```json
{
  "versionCode": "rtos-next",
  "versionName": "RTOS NEXT",
  "operator": "tester",
  "graphJson": {}
}
```

其中 `graphJson` 填入完整图谱 JSON，可直接使用：

```text
outputs/directed-graph-prototype/graph-data.json
```

成功响应：

```json
{
  "success": true,
  "data": {
    "versionCode": "rtos-next"
  }
}
```

如果失败，重点检查：

- JSON 是否缺少必填字段。
- 是否存在重复 `id`。
- `edges.from` / `edges.to` 是否引用了不存在的节点。
- `stageParabolas.through` 是否引用了不存在的第四层模块。
- 每个可点击项是否都有完整 `asset`。
- `asset.type` / `asset.stages` 是否使用了约定枚举。
- 数组中是否出现空字符串，例如 `[""]`。

## 6. 验证后端接口

查询版本下拉框：

```http
GET http://localhost:8080/api/graph-json/versions
```

预期响应：

```json
{
  "success": true,
  "data": [
    {
      "id": "rtos-next",
      "label": "RTOS NEXT",
      "url": "/api/graph-json/rtos-next"
    }
  ]
}
```

查询图谱 JSON：

```http
GET http://localhost:8080/api/graph-json/rtos-next
```

预期响应：

```json
{
  "meta": {},
  "layout": {},
  "overview": {},
  "layers": [],
  "nodes": [],
  "modules": [],
  "edges": [],
  "stageParabolas": []
}
```

注意：该接口直接返回图谱 JSON，不包 `success/data`，便于当前前端直接渲染。

## 7. 前端接入方式一：直接写后端 JSON 地址

这是最推荐的本地联调方式，简单稳定。

修改：

```text
outputs/directed-graph-prototype/graph-config.js
```

内容改为：

```js
window.GRAPH_DATA_SOURCES = [
  {
    id: "rtos-next",
    label: "RTOS NEXT",
    url: "http://localhost:8080/api/graph-json/rtos-next"
  }
];

// window.GRAPH_SOURCE_LIST_URL = "/api/graph-json/versions";
```

然后刷新：

```text
outputs/directed-graph-prototype/index.html
```

验证：

- 右上角下拉框显示 `RTOS NEXT`。
- 图谱正常渲染。
- 点击节点可以打开资产详情弹窗。
- 弹窗字段来自后端返回的 JSON。

## 8. 前端接入方式二：版本下拉框也来自后端

如果希望右上角版本下拉框由后端接口提供，修改：

```text
outputs/directed-graph-prototype/graph-config.js
```

内容：

```js
window.GRAPH_DATA_SOURCES = [];

window.GRAPH_SOURCE_LIST_URL = "http://localhost:8080/api/graph-json/versions";
```

注意：如果前端是通过 `file://` 打开的，而 `/versions` 返回相对 URL：

```json
"/api/graph-json/rtos-next"
```

浏览器无法自动知道这是 `http://localhost:8080`。这种情况下建议：

1. 本地联调优先使用“方式一”，直接写绝对 URL。
2. 或调整后端 `/versions` 返回绝对 URL。
3. 或通过静态 Web 服务部署前端，使前后端处于同源或由代理转发。

## 9. 验证同版本替换和假删

再次调用录入接口，使用相同：

```json
"versionCode": "rtos-next"
```

但传入一份新 JSON。

预期：

- 旧记录被更新为 `del_flag = 1`。
- 新记录插入为 `del_flag = 0`。
- Redis 缓存被清理。
- 刷新前端后看到新 JSON 渲染结果。

数据库检查：

```sql
SELECT id, version_code, version_name, del_flag, created_at, updated_at
FROM graph_json_config
WHERE version_code = 'rtos-next'
ORDER BY id DESC;
```

应只有最新一条记录 `del_flag = 0`。

## 10. Redis 缓存验证

默认缓存 key：

```text
graph:versions
graph:json:{versionCode}
```

例如：

```text
graph:json:rtos-next
```

录入新 JSON 后，服务会删除：

```text
graph:versions
graph:json:rtos-next
```

下一次读取会回源 MySQL，并重新写入 Redis。

## 11. 常见问题

### 前端下拉框有版本，但图谱不显示

检查：

- `url` 是否是完整可访问地址。
- 如果通过 `file://` 打开前端，建议使用绝对 URL。
- 浏览器控制台是否有 CORS 报错。
- `GET /api/graph-json/{versionCode}` 是否直接返回完整图谱 JSON。

### POST 录入失败

检查返回的错误信息。常见原因：

- JSON 结构不符合 `graph.schema.json`。
- 第四层模块不是 4 个。
- 某条边引用了不存在的节点。
- 某个可点击节点缺少 `asset`。
- `asset.dependencies`、`asset.stages` 中出现空字符串。

### Redis 未启动

如果 `graph.cache.enabled=true`，建议启动 Redis。

临时联调也可以关闭缓存：

```yaml
graph:
  cache:
    enabled: false
```

### MySQL 5.7 建表失败

确认 MySQL 版本支持生成列。当前 SQL 使用：

```sql
active_version_code VARCHAR(64)
  GENERATED ALWAYS AS (CASE WHEN del_flag = 0 THEN version_code ELSE NULL END) VIRTUAL
```

这是为了保证同一个 `version_code` 只有一条有效记录。

## 12. 推荐联调顺序

```text
1. 初始化 MySQL
2. 启动 Redis
3. 启动后端
4. POST 录入 graph-data.json
5. GET /api/graph-json/versions
6. GET /api/graph-json/rtos-next
7. 前端 graph-config.js 写绝对 URL
8. 刷新前端页面验证渲染
9. 再次 POST 同 versionCode 验证假删替换
10. 如有需要，再启用动态版本下拉框
```
