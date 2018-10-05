package com.inni.service;

import com.inni.pojo.User;

public interface UserService {

	int saveUser(String jsonData);

	User findEmail(String email);

	User findPhone(String phone);

	String findUser(String jsonData);

}
