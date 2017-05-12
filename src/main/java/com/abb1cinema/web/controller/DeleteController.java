package com.abb1cinema.web.controller;

import java.util.HashMap;
import java.util.Map;

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
import com.abb1cinema.web.service.IDeleteService;

@RestController
public class DeleteController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@Autowired Mapper mapper;
	
	@RequestMapping(value="/withdrawal", method=RequestMethod.POST, consumes="application/json") // spring p291
	public @ResponseBody Map<?,?> delete(@RequestBody Map<String,String> paramMap) throws Exception {
		logger.info("DeleteController delete() {}","ENTER");
		Map<String,Object> map = new HashMap<>();
		map.put("id", paramMap.get("id"));
		IDeleteService service = new IDeleteService() {
			@Override
			public int execute(Map<?, ?> map) throws Exception {
				return mapper.deleteCustomer(map);
			}
		};
		Integer delete=service.execute(map);
		map.put("result", delete);
		return map;
	}
}
