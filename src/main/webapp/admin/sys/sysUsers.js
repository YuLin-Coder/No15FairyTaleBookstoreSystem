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
						"sAjaxSource" : contextPath + "/sys/getUsers",
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
							"mData" : "loginName",
							"sClass" : "center"
						}, {
							"mData" : "roleName",
							"sClass" : "center"
						},{
							"mData" : "orgName",
							"sClass" : "center"
						}, {
							"mData" : "sex",
							"sClass" : "center"
						}, {
							"mData" : "age",
							"sClass" : "center"
						}, {
							"mData" : "phone",
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
									'aTargets' : [ 5 ],
									"mRender" : function(val) {
										var type;
										switch (val) {
										case 0:
											type = '男';
											break;
										case 1:
											type = '女';
											break;
										default:
											type = '男';
										}
										return type;
									}
								},
								{
									'aTargets' : [ 8 ],
									"mRender" : function(data, type, row) {
										var dstatus = row.status;
										var editBtn = '<a href="#" class="btn default btn-xs blue" onclick="edit(\''
												+ row.id
												+ '\')"><i class="fa fa-edit"></i> 编辑</a>';
										var closeBtn = '<a title="禁用" href="javascript:void(0)" class="btn default btn-xs blue" onclick="downButn(\''
												+ row.id
												+ '\')"><i class="fa fa-close"></i>禁用</a>';
										var upBtn = '<a title="启用" href="javascript:void(0)" class="btn default btn-xs blue" onclick="upButn(\''
												+ row.id
												+ '\')"><i class="fa fa-arrow-circle-up"></i>启用</a>';
										if (dstatus == 0)
											return editBtn + upBtn;
										if (dstatus == 1)
											return editBtn + closeBtn;
										return '';
									}
								} ],
					});
	// 添加或更新
	$('#btn_save').click(function() {
		if ($('#name').val() == "") {
			bootbox.alert('提示：姓名不能为空', function() {
			});
			return;
		}
		if ($('#userName').val() == "") {
			bootbox.alert('提示：登录名不能为空', function() {
			});
			return;
		} else {
			var re = /^[0-9a-zA-Z]*$/g; // 判断字符串是否为数字和字母组合 //判断正整数
			var nubmer = $('#userName').val();
			if (!re.test(nubmer)) {
				bootbox.alert('提示：登录名只能包含字母跟数字', function() {
				});
				$('#userName').val("");
				return;
			}
		}
		if ($('#password').val() == "") {
			bootbox.alert('提示：登录密码不能为空', function() {
			});
			return;
		}
		// if ($('#orgId').val() == "") {
		// bootbox.alert('提示：请选择部门', function() {
		// });
		// return;
		// }
		// if ($('#roleId').val() == "") {
		// bootbox.alert('提示：请选择角色', function() {
		// });
		// return;
		// }
		if ($('#sex').val() == "") {
			bootbox.alert('提示：请选择性别', function() {
			});
			return;
		}
		if ($('#age').val() == "") {
			bootbox.alert('提示：请输入年龄', function() {
			});
			return;
		} else {
			var re = /^[0-9]*$/g; // 判断字符串是否为数字和字母组合 //判断正整数
			var nubmer = $('#age').val();
			if (!re.test(nubmer)) {
				bootbox.alert('提示：年龄必须是数字', function() {
				});
				return;
			}
			if (nubmer < 1 || nubmer > 99) {
				bootbox.alert('提示：年龄设置范围为 1-99岁（包括1岁 和 99岁）', function() {
				});
				return;
			}
		}
		if ($('#phone').val() != "") {
			var re = /^[0-9]*$/g; // 判断字符串是否为数字和字母组合 //判断正整数
			var nubmer = $('#phone').val();
			if (!re.test(nubmer)) {
				bootbox.alert('提示：手机号必须是全数字数字', function() {
				});
				return;
			}
			if (nubmer.length != 11) {
				bootbox.alert('提示：手机号应为11位数字', function() {
				});
				return;
			}
		}
		// 获取表单元素值json对象
		var id = $('#id').val();
		var name = $('#name').val();
		var loginName = $('#userName').val();
		var roleId = $('#roleId').val();
		var orgId = $('#orgId').val();
		var sex = $('#sex').val();
		var age = $('#age').val();
		var phone = $('#phone').val();
		var password = $('#password').val();
		$.ajax({
			type : "POST",
			url : contextPath + "/sys/saveUsers",
			data : {
				id : id,
				name : name,
				loginName : loginName,
				password : password,
				roleId : roleId,
				sex : sex,
				age : age,
				phone : phone,
				orgId : orgId
			},
			dataType : "json",
			success : function(data) {
				if (data.code == '200') {
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
// 编辑按钮删除事件
$('#btn_delete').click(function() {
	var checked = getChecked("#myTable tbody tr .checkboxes");
	if (checked.length == 0) {
		bootbox.alert("请选择要删除的行!");
		return;
	}
	var i = checked.length;
	while (i--) {
		if (checked[i] == '43') {
			bootbox.alert("超级管理员用户不能删除!");
			return;
		}
	}
	bootbox.confirm("确定要删除所选中的行？", function(result) {
		if (result) {
			$.ajax({
				type : "POST",
				url : contextPath + '/sys/deleteUsers',
				data : {
					ids : checked.join(",")
				},
				dataType : "json",
				success : function(data) {
					if (data.code == 200) {
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

// 上线按钮点击事件
function upButn(id) {
	$.post(contextPath + "/sys/upUserOperation", {
		'id' : id
	}, function(data) {
		if (data.code == '1') {
			bootbox.alert('提示：' + data.msg);
			$('#myTable').dataTable().fnDraw(false);
		} else {
			bootbox.alert(data.msg);
		}

	}, 'json');
};
// 下线按钮点击事件
function downButn(id) {
	$.post(contextPath + "/sys/downUserOperation", {
		'id' : id
	}, function(data) {
		if (data.code == '1') {
			bootbox.alert('提示：' + data.msg);
			$('#myTable').dataTable().fnDraw(false);
		} else {
			bootbox.alert(data.msg);
		}

	}, 'json');
};

// 编辑按钮点击事件
function edit(id) {
	restoreDefault();
	$.post(contextPath + "/sys/getUsersById", {
		'id' : id
	}, function(data) {
		var code = data.code;
		var entity = data.data;
		if (code == 200) {
			$("#id").val(entity.id);
			$("#name").val(entity.name);
			$('#userName').val(entity.loginName);
			$("#userName").attr("disabled", true);
			$('#password').val(entity.password);
			$('#roleId').val(entity.roleId);
			$('#orgId').val(entity.orgId);
			$('#sex').val(entity.sex);
			$('#age').val(entity.age);
			$('#phone').val(entity.phone);
			$("#model_add_edit").modal('show');
		} else {
			bootbox.alert(data.msg);
		}

	}, 'json');

};

function restoreDefault() {
	$('#id').val("0");// 新增页面
	$('#name').val("");
	$('#userName').val("");
	$("#userName").attr("disabled", false);
	$('#sex').val("0");
	$('#age').val("");
	$('#password').val("");
	$('#phone').val("");
	// 查询所有部门
	$.post(contextPath + "/sys/orgs/tree", {}, function(data) {
		var content = '<option value="">--请选择--</option>'
		if (data.length > 0) {
			for (var i = 0; i < data.length; i++) {
				content += '<option value=' + data[i].id + '>' + data[i].name
						+ '</option>';
			}
			$("#orgId").html(content);
		} else {
			bootbox.alert(data.msg);
		}
	});

	// 查询所有角色
	$.post(contextPath + "/sys/roles/all", {}, function(data) {
		var content = '<option value="">--请选择--</option>'
		if (data.length > 0) {
			for (var i = 0; i < data.length; i++) {
				content += '<option value=' + data[i].id + '>' + data[i].name
						+ '</option>';
			}
			$("#roleId").html(content);

		} else {
			bootbox.alert(data.msg);
		}

	}, 'json');
	$("#model_add_edit").modal('show');
}
