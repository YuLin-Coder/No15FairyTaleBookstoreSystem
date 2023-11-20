package com.li.controller;


import com.li.model.RegistUserVo;
import com.li.model.User;
import com.li.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;
import java.util.List;

/*
 * @author:李函屿
 * @description:用户管理控制操作
 */


@Controller
public class UserController {
	@Autowired
	private UserService userService;

	//用户登录
	@RequestMapping("/login")
	public String UserLogin(HttpSession session, User user, Model model)
	{
		
		User user2=userService.userLogin(user);
		if (user2!=null && user2.getGrade() != null && "管理员".equals(user2.getGrade())){
			Object admin = session.getAttribute("user");
			if (admin != null) {
				session.removeAttribute("user");
			}
			session.setAttribute("user", user);
			return "redirect:/admin/home";
		}
		if(user2!=null)
		{
		session.setAttribute("LoginUser", user2);
		return "forward:index.action";
		}
		else
		{
			model.addAttribute("error","loginerror");
			return "myaccount";
		}
	}
		//用户注销
		@RequestMapping("/LogOut")
		public String UserLogOut(HttpSession session)
		{
			
			session.removeAttribute("LoginUser");
			return "redirect:index.action";
		}

	@RequestMapping(value = {"","/"})
	public String to_index_page(HttpSession session)
	{

		session.removeAttribute("LoginUser");
		return "redirect:index.action";
	}
	
		@RequestMapping("/updateuser")
		public String userUpdate(HttpSession session, User user, long userid)
		{
			user.setUserid(userid);
			userService.updateUser(user);
			
			User user2=userService.selectUserByid(userid);
			session.setAttribute("LoginUser", user2);
			return "myaccount";
		}
		@RequestMapping("/registuser")
		public String registUser(Model model, @Validated @ModelAttribute RegistUserVo user, BindingResult bindingResult
				)
		{	
			
			//String agree=request.getParameter("agree");
	
		//	System.out.println(agree);
			if(userService.existUser(user))
			{
				bindingResult.rejectValue("username", "userExist", "用户名已存在");
				
			}
			if(!user.getPassword_().equals(user.getRepeatpassword()))
			{
				bindingResult.rejectValue("repeatpassword", "passwordError", "两次输入密码不一致");
				
			}
			if(bindingResult.hasErrors())
			{
				
				//获取错误
				List<ObjectError>  errors=bindingResult.getAllErrors();
				model.addAttribute("errors",errors);
				model.addAttribute("registuser",user);
				System.out.println(user.getUsername());
				return "register";
			}
			
			else
			{
				userService.regist(user);
				model.addAttribute("logininfo","注册成功，请登陆！");
				return "myaccount";	
			}
			
				
		
				
			
		}
	
	
}
