package com.li.controller;


import com.li.model.FeedBack;
import com.li.service.FeedBackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

/*
 * @author:李函屿
 * @description:留言区控制管理操作
 */


@Controller
public class FeedBackController {
	@Autowired
	private FeedBackService feedBackService;
	@RequestMapping(value="/feedback")
	//留言区
	public String feedback(Model model)
	{	
		List<FeedBack> list=feedBackService.SelectLeaveMessage();
		model.addAttribute("feedbacks", list);
		return "feedback";
	}		
	@RequestMapping(value="/addFeedBack")
	public String feedback(Model model, FeedBack feedback)
	{
		feedBackService.saveFeedBack(feedback);
		List<FeedBack> list=feedBackService.SelectLeaveMessage();
		model.addAttribute("feedbacks", list);
		return "contact";
	}
	
	
	
	
	
	
	
	
}
