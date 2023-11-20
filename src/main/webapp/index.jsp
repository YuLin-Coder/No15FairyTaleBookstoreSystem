<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
    pageContext.setAttribute("APP_PATH", request.getContextPath());
    request.setAttribute("error", request.getParameter("error"));
%>
<html>
<head>
    <title>Book Admin</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-store">

    <link rel="shortcut icon" href="${APP_PATH}/favicon.ico"/>
    <link type="text/css" rel="stylesheet" href="${APP_PATH}/assets/plugins/bootstrap/css/bootstrap.min.css"/>
    <link type="text/css" rel="stylesheet" href="${APP_PATH}/assets/css/styles.css"/>

    <script type="text/javascript" src="${APP_PATH}/assets/plugins/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="${APP_PATH}/assets/plugins/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="${APP_PATH}/assets/plugins/bootbox/bootbox.min.js"></script>
    <script type="text/javascript">
        function valiLogin(){
            var username = $('#username').val().trim();
            var password = $('#password').val().trim();
            if(username === '' || password === ''){
                bootbox.alert('用户名或密码不能为空！');
                return false;
            }
        }
    </script>
</head>
<body>
<div class="wrapper" id="wrapper" style="width: 30em;">
    <form action="${pageContext.request.contextPath }/admin/login"
          class="form-signin" onsubmit="return valiLogin()" method="post">
        <div class="input-group" style="margin: auto;">
            <img src="${pageContext.request.contextPath }/images/login.png"/>
        </div>
        <hr class="spartan">
        <div class="input-group">
				<span class="input-group-addon" id="sizing-addon1"> <i
                        class="glyphicon glyphicon-user"></i>
				</span>
            <input type="text" class="form-control" id="username" name="username" placeholder="Username" style="width: 100%;"/>
        </div>
        <div class="input-group">
            <span class="input-group-addon" id="sizing-addon1"> <i class="glyphicon glyphicon-lock"></i></span>
            <input type="password" class="form-control" id="password" name="password" placeholder="Password"/>
        </div>
        <input type="submit" class="btn btn-lg btn-warning btn-block" value="登录"/>
    </form>
</div>
</body>

<script type="text/javascript">
    if(navigator.userAgent.indexOf('Firefox') > -1){
        $('#wrapper').css('top', function(){
            return $(document).height()/2 + 'px';
        });
    }
    var error = '${requestScope.error}';
    if(error === '0' || error === '1'){
        alert('用户名或密码错误！');
    }
    if(error === '2'){
        alert('该用户已被禁用，请联系管理员');
    }
    if(error === '3'){
        alert('请先登录!');
    }
</script>
</html>
