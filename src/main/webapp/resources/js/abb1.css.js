function gnbCss(){
    var gnb = $('#gnb');
	gnb.find('div:first-child').addClass('abb1_width_100 abb1_text_center')
	gnb.find('div:first-child').find('div:first-child').addClass('abb1_gnb_tab abb1_width_100 abb1_text_center');
	gnb.find('ul').addClass('abb1_gnb');
	gnb.find('span:first-child').addClass('abb1_tooltiptext');
	gnb.find('span:nth-child(2)').addClass('abb1_tooltiptext');
	gnb.find('span:nth-child(3)').addClass('abb1_tooltiptext');
}
function indexCss(){
    var boxoffice = $('#boxoffice');
	var botable = boxoffice.find('table');
	botable.addClass('abb1_tbboxoffice');
	botable.find('tr:first-child').find('td:first-child').addClass('abb1_tbboxoffice_firstcol');
	botable.find('ul').addClass('abb1_rank');
	$('#reservation').addClass('abb1_main_reservebtn');
	$('#reservation').find('a').css('color','white');
	var eventBxMain = $('#eventBxMain');
	eventBxMain.find('div:first-child').addClass('abb1_width_100 abb1_text_center');
	eventBxMain.find('div:first-child').find('div:first-child').addClass('abb1_eventBxMain');
}
function indexSlideCss(){
	var slidePoster = $('#slidePoster');
	slidePoster.find('div:first-child').addClass('abb1_width_100 abb1_text_center');
	slidePoster.find('ul').addClass('abb1_slidePoster');
	slidePoster.find('li:first-child').addClass('abb1_slideBtn');
	slidePoster.find('li:nth-child(6)').addClass('abb1_slideBtn');
}
function adminLoginCss(){
    var container = $('#container');
	$('#signupSuccess').addClass('abb1_find_id_container');
	container.find('div:first-child').find('div:first-child').addClass('abb1_width_left');
	container.find('h2').addClass('abb1_color_bold_brown');
	var signup_success = $('#signup_success');
	signup_success.addClass('abb1_signup_success_div').css('margin-top','40px');
	signup_success.find('div:first-child').addClass('abb1_page_info abb1_width_center');
	signup_success.find('table').addClass('abb1_signup_form_control abb1_width_left');
	signup_success.find('span').addClass('abb1_color_bold_gray');
	signup_success.find('td:nth-child(2)').addClass('abb1_padding_left_163');
	signup_success.find('ul').addClass('abb1_page_ul_inline');
	signup_success.find('li').addClass('abb1_page_li_inline');
	signup_success.find('li').find('input').addClass('btn abb1_btn_lg abb1_btn_verification').css('height','50px').css('width','170px').css('font-size','17px').css('background','#453d3f').css('color','#efebdb');
}
function adminIndexCss(){
    $('#area_chart').css('width','100%').css('height','500px');
	$('#donut_chart').addClass('abb1_width_center').css('width','900px').css('height','450px');
}
function adminStatisticCss(){
	$('#statistic>div:nth-child(1)').addClass('abb1_admin_maintext');
	var statistic_category = $('#statistic_category');
    statistic_category.addClass('abb1_admin_reservation_category');
    $('#statistic_search_keyword').addClass('abb1_admin_reservation_search_keyword');
    $('#statistic_search_btn').addClass('abb1_admin_reservation_search_btn');
}
function adminMovieRegisterCss(){
    var movie_register = $('#movie_register');
    $('#movie_register>div:nth-child(1)').addClass('abb1_admin_maintext');
    //movie_register.find('div:first-child').addClass('abb1_admin_maintext');
    movie_register.find('div:nth-child(2)').addClass('abb1_admin_settings');
    var movie_register_table = $('#movie_register_table');
    //movie_register_table.addClass('abb1_admin_movie_management_table');
    movie_register_table.css('margin-left','50px');
    movie_register_table.find('td').css('height','40px');
    $('#trailer_check').addClass('abb1_trailer_check');
    $('#movie_register_btns').addClass('abb1_admin_movie_management_btns');
}
function adminCustomerCss(){
    var customer = $('#customer');
    $('#customer>div:nth-child(1)').addClass('abb1_admin_maintext');
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
}
function adminReservationCss(){
	$('#reservation>div:nth-child(1)').addClass('abb1_admin_maintext');
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
}
function adminMovieManagementCss(){
    var movie_management = $('#movie_management');
    movie_management.find('div:first-child').addClass('abb1_admin_maintext');
    $('#movie_search_keyword').addClass('abb1_admin_reservation_search_keyword');
    $('#movie_search_btn').addClass('abb1_admin_reservation_search_btn');
    movie_management.find('div:nth-child(3)').addClass('abb1_admin_settings');
}

