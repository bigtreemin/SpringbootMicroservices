package com.inni.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;

import com.github.abel533.mapper.Mapper;
import com.inni.pojo.User;

public interface UserMapper{

	@Insert("insert into inni_user values (#{id},#{name},#{password},#{phone},#{email},#{birthday},#{created},#{updated})")
	int insertUser(User user);

	@Select("select * from inni_user where email=#{email}")
	User findEmail(String email);
	
	@Select("select * from inni_user where phone=#{phone}")
	User findPhone(String phone);

	@Select("select * from inni_user where email=#{email} and password=#{password}")
	User findUser(User user);

	
	
	

}
