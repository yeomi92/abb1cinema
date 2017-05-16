package com.abb1cinema.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.abb1cinema.web.domain.Article;
import com.abb1cinema.web.domain.Comment;
import com.abb1cinema.web.domain.Customer;
import com.abb1cinema.web.domain.Information;
import com.abb1cinema.web.domain.Movie;
import com.abb1cinema.web.domain.Notice;
import com.abb1cinema.web.domain.Reservation;
import com.abb1cinema.web.domain.Review;
import com.abb1cinema.web.service.GetService;

@RestController
public class GetController {
	private static final Logger logger = LoggerFactory.getLogger(GetController.class);
	@Autowired Customer customer;
	@Autowired Movie movie;
	@Autowired Information information;
	@Autowired Reservation reservation;
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
	
	@RequestMapping(value="/checkId", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> checkId( @RequestBody Map<String,String> paramMap) throws Exception{
		logger.info("GetController checkId() {}","ENTER");
		Map<String, Object>map=new HashMap<>();
		map.put("id", paramMap.get("id"));
		int exist=getService.checkId(map);
		map.put("result", exist);
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
	      movie = getService.getMovie(map);
	      map.put("movie", movie);
	      return map;
	   }
	   
	   @RequestMapping(value="/getReservation", method=RequestMethod.POST, consumes="application/json")
		public @ResponseBody Map<?,?> getReservation( @RequestBody Map<String,String> paramMap) throws Exception{
		    logger.info("GetController getReservation() {}","ENTER");
			Map<String, Object>map=new HashMap<>();
			List<Reservation> rvList=new ArrayList<>();
			List<Information> infoList=new ArrayList<>();
			String id=paramMap.get("id");
			map.put("id",id);
			//information=(Information) getService.getInfoList(map);
			rvList=getService.getReservationList(map);
			map.clear();
			
			//영화를 2개이상 가져오므로 무비시퀀스가 다르다 for문 써야할듯 
			String movieSeq=reservation.getId().split("-")[1];
			String startTime=reservation.getId().split("-")[2].substring(0,2)+":"+reservation.getId().split("-")[2].substring(2,4);
			System.out.println(startTime);
			map.put("key1", "movieSeq");
			map.put("value1", movieSeq);
			map.put("key2", "startTime");
			map.put("value2", startTime);
			infoList=getService.getInfoList(map);
			System.out.println(infoList);
			
			map.put("reservation", reservation);
			return map;
	   }

	// john
	   @RequestMapping(value="/get/board", method=RequestMethod.POST, consumes="application/json")
	   public @ResponseBody Map<?,?> getBoard() throws Exception {
	      logger.info("getBoard() {}","ENTER");
	      Map<String, Object> map = new HashMap<>();
	      map.put("group", "Article");
	      int articleCount = getService.count(map);
	      map.clear();
	      map.put("group", "Notice");
	      int noticeCount = getService.count(map);
	      List<Article> articleList = getService.getArticleList(map);
	      List<Notice> noticeList = getService.getNoticeList(map);
	      map.put("article_list", articleList);
	      map.put("notice_list", noticeList);
	      map.put("article_count", articleCount);
	      map.put("notice_count", noticeCount);
	      map.put("success", "SUCCESS!!");
	      return map;
	   }

	   @RequestMapping(value="/get/board/{seq}", method=RequestMethod.POST, consumes="application/json")
	   public @ResponseBody Map<?,?> getBoard(@PathVariable String seq) throws Exception {
	      logger.info("getBoard(seq) {}","ENTER");
	      Map<String, Object> map = new HashMap<>();
	      map.put("seq", seq);
	      Article article = getService.getArticle(map);
	      List<Comment> commentList = getService.getCommentList(map);
	      map.put("article", article);
	      map.put("comment_list", commentList);
	      map.put("success", "SUCCESS!!");
	      return map;
	   }
	   
	   @RequestMapping(value="/get/notice/{seq}", method=RequestMethod.POST, consumes="application/json")
	   public @ResponseBody Map<?,?> getNotice(@PathVariable String seq) throws Exception {
	      logger.info("getNotice() {}","ENTER");
	      Map<String, Object> map = new HashMap<>();
	      map.put("seq", seq);
	      map.put("notice", getService.getNotice(map));
	      map.put("success", "SUCCESS!!");
	      return map;
	   }
	   
}
