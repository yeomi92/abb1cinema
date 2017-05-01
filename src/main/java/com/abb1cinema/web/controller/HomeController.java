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
	//admin
	@RequestMapping("/admin/index")
	public String admin(Model model) {
		logger.info("HomeController admin() {}","ENTER");
		model.addAttribute("context", Complex.ContextFactory.create());
		return "admin/index";
	}
	@RequestMapping("/admin/reservation")
	public String adminReservation(Model model) {
		logger.info("HomeController adminReservation() {}","ENTER");
		model.addAttribute("context", Complex.ContextFactory.create());
		return "admin/reservation";
	}
	@RequestMapping("/admin/movie")
	public String adminMovie(Model model) {
		logger.info("HomeController adminMovie() {}","ENTER");
		model.addAttribute("context", Complex.ContextFactory.create());
		return "admin/movie";
	}
	@RequestMapping("/admin/multiplex")
	public String adminMultiplex(Model model) {
		logger.info("HomeController adminMultiplex() {}","ENTER");
		model.addAttribute("context", Complex.ContextFactory.create());
		return "admin/multiplex";
	}
	@RequestMapping("/admin/board")
	public String adminBoard(Model model) {
		logger.info("HomeController adminBoard() {}","ENTER");
		model.addAttribute("context", Complex.ContextFactory.create());
		return "admin/board";
	}
	@RequestMapping("/admin/statistic")
	public String adminStatistic(Model model) {
		logger.info("HomeController adminStatistic() {}","ENTER");
		model.addAttribute("context", Complex.ContextFactory.create());
		return "admin/statistic";
	}
	@RequestMapping("/admin/customer")
	public String adminCustomer(Model model) {
		logger.info("HomeController adminCustomer() {}","ENTER");
		model.addAttribute("context", Complex.ContextFactory.create());
		return "admin/customer";
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
	//mypage
	@RequestMapping("/customer/mypage")
	public String myPage(Model model) {
		logger.info("HomeController myPageReservation() {}","ENTER");
		model.addAttribute("context", Complex.ContextFactory.create());
		return "customer/mypage";
	}
	@RequestMapping("/customer/mypageReservation")
	public String mypageReservation(Model model) {
		logger.info("HomeController mypageReservationDetail() {}","ENTER");
		model.addAttribute("context", Complex.ContextFactory.create());
		return "customer/mypageReservation";
	}
	@RequestMapping("/customer/mypageCancel")
	public String mypageCancel(Model model) {
		logger.info("HomeController mypageCancel() {}","ENTER");
		model.addAttribute("context", Complex.ContextFactory.create());
		return "customer/mypageCancel";
	}
	@RequestMapping("/customer/mypageInfo")
	public String mypageInfo(Model model) {
		logger.info("HomeController mypageInfo() {}","ENTER");
		model.addAttribute("context", Complex.ContextFactory.create());
		return "customer/mypageInfo";
	}
	@RequestMapping("/customer/updateInfoChPw")
	public String updateInfoChPw(Model model) {
		logger.info("HomeController updateInfoChPw() {}","ENTER");
		model.addAttribute("context", Complex.ContextFactory.create());
		return "customer/updateInfoChPw";
	}
	@RequestMapping("/customer/updateInfo")
	public String updateInfo(Model model) {
		logger.info("HomeController updateInfo() {}","ENTER");
		model.addAttribute("context", Complex.ContextFactory.create());
		return "customer/updateInfo";
	}
	@RequestMapping("/customer/withdrawal")
	public String withdrawal(Model model) {
		logger.info("HomeController withdrawal() {}","ENTER");
		model.addAttribute("context", Complex.ContextFactory.create());
		return "customer/withdrawal";
	}
	@RequestMapping("/customer/signUpSuccess")
	public String signUpSuccess(Model model) {
		logger.info("HomeController signUpSuccess() {}","ENTER");
		model.addAttribute("context", Complex.ContextFactory.create());
		return "customer/signUpSuccess";
	}
	@RequestMapping("/customer/findId")
	public String findId(Model model) {
		logger.info("HomeController findId() {}","ENTER");
		model.addAttribute("context", Complex.ContextFactory.create());
		return "customer/findId";
	}
	@RequestMapping("/customer/findIdSuccess")
	public String findIdSuccess(Model model) {
		logger.info("HomeController findIdSuccess() {}","ENTER");
		model.addAttribute("context", Complex.ContextFactory.create());
		return "customer/findIdSuccess";
	}
	@RequestMapping("/customer/findPw")
	public String findPw(Model model) {
		logger.info("HomeController findPw() {}","ENTER");
		model.addAttribute("context", Complex.ContextFactory.create());
		return "customer/findPw";
	}@RequestMapping("/customer/findPwSuccess")
	public String findPwSuccess(Model model) {
		logger.info("HomeController findPwSuccess() {}","ENTER");
		model.addAttribute("context", Complex.ContextFactory.create());
		return "customer/findPwSuccess";
	}
	@RequestMapping("/customer/updatePw")
	public String updatePw(Model model) {
		logger.info("HomeController updatePw() {}","ENTER");
		model.addAttribute("context", Complex.ContextFactory.create());
		return "customer/updatePw";
	}
	
	//reservation
	@RequestMapping("/reservation/main")
	public String reservation(Model model) {
		logger.info("HomeController reservation() {}","ENTER");
		model.addAttribute("context", Complex.ContextFactory.create());
		return "reservation/main";
	}
	@RequestMapping("/reservation/seat")
	public String reservationSeat(Model model) {
		logger.info("HomeController reservationSeat() {}","ENTER");
		model.addAttribute("context", Complex.ContextFactory.create());
		return "reservation/seat";
	}
	
	//theater
	@RequestMapping("/theater/main")
	public String theater(Model model) {
		logger.info("HomeController theater() {}","ENTER");
		model.addAttribute("context", Complex.ContextFactory.create());
		return "theater/main";
	}
}
