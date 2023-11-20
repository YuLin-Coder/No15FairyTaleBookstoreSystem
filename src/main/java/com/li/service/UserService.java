package com.li.service;



/*
 * @author:李函屿
 * @description:用户服务业务逻辑接口
 */

import com.li.model.RegistUserVo;
import com.li.model.User;

public interface UserService {
	public User userLogin(User user);

	public void updateUser(User user);
	public User selectUserByid(long userid);

	public boolean existUser(RegistUserVo user);

	public void regist(RegistUserVo user);
	
}
