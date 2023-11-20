package com.li.service;


import com.li.model.Goods;

import java.util.List;

/*
 * @author:李函屿
 * @description:图书商品业务逻辑接口
 */


public interface GoodsService {
	public List<Goods> selectRandomGoods();
	public List<Goods> selectNewGoods();
	public List<Goods> selectPromotionGoods();
	public List<Goods> selectSpecialGoods();
	public Goods selectGoodsById(String id);
	public List<Goods> selectGoodsByPageNumber(int pageNumber);
	public int seletCountGoods();
	
}
