package com.li.controller;

import com.li.commons.BaseResult;
import com.li.commons.DataGrid;
import com.li.model.AdminGood;
import com.li.service.IGoodService;
import com.li.utils.WebMethod;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RequestMapping("/book")
@Controller
public class AdminBookController {

	@Autowired
	private IGoodService goodService;

	@ResponseBody
	@RequestMapping("/list")
	public DataGrid<AdminGood> getList(HttpServletRequest request) {

		Integer offset = WebMethod.getInt(request, "rows");
		Integer curPage = WebMethod.getInt(request, "page");
		int start = 0;
		if(offset != null && curPage != null){
			start = offset * (curPage - 1);
		}

		List<AdminGood> list = goodService.list(start, offset);
		int count = goodService.listCount();

		return new DataGrid<AdminGood>(count, 0, list);
	}

	@ResponseBody
	@RequestMapping("/delete")
	public BaseResult delete(HttpServletRequest request) {
		Integer id = WebMethod.getInt(request, "id");
		int i = goodService.delete(id);
		return BaseResult.ok("删除成功");
	}

	@ResponseBody
	@RequestMapping("/add")
	public BaseResult add(HttpServletRequest request) {
		String goodname = WebMethod.getString(request, "goodname");
		String breifintroduction = WebMethod.getString(request, "breifintroduction");
		String detailintroduction = WebMethod.getString(request, "detailintroduction");
		String goodprice = WebMethod.getString(request, "goodprice");
		String category = WebMethod.getString(request, "category");
		AdminGood good = new AdminGood();
		good.setGoodsname(goodname);
		good.setBreifintroduction(breifintroduction);
		good.setDetailintroduction(detailintroduction);
		good.setGoodsprice(Float.valueOf(goodprice));
		good.setCategory(category);
		goodService.add(good);
		return BaseResult.ok("新增成功");
	}
}
