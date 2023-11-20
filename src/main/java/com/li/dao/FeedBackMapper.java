package com.li.dao;


/*
 * @author:李函屿
 * @description:留言反馈数据库持久层映射
 */

import com.li.model.FeedBack;

import java.util.List;

public interface FeedBackMapper {

	List<FeedBack> SelectLeaveMessage();

	void saveFeedBack(FeedBack feedback);

}
