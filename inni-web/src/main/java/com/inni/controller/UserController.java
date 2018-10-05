package com.inni.controller;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.inni.pojo.User;
import com.inni.service.UserService;
import com.inni.vo.JsonResult;

@Controller
public class UserController {

	private static ObjectMapper objectMapper = new ObjectMapper();

	@Autowired
	private UserService userService;

	@RequestMapping(value = "hello",method=RequestMethod.GET,consumes={"text/plain", "application/*"},produces = { "application/json" })
	@ResponseBody
	public String hello() {
		return "HelloWorld";
	}

	@RequestMapping("/login")
	public String login() {
		return "Innisfree-login";
	}

	@RequestMapping("/register")
	public String register() {
		return "Innisfree-register";
	}

	@RequestMapping("/user/email")
	@ResponseBody
	public JsonResult findEmail(@RequestParam("email") String email) {
		JsonResult result = userService.findEmail(email);
		System.out.println(result.getData());
		if(result.getData()==null) {

			return new JsonResult("邮箱可用");
		}
		return new JsonResult(new RuntimeException("邮箱已经被注册"));

	}

	@RequestMapping("/user/phone")
	@ResponseBody
	public JsonResult findPhone(@RequestParam("phone") String phone) {
		JsonResult result = userService.findPhone(phone);
		if(result.getData()==null) {

			return new JsonResult("电话号码可用");
		}

		return new JsonResult(new RuntimeException("号码已经被注册"));
	}


	@RequestMapping("/user/saveUser")
	@ResponseBody
	public JsonResult saveUser(User user) {
		String jsonData=null;
		try {
			jsonData = objectMapper.writeValueAsString(user);
		} catch (JsonProcessingException e) {

			e.printStackTrace();
		}
		JsonResult result = userService.saveUser(jsonData);
		if(result.getStatus()==1) {

			return new JsonResult("注册成功");
		} 	
		return new JsonResult(new RuntimeException("注册失败"));
	}

	@RequestMapping("/user/login")
	@ResponseBody
	public JsonResult doLogin(User user,HttpServletResponse response) {
		String jsonData=null;
		try {
			jsonData = objectMapper.writeValueAsString(user);
		} catch (JsonProcessingException e) {

			e.printStackTrace();
		}
		JsonResult result = userService.findUser(jsonData);
		if(result.getStatus()==1) {
			
			Cookie cookie = new Cookie("INNI-COOKIE",result.getData().toString());
			cookie.setMaxAge(60*60*24);
			cookie.setPath("/");
			
            response.addCookie(cookie);
            
			return new JsonResult("登录成功");
		} 	
		return new JsonResult(new RuntimeException("登录失败"));

	}
	
	@RequestMapping("/user/logout")
	public String doLogout(HttpServletResponse response) {
		Cookie cookie = new Cookie("INNI-COOKIE","");
		cookie.setMaxAge(0);
		cookie.setPath("/");
		
        response.addCookie(cookie);
		
		
		return "redirect:/index";
		
	}

}
