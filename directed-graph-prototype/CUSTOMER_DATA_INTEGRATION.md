# 图谱 JSON 数据对接说明

本文档面向数据生产方。页面只负责读取 JSON 并渲染图谱，不提供在线编辑能力。客户系统需要按本文档生成 JSON，并通过静态文件或 API 返回给前端页面。

## 1. 接入方式

页面右上角版本下拉框由 `graph-config.js` 控制。交付后如需改为 API 读取，只需要修改该文件，不需要改 `index.html`。

```js
window.GRAPH_DATA_SOURCES = [
  {
    id: "rtos-next",
    label: "RTOS NEXT",
    url: "/api/graph/rtos-next"
  },
  {
    id: "mock",
    label: "Mock 数据 Demo",
    url: "/api/graph/mock"
  }
];
```

字段说明：

| 字段 | 必填 | 说明 |
|---|---:|---|
| `id` | 是 | 版本唯一标识，用于下拉框取值 |
| `label` | 是 | 下拉框显示文案 |
| `url` | 是 | JSON 静态文件或 API 地址 |
| `method` | 否 | 默认 `GET` |
| `headers` | 否 | API 请求头，例如鉴权 token |
| `credentials` | 否 | 默认 `same-origin` |
| `body` | 否 | POST 请求体；页面会自动 `JSON.stringify` |
| `fallbackKey` | 否 | 本地 Demo fallback 变量名，正式 API 可不传 |

页面支持以下 API 返回格式：

```json
{ "...": "直接返回图谱 JSON" }
```

```json
{ "data": { "...": "图谱 JSON" } }
```

```json
{ "graph": { "...": "图谱 JSON" } }
```

```json
{ "data": { "graph": { "...": "图谱 JSON" } } }
```

正式环境请确保 API 支持浏览器跨域策略，或与页面部署在同源域名下。

## 2. 数据文件定位

当前交付包中可能同时存在 `.json` 和 `.fallback.js` 两类数据文件，它们的用途不同：

| 文件 | 用途 | 是否正式数据契约 |
|---|---|---:|
| `graph-data.json` | 标准 JSON 模板、API 响应示例、客户生成数据的参考结构 | 是 |
| `graph-data.mock.json` | Mock 版本 JSON 模板，用于演示版本切换 | 是 |
| `graph-data.fallback.js` | 本地 `file://` 双击打开 HTML 时的兜底演示数据 | 否 |
| `graph-data.mock.fallback.js` | Mock 版本的本地兜底演示数据 | 否 |

为什么保留 `.json`：

- `.json` 是正式数据模板，更适合作为客户系统生成数据的目标格式。
- API 后续返回的是 JSON body，`.json` 文件最接近真实接口响应。
- `.json` 可以直接用于后端生成、接口联调、Postman 调试、Schema 校验和自动化测试。
- 如果页面通过 `localhost` 或静态 Web 服务访问，`fetch("graph-data.json")` 可以正常读取。

为什么还有 `.fallback.js`：

- 浏览器直接通过 `file://` 打开 HTML 时，`fetch("graph-data.json")` 可能因本地文件策略失败。
- `<script src="graph-data.fallback.js">` 不受这个限制，因此可用于离线演示和双击预览。
- `.fallback.js` 本质上只是把 JSON 包成 `window.FALLBACK_GRAPH_DATA = ...`，不建议作为正式数据接口格式。

推荐交付策略：

- 面向客户数据对接时，以 `.json` 和 API 返回格式为准。
- 如果只通过 API 读取，`.fallback.js` 可以不进入正式部署包。
- 如果希望客户离线双击 HTML 也能看到 Demo，则保留 `.fallback.js`。
- 最小正式包建议包含：`index.html`、`graph-config.js`、`CUSTOMER_DATA_INTEGRATION.md`、`graph-data.json`。
- 离线演示包可额外包含：`graph-data.fallback.js`、`graph-data.mock.json`、`graph-data.mock.fallback.js`。

## 3. JSON 顶层结构

完整 JSON 建议包含以下字段：

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

字段说明：

| 字段 | 必填 | 说明 |
|---|---:|---|
| `meta` | 否 | 标题、版本等元信息 |
| `layout` | 是 | 布局和主题配置 |
| `overview` | 否 | 页面顶部独立方向图 |
| `layers` | 是 | 五层定义 |
| `nodes` | 是 | 第一、二、三、五层节点 |
| `modules` | 是 | 第四层四个子容器及其内部节点 |
| `edges` | 是 | 普通箭头关系 |
| `stageParabolas` | 是 | 第一层经第四层标题到第一层下一个节点的抛物线箭头 |

## 4. 固定布局约束

当前页面按固定五层纵向布局渲染：

1. 第一层：阶段输出件
2. 第二层：审核门禁
3. 第三层：规范资产
4. 第四层：能力资产，固定横向四个子容器
5. 第五层：数据资产

约束：

- 第一层建议保持 5 个节点。
- 第四层建议保持 4 个子容器，按 `order` 从左到右渲染。
- 第五层节点数量可调整，但需要同步设置 `layer.outputs.slots`。
- 所有 `id` 必须全局唯一。
- 所有 `edges.from` / `edges.to` 必须能匹配某个 `nodes.id`、`modules.id` 或第四层内部节点 `id`。
- 第四层容器本身可以参与连线，使用 `modules.id`。

## 5. 节点数据

第一、二、三、五层节点写在 `nodes` 中：

```json
{
  "id": "top.requirement_spec",
  "label": "需求规格说明书",
  "layer": "layer.top",
  "slot": 2,
  "icon": "document",
  "asset": {}
}
```

字段说明：

