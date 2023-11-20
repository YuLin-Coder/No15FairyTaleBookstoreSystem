package com.li.service;

import com.li.model.AdminOrder;

import java.util.List;

public interface IOrderService {

    List<AdminOrder> list(int start, Integer offset);

    int listCount();

    int delete(Integer id);

    int add(AdminOrder order);
}
