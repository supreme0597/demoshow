window.MOCK_GRAPH_DATA = {
    "meta":  {
                 "title":  "software-engineering-agent-mock-demo",
                 "version":  "1.1.0-mock"
             },
    "layout":  {
                   "type":  "fixed-vertical-layers",
                   "layerCount":  5,
                   "moduleRowWrap":  false,
                   "edgeRouting":  "auto",
                   "theme":  {
                                 "defaultEdgeColor":  "#5f676d",
                                 "emphasisEdgeColor":  "#57bd84",
                                 "layerBorderColor":  "#27336b",
                                 "nodeBorderColor":  "#1b1b1b"
                             }
               },
    "overview":  {
                     "nodes":  [
                                   {
                                       "id":  "overview.requirement_alignment",
                                       "label":  "需求对齐",
                                       "asset":  {
                                                     "name":  "需求对齐",
                                                     "type":  "其他",
                                                     "dependencies":  [

                                                                      ],
                                                     "links":  [
                                                                   {
                                                                       "label":  "资产文档",
                                                                       "url":  "https://example.com/docs/overview.requirement_alignment"
                                                                   },
                                                                   {
                                                                       "label":  "代码仓库",
                                                                       "url":  "https://example.com/repos/overview.requirement_alignment"
                                                                   }
                                                               ],
                                                     "stages":  [
                                                                    "常驻"
                                                                ],
                                                     "effect":  "需求对齐 用于表达全局研发方向中的关键活动。",
                                                     "implemented":  true,
                                                     "note":  "顶部方向图节点，独立于五层资产结构。"
                                                 }
                                   },
                                   {
                                       "id":  "overview.solution_design",
                                       "label":  "方案设计",
                                       "asset":  {
                                                     "name":  "方案设计",
                                                     "type":  "其他",
                                                     "dependencies":  [

                                                                      ],
                                                     "links":  [
                                                                   {
                                                                       "label":  "资产文档",
                                                                       "url":  "https://example.com/docs/overview.solution_design"
                                                                   },
                                                                   {
                                                                       "label":  "代码仓库",
                                                                       "url":  "https://example.com/repos/overview.solution_design"
                                                                   }
                                                               ],
                                                     "stages":  [
                                                                    "常驻"
                                                                ],
                                                     "effect":  "方案设计 用于表达全局研发方向中的关键活动。",
                                                     "implemented":  true,
                                                     "note":  "顶部方向图节点，独立于五层资产结构。"
                                                 }
                                   },
                                   {
                                       "id":  "overview.coding",
                                       "label":  "编码实现",
                                       "asset":  {
                                                     "name":  "编码实现",
                                                     "type":  "其他",
                                                     "dependencies":  [

                                                                      ],
                                                     "links":  [
                                                                   {
                                                                       "label":  "资产文档",
                                                                       "url":  "https://example.com/docs/overview.coding"
                                                                   },
                                                                   {
                                                                       "label":  "代码仓库",
                                                                       "url":  "https://example.com/repos/overview.coding"
                                                                   }
                                                               ],
                                                     "stages":  [
                                                                    "常驻"
                                                                ],
                                                     "effect":  "编码实现 用于表达全局研发方向中的关键活动。",
                                                     "implemented":  true,
                                                     "note":  "顶部方向图节点，独立于五层资产结构。"
                                                 }
                                   },
                                   {
                                       "id":  "overview.issue_convergence",
                                       "label":  "问题收敛",
                                       "asset":  {
                                                     "name":  "问题收敛",
                                                     "type":  "其他",
                                                     "dependencies":  [

                                                                      ],
                                                     "links":  [
                                                                   {
                                                                       "label":  "资产文档",
                                                                       "url":  "https://example.com/docs/overview.issue_convergence"
                                                                   },
                                                                   {
                                                                       "label":  "代码仓库",
                                                                       "url":  "https://example.com/repos/overview.issue_convergence"
                                                                   }
                                                               ],
                                                     "stages":  [
                                                                    "常驻"
                                                                ],
                                                     "effect":  "问题收敛 用于表达全局研发方向中的关键活动。",
                                                     "implemented":  true,
                                                     "note":  "顶部方向图节点，独立于五层资产结构。"
                                                 }
                                   }
                               ]
                 },
    "layers":  [
                   {
                       "id":  "layer.top",
                       "label":  "阶段输出件",
                       "order":  1,
                       "kind":  "ellipse-row",
                       "frame":  false,
                       "slots":  5,
                       "nodeDefaults":  {
                                            "shape":  "ellipse",
                                            "size":  "large"
                                        }
                   },
                   {
                       "id":  "layer.inputs",
                       "label":  "审核门禁",
                       "order":  2,
                       "kind":  "rect-row",
                       "frame":  true,
                       "slots":  5,
                       "nodeDefaults":  {
                                            "shape":  "rect",
                                            "size":  "small"
                                        }
                   },
                   {
                       "id":  "layer.context",
                       "label":  "规范资产\n（常驻会话）",
                       "order":  3,
                       "kind":  "rect-row",
                       "frame":  true,
                       "slots":  3,
                       "nodeDefaults":  {
                                            "shape":  "rect",
                                            "size":  "medium"
                                        }
                   },
                   {
                       "id":  "layer.modules",
                       "label":  "能力资产\n（阶段触发）",
                       "order":  4,
                       "kind":  "module-row",
                       "frame":  true,
                       "wrap":  false,
                       "nodeDefaults":  {
                                            "shape":  "text"
                                        },
                       "frameTitle":  "r2c-pipeline"
                   },
                   {
                       "id":  "layer.outputs",
                       "label":  "数据资产\n（按需查询）",
                       "order":  5,
                       "kind":  "result-row",
                       "frame":  true,
                       "slots":  8,
                       "nodeDefaults":  {
                                            "shape":  "rect",
                                            "size":  "medium"
                                        }
                   }
               ],
    "nodes":  [
                  {
                      "id":  "top.ar",
                      "label":  "AR",
                      "layer":  "layer.top",
                      "slot":  1,
                      "icon":  "radar",
                      "asset":  {
                                    "name":  "AR",
                                    "type":  "其他",
                                    "dependencies":  [

                                                     ],
                                    "links":  [
                                                  {
                                                      "label":  "资产文档",
                                                      "url":  "https://example.com/docs/top.ar"
                                                  },
                                                  {
                                                      "label":  "代码仓库",
                                                      "url":  "https://example.com/repos/top.ar"
                                                  }
                                              ],
                                    "stages":  [
                                                   "常驻"
                                               ],
                                    "effect":  "AR 作为其他 参与常驻阶段，提供资产输入、结果沉淀或质量约束。",
                                    "implemented":  true,
                                    "note":  "该资产详情由 JSON 中的 asset 字段直接驱动。"
                                }
                  },
                  {
                      "id":  "top.requirement_spec",
                      "label":  "需求规格说明书",
                      "layer":  "layer.top",
                      "slot":  2,
                      "icon":  "document",
                      "asset":  {
                                    "name":  "需求规格说明书",
                                    "type":  "其他",
                                    "dependencies":  [
                                                         "AR"
                                                     ],
                                    "links":  [
                                                  {
                                                      "label":  "资产文档",
                                                      "url":  "https://example.com/docs/top.requirement_spec"
                                                  },
                                                  {
                                                      "label":  "代码仓库",
                                                      "url":  "https://example.com/repos/top.requirement_spec"
                                                  }
                                              ],
                                    "stages":  [
                                                   "常驻"
                                               ],
                                    "effect":  "需求规格说明书 作为其他 参与常驻阶段，提供资产输入、结果沉淀或质量约束。",
                                    "implemented":  true,
                                    "note":  "该资产详情由 JSON 中的 asset 字段直接驱动。"
                                }
                  },
                  {
                      "id":  "top.design_spec",
                      "label":  "软件实现设计说明书",
                      "layer":  "layer.top",
                      "slot":  3,
                      "icon":  "blueprint",
                      "asset":  {
                                    "name":  "软件实现设计说明书",
                                    "type":  "其他",
                                    "dependencies":  [
                                                         "需求规格说明书"
                                                     ],
                                    "links":  [
                                                  {
                                                      "label":  "资产文档",
                                                      "url":  "https://example.com/docs/top.design_spec"
                                                  },
                                                  {
                                                      "label":  "代码仓库",
                                                      "url":  "https://example.com/repos/top.design_spec"
                                                  }
                                              ],
                                    "stages":  [
                                                   "常驻"
                                               ],
                                    "effect":  "软件实现设计说明书 作为其他 参与常驻阶段，提供资产输入、结果沉淀或质量约束。",
                                    "implemented":  true,
                                    "note":  "该资产详情由 JSON 中的 asset 字段直接驱动。"
                                }
                  },
                  {
                      "id":  "top.initial_code",
                      "label":  "初始代码",
                      "layer":  "layer.top",
                      "slot":  4,
                      "icon":  "code",
                      "asset":  {
                                    "name":  "初始代码",
                                    "type":  "其他",
                                    "dependencies":  [
                                                         "软件实现设计说明书"
                                                     ],
                                    "links":  [
                                                  {
                                                      "label":  "资产文档",
                                                      "url":  "https://example.com/docs/top.initial_code"
                                                  },
                                                  {
                                                      "label":  "代码仓库",
                                                      "url":  "https://example.com/repos/top.initial_code"
                                                  }
                                              ],
                                    "stages":  [
                                                   "常驻"
                                               ],
                                    "effect":  "初始代码 作为其他 参与常驻阶段，提供资产输入、结果沉淀或质量约束。",
                                    "implemented":  true,
                                    "note":  "该资产详情由 JSON 中的 asset 字段直接驱动。"
                                }
                  },
                  {
                      "id":  "top.mr",
                      "label":  "MR",
                      "layer":  "layer.top",
                      "slot":  5,
                      "icon":  "merge",
                      "asset":  {
                                    "name":  "MR",
                                    "type":  "其他",
                                    "dependencies":  [
                                                         "初始代码"
                                                     ],
                                    "links":  [
                                                  {
                                                      "label":  "资产文档",
                                                      "url":  "https://example.com/docs/top.mr"
                                                  },
                                                  {
                                                      "label":  "代码仓库",
                                                      "url":  "https://example.com/repos/top.mr"
                                                  }
                                              ],
                                    "stages":  [
                                                   "常驻"
                                               ],
                                    "effect":  "MR 作为其他 参与常驻阶段，提供资产输入、结果沉淀或质量约束。",
                                    "implemented":  true,
                                    "note":  "该资产详情由 JSON 中的 asset 字段直接驱动。"
                                }
                  },
                  {
                      "id":  "gate.raw_input",
                      "label":  "原始输入",
                      "layer":  "layer.inputs",
                      "slot":  1,
                      "asset":  {
                                    "name":  "原始输入",
                                    "type":  "测试集",
                                    "dependencies":  [

                                                     ],
                                    "links":  [
                                                  {
                                                      "label":  "资产文档",
                                                      "url":  "https://example.com/docs/gate.raw_input"
                                                  },
                                                  {
                                                      "label":  "代码仓库",
                                                      "url":  "https://example.com/repos/gate.raw_input"
                                                  }
                                              ],
                                    "stages":  [
                                                   "常驻"
                                               ],
                                    "effect":  "原始输入 作为测试集 参与常驻阶段，提供资产输入、结果沉淀或质量约束。",
                                    "implemented":  true,
                                    "note":  "该资产详情由 JSON 中的 asset 字段直接驱动。"
                                }
                  },
                  {
                      "id":  "gate.review_req",
                      "label":  "人工审核修正",
                      "layer":  "layer.inputs",
                      "slot":  2,
                      "asset":  {
                                    "name":  "人工审核修正",
                                    "type":  "测试集",
                                    "dependencies":  [

                                                     ],
                                    "links":  [
                                                  {
                                                      "label":  "资产文档",
                                                      "url":  "https://example.com/docs/gate.review_req"
                                                  },
                                                  {
                                                      "label":  "代码仓库",
                                                      "url":  "https://example.com/repos/gate.review_req"
                                                  }
                                              ],
                                    "stages":  [
                                                   "常驻"
                                               ],
                                    "effect":  "人工审核修正 作为测试集 参与常驻阶段，提供资产输入、结果沉淀或质量约束。",
                                    "implemented":  true,
                                    "note":  "该资产详情由 JSON 中的 asset 字段直接驱动。"
                                }
                  },
                  {
                      "id":  "gate.review_design",
                      "label":  "人工审核修正",
                      "layer":  "layer.inputs",
                      "slot":  3,
                      "asset":  {
                                    "name":  "人工审核修正",
                                    "type":  "测试集",
                                    "dependencies":  [

                                                     ],
                                    "links":  [
                                                  {
                                                      "label":  "资产文档",
                                                      "url":  "https://example.com/docs/gate.review_design"
                                                  },
                                                  {
                                                      "label":  "代码仓库",
                                                      "url":  "https://example.com/repos/gate.review_design"
                                                  }
                                              ],
                                    "stages":  [
                                                   "常驻"
                                               ],
                                    "effect":  "人工审核修正 作为测试集 参与常驻阶段，提供资产输入、结果沉淀或质量约束。",
                                    "implemented":  true,
                                    "note":  "该资产详情由 JSON 中的 asset 字段直接驱动。"
                                }
                  },
                  {
                      "id":  "gate.review_code",
                      "label":  "人工审核修正",
                      "layer":  "layer.inputs",
                      "slot":  4,
                      "asset":  {
                                    "name":  "人工审核修正",
                                    "type":  "测试集",
                                    "dependencies":  [

                                                     ],
                                    "links":  [
                                                  {
                                                      "label":  "资产文档",
                                                      "url":  "https://example.com/docs/gate.review_code"
                                                  },
                                                  {
                                                      "label":  "代码仓库",
                                                      "url":  "https://example.com/repos/gate.review_code"
                                                  }
                                              ],
                                    "stages":  [
                                                   "常驻"
                                               ],
                                    "effect":  "人工审核修正 作为测试集 参与常驻阶段，提供资产输入、结果沉淀或质量约束。",
                                    "implemented":  true,
                                    "note":  "该资产详情由 JSON 中的 asset 字段直接驱动。"
                                }
                  },
                  {
                      "id":  "gate.manual_fallback",
                      "label":  "人工检视兜底",
                      "layer":  "layer.inputs",
                      "slot":  5,
                      "asset":  {
                                    "name":  "人工检视兜底",
                                    "type":  "测试集",
                                    "dependencies":  [

                                                     ],
                                    "links":  [
                                                  {
                                                      "label":  "资产文档",
                                                      "url":  "https://example.com/docs/gate.manual_fallback"
                                                  },
                                                  {
                                                      "label":  "代码仓库",
                                                      "url":  "https://example.com/repos/gate.manual_fallback"
                                                  }
                                              ],
                                    "stages":  [
                                                   "常驻"
                                               ],
                                    "effect":  "人工检视兜底 作为测试集 参与常驻阶段，提供资产输入、结果沉淀或质量约束。",
                                    "implemented":  true,
                                    "note":  "该资产详情由 JSON 中的 asset 字段直接驱动。"
                                }
                  },
                  {
                      "id":  "context.global_rule",
                      "label":  "全局规约",
                      "layer":  "layer.context",
                      "slot":  1,
                      "asset":  {
                                    "name":  "全局规约",
                                    "type":  "规约",
                                    "dependencies":  [

                                                     ],
                                    "links":  [
                                                  {
                                                      "label":  "资产文档",
                                                      "url":  "https://example.com/docs/context.global_rule"
                                                  },
                                                  {
                                                      "label":  "代码仓库",
                                                      "url":  "https://example.com/repos/context.global_rule"
                                                  }
                                              ],
                                    "stages":  [
                                                   "常驻"
                                               ],
                                    "effect":  "全局规约 作为规约 参与常驻阶段，提供资产输入、结果沉淀或质量约束。",
                                    "implemented":  true,
                                    "note":  "该资产详情由 JSON 中的 asset 字段直接驱动。"
                                }
                  },
                  {
                      "id":  "context.version_rule",
                      "label":  "版本规约",
                      "layer":  "layer.context",
                      "slot":  2,
                      "asset":  {
                                    "name":  "版本规约",
                                    "type":  "规约",
                                    "dependencies":  [

                                                     ],
                                    "links":  [
                                                  {
                                                      "label":  "资产文档",
                                                      "url":  "https://example.com/docs/context.version_rule"
                                                  },
                                                  {
                                                      "label":  "代码仓库",
                                                      "url":  "https://example.com/repos/context.version_rule"
                                                  }
                                              ],
                                    "stages":  [
                                                   "常驻"
                                               ],
                                    "effect":  "版本规约 作为规约 参与常驻阶段，提供资产输入、结果沉淀或质量约束。",
                                    "implemented":  true,
                                    "note":  "该资产详情由 JSON 中的 asset 字段直接驱动。"
                                }
                  },
                  {
                      "id":  "context.repo_rule",
                      "label":  "仓级规约",
                      "layer":  "layer.context",
                      "slot":  3,
                      "asset":  {
                                    "name":  "仓级规约",
                                    "type":  "规约",
                                    "dependencies":  [

                                                     ],
                                    "links":  [
                                                  {
                                                      "label":  "资产文档",
                                                      "url":  "https://example.com/docs/context.repo_rule"
                                                  },
                                                  {
                                                      "label":  "代码仓库",
                                                      "url":  "https://example.com/repos/context.repo_rule"
                                                  }
                                              ],
                                    "stages":  [
                                                   "常驻"
                                               ],
                                    "effect":  "仓级规约 作为规约 参与常驻阶段，提供资产输入、结果沉淀或质量约束。",
                                    "implemented":  true,
                                    "note":  "该资产详情由 JSON 中的 asset 字段直接驱动。"
                                }
                  },
                  {
                      "id":  "output.requirement_profile",
                      "label":  "需求画像库",
                      "layer":  "layer.outputs",
                      "slot":  1,
                      "asset":  {
                                    "name":  "需求画像库",
                                    "type":  "数据资产",
                                    "dependencies":  [
                                                         "需求聚类"
                                                     ],
                                    "links":  [
                                                  {
                                                      "label":  "资产文档",
                                                      "url":  "https://example.com/docs/output.requirement_profile"
                                                  },
                                                  {
                                                      "label":  "代码仓库",
                                                      "url":  "https://example.com/repos/output.requirement_profile"
                                                  }
                                              ],
                                    "stages":  [
                                                   "理解",
                                                   "规划",
                                                   "执行",
                                                   "验证"
                                               ],
                                    "effect":  "需求画像库 作为数据资产 参与理解、规划、执行、验证阶段，提供资产输入、结果沉淀或质量约束。",
                                    "implemented":  true,
                                    "note":  "第五层数据资产，可由第四层能力节点按需查询或沉淀。"
                                }
                  },
                  {
                      "id":  "output.solution_template",
                      "label":  "方案模板库",
                      "layer":  "layer.outputs",
                      "slot":  2,
                      "asset":  {
                                    "name":  "方案模板库",
                                    "type":  "数据资产",
                                    "dependencies":  [
                                                         "知识缺口",
                                                         "方案比选"
                                                     ],
                                    "links":  [
                                                  {
                                                      "label":  "资产文档",
                                                      "url":  "https://example.com/docs/output.solution_template"
                                                  },
                                                  {
                                                      "label":  "代码仓库",
                                                      "url":  "https://example.com/repos/output.solution_template"
                                                  }
                                              ],
                                    "stages":  [
                                                   "理解",
                                                   "规划",
                                                   "执行",
                                                   "验证"
                                               ],
                                    "effect":  "方案模板库 作为数据资产 参与理解、规划、执行、验证阶段，提供资产输入、结果沉淀或质量约束。",
                                    "implemented":  true,
                                    "note":  "第五层数据资产，可由第四层能力节点按需查询或沉淀。"
                                }
                  },
                  {
                      "id":  "output.component_asset",
                      "label":  "组件资产库",
                      "layer":  "layer.outputs",
                      "slot":  3,
                      "asset":  {
                                    "name":  "组件资产库",
                                    "type":  "数据资产",
                                    "dependencies":  [
                                                         "发布切片",
                                                         "补丁生成"
                                                     ],
                                    "links":  [
                                                  {
                                                      "label":  "资产文档",
                                                      "url":  "https://example.com/docs/output.component_asset"
                                                  },
                                                  {
                                                      "label":  "代码仓库",
                                                      "url":  "https://example.com/repos/output.component_asset"
                                                  }
                                              ],
                                    "stages":  [
                                                   "理解",
                                                   "规划",
                                                   "执行",
                                                   "验证"
                                               ],
                                    "effect":  "组件资产库 作为数据资产 参与理解、规划、执行、验证阶段，提供资产输入、结果沉淀或质量约束。",
                                    "implemented":  true,
                                    "note":  "第五层数据资产，可由第四层能力节点按需查询或沉淀。"
                                }
                  },
                  {
                      "id":  "output.test_case",
                      "label":  "测试用例库",
                      "layer":  "layer.outputs",
                      "slot":  4,
                      "asset":  {
                                    "name":  "测试用例库",
                                    "type":  "数据资产",
                                    "dependencies":  [
                                                         "桩例生成"
                                                     ],
                                    "links":  [
                                                  {
                                                      "label":  "资产文档",
                                                      "url":  "https://example.com/docs/output.test_case"
                                                  },
                                                  {
                                                      "label":  "代码仓库",
                                                      "url":  "https://example.com/repos/output.test_case"
                                                  }
                                              ],
                                    "stages":  [
                                                   "理解",
                                                   "规划",
                                                   "执行",
                                                   "验证"
                                               ],
                                    "effect":  "测试用例库 作为数据资产 参与理解、规划、执行、验证阶段，提供资产输入、结果沉淀或质量约束。",
                                    "implemented":  true,
                                    "note":  "第五层数据资产，可由第四层能力节点按需查询或沉淀。"
                                }
                  },
                  {
                      "id":  "output.quality_rule",
                      "label":  "质量规则库",
                      "layer":  "layer.outputs",
                      "slot":  5,
                      "asset":  {
                                    "name":  "质量规则库",
                                    "type":  "数据资产",
                                    "dependencies":  [
                                                         "验收结论"
                                                     ],
                                    "links":  [
                                                  {
                                                      "label":  "资产文档",
                                                      "url":  "https://example.com/docs/output.quality_rule"
                                                  },
                                                  {
                                                      "label":  "代码仓库",
                                                      "url":  "https://example.com/repos/output.quality_rule"
                                                  }
                                              ],
                                    "stages":  [
                                                   "理解",
                                                   "规划",
                                                   "执行",
                                                   "验证"
                                               ],
                                    "effect":  "质量规则库 作为数据资产 参与理解、规划、执行、验证阶段，提供资产输入、结果沉淀或质量约束。",
                                    "implemented":  true,
                                    "note":  "第五层数据资产，可由第四层能力节点按需查询或沉淀。"
                                }
                  },
                  {
                      "id":  "output.defect_pattern",
                      "label":  "缺陷模式库",
                      "layer":  "layer.outputs",
                      "slot":  6,
                      "asset":  {
                                    "name":  "缺陷模式库",
                                    "type":  "数据资产",
                                    "dependencies":  [
                                                         "重跑验证"
                                                     ],
                                    "links":  [
                                                  {
                                                      "label":  "资产文档",
                                                      "url":  "https://example.com/docs/output.defect_pattern"
                                                  },
                                                  {
                                                      "label":  "代码仓库",
                                                      "url":  "https://example.com/repos/output.defect_pattern"
                                                  }
                                              ],
                                    "stages":  [
                                                   "理解",
                                                   "规划",
                                                   "执行",
                                                   "验证"
                                               ],
                                    "effect":  "缺陷模式库 作为数据资产 参与理解、规划、执行、验证阶段，提供资产输入、结果沉淀或质量约束。",
                                    "implemented":  false,
                                    "note":  "第五层数据资产，可由第四层能力节点按需查询或沉淀。"
                                }
                  },
                  {
                      "id":  "output.interface_contract",
                      "label":  "接口契约库",
                      "layer":  "layer.outputs",
                      "slot":  7,
                      "asset":  {
                                    "name":  "接口契约库",
                                    "type":  "数据资产",
                                    "dependencies":  [
                                                         "同步标记"
                                                     ],
                                    "links":  [
                                                  {
                                                      "label":  "资产文档",
                                                      "url":  "https://example.com/docs/output.interface_contract"
                                                  },
                                                  {
                                                      "label":  "代码仓库",
                                                      "url":  "https://example.com/repos/output.interface_contract"
                                                  }
                                              ],
                                    "stages":  [
                                                   "理解",
                                                   "规划",
                                                   "执行",
                                                   "验证"
                                               ],
                                    "effect":  "接口契约库 作为数据资产 参与理解、规划、执行、验证阶段，提供资产输入、结果沉淀或质量约束。",
                                    "implemented":  true,
                                    "note":  "第五层数据资产，可由第四层能力节点按需查询或沉淀。"
                                }
                  },
                  {
                      "id":  "output.release_knowledge",
                      "label":  "发布知识库",
                      "layer":  "layer.outputs",
                      "slot":  8,
                      "asset":  {
                                    "name":  "发布知识库",
                                    "type":  "数据资产",
                                    "dependencies":  [
                                                         "意图摘要",
                                                         "审计记录"
                                                     ],
                                    "links":  [
                                                  {
                                                      "label":  "资产文档",
                                                      "url":  "https://example.com/docs/output.release_knowledge"
                                                  },
                                                  {
                                                      "label":  "代码仓库",
                                                      "url":  "https://example.com/repos/output.release_knowledge"
                                                  }
                                              ],
                                    "stages":  [
                                                   "理解",
                                                   "规划",
                                                   "执行",
                                                   "验证"
                                               ],
                                    "effect":  "发布知识库 作为数据资产 参与理解、规划、执行、验证阶段，提供资产输入、结果沉淀或质量约束。",
                                    "implemented":  false,
                                    "note":  "第五层数据资产，可由第四层能力节点按需查询或沉淀。"
                                }
                  }
              ],
    "modules":  [
                    {
                        "id":  "module.understand",
                        "label":  "理解",
                        "layer":  "layer.modules",
                        "order":  1,
                        "grid":  {
                                     "rows":  5,
                                     "cols":  3
                                 },
                        "nodes":  [
                                      {
                                          "id":  "understand.requirement_cluster",
                                          "label":  "需求聚类",
                                          "row":  1,
                                          "col":  1,
                                          "asset":  {
                                                        "name":  "需求聚类",
                                                        "type":  "Skill",
                                                        "dependencies":  [
                                                                             "理解"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/understand.requirement_cluster"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/understand.requirement_cluster"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "理解"
                                                                   ],
                                                        "effect":  "需求聚类 支撑 理解 阶段中的局部任务执行、信息转换和结果输出。",
                                                        "implemented":  true,
                                                        "note":  "第四层内部能力资产，详情由 JSON 中的 asset 字段直接驱动。"
                                                    }
                                      },
                                      {
                                          "id":  "understand.scene_match",
                                          "label":  "场景匹配",
                                          "row":  1,
                                          "col":  3,
                                          "asset":  {
                                                        "name":  "场景匹配",
                                                        "type":  "Skill",
                                                        "dependencies":  [
                                                                             "理解"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/understand.scene_match"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/understand.scene_match"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "理解"
                                                                   ],
                                                        "effect":  "场景匹配 支撑 理解 阶段中的局部任务执行、信息转换和结果输出。",
                                                        "implemented":  true,
                                                        "note":  "第四层内部能力资产，详情由 JSON 中的 asset 字段直接驱动。"
                                                    }
                                      },
                                      {
                                          "id":  "understand.constraint_check",
                                          "label":  "约束校验",
                                          "row":  3,
                                          "col":  1,
                                          "loop":  true,
                                          "asset":  {
                                                        "name":  "约束校验",
                                                        "type":  "Skill",
                                                        "dependencies":  [
                                                                             "需求聚类"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/understand.constraint_check"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/understand.constraint_check"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "理解"
                                                                   ],
                                                        "effect":  "约束校验 支撑 理解 阶段中的局部任务执行、信息转换和结果输出。",
                                                        "implemented":  true,
                                                        "note":  "该资产带 loop 标识，表示可在当前阶段内自循环迭代。"
                                                    }
                                      },
                                      {
                                          "id":  "understand.knowledge_gap",
                                          "label":  "知识缺口",
                                          "row":  3,
                                          "col":  3,
                                          "asset":  {
                                                        "name":  "知识缺口",
                                                        "type":  "Skill",
                                                        "dependencies":  [
                                                                             "场景匹配"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/understand.knowledge_gap"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/understand.knowledge_gap"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "理解"
                                                                   ],
                                                        "effect":  "知识缺口 支撑 理解 阶段中的局部任务执行、信息转换和结果输出。",
                                                        "implemented":  false,
                                                        "note":  "第四层内部能力资产，详情由 JSON 中的 asset 字段直接驱动。"
                                                    }
                                      },
                                      {
                                          "id":  "understand.intent_summary",
                                          "label":  "意图摘要",
                                          "row":  5,
                                          "col":  2,
                                          "asset":  {
                                                        "name":  "意图摘要",
                                                        "type":  "Skill",
                                                        "dependencies":  [
                                                                             "约束校验",
                                                                             "知识缺口"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/understand.intent_summary"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/understand.intent_summary"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "理解"
                                                                   ],
                                                        "effect":  "意图摘要 支撑 理解 阶段中的局部任务执行、信息转换和结果输出。",
                                                        "implemented":  true,
                                                        "note":  "第四层内部能力资产，详情由 JSON 中的 asset 字段直接驱动。"
                                                    }
                                      }
                                  ],
                        "asset":  {
                                      "name":  "理解",
                                      "type":  "Skill",
                                      "dependencies":  [
                                                           "意图摘要",
                                                           "AR"
                                                       ],
                                      "links":  [
                                                    {
                                                        "label":  "资产文档",
                                                        "url":  "https://example.com/docs/module.understand"
                                                    },
                                                    {
                                                        "label":  "代码仓库",
                                                        "url":  "https://example.com/repos/module.understand"
                                                    }
                                                ],
                                      "stages":  [
                                                     "理解"
                                                 ],
                                      "effect":  "理解 模块封装 理解 阶段的核心能力编排和资产调用。",
                                      "implemented":  true,
                                      "note":  "第四层子容器资产，代表阶段级能力集合。"
                                  }
                    },
                    {
                        "id":  "module.plan",
                        "label":  "规划",
                        "layer":  "layer.modules",
                        "order":  2,
                        "grid":  {
                                     "rows":  5,
                                     "cols":  3
                                 },
                        "nodes":  [
                                      {
                                          "id":  "plan.option_compare",
                                          "label":  "方案比选",
                                          "row":  1,
                                          "col":  2,
                                          "asset":  {
                                                        "name":  "方案比选",
                                                        "type":  "Skill",
                                                        "dependencies":  [
                                                                             "规划"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/plan.option_compare"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/plan.option_compare"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "规划"
                                                                   ],
                                                        "effect":  "方案比选 支撑 规划 阶段中的局部任务执行、信息转换和结果输出。",
                                                        "implemented":  true,
                                                        "note":  "第四层内部能力资产，详情由 JSON 中的 asset 字段直接驱动。"
                                                    }
                                      },
                                      {
                                          "id":  "plan.cost_estimate",
                                          "label":  "成本评估",
                                          "row":  2,
                                          "col":  1,
                                          "asset":  {
                                                        "name":  "成本评估",
                                                        "type":  "Skill",
                                                        "dependencies":  [
                                                                             "方案比选"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/plan.cost_estimate"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/plan.cost_estimate"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "规划"
                                                                   ],
                                                        "effect":  "成本评估 支撑 规划 阶段中的局部任务执行、信息转换和结果输出。",
                                                        "implemented":  true,
                                                        "note":  "第四层内部能力资产，详情由 JSON 中的 asset 字段直接驱动。"
                                                    }
                                      },
                                      {
                                          "id":  "plan.risk_budget",
                                          "label":  "风险预算",
                                          "row":  2,
                                          "col":  3,
                                          "asset":  {
                                                        "name":  "风险预算",
                                                        "type":  "Skill",
                                                        "dependencies":  [
                                                                             "方案比选"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/plan.risk_budget"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/plan.risk_budget"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "规划"
                                                                   ],
                                                        "effect":  "风险预算 支撑 规划 阶段中的局部任务执行、信息转换和结果输出。",
                                                        "implemented":  true,
                                                        "note":  "第四层内部能力资产，详情由 JSON 中的 asset 字段直接驱动。"
                                                    }
                                      },
                                      {
                                          "id":  "plan.release_slice",
                                          "label":  "发布切片",
                                          "row":  4,
                                          "col":  2,
                                          "asset":  {
                                                        "name":  "发布切片",
                                                        "type":  "Skill",
                                                        "dependencies":  [
                                                                             "成本评估",
                                                                             "风险预算"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/plan.release_slice"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/plan.release_slice"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "规划"
                                                                   ],
                                                        "effect":  "发布切片 支撑 规划 阶段中的局部任务执行、信息转换和结果输出。",
                                                        "implemented":  true,
                                                        "note":  "第四层内部能力资产，详情由 JSON 中的 asset 字段直接驱动。"
                                                    }
                                      },
                                      {
                                          "id":  "plan.review_pack",
                                          "label":  "评审包",
                                          "row":  5,
                                          "col":  3,
                                          "asset":  {
                                                        "name":  "评审包",
                                                        "type":  "Skill",
                                                        "dependencies":  [
                                                                             "发布切片"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/plan.review_pack"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/plan.review_pack"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "规划"
                                                                   ],
                                                        "effect":  "评审包 支撑 规划 阶段中的局部任务执行、信息转换和结果输出。",
                                                        "implemented":  true,
                                                        "note":  "第四层内部能力资产，详情由 JSON 中的 asset 字段直接驱动。"
                                                    }
                                      }
                                  ],
                        "asset":  {
                                      "name":  "规划",
                                      "type":  "Skill",
                                      "dependencies":  [
                                                           "评审包",
                                                           "需求规格说明书"
                                                       ],
                                      "links":  [
                                                    {
                                                        "label":  "资产文档",
                                                        "url":  "https://example.com/docs/module.plan"
                                                    },
                                                    {
                                                        "label":  "代码仓库",
                                                        "url":  "https://example.com/repos/module.plan"
                                                    }
                                                ],
                                      "stages":  [
                                                     "规划"
                                                 ],
                                      "effect":  "规划 模块封装 规划 阶段的核心能力编排和资产调用。",
                                      "implemented":  true,
                                      "note":  "第四层子容器资产，代表阶段级能力集合。"
                                  }
                    },
                    {
                        "id":  "module.execute",
                        "label":  "执行",
                        "layer":  "layer.modules",
                        "order":  3,
                        "grid":  {
                                     "rows":  5,
                                     "cols":  3
                                 },
                        "nodes":  [
                                      {
                                          "id":  "execute.work_dispatch",
                                          "label":  "任务派发",
                                          "row":  1,
                                          "col":  2,
                                          "asset":  {
                                                        "name":  "任务派发",
                                                        "type":  "Skill",
                                                        "dependencies":  [
                                                                             "执行"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/execute.work_dispatch"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/execute.work_dispatch"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "执行"
                                                                   ],
                                                        "effect":  "任务派发 支撑 执行 阶段中的局部任务执行、信息转换和结果输出。",
                                                        "implemented":  true,
                                                        "note":  "第四层内部能力资产，详情由 JSON 中的 asset 字段直接驱动。"
                                                    }
                                      },
                                      {
                                          "id":  "execute.patch_gen",
                                          "label":  "补丁生成",
                                          "row":  2,
                                          "col":  1,
                                          "asset":  {
                                                        "name":  "补丁生成",
                                                        "type":  "Skill",
                                                        "dependencies":  [
                                                                             "任务派发"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/execute.patch_gen"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/execute.patch_gen"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "执行"
                                                                   ],
                                                        "effect":  "补丁生成 支撑 执行 阶段中的局部任务执行、信息转换和结果输出。",
                                                        "implemented":  true,
                                                        "note":  "第四层内部能力资产，详情由 JSON 中的 asset 字段直接驱动。"
                                                    }
                                      },
                                      {
                                          "id":  "execute.test_stub",
                                          "label":  "桩例生成",
                                          "row":  2,
                                          "col":  3,
                                          "asset":  {
                                                        "name":  "桩例生成",
                                                        "type":  "Skill",
                                                        "dependencies":  [
                                                                             "任务派发"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/execute.test_stub"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/execute.test_stub"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "执行"
                                                                   ],
                                                        "effect":  "桩例生成 支撑 执行 阶段中的局部任务执行、信息转换和结果输出。",
                                                        "implemented":  true,
                                                        "note":  "第四层内部能力资产，详情由 JSON 中的 asset 字段直接驱动。"
                                                    }
                                      },
                                      {
                                          "id":  "execute.merge_review",
                                          "label":  "合并审查",
                                          "row":  4,
                                          "col":  2,
                                          "asset":  {
                                                        "name":  "合并审查",
                                                        "type":  "Skill",
                                                        "dependencies":  [
                                                                             "补丁生成",
                                                                             "桩例生成"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/execute.merge_review"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/execute.merge_review"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "执行"
                                                                   ],
                                                        "effect":  "合并审查 支撑 执行 阶段中的局部任务执行、信息转换和结果输出。",
                                                        "implemented":  true,
                                                        "note":  "第四层内部能力资产，详情由 JSON 中的 asset 字段直接驱动。"
                                                    }
                                      },
                                      {
                                          "id":  "execute.refactor_note",
                                          "label":  "重构备注",
                                          "row":  5,
                                          "col":  1,
                                          "asset":  {
                                                        "name":  "重构备注",
                                                        "type":  "Skill",
                                                        "dependencies":  [
                                                                             "合并审查"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/execute.refactor_note"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/execute.refactor_note"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "执行"
                                                                   ],
                                                        "effect":  "重构备注 支撑 执行 阶段中的局部任务执行、信息转换和结果输出。",
                                                        "implemented":  true,
                                                        "note":  "第四层内部能力资产，详情由 JSON 中的 asset 字段直接驱动。"
                                                    }
                                      },
                                      {
                                          "id":  "execute.sync_marker",
                                          "label":  "同步标记",
                                          "row":  5,
                                          "col":  3,
                                          "asset":  {
                                                        "name":  "同步标记",
                                                        "type":  "Skill",
                                                        "dependencies":  [
                                                                             "合并审查"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/execute.sync_marker"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/execute.sync_marker"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "执行"
                                                                   ],
                                                        "effect":  "同步标记 支撑 执行 阶段中的局部任务执行、信息转换和结果输出。",
                                                        "implemented":  true,
                                                        "note":  "第四层内部能力资产，详情由 JSON 中的 asset 字段直接驱动。"
                                                    }
                                      }
                                  ],
                        "asset":  {
                                      "name":  "执行",
                                      "type":  "Skill",
                                      "dependencies":  [
                                                           "重构备注",
                                                           "同步标记",
                                                           "软件实现设计说明书"
                                                       ],
                                      "links":  [
                                                    {
                                                        "label":  "资产文档",
                                                        "url":  "https://example.com/docs/module.execute"
                                                    },
                                                    {
                                                        "label":  "代码仓库",
                                                        "url":  "https://example.com/repos/module.execute"
                                                    }
                                                ],
                                      "stages":  [
                                                     "执行"
                                                 ],
                                      "effect":  "执行 模块封装 执行 阶段的核心能力编排和资产调用。",
                                      "implemented":  true,
                                      "note":  "第四层子容器资产，代表阶段级能力集合。"
                                  }
                    },
                    {
                        "id":  "module.verify",
                        "label":  "验证",
                        "layer":  "layer.modules",
                        "order":  4,
                        "grid":  {
                                     "rows":  5,
                                     "cols":  3
                                 },
                        "nodes":  [
                                      {
                                          "id":  "verify.smoke_check",
                                          "label":  "冒烟检查",
                                          "row":  1,
                                          "col":  1,
                                          "asset":  {
                                                        "name":  "冒烟检查",
                                                        "type":  "工具",
                                                        "dependencies":  [
                                                                             "验证"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/verify.smoke_check"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/verify.smoke_check"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "验证"
                                                                   ],
                                                        "effect":  "冒烟检查 支撑 验证 阶段中的局部任务执行、信息转换和结果输出。",
                                                        "implemented":  true,
                                                        "note":  "第四层内部能力资产，详情由 JSON 中的 asset 字段直接驱动。"
                                                    }
                                      },
                                      {
                                          "id":  "verify.defect_bucket",
                                          "label":  "缺陷归桶",
                                          "row":  2,
                                          "col":  2,
                                          "asset":  {
                                                        "name":  "缺陷归桶",
                                                        "type":  "工具",
                                                        "dependencies":  [
                                                                             "冒烟检查"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/verify.defect_bucket"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/verify.defect_bucket"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "验证"
                                                                   ],
                                                        "effect":  "缺陷归桶 支撑 验证 阶段中的局部任务执行、信息转换和结果输出。",
                                                        "implemented":  true,
                                                        "note":  "第四层内部能力资产，详情由 JSON 中的 asset 字段直接驱动。"
                                                    }
                                      },
                                      {
                                          "id":  "verify.rerun",
                                          "label":  "重跑验证",
                                          "row":  3,
                                          "col":  1,
                                          "loop":  true,
                                          "asset":  {
                                                        "name":  "重跑验证",
                                                        "type":  "工具",
                                                        "dependencies":  [
                                                                             "缺陷归桶"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/verify.rerun"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/verify.rerun"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "验证"
                                                                   ],
                                                        "effect":  "重跑验证 支撑 验证 阶段中的局部任务执行、信息转换和结果输出。",
                                                        "implemented":  true,
                                                        "note":  "该资产带 loop 标识，表示可在当前阶段内自循环迭代。"
                                                    }
                                      },
                                      {
                                          "id":  "verify.acceptance",
                                          "label":  "验收结论",
                                          "row":  4,
                                          "col":  3,
                                          "asset":  {
                                                        "name":  "验收结论",
                                                        "type":  "工具",
                                                        "dependencies":  [
                                                                             "缺陷归桶",
                                                                             "重跑验证"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/verify.acceptance"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/verify.acceptance"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "验证"
                                                                   ],
                                                        "effect":  "验收结论 支撑 验证 阶段中的局部任务执行、信息转换和结果输出。",
                                                        "implemented":  true,
                                                        "note":  "第四层内部能力资产，详情由 JSON 中的 asset 字段直接驱动。"
                                                    }
                                      },
                                      {
                                          "id":  "verify.audit_record",
                                          "label":  "审计记录",
                                          "row":  5,
                                          "col":  2,
                                          "asset":  {
                                                        "name":  "审计记录",
                                                        "type":  "工具",
                                                        "dependencies":  [
                                                                             "验收结论"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/verify.audit_record"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/verify.audit_record"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "验证"
                                                                   ],
                                                        "effect":  "审计记录 支撑 验证 阶段中的局部任务执行、信息转换和结果输出。",
                                                        "implemented":  true,
                                                        "note":  "第四层内部能力资产，详情由 JSON 中的 asset 字段直接驱动。"
                                                    }
                                      }
                                  ],
                        "asset":  {
                                      "name":  "验证",
                                      "type":  "Skill",
                                      "dependencies":  [
                                                           "初始代码"
                                                       ],
                                      "links":  [
                                                    {
                                                        "label":  "资产文档",
                                                        "url":  "https://example.com/docs/module.verify"
                                                    },
                                                    {
                                                        "label":  "代码仓库",
                                                        "url":  "https://example.com/repos/module.verify"
                                                    }
                                                ],
                                      "stages":  [
                                                     "验证"
                                                 ],
                                      "effect":  "验证 模块封装 验证 阶段的核心能力编排和资产调用。",
                                      "implemented":  true,
                                      "note":  "第四层子容器资产，代表阶段级能力集合。"
                                  }
                    }
                ],
    "edges":  [
                  {
                      "id":  "e.mock-understand-module-cluster",
                      "from":  "module.understand",
                      "to":  "understand.requirement_cluster",
                      "color":  "#5f676d",
                      "direction":  "down"
                  },
                  {
                      "id":  "e.mock-understand-module-scene",
                      "from":  "module.understand",
                      "to":  "understand.scene_match",
                      "color":  "#5f676d",
                      "direction":  "down"
                  },
                  {
                      "id":  "e.mock-understand-cluster-constraint",
                      "from":  "understand.requirement_cluster",
                      "to":  "understand.constraint_check",
                      "color":  "#5f676d",
                      "direction":  "down"
                  },
                  {
                      "id":  "e.mock-understand-scene-gap",
                      "from":  "understand.scene_match",
                      "to":  "understand.knowledge_gap",
                      "color":  "#5f676d",
                      "direction":  "down"
                  },
                  {
                      "id":  "e.mock-understand-constraint-summary",
                      "from":  "understand.constraint_check",
                      "to":  "understand.intent_summary",
                      "color":  "#5f676d",
                      "direction":  "down-right"
                  },
                  {
                      "id":  "e.mock-understand-gap-summary",
                      "from":  "understand.knowledge_gap",
                      "to":  "understand.intent_summary",
                      "color":  "#5f676d",
                      "direction":  "down-left"
                  },
                  {
                      "id":  "e.mock-understand-summary-module",
                      "from":  "understand.intent_summary",
                      "to":  "module.understand",
                      "color":  "#5f676d",
                      "direction":  "up"
                  },
                  {
                      "id":  "e.mock-plan-module-options",
                      "from":  "module.plan",
                      "to":  "plan.option_compare",
                      "color":  "#5f676d",
                      "direction":  "down"
                  },
                  {
                      "id":  "e.mock-plan-options-cost",
                      "from":  "plan.option_compare",
                      "to":  "plan.cost_estimate",
                      "color":  "#5f676d",
                      "direction":  "down-left"
                  },
                  {
                      "id":  "e.mock-plan-options-risk",
                      "from":  "plan.option_compare",
                      "to":  "plan.risk_budget",
                      "color":  "#5f676d",
                      "direction":  "down-right"
                  },
                  {
                      "id":  "e.mock-plan-cost-slice",
                      "from":  "plan.cost_estimate",
                      "to":  "plan.release_slice",
                      "color":  "#5f676d",
                      "direction":  "down-right"
                  },
                  {
                      "id":  "e.mock-plan-risk-slice",
                      "from":  "plan.risk_budget",
                      "to":  "plan.release_slice",
                      "color":  "#5f676d",
                      "direction":  "down-left"
                  },
                  {
                      "id":  "e.mock-plan-slice-pack",
                      "from":  "plan.release_slice",
                      "to":  "plan.review_pack",
                      "color":  "#5f676d",
                      "direction":  "down-right"
                  },
                  {
                      "id":  "e.mock-plan-pack-module",
                      "from":  "plan.review_pack",
                      "to":  "module.plan",
                      "color":  "#5f676d",
                      "direction":  "up"
                  },
                  {
                      "id":  "e.mock-execute-module-dispatch",
                      "from":  "module.execute",
                      "to":  "execute.work_dispatch",
                      "color":  "#5f676d",
                      "direction":  "down"
                  },
                  {
                      "id":  "e.mock-execute-dispatch-patch",
                      "from":  "execute.work_dispatch",
                      "to":  "execute.patch_gen",
                      "color":  "#5f676d",
                      "direction":  "down-left"
                  },
                  {
                      "id":  "e.mock-execute-dispatch-stub",
                      "from":  "execute.work_dispatch",
                      "to":  "execute.test_stub",
                      "color":  "#5f676d",
                      "direction":  "down-right"
                  },
                  {
                      "id":  "e.mock-execute-patch-review",
                      "from":  "execute.patch_gen",
                      "to":  "execute.merge_review",
                      "color":  "#5f676d",
                      "direction":  "down-right"
                  },
                  {
                      "id":  "e.mock-execute-stub-review",
                      "from":  "execute.test_stub",
                      "to":  "execute.merge_review",
                      "color":  "#5f676d",
                      "direction":  "down-left"
                  },
                  {
                      "id":  "e.mock-execute-review-note",
                      "from":  "execute.merge_review",
                      "to":  "execute.refactor_note",
                      "color":  "#5f676d",
                      "direction":  "down-left"
                  },
                  {
                      "id":  "e.mock-execute-review-sync",
                      "from":  "execute.merge_review",
                      "to":  "execute.sync_marker",
                      "color":  "#5f676d",
                      "direction":  "down-right"
                  },
                  {
                      "id":  "e.mock-execute-note-module",
                      "from":  "execute.refactor_note",
                      "to":  "module.execute",
                      "color":  "#5f676d",
                      "direction":  "up"
                  },
                  {
                      "id":  "e.mock-execute-sync-module",
                      "from":  "execute.sync_marker",
                      "to":  "module.execute",
                      "color":  "#5f676d",
                      "direction":  "up"
                  },
                  {
                      "id":  "e.mock-verify-module-smoke",
                      "from":  "module.verify",
                      "to":  "verify.smoke_check",
                      "color":  "#5f676d",
                      "direction":  "down"
                  },
                  {
                      "id":  "e.mock-verify-smoke-bucket",
                      "from":  "verify.smoke_check",
                      "to":  "verify.defect_bucket",
                      "color":  "#5f676d",
                      "direction":  "down-right"
                  },
                  {
                      "id":  "e.mock-verify-bucket-rerun",
                      "from":  "verify.defect_bucket",
                      "to":  "verify.rerun",
                      "color":  "#5f676d",
                      "direction":  "down-left"
                  },
                  {
                      "id":  "e.mock-verify-bucket-accept",
                      "from":  "verify.defect_bucket",
                      "to":  "verify.acceptance",
                      "color":  "#5f676d",
                      "direction":  "down-right"
                  },
                  {
                      "id":  "e.mock-verify-rerun-accept",
                      "from":  "verify.rerun",
                      "to":  "verify.acceptance",
                      "color":  "#5f676d",
                      "direction":  "right"
                  },
                  {
                      "id":  "e.mock-verify-accept-audit",
                      "from":  "verify.acceptance",
                      "to":  "verify.audit_record",
                      "color":  "#5f676d",
                      "direction":  "down-left"
                  },
                  {
                      "id":  "e.asset-mock-cluster-profile",
                      "from":  "understand.requirement_cluster",
                      "to":  "output.requirement_profile",
                      "color":  "#57bd84",
                      "direction":  "down"
                  },
                  {
                      "id":  "e.asset-mock-gap-template",
                      "from":  "understand.knowledge_gap",
                      "to":  "output.solution_template",
                      "color":  "#57bd84",
                      "direction":  "down"
                  },
                  {
                      "id":  "e.asset-mock-summary-release",
                      "from":  "understand.intent_summary",
                      "to":  "output.release_knowledge",
                      "color":  "#57bd84",
                      "direction":  "down"
                  },
                  {
                      "id":  "e.asset-mock-options-template",
                      "from":  "plan.option_compare",
                      "to":  "output.solution_template",
                      "color":  "#57bd84",
                      "direction":  "down"
                  },
                  {
                      "id":  "e.asset-mock-slice-component",
                      "from":  "plan.release_slice",
                      "to":  "output.component_asset",
                      "color":  "#57bd84",
                      "direction":  "down"
                  },
                  {
                      "id":  "e.asset-mock-patch-component",
                      "from":  "execute.patch_gen",
                      "to":  "output.component_asset",
                      "color":  "#57bd84",
                      "direction":  "down"
                  },
                  {
                      "id":  "e.asset-mock-stub-case",
                      "from":  "execute.test_stub",
                      "to":  "output.test_case",
                      "color":  "#57bd84",
                      "direction":  "down"
                  },
                  {
                      "id":  "e.asset-mock-sync-contract",
                      "from":  "execute.sync_marker",
                      "to":  "output.interface_contract",
                      "color":  "#57bd84",
                      "direction":  "down"
                  },
                  {
                      "id":  "e.asset-mock-rerun-defect",
                      "from":  "verify.rerun",
                      "to":  "output.defect_pattern",
                      "color":  "#57bd84",
                      "direction":  "down"
                  },
                  {
                      "id":  "e.asset-mock-accept-quality",
                      "from":  "verify.acceptance",
                      "to":  "output.quality_rule",
                      "color":  "#57bd84",
                      "direction":  "down"
                  },
                  {
                      "id":  "e.asset-mock-audit-release",
                      "from":  "verify.audit_record",
                      "to":  "output.release_knowledge",
                      "color":  "#57bd84",
                      "direction":  "down"
                  }
              ],
    "stageParabolas":  [
                           {
                               "id":  "stage.ar-to-requirement",
                               "from":  "top.ar",
                               "through":  "module.understand",
                               "to":  "top.requirement_spec"
                           },
                           {
                               "id":  "stage.requirement-to-design",
                               "from":  "top.requirement_spec",
                               "through":  "module.plan",
                               "to":  "top.design_spec"
                           },
                           {
                               "id":  "stage.design-to-code",
                               "from":  "top.design_spec",
                               "through":  "module.execute",
                               "to":  "top.initial_code"
                           },
                           {
                               "id":  "stage.code-to-mr",
                               "from":  "top.initial_code",
                               "through":  "module.verify",
                               "to":  "top.mr"
                           }
                       ]
};
