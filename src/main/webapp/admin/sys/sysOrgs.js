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
						"sAjaxSource" : contextPath + "/sys/getOrgs",
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
							"mData" : "address",
							"sClass" : "center"
						}, {
							"mData" : "seq",
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
										return '<input type="checkbox" class="checkboxes" onclick="checkbox(this)" value="'
												+ val + '" />';
									}
								},
								{
									'aTargets' : [ 4 ],
									"mRender" : function(data, type, row) {
//										var dstatus = row.isLeaf;
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
								} ],
					});

	// 表单提交
	// 添加或更新
	$('#btn_save').click(function() {
		if ($('#name').val() == "") {
			bootbox.alert('提示：部门名称不能为空', function() {
			});
			return;
		}
		if ($('#address').val() == "") {
			bootbox.alert('提示：地址不能为空', function() {
			});
			return;
		}
		if ($('#pid').val() == "") {
			bootbox.alert('提示：请选择上级部门', function() {
			});
			return;
		}
		// 获取表单元素值json对象
		$.ajax({
			type : "POST",
			url : contextPath + "/sys/saveorgs",
			data : {
				id : $("#id").val(),
				name : $("#name").val(),
				address : $("#address").val(),
				pid : $("#pid").val(),
				seq : $("#seq").val(),
				description : $("#description").val(),
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
// 编辑授权按钮事件
$('#btn_auth').click(function() {
	var checkbox = getChecked("#myTable tbody tr .checkboxes");
	if (checkbox.length == 0) {
		bootbox.alert('提示：请选择授权部门。', function() {
			$("#model_add_auth").modal('hide');
		});
		return false;
	}
	var orgId = checkbox[0];
	initZtree(orgId);
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
				url : contextPath + '/sys/delorgs',
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

function indexFormatter(value, row, index) {  
    return index+1;  
}  

//上线按钮点击事件
function upButn(id) {
	$.post(contextPath + "/sys/upOrgOperation", {
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
	$.post(contextPath + "/sys/downOrgOperation", {
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
// 编辑按钮点击事件
function edit(id,seq) {
	debugger;
	$.ajax({
		type : "POST",
		data : {
			'id' : id
		},
		url : contextPath + "/sys/orgs",
		dataType : "json",
		async : false,
		success : function(entity) {
			if (entity != null) {
				$("#id").val(entity.id);
				$("#name").val(entity.name);
				$('#address').val(entity.address);
				$('#seq').val(seq);
				$('#description').val(entity.description);
				$("#model_add_edit").modal('show');
			}
		},
		error : function(e) {
			bootbox.alert('提示：系统错误，请重试！');
		}
	});
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
	$('#name').val('');
	$('#address').val('');
	$('#description').val('');
	$.post(contextPath + "/sys/getParentOrgs", {}, function(data) {
		var item = data.data.org;
		if (item.length > 0) {
			$("#seq").val(data.data.count + 1);
		} else {
			bootbox.alert(item.msg);
		}
	}, 'json');
	$("#model_add_edit").modal('show');
}

// 保存权限信息
function saveAuthority() {
	var checkbox = getChecked("#myTable tbody tr .checkboxes");
	var orgId = checkbox[0];
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
	$.post(contextPath + "/sys/org/saveAuthority", {
		orgId : orgId,
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

function initZtree(orgId) {
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
		url : contextPath + '/sys/resources/orgTree',
		data : {
			id : orgId
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
