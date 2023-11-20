package com.li.dao;



/*
 * @author:李函屿
 * @description:图书商品数据库持久层映射
 */

import com.li.model.Goods;

import java.util.List;

public interface GoodsMapper {

	Goods selectGoodsByID(String id);
	int selectCountGoods();
	List<Goods> selectNewGoods();
	List<Goods> selectPromotionGoods();
	List<Goods> selectSpecialGoods();
	List<Goods> selectGoodsByPageNumber(int pageNumber);
	
}
