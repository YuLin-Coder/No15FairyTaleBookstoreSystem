package com.li.service.impl;


import com.li.dao.FeedBackMapper;
import com.li.model.FeedBack;
import com.li.service.FeedBackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/*
 * @author:李函屿
 * @description:留言业务逻辑实现
 */

@Service
public class FeedBackServiceImpl implements FeedBackService {
		@Autowired
		private FeedBackMapper feedBackMapper;
		public List<FeedBack> SelectLeaveMessage()
		{
			return feedBackMapper.SelectLeaveMessage();
			
		}
		@Override
		public void saveFeedBack(FeedBack feedback) {
			 feedBackMapper.saveFeedBack(feedback);
			
		}
}
