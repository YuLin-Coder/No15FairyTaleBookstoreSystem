package com.li.dao;

import com.li.model.AdminGood;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface AdminGoodMapper {

    List<AdminGood> list(@Param("limit") Integer limit, @Param("offset") Integer offset);

    int listCount();

    int delete(@Param("id") Integer id);

    int add(AdminGood user);
}