//表格初始化
$('#myTable').dataTable({
    "bServerSide": true, //这个用来指明是通过服务端来取数据
    "iDisplayLength": 10,
    "bLengthChange" : true,     //是否允许用户通过一个下拉列表来选择分页后每页的行数。行数为 10，25，50，100。这个设置需要 bPaginate 支持。默认为 true。
    "bFilter": false,
    "bSort": false,
    "sAjaxSource": contextPath + "/user/list",
    "bRetrieve": true,
    "bDestroy": true,
    "sServerMethod": "POST",
    "sAjaxDataProp": "rows",
    "fnDrawCallback": function( oSettings ) {
        $("input[type=checkbox]").uniform();
        removeFirstCheckBoxChecked(".group-checkable");
    },
    "fnServerData": function(sUrl,aoData,fnCallback,oSettings){
        Index.dataTableAjax(sUrl,aoData,fnCallback,oSettings.sServerMethod);
    },
    "aoColumns": [
        { "mData": "userid", "sClass": "center"},
        { "mData": "username", "sClass": "center"},
        { "mData": "grade", "sClass": "center"},
        { "mData": "truename", "sClass": "center"},
        { "mData": "email", "sClass": "center"},
        { "mData": "phone", "sClass": "center"},
        { "mData": "address", "sClass": "center"},
        { "mData": null, "sClass": "center"}
    ],
    "aoColumnDefs": [{
        'aTargets': [7],
        "mRender": function(data, type, row){
            return '<a href="#" class="btn default btn-xs blue" onclick="deluser(\'' + row.userid+ '\')"><i class="fa fa-edit"></i>删除</a>';
        }
    }],
});

function deluser(id){
    var uploadId = $("#uploadId").val();
    var affectNumber = $("#affectNumber").val();
    bootbox.confirm("确定要删除这条数据？", function(result) {
        if (result) {
            $.ajax({
                type : "POST",
                url : contextPath + '/user/delete',
                data : {
                    id : id
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
}

//添加按钮点击事件
$('#btn_add').click(function(){
    $('#myForm')[0].reset();
    $('#id').val('0');
    $('#coverKey').val("");
    $('#cover').val("");
    $('#userNameShow').text('');
    $('#emailShow').text('');
    $('#countryShow').text('');
    $('#createTimeShow').text('');
    $("#model_add_edit").modal('show');
});

//添加或更新
$('#btn_save').click(function(){
    var id = $('#id').val();
    var url = '/user/add';
    $.ajax({
        type:"POST",
        url: contextPath + url,
        data: {
            username:$('#username').val(),
            password: $('#password').val(),
            grade: $('#grade').val(),
            truename: $('#truename').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            address: $('#address').val()
        },
        dataType: "json",
        success:function(data){
            if(data.code == 200){
                bootbox.alert('提示：操作成功。', function(){
                    $("#model_add_edit").modal('hide');
                    $('#myTable').dataTable().fnDraw(false);
                });
            }else{
                bootbox.alert(data.message);
            }
        },
        error: function(){
            bootbox.alert('提示：系统错误，请重试！');
        }
    });
});