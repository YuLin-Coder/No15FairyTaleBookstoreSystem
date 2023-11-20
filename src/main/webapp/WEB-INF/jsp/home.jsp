<%@ page language="java" contentType="text/html; charset=UTF-8"
		 pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-store">
	<meta http-equiv="expires" content="0">
	<title>管理页面</title>
	<%
		pageContext.setAttribute("APP_PATH", request.getContextPath());
	%>
	<link rel="shortcut icon" href="${APP_PATH}/favicon.ico" />
	<link href="${pageContext.request.contextPath}/assets/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
	<link href="${pageContext.request.contextPath}/assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
	<link href="${pageContext.request.contextPath}/assets/plugins/uniform/css/uniform.default.css" rel="stylesheet" type="text/css"/>
	<link href="${pageContext.request.contextPath}/assets/plugins/bootstrap-fileinput-master/css/fileinput.min.css" rel="stylesheet" type="text/css"/>

	<link href="${pageContext.request.contextPath}/assets/plugins/bootstrap-daterangepicker/daterangepicker-bs3.css" rel="stylesheet" type="text/css" />
	<link href="${pageContext.request.contextPath}/assets/plugins/bootstrap-select/css/bootstrap-select.min.css" rel="stylesheet" type="text/css"/>
	<link href="${pageContext.request.contextPath}/assets/plugins/bootstrap-datetimepicker3/css/bootstrap-datetimepicker.css" rel="stylesheet" type="text/css"/>

	<link href="${pageContext.request.contextPath}/assets/plugins/bootstrap-timepicker/compiled/timepicker.css" rel="stylesheet" type="text/css"/>
	<link href="${pageContext.request.contextPath}/assets/plugins/fullcalendar/fullcalendar/fullcalendar.css" rel="stylesheet" type="text/css"/>
	<link href="${pageContext.request.contextPath}/assets/plugins/jquery-easy-pie-chart/jquery.easy-pie-chart.css" rel="stylesheet" type="text/css"/>
	<link href="${pageContext.request.contextPath}/assets/plugins/select2-404/css/select2.min.css" rel="stylesheet" type="text/css"/>
	<link href="${pageContext.request.contextPath}/assets/plugins/data-tables/DT_bootstrap.css" rel="stylesheet" type="text/css"/>
	<link href="${pageContext.request.contextPath}/assets/css/style-metronic.css" rel="stylesheet" type="text/css"/>
	<link href="${pageContext.request.contextPath}/assets/css/style.css" rel="stylesheet" type="text/css"/>
	<link href="${pageContext.request.contextPath}/assets/css/reset.css" rel="stylesheet" type="text/css"/>
	<link href="${pageContext.request.contextPath}/assets/css/style-responsive.css" rel="stylesheet" type="text/css"/>
	<link href="${pageContext.request.contextPath}/assets/css/plugins.css" rel="stylesheet" type="text/css"/>
	<link href="${pageContext.request.contextPath}/assets/css/pages/tasks.css" rel="stylesheet" type="text/css"/>
	<link href="${pageContext.request.contextPath}/assets/css/themes/default.css" rel="stylesheet" type="text/css" id="style_color" />
	<link href="${pageContext.request.contextPath}/assets/css/custom.css" rel="stylesheet" type="text/css"/>
	<link href="${pageContext.request.contextPath}/assets/plugins/bootstrap-touchspin/jquery.bootstrap-touchspin.min.css" rel="stylesheet" type="text/css"/>
	<link href="${pageContext.request.contextPath}/assets/plugins/jquery-ui/jquery-ui-1.10.3.custom.min.css" rel="stylesheet" type="text/css"/>

	<script src="${pageContext.request.contextPath }/assets/plugins/jquery-1.10.2.min.js" type="text/javascript"></script>
	<script src="${pageContext.request.contextPath }/assets/plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
	<script src="${pageContext.request.contextPath }/assets/plugins/bootstrap-fileinput-master/js/fileinput.js" type="text/javascript"></script>
	<script src="${pageContext.request.contextPath }/assets/plugins/bootstrap-fileinput-master/themes/fa/theme.min.js" type="text/javascript"></script>
	<script src="${pageContext.request.contextPath }/assets/plugins/bootstrap-fileinput-master/js/locales/zh.js" type="text/javascript"></script>
	<script src="${pageContext.request.contextPath }/assets/plugins/bootstrap-modal/js/bootstrap-modal.js" type="text/javascript"></script>
	<script src="${pageContext.request.contextPath }/assets/plugins/bootstrap-modal/js/bootstrap-modalmanager.js" type="text/javascript"></script>

	<script src="${pageContext.request.contextPath }/assets/plugins/jquery-migrate-1.2.1.min.js" type="text/javascript"></script>
	<script src="${pageContext.request.contextPath }/assets/plugins/jquery-ui-touch-punch/jquery.ui.touch-punch.min.js" type="text/javascript"></script>
	<script src="${pageContext.request.contextPath }/assets/plugins/jquery-ui/jquery-ui-1.10.3.custom.min.js" type="text/javascript"></script>
	<script src="${pageContext.request.contextPath }/assets/plugins/bootstrap-hover-dropdown/twitter-bootstrap-hover-dropdown.min.js" type="text/javascript"></script>

	<script src="${pageContext.request.contextPath }/assets/plugins/bootstrap-datetimepicker3/js/moment.js" type="text/javascript"></script>
	<script src="${pageContext.request.contextPath }/assets/plugins/bootstrap-datetimepicker3/js/bootstrap-datetimepicker.js" type="text/javascript"></script>
	<script src="${pageContext.request.contextPath }/assets/plugins/bootstrap-datetimepicker3/js/locale/zh-cn.js" type="text/javascript"></script>
	<script src="${pageContext.request.contextPath }/assets/plugins/bootstrap-select/js/bootstrap-select.min.js" type="text/javascript"></script>

	<script src="${pageContext.request.contextPath }/assets/plugins/jquery-slimscroll/jquery.slimscroll.min.js" type="text/javascript"></script>
	<script src="${pageContext.request.contextPath }/assets/plugins/jquery.blockui.min.js" type="text/javascript"></script>
	<script src="${pageContext.request.contextPath }/assets/plugins/jquery.cookie.min.js" type="text/javascript"></script>
	<script src="${pageContext.request.contextPath }/assets/plugins/uniform/jquery.uniform.min.js" type="text/javascript"></script>

	<script src="${pageContext.request.contextPath }/assets/plugins/flot/jquery.flot.js" type="text/javascript"></script>
	<script src="${pageContext.request.contextPath }/assets/plugins/flot/jquery.flot.resize.js" type="text/javascript"></script>
	<script src="${pageContext.request.contextPath }/assets/plugins/jquery.pulsate.min.js" type="text/javascript"></script>
	<script src="${pageContext.request.contextPath }/assets/plugins/bootstrap-daterangepicker/moment.min.js" type="text/javascript"></script>
	<script src="${pageContext.request.contextPath }/assets/plugins/bootstrap-daterangepicker/daterangepicker.js" type="text/javascript"></script>

	<script src="${pageContext.request.contextPath }/assets/plugins/fullcalendar/fullcalendar/fullcalendar.min.js" type="text/javascript"></script>
	<script src="${pageContext.request.contextPath }/assets/plugins/jquery-easy-pie-chart/jquery.easy-pie-chart.js" type="text/javascript"></script>
	<script src="${pageContext.request.contextPath }/assets/plugins/jquery.sparkline.min.js" type="text/javascript"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/assets/plugins/jquery-validation/dist/jquery.validate.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/assets/plugins/jquery-validation/localization/messages_zh.js"></script>

	<script src="${pageContext.request.contextPath }/assets/scripts/app.js" type="text/javascript"></script>
	<script src="${pageContext.request.contextPath }/assets/scripts/index.js" type="text/javascript"></script>
	<script src="${pageContext.request.contextPath }/assets/scripts/tasks.js" type="text/javascript"></script>
	<script src="${pageContext.request.contextPath }/assets/plugins/jquery-idle-timeout/jquery.idletimeout.js" type="text/javascript" ></script>
	<script src="${pageContext.request.contextPath }/assets/plugins/jquery-idle-timeout/jquery.idletimer.js" type="text/javascript" ></script>
	<script src="${pageContext.request.contextPath }/assets/scripts/idle-timeout.js" type="text/javascript"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/assets/plugins/data-tables/jquery.dataTables.min.js"></script>

	<script src="${pageContext.request.contextPath }/assets/plugins/bootbox/bootbox.min.js" type="text/javascript"></script>

	<script type="text/javascript" src="${pageContext.request.contextPath }/assets/plugins/select2-404/js/select2.min.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/assets/plugins/select2-404/js/i18n/zh-CN.js"></script>

	<script type="text/javascript" src="${pageContext.request.contextPath }/assets/plugins/data-tables/DT_bootstrap.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/admin/common.js"></script>

	<script type="text/javascript" src="${pageContext.request.contextPath }/assets/plugins/tableExport/tableExport.min.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/assets/plugins/json2.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/assets/plugins/bootstrap-touchspin/jquery.bootstrap-touchspin.min.js"></script>

	<script type="text/javascript" src="${pageContext.request.contextPath }/admin/sys/main.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/admin/sys/modernizr.js"></script><script src="${pageContext.request.contextPath}/assets/plugins/highcharts/highcharts.js" type="text/javascript"></script>
	<script src="${pageContext.request.contextPath}/assets/plugins/highcharts/highcharts-3d.js" type="text/javascript"></script>

	<!-- uedit富文本编辑器 -->
	<script type="text/javascript" src="${pageContext.request.contextPath }/assets/plugins/uedit1433/ueditor.config.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/assets/plugins/uedit1433/ueditor.all.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/assets/plugins/uedit1433/lang/zh-cn/zh-cn.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/assets/plugins/uedit1433/ueditor.extend.js"></script>
	<style type="text/css">
		.pagination li a{
			line-height:1.2
		}
	</style>
