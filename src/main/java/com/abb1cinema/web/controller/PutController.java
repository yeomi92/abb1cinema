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
import com.abb1cinema.web.service.PutService;

@RestController
public class PutController {
	private static final Logger logger = LoggerFactory.getLogger(PutController.class);
	@Autowired PutService putService;
	
	@RequestMapping(value="/updateInfo", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> updateCustomer(@RequestBody Map<String,String> paramMap) throws Exception {
		logger.info("PutController updateCustomer() {}","ENTER");
		Map<String,Object> map = new HashMap<>();
		logger.info("updateCustomer() 전달받은 pw: {}",paramMap.get("pw"));
		map.put("id", paramMap.get("id"));
		map.put("pw", paramMap.get("pw"));
		map.put("phone", paramMap.get("phone"));
		Integer result = putService.updateCustomer(map);
		map.put("result", result);
		return map;
	}
}
