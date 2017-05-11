package com.abb1cinema.web.controller;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.abb1cinema.web.composite.Complex;
import com.abb1cinema.web.domain.Customer;
import com.abb1cinema.web.mapper.Mapper;
import com.abb1cinema.web.service.IGetService;

@RestController
public class GetController {
	private static final Logger logger = LoggerFactory.getLogger(GetController.class);
	@Autowired Mapper mapper;
	@Autowired Customer customer;
	
	@RequestMapping(value="/login", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> checkLogin( @RequestBody Map<String,String> paramMap) throws Exception{
		logger.info("GetController checkLogin() {}","ENTER");
		Map<String, String>map=new HashMap<>();
		String id=paramMap.get("id");
		String pw=paramMap.get("pw");
		map.put("id", id);
		map.put("pw", pw);
		logger.info("GetController paramMap 내용 {}",id+pw);
		IGetService checkId= new IGetService() {
			@Override
			public Object execute(Map<?,?> map) throws Exception {
				return mapper.existCustomer(map);
			}
		};
		logger.info("map에 들어있는 id,pw {}",id+pw);
		int exist=(int) checkId.execute(map);
		map.put("exist", String.valueOf(exist));
		logger.info("map 안의 exist {}",map.get("exist"));
		if(exist==1){
			IGetService service= new IGetService() {
				@Override
				public Object execute(Map<?, ?> map) throws Exception {
					return mapper.findCustomer(map);
				}
			};
			customer=(Customer) service.execute(map);
			if(id.equals("admin")&&pw.equals(customer.getPw())){
				logger.info("admin 로그인 if문에 진입");
				map.put("customer", "admin");
			}else if(pw.equals(customer.getPw())){
				logger.info("customer 로그인 if문에 진입");
				map.put("customer", "customer");
			}
		}
		return map;
	}
	
	
}
