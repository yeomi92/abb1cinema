package com.abb1cinema.web.service;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.abb1cinema.web.domain.Customer;
import com.abb1cinema.web.domain.Movie;
import com.abb1cinema.web.domain.Review;
import com.abb1cinema.web.mapper.Mapper;

@Service
public class GetService {
	@Autowired Mapper mapper;
	private static final Logger logger=LoggerFactory.getLogger(GetService.class);
	public Customer getCustomer(Map<?,?> paramMap)throws Exception{
		IGetService service=(map)->mapper.findCustomer(map);
		return (Customer) service.execute(paramMap);
	}
	
	public Movie getMovie(Map<?,?> paramMap)throws Exception{
		IGetService service = (map) -> mapper.getMovie(map);
		return (Movie) service.execute(paramMap);
	}
	
	public int checkId(Map<?,?> paramMap)throws Exception{
		IGetService checkId=(map)->mapper.existCustomer(map);
		return (int) checkId.execute(paramMap);
	}
	
	public List<Movie> getMovieList(Map<?,?> paramMap)throws Exception{
		IGetService service = (map) -> mapper.getMovieList(map);
		return (List<Movie>) service.execute(paramMap);
	}
	
	public List<Review> getReviewList(Map<?,?> paramMap)throws Exception{
		IGetService review = (map) -> mapper.getReviewList(map);
		return (List<Review>) review.execute(paramMap);
	}
	
}
