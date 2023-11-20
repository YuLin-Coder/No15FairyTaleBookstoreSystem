package com.li.dao;

/*
 * @author:李函屿
 * @description:用户操作数据库持久层映射
 */


import com.li.model.RegistUserVo;
import com.li.model.User;

public interface UserMapper {
	
	public User selectUserByName(String username);
	public void updateUserById(User user);
	public User selectUserById(long userid);
	public void InserUser(RegistUserVo user);
	
}
