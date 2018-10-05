package com.inni.service;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.inni.pojo.Item;
import com.inni.vo.JsonResult;

@FeignClient("item")
public interface ItemService {

	@RequestMapping(value = "findHotItems",method = RequestMethod.GET)
	List<Item> findHotItems();

	@RequestMapping(value = "findItems",method = RequestMethod.GET)
	JsonResult findItems(@RequestParam("pno") Integer pno);

	@RequestMapping(value = "findItem",method = RequestMethod.GET)
	JsonResult findItem(@RequestParam("pid") Integer pid);

}
