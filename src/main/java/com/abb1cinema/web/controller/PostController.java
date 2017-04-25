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

@RestController
public class PostController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@Autowired Mapper mapper;
	
	@RequestMapping(value="/post/{group}", method=RequestMethod.POST, consumes="application/json") // spring p291
	public @ResponseBody Map<?,?> register(@PathVariable String group, @RequestBody Map<String, String> param) throws Exception {
		logger.info("PersonController - register() {}","ENTER");
		Map<String,String> map = new HashMap<>();
		return map;
	}
}


