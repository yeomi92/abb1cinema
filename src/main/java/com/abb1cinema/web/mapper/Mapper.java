package com.abb1cinema.web.mapper;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

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

@Repository
public interface Mapper {
	public int registerCustomer(Map<?,?> map) throws Exception;
	public Customer findCustomer(Map<?,?> map) throws Exception;
	public int existCustomer(Map<?,?> map) throws Exception;
	public int deleteCustomer(Map<?,?> map) throws Exception;
	public int updateCustomer(Map<?,?> map) throws Exception;
	public int updateReservation(Map<?,?> map) throws Exception;
	public List<Reservation> getReservationList(Map<?,?> map)throws Exception;
	public Multiplex getMultiplex(Map<?,?> map)throws Exception;
	public Movie getMovie(Map<?,?> map) throws Exception;
	public List<Movie> getMovieList(Map<?,?> map) throws Exception;
	public List<Review> getReviewList(Map<?,?> map) throws Exception;
	public List<Article> getArticleList(Map<?,?> map) throws Exception;
	public List<Notice> getNoticeList(Map<?,?> map) throws Exception;
	public Notice getNotice(Map<?,?> map) throws Exception;
	public int count(Map<?,?> map) throws Exception;
	public Article getArticle(Map<?,?> map) throws Exception;
	public List<Comment> getCommentList(Map<?,?> map) throws Exception;
	public List<Multiplex> getMultiplexList(Map<?,?> map) throws Exception;
	public List<Theater> getTheaterList(Map<?,?> map) throws Exception;
	public List<Information> getInfoList(Map<?,?> map) throws Exception;
	public List<Showing> getDistinctShowingList(Map<?,?> map) throws Exception;
	public List<Timetable> getTimetableList(Map<?,?> map) throws Exception;
	public List<Showing> getShowingList(Map<?,?> map) throws Exception;
	public List<Customer> getCustomerFindList(Map<?,?> map) throws Exception;
	public int postReservation(Map<?,?> map) throws Exception;
	public int writeArticle(Map<?,?> map) throws Exception;
	public int writeComment(Map<?,?> map) throws Exception;
	public Customer findCustomerByName(Map<?,?> map) throws Exception;
	public Customer findCustomerById(Map<?,?> map) throws Exception;
	public int existCustomerByName(Map<?,?> map) throws Exception;
	public int existCustomerById(Map<?,?> map) throws Exception;
	public int updateHits(Map<?,?> map) throws Exception;
	public int countSome(Map<?,?> map) throws Exception;
	public int delete(Map<?,?> map) throws Exception;
	public List<Information> getAdminReservationList(Map<?,?> map) throws Exception;
    public List<Timetable> getAdminShowList(Map<?,?> map) throws Exception;
    public Movie getMovieDetail(Map<?,?> map) throws Exception;
    public int updateAdminMovie(Map<?,?> map) throws Exception;
    public int checkMovieTitle(Map<?,?> map) throws Exception;
}
