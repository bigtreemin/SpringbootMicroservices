package com.inni;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
@MapperScan("com.inni.mapper")
public class InniItemApplication {

	public static void main(String[] args) {
		SpringApplication.run(InniItemApplication.class, args);
	}
}
