package com.inni.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.inni.pojo.User;
import com.inni.service.UserService;
import com.inni.vo.JsonResult;

@Controller
public class UserController {
	@Autowired
	private UserService userService;

    
    @RequestMapping("/findEmail")
    @ResponseBody
    public JsonResult findEmail(@RequestParam("email") String email) {
    	User user = userService.findEmail(email);
    	
    	return new JsonResult(user);
    }
    
    @RequestMapping("/findPhone")
    @ResponseBody
    public JsonResult findPhone(@RequestParam("phone") String phone) {
    	User user = userService.findPhone(phone);
    	
    	return new JsonResult(user);
    }
    
    @RequestMapping("/saveUser")
    @ResponseBody
    public JsonResult saveUser(@RequestParam("jsonData") String  jsonData) {
    	int row = userService.saveUser(jsonData);
    	if(row==1) {
    		
    		return new JsonResult();
    	}
    	return new JsonResult(new RuntimeException());
    }
    
    @RequestMapping("/findUser")
    @ResponseBody
    public JsonResult findUser(@RequestParam("jsonData") String  jsonData) {
    	String userName = userService.findUser(jsonData);
    	if(userName==null) {
    		return new JsonResult(new RuntimeException());
    	}
		return new JsonResult((Object)userName);
    	
    }
    
    
}
