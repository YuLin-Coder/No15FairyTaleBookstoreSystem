package com.li.controller;

import com.li.commons.BaseResult;
import com.li.commons.DataGrid;
import com.li.commons.UUID;
import com.li.model.AdminOrder;
import com.li.service.IOrderService;
import com.li.utils.WebMethod;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RequestMapping("/order")
@Controller
public class AdminOrderController {

	@Autowired
	private IOrderService orderService;

	@ResponseBody
	@RequestMapping("/list")
	public DataGrid<AdminOrder> getList(HttpServletRequest request) {

		Integer offset = WebMethod.getInt(request, "rows");
		Integer curPage = WebMethod.getInt(request, "page");
		int start = 0;
		if(offset != null && curPage != null){
			start = offset * (curPage - 1);
		}

		List<AdminOrder> list = orderService.list(start, offset);
		int count = orderService.listCount();

		return new DataGrid<AdminOrder>(count, 0, list);
	}

	@ResponseBody
	@RequestMapping("/delete")
	public BaseResult delete(HttpServletRequest request) {
		Integer id = WebMethod.getInt(request, "id");
		int i = orderService.delete(id);
		return BaseResult.ok("删除成功");
	}

	@ResponseBody
	@RequestMapping("/add")
	public BaseResult add(HttpServletRequest request) {
		String ordername = WebMethod.getString(request, "ordername");
		AdminOrder order = new AdminOrder();
		order.setOrdername(ordername);
		order.setOrdernumber(UUID.getUUIDFor32());
		order.setOrderstatus(0);
		orderService.add(order);
		return BaseResult.ok("新增成功");
	}
}
