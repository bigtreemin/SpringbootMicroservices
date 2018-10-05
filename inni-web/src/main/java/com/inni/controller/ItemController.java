package com.inni.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.inni.pojo.Item;
import com.inni.service.ItemService;
import com.inni.vo.JsonResult;

import freemarker.template.utility.StringUtil;


@Controller
public class ItemController {
	
	@Autowired
	private ItemService itemService;
	
	@RequestMapping("/item")
	public String ItemProduct() {
		return "Innisfree-product";
		
	}
	
	@RequestMapping("/itemView")
	public String ItemView() {
		return "Innisfree-productView";
		
	}
	
	@RequestMapping("/item/hotItems")
	@ResponseBody
	public JsonResult findHotItem() {
		List<Item> items = itemService.findHotItems();
		if(StringUtils.isEmpty(items)) {
			return new JsonResult(new RuntimeException("服务器异常"));
		}
		
		return new JsonResult(items);
		
	}
	
	@RequestMapping("/item/items")
	@ResponseBody
	public JsonResult findItems(Integer pno) {
		
		return itemService.findItems(pno);
		
	}
	@RequestMapping("/item/item")
	@ResponseBody
	public JsonResult findItem(Integer pid) {
		
		return itemService.findItem(pid);
		
	}
	
	@RequestMapping("/item/itemView")
	@ResponseBody
	public JsonResult ItemViewShow(Integer pid) {
		
		
		return itemService.findItem(pid);
	}
	

}
