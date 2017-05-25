package com.abb1cinema.web.controller;

import java.util.HashMap;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.abb1cinema.web.service.PutService;

@RestController
public class PutController {
	private static final Logger logger = LoggerFactory.getLogger(PutController.class);
	@Autowired PutService putService;
	
	@RequestMapping(value="/updateInfo", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> updateCustomer(@RequestBody Map<String,String> paramMap) throws Exception {
		logger.info("PutController updateCustomer() {}","ENTER");
		Map<String,Object> map = new HashMap<>();
		logger.info("updateCustomer() 전달받은 pw: {}",paramMap.get("pw"));
		map.put("id", paramMap.get("id"));
		map.put("pw", paramMap.get("pw"));
		map.put("phone", paramMap.get("phone"));
		Integer result = putService.updateCustomer(map);
		map.put("result", result);
		return map;
	}
	
	@RequestMapping(value="/putCanceled", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> putCanceled(@RequestBody Map<String,String> paramMap) throws Exception {
		logger.info("PutController putCanceled() {}","ENTER");
		Map<String,Object> map = new HashMap<>();
		logger.info("putCanceled() 넘어온 id: {}",paramMap.get("id"));
		map.put("id", paramMap.get("id"));
		Integer result = putService.updateReservation(map);
		map.put("result", result);
		return map;
	}
	
	@RequestMapping(value="/put/article", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> updateArticle(@RequestBody Map<String,String> paramMap) throws Exception {
		logger.info("PutController updateArticle() {}","ENTER");
		Map<String,Object> map = new HashMap<>();
		Integer result = putService.updateArticle(paramMap);
		map.put("result", result);
		return map;
	}
	
	@RequestMapping(value="/updateHits", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> updateHits(@RequestBody Map<String,String> paramMap) throws Exception {
		logger.info("PutController updateHits() {}","ENTER");
		Map<String,Object> map = new HashMap<>();
		map.put("group", paramMap.get("group"));
		map.put("hits", paramMap.get("hits"));
		map.put("seq", paramMap.get("seq"));
		Integer result = putService.updateHits(map);
		map.put("result", result);
		return map;
	}
	
	@RequestMapping(value="/put/admin/movie", method=RequestMethod.POST, consumes="application/json")
	   public @ResponseBody Map<?,?> putAdminMovie(@RequestBody Map<String,String> paramMap) throws Exception {
	      logger.info("PutController putAdminMovie() {}","ENTER");
	      Map<String,Object> map = new HashMap<>();
	      map.put("seq",paramMap.get("seq"));
	      map.put("title",paramMap.get("title"));
	      map.put("grade",paramMap.get("grade"));
	      map.put("released",paramMap.get("released"));
	      map.put("info",paramMap.get("info"));
	      map.put("synopsys",paramMap.get("synopsys"));
	      map.put("name_director",paramMap.get("name_director"));
	      map.put("name_actor",paramMap.get("name_actor"));
	      map.put("trailer_url",paramMap.get("trailer_url"));
	      Integer update=putService.updateAdminMovie(map);
	      map.clear();
	      map.put("update", update);
	      return map;
	}
	
	//추가
	@RequestMapping(value="/put/admin/main/movie", method=RequestMethod.POST, consumes="application/json")
	   public @ResponseBody Map<?,?> putAdminMainMovie(@RequestBody Map<String,String> paramMap) throws Exception {
	      logger.info("PutController putAdminMainMovie() {}","ENTER");
	      Map<String,Object> map = new HashMap<>();
	      if(paramMap.get("value1").equals("1")){
	    	  map.put("value1", "1");
	    	  map.put("key", "seq");
	    	  map.put("value2", paramMap.get("seq"));
	      }else{
	    	  map.put("value1", "0");
	    	  map.put("key", "trailer_main");
		      map.put("value2", "1");
	      }
	      Integer result=putService.updateMainMovie(map);
	      map.put("result", result);
	      return map;
	}
	
}
