package com.abb1cinema.web.controller;

import java.util.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.abb1cinema.web.mapper.Mapper;
import com.abb1cinema.web.service.PostService;

@RestController
public class PostController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@Autowired PostService postService;
	
	
	@RequestMapping(value="/signup", method=RequestMethod.POST, consumes="application/json") // spring p291
	public @ResponseBody Map<?,?> registerCustomer(@RequestBody Map<String, String> paramMap) throws Exception {
		logger.info("PostController registerCustomer() {}","ENTER");
		Map<String,Object> map = new HashMap<>();
		map.put("id", paramMap.get("id"));
		map.put("pw", paramMap.get("pw"));
		map.put("name", paramMap.get("name"));
		map.put("birth", paramMap.get("birth"));
		map.put("phone", paramMap.get("phone"));
		map.put("gender", paramMap.get("gender"));
		map.put("email", paramMap.get("email"));
		Integer result=postService.registerCustomer(map);
		map.put("result", result);
		return map;
	}
}


