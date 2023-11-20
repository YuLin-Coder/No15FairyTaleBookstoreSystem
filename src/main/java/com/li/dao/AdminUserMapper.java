package com.li.dao;

import com.li.model.AdminUser;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface AdminUserMapper {

    AdminUser selectByUserId(@Param("userid") Long userid);

    AdminUser getUserByUsername(@Param("username") String username);

    List<AdminUser> list(@Param("limit") Integer limit, @Param("offset") Integer offset);

    int listCount();

    int delete(@Param("id") Integer id);

    int add(AdminUser user);
}