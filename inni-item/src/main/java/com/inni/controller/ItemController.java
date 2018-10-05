package com.inni.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.inni.pojo.Item;
import com.inni.service.ItemService;
import com.inni.vo.JsonResult;

@RestController
public class ItemController {
	
	@Autowired
	private ItemService itemService;
	
	@RequestMapping("/findHotItems")
	public List<Item> findHotItems() {
		List<Item> items = itemService.findHotItems();
		
		
		return items;
	}
	@RequestMapping("/findItems")
	public JsonResult findItems(@RequestParam("pno") Integer pno){
		return itemService.findItems(pno);
		
	}
	@RequestMapping("/findItem")
	public JsonResult findItem(@RequestParam("pid") Integer pid){
		return itemService.findItem(pid);
		
	}

}
