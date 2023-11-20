package com.li.commons;

public class UUID {

	/**
	 * 生成随机数
	 * @return
	 */
	public static synchronized String randomUUID() {
		return java.util.UUID.randomUUID().toString();
	}
	
	/**
	 * 生成随机数并替换横线
	 * @return
	 */
	public static synchronized String getUUIDFor32() {
		return java.util.UUID.randomUUID().toString().replace("-", "");
	}
}
