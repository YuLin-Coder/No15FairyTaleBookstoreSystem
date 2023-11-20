package com.li.service;



import com.li.model.CartItem;
import com.li.model.Goods;
import com.li.model.ShoppingCart;

import javax.servlet.http.Cookie;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
/*
 * @author:李函屿
 * @description:购物车服务业务逻辑接口
 */

public interface ShoppingCartService {
	public String addShoppingCart(Cookie cookie, String id);
	public Cookie cookieSearch(Cookie[] cookie);
	public ArrayList<Goods> getGoods(Map<String, Integer> hsm);
	public String subShoppingCart(Cookie cookie, String id);
	public String subShoppingCartById(Cookie cookie, String id);
	public List<CartItem> generateCartItem(ShoppingCart shopcart);
	
}
