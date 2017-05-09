/*
 ========= abb1-meta ========
 * abb1-component
 * abb1-ui
 * abb1-permission
 * abb1-navi
 * abb1-util
 * abb1-person
 * abb1-info
 * abb1-jquery
 ===========================
 */

/* Application NameSpace */
var abb1 = abb1 || {};
		/************************
		 * Model
		 * abb1.context
		 * abb1.session
		 * abb1.util
		 ***********************/
/*========= abb1-context =========
	@AUTHOR : Hyeseun Yeom
	@CREATE DATE : 2017-05-06
	@UPDATE DATE : 2017-05-06
	@DESC : META-INF
=================================*/
abb1.context = (function(){
	var init = function(context){ 
		abb1.session.init(context);
		onCreate();
	};
	var setContentView = function(){
		
	};
	var onCreate = function(){
		setContentView();
		abb1.component.init();
		abb1.util.datetime();
	};
	return {
		init : init,
		setContentView : setContentView,
		onCreate : onCreate
	};
})();
/*========= abb1-session =========
@AUTHOR : Hyeseun Yeom
@CREATE DATE : 2017-05-06
@UPDATE DATE : 2017-05-06
@DESC : Session
=================================*/
abb1.session = (function(){ 
	var init = function(context) { 
		sessionStorage.setItem('context',context);
		sessionStorage.setItem('js',context+'/resources/js');
		sessionStorage.setItem('css',context+'/resources/css');
		sessionStorage.setItem('img',context+'/resources/img');
	};
	var getContextPath = function(){ return sessionStorage.getItem('context');};
	var getJavascriptPath = function(){ return sessionStorage.getItem('js');};
	var getStylePath = function() { return sessionStorage.getItem('css');};
	var getImagePath = function() { return sessionStorage.getItem('img');};
	return {
		init : init,
		getContextPath : getContextPath,
		getJavascriptPath : getJavascriptPath,
		getStylePath : getStylePath,
		getImagePath : getImagePath
	};
})();
		/************************
		 * View
		 * abb1.component
		 * 
		 ***********************/
abb1.component = (function(){
	var _body, _wrapper;
	var setBody = function(body) { this._body = body; }
	var getBody = function() { return this._body; }
	var setWrapper = function(wrapper) { this._wrapper = wrapper; }
	var getWrapper = function() { return this._wrapper; }
	var init = function(){ onCreate(); };
	var onCreate = function(){ setContentView(); };
	var setContentView = function() {
		abb1.component.setWrapper($('#wrapper'));
		abb1.component.setBody($('body'));
	};
	return {
		init : init,
		getWrapper : getWrapper,
		setWrapper : setWrapper,
		getBody : getBody,
		setBody : setBody,
		div : function(id){
			return $(id);
		},
		btn : function(id, type){
			return $('<a id=' + id + ' href="#" class="btn ' + type + '" role="button">aButton</a>');
		},
		inputText : function(id){
			return $('<input id="' + id + '" type="text" class="form-control" placeholder="example" aria-describedby="basic-addon1">');
		},
		divAlert : function(type){
			return $('<div class="alert '+type+'" role="alert">example</div>');
		}
	};
})();

