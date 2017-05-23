package com.abb1cinema.web.service;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abb1cinema.web.domain.Article;
import com.abb1cinema.web.domain.Comment;
import com.abb1cinema.web.domain.Customer;
import com.abb1cinema.web.domain.Information;
import com.abb1cinema.web.domain.Movie;
import com.abb1cinema.web.domain.Multiplex;
import com.abb1cinema.web.domain.Notice;
import com.abb1cinema.web.domain.Reservation;
import com.abb1cinema.web.domain.Review;
import com.abb1cinema.web.domain.Showing;
import com.abb1cinema.web.domain.Theater;
import com.abb1cinema.web.domain.Timetable;
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
		IGetService service=(map)->mapper.existCustomer(map);
		return (int) service.execute(paramMap);
	}
	
	public List<Movie> getMovieList(Map<?,?> paramMap)throws Exception{
		IGetService service = (map) -> mapper.getMovieList(map);
		return (List<Movie>) service.execute(paramMap);
	}
	
	public List<Review> getReviewList(Map<?,?> paramMap)throws Exception{
		IGetService service = (map) -> mapper.getReviewList(map);
		return (List<Review>) service.execute(paramMap);
	}
	
	public List<Reservation> getReservationList(Map<?,?> paramMap)throws Exception{
		IGetService service = (map) -> mapper.getReservationList(map);
		return (List<Reservation>) service.execute(paramMap);
	}
	
	public Reservation getMultiplex(Map<?,?> paramMap)throws Exception{
		IGetService service = (map) -> mapper.getMultiplex(map);
		return (Reservation) service.execute(paramMap);
	}
		   
		   public List<Article> getArticleList(Map<?,?> paramMap)throws Exception{
		      IGetService service = (map) -> mapper.getArticleList(map);
		      return (List<Article>) service.execute(paramMap);
		   }
		   
		   public List<Notice> getNoticeList(Map<?,?> paramMap)throws Exception{
		      IGetService service = (map) -> mapper.getNoticeList(map);
		      return (List<Notice>) service.execute(paramMap);
		   }
		   
		   public List<Comment> getCommentList(Map<?,?> paramMap)throws Exception{
		      IGetService service = (map) -> mapper.getCommentList(map);
		      return (List<Comment>) service.execute(paramMap);
		   }
		   
		   public List<Multiplex> getMultiplexList(Map<?,?> paramMap)throws Exception{
		      IGetService service = (map) -> mapper.getMultiplexList(map);
		      return (List<Multiplex>) service.execute(paramMap);
		   }
		   
		   public Notice getNotice(Map<?,?> paramMap)throws Exception{
		      IGetService service = (map) -> mapper.getNotice(map);
		      return (Notice) service.execute(paramMap);
		   }
		   
		   public Article getArticle(Map<?,?> paramMap)throws Exception{
		      IGetService service = (map) -> mapper.getArticle(map);
		      return (Article) service.execute(paramMap);
		   }
		   
		   public int count(Map<?,?> paramMap) throws Exception{
		      IGetService service = (map) -> mapper.count(map);
		      return (int) service.execute(paramMap);
		   }
		   
		   public List<Theater> getTheaterList(Map<?,?> paramMap) throws Exception {
		      IGetService service = (map) -> mapper.getTheaterList(map);
		      return (List<Theater>) service.execute(paramMap);
		   }
		   
		   public List<Information> getInfoList(Map<?,?> paramMap) throws Exception {
		      IGetService service = (map) -> mapper.getInfoList(map);
		      return (List<Information>) service.execute(paramMap);
		   }
		   
		   public List<Showing> getDistinctShowingList(Map<?,?> paramMap) throws Exception {
			      IGetService service = (map) -> mapper.getDistinctShowingList(map);
			      return (List<Showing>) service.execute(paramMap);
			   }
		   
		   public List<Timetable> getTimetableList(Map<?,?> paramMap) throws Exception {
			      IGetService service = (map) -> mapper.getTimetableList(map);
			      return (List<Timetable>) service.execute(paramMap);
			   }
		   
		   public List<Showing> getShowingList(Map<?,?> paramMap) throws Exception {
			      IGetService service = (map) -> mapper.getShowingList(map);
			      return (List<Showing>) service.execute(paramMap);
			   }
}
