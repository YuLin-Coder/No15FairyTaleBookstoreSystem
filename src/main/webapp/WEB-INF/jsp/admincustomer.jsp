<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-store">
<meta http-equiv="expires" content="0">
<link href="${pageContext.request.contextPath}/assets/plugins/bootstrap-datetimepicker3/css/bootstrap-datetimepicker.css" rel="stylesheet" type="text/css"/>
</head>
<body>
	<jsp:include page="/admin/pageHead.jsp" flush="true">
	   <jsp:param name="menuNameCn" value="客户信息管理"/>
	   <jsp:param name="menuNameEn" value="customer information setting"/>
	   <jsp:param name="menuName1"  value="客户信息管理"/>
	   <jsp:param name="menuName2"  value="客户信息管理"/>
	</jsp:include>
	<div class="row">
		<div class="col-md-12">				
			<div class="portlet box green">
					<div class="portlet-title">
						<div class="caption"><i class="fa fa-edit"></i>客户信息管理</div>
					</div>
					<div class="portlet-body">
						<div class="table-toolbar">
							<div class="btn-group">
								<button id="btn_add" class="btn blue" data-toggle="modal">									
									<i class="fa fa-plus"></i>新建
								</button>
								<%--<button id="btn_delete" class="btn red">									--%>
									<%--<i class="fa fa-trash-o"></i>删除--%>
								<%--</button>--%>
							</div>
						</div>
						<table class="table table-striped table-bordered table-hover" id="myTable">
							<thead>
								<tr>
									<th>编号</th>
									<th>客户姓名</th>
									<th>等级</th>
									<th>真实姓名</th>
									<th>邮箱</th>
									<th>电话</th>
									<th>地址</th>
									<th>操作</th>
								</tr>
							</thead>
							<tbody></tbody>
						</table>
					</div>						
				</div>					
			</div>
		</div>
			
		<!-- 添加/编辑 -->	
		<div id="model_add_edit" class="modal fade" tabindex="-1" aria-hidden="true">	
	         <div class="modal-dialog" style="width: 500px;">
	           <div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
						<h4 class="modal-title">新增用户</h4>
					</div>
					<div class="modal-body">
						<form class="form-horizontal" id="myForm">
							<div class="form-group">
								<label class="col-sm-3 control-label row">用户名：</label>
								<div class="col-sm-9">
									<input class="form-control" id="username"></input>
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-3 control-label row">密码：</label>
								<div class="col-sm-9">
									<input class="form-control" id="password"></input>
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-3 control-label row">等级：</label>
								<div class="col-sm-9">
									<input class="form-control" id="grade"></input>
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-3 control-label row">真实姓名：</label>
								<div class="col-sm-9">
									<input class="form-control" id="truename"></input>
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-3 control-label row">邮箱：</label>
								<div class="col-sm-9">
									<input class="form-control" id="email"></input>
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-3 control-label row">电话：</label>
								<div class="col-sm-9">
									<input class="form-control" id="phone"></input>
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-3 control-label row">地址：</label>
								<div class="col-sm-9">
									<input class="form-control" id="address"></input>
								</div>
							</div>
						</form>
					</div>
					<div class="modal-footer">
						<input type="hidden" id="id" value="0"/>
						<button type="button" data-dismiss="modal" class="btn default">关闭</button>
						<button id="btn_save" type="button" class="btn green">保存</button>
					</div>	
			</div>
		</div>
	</div>
	<script type="text/javascript" src="${pageContext.request.contextPath}/admin/customer.js"></script>
  </body>
</html>