/*========= abb1-util =========
@AUTHOR : Hyeseun Yeom
@CREATE DATE : 2017-05-06
@UPDATE DATE : 2017-05-06
@DESC : Etc methods(ex: email check validation, calculation profile, datetime check algorithm)
abb1-util-validation
abb1-util-calcProfile
abb1-util-datetime
=================================*/
abb1.util={
	validation : function(x) {
		return (x != "");
	},
	calcProfile : function(ssn) {
		var arr = [];
		var date = abb1.util.datetime();
		var year = date.substring(0,4)*1, month = date.substring(4,6)*1, day = date.substring(6,8)*1;
		var age = ssn.substring(0,2)*1;
		var flag = ssn.charAt(7) == '3' || ssn.charAt(7) == '4';
		arr.push(flag? '20'+ ssn.substring(0,2) +'년 ' + ssn.substring(2,4) + '월 '+ ssn.substring(4,6) + '일' : '19'+ssn.substring(0,2) + '년 ' + ssn.substring(2,4) + '월 ' + ssn.substring(4,6)+'일');
		arr.push(flag? year-2000-age +'세': year-1900-age+'세');
		arr.push(ssn.charAt(7)==='1' || ssn.charAt(7)==='3' ? '남자' : '여자');
		return arr;
	},
	datetime : function(){	
		var d = new Date();
		var month = d.getMonth() +1;
		var year = d.getYear()-100;
		var calcstr = '20' + year + '0' + month +'' + d.getDate();
		var showstr = '20' + year + '년 0' + month +'월 ' + d.getDate() +'일';
		$('#date').html(showstr);
		return calcstr;
	}
};
/*========= abb1-person =========
@AUTHOR : Hyeseun Yeom
@CREATE DATE : 2017-05-06
@UPDATE DATE : 2017-05-06
@DESC : Using person in OOP
abb1-person-init
=================================*/
abb1.person = (function(){
	var wrapper, ctx, img, js, css;
	var init = function(){
		wrapper = abb1.component.getWrapper();
		ctx = abb1.session.getContextPath();
		img = abb1.session.getImagePath();
		js = abb1.session.getJavascriptPath();
		css = abb1.session.getStylePath();
		$('#brand').on('click',function(){
			alert('brand click!');
		});
		$('#wrapper').load(ctx+'/permission/form');
	};
	return {
		init : init
	};
})();

