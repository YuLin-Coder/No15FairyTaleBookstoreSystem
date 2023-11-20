package com.li.service;

import com.li.model.AdminUser;

import java.util.List;

public interface IUserService {

    AdminUser getUserByUsername(String username);

    List<AdminUser> list(int start, Integer offset);

    int listCount();

    int delete(Integer id);

    int add(AdminUser user);
}
