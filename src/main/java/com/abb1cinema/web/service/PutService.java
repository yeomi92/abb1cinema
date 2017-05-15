package com.abb1cinema.web.service;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.abb1cinema.web.mapper.Mapper;

@Service
public class PutService {
	@Autowired Mapper mapper;
	private static final Logger logger=LoggerFactory.getLogger(PutService.class);
	public int updateCustomer(Map<?,?> paramMap) throws Exception{
		logger.info("PutService updateCustomer() {}","ENTER");
		IDeleteService service=(map)->mapper.updateCustomer(map);
		return service.execute(paramMap);
	}
}