</head>
<script>
    window.UEDITOR_HOME_URL = "${pageContext.request.contextPath }/assets/plugins/uedit1433/";
    //ueditor富文本编辑器工具栏
    var ueToolbars = [['fullscreen', 'source', '|', 'undo', 'redo', '|',
        'paragraph', 'fontfamily', 'fontsize', '|','bold',
        'italic', 'underline', 'fontborder', 'strikethrough',
        'superscript', 'subscript', 'removeformat',
        '|', 'forecolor', 'backcolor', 'insertorderedlist',
        'insertunorderedlist', 'selectall', 'cleardoc', '|',
        'rowspacingtop', 'rowspacingbottom', 'lineheight'
    ],[
        'indent','justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|',
        'link', 'unlink','simpleupload','map','|', 'imagenone',  'imageleft', 'imageright', 'imagecenter', '|',
        'horizontal', 'date', 'time','spechars','|','inserttable', 'deletetable',
        'insertparagraphbeforetable', 'insertrow', 'deleterow',
        'insertcol', 'deletecol', 'mergecells', 'mergeright',
        'mergedown', 'splittocells', 'splittorows', 'splittocols','|','preview'
    ]];

    var checkedDevIdArr = new Array(); //用于网络配置菜单 存储操作的设备编号
    var batchDevIdArr = new Array();   //用于批量部署菜单 存储操作的设备编号
    var contextPath = "${pageContext.request.contextPath}";
    bootbox.setDefaults("locale","zh_CN");//弹框设置为中文
    var pageContent = $('.page-content');//操作后等待层
    var pageContentBody = $('.page-content .page-content-body');
    //设置Jquery ajax请求不缓存
    $.ajaxSetup({ cache: false });
    jQuery(document).ready(function() {
        App.init(); // initlayout and core plugins
        Index.init();
        //Index.initJQVMAP(); // init index page's custom scripts
        Index.initCalendar(); // init index page's custom scripts
        Index.initCharts(); // init index page's custom scripts
        Index.initChat();
        Index.initMiniCharts();
        Index.initDashboardDaterange();
        Index.initIntro();
        Tasks.initDashboardWidget();
    });

    function changeLanguage(language)
    {
        $.ajax({
            type: "POST",
            url: "/changeLanguage",
            data: "language="+language,
            dataType:"text",
            async: true,
            error: function() {
                alert("change lang error!");
            },
            success: function(data) {
                location.reload();
            }
        });
    }
