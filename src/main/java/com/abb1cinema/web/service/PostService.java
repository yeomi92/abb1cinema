package com.abb1cinema.web.service;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.abb1cinema.web.mapper.Mapper;

@Service
public class PostService {
	@Autowired Mapper mapper;
	private static final Logger logger=LoggerFactory.getLogger(PostService.class);
	public int registerCustomer(Map<?,?>paramMap) throws Exception{
		IPostService service=(map)->mapper.registerCustomer(map);
		return service.execute(paramMap);
	}
	
	public int doReservation(Map<?,?>paramMap) throws Exception{
		IPostService service=(map)->mapper.postReservation(map);
		return service.execute(paramMap);
	}
	
	public int writeArticle(Map<?,?>paramMap) throws Exception{
		IPostService service=(map)->mapper.writeArticle(map);
		return service.execute(paramMap);
	}
	
	public int writeComment(Map<?,?>paramMap) throws Exception{
		IPostService service=(map)->mapper.writeComment(map);
		return service.execute(paramMap);
	}
	//추가
	public int registerMovie(Map<?,?>paramMap) throws Exception{
		IPostService service=(map)->mapper.registerMovie(map);
		return service.execute(paramMap);
	}
}
