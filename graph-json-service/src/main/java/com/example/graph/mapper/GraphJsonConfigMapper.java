package com.example.graph.mapper;

import com.example.graph.model.GraphJsonConfigDO;
import com.example.graph.model.GraphSourceVO;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

public interface GraphJsonConfigMapper {

    @Select("SELECT id, version_code, version_name, graph_json, del_flag, created_by, updated_by, created_at, updated_at " +
            "FROM graph_json_config WHERE version_code = #{versionCode} AND del_flag = 0 FOR UPDATE")
    GraphJsonConfigDO selectActiveForUpdate(@Param("versionCode") String versionCode);

    @Select("SELECT id, version_code, version_name, graph_json, del_flag, created_by, updated_by, created_at, updated_at " +
            "FROM graph_json_config WHERE version_code = #{versionCode} AND del_flag = 0 LIMIT 1")
    GraphJsonConfigDO selectActiveByVersionCode(@Param("versionCode") String versionCode);

    @Select("SELECT version_code AS id, version_name AS label, CONCAT('/api/graph-json/', version_code) AS url " +
            "FROM graph_json_config WHERE del_flag = 0 ORDER BY updated_at DESC")
    List<GraphSourceVO> selectActiveSources();

    @Update("UPDATE graph_json_config SET del_flag = 1, updated_by = #{operator}, updated_at = NOW() " +
            "WHERE version_code = #{versionCode} AND del_flag = 0")
    int fakeDeleteActiveByVersionCode(@Param("versionCode") String versionCode, @Param("operator") String operator);

    @Insert("INSERT INTO graph_json_config(version_code, version_name, graph_json, del_flag, created_by, updated_by, created_at, updated_at) " +
            "VALUES(#{versionCode}, #{versionName}, #{graphJson}, #{delFlag}, #{createdBy}, #{updatedBy}, NOW(), NOW())")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    int insert(GraphJsonConfigDO record);
}