</script>
<body class="page-header-fixed">
<!-- BEGIN HEADER -->
<div class="header navbar navbar-inverse navbar-fixed-top">
	<!-- BEGIN TOP NAVIGATION BAR -->
	<div class="header-inner">
		<!-- BEGIN LOGO --><img
			src="${pageContext.request.contextPath}/images/logo.png" alt="logo"
			style="position: relative; float: left; width: 87px; height: 30px; margin: 5px 0px 5px 20px;" />
		<div style="position: relative; float: left; height: 40px; font-size: 16px; margin: 10px 10px; color: #fff;"></div>
		<!-- END LOGO -->
		<!-- BEGIN RESPONSIVE MENU TOGGLER -->
		<a href="javascript:;" class="navbar-toggle" data-toggle="collapse"
		   data-target=".navbar-collapse"> <img
				src="${pageContext.request.contextPath}/assets/img/menu-toggler.png"
				alt="" />
		</a>
		<!-- BEGIN TOP NAVIGATION MENU -->
		<ul class="nav navbar-nav pull-right">
			<li class="dropdown">
				<a href="#" class="dropdown-toggle"	data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
					<i class="fa fa-user"></i>
					<span class="username">${sessionScope["SYS_USER_INFO"].user.userLoginName}</span> <i class="fa fa-angle-down"></i>
				</a>
				<ul class="dropdown-menu">
					<li><a href="${APP_PATH}/LogOut"><i class="fa  fa-sign-out"></i>&nbsp;&nbsp;退出</a></li>
				</ul>
			</li>
			<!-- END USER LOGIN DROPDOWN -->
		</ul>
		<!-- END TOP NAVIGATION MENU -->
	</div>
	<!-- END TOP NAVIGATION BAR -->
