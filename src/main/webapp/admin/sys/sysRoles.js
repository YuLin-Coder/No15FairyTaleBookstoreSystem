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
						"sAjaxSource" : contextPath + "/sys/queryRoles",
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
										return '<input type="checkbox" onclick="checkbox(this)" class="checkboxes" value="'
												+ val + '" />';
									}
								},
//								{
//									'aTargets' : [ 4 ],
//									"mRender" : function(val) {
//										var type;
//										switch (val) {
//										case 0:
//											type = '禁用';
//											break;
//										case 1:
//											type = '启用';
//											break;
//										default:
//											type = '禁用';
//										}
//										return type;
//									}
//								},
								{
									'aTargets' : [ 4 ],
									"mRender" : function(data, type, row) {
//										var dstatus = row.status;
										var editBtn = '<a href="#" class="btn default btn-xs blue" onclick="edit(\'' + row.id + '\',\'' + row.seq + '\')"><i class="fa fa-edit"></i> 编辑</a>';
										var closeBtn = '<a title="禁用" href="javascript:void(0)" class="btn default btn-xs blue" onclick="downButn(\''
											+ row.id
											+ '\')"><i class="fa fa-close"></i>禁用</a>';
										var upBtn = '<a title="启用" href="javascript:void(0)" class="btn default btn-xs blue" onclick="upButn(\''
											+ row.id
											+ '\')"><i class="fa fa-arrow-circle-up"></i>启用</a>';
//										if (dstatus == 0)
//											return editBtn + upBtn;
//										if (dstatus == 1)
//											return editBtn + closeBtn;
										return editBtn;
									}
								
								}],
					});

	// 表单提交
	// 添加或更新
	$('#btn_save').click(function() {
		if ($('#name').val() == "") {
			bootbox.alert('提示：角色名称不能为空', function() {
			});
			return;
		}
		var id;
		if ($('#id').val() == 0)
			id = null;
		else
			id = $('#id').val();
		var name = $('#name').val();
		var seq = $('#seq').val();
		var description = $('#description').val();
		$.ajax({
			type : "POST",
			url : contextPath + "/sys/saveRoles",
			data : {
				id : id,
				name : name,
				seq : seq,
				description : description
			},
			dataType : "json",
			success : function(data) {
				if (data.code == 1) {
					 bootbox.alert('提示：操作成功。', function() {
					 $("#model_add_edit").modal('hide');
					 $('#myTable').dataTable().fnDraw(false);
					});
				} else {
					bootbox.alert(data.msg);
				}
			},
			error : function() {
				bootbox.alert('提示：系统错误，请重试！');
			}
		});
	});

});

function indexFormatter(value, row, index) {  
    return index+1;  
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
				url : contextPath + '/sys/delRoles',
				data : {
					ids : checked.join(",")
				},
				dataType : "json",
				success : function(data) {
					bootbox.alert('提示：'+data.msg);
					if (data.code == 1) {
						$('#myTable').dataTable().fnDraw(false);
					}
				},
				error : function() {
					bootbox.alert('提示：系统错误，请重试！');
				}
			});
		}
	});
});
// 编辑授权按钮事件
$('#btn_auth').click(function() {
	var checkbox = getChecked("#myTable tbody tr .checkboxes");
	if (checkbox.length == 0) {
		bootbox.alert('提示：请选择授权角色。', function() {
			$("#model_add_auth").modal('hide');
		});
		return false;
	}
	var roleId = checkbox[0];
	initZtree(roleId);
});

// 保存权限信息
function saveAuthority() {
	var checkbox = getChecked("#myTable tbody tr .checkboxes");
	var roleId = checkbox[0];
	var zTree = $.fn.zTree.getZTreeObj("zTree");
	var nodes = zTree.getCheckedNodes();
	var ids = "";
	for (var i = 0, l = nodes.length; i < l; i++) {
		if (nodes[i].getParentNode != null) {
			ids += "," + nodes[i].id;
		}
	}
	ids = ids.substring(1);
	if (ids.length == 0) {
		layer.msg("权限不能为空", {
			shift : 6
		});
		return false;
	}
	$.post(contextPath + "/sys/role/saveAuthority", {
		roleId : roleId,
		ids : ids
	}, function(data) {
		if (data.code === 200) {
			bootbox.alert('提示：操作成功。', function() {
				$("#model_add_auth").modal('hide');
				$('#myTable').dataTable().fnDraw(false);
			});
		} else {
			bootbox.alert(data.message);
		}
	}, "json");
}

function initZtree(roleId) {
	var setting = {
		check : {
			enable : true
		},
		data : {
			simpleData : {
				enable : true,
				idKey : "id", // 设置启用简单数据格式时id对应的属性名称
				pidKey : "pid"
			}
		}
	};
	$.ajax({
		type : "POST",
		url : contextPath + '/sys/resources/tree',
		data : {
			id : roleId
		},
		dataType : "json",
		success : function(data) {
			$.fn.zTree.init($("#zTree"), setting, data);
			$("#model_add_auth").modal('show');
		},
		error : function() {
			bootbox.alert('提示：数据加载失败，请重试！');
		}
	});
}

function checkbox(obj) {
	var checkbox = getChecked("#myTable tbody tr .checkboxes");
	if (checkbox.length > 1) {
		obj.checked = false;
		bootbox.alert("只能选中一条记录!");
		return;
	} else {
		if (obj.checked) {
			obj.checked = true;
		}

	}

};

// 编辑按钮点击事件
function edit(id,seq) {
	$.post(contextPath + "/sys/getRole", {
		'id' : id
	}, function(data) {

		$("#id").val(data.id);
		$("#name").val(data.name);
		$('#seq').val(seq);
		$('#description').val(data.description);
		$("#model_add_edit").modal('show');

	}, 'json');

};
//上线按钮点击事件
function upButn(id) {
	$.post(contextPath + "/sys/upOperation", {
		'id' : id
	}, function(data) {
		if (data.code == '1') {
			bootbox.alert('提示：'+data.msg);
			$('#myTable').dataTable().fnDraw(false);
		} else {
			bootbox.alert(data.msg);
		}

	}, 'json');
};
// 下线按钮点击事件
function downButn(id) {
	$.post(contextPath + "/sys/downOperation", {
		'id' : id
	}, function(data) {
		if (data.code == '1') {
			bootbox.alert('提示：'+data.msg);
			$('#myTable').dataTable().fnDraw(false);
		} else {
			bootbox.alert(data.msg);
		}

	}, 'json');
};
function restoreDefault() {
	$('#name').val('');
	$('#description').val('');
	$.post(contextPath + "/sys/roles/roleIndex", {}, function(data) {
		var code = data.code;
		if (code == "SUCCESS") {
			$("#seq").val(data.data + 1);
		} else {
			bootbox.alert(data.msg);
		}

	}, 'json');
	$("#model_add_edit").modal('show');
}
