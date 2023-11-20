package com.li.service;

import com.li.model.AdminGood;

import java.util.List;

public interface IGoodService {

    List<AdminGood> list(int start, Integer offset);

    int listCount();

    int delete(Integer id);

    int add(AdminGood good);
}
