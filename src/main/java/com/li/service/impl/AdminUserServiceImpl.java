package com.li.service.impl;

import com.li.dao.AdminUserMapper;
import com.li.model.AdminUser;
import com.li.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminUserServiceImpl implements IUserService {

    @Autowired
    private AdminUserMapper adminUserMapper;


    @Override
    public AdminUser getUserByUsername(String username) {
        return adminUserMapper.getUserByUsername(username);
    }

    @Override
    public List<AdminUser> list(int start, Integer offset) {
        return adminUserMapper.list(start, offset);
    }

    @Override
    public int listCount() {
        return adminUserMapper.listCount();
    }

    @Override
    public int delete(Integer id) {
        return adminUserMapper.delete(id);
    }

    @Override
    public int add(AdminUser user) {
        return adminUserMapper.add(user);
    }
}
