package com.li.service.impl;

import com.li.dao.AdminPublisherMapper;
import com.li.model.AdminPublisher;
import com.li.service.IPublisherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminPublisherServiceImpl implements IPublisherService {

    @Autowired
    private AdminPublisherMapper adminPublisherMapper;

    @Override
    public List<AdminPublisher> list(int start, Integer offset) {
        return adminPublisherMapper.list(start, offset);
    }

    @Override
    public int listCount() {
        return adminPublisherMapper.listCount();
    }

    @Override
    public int delete(Integer id) {
        return adminPublisherMapper.delete(id);
    }

    @Override
    public int add(AdminPublisher publisher) {
        return adminPublisherMapper.add(publisher);
    }
}
