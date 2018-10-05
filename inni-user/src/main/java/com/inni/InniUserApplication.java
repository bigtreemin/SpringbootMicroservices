package com.inni;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
@MapperScan("com.inni.mapper")
@EnableCaching
public class InniUserApplication {

	public static void main(String[] args) {
		SpringApplication.run(InniUserApplication.class, args);
	}
	
	
}
