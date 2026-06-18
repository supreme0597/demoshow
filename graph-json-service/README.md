# Graph JSON Service

Java 11 + Spring Boot 2.7 + MySQL 5.7 + Redis 的图谱 JSON 配置服务。

服务职责很窄：

- 数据生产方录入完整图谱 JSON。
- 同一版本重复录入时，旧 JSON 假删，新 JSON 生效。
- 前端读取版本下拉框。
- 前端按版本读取当前有效 JSON。

前后端本地联调步骤见：

```text
FRONTEND_BACKEND_DEBUG_GUIDE.md
```

## 1. 技术栈

- Java 11
- Spring Boot 2.7.x
- MyBatis
- MySQL 5.7
- Redis
- Hibernate Validator
- NetworkNT JSON Schema Validator
- Jackson

## 2. 数据库初始化

先创建数据库：

```sql
CREATE DATABASE graph_demo DEFAULT CHARSET utf8mb4 COLLATE utf8mb4_general_ci;
```

再执行：

```text
src/main/resources/db/schema.sql
```

表中使用 `del_flag` 做假删：

- `0`：当前有效
- `1`：已废弃

同一个 `version_code` 只允许存在一条 `del_flag = 0` 的有效记录。SQL 中通过 MySQL 5.7 生成列 `active_version_code` 和唯一索引保证这一点。

## 3. 配置

修改 `src/main/resources/application.yml`：

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

Redis 是缓存层，不是数据源。Redis 短暂不可用时，服务会回源 MySQL。

## 4. 接口

### 4.1 录入 JSON

```http
POST /api/graph-json
Content-Type: application/json
```

请求体：

```json
{
  "versionCode": "rtos-next",
  "versionName": "RTOS NEXT",
  "operator": "system",
  "graphJson": {
    "meta": {},
    "layout": {},
    "overview": {},
    "layers": [],
    "nodes": [],
    "modules": [],
    "edges": [],
    "stageParabolas": []
  }
}
```

处理逻辑：

1. Hibernate Validator 校验 `versionCode/versionName/graphJson`。
2. NetworkNT JSON Schema Validator 校验图谱 JSON 结构。
3. 业务校验器校验 id 唯一、边端点存在、模块数量、资产字段完整等规则。
4. 同版本旧记录 `del_flag` 更新为 `1`。
5. 插入新记录，`del_flag = 0`。
6. 删除 Redis 缓存。

响应：

```json
{
  "success": true,
  "data": {
    "versionCode": "rtos-next"
  }
}
```

### 4.2 查询版本下拉框

```http
GET /api/graph-json/versions
```

响应：

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

### 4.3 按版本读取 JSON

```http
GET /api/graph-json/{versionCode}
```

响应直接返回完整图谱 JSON，便于当前前端直接消费。

## 5. 前端接入

如果版本列表由后端动态提供，前端可以先请求：

```http
GET /api/graph-json/versions
```

当前前端页面也支持动态版本列表。在 `graph-config.js` 中配置：

```js
window.GRAPH_SOURCE_LIST_URL = "/api/graph-json/versions";
```

页面会优先请求该接口生成右上角版本下拉框；如果接口失败，则回退到 `window.GRAPH_DATA_SOURCES` 静态配置。

如果仍使用静态配置，则修改前端 `graph-config.js`：

```js
window.GRAPH_DATA_SOURCES = [
  {
    id: "rtos-next",
    label: "RTOS NEXT",
    url: "/api/graph-json/rtos-next"
  }
];
```

## 6. 校验范围

后端保存前会校验：

- 固定 5 层。
- 第四层固定 4 个模块。
- 所有节点、模块、模块内部节点 id 全局唯一。
- 所有 `edges.from/to` 都能找到对应 id。
- 所有 `stageParabolas.from/through/to` 都能找到对应 id。
- 所有可点击项都有完整 `asset` 字段。
- `asset.type` 属于：`Skill/MCP/工具/规约/数据资产/测试集/其他`。
- `asset.stages` 属于：`理解/规划/执行/验证/常驻`。
- `dependencies/stages/links` 不允许出现空字符串。

## 7. 构建运行

```bash
mvn clean package
java -jar target/graph-json-service-1.0.0.jar
```

当前 Codex 工作区未安装 Java/Maven，因此本地未执行编译验证。
