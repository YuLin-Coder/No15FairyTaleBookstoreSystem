Date.prototype.format = function(fmt) {
	var o = {
		"M+" : this.getMonth() + 1, // 月份
		"d+" : this.getDate(), // 日
		"h+" : this.getHours(), // 小时
		"m+" : this.getMinutes(), // 分
		"s+" : this.getSeconds(), // 秒
		"q+" : Math.floor((this.getMonth() + 3) / 3), // 季度
		"S" : this.getMilliseconds()
	// 毫秒
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "")
				.substr(4 - RegExp.$1.length));
	for ( var k in o)
		if (new RegExp("(" + k + ")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k])
					: (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}

/**
* 列表复选框全选
* @param obj 全选复选框对象
*/
function tableChecked(obj){
	var set = jQuery(obj).attr("data-set");
	var checked = jQuery(obj).is(":checked");
	jQuery(set).each(function () {
	    if (checked) {
	    	if(!$(this).attr("disabled"))
	    		$(this).attr("checked", true);
	    } else {
	        $(this).attr("checked", false);
	    }
	});
	jQuery.uniform.update(set);
}

/**
 * 获取复选框id
 */
function getChecked(checkId){
	var checkedBox = new Array();
	$(checkId).each(function () {
		var checked = $(this).is(":checked");
		if(checked){
			checkedBox.push($(this).val())
		}
	});
	return checkedBox;
}

$(document).on("show.bs.modal", ".modal", function(){
	if($(this).draggable)
    $(this).draggable({
        handle: ".modal-header"   // 只能点击头部拖动
    });
    $(this).css("overflow", "hidden"); // 防止出现滚动条，出现的话，你会把滚动条一起拖着走的
});

/**
 * 插件封装
 * @param $
 */
(function($){
	//表单元素序列化为json对象
	$.fn.formValToJson = function(){
		var jsonObj = {};
		$(this.serializeArray()).each(function () {
			if (jsonObj[this.name]) {//判断表单对象是否已经添加，如果添加，做数组处理，如select、checkbox等
				if (!jsonObj[this.name].push){//如果o[label]不是嵌套在数组
					jsonObj[this.name] = [ jsonObj[this.name] ]; //将o[label]初始为嵌套数组
				}
				jsonObj[this.name].push(this.value || '');
			}else{
				jsonObj[this.name] = this.value || '';  //第一次插入
			}
        });
        return jsonObj;
	}
	
	//表单初始化，将json对象或字符串初始化为form表单元素的值
	$.fn.jsonSetForm = function(jsonObj){
		var $form = this;
		if($.type(jsonObj)=== "string"){
			jsonObj = $.parseJSON(jsonObj);
		}
		
		//判断传入的json对象是否为空，如果不为空，则进行赋值
		if(!$.isEmptyObject(jsonObj)){
			$.each(jsonObj,function(jsonkey,jsonval){
				var formField = $form.find("[name='"+jsonkey+"']"); 
				if($.type(formField[0]) === "undefined"){
					console.warn('JsonSetForm occur formField undefined by jsonkey');
				}else {
					var fieldTagName = formField[0].tagName.toLowerCase();
					//input输入框
					if(fieldTagName == "input"){
						if(formField.attr("type") == "radio" 
							||formField.attr("type") == "radio"){
							formField.each(function(){
								if($.type(jsonval)== 'array'){//checkbox
									for(var i=0;i<jsonval.length;i++){
										if($(this).val()==jsonval[i])  
				                             $(this).attr("checked", "checked");  
									}
								}else{//radio
									if($(this).val()==jsonval)  
				                        $(this).attr("checked", "checked");  
								}
							});
						}else{
							formField.val(jsonval);
						}
					}
					
					//textarea输入框
					if(fieldTagName == "textarea"){
						formField.text(jsonval);
					}
					
					if(fieldTagName == "select"){
						formField.val(jsonval);
					}
				}  
				
			});
		}
	}
	
}(jQuery));


Date.prototype.format = function(fmt) {
	var o = {
		"M+" : this.getMonth() + 1, // 月份
		"d+" : this.getDate(), // 日
		"h+" : this.getHours(), // 小时
		"m+" : this.getMinutes(), // 分
		"s+" : this.getSeconds(), // 秒
		"q+" : Math.floor((this.getMonth() + 3) / 3), // 季度
		"S" : this.getMilliseconds()
	// 毫秒
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "")
				.substr(4 - RegExp.$1.length));
	for ( var k in o)
		if (new RegExp("(" + k + ")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k])
					: (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}

function toDateStr(cellvalue, opt, row) {
	var d = new Date(parseInt(cellvalue));
	return d.format("yyyy-MM-dd");
}

function formatTime(time) {
	var d = new Date(time)
	return d.format('yyyy-MM-dd');
}

function toDateTimeStr(cellvalue, opt, row) {
	var d = new Date(parseInt(cellvalue));
	return d.format("yyyy-MM-dd hh:mm:ss");
}

function newDate(str) {
	if (!str) {
		return new Date();
	}
	str = str.split('/');
	var date = new Date();
	date.setUTCFullYear(str[0], str[1] - 1, str[2]);
	hour = str[3].split(':');
	date.setHours(hour[0], hour[1], 0, 0);
	return date;
}
function moveNode(source, target, node) { // 建立节点的路径
	var pNode, pNodeData = [], pid;
	pNode = source.tree('getParent', node.target); // 收集父节点
	pid = pNode.id;
	do {
		if (pNodeData.length > 0)
			pNodeData[pNodeData.length - 1].pid = pNode.id; // 更新上一个父节点的父节点id
		pNodeData.push({
			text : pNode.text,
			id : pNode.id
		});
	} while (pNode = source.tree('getParent', pNode.target));
	// 从根节点建立路劲
	for (var i = pNodeData.length - 1; i >= 0; i--) {
		if (!target.tree('find', pNodeData[i].id))
			target.tree('append', {
				parent : pNodeData[i].pid ? target.tree('find',
						pNodeData[i].pid).target : null,
				data : {
					text : pNodeData[i].text,
					id : pNodeData[i].id
				}
			});
	}
	var nodes = target.tree('getChildren', target.target);
	var curId = node.id;
	var b = false;// 判断是否已插入了
	for (var i = 0; i < nodes.length; i++) {
		// console.log(nodes[i].id);
		if (curId < nodes[i].id) {
			target.tree('insert', {
				before : nodes[i].target,
				data : {
					text : node.text,
					id : node.id
				}
			});
			b = true;
			break;
		}
	}
	if (!b) {
		target.tree('append', {
			parent : target.tree('find', pid).target,
			data : {
				text : node.text,
				id : node.id
			}
		});
	}
}
/** 进度条 */
function pBarDialogShow(showValue) {
	var url = contextPath
			+ "/application/deviceMessageEasyUI/progressbar.jsp?show="
			+ showValue
	var tit = "";
	$("#pBardialog").dialog({
		title : tit,
		closed : false,
		modal : true,
		href : url
	// buttons:groupbutton
	});
}

//重置验证
function resetFormAndStyle(validator){
	validator.resetForm();
	$('.form-group').removeClass('has-error');
}
function resetFormAndStyle2(validator,errorObj){
	validator.resetForm();
	errorObj.removeClass('has-error');
}
//验证样式
jQuery.validator.setDefaults({
	errorElement: 'span',
    errorClass: 'help-block',
    errorPlacement:function(error, element){
    	if(element.hasClass('selectpicker')){
    		error.appendTo(element.parent().parent());
    	}else{
    		error.appendTo(element.parent());
    	}
    },
    focusInvalid: false,
    ignore: "",
	highlight: function (element) {
        $(element)
            .closest('.form-group').addClass('has-error'); 
    },
    unhighlight: function (element) { 
        $(element)
            .closest('.form-group').removeClass('has-error'); 
    },
    success: function (label) {
        label
            .closest('.form-group').removeClass('has-error'); 
    }
});
//验证IP
jQuery.validator.addMethod("valiIp",function(value,element){
	var ipVa = /^((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d)(\.((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d)){3}$/;
	return this.optional(element)||ipVa.test(value);
},"请输入正确IP");

//字母数字长度验证
jQuery.validator.addMethod("alnum",function(value,element){
	var alnum = /^[\u4e00-\u9fa5\_\-a-zA-Z0-9]{2,20}$/;
	return this.optional(element)||alnum.test(value);
},"请输入2-20个中文、英文字母、数字、横线或下划线");

//结束时间大于开始等于时间验证
jQuery.validator.addMethod("valiTime",function(value,element,param){
	var rs = false,
	startTime = param.val().split(":"),
	endTime = value.split(":"),
	startHour = parseInt(startTime[0]),
	startMin = parseInt(startTime[1]),
	startSec = parseInt(startTime[2]),
	endHour = parseInt(endTime[0]),
	endMin = parseInt(endTime[1]);
	endSec = parseInt(endTime[2]);
	if(startHour<endHour||(startHour==endHour&&startMin<=endMin)||(startHour==endHour&&startMin==endMin&&startSec<=endSec)){
		rs = true;
	}
	return this.optional(element)||rs;
},"结束时间必须大于等于开始时间");

//结束日期大于开始等于日期验证
jQuery.validator.addMethod("valiDateTime",function(value,element,param){
	var rs = false,
	startTime = new Date(param.val());
	endTime = new Date(value);
	sTime = startTime.getTime();
	eTime = endTime.getTime(); 
	if(sTime <= eTime){
		rs = true;
	}
	return this.optional(element)||rs;
},"结束时间必须大于等于开始时间");

//域名验证
jQuery.validator.addMethod("valiDomain",function(value,element){
//	var domain = /^[a-zA-Z0-9]{1,10}(\.[a-zA-Z0-9]{1,10}){1,3}$/;
	var domain = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62}){1,3}$/;
	return this.optional(element)||domain.test(value);
},"请输入正确域名");

function initMZtree(treeId, checkFirstNode){
	var url = contextPath + '/remote/appgroupandapp.do';
	return MZtree(treeId, url, checkFirstNode);
}

function initProtocolMZtree(treeId){
	var url = contextPath + '/remote/appgroup.do';
	return MZtree(treeId, url);
}
//获取mztree
function MZtree(treeId, url, checkFirstNode){
	var data={};
	$.ajax({
		type:"POST",
		async:false,
		url : url,
		dataType: 'json',
		success:function(res) {
	        if(res){
	        	var result = res[0].children;
	        	data['-1_0'] = "text:全部;";
	        	for(var i=0;i<result.length;i++){
	        		var id = result[i].id;
	        		data['0_'+ id] = 'text:' + result[i].text+ ";";
	        		var children = result[i].children;
	        		if(children && children.length > 0){
	        			for(var j=0; j<children.length; j++){
	        				data[id + '_'+ children[j].id] = 'text:' + children[j].text + ";";
	        			}
	        		}
	        	}
	        } 
	     },    
	     error : function() { 
	    	 $('#' + treeId).html('');
	     }  
	});
	Using("System.Web.UI.WebControls.MzTreeView");
    var tree = new MzTreeView();
    tree.dataSource = data;
    tree.autoSort=false;
    tree.useCheckbox=true;
    tree.canOperate=true;
    $('#' + treeId).html(tree.render(checkFirstNode));
    return tree;
}

//根据id选中相应的节点
function checkMZtree(tree, checkId){
	var checkIds = new Array();
	if(checkId == 0 || !checkId){
		checkIds[0] = "0";
	}else if(checkId.indexOf(",") > 0){
		checkIds = checkId.split(",");
	}else{
		checkIds[0] = checkId;
	}
	var rootNode = tree.rootNode.childNodes[0];
	if(checkIds[0] == "0"){
		if(!rootNode.checked){
			rootNode.check(true);
			rootNode.upCheck();
		}
		tree.collapseAll("0");
		return;
	}
	
	if(rootNode.expanded==false){//判断节点是否展开
		rootNode.expand(); //没有展开，则展开节点
    }
	var nodes = rootNode.childNodes;
	
	//展开所有节点
	for(var i=0;i<nodes.length;i++){
		var nodeC = nodes[i];
		if(nodeC.hasChild){
			 if(nodeC.expanded==false){//判断节点是否展开
				 nodeC.expand(); //没有展开，则展开节点
             }
		}
     }
	 
  
    
    for(var i=0;i<nodes.length;i++){
    	setChildNodeChecked(nodes[i]);
    }
//    
    //为首节点加状态
//	rootNode.checked=false;
	var chk = document.getElementById(rootNode.$$caller.index+"_checkbox_"+rootNode.index);
    chk.src = MzTreeView.icons.line["c2"].src;
    
    function setChildNodeChecked(node){
    	
    	if(node == null){
    		return;
    	}
    	
    	var flag = false;
    	
    	for(var i=0; i<checkIds.length; i++){
    		if(node.id == checkIds[i]){
    			flag = true;
    		}
    	}
    	
    	if(flag){
    		if(!node.checked){
    			node.check(true);
    			node.upCheck();
    		}
    	}else{
    		if(node.hasChild){
    			//如果节点没有被展开，则调用MzTreeView.expand(id)展开节点
              if(node.expanded==false){//判断节点是否展开
            	  node.expand(); //没有展开，则展开节点
              }
    			var me=node, mtv=me.$$caller,mc=me.childNodes;
    			me.checked=false;
    			var chk; if(chk=document.getElementById(mtv.index+"_checkbox_"+ me.index)){
    				chk.src = MzTreeView.icons.line["c0"].src; 
    			}
    			for(var i=0; i<mc.length; i++){
    				var flag1 = false;
    				var mcChild = mc[i];
    				for(var j=0; j<checkIds.length; j++){
    		    		if(mcChild.id == checkIds[j]){
    		    			flag1 = true;
    		    		}
    		    	}
    				if(flag1){
    					if(!mcChild.checked){
    						mcChild.check(true);
    						mcChild.upCheck();
    					}
    					chk.src = MzTreeView.icons.line["c2"].src;
    				}else{
    					if(mcChild.checked){
    						mcChild.check(false);
    						mcChild.upCheck();
    					}
    				}
    			}
    		}else{
    			if(node.checked){
    				node.check(false);
    				node.upCheck();
    			}
    		}
    	}
    	
    }
    
    tree.collapseAll("0");
}

//获取选中节点的id
function getMZtreeId(tree){
	var nodes = tree.nodes;
	var id = "";
	for(var i in nodes) {
		var node = nodes[i];
		var parentNode = node.parentNode;
		if(node.checked && node.id == 0){
			id = "0";
			break;
		}else if(node.checked && parentNode && !parentNode.checked){
            id += node.id + ",";
        }
    }
	if(id != 0){
		id = id.substring(0, id.length - 1);
	}
	return id;
}

function removeFirstCheckBoxChecked(checkboxClass){
	$(checkboxClass).attr("checked",false);
	$(checkboxClass).parent().removeClass("checked");
}

/*
公共方法文件
@eric
*/
var $parent = self.parent.$;

$(function(){
//隐藏显示查询条件区域
$('#openOrClose').on("click",function(){
	$('#conditon').toggle(80);
	setTimeout(domresize,100);//条件隐藏，改变表格高度
});	

})

/**
* 获取列表 选中复选框的值
* @param tableId 
* @param valType 
* @returns {Array}
*/
function getTableChecked(tableId, valType){
var checkedBox=new Array();
$('#'+tableId+' tbody tr .checkboxes').each(function () {
	var checked = $(this).is(":checked");
	if(checked){
		if(valType == 'int'){
			checkedBox.push(parseInt($(this).val()));
		}else{
			checkedBox.push($(this).val());
		}
	}
});
return checkedBox;
}

/**
 * 重构ajax 统一处理 加上超时时间
 */
(function($){
	var _ajax = $.ajax;
	
	$.ajax = function(opt){
		var fn = {
				error: function(XMLHttpRequest, textStatus, errorThrown){},
				success: function(data, textStatus){}
		}
		if(opt.error){
			fn.error = opt.error;
		}
		if(opt.success){
			fn.success = opt.success;
		}
		
		var _opt = $.extend(opt, {
			error: function(XMLHttpRequest, textStatus, errorThrown){
				fn.error(XMLHttpRequest, textStatus, errorThrown);
			},
			success: function(data, textStatus){
				fn.success(data, textStatus);
			},
			timeout: 300000,
			complete: function(XMLHttpRequest, status){
				//通过XMLHttpRequest取得响应头，sessionstatus,
	            var sessionstatus=XMLHttpRequest.getResponseHeader("sessionstatus"); 
	            if(sessionstatus=="timeout"){ 
	                 //如果超时就处理 ，指定要跳转的页面
	            	window.location.href=contextPath+'/login.jsp';
	            	return;
	            } 
				if(status == 'timeout'){
					XMLHttpRequest.abort();
					App.unblockUI($('.page-header-fixed'),false);
					$(".dataTables_processing").css("visibility", "hidden");

					if(opt.timeoutMessage != undefined){
						bootbox.alert(opt.timeoutMessage);
					}else{
						bootbox.alert('网络超时，请重试');
					}
					
					setTimeout(function(){
						bootbox.hideAll();
					},3000);
				}
			}
		});
		return _ajax(_opt);
	};
})(jQuery);

//解决多次刷新时，表格变形的问题
$.extend( $.fn.dataTable.defaults, {
	bAutoWidth: false
} );