| 字段 | 必填 | 说明 |
|---|---:|---|
| `id` | 是 | 节点唯一标识 |
| `label` | 是 | 页面显示文案 |
| `layer` | 是 | 所属层 ID |
| `slot` | 是 | 在该层中的位置，从 1 开始 |
| `icon` | 否 | 仅第一层使用：`radar`、`document`、`blueprint`、`code`、`merge` |
| `asset` | 是 | 点击弹窗展示的资产详情 |

## 6. 第四层模块

第四层模块写在 `modules` 中：

```json
{
  "id": "module.plan",
  "label": "规划",
  "layer": "layer.modules",
  "order": 2,
  "grid": { "rows": 4, "cols": 3 },
  "nodes": [
    {
      "id": "plan.solution_design",
      "label": "方案设计",
      "row": 1,
      "col": 1,
      "asset": {}
    }
  ],
  "asset": {}
}
```

模块字段说明：

| 字段 | 必填 | 说明 |
|---|---:|---|
| `id` | 是 | 模块容器唯一标识 |
| `label` | 是 | 模块标题 |
| `layer` | 是 | 固定为 `layer.modules` |
| `order` | 是 | 从左到右排序 |
| `grid.rows` / `grid.cols` | 是 | 模块内部网格尺寸 |
| `nodes` | 是 | 模块内部文本节点 |
| `asset` | 是 | 点击模块容器时展示的资产详情 |

模块内部节点字段说明：

| 字段 | 必填 | 说明 |
|---|---:|---|
| `id` | 是 | 内部节点唯一标识 |
| `label` | 是 | 显示文案 |
| `row` | 是 | 所在网格行 |
| `col` | 是 | 所在网格列 |
| `loop` | 否 | `true` 表示自循环节点，会绘制闭合 loop 箭头 |
| `asset` | 是 | 点击节点时展示的资产详情 |

## 7. 资产弹窗字段

每个可点击节点都必须提供 `asset`。页面弹窗只读取 JSON 中的 `asset` 字段，不再自动推断。

```json
{
  "asset": {
    "name": "方案设计",
    "type": "Skill",
    "dependencies": ["需求规格说明书"],
    "links": [
      {
        "label": "资产文档",
        "url": "https://example.com/docs/plan.solution_design"
      }
    ],
    "stages": ["规划"],
    "effect": "支撑规划阶段的方案生成和设计沉淀。",
    "implemented": true,
    "note": "可替换为真实说明。"
  }
}
```

字段说明：

| 字段 | 必填 | 说明 |
|---|---:|---|
| `name` | 是 | 资产名 |
| `type` | 是 | 枚举：`Skill`、`MCP`、`工具`、`规约`、`数据资产`、`测试集`、`其他` |
| `dependencies` | 是 | 依赖资产名数组；无依赖传空数组 `[]` |
| `links` | 是 | 链接数组；无链接传空数组 `[]` |
| `links[].label` | 是 | 链接显示名 |
| `links[].url` | 是 | 可点击 URL |
| `stages` | 是 | 使用阶段数组：`理解`、`规划`、`执行`、`验证`、`常驻` |
| `effect` | 是 | 作用和效果 |
| `implemented` | 是 | 布尔值。`true` 显示绿色，`false` 显示灰色 |
| `note` | 是 | 备注 |

空值规则：

- `dependencies`、`links`、`stages` 没有内容时传 `[]`。
- 不要传 `[""]`，页面会过滤空字符串并显示 `-`。
- 文本字段没有内容时建议传 `"-"`。

## 8. 箭头关系

普通边写在 `edges` 中：

```json
{
  "id": "e.plan-solution-impact",
  "from": "plan.solution_design",
  "to": "plan.impact_analysis",
  "color": "#5f676d",
  "direction": "down"
}
```

字段说明：

| 字段 | 必填 | 说明 |
|---|---:|---|
| `id` | 是 | 边唯一标识 |
| `from` | 是 | 起点 ID |
| `to` | 是 | 终点 ID |
| `color` | 否 | 线条颜色 |
| `direction` | 否 | 方向提示：`up`、`down`、`left`、`right`、`down-left`、`down-right` 等 |

约定：

- 第四层到第五层的数据资产箭头建议使用 `id` 前缀 `e.asset-`，页面会按直线箭头绘制。
- 第四层内部关系可使用普通边，页面会自动按方向提示绘制曲线。
- 第四层模块容器也可以作为 `from` 或 `to`。

## 9. 第一层抛物线关系

第一层到第四层标题再回到第一层下一个节点的关系写在 `stageParabolas` 中：

```json
{
  "id": "stage.requirement-to-design",
  "from": "top.requirement_spec",
  "through": "module.plan",
  "to": "top.design_spec"
}
```

字段说明：

| 字段 | 必填 | 说明 |
|---|---:|---|
| `id` | 是 | 关系唯一标识 |
| `from` | 是 | 第一层起点节点 ID |
| `through` | 是 | 第四层模块 ID，箭头顶点会穿过模块标题 |
| `to` | 是 | 第一层终点节点 ID |

## 10. 交付校验清单

数据生成后请检查：

- JSON 能被浏览器正常解析。
- `layers` 保持 5 层，`order` 为 1 到 5。
- 所有 `id` 全局唯一。
- 所有 `edges.from`、`edges.to`、`stageParabolas.from`、`stageParabolas.through`、`stageParabolas.to` 都能找到对应节点或模块。
- 第四层模块数量为 4，并且 `order` 连续。
- 所有可点击项都包含完整 `asset` 字段。
- `asset.type` 和 `asset.stages` 使用约定枚举值。
- 空数组使用 `[]`，不要使用 `[""]`。
- API 返回格式为页面支持的图谱 JSON 或包装格式。
