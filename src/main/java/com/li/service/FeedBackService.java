package com.li.service;



/*
 * @author:李函屿
 * @description:留言服务业务逻辑接口
 */


import com.li.model.FeedBack;

import java.util.List;

public interface FeedBackService {
	public List<FeedBack> SelectLeaveMessage();

	public void saveFeedBack(FeedBack feedback);
}
