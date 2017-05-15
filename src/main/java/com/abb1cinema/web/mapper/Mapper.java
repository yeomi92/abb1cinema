package com.abb1cinema.web.mapper;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.abb1cinema.web.domain.Customer;
import com.abb1cinema.web.domain.Movie;
import com.abb1cinema.web.domain.Review;

@Repository
public interface Mapper {
	public Customer findCustomer(Map<?,?> map) throws Exception;
	public int existCustomer(Map<?,?> map) throws Exception;
	public int deleteCustomer(Map<?,?> map) throws Exception;
	public Movie getMovie(Map<?,?> map) throws Exception;
	public List<Movie> getMovieList(Map<?,?> map) throws Exception;
	public List<Review> getReviewList(Map<?,?> map) throws Exception;
}
