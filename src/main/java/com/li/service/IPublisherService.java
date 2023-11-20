package com.li.service;

import com.li.model.AdminPublisher;

import java.util.List;

public interface IPublisherService {

    List<AdminPublisher> list(int start, Integer offset);

    int listCount();

    int delete(Integer id);

    int add(AdminPublisher publisher);
}
