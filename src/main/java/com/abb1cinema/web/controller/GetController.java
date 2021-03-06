package com.abb1cinema.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import com.abb1cinema.web.domain.Customer;
import com.abb1cinema.web.domain.Movie;
import com.abb1cinema.web.domain.Review;
import com.abb1cinema.web.mapper.Mapper;
import com.abb1cinema.web.service.GetService;
import com.abb1cinema.web.service.IGetService;

@RestController
public class GetController {
	private static final Logger logger = LoggerFactory.getLogger(GetController.class);
	@Autowired Customer customer;
	@Autowired GetService getService;
	
	@RequestMapping(value="/login", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> checkLogin( @RequestBody Map<String,String> paramMap) throws Exception{
		logger.info("GetController checkLogin() {}","ENTER");
		Map<String, Object>map=new HashMap<>();
		String id=paramMap.get("id");
		String pw=paramMap.get("pw");
		map.put("id", id);
		map.put("pw", pw);
		logger.info("GetController paramMap 내용 {}",id+pw);
		logger.info("map에 들어있는 id,pw {}",id+pw);
		int exist=getService.checkId(map);
		map.put("exist", String.valueOf(exist));
		logger.info("map 안의 exist {}",map.get("exist"));
		if(exist==1){
			customer=getService.getCustomer(map);
			if(id.equals("admin")&&pw.equals(customer.getPw())){
				logger.info("admin 로그인 if문에 진입");
				map.put("permission", "admin");
			}else if(pw.equals(customer.getPw())){
				logger.info("customer 로그인 if문에 진입");
				map.put("permission", "customer");
				map.put("customer", customer);
			}
		}
		return map;
	}
	
	@RequestMapping(value="/get/movieRank", method=RequestMethod.POST, consumes="application/json")
	   public @ResponseBody Map<?,?> getMovieRank() throws Exception {
	      logger.info("getMovieRank() {}","ENTER");
	      Map<String, Object> map = new HashMap<>();
	      List<Movie> movieList = getService.getMovieList(map);
	      List<Review> reviewList = getService.getReviewList(map);
	      int movieListSize = movieList.size();
	      map.put("movie_list", movieList);
	      map.put("review_list", reviewList);
	      map.put("list_size", movieListSize);
	      return map;
	   }
	   
	   @RequestMapping(value="/get/movie", method=RequestMethod.POST, consumes="application/json")
	   public @ResponseBody Map<?,?> getMovie(@RequestParam("seq") int seq) throws Exception {
	      logger.info("getMovie() {}","ENTER");
	      Map<String, Object> map = new HashMap<>();
	      map.put("result", "Succeess!!!!");
	      Movie movie = getService.getMovie(map);
	      map.put("movie", movie);
	      return map;
	   }
	   
	   
	   

}
