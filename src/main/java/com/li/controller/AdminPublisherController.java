package com.li.controller;

import com.li.commons.BaseResult;
import com.li.commons.DataGrid;
import com.li.model.AdminPublisher;
import com.li.service.IPublisherService;
import com.li.utils.WebMethod;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RequestMapping("/publisher")
@Controller
public class AdminPublisherController {

	@Autowired
	private IPublisherService publisherService;

	@ResponseBody
	@RequestMapping("/list")
	public DataGrid<AdminPublisher> getList(HttpServletRequest request) {

		Integer offset = WebMethod.getInt(request, "rows");
		Integer curPage = WebMethod.getInt(request, "page");
		int start = 0;
		if(offset != null && curPage != null){
			start = offset * (curPage - 1);
		}

		List<AdminPublisher> list = publisherService.list(start, offset);
		int count = publisherService.listCount();

		return new DataGrid<AdminPublisher>(count, 0, list);
	}

	@ResponseBody
	@RequestMapping("/delete")
	public BaseResult delete(HttpServletRequest request) {
		Integer id = WebMethod.getInt(request, "id");
		int i = publisherService.delete(id);
		return BaseResult.ok("删除成功");
	}

	@ResponseBody
	@RequestMapping("/add")
	public BaseResult add(HttpServletRequest request) {
		String publishername = WebMethod.getString(request, "publishername");
		String publisheraddress = WebMethod.getString(request, "publisheraddress");
		String publisherphone = WebMethod.getString(request, "publisherphone");
		AdminPublisher publisher = new AdminPublisher();
		publisher.setPublishername(publishername);
		publisher.setPublisheraddress(publisheraddress);
		publisher.setPublisherphone(publisherphone);
		publisherService.add(publisher);
		return BaseResult.ok("新增成功");
	}
}
