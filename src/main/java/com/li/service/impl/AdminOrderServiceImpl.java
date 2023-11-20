package com.li.service.impl;

import com.li.dao.AdminOrderMapper;
import com.li.model.AdminOrder;
import com.li.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminOrderServiceImpl implements IOrderService {

    @Autowired
    private AdminOrderMapper adminOrderMapper;

    @Override
    public List<AdminOrder> list(int start, Integer offset) {
        return adminOrderMapper.list(start, offset);
    }

    @Override
    public int listCount() {
        return adminOrderMapper.listCount();
    }

    @Override
    public int delete(Integer id) {
        return adminOrderMapper.delete(id);
    }

    @Override
    public int add(AdminOrder order) {
        return adminOrderMapper.add(order);
    }
}
