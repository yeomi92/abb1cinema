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
		model.addAttribute("context", Complex.ContextFactory.create());
		return "index";
	}
	@RequestMapping("/web")
	public String main(Model model) {
		logger.info("HomeController main() {}","ENTER");
		model.addAttribute("context", Complex.ContextFactory.create());
		return "index";
	}
	
	//board
	@RequestMapping("/board/main")
	public String bbs(Model model) {
		logger.info("HomeController bbs() {}","ENTER");
		model.addAttribute("context", Complex.ContextFactory.create());
		return "board/main";
	}
	@RequestMapping("/board/detail")
    public String bbsDetail(Model model) {
       logger.info("HomeController bbsDetail() {}","ENTER");
		model.addAttribute("context", Complex.ContextFactory.create());
       return "board/detail";
    } 
    @RequestMapping("/board/noticeDetail")
    public String bbsNoticeDetail(Model model) {
       logger.info("HomeController bbsNoticeDetail() {}","ENTER");
		model.addAttribute("context", Complex.ContextFactory.create());
       return "board/noticeDetail";
    }
    @RequestMapping("/board/write")
    public String bbsWrite(Model model) {
       logger.info("HomeController bbsWrite() {}","ENTER");
		model.addAttribute("context", Complex.ContextFactory.create());
       return "board/write";
    }
    
	//movie
	@RequestMapping("/movie/main")
	public String movieList(Model model) {
		logger.info("HomeController movieList() {}","ENTER");
		model.addAttribute("context", Complex.ContextFactory.create());
		return "movie/main";
	}
	@RequestMapping("/movie/detail/1")
	public String movieDetail(Model model) {
		logger.info("HomeController movieDetail() {}","ENTER");
		model.addAttribute("context", Complex.ContextFactory.create());
		return "movie/detail";
	}
	
	//customer
	@RequestMapping("/customer/login")
	public String login(Model model) {
		logger.info("HomeController login() {}","ENTER");
		model.addAttribute("context", Complex.ContextFactory.create());
		return "customer/login";
	}
	@RequestMapping("/customer/signUp")
	public String signUp(Model model) {
		logger.info("HomeController signUp() {}","ENTER");
		model.addAttribute("context", Complex.ContextFactory.create());
		return "customer/signUp";
	}
	@RequestMapping("/customer/mypage")
	public String myPage(Model model) {
		logger.info("HomeController myPage() {}","ENTER");
		model.addAttribute("context", Complex.ContextFactory.create());
		return "customer/mypage";
	}
}
