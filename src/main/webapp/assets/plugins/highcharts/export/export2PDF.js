/**
 * 将UI图标数据导出到PDF中
 * 
 * @param chartIds: 图标ID数组
 * 例如：var chartIds = ["ethPieUp", "ethPieDown", "ethlineUp", "ethlineDown"];
 * @returns {Boolean} false
 */
function export2PDF(chartIds, url, data){
	App.blockUI(pageContent, false);
	var arrySvg = [];
	var arryTitle = [];
	var index = 0;
	for (var i=0; i< chartIds.length; i++ ) {
		var h = $('#'+chartIds[i]).highcharts();
		if(h == undefined || h == null){
//			$.messager.alert('',"没有图表数据需要导出",'info');
			bootbox.alert("没有图表数据需要导出");
			App.unblockUI(pageContent, false);
			return false;
		}
		arrySvg[index] = h.getSVG();
		arryTitle[index] = h.title.textStr;
		if(h.subtitle != undefined && h.subtitle != null){
			arryTitle[index] += h.subtitle.textStr;
		}
		index++;
	}
	continueBar = true;
	$.ajax({
		url: contextPath + "/exportPDFController/" + url,
		data: {"svgs":arrySvg, "titles":arryTitle, "data": JSON.stringify(data)},
		datatype: "json",
		type: "post",
		success: function (data) {
			var url =  contextPath + "/exportPDFController/export.do?fileName=" + data;
			window.location = url;
			if($("#pBardialog")){
				$("#pBardialog").dialog('close');
			}
			App.unblockUI(pageContent, false);
		}
	});
	return false;
}

function export2PDFWithNoLogin(chartIds, url, data){
	App.blockUI(pageContent, false);
	var arrySvg = [];
	var arryTitle = [];
	var index = 0;
	for ( var id in chartIds) {
		var h = $('#'+chartIds[id]).highcharts();
		if(h == undefined || h == null){
//			$.messager.alert('',"没有图表数据需要导出",'info');
			bootbox.alert("没有图表数据需要导出");
			App.unblockUI(pageContent, false);
			return false;
		}
		arrySvg[index] = h.getSVG();
		arryTitle[index] = h.title.textStr;
		if(h.subtitle != undefined && h.subtitle != null){
			arryTitle[index] += h.subtitle.textStr;
		}
		index++;
	}
	continueBar = true;
	$.ajax({
		url: contextPath + "/exportPDFController/" + url,
		data: {"svgs":arrySvg, "titles":arryTitle, "data": JSON.stringify(data)},
		datatype: "json",
		type: "post",
		success: function (data) {
			var url =  contextPath + "/exportPDFController/noLogin/export.do?fileName=" + data;
			window.location = url;
			if($("#pBardialog")){
				$("#pBardialog").dialog('close');
			}
			App.unblockUI(pageContent, false);
		}
	});
	return false;
}


//导出Excel
function exportExcel(chartIds, url, data){
	App.blockUI(pageContent, false);
	var arrySvg = [];
	var arryTitle = [];
	var index = 0;
	for ( var i=0; i< chartIds.length; i++ ) {
		var h = $('#'+chartIds[i]).highcharts();
		if(h == undefined || h == null){
//			$.messager.alert('',"没有图表数据需要导出",'info');
			bootbox.alert("没有图表数据需要导出");
			App.unblockUI(pageContent, false);
			return false;
		}
		arrySvg[index] = h.getSVG();
		arryTitle[index] = h.title.textStr;
		if(h.subtitle != undefined && h.subtitle != null){
			arryTitle[index] += h.subtitle.textStr;
		}
		index++;
	}
	continueBar = true;
	$.ajax({
		url: contextPath + "/exportExcelController/" + url,
		data: {"svgs":arrySvg, "titles":arryTitle, "data": JSON.stringify(data)},
		datatype: "json",
		type: "post",
		success: function (data) {
			var url =  contextPath + "/exportExcelController/exportExcel.do?fileName=" + data;
			window.location = url;
			if($("#pBardialog")){
				$("#pBardialog").dialog('close');
			}
			App.unblockUI(pageContent, false);
		}
	});
	return false;
}

/**
 * 导出按钮 rgba半透明颜色解析问题处理
 * Drop-in compatibility fix for semi-transparent strokes and fills for old WebKit 
 * browsers as well as Batik export servers. The fix splits rgba fill colors into 
 * solid colors for fills, and a separate fill-opacity attribute.
 */
Highcharts.SVGElement.prototype.fillSetter = Highcharts.SVGElement.prototype.strokeSetter = function (value, key, element) {
    var colorObject;

    if (typeof value === 'string') {
        if (value.indexOf('rgba') === 0) {
            colorObject = Highcharts.Color(value);
            element.setAttribute(key + '-opacity', colorObject.get('a'));
            element.setAttribute(key, colorObject.get('rgb'));
        } else {
            element.removeAttribute(key + '-opacity');
            element.setAttribute(key, value);
        }
    } else {
        this.colorGradient(value, key, element);
    }
};