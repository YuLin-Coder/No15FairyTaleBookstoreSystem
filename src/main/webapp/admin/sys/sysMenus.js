$(function() {
	// 添加按钮点击事件
	$('#btn_add').click(function() {
		restoreDefault();
	});
	// 表格初始化
	$('#myTable')
			.dataTable(
					{
						"bServerSide" : true, // 这个用来指明是通过服务端来取数据
						"iDisplayLength" : 10,
						"bLengthChange" : true, // 是否允许用户通过一个下拉列表来选择分页后每页的行数。行数为
						// 10，25，50，100。这个设置需要 bPaginate
						// 支持。默认为 true。
						"bFilter" : false,
						"bSort" : false,
						"sAjaxSource" : contextPath + "/sys/resources",
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
							"sClass" : "center",
							"hidden" : true
						}, {
							"mData" : "name",
							"sClass" : "center"
						}, {
							"mData" : "icon",
							"sClass" : "center"
						}, {
							"mData" : "url",
							"sClass" : "center"
						}, {
							"mData" : "resourceType",
							"sClass" : "center"
						}, {
							"mData" : "seq",
							"sClass" : "center"
						}, {
							"mData" : "description",
							"sClass" : "center"
						}, {
							"mData" : "status",
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
									'aTargets' : [ 4 ],
									"mRender" : function(val) {
										var type;
										switch (val) {
										case 0:
											type = '启用';
											break;
										case 1:
											type = '关闭';
											break;
										default:
											type = '启用';
										}
										return type;
									}
								},
								{
									'aTargets' : [ 7 ],
									"mRender" : function(val) {
										var type;
										switch (val) {
										case 0:
											type = '启用';
											break;
										case 1:
											type = '关闭';
											break;
										default:
											type = '启用';
										}
										return type;
									}
								},
								{
									'aTargets' : [ 8 ],
									"mRender" : function(data, type, row) {
										var editBtn = '<a href="#" class="btn default btn-xs blue" onclick="edit(\''
												+ row.id
												+ '\')"><i class="fa fa-edit"></i> 编辑</a>';
										return editBtn;
									}
								} ],
					});

	// 表单提交
	// 添加或更新
	$('#btn_save').click(function() {
		if (!$('#myForm').valid()) {
			return;
		}
		resetFormAndStyle(ProductVali);
		// 获取表单元素值json对象
//		var formJsonObj = $('#myForm').serializeJson();
		var id;
		if($('#id').val() ==0)
			id = null;
		else
			id = $('#id').val();
		var name = $('#name').val();
		var icon = $('#icon').val();
		var url = $('#url').val();
		var pid = $('#pid').val();
		var seq = $('#seq').val();
		var description = $('#description').val();
		
		$.ajax({
			type : "POST",
			url : contextPath + "/sys/saveresources",
			data : {
				id:id,
				name: name,
				icon: icon,
				url: url,
				pid: pid,
				seq: seq,
				description: description
			},
			dataType : "json",
			success : function(data) {
				if (data == 1) {
					bootbox.alert('提示：操作成功。', function() {
						$("#model_add_edit").modal('hide');
						$('#myTable').dataTable().fnDraw(false);
					});
				} else {
					bootbox.alert(data.message);
				}
			},
			error : function() {
				bootbox.alert('提示：系统错误，请重试！');
			}
		});
	});

});
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
				url : contextPath + '/sys/delResources',
				data : {
					ids : checked.join(",")
				},
				dataType : "json",
				success : function(data) {
					if (data == 1) {
						bootbox.alert('提示：操作成功。');
						$('#myTable').dataTable().fnDraw(false);
					} else {
						bootbox.alert(data.message);
					}
				},
				error : function() {
					bootbox.alert('提示：系统错误，请重试！');
				}
			});
		}
	});
});

function indexFormatter(value, row, index) {  
    return index+1;  
}  

// 编辑按钮点击事件
function edit(id) {
	$.post(contextPath + "/sys/getResources", {
		'id' : id
	}, function(data) {
		var code = data.code;
		var entity = data.data;
		if (code == 'SUCCRSS') {
			$("#id").val(id);
			$("#name").val(entity.name);
			$('#icon').val(entity.icon);
			if(entity.url !=''){
				$("#url").attr("disabled",true);
				$('#url').val(entity.url);
			}
			   
			if(entity.pid !=null)
			   $('#pid').val(entity.pid);
			else
			   $("#pid").attr("disabled",true);
			$('#seq').val(entity.seq);
			$('#description').val(entity.description);
			restoreDefault()
		} else {
			bootbox.alert(data.msg);
		}

	}, 'json');

};

// 验证
var ProductVali = $("#myForm").validate({
	rules : {
		className : {
			required : true,
			maxlength : 20
		}
	},
	messages : {
		className : {
			required : '不能为空',
			maxlength : '名称最多20个字'
		}
	}
});

function restoreDefault() {
	resetFormAndStyle(ProductVali);
	$.post(contextPath + "/sys/getParentNodes", {},
	function(data) {
	    var content='<option value="">-- 请选择 --</option>'
		if (data.length >0) {
			for(var i=0;i<data.length;i++){
				content += '<option value='+data[i].id+'>'+data[i].name+'</option>';
			}
			$("#pid").html(content);
			
		} else {
			bootbox.alert(data.msg);
		}
	    

	}, 'json');
	$("#model_add_edit").modal('show');
}
