package com.inni.service;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.inni.pojo.User;
import com.inni.vo.JsonResult;

@FeignClient(value = "user")
public interface UserService {
	@RequestMapping(value = "/findEmail",method = RequestMethod.GET)
    JsonResult findEmail(@RequestParam(value = "email") String email);
	
	@RequestMapping(value = "/findPhone",method = RequestMethod.GET)
	JsonResult findPhone(@RequestParam(value = "phone") String phone);

	@RequestMapping(value = "/saveUser",method = RequestMethod.POST)
	JsonResult saveUser(@RequestParam(value = "jsonData") String jsonData);

	@RequestMapping(value = "findUser",method = RequestMethod.POST)
	JsonResult findUser(@RequestParam(value = "jsonData")String jsonData);

}
