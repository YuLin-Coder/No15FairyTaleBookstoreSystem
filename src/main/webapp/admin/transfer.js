/**
 * 转账管理js
 */
var listTable;
$(function(){
	
	//表格初始化
	listTable =  $('#myTable').dataTable({
		"bServerSide": true, //这个用来指明是通过服务端来取数据
        "iDisplayLength": 10,
        "bLengthChange" : true,     //是否允许用户通过一个下拉列表来选择分页后每页的行数。行数为 10，25，50，100。这个设置需要 bPaginate 支持。默认为 true。
        "bFilter": false,
        "bSort": false,
        "sAjaxSource": contextPath + "/admin/money/transferlist",
        "bRetrieve": true,
        "bDestroy": true,
        "sServerMethod": "POST",
        "sAjaxDataProp": "rows",
    	"fnDrawCallback": function( oSettings ) {
			$("input[type=checkbox]").uniform();
			removeFirstCheckBoxChecked(".group-checkable");
        },
        "fnServerData": function(sUrl,aoData,fnCallback,oSettings){
 		   Index.dataTableAjax(sUrl,aoData,fnCallback,oSettings.sServerMethod,transferTbParam);	
 	    },
 	    "aoColumns": [
                       { "mData": "id", "sClass": "center", "hidden": true},
                       { "mData": "userName", "sClass": "center"},
                       { "mData": "userPhone", "sClass": "center"},
                       { "mData": "orderNum", "sClass": "center"},
                       { "mData": "orderState", "sClass": "center"},
                       { "mData": "fromAccountId", "sClass": "center"},
                       { "mData": "toAccountId", "sClass": "center"},
                       { "mData": "amount", "sClass": "center"},
                       { "mData": "createTime", "sClass": "center"},
                       { "mData": null, "sClass": "center"}                                                        
         ],
         "aoColumnDefs": [
                         {
                         	'aTargets': [0],                     
                 	    	'bSortable': true,
                 	    	"mRender": function(val) {
                 	        		return '<input type="checkbox" class="checkboxes" value="'+val+'" />';
                 	         }
                         },{
                         	'aTargets': [4],
             	        	"mRender": function(val){
             	        		var type;
             	        		switch(val){
             	            		case '1':
             	            			type = '提交';
                 	        			break;
             	            		case '2':
             	            			type = '成功';
                 	        			break;
             	            		case '3':
             	            			type = '拒绝';
                 	        			break;
             	            		case '4':
             	            			type = '失败';
                 	        			break;
             	            		case '5':
             	            			type = '进行中';
             	            			break;
             	            		case '0':
             	            			type = '处理中';
             	            			break;           	            		
             	            		default:
                             			type = '处理中';
             	        		}
             	        		return type;
             	        	}
                         },{
                         	'aTargets': [9],
                             "mRender": function(data, type, row) {
                             	var detailBtn = '<a title="详情" href="javascript:void(0)" class="btn default btn-xs blue" onclick="detail(\'' + row.id +  '\')"><i class="fa fa-info-circle" aria-hidden="true"></i></a>';
                             	return detailBtn;
                             }
                         }
         ]
	});
	
	//列表查询状态
	/*$('#orderState').select2({
	    placeholder: "---选择状态---",
        language: "zh-CN",
        allowClear:true,
        data:[{id:'1',text:'提交'},
              {id:'2',text:'成功'},
              {id:'3',text:'拒绝'},
              {id:'4',text:'失败'},
              {id:'5',text:'进行中'},
              {id:'0',text:'处理中'}]
    });
	*/
	//查询按钮
	$('#searchBtn').click(function(){
		var oSettings = listTable.fnSettings();  
        oSettings._iDisplayStart = 0;  
        listTable.fnDraw(oSettings);
	});
	
});

//出金列表参数
function transferTbParam(){
	var userName = $('#userName').val();
	var userPhone = $('#userPhone').val();
	var fromAccountId = $('#fromAccountId').val();
	var toAccountId = $('#toAccountId').val();
	var orderNum = $('#orderNum').val();
	var orderState = $('#orderState').val();
	var isContainTest = 0;
	if($("#isContainTest").attr("checked") == 'checked'){
		isContainTest = 1;
	}
	return [{'name':'userName',value:userName},
	        {'name':'userPhone',value:userPhone},
	        {'name':'fromAccountId',value:fromAccountId},
	        {'name':'toAccountId',value:toAccountId},
	        {'name':'orderNum',value:orderNum},
	        {'name':'orderState',value:orderState},
			{'name':"isContainTest",value:isContainTest}];
}

function detail(id){
	$.post(contextPath + "/admin/money/transferDetail",{'id':id},function(result){
		var code = result.code;
		if(code == 'SUCCESS'){
			$('#myForm').jsonSetForm(result.data);
			$("#model_add_edit").modal('show');
		}else{
			bootbox.alert(result.msg);
		}
	},'json');
}