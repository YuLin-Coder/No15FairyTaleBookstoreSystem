package com.li.controller;

import com.li.commons.BaseResult;
import com.li.commons.DataGrid;
import com.li.model.AdminUser;
import com.li.service.IUserService;
import com.li.utils.WebMethod;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RequestMapping("/user")
@Controller
public class AdminUserController {

	@Autowired
	private IUserService userService;

	@ResponseBody
	@RequestMapping("/list")
	public DataGrid<AdminUser> getList(HttpServletRequest request) {

		Integer offset = WebMethod.getInt(request, "rows");
		Integer curPage = WebMethod.getInt(request, "page");
		int start = 0;
		if(offset != null && curPage != null){
			start = offset * (curPage - 1);
		}

		List<AdminUser> list = userService.list(start, offset);
		int count = userService.listCount();

		return new DataGrid<AdminUser>(count, 0, list);
	}

	@ResponseBody
	@RequestMapping("/delete")
	public BaseResult delete(HttpServletRequest request) {
		Integer id = WebMethod.getInt(request, "id");
		int i = userService.delete(id);
		return BaseResult.ok("删除成功");
	}

	@ResponseBody
	@RequestMapping("/add")
	public BaseResult add(HttpServletRequest request) {
		String username = WebMethod.getString(request, "username");
		String password = WebMethod.getString(request, "password");
		String grade = WebMethod.getString(request, "grade");
		String truename = WebMethod.getString(request, "truename");
		String email = WebMethod.getString(request, "email");
		String phone = WebMethod.getString(request, "phone");
		String address = WebMethod.getString(request, "address");
		AdminUser user = new AdminUser();
		user.setUsername(username);
		user.setPassword(password);
		user.setGrade(grade);
		user.setTruename(truename);
		user.setEmail(email);
		user.setPhone(phone);
		user.setAddress(address);
		int i = userService.add(user);
		return BaseResult.ok("新增成功");
	}
}
