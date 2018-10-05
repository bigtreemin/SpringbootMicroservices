package com.inni.inniuser;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.inni.mapper.UserMapper;
import com.inni.pojo.User;

import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisCluster;

@RunWith(SpringRunner.class)
@SpringBootTest
public class InniUserApplicationTests {
	@Autowired
	private UserMapper userMapper;
	
	@Autowired(required=false)
	private JedisCluster jedisCluster;

	@Test
	public void contextLoads() {
		User user = new User();
		user.setId(1);
		user.setName("魏叶");
		userMapper.insertUser(user);
	}

	@Test
	public void findRedis() {
	    jedisCluster.set("userName", "hello weiye");
	    System.out.println(jedisCluster.get("userName"));
	}
	@Test
	public void getJedis() {
		Jedis jedis = new Jedis("192.168.75.134",6379);
		
		jedis.set("1802", "魏叶");
		System.out.println(jedis.get("1802"));
	}
}
