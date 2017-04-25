package com.abb1cinema.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.abb1cinema.web.composite.Complex;
import com.abb1cinema.web.mapper.Mapper;

@Controller
@SessionAttributes("context")
public class HomeController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@Autowired Mapper mapper;
	
	@RequestMapping("/")
	public String home(Model model) {
		logger.info("HomeController home() {}","ENTER");
		model.addAttribute("context",Complex.ContextFactory.create());
		return "index";
	}
	
	@RequestMapping("/web")
	public String main(Model model) {
		logger.info("HomeController main() {}","ENTER");
		return "index";
	}
	
	@RequestMapping("/movieList")
	public String movieList(Model model) {
		logger.info("HomeController movieList() {}","ENTER");
		return "movie/movieList";
	}
	
	@RequestMapping("/movieDetail/movieNo")
	public String movieDetail(Model model) {
		logger.info("HomeController movieDetail() {}","ENTER");
		return "movie/movieDetail";
	}
	
		
	
}
