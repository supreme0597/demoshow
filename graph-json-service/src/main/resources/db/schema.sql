CREATE TABLE IF NOT EXISTS graph_json_config (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  version_code VARCHAR(64) NOT NULL COMMENT '版本编码，如 rtos-next',
  version_name VARCHAR(128) NOT NULL COMMENT '版本展示名，如 RTOS NEXT',
  graph_json LONGTEXT NOT NULL COMMENT '完整图谱 JSON',
  del_flag TINYINT NOT NULL DEFAULT 0 COMMENT '0有效，1删除',
  active_version_code VARCHAR(64)
    GENERATED ALWAYS AS (CASE WHEN del_flag = 0 THEN version_code ELSE NULL END) VIRTUAL,
  created_by VARCHAR(64) DEFAULT NULL,
  updated_by VARCHAR(64) DEFAULT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  UNIQUE KEY uk_active_version_code (active_version_code),
  KEY idx_version_del (version_code, del_flag),
  KEY idx_del_updated (del_flag, updated_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='图谱 JSON 配置表';
