window.FALLBACK_GRAPH_DATA = {
    "meta":  {
                 "title":  "software-engineering-agent-demo",
                 "version":  "1.1.0"
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
                      "id":  "output.feature_code_map",
                      "label":  "功能代码映射库",
                      "layer":  "layer.outputs",
                      "slot":  1,
                      "asset":  {
                                    "name":  "功能代码映射库",
                                    "type":  "数据资产",
                                    "dependencies":  [
                                                         "获取基座代码"
                                                     ],
                                    "links":  [
                                                  {
                                                      "label":  "资产文档",
                                                      "url":  "https://example.com/docs/output.feature_code_map"
                                                  },
                                                  {
                                                      "label":  "代码仓库",
                                                      "url":  "https://example.com/repos/output.feature_code_map"
                                                  }
                                              ],
                                    "stages":  [
                                                   "理解",
                                                   "规划",
                                                   "执行",
                                                   "验证"
                                               ],
                                    "effect":  "功能代码映射库 作为数据资产 参与理解、规划、执行、验证阶段，提供资产输入、结果沉淀或质量约束。",
                                    "implemented":  true,
                                    "note":  "第五层数据资产，可由第四层能力节点按需查询或沉淀。"
                                }
                  },
                  {
                      "id":  "output.ir_sr_ar",
                      "label":  "IR/SR/AR",
                      "layer":  "layer.outputs",
                      "slot":  2,
                      "asset":  {
                                    "name":  "IR/SR/AR",
                                    "type":  "数据资产",
                                    "dependencies":  [
                                                         "获取需求详情"
                                                     ],
                                    "links":  [
                                                  {
                                                      "label":  "资产文档",
                                                      "url":  "https://example.com/docs/output.ir_sr_ar"
                                                  },
                                                  {
                                                      "label":  "代码仓库",
                                                      "url":  "https://example.com/repos/output.ir_sr_ar"
                                                  }
                                              ],
                                    "stages":  [
                                                   "理解",
                                                   "规划",
                                                   "执行",
                                                   "验证"
                                               ],
                                    "effect":  "IR/SR/AR 作为数据资产 参与理解、规划、执行、验证阶段，提供资产输入、结果沉淀或质量约束。",
                                    "implemented":  true,
                                    "note":  "第五层数据资产，可由第四层能力节点按需查询或沉淀。"
                                }
                  },
                  {
                      "id":  "output.feature_lib",
                      "label":  "功能库",
                      "layer":  "layer.outputs",
                      "slot":  3,
                      "asset":  {
                                    "name":  "功能库",
                                    "type":  "数据资产",
                                    "dependencies":  [
                                                         "获取基座代码"
                                                     ],
                                    "links":  [
                                                  {
                                                      "label":  "资产文档",
                                                      "url":  "https://example.com/docs/output.feature_lib"
                                                  },
                                                  {
                                                      "label":  "代码仓库",
                                                      "url":  "https://example.com/repos/output.feature_lib"
                                                  }
                                              ],
                                    "stages":  [
                                                   "理解",
                                                   "规划",
                                                   "执行",
                                                   "验证"
                                               ],
                                    "effect":  "功能库 作为数据资产 参与理解、规划、执行、验证阶段，提供资产输入、结果沉淀或质量约束。",
                                    "implemented":  true,
                                    "note":  "第五层数据资产，可由第四层能力节点按需查询或沉淀。"
                                }
                  },
                  {
                      "id":  "output.arch_knowledge",
                      "label":  "架构知识库",
                      "layer":  "layer.outputs",
                      "slot":  4,
                      "asset":  {
                                    "name":  "架构知识库",
                                    "type":  "数据资产",
                                    "dependencies":  [
                                                         "方案设计"
                                                     ],
                                    "links":  [
                                                  {
                                                      "label":  "资产文档",
                                                      "url":  "https://example.com/docs/output.arch_knowledge"
                                                  },
                                                  {
                                                      "label":  "代码仓库",
                                                      "url":  "https://example.com/repos/output.arch_knowledge"
                                                  }
                                              ],
                                    "stages":  [
                                                   "理解",
                                                   "规划",
                                                   "执行",
                                                   "验证"
                                               ],
                                    "effect":  "架构知识库 作为数据资产 参与理解、规划、执行、验证阶段，提供资产输入、结果沉淀或质量约束。",
                                    "implemented":  true,
                                    "note":  "第五层数据资产，可由第四层能力节点按需查询或沉淀。"
                                }
                  },
                  {
                      "id":  "output.code_graph",
                      "label":  "代码图谱",
                      "layer":  "layer.outputs",
                      "slot":  5,
                      "asset":  {
                                    "name":  "代码图谱",
                                    "type":  "数据资产",
                                    "dependencies":  [
                                                         "变更范围影响分析",
                                                         "接口适配"
                                                     ],
                                    "links":  [
                                                  {
                                                      "label":  "资产文档",
                                                      "url":  "https://example.com/docs/output.code_graph"
                                                  },
                                                  {
                                                      "label":  "代码仓库",
                                                      "url":  "https://example.com/repos/output.code_graph"
                                                  }
                                              ],
                                    "stages":  [
                                                   "理解",
                                                   "规划",
                                                   "执行",
                                                   "验证"
                                               ],
                                    "effect":  "代码图谱 作为数据资产 参与理解、规划、执行、验证阶段，提供资产输入、结果沉淀或质量约束。",
                                    "implemented":  true,
                                    "note":  "第五层数据资产，可由第四层能力节点按需查询或沉淀。"
                                }
                  },
                  {
                      "id":  "output.code_pattern",
                      "label":  "代码模式库",
                      "layer":  "layer.outputs",
                      "slot":  6,
                      "asset":  {
                                    "name":  "代码模式库",
                                    "type":  "数据资产",
                                    "dependencies":  [
                                                         "代码生成"
                                                     ],
                                    "links":  [
                                                  {
                                                      "label":  "资产文档",
                                                      "url":  "https://example.com/docs/output.code_pattern"
                                                  },
                                                  {
                                                      "label":  "代码仓库",
                                                      "url":  "https://example.com/repos/output.code_pattern"
                                                  }
                                              ],
                                    "stages":  [
                                                   "理解",
                                                   "规划",
                                                   "执行",
                                                   "验证"
                                               ],
                                    "effect":  "代码模式库 作为数据资产 参与理解、规划、执行、验证阶段，提供资产输入、结果沉淀或质量约束。",
                                    "implemented":  true,
                                    "note":  "第五层数据资产，可由第四层能力节点按需查询或沉淀。"
                                }
                  },
                  {
                      "id":  "output.interface_vector",
                      "label":  "接口向量库",
                      "layer":  "layer.outputs",
                      "slot":  7,
                      "asset":  {
                                    "name":  "接口向量库",
                                    "type":  "数据资产",
                                    "dependencies":  [
                                                         "接口适配"
                                                     ],
                                    "links":  [
                                                  {
                                                      "label":  "资产文档",
                                                      "url":  "https://example.com/docs/output.interface_vector"
                                                  },
                                                  {
                                                      "label":  "代码仓库",
                                                      "url":  "https://example.com/repos/output.interface_vector"
                                                  }
                                              ],
                                    "stages":  [
                                                   "理解",
                                                   "规划",
                                                   "执行",
                                                   "验证"
                                               ],
                                    "effect":  "接口向量库 作为数据资产 参与理解、规划、执行、验证阶段，提供资产输入、结果沉淀或质量约束。",
                                    "implemented":  true,
                                    "note":  "第五层数据资产，可由第四层能力节点按需查询或沉淀。"
                                }
                  },
                  {
                      "id":  "output.coding_standard",
                      "label":  "编码规范",
                      "layer":  "layer.outputs",
                      "slot":  8,
                      "asset":  {
                                    "name":  "编码规范",
                                    "type":  "数据资产",
                                    "dependencies":  [
                                                         "执行"
                                                     ],
                                    "links":  [
                                                  {
                                                      "label":  "资产文档",
                                                      "url":  "https://example.com/docs/output.coding_standard"
                                                  },
                                                  {
                                                      "label":  "代码仓库",
                                                      "url":  "https://example.com/repos/output.coding_standard"
                                                  }
                                              ],
                                    "stages":  [
                                                   "理解",
                                                   "规划",
                                                   "执行",
                                                   "验证"
                                               ],
                                    "effect":  "编码规范 作为数据资产 参与理解、规划、执行、验证阶段，提供资产输入、结果沉淀或质量约束。",
                                    "implemented":  true,
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
                                     "rows":  4,
                                     "cols":  3
                                 },
                        "nodes":  [
                                      {
                                          "id":  "understand.requirement_detail",
                                          "label":  "获取需求详情",
                                          "row":  1,
                                          "col":  1,
                                          "asset":  {
                                                        "name":  "获取需求详情",
                                                        "type":  "Skill",
                                                        "dependencies":  [
                                                                             "理解"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/understand.requirement_detail"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/understand.requirement_detail"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "理解"
                                                                   ],
                                                        "effect":  "获取需求详情 支撑 理解 阶段中的局部任务执行、信息转换和结果输出。",
                                                        "implemented":  true,
                                                        "note":  "第四层内部能力资产，详情由 JSON 中的 asset 字段直接驱动。"
                                                    }
                                      },
                                      {
                                          "id":  "understand.base_code",
                                          "label":  "获取基座代码",
                                          "row":  1,
                                          "col":  3,
                                          "asset":  {
                                                        "name":  "获取基座代码",
                                                        "type":  "Skill",
                                                        "dependencies":  [
                                                                             "获取需求详情"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/understand.base_code"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/understand.base_code"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "理解"
                                                                   ],
                                                        "effect":  "获取基座代码 支撑 理解 阶段中的局部任务执行、信息转换和结果输出。",
                                                        "implemented":  true,
                                                        "note":  "第四层内部能力资产，详情由 JSON 中的 asset 字段直接驱动。"
                                                    }
                                      },
                                      {
                                          "id":  "understand.code_understanding",
                                          "label":  "代码理解",
                                          "row":  2,
                                          "col":  3,
                                          "asset":  {
                                                        "name":  "代码理解",
                                                        "type":  "Skill",
                                                        "dependencies":  [
                                                                             "获取基座代码"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/understand.code_understanding"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/understand.code_understanding"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "理解"
                                                                   ],
                                                        "effect":  "代码理解 支撑 理解 阶段中的局部任务执行、信息转换和结果输出。",
                                                        "implemented":  true,
                                                        "note":  "第四层内部能力资产，详情由 JSON 中的 asset 字段直接驱动。"
                                                    }
                                      },
                                      {
                                          "id":  "understand.structured_breakdown",
                                          "label":  "结构化拆解",
                                          "row":  3,
                                          "col":  2,
                                          "asset":  {
                                                        "name":  "结构化拆解",
                                                        "type":  "Skill",
                                                        "dependencies":  [
                                                                             "代码理解",
                                                                             "获取需求详情"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/understand.structured_breakdown"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/understand.structured_breakdown"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "理解"
                                                                   ],
                                                        "effect":  "结构化拆解 支撑 理解 阶段中的局部任务执行、信息转换和结果输出。",
                                                        "implemented":  true,
                                                        "note":  "第四层内部能力资产，详情由 JSON 中的 asset 字段直接驱动。"
                                                    }
                                      }
                                  ],
                        "asset":  {
                                      "name":  "理解",
                                      "type":  "Skill",
                                      "dependencies":  [
                                                           "结构化拆解",
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
                                     "rows":  4,
                                     "cols":  3
                                 },
                        "nodes":  [
                                      {
                                          "id":  "plan.solution_design",
                                          "label":  "方案设计",
                                          "row":  1,
                                          "col":  1,
                                          "asset":  {
                                                        "name":  "方案设计",
                                                        "type":  "Skill",
                                                        "dependencies":  [
                                                                             "规划"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/plan.solution_design"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/plan.solution_design"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "规划"
                                                                   ],
                                                        "effect":  "方案设计 支撑 规划 阶段中的局部任务执行、信息转换和结果输出。",
                                                        "implemented":  true,
                                                        "note":  "第四层内部能力资产，详情由 JSON 中的 asset 字段直接驱动。"
                                                    }
                                      },
                                      {
                                          "id":  "plan.impact_analysis",
                                          "label":  "变更范围影响分析",
                                          "row":  3,
                                          "col":  1,
                                          "asset":  {
                                                        "name":  "变更范围影响分析",
                                                        "type":  "Skill",
                                                        "dependencies":  [
                                                                             "方案设计"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/plan.impact_analysis"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/plan.impact_analysis"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "规划"
                                                                   ],
                                                        "effect":  "变更范围影响分析 支撑 规划 阶段中的局部任务执行、信息转换和结果输出。",
                                                        "implemented":  true,
                                                        "note":  "第四层内部能力资产，详情由 JSON 中的 asset 字段直接驱动。"
                                                    }
                                      },
                                      {
                                          "id":  "plan.task_breakdown",
                                          "label":  "任务拆解",
                                          "row":  3,
                                          "col":  3,
                                          "asset":  {
                                                        "name":  "任务拆解",
                                                        "type":  "Skill",
                                                        "dependencies":  [
                                                                             "变更范围影响分析"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/plan.task_breakdown"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/plan.task_breakdown"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "规划"
                                                                   ],
                                                        "effect":  "任务拆解 支撑 规划 阶段中的局部任务执行、信息转换和结果输出。",
                                                        "implemented":  true,
                                                        "note":  "第四层内部能力资产，详情由 JSON 中的 asset 字段直接驱动。"
                                                    }
                                      }
                                  ],
                        "asset":  {
                                      "name":  "规划",
                                      "type":  "Skill",
                                      "dependencies":  [
                                                           "任务拆解",
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
                                          "id":  "execute.swarm",
                                          "label":  "蜂群",
                                          "row":  1,
                                          "col":  2,
                                          "asset":  {
                                                        "name":  "蜂群",
                                                        "type":  "Skill",
                                                        "dependencies":  [
                                                                             "执行"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/execute.swarm"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/execute.swarm"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "执行"
                                                                   ],
                                                        "effect":  "蜂群 支撑 执行 阶段中的局部任务执行、信息转换和结果输出。",
                                                        "implemented":  true,
                                                        "note":  "第四层内部能力资产，详情由 JSON 中的 asset 字段直接驱动。"
                                                    }
                                      },
                                      {
                                          "id":  "execute.code_gen",
                                          "label":  "代码生成",
                                          "row":  2,
                                          "col":  1,
                                          "asset":  {
                                                        "name":  "代码生成",
                                                        "type":  "Skill",
                                                        "dependencies":  [
                                                                             "蜂群"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/execute.code_gen"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/execute.code_gen"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "执行"
                                                                   ],
                                                        "effect":  "代码生成 支撑 执行 阶段中的局部任务执行、信息转换和结果输出。",
                                                        "implemented":  true,
                                                        "note":  "第四层内部能力资产，详情由 JSON 中的 asset 字段直接驱动。"
                                                    }
                                      },
                                      {
                                          "id":  "execute.interface_adapter",
                                          "label":  "接口适配",
                                          "row":  4,
                                          "col":  1,
                                          "asset":  {
                                                        "name":  "接口适配",
                                                        "type":  "Skill",
                                                        "dependencies":  [
                                                                             "代码生成"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/execute.interface_adapter"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/execute.interface_adapter"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "执行"
                                                                   ],
                                                        "effect":  "接口适配 支撑 执行 阶段中的局部任务执行、信息转换和结果输出。",
                                                        "implemented":  true,
                                                        "note":  "第四层内部能力资产，详情由 JSON 中的 asset 字段直接驱动。"
                                                    }
                                      },
                                      {
                                          "id":  "execute.clean_code",
                                          "label":  "CleanCode",
                                          "row":  5,
                                          "col":  2,
                                          "asset":  {
                                                        "name":  "CleanCode",
                                                        "type":  "Skill",
                                                        "dependencies":  [
                                                                             "接口适配",
                                                                             "接口适配2"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/execute.clean_code"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/execute.clean_code"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "执行"
                                                                   ],
                                                        "effect":  "CleanCode 支撑 执行 阶段中的局部任务执行、信息转换和结果输出。",
                                                        "implemented":  true,
                                                        "note":  "第四层内部能力资产，详情由 JSON 中的 asset 字段直接驱动。"
                                                    }
                                      },
                                      {
                                          "id":  "execute.more",
                                          "label":  "...",
                                          "row":  3,
                                          "col":  2,
                                          "asset":  {
                                                        "name":  "...",
                                                        "type":  "Skill",
                                                        "dependencies":  [
                                                                             "蜂群"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/execute.more"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/execute.more"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "执行"
                                                                   ],
                                                        "effect":  "... 支撑 执行 阶段中的局部任务执行、信息转换和结果输出。",
                                                        "implemented":  false,
                                                        "note":  "第四层内部能力资产，详情由 JSON 中的 asset 字段直接驱动。"
                                                    }
                                      },
                                      {
                                          "id":  "execute.code_gen_2",
                                          "label":  "代码生成2",
                                          "row":  2,
                                          "col":  3,
                                          "asset":  {
                                                        "name":  "代码生成2",
                                                        "type":  "Skill",
                                                        "dependencies":  [
                                                                             "蜂群"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/execute.code_gen_2"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/execute.code_gen_2"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "执行"
                                                                   ],
                                                        "effect":  "代码生成2 支撑 执行 阶段中的局部任务执行、信息转换和结果输出。",
                                                        "implemented":  true,
                                                        "note":  "第四层内部能力资产，详情由 JSON 中的 asset 字段直接驱动。"
                                                    }
                                      },
                                      {
                                          "id":  "execute.interface_adapter_2",
                                          "label":  "接口适配2",
                                          "row":  4,
                                          "col":  3,
                                          "asset":  {
                                                        "name":  "接口适配2",
                                                        "type":  "Skill",
                                                        "dependencies":  [
                                                                             "代码生成2"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/execute.interface_adapter_2"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/execute.interface_adapter_2"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "执行"
                                                                   ],
                                                        "effect":  "接口适配2 支撑 执行 阶段中的局部任务执行、信息转换和结果输出。",
                                                        "implemented":  true,
                                                        "note":  "第四层内部能力资产，详情由 JSON 中的 asset 字段直接驱动。"
                                                    }
                                      }
                                  ],
                        "asset":  {
                                      "name":  "执行",
                                      "type":  "Skill",
                                      "dependencies":  [
                                                           "CleanCode",
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
                                     "rows":  4,
                                     "cols":  3
                                 },
                        "nodes":  [
                                      {
                                          "id":  "verify.build",
                                          "label":  "构建验证",
                                          "row":  1,
                                          "col":  1,
                                          "loop":  true,
                                          "asset":  {
                                                        "name":  "构建验证",
                                                        "type":  "工具",
                                                        "dependencies":  [
                                                                             "验证"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/verify.build"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/verify.build"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "验证"
                                                                   ],
                                                        "effect":  "构建验证 支撑 验证 阶段中的局部任务执行、信息转换和结果输出。",
                                                        "implemented":  true,
                                                        "note":  "该资产带 loop 标识，表示可在当前阶段内自循环迭代。"
                                                    }
                                      },
                                      {
                                          "id":  "verify.case",
                                          "label":  "用例验证",
                                          "row":  1,
                                          "col":  3,
                                          "asset":  {
                                                        "name":  "用例验证",
                                                        "type":  "工具",
                                                        "dependencies":  [
                                                                             "构建验证"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/verify.case"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/verify.case"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "验证"
                                                                   ],
                                                        "effect":  "用例验证 支撑 验证 阶段中的局部任务执行、信息转换和结果输出。",
                                                        "implemented":  true,
                                                        "note":  "第四层内部能力资产，详情由 JSON 中的 asset 字段直接驱动。"
                                                    }
                                      },
                                      {
                                          "id":  "verify.submit_mr",
                                          "label":  "提交为MR",
                                          "row":  3,
                                          "col":  2,
                                          "asset":  {
                                                        "name":  "提交为MR",
                                                        "type":  "工具",
                                                        "dependencies":  [
                                                                             "用例验证"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/verify.submit_mr"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/verify.submit_mr"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "验证"
                                                                   ],
                                                        "effect":  "提交为MR 支撑 验证 阶段中的局部任务执行、信息转换和结果输出。",
                                                        "implemented":  true,
                                                        "note":  "第四层内部能力资产，详情由 JSON 中的 asset 字段直接驱动。"
                                                    }
                                      },
                                      {
                                          "id":  "verify.gate",
                                          "label":  "门禁验证",
                                          "row":  3,
                                          "col":  3,
                                          "asset":  {
                                                        "name":  "门禁验证",
                                                        "type":  "工具",
                                                        "dependencies":  [
                                                                             "提交为MR"
                                                                         ],
                                                        "links":  [
                                                                      {
                                                                          "label":  "资产文档",
                                                                          "url":  "https://example.com/docs/verify.gate"
                                                                      },
                                                                      {
                                                                          "label":  "代码仓库",
                                                                          "url":  "https://example.com/repos/verify.gate"
                                                                      }
                                                                  ],
                                                        "stages":  [
                                                                       "验证"
                                                                   ],
                                                        "effect":  "门禁验证 支撑 验证 阶段中的局部任务执行、信息转换和结果输出。",
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
                      "id":  "e.understand-module-requirement",
                      "from":  "module.understand",
                      "to":  "understand.requirement_detail",
                      "color":  "#5f676d",
                      "direction":  "down"
                  },
                  {
                      "id":  "e.understand-requirement-base",
                      "from":  "understand.requirement_detail",
                      "to":  "understand.base_code",
                      "color":  "#5f676d",
                      "direction":  "right"
                  },
                  {
                      "id":  "e.understand-base-code",
                      "from":  "understand.base_code",
                      "to":  "understand.code_understanding",
                      "color":  "#5f676d",
                      "direction":  "down"
                  },
                  {
                      "id":  "e.understand-code-breakdown",
                      "from":  "understand.code_understanding",
                      "to":  "understand.structured_breakdown",
                      "color":  "#5f676d",
                      "direction":  "down-left"
                  },
                  {
                      "id":  "e.understand-breakdown-module",
                      "from":  "understand.structured_breakdown",
                      "to":  "module.understand",
                      "color":  "#5f676d",
                      "direction":  "up"
                  },
                  {
                      "id":  "e.understand-requirement-breakdown",
                      "from":  "understand.requirement_detail",
                      "to":  "understand.structured_breakdown",
                      "color":  "#5f676d",
                      "direction":  "down"
                  },
                  {
                      "id":  "e.plan-module-solution",
                      "from":  "module.plan",
                      "to":  "plan.solution_design",
                      "color":  "#5f676d",
                      "direction":  "down"
                  },
                  {
                      "id":  "e.plan-solution-impact",
                      "from":  "plan.solution_design",
                      "to":  "plan.impact_analysis",
                      "color":  "#5f676d",
                      "direction":  "down"
                  },
                  {
                      "id":  "e.plan-impact-task",
                      "from":  "plan.impact_analysis",
                      "to":  "plan.task_breakdown",
                      "color":  "#5f676d",
                      "direction":  "right"
                  },
                  {
                      "id":  "e.plan-task-module",
                      "from":  "plan.task_breakdown",
                      "to":  "module.plan",
                      "color":  "#5f676d",
                      "direction":  "up"
                  },
                  {
                      "id":  "e.execute-module-swarm",
                      "from":  "module.execute",
                      "to":  "execute.swarm",
                      "color":  "#5f676d",
                      "direction":  "down"
                  },
                  {
                      "id":  "e.execute-swarm-code",
                      "from":  "execute.swarm",
                      "to":  "execute.code_gen",
                      "color":  "#5f676d",
                      "direction":  "down-left"
                  },
                  {
                      "id":  "e.execute-code-adapter",
                      "from":  "execute.code_gen",
                      "to":  "execute.interface_adapter",
                      "color":  "#5f676d",
                      "direction":  "down"
                  },
                  {
                      "id":  "e.execute-adapter-clean",
                      "from":  "execute.interface_adapter",
                      "to":  "execute.clean_code",
                      "color":  "#5f676d",
                      "direction":  "down-right"
                  },
                  {
                      "id":  "e.execute-clean-module",
                      "from":  "execute.clean_code",
                      "to":  "module.execute",
                      "color":  "#5f676d",
                      "direction":  "up"
                  },
                  {
                      "id":  "e.execute-swarm-more",
                      "from":  "execute.swarm",
                      "to":  "execute.more",
                      "color":  "#5f676d",
                      "direction":  "down"
                  },
                  {
                      "id":  "e.execute-swarm-code2",
                      "from":  "execute.swarm",
                      "to":  "execute.code_gen_2",
                      "color":  "#5f676d",
                      "direction":  "down-right"
                  },
                  {
                      "id":  "e.execute-code2-adapter2",
                      "from":  "execute.code_gen_2",
                      "to":  "execute.interface_adapter_2",
                      "color":  "#5f676d",
                      "direction":  "down"
                  },
                  {
                      "id":  "e.execute-adapter2-clean",
                      "from":  "execute.interface_adapter_2",
                      "to":  "execute.clean_code",
                      "color":  "#5f676d",
                      "direction":  "down-left"
                  },
                  {
                      "id":  "e.verify-module-build",
                      "from":  "module.verify",
                      "to":  "verify.build",
                      "color":  "#5f676d",
                      "direction":  "down"
                  },
                  {
                      "id":  "e.verify-build-case",
                      "from":  "verify.build",
                      "to":  "verify.case",
                      "color":  "#5f676d",
                      "direction":  "right"
                  },
                  {
                      "id":  "e.verify-case-mr",
                      "from":  "verify.case",
                      "to":  "verify.submit_mr",
                      "color":  "#5f676d",
                      "direction":  "down-left"
                  },
                  {
                      "id":  "e.verify-mr-gate",
                      "from":  "verify.submit_mr",
                      "to":  "verify.gate",
                      "color":  "#5f676d",
                      "direction":  "right"
                  },
                  {
                      "id":  "e.asset-base-map",
                      "from":  "understand.base_code",
                      "to":  "output.feature_code_map",
                      "color":  "#57bd84",
                      "direction":  "down"
                  },
                  {
                      "id":  "e.asset-base-feature",
                      "from":  "understand.base_code",
                      "to":  "output.feature_lib",
                      "color":  "#57bd84",
                      "direction":  "down"
                  },
                  {
                      "id":  "e.asset-req-ir",
                      "from":  "understand.requirement_detail",
                      "to":  "output.ir_sr_ar",
                      "color":  "#57bd84",
                      "direction":  "down"
                  },
                  {
                      "id":  "e.asset-solution-arch",
                      "from":  "plan.solution_design",
                      "to":  "output.arch_knowledge",
                      "color":  "#57bd84",
                      "direction":  "down"
                  },
                  {
                      "id":  "e.asset-impact-graph",
                      "from":  "plan.impact_analysis",
                      "to":  "output.code_graph",
                      "color":  "#57bd84",
                      "direction":  "down"
                  },
                  {
                      "id":  "e.asset-code-pattern",
                      "from":  "execute.code_gen",
                      "to":  "output.code_pattern",
                      "color":  "#57bd84",
                      "direction":  "down"
                  },
                  {
                      "id":  "e.asset-adapter-graph",
                      "from":  "execute.interface_adapter",
                      "to":  "output.code_graph",
                      "color":  "#57bd84",
                      "direction":  "down"
                  },
                  {
                      "id":  "e.asset-adapter-vector",
                      "from":  "execute.interface_adapter",
                      "to":  "output.interface_vector",
                      "color":  "#57bd84",
                      "direction":  "down"
                  },
                  {
                      "id":  "e.asset-execute-standard",
                      "from":  "module.execute",
                      "to":  "output.coding_standard",
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
