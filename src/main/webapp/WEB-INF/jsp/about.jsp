<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<link rel="stylesheet" href="css/header.css">
	<link rel="stylesheet" href="css/content.css">
	<link rel="stylesheet" href="css/footer.css">
	<link rel="stylesheet" href="css/about.css">
</head>
<body>
	<jsp:include page="head.jsp"></jsp:include>
	<div id="content">
		<div id="content-left">
			<div class="gray">
				<img src="images/bullet1.gif"> 关于我们
			</div>
			<div id="about">
				<img src="images/bookshelf.jpg">
				<div class="item">
					<div class="box_top"></div>
					<div class="box_center">
						<div class="orange">书店介绍:</div>
						<p class="details">
							这是一个童话书店，童话书简单易懂，爱恨分明，善有善报，恶有恶报，结果在意料之中，而且都是美好的结局。
							阅读童话故事时心情愉快，可以暂时忘却很多现实生活中的不如意，让平日超载的心，留出一分纯净的天空。
							童话也是在用一些简单的比喻阐述一些真理，比如长鼻子的匹诺曹教育人们不要说谎；用人鱼公主的故事教会人们懂得付出。
							让人常怀梦想。有梦才有希望，有梦才能实现梦想！
							书店是人民集体意志创造的结晶，它铸造的不仅是先锋风格的人文品牌，更是人民的精神品格和思想品质。
						</p>
					</div>
					<div class="box_bottom"></div>
				</div>
			</div>
			<hr>
			<qouteblock>“每个以自己的方式想象天堂;从小我设想它作为图书馆。”-Jorge路易斯·博尔赫斯 </qouteblock>
		</div>
	<jsp:include page="content-right.jsp"></jsp:include>
	</div>
	<jsp:include page="footer.jsp"></jsp:include>
</body>

</html>