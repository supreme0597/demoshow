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
                                       "label":  "需求对齐"
                                   },
                                   {
                                       "id":  "overview.solution_design",
                                       "label":  "方案设计"
                                   },
                                   {
                                       "id":  "overview.coding",
                                       "label":  "编码实现"
                                   },
                                   {
                                       "id":  "overview.issue_convergence",
                                       "label":  "问题收敛"
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
                      "icon":  "radar"
                  },
                  {
                      "id":  "top.requirement_spec",
                      "label":  "需求规格说明书",
                      "layer":  "layer.top",
                      "slot":  2,
                      "icon":  "document"
                  },
                  {
                      "id":  "top.design_spec",
                      "label":  "软件实现设计说明书",
                      "layer":  "layer.top",
                      "slot":  3,
                      "icon":  "blueprint"
                  },
                  {
                      "id":  "top.initial_code",
                      "label":  "初始代码",
                      "layer":  "layer.top",
                      "slot":  4,
                      "icon":  "code"
                  },
                  {
                      "id":  "top.mr",
                      "label":  "MR",
                      "layer":  "layer.top",
                      "slot":  5,
                      "icon":  "merge"
                  },
                  {
                      "id":  "gate.raw_input",
                      "label":  "原始输入",
                      "layer":  "layer.inputs",
                      "slot":  1
                  },
                  {
                      "id":  "gate.review_req",
                      "label":  "人工审核修正",
                      "layer":  "layer.inputs",
                      "slot":  2
                  },
                  {
                      "id":  "gate.review_design",
                      "label":  "人工审核修正",
                      "layer":  "layer.inputs",
                      "slot":  3
                  },
                  {
                      "id":  "gate.review_code",
                      "label":  "人工审核修正",
                      "layer":  "layer.inputs",
                      "slot":  4
                  },
                  {
                      "id":  "gate.manual_fallback",
                      "label":  "人工检视兜底",
                      "layer":  "layer.inputs",
                      "slot":  5
                  },
                  {
                      "id":  "context.global_rule",
                      "label":  "全局规约",
                      "layer":  "layer.context",
                      "slot":  1
                  },
                  {
                      "id":  "context.version_rule",
                      "label":  "版本规约",
                      "layer":  "layer.context",
                      "slot":  2
                  },
                  {
                      "id":  "context.repo_rule",
                      "label":  "仓级规约",
                      "layer":  "layer.context",
                      "slot":  3
                  },
                  {
                      "id":  "output.requirement_profile",
                      "label":  "需求画像库",
                      "layer":  "layer.outputs",
                      "slot":  1
                  },
                  {
                      "id":  "output.solution_template",
                      "label":  "方案模板库",
                      "layer":  "layer.outputs",
                      "slot":  2
                  },
                  {
                      "id":  "output.component_asset",
                      "label":  "组件资产库",
                      "layer":  "layer.outputs",
                      "slot":  3
                  },
                  {
                      "id":  "output.test_case",
                      "label":  "测试用例库",
                      "layer":  "layer.outputs",
                      "slot":  4
                  },
                  {
                      "id":  "output.quality_rule",
                      "label":  "质量规则库",
                      "layer":  "layer.outputs",
                      "slot":  5
                  },
                  {
                      "id":  "output.defect_pattern",
                      "label":  "缺陷模式库",
                      "layer":  "layer.outputs",
                      "slot":  6
                  },
                  {
                      "id":  "output.interface_contract",
                      "label":  "接口契约库",
                      "layer":  "layer.outputs",
                      "slot":  7
                  },
                  {
                      "id":  "output.release_knowledge",
                      "label":  "发布知识库",
                      "layer":  "layer.outputs",
                      "slot":  8
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
                                          "col":  1
                                      },
                                      {
                                          "id":  "understand.scene_match",
                                          "label":  "场景匹配",
                                          "row":  1,
                                          "col":  3
                                      },
                                      {
                                          "id":  "understand.constraint_check",
                                          "label":  "约束校验",
                                          "row":  3,
                                          "col":  1,
                                          "loop":  true
                                      },
                                      {
                                          "id":  "understand.knowledge_gap",
                                          "label":  "知识缺口",
                                          "row":  3,
                                          "col":  3
                                      },
                                      {
                                          "id":  "understand.intent_summary",
                                          "label":  "意图摘要",
                                          "row":  5,
                                          "col":  2
                                      }
                                  ]
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
                                          "col":  2
                                      },
                                      {
                                          "id":  "plan.cost_estimate",
                                          "label":  "成本评估",
                                          "row":  2,
                                          "col":  1
                                      },
                                      {
                                          "id":  "plan.risk_budget",
                                          "label":  "风险预算",
                                          "row":  2,
                                          "col":  3
                                      },
                                      {
                                          "id":  "plan.release_slice",
                                          "label":  "发布切片",
                                          "row":  4,
                                          "col":  2
                                      },
                                      {
                                          "id":  "plan.review_pack",
                                          "label":  "评审包",
                                          "row":  5,
                                          "col":  3
                                      }
                                  ]
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
                                          "col":  2
                                      },
                                      {
                                          "id":  "execute.patch_gen",
                                          "label":  "补丁生成",
                                          "row":  2,
                                          "col":  1
                                      },
                                      {
                                          "id":  "execute.test_stub",
                                          "label":  "桩例生成",
                                          "row":  2,
                                          "col":  3
                                      },
                                      {
                                          "id":  "execute.merge_review",
                                          "label":  "合并审查",
                                          "row":  4,
                                          "col":  2
                                      },
                                      {
                                          "id":  "execute.refactor_note",
                                          "label":  "重构备注",
                                          "row":  5,
                                          "col":  1
                                      },
                                      {
                                          "id":  "execute.sync_marker",
                                          "label":  "同步标记",
                                          "row":  5,
                                          "col":  3
                                      }
                                  ]
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
                                          "col":  1
                                      },
                                      {
                                          "id":  "verify.defect_bucket",
                                          "label":  "缺陷归桶",
                                          "row":  2,
                                          "col":  2
                                      },
                                      {
                                          "id":  "verify.rerun",
                                          "label":  "重跑验证",
                                          "row":  3,
                                          "col":  1,
                                          "loop":  true
                                      },
                                      {
                                          "id":  "verify.acceptance",
                                          "label":  "验收结论",
                                          "row":  4,
                                          "col":  3
                                      },
                                      {
                                          "id":  "verify.audit_record",
                                          "label":  "审计记录",
                                          "row":  5,
                                          "col":  2
                                      }
                                  ]
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