function adminMovieSearchCss(){
    var movie_management_table = $('#movie_management_table');
    movie_management_table.addClass('abb1_admin_movie_management_table');
    $('#movie_management_btns').addClass('abb1_admin_movie_management_btns');
}
function adminBbsNoticeCss(pageNo){
    var notice_table = $('#notice_table');
    notice_table.find('div:first-child').addClass('abb1_admin_maintext');
    var notice_write_wrapper = $('#notice_write_wrapper');
    notice_write_wrapper.find('div:first-child').addClass('abb1_admin_notice_register');
    notice_write_wrapper.find('table').addClass('abb1_admin_notice_table');
    notice_write_wrapper.find('table td').css('border-bottom-color','white');
    notice_write_wrapper.find('col:nth-child(1)').css('width','10%');
    notice_write_wrapper.find('col:nth-child(2)').css('width','60%');
    notice_write_wrapper.find('col:nth-child(3)').css('width','20%');
    notice_write_wrapper.find('col:nth-child(4)').css('width','10%');
    var notice_pagination = $('#notice_pagination');
    notice_pagination.addClass('abb1_admin_pagination abb1_pagination_faq');
    notice_pagination.find('td:nth-child(2)').css('width','256px');
    notice_pagination.find('td:nth-child(2)').find('a:nth-child('+pageNo+')').addClass('on');
}
function adminBbsNoticeWriteCss(){
    var notice_write = $('#notice_write');
    notice_write.find('table').addClass('abb1_notice_write_table');
    notice_write.find('col:nth-child(1)').css('width','15%');
    notice_write.find('col:nth-child(2)').css('width','80%');
    $('#notice_title').addClass('abb1_write_title');
    notice_write.find('div').addClass('abb1_bbs_write_btns');
    $('#cancel').addClass('abb1_bbs_write_cancel');
    $('#confirm').addClass('abb1_bbs_write_confirm');
}
function adminBbsFaqCss(pageNo){
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
}
function reservationMainCss(){
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
    var reservation_area = $('#reservation_area');
    reservation_area.addClass('abb1_reservation_area');
    reservation_area.find('a').addClass('abb1_reservation_tab_cont on');
    var reservation_movielist = $('#reservation_movielist');
    reservation_movielist.addClass('abb1_reservation_movielist');
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
}
function reservationSeatCss(){
	$('#container').addClass('abb1_seat');
	var reservation_seat_form = $('#reservation_seat_form');
	reservation_seat_form.addClass('abb1_reservation_seat_form');
	reservation_seat_form.find('div:first-child').css('padding','30px 0');
	reservation_seat_form.find('div:first-child').find('div').addClass('abb1_seat_maintext');
	reservation_seat_form.find('div:first-child').find('div:nth-child(2)').addClass('abb1_seat_screen');
	var seat_area = $('#seat_area');
	seat_area.addClass('abb1_seat_area');
	seat_area.find('div:first-child').addClass('abb1_seat_table');
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
function movieMainCss(){
	var movieMain=$('#movieMain');
	movieMain.find('div:nth-child(1)').addClass('abb1_movie_btns');
	movieMain.find('ul').addClass('abb1_ul_inline');
	movieMain.find('li').addClass('abb1_li_inline');
	movieMain.find('div:nth-child(1) li:nth-child(1)>a').addClass('abb1_movie_now_btn');
	movieMain.find('div:nth-child(1) li:nth-child(2)>a').addClass('abb1_movie_future_btn');
	$('#order').addClass('abb1_width_right');
	$('#order').find('li:nth-child(1) a').addClass('abb1_padding_right_5');
	$('#movieList').addClass('abb1_movie_list_div');
	$('#movieList2').addClass('abb1_movie_list_div');
	movieMain.find('table').addClass('abb1_movie_table');
	movieMain.find('table tr:nth-child(1)>td').addClass('abb1_nowMovie_border');
	movieMain.find('table tr:nth-child(2)>td').addClass('abb1_movie_table_title_td');
	movieMain.find('table tr:nth-child(3)>td').addClass('abb1_movie_table_rate_td');
}
function movieMainListCss(){
    var movieMain=$('#movieMain');
    movieMain.find('div:nth-child(1)').addClass('abb1_movie_btns');
    movieMain.find('ul').addClass('abb1_ul_inline');
    movieMain.find('li').addClass('abb1_li_inline');
    movieMain.find('div:nth-child(1) li:nth-child(1)>a').addClass('abb1_movie_now_btn');
    movieMain.find('div:nth-child(1) li:nth-child(2)>a').addClass('abb1_movie_future_btn');
    $('#order').addClass('abb1_width_right');
    $('#order').find('li:nth-child(1) a').addClass('abb1_padding_right_5');
    $('#movieList').addClass('abb1_movie_list_div');
    $('#movieList2').addClass('abb1_movie_list_div');
    movieMain.find('table').addClass('abb1_movie_table');
    movieMain.find('table tr:nth-child(1)>td').addClass('abb1_nowMovie_border');
    movieMain.find('table tr:nth-child(2)>td').addClass('abb1_movie_table_title_td');
    movieMain.find('table tr:nth-child(3)>td').addClass('abb1_movie_table_rate_td');
}
function movieDetailCss(){
	var movieDetail = $('#movieDetail');
	var movieTrailer=$('#movieTrailer');
	movieTrailer.addClass('abb1_movie_detail_trailer');
	movieDetail.find('div:nth-child(1)>img').addClass('abb1_movie_trailer');
	var movieInfo=$('#movieInfo');
	movieInfo.addClass('abb1_movie_detail_container');
	movieInfo.find('div:nth-child(1)').addClass('abb1_movie_detail_info');
	movieInfo.find('div:nth-child(1)').find('ul').addClass('abb1_ul_inline');
	movieInfo.find('div:nth-child(1)').find('li').addClass('abb1_li_inline');
	movieInfo.find('div:nth-child(1)').find('li:nth-child(1)').find('tr:nth-child(2) td').addClass('abb1_height_10');
	movieInfo.find('div:nth-child(1)').find('li:nth-child(1)').find('tr:nth-child(3) td').addClass('abb1_movie_btn_reservation_td');
	movieInfo.find('div:nth-child(1)').find('li:nth-child(1)').find('a').addClass('abb1_movie_btn_reservation');
	movieInfo.find('div:nth-child(1)').find('li:nth-child(2)').find('td:nth-child(2)').addClass('abb1_height_50');
	movieInfo.find('div:nth-child(1)').find('li:nth-child(2)').find('span:nth-child(1)').addClass('abb1_movie_rate');
	movieInfo.find('div:nth-child(1)').find('li:nth-child(2)').find('span:nth-child(2)').addClass('abb1_movie_detail_font_color');
	movieInfo.find('div:nth-child(1)').find('li:nth-child(2)').find('td:nth-child(6)').addClass('abb1_height_50');
	movieInfo.find('div:nth-child(1)').find('li:nth-child(2)').find('td:nth-child(8)').addClass('abb1_height_50');   
	movieInfo.find('div:nth-child(1)').find('li:nth-child(2)').find('td:nth-child(10)').addClass('abb1_height_50');
	movieInfo.find('div:nth-child(1)').find('li:nth-child(2)').find('td:nth-child(7)').addClass('abb1_movie_detail_font_color');
	movieInfo.find('div:nth-child(1)').find('li:nth-child(2)').find('td:nth-child(9)').addClass('abb1_movie_detail_font_color');
	movieInfo.find('div:nth-child(1)').find('li:nth-child(2)').find('td:nth-child(11)').addClass('abb1_movie_detail_font_color');
	movieInfo.find('div:nth-child(2)').addClass('abb1_movie_detail_synopsys');
	movieInfo.find('div:nth-child(2)').find('tr:nth-child(2)>td').addClass('abb1_movie_detail_synopsys_content');
	movieInfo.find('div:nth-child(3)').addClass('abb1_movie_donutchart');   
	var movieActor = movieDetail.find('div:nth-child(3)');
	movieActor.addClass('abb1_bgcolor_beige');
	movieActor.find('div:nth-child(1)').addClass('abb1_width_left');
	movieActor.find('div:nth-child(1)').find('h3').addClass('abb1_movie_actor_title');
	movieActor.find('div:nth-child(2)').addClass('abb1_movie_detail_actor_list');
	movieActor.find('div:nth-child(2)').find('ul').addClass('abb1_ul_inline');
	movieActor.find('div:nth-child(2)').find('li').addClass('abb1_li_inline');
	var movieReview =movieDetail.find('div:nth-child(4)');
	movieReview.addClass('abb1_movie_review_div');
	movieReview.find('div:nth-child(1)').addClass('abb1_movie_review_box');
	movieReview.find('div:nth-child(1)').find('table').addClass('abb1_movie_review_table');
	movieReview.find('div:nth-child(1)').find('table tr:nth-child(1)>td:nth-child(2)').addClass('abb1_text_right');
	movieReview.find('div:nth-child(1)').find('table tr:nth-child(2)').addClass('abb1_nowMovie_border');
	movieReview.find('div:nth-child(1)').find('table tr:nth-child(2)>td:nth-child(1)').addClass('abb1_movie_review_gpa');
	movieReview.find('div:nth-child(1)').find('table tr:nth-child(2)>td:nth-child(1)').find('span:nth-child(1)').addClass('abb1_font_size_20');
	movieReview.find('div:nth-child(1)').find('table div').addClass('abb1_margin_top_10');
	movieReview.find('div:nth-child(1)').find('table div>span').addClass('star-input');
	movieReview.find('div:nth-child(1)').find('table div>span>span').addClass('input');
	movieReview.find('div:nth-child(1)').find('table tr:nth-child(2)>td:nth-child(2)').addClass('abb1_nowMovie_border');
	movieReview.find('div:nth-child(1)').find('table tr:nth-child(2)>td:nth-child(3)').addClass('abb1_movie_review_btn');
	movieReview.find('div:nth-child(1)').find('table tr:nth-child(2)>td:nth-child(3) span').addClass('abb1_movie_review_btn_text');
	movieReview.find('div:nth-child(2)').addClass('abb1_margin_top_20');
	movieReview.find('div:nth-child(2) table').addClass('abb1_movie_review');
	movieReview.find('div:nth-child(2) table tr:nth-child(1)>td').addClass('abb1_text_left');
	movieReview.find('div:nth-child(2) table tr:nth-child(2)>td:nth-child(2)').addClass('abb1_text_right');
	movieReview.find('div:nth-child(2) table tr:nth-child(3)>td').addClass('abb1_text_right');  
}
function boardMainCss(pageNo){
	var board_main = $('#board_main');
	board_main.find('div:first-child').addClass('abb1_bbs_table_text');
	board_main.find('div:nth-child(2)').addClass('abb1_bbs_table abb1_width_center_w900');
	$('#board_main_ddl').find('select').addClass('abb1_select_box');
	$('#board_main_find_keyword').addClass('abb1_searchtext');
	$('#board_main_find_search').addClass('abb1_submitbtn');
	var board_main_table = $('#board_main_table');
	board_main_table.addClass('abb1_bbs_main_table').css('margin-top','50px');
	board_main_table.find('table').css('text-align','center');
	board_main_table.find('table colgroup col:nth-child(1)').css('width','11%');
	board_main_table.find('table colgroup col:nth-child(2)').css('width','14%');
	board_main_table.find('table colgroup col:nth-child(3)').css('width','60%');
	board_main_table.find('table colgroup col:nth-child(4)').css('width','30%');
	board_main_table.find('table colgroup col:nth-child(5)').css('width','30%');
	$('#bbs_pagination').find('table').addClass('abb1_bbs_pagination_table');
	var bbs_pagination_number = $('#bbs_pagination_number')
	bbs_pagination_number.css('width','150px');
	var on_number = pageNo%5==0 ? 5 : pageNo%5;
	bbs_pagination_number.find('a:nth-child('+on_number+')').addClass('on');
	var board_main_btn = $('#board_main_btn');
	board_main_btn.css('text-align','right');
	board_main_btn.find('input').addClass('abb1_bbs_write_btn');
}
function boardNoticeDetailCss(){
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
    $('#board_notice_content').css('padding','0 50px');
}
function boardWriteCss(){
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
}
function boardDetailCss(){
	var bbs_detail = $('#bbs_detail');
	bbs_detail.addClass('abb1_bbs_write_container');
	bbs_detail.find('div:first-child').addClass('abb1_bbs_table_text');
	bbs_detail.find('div:nth-child(2)').addClass('abb1_bbs_pagination_table');
	var bbs_detail_table = $('#bbs_detail_table');
	bbs_detail_table.addClass('abb1_bbs_notice_table');
	bbs_detail_table.find('ul:first-child').addClass('abb1_view_info');
	$('#bbs_detail_content').addClass('abb1_view_content');
	var bbs_detail_review_ul = $('#bbs_detail_review_ul');
	bbs_detail_review_ul.find('div').addClass('abb1_review_result').css('padding','10px');
	for(var i=1; i<6; i++){
		$('#bbs_review_result_name'+i).addClass('abb1_bbs_review_result_name');
		$('#bbs_review_result_txt'+i).addClass('abb1_bbs_review_result_txt');
		$('#bbs_review_result_reg_date'+i).addClass('abb1_bbs_review_result_reg_date');
	}
	var bbs_detail_reply = $('#bbs_detail_reply');
	bbs_detail_reply.find('col:nth-child(1)').css('width','90%');
	bbs_detail_reply.find('col:nth-child(2)').css('width','10%');
}
function multiplexMainCss(){
	$('#container').addClass('abb1_bgcolor_beige');
	$('#multiplex_info').addClass('abb1_margin_left_100 abb1_padding_top_20');
	var multiplex_info_table = $('#multiplex_info_table');
	multiplex_info_table.find('td:nth-child(2)').addClass('abb1_multiplex_border_right');
	multiplex_info_table.find('td:nth-child(4)').addClass('abb1_multiplex_border_right');
	var multiplex_info_btn = $('#multiplex_info_btn');
	multiplex_info_btn.addClass('abb1_margin_left_100');
	multiplex_info_btn.find('ul').addClass('abb1_ul_inline');
	multiplex_info_btn.find('li:first-child').addClass('abb1_li_inline abb1_multiplex_select_btn');
	multiplex_info_btn.find('li:first-child').find('a').addClass('abb1_multiplex_select_a');
	multiplex_info_btn.find('li:nth-child(2)').addClass('abb1_li_inline abb1_multiplex_btn');
	multiplex_info_btn.find('li:nth-child(2)').find('a').addClass('abb1_multiplex_a');
	var multiplex_calendar = $('#multiplex_calendar');
	multiplex_calendar.addClass('abb1_multiplex_calander');
	multiplex_calendar.find('span').addClass('abb1_font_size_22');
	var movie_time_line = $('#movie_time_line');
	movie_time_line.addClass('abb1_movie_time_line');
	movie_time_line.find('div:first-child').find('span').addClass('abb1_multiplex_movie_title');
	movie_time_line.find('ul').addClass('abb1_ul_inline');
	movie_time_line.find('li').addClass('abb1_li_inline abb1_padding_right_0');
	movie_time_line.find('li').find('strong').addClass('abb1_font_size_22'); 
}
function multiplexMapCss(){
	$('#container').addClass('abb1_bgcolor_beige');
	$('#multiplex_map_title').addClass('abb1_multiplex_map_title');
	var multiplex_info_btn = $('#multiplex_info_btn');
	multiplex_info_btn.addClass('abb1_margin_left_100');
	multiplex_info_btn.find('ul').addClass('abb1_ul_inline');
	multiplex_info_btn.find('li:first-child').addClass('abb1_li_inline abb1_multiplex_btn');
	multiplex_info_btn.find('li:first-child').find('a').addClass('abb1_multiplex_a');
	multiplex_info_btn.find('li:nth-child(2)').addClass('abb1_li_inline abb1_multiplex_select_btn');
	multiplex_info_btn.find('li:nth-child(2)').find('a').addClass('abb1_multiplex_select_a');
	$('#multiplex_map_api').find('div:first-child').addClass('abb1_multiplex_map');
	$('#map').css('width','900px').css('height','438px');
}