package com.li.service.impl;

import com.li.dao.AdminGoodMapper;
import com.li.model.AdminGood;
import com.li.service.IGoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminGoodServiceImpl implements IGoodService {

    @Autowired
    private AdminGoodMapper adminGoodMapper;

    @Override
    public List<AdminGood> list(int start, Integer offset) {
        return adminGoodMapper.list(start, offset);
    }

    @Override
    public int listCount() {
        return adminGoodMapper.listCount();
    }

    @Override
    public int delete(Integer id) {
        return adminGoodMapper.delete(id);
    }

    @Override
    public int add(AdminGood good) {
        return adminGoodMapper.add(good);
    }
}
