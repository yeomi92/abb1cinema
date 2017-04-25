package com.abb1cinema.web.controller;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DeleteController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	@RequestMapping(value="/delete/{group}", method=RequestMethod.POST, consumes="application/json") // spring p291
	public @ResponseBody Map<?,?> delete(@PathVariable String group) throws Exception {
		logger.info("PersonController - delete() {}","ENTER");
		Map<?,?> map = new HashMap<>();
		return map;
	}
}
