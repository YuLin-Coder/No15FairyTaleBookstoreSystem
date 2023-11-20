package com.li.controller;

import com.li.model.AdminUser;
import com.li.service.IUserService;
import com.li.utils.WebMethod;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RequestMapping("/admin")
@Controller()
public class AdminLoginController {

	@Autowired
	private IUserService userService;

	@RequestMapping("/to_login")
	public ModelAndView toLogin(@RequestParam(value = "error", required = false) String error) {
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("error", error);
		modelAndView.setViewName("login");
		return modelAndView;
	}

	/**
	 * 用户登录
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/login")
	public Object login(HttpServletRequest request) {
		// 创建返回结果
		String username = WebMethod.getString(request, "username");
		String passwd = WebMethod.getString(request, "password");
		if (StringUtils.isEmpty(username) || StringUtils.isEmpty(passwd)) {
			return "redirect:/admin/to_login?error=0";
		}
		AdminUser user = userService.getUserByUsername(username);
		if (user != null && user.getPassword().equals(passwd)) {
			HttpSession session = request.getSession();
			Object admin = session.getAttribute("user");
			if (admin != null) {
				session.removeAttribute("user");
			}
			session.setAttribute("user", user);
		} else {
			return "redirect:/admin/to_login?error=1";
		}
		return "redirect:/admin/home";
	}

	/**
	 * 主页
	 * @param request
	 * @return
	 */
	@RequestMapping("/home")
	public String home(HttpServletRequest request){
//		HttpSession session = request.getSession();
//		if(session == null){
//			return "redirect:/admin/to_login?error=3";
//		}
//		Object user = session.getAttribute("user");
//		if(user == null){
//			return "redirect:/admin/to_login?error=3";
//		}
		return "/home";
	}

	/**
	 * 用户登出
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/logout")
	public String logout(HttpServletRequest request) {
		HttpSession session = request.getSession();
		Object admin = session.getAttribute("user");
		if (admin != null) {
			session.removeAttribute("user");
		}
		return "redirect:/admin/to_login";
	}

	/**
	 * 页面跳转控制
	 * @param request
	 * @return
	 */
	@RequestMapping("/page/forword")
	public String forword(HttpServletRequest request){
		String url = request.getParameter("url");
		if(url == null){
			return null;
		}
		return url;
	}
}
