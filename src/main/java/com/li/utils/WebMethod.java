package com.li.utils;

import javax.servlet.http.HttpServletRequest;

public class WebMethod {
	
	public static String getString(HttpServletRequest request, String name){
		return request.getParameter(name);
	}

	public static Integer getInt(HttpServletRequest request, String name){
		String val = request.getParameter(name);
		return Integer.valueOf(val);
	}
}
