package com.abb1cinema.web.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.abb1cinema.web.mapper.Mapper;
import com.abb1cinema.web.service.IGetService;
import com.abb1cinema.web.util.Util;

@Controller
@SessionAttributes("permission")
public class PermissionController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@Autowired Mapper mapper;
	
	@RequestMapping("/test/loginForm")
	public String patLogin() {
		logger.info("Permission - patLogin() {}","ENTER");
		return "public:patient/loginForm";
	}
	
	@RequestMapping(value="/test/{permission}/login", method=RequestMethod.POST)
	public String patLogin(@RequestParam("id") String id, 
			@RequestParam("pw") String pw, @PathVariable String permission, HttpSession session, Model model) throws Exception {
		String movePosition = "";
		logger.info("Permission - patLogin(model) PathVarialbe: {}",permission);
		logger.info("Permission - id, pw: {}",id+","+pw);
		return movePosition;
	}
	@RequestMapping("/test/logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "redirect:/";
	}
}
