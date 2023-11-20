package com.li.dao;

import com.li.model.AdminPublisher;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface AdminPublisherMapper {
    List<AdminPublisher> list(@Param("limit") Integer limit, @Param("offset") Integer offset);

    int listCount();

    int delete(@Param("id") Integer id);

    int add(AdminPublisher user);
}