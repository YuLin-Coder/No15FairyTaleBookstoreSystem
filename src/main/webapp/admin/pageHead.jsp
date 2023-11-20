<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%
	String menuNameCn = (String)request.getParameter("menuNameCn");
	String menuNameEn = (String)request.getParameter("menuNameEn");
	String menuName1  = (String)request.getParameter("menuName1");
	String menuName2  = (String)request.getParameter("menuName2");
	
	if(null == menuNameCn){
		menuNameCn = "";
	}
	if(null == menuNameEn){
		menuNameEn = "";
	}
	if(null == menuName1){
		menuName1 = "";
	}
	if(null == menuName2){
		menuName2 = "";
	}
%>
</head>
<body>
	<!-- BEGIN PAGE HEADER-->
	<div class="row">
		<div class="col-md-12">
			<!-- BEGIN PAGE TITLE & BREADCRUMB-->
			<h3 class="page-title">
				<%=menuNameCn %> <small><%=menuNameEn %></small>
			</h3>
			<ul class="page-breadcrumb breadcrumb">
				<li><i class="fa fa-home"></i> <a>主页</a> <i class="fa fa-angle-right"></i></li>
				<li><a><%=menuName1 %></a> <i class="fa fa-angle-right"></i></li>
				<li><a><%=menuName2 %></a></li>
			</ul>
			<!-- END PAGE TITLE & BREADCRUMB-->
		</div>
	</div>
</body>
</html>
