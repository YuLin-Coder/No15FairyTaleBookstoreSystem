$(function() {
	// 添加按钮点击事件
	$('#btn_add').click(function() {
		$('#myForm')[0].reset();
		$('#id').val(0);
		$("#picfile").fileinput('clear').fileinput('enable');
		$('#categoryId').find("option").remove();

		var content = '<option value="">--- 选择链接类型 ---</option>';
		content += '<option value="01">外部链接</option>';
		content += '<option value="02">内部链接</option>';
		$("#categoryId").html(content);

		$.post(contextPath + "/ad/getAdContentCount", {}, function(data) {
			var code = data.code;
			if (code == "SUCCESS") {
				$("#sortOrder").val(data.data + 1);
			} else {
				bootbox.alert(data.msg);
			}

		}, 'json');
		$("#model_add_edit").modal('show');
	});
	//链接类型change事件
//	$('#categoryId').onchange(function() {
//		debugger;
//		bootbox.alert(this, function() {
//		});
//	});
	// 图片上传
	$('#picfile').fileinput({
		language : 'zh', // 设置中文
		uploadUrl : contextPath + '/v1/file/upload',
		allowedFileExtensions : [ 'jpg', 'png', 'jpeg', 'gif' ],
		uploadAsync : false, // 默认异步上传
		showUpload : true, // 是否显示上传按钮
		showCaption : true,// 是否显示标题
		errorCloseButton : '', // 错误提示按钮屏蔽掉
		browseClass : "btn btn-primary",
		dropZoneEnabled : false,
		maxFileSize : 10240,
		previewFileIcon : "<i class='glyphicon glyphicon-king'></i>",
		uploadExtraData : function(previewId, index) {
			var data = {
				dir : "banner"
			};
			return data;
		},
		layoutTemplates : {
			actionDelete : '',
			actionUpload : ''
		}
	}).on('filebatchuploadsuccess', function(event, data, msg) {
		var code = data.response.code;
		if (code == 'SUCCESS') {
			var resultData = data.response.data;
			$('#pic').val(resultData[0].fileUrl);
		}

	}).on('filebatchuploaderror', function(event, data, msg) {
	});
	$('#myTable .group-checkable').change(function () {
		tableChecked($(this));
	});
	// 表格初始化
	$('#myTable')
			.dataTable(
					{
						"bServerSide" : true, // 这个用来指明是通过服务端来取数据。
						"iDisplayLength" : 10,
						"bLengthChange" : true, // 是否允许用户通过一个下拉列表来选择分页后每页的行数行数为。
						// 10，25，50，100这个设置需要 bPaginate。
						// 支持默认为 true。
						"bFilter" : false,
						"bSort" : false,
						"sAjaxSource" : contextPath + "/ad/getAdContents",
						"bRetrieve" : true,
						"bDestroy" : true,
						"sServerMethod" : "POST",
						"sAjaxDataProp" : "rows",
						"fnDrawCallback" : function(oSettings) {
							$("input[type=checkbox]").uniform();
							removeFirstCheckBoxChecked(".group-checkable");
						},
						"fnServerData" : function(sUrl, aoData, fnCallback,
								oSettings) {
							Index.dataTableAjax(sUrl, aoData, fnCallback,
									oSettings.sServerMethod);
						},
						"aoColumns" : [ {
							"mData" : "id",
							"sClass" : "center"
						}, {
							"mData" : "sortOrder",
							"sClass" : "center"
						}, {
							"mData" : "title",
							"sClass" : "center"
						}, {
							"mData" : "pic",
							"sClass" : "center"
						}, {
							"mData" : "url",
							"sClass" : "center"
						}, {
							"mData" : "created",
							"sClass" : "center"
						}, {
							"mData" : "updated",
							"sClass" : "center"
						}, {
							"mData" : null,
							"sClass" : "center"
						} ],
						"aoColumnDefs" : [
								{
									'aTargets' : [ 0 ],
									'bSortable' : true,
									"mRender" : function(val) {
										return '<input type="checkbox" class="checkboxes" value="'
												+ val + '" />';
									}
								},
								{
									'aTargets' : [ 3 ],
									"mRender" : function(val, type, row) {
										if (val != '0') {
											return "<a href='#' onclick='edit("
													+ row.id
													+ ")'><img src='"
													+ row.pic
													+ "' style='width:100px;height:75px'/></a>";
										} else {
											return "";
										}
									}
								},
								{
									'aTargets' : [ 7 ],
									"mRender" : function(data, type, row) {
										var dstatus = row.status;
										var editBtn = '<a title="编辑" href="javascript:void(0)" class="btn default btn-xs blue" onclick="toEdit(\''
												+ row.id
												+ '\')"><i class="fa fa-edit"></i></a>';
										var upBtn = '<a title="发布" href="javascript:void(0)" class="btn default btn-xs blue" onclick="up(\''
												+ row.id
												+ '\')"><i class="fa fa-arrow-circle-up"></i></a>';
										var downBtn = '<a title="下线" href="javascript:void(0)" class="btn default btn-xs blue" onclick="down(\''
												+ row.id
												+ '\')"><i class="fa fa-arrow-circle-down"></i></a>';
										if (dstatus == 0 || dstatus == 2)
											return editBtn + upBtn;
										if (dstatus == 1)
											return downBtn;
										return '';
									}
								} ],
					});

	// 表单提交
	// 添加或更新
	$('#btn_save').click(
			function() {
				if ($('#title').val() == "") {
					bootbox.alert('提示：标题不能为空', function() {
					});
					return;
				}
				if ($('#categoryId').val() == "") {
					bootbox.alert('提示：请选择链接类型', function() {
					});
					return;
				}else if($('#categoryId').val() == "02"){
					if($('#linkType').val() == "001"){
						bootbox.alert('提示：请选择内部链接类型', function() {
						});
						return;
					}
				}
				if ($('#url').val() == "") {
					bootbox.alert('提示：请输入链接地址', function() {
					});
					return;
				}
				if ($('#sortOrder').val() == "") {
					bootbox.alert('提示：排序不能为空', function() {
					});
					return;
				}
				if ($('#pic').val() == "") {
					bootbox.alert('提示：图片不能为空', function() {
					});
					return;
				}
				// 获取表单元素值json对象
				var formValues = $('#myForm').formValToJson();
				$.post(contextPath + "/ad/saveOrUpdateAdContent", formValues,
						function(data) {
							if (data.code == 'SUCCESS') {
								bootbox.alert('提示：操作成功', function() {
									$("#model_add_edit").modal('hide');
									$('#pic').val("");
									$('#myTable').dataTable().fnDraw(false);
								});
							}
							if (data.code == 'FAIL') {
								bootbox.alert('提示：操作失败');
							}
						}, 'json');
			});

});
// 编辑按钮点击事件
function toEdit(id) {
	$.post(contextPath + "/ad/getAdContentInfo", {
		'id' : id
	}, function(data) {
		var code = data.resultCode;
		var entity = data.data.obj;
		if (code == "V00000") {
			$("#id").val(entity.id);
			$("#title").val(entity.title);
			var content = '<option value="">--- 选择链接类型 ---</option>';
			content += '<option value="01">外部链接</option>';
			content += '<option value="02">内部链接</option>';
			$("#categoryId").html(content);
			$('#categoryId').val(entity.categoryId);
			if(entity.subTitle == "")
			    $('#linkType').val("001");
			else
				$('#linkType').val(entity.subTitle);
			$('#url').val(entity.url);
			$('#pic').val(entity.pic);
			$('#sortOrder').val(entity.sortOrder);
			
			if(entity.categoryId =="01"){
				$('#urldiv1').hide();
				$('#urldiv2').show();
				$('#urldiv2').attr('class',"col-sm-8");
			}else if(entity.categoryId =="02"){
				$('#urldiv1').show();
				$('#urldiv2').show();
				$('#urldiv2').attr('class',"col-sm-6");
			}else{
				$('#urldiv2').show();
				$('#urldiv1').hide();
				$('#urldiv2').attr('class',"col-sm-8");
			}
			$("#model_add_edit").modal('show');
		} else {
			bootbox.alert(data.msg);
		}

	}, 'json');

};
//
function linkTypeChange(obj){
	if(obj =="01"){
		$('#linkType').val("001");
		$('#urldiv1').hide();
		$('#url').val("");
		$('#urldiv2').show();
		$('#urldiv2').attr('class',"col-sm-8");
	}else if(obj =="02"){
		$('#linkType').val("001");
		$('#urldiv1').show();
		$('#url').val("");
		$('#urldiv2').show();
		$('#urldiv2').attr('class',"col-sm-6");
	}else{
		$('#urldiv2').show();
		$('#urldiv1').hide();
		$('#linkType').val("001");
		$('#urldiv2').attr('class',"col-sm-8");
		$('#url').val("");
	}
}
// 编辑按钮删除事件
$('#btn_delete').click(function() {
	var checked = getChecked("#myTable tbody tr .checkboxes");
	if (checked.length == 0) {
		bootbox.alert("请选择要删除的行!");
		return;
	}
	bootbox.confirm("确定要删除所选中的行？", function(result) {
		if (result) {
			$.ajax({
				type : "POST",
				url : contextPath + '/ad/delAdContentInfos',
				data : {
					ids : checked.join(",")
				},
				dataType : "json",
				success : function(data) {
					if (data.code == 'SUCCESS') {
						bootbox.alert('提示：操作成功。');
						$('#myTable').dataTable().fnDraw(false);
					} else {
						bootbox.alert(data.msg);
					}
				},
				error : function() {
					bootbox.alert('提示：系统错误，请重试！');
				}
			});
		}
	});
});

// 上线按钮点击事件
function up(id) {
	$.post(contextPath + "/ad/onloadAdContent", {
		'id' : id
	}, function(data) {
		if (data.code == 'SUCCESS') {
			bootbox.alert('提示：上线成功。');
			$('#myTable').dataTable().fnDraw(false);
		} else {
			bootbox.alert(data.msg);
		}

	}, 'json');
};
// 下线按钮点击事件
function down(id) {
	$.post(contextPath + "/ad/downloadAdContent", {
		'id' : id
	}, function(data) {
		if (data.code == 'SUCCESS') {
			bootbox.alert('提示：下线成功。');
			$('#myTable').dataTable().fnDraw(false);
		} else {
			bootbox.alert(data.msg);
		}

	}, 'json');
};
