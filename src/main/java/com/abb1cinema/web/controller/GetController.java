package com.abb1cinema.web.controller;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GetController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@RequestMapping("/get/{group}/{target}")
	public @ResponseBody Object get(@PathVariable("group") String group, @PathVariable("target") String target) throws Exception { // @PathVariable �� 2�� �̻��� ��� �Ķ���͸� �ɾ��ִ� ���� fm
		logger.info("PersonController - detail() {}","ENTER");
		Object o = null;
		return o;
	}
	
	@RequestMapping(value="/list/{group}", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody List<?> list(@PathVariable String group) throws Exception{
		logger.info("PostController - list() {}", "ENTER"); 
		List<?> list = new ArrayList<>();
		return list;
	}
}