</div>
<!-- END HEADER -->
<div class="clearfix"></div>
<!-- BEGIN CONTAINER -->
<div class="page-container">
	<div class="page-sidebar navbar-collapse collapse">
		<!-- BEGIN SIDEBAR MENU -->
		<ul class="page-sidebar-menu">
			<li>
				<div class="sidebar-toggler hidden-phone"></div>
			</li>
			<li class="">
				<a>
					<i class="fa fa-user-o"></i>
					<span class="title">客户信息管理</span>
					<span class="arrow"></span>
				</a>
				<ul class="sub-menu">
					<li>
						<a class="" href="${APP_PATH}/admin/page/forword?url=admincustomer">客户信息管理</a>
					</li>
				</ul>
			</li>
			<li class="">
				<a>
					<i class="fa fa-newspaper-o"></i>
					<span class="title">出版社管理</span>
					<span class="arrow"></span>
				</a>
				<ul class="sub-menu">
					<li>
						<a class="" href="${APP_PATH}/admin/page/forword?url=adminpublisher">出版社管理</a>
					</li>
				</ul>
			</li>
			<li class="">
				<a>
					<i class="fa fa-share-alt"></i>
					<span class="title">订单管理</span>
					<span class="arrow"></span>
				</a>
				<ul class="sub-menu">
					<li>
						<a class="" href="${APP_PATH}/admin/page/forword?url=adminorder">订单管理</a>
					</li>
				</ul>
			</li>
			<li class="">
				<a>
					<i class="fa fa-database"></i>
					<span class="title">书籍管理</span>
					<span class="arrow"></span>
				</a>
				<ul class="sub-menu">
					<li>
						<a class="" href="${APP_PATH}/admin/page/forword?url=adminbook">书籍管理</a>
					</li>
				</ul>
			</li>
		</ul>
		<!-- END SIDEBAR MENU -->
	</div>
	<!-- END SIDEBAR -->
	<!-- BEGIN PAGE -->
	<input id="loginId" type="hidden" value="${sessionScope.user.userid}" />
	<div id="mainPanle" class="page-content">
		<div class = "page-content-body">
			<%@include file="admincustomer.jsp"%>
		</div>
	</div>
	<!-- END PAGE -->
</div>

<script type="text/javascript" src="${pageContext.request.contextPath}/admin/home.js"></script>
</body>
<!-- END BODY -->
</html>