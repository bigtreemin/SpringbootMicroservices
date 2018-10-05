package com.inni.serviceImpl;

import java.io.IOException;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.inni.mapper.UserMapper;
import com.inni.pojo.User;
import com.inni.service.UserService;

import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisCluster;

@Service
public class UserServiceImpl implements UserService{
	private static ObjectMapper objectMapper = new ObjectMapper();
	
	@Autowired
	private UserMapper userMapper;
	
	@Autowired
	private JedisCluster jedisCluster;

	@Override
	public int saveUser(String jsonData) {
		User user = null;
		try {
			user = objectMapper.readValue(jsonData, User.class);
		} catch (IOException e) {
			e.printStackTrace();
		}
		user.setCreated(new Date());
		user.setUpdated(user.getCreated());
		int row = userMapper.insertUser(user);
		return row;
	}

	@Override
	public User findEmail(String email) {
		
		return userMapper.findEmail(email);
	}

	@Override
	public User findPhone(String phone) {
		
		return userMapper.findPhone(phone);
	}

	@Override
	public String findUser(String jsonData) {
		User user = null;
		try {
			user = objectMapper.readValue(jsonData, User.class);
		} catch (IOException e) {
			e.printStackTrace();
		}
		/**
		 * 如果使用的是单台的redis，把注释掉的内容放开，并去掉最后的if和return
		 * 删除RedisConfig.java类，删除application.properties文件中关于redis的配置
		 */
		/*Jedis jedis = new Jedis("192.168.75.134",6379);
		if(StringUtils.isEmpty(jedis.get(user.getEmail()))) {
			user = userMapper.findUser(user);
			jedis.set(user.getEmail(), user.getName());
			return user.getName();
		}
		return jedis.get(user.getEmail());
	}*/
		if(StringUtils.isEmpty(jedisCluster.get(user.getEmail()))) {
			
			user = userMapper.findUser(user);
			jedisCluster.set(user.getEmail(), user.getName());
			
			return user.getName();
		}
		return jedisCluster.get(user.getEmail());
	}

}