/*========= abb1-info =========
@AUTHOR : Hyeseun Yeom
@CREATE DATE : 2017-05-06
@UPDATE DATE : 2017-05-06
@DESC : Practice for OOP
=================================*/
abb1.info = (function() { // var를 쓴 것과 같음
	var _name, _age, _gender, _job;
	return {
		setName : function(name) { this._name = name;},
		setAge : function(age) { this._age = age;},
		setGender : function(gender) { this._gender = gender;},
		setJob : function(job) { this._job = job;},
		getName : function() { return this._name;},
		getAge : function() { return this._age;},
		getGender : function() { return this._gender;},
		getJob : function() { return this._job;},
		toString : function() {
			return "입력한 정보<br>이름: " + this._name 
			+ "<br>나이: " + this._age 
			+ "세<br>성별: " + this._gender 
			+ "<br>직업: " + this._job;
		}
	};
})();
/*========= abb1-jquery =========
@AUTHOR : Junyoung Park
@CREATE DATE : 2017-05-06
@UPDATE DATE : 2017-05-06
@DESC : jQuery for view
=================================*/
abb1.jquery = {
	admin_statistic : function(){
		var statistic_category = $('#statistic_category');
    	statistic_category.addClass('abb1_admin_reservation_category');
    	$('#statistic_search_keyword').addClass('abb1_admin_reservation_search_keyword');
    	$('#statistic_search_btn').addClass('abb1_admin_reservation_search_btn');
	},	
	admin_movie_register : function(){
    	var movie_register = $('#movie_register');
    	movie_register.find('div:first-child').addClass('abb1_admin_maintext');
    	movie_register.find('div:nth-child(2)').addClass('abb1_admin_settings');
    	var movie_register_table = $('#movie_register_table');
    	movie_register_table.addClass('abb1_admin_movie_management_table');
    	$('#trailer_check').addClass('abb1_trailer_check');
    	$('#movie_register_btns').addClass('abb1_admin_movie_management_btns');
    },
    admin_customer : function(){
    	var customer = $('#customer');
    	customer.find('div:first-child').addClass('abb1_admin_maintext');
    	$('#customer_search_keyword').addClass('abb1_admin_reservation_search_keyword');
    	$('#customer_search_btn').addClass('abb1_admin_customer_search_btn');
    	$('#customer_management_wrapper').find('div:nth-child(2)').addClass('abb1_admin_settings');
    	var admin_customer_table = $('#admin_customer_table');
    	admin_customer_table.addClass('abb1_admin_customer_table');
    	admin_customer_table.find('col:nth-child(1)').css('width','20%');
    	admin_customer_table.find('col:nth-child(2)').css('width','20%');
    	admin_customer_table.find('col:nth-child(3)').css('width','20%');
    	admin_customer_table.find('col:nth-child(4)').css('width','30%');
    	admin_customer_table.find('col:nth-child(5)').css('width','10%');
    	$('#delete').css('background','white');
    	$('#customer_result').addClass('abb1_signup_form_control abb1_admin_customer_change');
    },
    admin_reservation : function(){
    	$('#reservation_category').addClass('abb1_admin_reservation_category');
    	$('#reservation_search_keyword').addClass('abb1_admin_reservation_search_keyword');
    	$('#reservation_search_btn').addClass('abb1_admin_reservation_search_btn');
    	$('#reservation').find('div:nth-child(2)').addClass('abb1_admin_settings');
    	var admin_reservation_list = $('#admin_reservation_list');
    	admin_reservation_list.find('div:first-child').addClass('abb1_admin_maintext');
    	admin_reservation_list.find('div:nth-child(2)').addClass('abb1_admin_settings');
    	var reservation_table = $('#reservation_table');
    	reservation_table.addClass('abb1_admin_reservation_table');
    	reservation_table.find('col:nth-child(1)').css('width','10%');
    	reservation_table.find('col:nth-child(2)').css('width','35%');
    	reservation_table.find('col:nth-child(3)').css('width','15%');
    	reservation_table.find('col:nth-child(4)').css('width','15%');
    	reservation_table.find('col:nth-child(5)').css('width','20%');
    	reservation_table.find('col:nth-child(6)').css('width','15%');
    	var admin_cancel_list = $('#admin_cancel_list');
    	admin_cancel_list.find('div:first-child').addClass('abb1_admin_maintext');
    	admin_cancel_list.find('div:nth-child(2)').addClass('abb1_admin_settings');
    	var cancel_list_table = $('#cancel_list_table');
    	cancel_list_table.addClass('abb1_admin_reservation_table');
    	cancel_list_table.find('col:nth-child(1)').css('width','10%');
    	cancel_list_table.find('col:nth-child(2)').css('width','35%');
    	cancel_list_table.find('col:nth-child(3)').css('width','15%');
    	cancel_list_table.find('col:nth-child(4)').css('width','15%');
    	cancel_list_table.find('col:nth-child(5)').css('width','20%');
    	cancel_list_table.find('col:nth-child(6)').css('width','15%');
    	var admin_movie_list = $('#admin_movie_list');
    	admin_movie_list.find('div:nth-child(1)').addClass('abb1_admin_maintext');
    	admin_movie_list.find('div:nth-child(2)').addClass('abb1_admin_settings');
    	var movie_list_table = $('#movie_list_table');
    	movie_list_table.addClass('abb1_admin_reservation_table');
    	movie_list_table.find('col:nth-child(1)').css('width','15%');
    	movie_list_table.find('col:nth-child(2)').css('width','20%');
    	movie_list_table.find('col:nth-child(3)').css('width','25%');
    	movie_list_table.find('col:nth-child(4)').css('width','25%');
    	movie_list_table.find('col:nth-child(5)').css('width','15%');
    },
    admin_movie_management : function(){
    	var movie_management = $('#movie_management');
    	movie_management.find('div:first-child').addClass('abb1_admin_maintext');
    	$('#movie_search_keyword').addClass('abb1_admin_reservation_search_keyword');
    	$('#movie_search_btn').addClass('abb1_admin_reservation_search_btn');
    	movie_management.find('div:nth-child(3)').addClass('abb1_admin_settings');
    	var movie_management_table = $('#movie_management_table');
    	movie_management_table.addClass('abb1_admin_movie_management_table');
    	$('#movie_management_btns').addClass('abb1_admin_movie_management_btns');
    },
    admin_bbs_notice : function(pageNo){
    	var notice_table = $('#notice_table');
    	notice_table.find('div:first-child').addClass('abb1_admin_maintext');
    	var notice_write_wrapper = $('#notice_write_wrapper');
    	notice_write_wrapper.find('div:first-child').addClass('abb1_admin_notice_register');
    	notice_write_wrapper.find('table').addClass('abb1_admin_notice_table');
    	notice_write_wrapper.find('col:nth-child(1)').css('width','10%');
    	notice_write_wrapper.find('col:nth-child(2)').css('width','60%');
    	notice_write_wrapper.find('col:nth-child(3)').css('width','20%');
    	notice_write_wrapper.find('col:nth-child(4)').css('width','10%');
    	var notice_pagination = $('#notice_pagination');
    	notice_pagination.addClass('abb1_admin_pagination abb1_pagination_faq');
    	notice_pagination.find('td:nth-child(2)').css('width','256px');
    	notice_pagination.find('td:nth-child(2)').find('a:nth-child('+pageNo+')').addClass('on');
    	var notice_write = $('#notice_write');
    	notice_write.find('table').addClass('abb1_notice_write_table');
    	notice_write.find('col:nth-child(1)').css('width','15%');
    	notice_write.find('col:nth-child(2)').css('width','80%');
    	$('#notice_title').addClass('abb1_write_title');
    	notice_write.find('div').addClass('abb1_bbs_write_btns');
    	$('#cancel').addClass('abb1_bbs_write_cancel');
    	$('#confirm').addClass('abb1_bbs_write_confirm');
    },
    admin_bbs_faq : function(pageNo){
    	var faq_table = $('#faq_table');
    	faq_table.find('div:first-child').addClass('abb1_admin_maintext');
    	var faq_write_wrapper = $('#faq_write_wrapper');
    	faq_write_wrapper.find('table').addClass('abb1_admin_faq_table');
    	faq_write_wrapper.find('col:nth-child(1)').css('width','10%');
    	faq_write_wrapper.find('col:nth-child(2)').css('width','45%');
    	faq_write_wrapper.find('col:nth-child(3)').css('width','10%');
    	faq_write_wrapper.find('col:nth-child(4)').css('width','20%');
    	faq_write_wrapper.find('col:nth-child(5)').css('width','10%');
    	faq_write_wrapper.find('col:nth-child(6)').css('width','10%');
    	var faq_pagination = $('#faq_pagination');
    	faq_pagination.addClass('abb1_admin_pagination abb1_pagination_faq');
    	faq_pagination.find('td:nth-child(2)').css('width','256px');
    	faq_pagination.find('td:nth-child(2)').find('a:nth-child('+pageNo+')').addClass('on');
    	var faq_answer = $('#faq_answer');
    	faq_answer.find('div:first-child').addClass('abb1_bbs_pagination_table');
    	faq_answer.find('table:first-child').addClass('abb1_bbs_notice_table');
    	faq_answer.find('ul').addClass('abb1_view_info');
    	$('#faq_question_content').addClass('abb1_view_content');
    	var faq_answer_content = $('#faq_answer_content');
    	faq_answer_content.find('col:nth-child(1)').css('width','90%');
    	faq_answer_content.find('col:nth-child(2)').css('width','10%');
    },
    board_detail : function(){
    	var bbs_detail = $('#bbs_detail');
    	bbs_detail.addClass('abb1_bbs_write_container');
    	bbs_detail.find('div:first-child').addClass('abb1_bbs_table_text');
    	bbs_detail.find('div:nth-child(2)').addClass('abb1_bbs_pagination_table');
    	var bbs_detail_table = $('#bbs_detail_table');
    	bbs_detail_table.addClass('abb1_bbs_notice_table');
    	bbs_detail_table.find('ul:first-child').addClass('abb1_view_info');
    	$('#bbs_detail_content').addClass('abb1_view_content');
    	var bbs_detail_review_ul = $('#bbs_detail_review_ul');
    	bbs_detail_review_ul.find('div').addClass('abb1_review_result');
    	for(var i=1; i<6; i++){
    		$('#bbs_review_result_name'+i).addClass('abb1_bbs_review_result_name');
    		$('#bbs_review_result_txt'+i).addClass('abb1_bbs_review_result_txt');
    		$('#bbs_review_result_reg_date'+i).addClass('abb1_bbs_review_result_reg_date');
    	}
    	var bbs_detail_reply = $('#bbs_detail_reply');
    	bbs_detail_reply.css('margin-top','10px');
    	bbs_detail_reply.find('col:nth-child(1)').css('width','90%');
    	bbs_detail_reply.find('col:nth-child(2)').css('width','10%');
    },
    board_main : function(pageNo){
    	var board_main = $('#board_main');
    	board_main.find('div:first-child').addClass('abb1_bbs_table_text');
    	board_main.find('div:nth-child(2)').addClass('abb1_bbs_table abb1_width_center_w900');
    	$('#board_main_ddl').find('select').addClass('abb1_select_box');
    	$('#board_main_find_keyword').addClass('abb1_searchtext');
    	$('#board_main_find_search').addClass('abb1_submitbtn');
    	var board_main_table = $('#board_main_table');
    	board_main_table.addClass('abb1_bbs_main_table');
    	board_main_table.find('table').css('text-align','center');
    	board_main_table.find('col:nth-child(1)').css('width','11%');
    	board_main_table.find('col:nth-child(2)').css('width','14%');
    	board_main_table.find('col:nth-child(3)').css('width','60%');
    	board_main_table.find('col:nth-child(4)').css('width','30%');
    	board_main_table.find('col:nth-child(5)').css('width','30%');
    	$('#bbs_pagination').find('table').addClass('abb1_bbs_pagination_table');
    	var bbs_pagination_number = $('#bbs_pagination_number')
    	bbs_pagination_number.css('width','300px');
    	bbs_pagination_number.find('a:nth-child('+pageNo+')').addClass('on');
    	var board_main_btn = $('#board_main_btn');
    	board_main_btn.css('text-align','right');
    	board_main_btn.find('input').addClass('abb1_bbs_write_btn');
    },
    board_notice_detail : function(){
    	var board_notice_detail = $('#board_notice_detail');
    	board_notice_detail.addClass('abb1_bbs_write_container');
    	board_notice_detail.find('div:first-child').addClass('abb1_bbs_table_text');
    	board_notice_detail.find('div:nth-child(2)').css('margin','0 auto').css('text-align','center');
    	var board_notice_detail_table = $('#board_notice_detail_table');
    	board_notice_detail_table.addClass('abb1_bbs_notice_table');
    	board_notice_detail_table.find('ul').addClass('abb1_view_info');
    	var board_notice_detail_btn = $('#board_notice_detail_btn')
    	board_notice_detail_btn.addClass('abb1_bbs_write_btns');
    	board_notice_detail_btn.find('input').addClass('abb1_bbs_write_confirm');
    },
    board_write : function(){
		var board_write = $('#board_write');
		board_write.addClass('abb1_bbs_write_container');
		board_write.find('div:first-child').addClass('abb1_bbs_write_text');
		board_write.find('div:nth-child(2)').find('span').addClass('abb1_bbs_write_font');
		var board_write_table = $('#board_write_table');
		board_write_table.addClass('abb1_bbs_write_table');
		board_write_table.find('col:nth-child(1)').css('width','15%');
		board_write_table.find('col:nth-child(2)').css('width','80%');
		board_write_table.find('tr').find('td:first-child').find('span').addClass('star');
		$('#board_write_radio').addClass('abb1_bbs_write_radio');
		$('#board_write_category').addClass('abb1_write_ddl');
		$('#board_write_select_multiplex').addClass('abb1_board_write_select_multiplex');
		$('#board_write_title').addClass('abb1_write_title');
		$('#board_write_content').addClass('abb1_board_write_content');
		$('#board_write_btns').addClass('abb1_bbs_write_btns');
		$('#board_write_cancel').addClass('abb1_bbs_write_cancel');
		$('#board_wrtie_confirm').addClass('abb1_bbs_write_confirm');
	},
	reservation_main : function(){
		$('#container').addClass('abb1_reservation');
		var reservation_main_form = $('#reservation_main_form');
		reservation_main_form.addClass('abb1_reservation_main_form');
		reservation_main_form.find('table').addClass('abb1_reservation_calendar');
		reservation_main_form.find('span').addClass('abb1_font_size_25');
		var reservation_multiplex = $('#reservation_multiplex');
		reservation_multiplex.addClass('abb1_reservation_multiplex');
		reservation_multiplex.find('col:nth-child(1)').addClass('abb1_width_60');
		reservation_multiplex.find('col:nth-child(2)').addClass('abb1_width_40');
		reservation_multiplex.find('tr:first-child').addClass('abb1_border_top_2');
		var reservation_tab_scroll = $('#reservation_tab_scroll');
		reservation_tab_scroll.addClass('abb1_reservation_tab_scroll');
		reservation_tab_scroll.find('ul').addClass('abb1_reservation_theater_zone');
		reservation_tab_scroll.find('span').addClass('abb1_reservation_area_zone');
		$('#reservation_tab_cont').addClass('abb1_reservation_tab_cont on');
		var reservation_area_list = $('#reservation_area_list');
		reservation_area_list.addClass('abb1_reservation_area_cont on');
		reservation_area_list.find('ul').addClass('abb1_reservation_area_list');
		 reservation_area_list.find('a:nth-child(1)').addClass('on');
		var reservation_area = $('#reservation_area');
		reservation_area.addClass('abb1_reservation_area');
		reservation_area.find('a').addClass('abb1_reservation_tab_cont on');
		var reservation_movielist = $('#reservation_movielist');
		reservation_movielist.addClass('abb1_reservation_movielist');
		reservation_movielist.find('li:nth-child(1)').find('a').addClass('on');
		var reservation_confirm = $('#reservation_confirm');
		reservation_confirm.addClass('abb1_reservation_confirm');
		reservation_confirm.find('div').addClass('abb1_reservation_time');
		reservation_confirm.find('h3').addClass('sub_tit02');
		var reservation_time = $('#reservation_time');
		reservation_time.addClass('abb1_reservation_time_a');
		reservation_time.find('h4:first-child').addClass('abb1_reservation_timetit');
		var movie_time_line = $('#movie_time_line');
		movie_time_line.addClass('abb1_padding_15');
		movie_time_line.find('div').addClass('abb1_padding_bottom_20');
		$('#movie_title').addClass('abb1_multiplex_movie_title');
		var movie_timeline_ul = $('#movie_timeline_ul');
		movie_timeline_ul.addClass('abb1_ul_inline');
		movie_timeline_ul.find('li').addClass('abb1_li_inline abb1_padding_right_0');
		movie_timeline_ul.find('strong').addClass('abb1_font_size_22');
	},
	reservation_seat : function(){
		$('#container').addClass('abb1_seat');
		var reservation_seat_form = $('#reservation_seat_form');
		reservation_seat_form.addClass('abb1_reservation_seat_form');
		reservation_seat_form.find('div:first-child').css('padding','30px 0');
		reservation_seat_form.find('div:first-child').find('div').addClass('abb1_seat_maintext');
		reservation_seat_form.find('div:first-child').find('div:nth-child(2)').addClass('abb1_seat_screen');
		var seat_area = $('#seat_area');
		seat_area.addClass('abb1_seat_area');
		seat_area.find('div:first-child').addClass('abb1_seat_table');
		seat_area.find('col:nth-child(1)').css('width','9%');
		seat_area.find('col:nth-child(2)').css('width','90%');
		var seat_area_table = $('#seat_area_table');
		seat_area_table.find('span').addClass('abb1_aisle');
		seat_area.find('div:last-child').addClass('abb1_seat_info');
		$('#ticketing > div').addClass('abb1_ticketing_settings');	
		$('#ticketing > div > div').addClass('abb1_ticketing_table');	
		$('#ticketing_tr1').addClass('abb1_ticketing_tr');
		$('#ticketing_tr2').addClass('abb1_ticketing_tr2');
		$('#ticketing_movie_title').addClass('abb1_ticketing_moviename');
		$('#ticketing_movie_type').addClass('abb1_ticketing_type');
		$('#ticketing_cost').addClass('abb1_ticketing_cost');
		$('#ticketing_paying').addClass('abb1_ticketing_paying');
		$('#ticketing_paying input').addClass('abb1_ticketing_btn');
	}
}
/************************
 * Controller
 * abb1.controller
 * 
 ***********************/
abb1.controller = (function(){})();