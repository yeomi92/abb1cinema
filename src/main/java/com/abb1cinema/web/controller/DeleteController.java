package com.abb1cinema.web.controller;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.abb1cinema.web.service.DeleteService;

@RestController
public class DeleteController {
	private static final Logger logger = LoggerFactory.getLogger(DeleteController.class);
	@Autowired DeleteService deleteService;
	
	@RequestMapping(value="/withdrawal", method=RequestMethod.POST, consumes="application/json") // spring p291
	public @ResponseBody Map<?,?> delete(@RequestBody Map<String,String> paramMap) throws Exception {
		logger.info("DeleteController delete() {}","ENTER");
		Map<String,Object> map = new HashMap<>();
		map.put("id", paramMap.get("id"));
		Integer delete=deleteService.deleteCustomer(map);
		map.put("result", delete);
		return map;
	}
}
