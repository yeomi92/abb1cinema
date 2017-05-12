/*
 ========= abb1-meta ========
 * abb1-component
 * abb1-ui
 * abb1-util
 * abb1-api
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




/*========= abb1-util =========
@AUTHOR : Hyeseun Yeom
@CREATE DATE : 2017-05-06
@UPDATE DATE : 2017-05-06
@DESC : Etc methods(ex: email check validation, calculation profile, datetime check algorithm)
abb1-util-validation
abb1-util-calcProfile
abb1-util-datetime
abb1-util-starRating
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
	},
	starRating : function() {
	    var $star = $(".star-input"), $result = $star.find("output>b");
	    $(document).on("focusin", ".star-input>.input", function() {
		$(this).addClass("focus");
	    }).on("focusout", ".star-input>.input", function() {
		var $this = $(this);
		setTimeout(function() {
		    if ($this.find(":focus").length === 0) {
			$this.removeClass("focus");
		    }
		}, 100);
	    }).on("change", ".star-input :radio", function() {
		$result.text($(this).next().text());
	    }).on("mouseover", ".star-input label", function() {
		$result.text($(this).text());
	    }).on("mouseleave", ".star-input>.input", function() {
		var $checked = $star.find(":checked");
		if ($checked.length === 0) {
		    $result.text("0");
		} else {
		    $result.text($checked.next().text());
		}
	    });
	}
};
/*
 * ========= abb1-api ========= 
 * @AUTHOR : Junyoung Park 
 * @CREATE DATE : 2017-05-10 
 * @UPDATE DATE : 2017-05-10 
 * @DESC : Using API
=================================*/
abb1.api = {
	google : function(male, female){
	    $.getScript('https://www.gstatic.com/charts/loader.js', function(){
	        google.charts.load("current", {packages:["corechart"]});
	        google.charts.setOnLoadCallback(drawChart);
	        function drawChart() {
	           var data = google.visualization.arrayToDataTable([
	              ['Task', 'Hours per Day'],
	              ['남자',     male],
	              ['여자',     female]
	           ]);
	           var options = {
	              title: '성별 선호도',
	              pieHole: 0.4,
	           };
	           var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
	           chart.draw(data, options);
	        }     
	    });
	},
	google2 : function(male, female){
	    $.getScript('https://www.gstatic.com/charts/loader.js', function(){
		google.charts.load("current", {packages:["corechart"]});
		google.charts.setOnLoadCallback(drawDonutChart);
		function drawDonutChart() {
		  var data = google.visualization.arrayToDataTable([
		    ['Task', 'Hours per Day'],
		    ['남자',    male],
		    ['여자',    female]
		  ]);
		  var options = {
		    title: '성별 선호도',
		    pieHole: 0.4,
		    chartArea:{left:20,top:50,width:'75%',height:'100%'}
		  };
		  var chart = new google.visualization.PieChart(document.getElementById('admin_movie_donut_chart'));
		  chart.draw(data, options);
		}     
	    });
	}
}

/*========= abb1-cookie =========
@AUTHOR : Hyeseon Yeom
@CREATE DATE : 2017-05-12
@UPDATE DATE : 2017-05-12
@DESC : jQuery for view
=================================*/
abb1.cookie={
		setCookie:	function (name,value) {
		 	document.cookie = name + "=" + value;
		},
		getCookie: function(name) {
		    var nameEQ = name + "=";
		    var ca = document.cookie.split(';');
		    for(var i=0;i < ca.length;i++) {
		        var c = ca[i];
		        while (c.charAt(0)==' ') c = c.substring(1,c.length);
		        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		    }
		    return null;
		},
		removeCookie: function(name) {
		    createCookie(name,"",-1);
		}
}

/*========= abb1-jquery =========
@AUTHOR : Junyoung Park
@CREATE DATE : 2017-05-06
@UPDATE DATE : 2017-05-06
@DESC : jQuery for view
=================================*/
abb1.jquery = {
		
	admin_header: function(){
		
	},
	admin_gnb: function(){
		
	},
	admin_footer: function(){
		
	},
	admin_login: function(){
		var ctx = abb1.session.getContextPath();
	    var view='<div id="signupSuccess">'
	    	+'		<div id="signup_success">'
	    	+'			<div>'
	    	+'				<table>'
	    	+'		         <tr>'
	    	+'		         	<td>'
	    	+'			         	<h3><strong>관리자</strong><span>님 환영합니다!</span></h3>'
	    	+'		         	</td>'
	    	+'		         </tr>'
	    	+'		         <tr>'
	    	+'			         <td>'
	    	+'			         <ul>'
	    	+'						 <li>'
	    	+'							<a href="'+ctx+'/admin/index"><input type="button" value="관리자 페이지 GO"/></a>'
	    	+'						 </li>'
	    	+'					 </ul>'
	    	+'					 </td>'
	    	+'		         </tr>'
	    	+'		      	</table>'
	    	+'			</div>'
	    	+'		</div>'
	    	+'	</div>';
	    $('#container').html(view);
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
	},
	admin_index : function(){
	    var ctx = abb1.session.getContextPath();
	    var view = '<div id="page-wrapper">'
		+'            <div class="container-fluid">'
		+'                <div class="row">'
		+'                    <div class="col-lg-12">'
		+'                        <h1 class="page-header">'
		+'                            Dashboard <small>Statistics Overview</small>'
		+'                        </h1>'
		+'                        <ol class="breadcrumb">'
		+'                            <li class="active">'
		+'                                <i class="fa fa-dashboard"></i> Dashboard'
		+'                            </li>'
		+'                        </ol>'
		+'                    </div>'
		+'                </div>'
		+'                <div class="row">'
		+'                    <div class="col-lg-12">'
		+'                        <div class="alert alert-info alert-dismissable">'
		+'                            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>'
		+'                            <i class="fa fa-info-circle"></i>  <strong>Like SB Admin?</strong> Try out <a href="http://startbootstrap.com/template-overviews/sb-admin-2" class="alert-link">SB Admin 2</a> for additional features!'
		+'                        </div>'
		+'                    </div>'
		+'                </div>'
		+'                <div class="row">'
		+'                    <div class="col-lg-3 col-md-6">'
		+'                        <div class="panel panel-primary">'
		+'                            <div class="panel-heading">'
		+'                                <div class="row">'
		+'                                    <div class="col-xs-3">'
		+'                                        <i class="fa fa-shopping-cart fa-5x"></i>'
		+'                                    </div>'
		+'                                    <div class="col-xs-9 text-right">'
		+'                                        <div class="huge">26</div>'
		+'                                        <div>오늘 예매 수</div>'
		+'                                    </div>'
		+'                                </div>'
		+'                            </div>'
		+'                            <a href="#">'
		+'                                <div class="panel-footer">'
		+'                                    <span class="pull-left">View Details</span>'
		+'                                    <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>'
		+'                                    <div class="clearfix"></div>'
		+'                                </div>'
		+'                            </a>'
		+'                        </div>'
		+'                    </div>'
		+'                    <div class="col-lg-3 col-md-6">'
		+'                        <div class="panel panel-green">'
		+'                            <div class="panel-heading">'
		+'                                <div class="row">'
		+'                                    <div class="col-xs-3">'
		+'                                        <i class="fa fa-tasks fa-5x"></i>'
		+'                                    </div>'
		+'                                    <div class="col-xs-9 text-right">'
		+'                                        <div class="huge">12</div>'
		+'                                        <div>등록 영화관 수</div>'
		+'                                    </div>'
		+'                                </div>'
		+'                            </div>'
		+'                            <a href="#">'
		+'                                <div class="panel-footer">'
		+'                                    <span class="pull-left">View Details</span>'
		+'                                    <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>'
		+'                                    <div class="clearfix"></div>'
		+'                                </div>'
		+'                            </a>'
		+'                        </div>'
		+'                    </div>'
		+'                    <div class="col-lg-3 col-md-6">'
		+'                        <div class="panel panel-yellow">'
		+'                            <div class="panel-heading">'
		+'                                <div class="row">'
		+'                                    <div class="col-xs-3">'
		+'                                        <i class="fa fa-support fa-5x"></i>'
		+'                                    </div>'
		+'                                    <div class="col-xs-9 text-right">'
		+'                                        <div class="huge">124</div>'
		+'                                        <div>등록 영화 수</div>'
		+'                                    </div>'
		+'                                </div>'
		+'                            </div>'
		+'                            <a href="#">'
		+'                                <div class="panel-footer">'
		+'                                    <span class="pull-left">View Details</span>'
		+'                                    <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>'
		+'                                    <div class="clearfix"></div>'
		+'                                </div>'
		+'                            </a>'
		+'                        </div>'
		+'                    </div>'
		+'                    <div class="col-lg-3 col-md-6">'
		+'                        <div class="panel panel-red">'
		+'                            <div class="panel-heading">'
		+'                                <div class="row">'
		+'                                    <div class="col-xs-3">'
		+'                                        <i class="fa fa-comments fa-5x"></i>'
		+'                                    </div>'
		+'                                    <div class="col-xs-9 text-right">'
		+'                                        <div class="huge">13</div>'
		+'                                        <div>당일 업데이트 게시글 수</div>'
		+'                                    </div>'
		+'                                </div>'
		+'                            </div>'
		+'                            <a href="#">'
		+'                                <div class="panel-footer">'
		+'                                    <span class="pull-left">View Details</span>'
		+'                                    <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>'
		+'                                    <div class="clearfix"></div>'
		+'                                </div>'
		+'                            </a>'
		+'                        </div>'
		+'                    </div>'
		+'                </div>'
		+'                <div class="row">'
		+'                    <div class="col-lg-12">'
		+'                         <div id="area_chart"></div>'
		+'                    </div>'
		+'                </div>'
		+'                <div class="row">'
		+'                    <div class="col-lg-12">'
		+'                       	<div id="donut_chart"></div>'
		+'                    </div>'
		+'                </div>'
		+'            </div>'
		+'        </div>';
	    $('#wrapper').html(view);
	    $('#area_chart').css('width','100%').css('height','500px');
	    $('#donut_chart').addClass('abb1_width_center').css('width','900px').css('height','450px');
	   
        	},
        	admin_statistic : function(){
            		var ctx = abb1.session.getContextPath();
            		var view = '<div id="page-wrapper">'
            		+'			<div id="statistic">'
            		+'				<select name="" id="statistic_category">'
            		+'					<option selected>카테고리 선택</option>'
            		+'					<option value="multiplex">영화관</option>'
            		+'					<option value="movie">영화</option>'
            		+'				</select>'
            		+'				<input id="statistic_search_keyword" type="text"/>'
            		+'				<input id="statistic_search_btn" type="button" value="검색"/>'
            		+'			</div>'
            		
            		+'			</div>'
            		+'        </div>';
            		$('#wrapper').html(view);
            		$('#statistic_search_btn').on('click',function(){
            		   var chart = '<div id="page-wrapper"><div id="admin_movie_donut_chart"></div></div>';
            		   $('#wrapper').html(chart);
            		   /*-- Google API Loading --*/
            		   abb1.api.google2(20, 80);
            		});
            		var statistic_category = $('#statistic_category');
            		statistic_category.addClass('abb1_admin_reservation_category');
            		$('#statistic_search_keyword').addClass('abb1_admin_reservation_search_keyword');
            		$('#statistic_search_btn').addClass('abb1_admin_reservation_search_btn');
        	},	
        	admin_movie_register : function(){
        	    var ctx = abb1.session.getContextPath();
        	    var view = '<div id="page-wrapper">'
        		+'       		<div id="movie_register">'
        		+'		        <div>영화 등록</div>'
        		+'				<div>'
        		+'					<div id="movie_register_table">'
        		+'					<table>'
        		+'						<tr>'
        		+'							<td>영화명</td>'
        		+'							<td><input id="" type="text"/></td>'
        		+'						</tr>'
        		+'						<tr>'
        		+'							<td>등급</td>'
        		+'							<td><input id="" type="text"/></td>'
        		+'						</tr>'
        		+'						<tr>'
        		+'							<td>개봉일</td>'
        		+'							<td><input id="" type="text"/></td>'
        		+'						</tr>'
        		+'						<tr>'
        		+'							<td>기본정보</td>'
        		+'							<td><input id="" type="text"/></td>'
        		+'						</tr>'
        		+'						<tr>'
        		+'							<td>시놉시스</td>'
        		+'							<td><textarea name="" id="" cols="30" rows="6"></textarea></td>'
        		+'						</tr>'
        		+'						<tr>'
        		+'							<td>감독 이름</td>'
        		+'							<td><input id="" type="text"/></td>'
        		+'						</tr>'
        		+'						<tr>'
        		+'							<td>감독 사진</td>'
        		+'							<td><input type="file" /></td>'
        		+'						</tr>'
        		+'						<tr>'
        		+'							<td>배우 이름</td>'
        		+'							<td><input id="" type="text"/></td>'
        		+'						</tr>'
        		+'						<tr>'
        		+'							<td>배우 사진</td>'
        		+'							<td><input type="file" /></td>'
        		+'						</tr>'
        		+'						<tr>'
        		+'							<td>영화 프로필 사진</td>'
        		+'							<td><input type="file" /></td>'
        		+'						</tr>'
        		+'						<tr>'
        		+'							<td>트레일러 URL</td>'
        		+'							<td><span><input type="text"/></span></td>'
        		+'						</tr>'
        		+'						<tr id="trailer_check">'
        		+'							<td><input id="" type="checkbox"/></td>'
        		+'							<td>메인 페이지 트레일러로 등록</td>'
        		+'						</tr>'
        		+'					</table>'
        		+'					</div>'
        		+'					<div id="movie_register_btns">'
        		+'						<input id="cancel" type="button" value="취소"/>'
        		+'						<input id="confirm" type="button" value="확인"/>'
        		+'					</div>'
        		+'				</div>'
        		+'		        </div>'
        		+'       		</div>';
        	$('#wrapper').html(view);
                var movie_register = $('#movie_register');
            	movie_register.find('div:first-child').addClass('abb1_admin_maintext');
            	movie_register.find('div:nth-child(2)').addClass('abb1_admin_settings');
            	var movie_register_table = $('#movie_register_table');
            	movie_register_table.addClass('abb1_admin_movie_management_table');
            	$('#trailer_check').addClass('abb1_trailer_check');
            	$('#movie_register_btns').addClass('abb1_admin_movie_management_btns');
            },
            admin_customer : function(){
        	var ctx = abb1.session.getContextPath();
        	var view =  '<div id="page-wrapper">'
        	    +'			<div id="customer">'
        	    +'				<div>회원 관리</div>'
        	    +'					<div id="customer_management_wrapper">'
        	    +'						<div>'
        	    +'							<input id="customer_search_keyword" type="text" placeholder="아이디 or 이름" />'
        	    +'							<input id="customer_search_btn" type="button" value="검색"/>'
        	    +'						</div>'
        	    +'						<div id="result">'
        	    +'							<div id="admin_customer_table">'
        	    +'								<table>'
        	    +'								<colgroup>'
        	    +'									<col />'
        	    +'									<col />'
        	    +'									<col />'
        	    +'									<col />'
        	    +'									<col />'
        	    +'								</colgroup>'
        	    +'								<thead>'
        	    +'									<tr>'
        	    +'									<th>ID</th>'
        	    +'									<th>이름</th>'
        	    +'									<th>성별</th>'
        	    +'									<th>생년월일</th>'
        	    +'									<th>삭제</th>'
        	    +'									</tr>'
        	    +'								</thead>'
        	    +'								<tbody>'
        	    +'									<tr>'
        	    +'										<td><a id="customer_id" href="#">abccd</a></td>'
        	    +'										<td><a id="customer_name" href="#">박준용</a></td>'
        	    +'										<td>남</td>'
        	    +'										<td>1990-05-18</td>'
        	    +'										<td><input id="delete" type="button" value="x"/></td>'
        	    +'									</tr>'
        	    +'								</tbody>'
        	    +'							</table>'
        	    +'						</div>'
        	    +'					</div>'
        	    +'				</div>'
        	    +'			</div>'
        	     +'       </div>';
        	var result = '<div id="customer_result">'
        	    +'					<table>'
        	    +'						<tr>'
        	    +'							<td>아이디</td>'
        	    +'							<td><input type="text" value="abccd"/></td>'
        	    +'						</tr>'
        	    +'						<tr>'
        	    +'							<td>비밀번호</td>'
        	    +'							<td><input type="password" value="abccd"/></td>'
        	    +'						</tr>'
        	    +'						<tr>'
        	    +'							<td>이름</td>'
        	    +'							<td><input type="text" value="박준용"/></td>'
        	    +'						</tr>'
        	    +'						<tr>'
        	    +'							<td>생년월일</td>'
        	    +'							<td><input type="text" value="19900518"/></td>'
        	    +'						</tr>'
        	    +'						<tr>'
        	    +'							<td>전화번호</td>'
        	    +'							<td><input type="text" value="010-2206-8900"/></td>'
        	    +'						</tr>'
        	    +'						<tr>'
        	    +'							<td>성별</td>'
        	    +'							<td><input type="text" value="M"/></td>'
        	    +'						</tr>'
        	    +'						<tr>'
        	    +'							<td>우편번호</td>'
        	    +'							<td><input type="text" value="01175"/></td>'
        	    +'						</tr>'
        	    +'						<tr>'
        	    +'							<td>상세주소</td>'
        	    +'							<td><input type="text" value="710호"/></td>'
        	    +'						</tr>'
        	    +'						<tr>'
        	    +'							<td>이메일</td>'
        	    +'							<td><input type="text" value="babungv@gmail.com"/></td>'
        	    +'						</tr>'
        	    +'						<tr>'
        	    +'							<td colspan="2"><input type="button" value="저장"/></td>'
        	    +'						</tr>'
        	    +'					</table>'
        	    +'					</div>'
        	$('#wrapper').html(view);
        	abb1.jquery.admin_customer_css();
        	$('#customer_id').on('click',function(){
        	    $('#result').html(result);
        	    abb1.jquery.admin_customer_css();
        	});
        	$('#customer_name').on('click',function(){
        	    $('#result').html(result);
        	    abb1.jquery.admin_customer_css();
        	});
            },
            admin_customer_css : function(){
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
        	var ctx = abb1.session.getContextPath();
        	
        	/* View */
        	var view = '<div id="page-wrapper">'
        	    +'		<div id="reservation">'
        	    +'			<div>'
        	    +'				<select name="" id="reservation_category">'
        	    +'					<option selected>카테고리 선택</option>'
        	    +'					<option value="multiplex">영화관</option>'
        	    +'					<option value="movie">영화</option>'
        	    +'				</select>'
        	    +'				<input id="reservation_search_keyword" type="text" />'
        	    +'				<input id="reservation_search_btn" type="button" value="검색"/>'
        	    +'			</div></div></div>';
        	    
        	var result = '<div id="page-wrapper">'
        	    +'		<div id="reservation">'
        	    +'			<div>'
        	    +'				<select name="" id="reservation_category">'
        	    +'					<option selected>카테고리 선택</option>'
        	    +'					<option value="multiplex">영화관</option>'
        	    +'					<option value="movie">영화</option>'
        	    +'				</select>'
        	    +'				<input id="reservation_search_keyword" type="text" />'
        	    +'				<input id="reservation_search_btn" type="button" value="검색"/>'
        	    +'			</div>'
        	    +'			<div>'
        	    +'				<div id="admin_reservation_list">'
        	    +'					<div>예매내역</div>'
        	    +'					<div>'
        	    +'					<table id="reservation_table">'
        	    +'						<colgroup>'
        	    +'							<col />'
        	    +'							<col />'
        	    +'							<col />'
        	    +'							<col />'
        	    +'							<col />'
        	    +'							<col />'
        	    +'				      	</colgroup>'
        	    +'				      	<thead>'
        	    +'							<tr>'
        	    +'								<th>관</th>'
        	    +'								<th>영화제목</th>'
        	    +'								<th>시작시간</th>'
        	    +'								<th>좌석번호</th>'
        	    +'								<th>예매날짜</th>'
        	    +'								<th>가격</th>'
        	    +'							</tr>'
        	    +'				   	   	</thead>'
        	    +'				     	<tbody>'
        	    +'							<tr>'
        	    +'								<td>1관</td>'
        	    +'								<td>아빠와 딸</td>'
        	    +'								<td>12:00</td>'
        	    +'								<td>A1</td>'
        	    +'								<td>2017-05-01</td>'
        	    +'								<td>10,000</td>'
        	    +'							</tr>'
        	    +'		   			   </tbody>'
        	    +'					</table>'
        	    +'					</div>'
        	    +'				</div>'
        	    +'				<div id="admin_cancel_list">'
        	    +'					<div>취소내역</div>'
        	    +'					<div>'
        	    +'					<table id="cancel_list_table">'
        	    +'						<colgroup>'
        	    +'							<col />'
        	    +'							<col />'
        	    +'							<col />'
        	    +'							<col />'
        	    +'							<col />'
        	    +'							<col />'
        	    +'				      	</colgroup>'
        	    +'				      	<thead>'
        	    +'							<tr>'
        	    +'								<th>관</th>'
        	    +'								<th>영화제목</th>'
        	    +'								<th>시작시간</th>'
        	    +'								<th>좌석번호</th>'
        	    +'								<th>예매날짜</th>'
        	    +'								<th>가격</th>'
        	    +'							</tr>'
        	    +'				      </thead>'
        	    +'				      <tbody>'
        	    +'							<tr>'
        	    +'								<td>1관</td>'
        	    +'								<td>아빠와 딸</td>'
        	    +'								<td>12:00</td>'
        	    +'								<td>A1</td>'
        	    +'								<td>2017-05-01</td>'
        	    +'								<td>10,000</td>'
        	    +'							</tr>'
        	    +'		   			   </tbody>'
        	    +'					</table>'
        	    +'					</div>'
        	    +'				</div>'
        	    +'				<div id="admin_movie_list">'
        	    +'					<div>영화검색</div>'
        	    +'					<div>'
        	    +'						<table id="movie_list_table">'
        	    +'							<colgroup>'
        	    +'								<col />'
        	    +'								<col />'
        	    +'								<col />'
        	    +'								<col />'
        	    +'								<col />'
        	    +'					      	</colgroup>'
        	    +'					      	<thead>'
        	    +'								<tr>'
        	    +'									<th>영화관</th>'
        	    +'									<th>상영관</th>'
        	    +'									<th>시작시간</th>'
        	    +'									<th>예매날짜</th>'
        	    +'									<th>가격</th>'
        	    +'								</tr>'
        	    +'					      	</thead>'
        	    +'					      	<tbody>'
        	    +'								<tr>'
        	    +'									<td>1관</td>'
        	    +'									<td>아빠와 딸</td>'
        	    +'									<td>12:00</td>'
        	    +'									<td>2017-05-01</td>'
        	    +'									<td>10,000</td>'
        	    +'								</tr>'
        	    +'			   			   </tbody>'
        	    +'						</table>'
        	    +'					</div>'
        	    +'				</div>'
        	    +'				<div id="admin_movie_donut_chart">'
        	    +'				</div>'
        	    +'			</div>'
        	    +'		</div>'
        	    +'    </div>';
        	$('#wrapper').html(view);
        	$('#reservation_search_btn').on('click',function(){
        	    $('#wrapper').html(result);
        	    abb1.jquery.admin_reservation_css();
        	    /*-- Google API Loading --*/
        	    abb1.api.google2(20, 80);
        	});
            	abb1.jquery.admin_reservation_css();
            },
            admin_reservation_css : function(){
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
        	var ctx = abb1.session.getContextPath();
        	var view = '<div id="page-wrapper">'
        	    +'        <div id="movie_management">'
        	    +'	        <div>영화 관리</div>'
        	    +'			<div id="management">'
        	    +'				<input id="movie_search_keyword" type="text" placeholder="영화명 입력" />'
        	    +'				<input id="movie_search_btn" type="button" value="검색"/>'
        	    +'			</div>'
        	    +'	        </div>'
        	    +'        </div>';
        	var management_table = '<div>'
        	+'				<div id="movie_management_table">'
        	+'				<table>'
        	+'					<tr>'
        	+'						<td rowspan="11"><img src="'+ctx+'/resources/img/movie/movie_poster_0.png" alt="" width="100%" height="100%"/></td>'
        	+'						<td>영화명</td>'
        	+'						<td><input id="" type="text" value="영화명"/></td>'
        	+'					</tr>'
        	+'					<tr>'
        	+'						<td>등급</td>'
        	+'						<td><input id="" type="text" value="등급"/></td>'
        	+'					</tr>'
        	+'					<tr>'
        	+'						<td>개봉일</td>'
        	+'						<td><input id="" type="text" value="개봉일"/></td>'
        	+'					</tr>'
        	+'					<tr>'
        	+'						<td>기본정보</td>'
        	+'						<td><input id="" type="text" value="기본정보"/></td>'
        	+'					</tr>'
        	+'					<tr>'
        	+'						<td>시놉시스</td>'
        	+'						<td><textarea name="" id="" cols="30" rows="6"></textarea></td>'
        	+'					</tr>'
        	+'					<tr>'
        	+'						<td>감독 이름</td>'
        	+'						<td><input id="" type="text" value="감독 이름"/></td>'
        	+'					</tr>'
        	+'					<tr>'
        	+'						<td>감독 사진</td>'
        	+'						<td><input type="file" /></td>'
        	+'					</tr>'
        	+'					<tr>'
        	+'						<td>배우 이름</td>'
        	+'						<td><input id="" type="text" value="배우 이름"/></td>'
        	+'					</tr>'
        	+'					<tr>'
        	+'						<td>배우 사진</td>'
        	+'						<td><input type="file" /></td>'
        	+'					</tr>'
        	+'					<tr>'
        	+'						<td>영화 프로필 사진</td>'
        	+'						<td><input type="file" /></td>'
        	+'					</tr>'
        	+'					<tr>'
        	+'						<td>트레일러 URL</td>'
        	+'						<td><input type="text" value="http://youtube.com/"/></td>'
        	+'					</tr>'
        	+'				</table>'
        	+'				</div>'
        	+'				<div id="movie_management_btns">'
        	+'					<input id="delete" type="button" value="삭제"/>'
        	+'					<input id="update" type="button" value="수정"/>'
        	+'				</div>'
        	+'			</div>'
        	$('#wrapper').html(view);
        	$('#movie_search_btn').on('click',function(){
        	    $('#management').html(management_table);
        	    var movie_management_table = $('#movie_management_table');
        	    movie_management_table.addClass('abb1_admin_movie_management_table');
        	    $('#movie_management_btns').addClass('abb1_admin_movie_management_btns');
        	});
            	var movie_management = $('#movie_management');
            	movie_management.find('div:first-child').addClass('abb1_admin_maintext');
            	$('#movie_search_keyword').addClass('abb1_admin_reservation_search_keyword');
            	$('#movie_search_btn').addClass('abb1_admin_reservation_search_btn');
            	movie_management.find('div:nth-child(3)').addClass('abb1_admin_settings');
            },
            admin_bbs_notice : function(pageNo){
        	var ctx = abb1.session.getContextPath();
        	var view = '<div id="page-wrapper">'
        	    +'				<div id="notice_table">'
        	    +'				<div>공지글 관리</div>'
        	    +'				<div id="notice_write_wrapper">'
        	    +'				<div>'
        	    +'					<input id="write" type="button" value="등록" />'
        	    +'				</div>'
        	    +'				<table>'
        	    +'					<colgroup>'
        	    +'						<col />'
        	    +'						<col />'
        	    +'						<col />'
        	    +'						<col />'
        	    +'					</colgroup>'
        	    +'					<tr>'
        	    +'						<th>순번</th>'
        	    +'						<th>제목</th>'
        	    +'						<th>작성시간</th>'
        	    +'						<th>삭제</th>'
        	    +'					</tr>'
        	    +'					<tr>'
        	    +'						<td>4</td>'
        	    +'						<td><a id="notice4" href="#">개인정보 보호내역</a></td>'
        	    +'						<td>2017-05-02</td>'
        	    +'						<td><input type="button" value="x"/></td>'
        	    +'					</tr>'
        	    +'					<tr>'
        	    +'					<td>3</td>'
        	    +'						<td><a href="#">개인정보 보호내역</a></td>'
        	    +'						<td>2017-05-02</td>'
        	    +'						<td><input type="button" value="x"/></td>'
        	    +'					</tr>'
        	    +'					<tr>'
        	    +'					<td>2</td>'
        	    +'						<td><a href="#">개인정보 보호내역</a></td>'
        	    +'						<td>2017-05-02</td>'
        	    +'						<td><input type="button" value="x"/></td>'
        	    +'					</tr>'
        	    +'					<tr>'
        	    +'					<td>1</td>'
        	    +'						<td><a href="#">개인정보 보호내역</a></td>'
        	    +'						<td>2017-05-02</td>'
        	    +'						<td><input type="button" value="x"/></td>'
        	    +'					</tr>'
        	    +'				</table>'
        	    +'				<div id="notice_pagination">'
        	    +'				   <table>'
        	    +'				      <tr>'
        	    +'				         <td>'
        	    +'				            <a href="#"><img src="'+ctx+'/resources/img/pagination/prev_all.gif" alt="" /></a>'
        	    +'				            <a href="#"><img src="'+ctx+'/resources/img/pagination/prev.gif" alt="" /></a>'
        	    +'				         </td>'
        	    +'				         <td>'
        	    +'				            <h4>'
        	    +'				            <a href="#">1</a>'
        	    +'				            <a href="#">2</a>'
        	    +'				            <a href="#">3</a>'
        	    +'				            <a href="#">4</a>'
        	    +'				            <a href="#">5</a>'
        	    +'				            <a href="#">6</a>'
        	    +'				            <a href="#">7</a>'
        	    +'				            <a href="#">8</a>'
        	    +'				            <a href="#">9</a>'
        	    +'				            <a href="#">10</a>'
        	    +'				            </h4>'
        	    +'				         </td>'
        	    +'				         <td>'
        	    +'				            <a href="#"><img src="'+ctx+'/resources/img/pagination/next.gif" alt="" /></a>'
        	    +'				            <a href="#"><img src="'+ctx+'/resources/img/pagination/next_all.gif" alt="" /></a>'
        	    +'				         </td>'
        	    +'				      </tr>'
        	    +'				   </table>'
        	    +'				  </div>'
        	    +'				</div>'
        	    +'			</div>';
        	    +'        </div>';
        	    var write = '<div id="notice_write">'
        		+'				<table>'
        		+'			      <colgroup>'
        		+'				      <col />'
        		+'				      <col />'
        		+'			      </colgroup>'
        		+'			         <tr>'
        		+'			            <td>제목</td>'
        		+'			            <td>'
        		+'			           	 <input id="notice_title" type="text" name="title" maxlength="50"/>'
        		+'			            </td>'
        		+'			         </tr>'
        		+'			         <tr>'
        		+'			            <td>내용</td>'
        		+'			            <td>'
        		+'			               <textarea name="contents" id="bbs_write_notice" cols="30" rows="10"></textarea>'
        		+'			            </td>'
        		+'			         </tr>'
        		+'			         <tr>'
        		+'			            <td>첨부파일</td>'
        		+'			            <td>'
        		+'			               <input type="file" id="file" name="file" value="파일 찾기"/>'
        		+'			               <span>jpg, jpeg, png, bmp, pdf (2MB × 1개)</span>'
        		+'			            </td>'
        		+'			         </tr>'
        		+'			      </table>'
        		+'			      <div>'
        		+'			         <a href="#"><input id="cancel" type="button" value="취소"/></a>'
        		+'			         <a href="#"><input id="confirm" type="button" value="확인"/></a>'
        		+'			      </div>'
        		+'			</div>'
        	$('#wrapper').html(view);
        	    $('#write').on('click',function(){
        		$('#notice_write_wrapper').html(write);
        		var notice_write = $('#notice_write');
        	    	notice_write.find('table').addClass('abb1_notice_write_table');
        	    	notice_write.find('col:nth-child(1)').css('width','15%');
        	    	notice_write.find('col:nth-child(2)').css('width','80%');
        	    	$('#notice_title').addClass('abb1_write_title');
        	    	notice_write.find('div').addClass('abb1_bbs_write_btns');
        	    	$('#cancel').addClass('abb1_bbs_write_cancel');
        	    	$('#confirm').addClass('abb1_bbs_write_confirm');
        	    });
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
            },
            admin_bbs_faq : function(pageNo){
        	var ctx = abb1.session.getContextPath();
        	var view = '<div id="page-wrapper">'
        	    +'			<div id="faq_table">'
        	    +'			<div>문의글 관리</div>'
        	    +'			<div id="faq_write_wrapper">'
        	    +'				<table>'
        	    +'				<colgroup>'
        	    +'					<col />'
        	    +'					<col />'
        	    +'					<col />'
        	    +'					<col />'
        	    +'					<col />'
        	    +'					<col />'
        	    +'				</colgroup>'
        	    +'					<tr>'
        	    +'						<th>순번</th>'
        	    +'						<th>제목</th>'
        	    +'						<th>작성자</th>'
        	    +'						<th>작성시간</th>'
        	    +'						<th>문답여부</th>'
        	    +'						<th>삭제</th>'
        	    +'					</tr>'
        	    +'					<tr>'
        	    +'					<td>4</td>'
        	    +'						<td><a id="question4" href="#">그것이 문제로다</a></td>'
        	    +'						<td>박준용</td>'
        	    +'						<td>2017-05-02</td>'
        	    +'						<td>X</td>'
        	    +'						<td><input type="button" value="x"/></td>'
        	    +'					</tr>'
        	    +'					<tr>'
        	    +'					<td>3</td>'
        	    +'						<td><a href="#">그것이 문제로다</a></td>'
        	    +'						<td>박준용</td>'
        	    +'						<td>2017-05-02</td>'
        	    +'						<td>X</td>'
        	    +'						<td><input type="button" value="x"/></td>'
        	    +'					</tr>'
        	    +'					<tr>'
        	    +'					<td>2</td>'
        	    +'						<td><a href="#">그것이 문제로다</a></td>'
        	    +'						<td>박준용</td>'
        	    +'						<td>2017-05-02</td>'
        	    +'						<td>X</td>'
        	    +'						<td><input type="button" value="x"/></td>'
        	    +'					</tr>'
        	    +'					<tr>'
        	    +'					<td>1</td>'
        	    +'						<td><a href="#">그것이 문제로다</a></td>'
        	    +'						<td>박준용</td>'
        	    +'						<td>2017-05-02</td>'
        	    +'						<td>X</td>'
        	    +'						<td><input type="button" value="x"/></td>'
        	    +'					</tr>'
        	    +'				</table>'
        	    +'				<div id="faq_pagination">'
        	    +'				   <table>'
        	    +'				      <tr>'
        	    +'				         <td>'
        	    +'				            <a href="#"><img src="'+ctx+'/resources/img/pagination/prev_all.gif" alt="" /></a>'
        	    +'				            <a href="#"><img src="'+ctx+'/resources/img/pagination/prev.gif" alt="" /></a>'
        	    +'				         </td>'
        	    +'				         <td>'
        	    +'				            <h4>'
        	    +'				            <a href="#">1</a>'
        	    +'				            <a href="#">2</a>'
        	    +'				            <a href="#">3</a>'
        	    +'				            <a href="#">4</a>'
        	    +'				            <a href="#">5</a>'
        	    +'				            <a href="#">6</a>'
        	    +'				            <a href="#">7</a>'
        	    +'				            <a href="#">8</a>'
        	    +'				            <a href="#">9</a>'
        	    +'				            <a href="#">10</a>'
        	    +'				            </h4>'
        	    +'				         </td>'
        	    +'				         <td>'
        	    +'				            <a href="#"><img src="'+ctx+'/resources/img/pagination/next.gif" alt="" /></a>'
        	    +'				            <a href="#"><img src="'+ctx+'/resources/img/pagination/next_all.gif" alt="" /></a>'
        	    +'				         </td>'
        	    +'				      </tr>'
        	    +'				   </table>'
        	    +'				  </div>'
        	    +'			</div>'
        	    +'			</div>'
        	    +'       </div>';
        	var answer = '<div id="faq_answer">'
        	+'			<div>'
        	+'		      <table>'
        	+'		         <tr>'
        	+'		            <td>'
        	+'		               <h3>영화관 관련 질문</h3>'
        	+'		               <ul>'
        	+'		                  <li>'
        	+'		                     <strong>카테고리 : </strong><span> 영화관</span>'
        	+'		                  </li>'
        	+'		                  <li>'
        	+'		                     <strong>등록일 : </strong><span> 2017-04-21</span>'
        	+'		                  </li>'
        	+'		                  <li>'
        	+'		                     <strong>조회수 : </strong><span> 27851</span>'
        	+'		                  </li>'
        	+'		               </ul>'
        	+'		            </td>'
        	+'		         </tr>'
        	+'		         <tr>'
        	+'		            <td colspan="2">'
        	+'		            <div id="faq_question_content">'
        	+'		            <span>국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다.</span>'
        	+'		            </div>'
        	+'		            </td>'
        	+'		         </tr>'
        	+'		         <tr>'
        	+'		            <td>'
        	+'		            <table id="faq_answer_content">'
        	+'		               <colgroup>'
        	+'			               <col />'
        	+'			               <col />'
        	+'		               </colgroup>'
        	+'		               <tr>'
        	+'		                  <td><textarea name="bbs_review_contents" id="bbs_review_contents" cols="30" rows="5"  placeholder="Write a comment..."></textarea></td>'
        	+'		                  <td><input id="bbs_review_contents_submit" type="submit" value="입력"/></td>'
        	+'		               </tr>'
        	+'		            </table>'
        	+'		            </td>'
        	+'		         </tr>'
        	+'		      </table>'
        	+'		      </div>'
        	+'			</div>';
        	$('#wrapper').html(view);
        	abb1.jquery.admin_bbs_faq_css(pageNo);
        	$('#question4').on('click',function(){
        	    $('#faq_write_wrapper').html(answer);
        	    abb1.jquery.admin_bbs_faq_css(pageNo);
        	});
            },
            admin_bbs_faq_css : function(pageNo){
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
        	var ctx = abb1.session.getContextPath();
        	var view =  '<div id="bbs_detail">'
        	    +'      <div><strong>문의사항</strong></div>'
        	    +'      <div>'
        	    +'      <table id="bbs_detail_table">'
        	    +'         <tr>'
        	    +'            <td>'
        	    +'               <h3>영화관 관련 질문</h3>'
        	    +'               <ul>'
        	    +'                  <li>'
        	    +'                     <strong>카테고리 : </strong><span> 영화관</span>'
        	    +'                  </li>'
        	    +'                  <li>'
        	    +'                     <strong>등록일 : </strong><span> 2017-04-21</span>'
        	    +'                  </li>'
        	    +'                  <li>'
        	    +'                     <strong>조회수 : </strong><span> 27851</span>'
        	    +'                  </li>'
        	    +'               </ul>'
        	    +'            </td>'
        	    +'         </tr>'
        	    +'         <tr>'
        	    +'            <td colspan="2">'
        	    +'            <div id="bbs_detail_content">'
        	    +'            	<span>국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다.</span>'
        	    +'            </div>'
        	    +'            </td>'
        	    +'         </tr>'
        	    +'         <tr>'
        	    +'            <td>'
        	    +'            <div>'
        	    +'            <ul id="bbs_detail_review_ul">'
        	    +'               <li>'
        	    +'                  <div class="">'
        	    +'                  <strong id="bbs_review_result_name1">박준용</strong> <span id="bbs_review_result_reg_date1">2017.04.26</span>'
        	    +'                  <p id="bbs_review_result_txt1">최민식 연기 짱 짱 . 그냥 저냥 내용은 단순하고 지루했어요. 결말이 좀 어정쩡하네요. 구속되야 마땅한데 . .. 결말이 좀 어정쩡하네요. 구속되야 마땅한데 . . . 최민식 연기 짱 짱 . 그냥 저냥 내용은 단순하고 지루했어요. 결말이 좀 어정쩡하네요. 구속되야 마땅한데 .</p>'
        	    +'                  </div>'
        	    +'               </li>'
        	    +'               <li>'
        	    +'                  <div class="">'
        	    +'                  <strong id="bbs_review_result_name2">박준용</strong> <span id="bbs_review_result_reg_date2">2017.04.26</span>'
        	    +'                  <p id="bbs_review_result_txt2">최민식 연기 짱 짱 . 그냥 저냥 내용은 단순하고 지루했어요. 결말이 좀 어정쩡하네요. 구속되야 마땅한데 . . . 최민식 연기 짱 짱 . 그냥 저냥 내용은 단순하고 지루했어요. 결말이 좀 어정쩡하네요. 구속되야 마땅한데 . . . 최민식 연기 짱 짱 . 그냥 저냥 내용은 단순하고 지루했어요. 결말이 좀 어정쩡하네요. 구속되야 마땅한데 . . . 최민식 연기 짱 짱 . 그냥 저냥 내용은 단순하고 지루했어요. 결말이 좀 어정쩡하네요. 구속되야 마땅한데 .</p>'
        	    +'                  </div>'
        	    +'               </li>'
        	    +'               <li>'
        	    +'                  <div class="">'
        	    +'                  <strong id="bbs_review_result_name3">박준용</strong> <span id="bbs_review_result_reg_date3">2017.04.26</span>'
        	    +'                  <p id="bbs_review_result_txt3">최민식 연기 짱 짱 . 그냥 저냥 내용은 단순하고 지루했어요. 결말이 좀 어정쩡하네요. 구속되야 마땅한데 . . . 최민식 연기 짱 짱 . 그냥 저냥 내용은 단순하고 지루했어요. 결말이 좀 어정쩡하네요. 구속되야 마땅한데 . . . 최민식 연기 짱 짱 . 그냥 저냥 내용은 단순하고 지루했어요. 결말이 좀 어정쩡하네요. 구속되야 마땅한데 . . . 최민식 연기 짱 짱 . 그냥 저냥 내용은 단순하고 지루했어요. 결말이 좀 어정쩡하네요. 구속되야 마땅한데 .</p>'
        	    +'                  </div>'
        	    +'               </li>'
        	    +'            </ul>'
        	    +'            </div>'
        	    +'            </td>'
        	    +'         </tr>'
        	    +'         <tr>'
        	    +'            <td>'
        	    +'            <table id="bbs_detail_reply">'
        	    +'               <colgroup>'
        	    +'	               <col />'
        	    +'	               <col />'
        	    +'               </colgroup>'
        	    +'               <tr>'
        	    +'                  <td><textarea name="bbs_review_contents" id="bbs_review_contents" cols="30" rows="5"  placeholder="Write a comment..."></textarea></td>'
        	    +'                  <td><input id="bbs_review_contents_submit" type="submit" value="입력"/></td>'
        	    +'               </tr>'
        	    +'            </table>'
        	    +'            </td>'
        	    +'         </tr>'
        	    +'      </table>'
        	    +'      </div>'
        	    +'      <div class="abb1_bbs_write_btns">'
        	    +'         <a href="'+ctx+'/board/main"><input type="button" value="목록" class="abb1_bbs_write_confirm"/></a>'
        	    +'      </div>'
        	    +'</div>'
        	$('#container').html(view);
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
        	var ctx = abb1.session.getContextPath();
        	var view = '<div id="board_main">'
        	+	   '<div><strong>고객센터</strong></div>'
        	+	   '<div>'
        	+	      '<div id="board_main_ddl">'
        	+	         '<select name="city">'
        	+	            '<option value="" selected>지역선택</option>'
        	+	            '<option value="seoul">서울</option>'
        	+	            '<option value="gyunggi">경기</option>'
        	+	            '<option value="daejeon">대전</option>'
        	+	         '</select>'
        	+	         '<select name="theater">'
        	+	            '<option value="" selected>영화관선택</option>'
        	+	            '<option value="gasan">가산디지털</option>'
        	+	            '<option value="gayang">가양</option>'
        	+	            '<option value="gangdong">강동</option>'
        	+	         '</select>'
        	+	         '<select name="search">'
        	+	            '<option value="title" selected>제목</option>'
        	+	            '<option value="contents">내용</option>'
        	+	            '<option value="both">제목+내용</option>'
        	+	         '</select>' 
        	+	         '<input id="board_main_find_keyword" type="text" placeholder="내용 입력"/>'
        	+	         '<input id="board_main_find_search" type="button" value="검색"/>'
        	+	         '<span>총 <strong>283</strong>개의 게시물이 있습니다.</span>'
        	+	      '</div>'
        	+	   '<div id="board_main_table">'
        	+	      '<table>'
        	+		      '<colgroup>'
        	+		      	'<col />'
        	+		      	'<col />'
        	+		      	'<col />'
        	+		      	'<col />'
        	+		      	'<col />'
        	+		      '</colgroup>'
        	+	         '<thead>'
        	+	         '<tr>'
        	+	            '<th>번호</th>'
        	+	            '<th>영화관</th>'
        	+	            '<th>제목</th>'
        	+	            '<th>등록일</th>'
        	+	            '<th>조회수</th>'
        	+	         '</tr>'
        	+	         '</thead>'
        	+	         '<tbody>'
        	+	         '<tr>'
        	+	            '<td>-</td>'
        	+	            '<td><b>전체</b></td>'
        	+	            '<td><a href="javascript:abb1.jquery.board_notice_detail()">[공지]개인정보 이용내역 안내</a></td>'
        	+	            '<td>2017-03-09</td>'
        	+	            '<td>27399</td>'
        	+	        ' </tr>'
        	+	         '<tr>'
        	+	            '<td>9</td>'
        	+	            '<td>영화관</td>'
        	+	            '<td><a href="javascript:abb1.jquery.board_detail()">영화관 관련 질문</a></td>'
        	+	            '<td>2017-04-21</td>'
        	+	            '<td>27851</td>'
        	+	         '</tr>'
        	+	         '<tr>'
        	+	            '<td>8</td>'
        	+	            '<td>영등포</td>'
        	+	            '<td>롯데시네마 영등포 정전 사과문</td>'
        	+	            '<td>2017-04-20</td>'
        	+	            '<td>57</td>'
        	+'	         </tr>'
        	+'	         <tr>'
        	+'	            <td>7</td>'
        	+'	            <td>양산</td>'
        	+'	            <td>롯데시네마 양산관 영업 종료 안내</td>'
        	+'	            <td>2017-04-20</td>'
        	+'	            <td>57</td>'
        	+'	         </tr>'
        	+'	         <tr>'
        	+'	            <td>6</td>'
        	+'	            <td>양산</td>'
        	+'	            <td>롯데시네마 양산관 영업 종료 안내</td>'
        	+'	            <td>2017-04-20</td>'
        	+'	            <td>57</td>'
        	+'	         </tr>'
        	+'	         <tr>'
        	+'	            <td>5</td>'
        	+'	            <td>양산</td>'
        	+'	            <td>롯데시네마 양산관 영업 종료 안내</td>'
        	+'	            <td>2017-04-20</td>'
        	+'	            <td>57</td>'
        	+'	         </tr>'
        	+'	         <tr>'
        	+'	            <td>4</td>'
        	+'	            <td>양산</td>'
        	+'	            <td>롯데시네마 양산관 영업 종료 안내</td>'
        	+'	            <td>2017-04-20</td>'
        	+'	            <td>57</td>'
        	+'	         </tr>'
        	+'	         <tr>'
        	+'	            <td>3</td>'
        	+'	            <td>양산</td>'
        	+'	            <td>롯데시네마 양산관 영업 종료 안내</td>'
        	+'	            <td>2017-04-20</td>'
        	+'	            <td>57</td>'
        	+'	         </tr>'
        	+'	         <tr>'
        	+'	            <td>2</td>'
        	+'	            <td>양산</td>'
        	+'	            <td>롯데시네마 양산관 영업 종료 안내</td>'
        	+'	            <td>2017-04-20</td>'
        	+'	            <td>57</td>'
        	+'	         </tr>'
        	+'	         <tr>'
        	+'	            <td>1</td>'
        	+'	            <td>양산</td>'
        	+'	            <td>롯데시네마 양산관 영업 종료 안내</td>'
        	+'	            <td>2017-04-20</td>'
        	+'	            <td>57</td>'
        	+'	         </tr>'
        	+'	         </tbody>'
        	+'	      </table>'
        	+'	   </div>'
        	+'	   <div id="bbs_pagination">'
        	+'		   <table>'
        	+'		      <tr>'
        	+'		         <td>'
        	+'		            <a href="#"><img src="'+ctx+'/resources/img/pagination/prev_all.gif" alt="" /></a>'
        	+'		            <a href="#"><img src="'+ctx+'/resources/img/pagination/prev.gif" alt="" /></a>'
        	+'		         </td>'
        	+'		         <td id="bbs_pagination_number">'
        	+'		            <h4>'
        	+'		            <a href="#">1</a>'
        	+'		            <a href="#">2</a>'
        	+'		            <a href="#">3</a>'
        	+'		            <a href="#">4</a>'
        	+'		            <a href="#">5</a>'
        	+'		            <a href="#">6</a>'
        	+'		            <a href="#">7</a>'
        	+'		            <a href="#">8</a>'
        	+'		            <a href="#">9</a>'
        	+'		            <a href="#">10</a>'
        	+'		            </h4>'
        	+'		         </td>'
        	+'		         <td>'
        	+'		            <a href="#"><img src="'+ctx+'/resources/img/pagination/next.gif" alt="" /></a>'
        	+'		            <a href="#"><img src="'+ctx+'/resources/img/pagination/next_all.gif" alt="" /></a>'
        	+'		         </td>'
        	+'		      </tr>'
        	+'		   </table>'
        	+'	   </div>'
        	+'	   <div id="board_main_btn">'
        	+'	      <a href="javascript:abb1.jquery.board_write()"><input type="button" value="글쓰기"/></a>'
        	+'	   </div>'
        	+'	   </div>'
        	+'	</div>';
        	$('#container').html(view);
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
        	var ctx = abb1.session.getContextPath();
        	var view = '<div id="board_notice_detail">'
        	    +'      <div><strong>고객센터</strong></div>'
        	    +'      <div>'
        	    +'	      <table id="board_notice_detail_table">'
        	    +'	         <tr>'
        	    +'	            <td>'
        	    +'	               <h3>[공지]개인정보 이용내역 안내</h3>'
        	    +'	               <ul>'
        	    +'	                  <li>'
        	    +'	                     <strong>영화관 : </strong><span> 전체</span>'
        	    +'	                  </li>'
        	    +'	                  <li>'
        	    +'	                     <strong>등록일 : </strong><span> 2017-03-09</span>'
        	    +'	                  </li>'
        	    +'	                  <li>'
        	    +'	                     <strong>조회수 : </strong><span> 27927</span>'
        	    +'	                  </li>'
        	    +'	               </ul>'
        	    +'	            </td>'
        	    +'	         </tr>'
        	    +'	         <tr>'
        	    +'	            <td colspan="2">'
        	    +'	            <div id="board_notice_content"></div>'
        	    +'	            <img src="'+ctx+'/resources/img/board/notice_sample.jpg" alt="" />'
        	    +'	            </td>'
        	    +'	         </tr>'
        	    +'	      </table>'
        	    +'     </div>'
        	    +'   <div id="board_notice_detail_btn">'
        	    +'         <a href="'+ctx+'/board/main"><input type="button" value="목록"/></a>'
        	    +'      </div>'
        	    +'   </div>';
        	$('#container').html(view);
        	var ctx = abb1.session.getContextPath();
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
        	var ctx = abb1.session.getContextPath();
        	var view = '<div id="board_write">'
        	    +'      <div><strong>문의내용</strong></div>'
        	    +'      <div>      '
        	    +'      	<span><span>*</span> 표시항목은 필수 입력 항목입니다.</span>'
        	    +'      </div>'
        	    +'      <table id="board_write_table">'
        	    +'	      <colgroup>'
        	    +'	      	<col />'
        	    +'	      	<col />'
        	    +'	      </colgroup>'
        	    +'         <tr>'
        	    +'            <td>문의종류 <span>*</span></td>'
        	    +'            <td id="board_write_radio">'
        	    +'               <input type="radio" name="kind" value="1" checked="checked"/><span>문의</span>'
        	    +'               <input type="radio" name="kind" value="2" checked="checked"/><span>칭찬</span>'
        	    +'               <input type="radio" name="kind" value="3" checked="checked"/><span>불만</span>'
        	    +'               <input type="radio" name="kind" value="4" checked="checked"/><span>건의</span>'
        	    +'            </td>'
        	    +'         </tr>'
        	    +'         <tr>'
        	    +'            <td>분류 <span>*</span></td>'
        	    +'            <td>'
        	    +'               <select id="board_write_category" name="category">'
        	    +'                  <option value="" selected>분류 선택</option>'
        	    +'                  <option value="theater">영화관 문의</option>'
        	    +'                  <option value="movie">영화 문의</option>'
        	    +'                  <option value="customer">회원 문의</option>'
        	    +'                  <option value="paying">결제 문의</option>'
        	    +'                  <option value="homepage">홈페이지 문의</option>'
        	    +'               </select> '
        	    +'            </td>'
        	    +'         </tr>'
        	    +'         <tr>'
        	    +'            <td>영화관 <span>*</span></td>'
        	    +'            <td><input id="board_write_select_multiplex" type="button" value="영화관 선택"/></td>'
        	    +'         </tr>'
        	    +'         <tr>'
        	    +'            <td>제목 <span>*</span></td>'
        	    +'            <td>'
        	    +'               <input id="board_write_title" type="text" name="title" maxlength="50"/>'
        	    +'            </td>'
        	    +'         </tr>'
        	    +'         <tr>'
        	    +'            <td>내용 <span>*</span></td>'
        	    +'            <td>'
        	    +'               <textarea name="contents" id="board_write_content" cols="30" rows="10"></textarea>'
        	    +'            </td>'
        	    +'         </tr>'
        	    +'         <tr>'
        	    +'            <td>첨부파일</td>'
        	    +'            <td>'
        	    +'               <input type="file" id="file" name="file" value="파일 찾기"/>'
        	    +'               <span>jpg, jpeg, png, bmp, pdf (2MB × 1개)</span>'
        	    +'            </td>'
        	    +'         </tr>'
        	    +'      </table>'
        	    +'      <div id="board_write_btns">'
        	    +'         <a href="#"><input id="board_write_cancel" type="button" value="취소"/></a>'
        	    +'         <a href="#"><input id="board_wrtie_confirm" type="button" value="확인"/></a>'
        	    +'      </div>'
        	    +'   </div>';
        	$('#container').html(view);
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
	    var ctx = abb1.session.getContextPath();
	    var view = '<div id="reservation">'
		+'	   <div id="reservation_main_form">'
		+'		   <table>'
		+'		      <tr>'
		+'		         <td>'
		+'		         	<span>2017-04-27 <a href="#"><img src="'+ctx+'/resources/img/icon/calendar.png" alt="" width="30px" height="30px"/></a></span>'
		+'		         </td>'
		+'		      </tr>'
		+'		   </table>'
		+'	   <table id="reservation_multiplex">'
		+'	      <colgroup>'
		+'	      	<col />'
		+'	      	<col />'
		+'	      </colgroup>'
		+'	      <tr>'
		+'	         <td><span>영화관</span></td>'
		+'	         <td><span>영화</span></td>'
		+'	      </tr>'
		+'	      <tr>'
		+'	         <td>'
		+'		         <div id="reservation_tab_scroll">'
		+'			         <ul>'
		+'			            <li>'
		+'				            <span><a id="reservation_tab_cont" href="#">서울(<em>8</em>)</a></span>'
		+'				            <div id="reservation_area_list">'
		+'				            <ul>'
		+'				               <li><a href="#">가산디지털</a></li>'
		+'				               <li><a href="#">가양</a></li>'
		+'				               <li><a href="#">강동</a></li>'
		+'				               <li><a href="#">건대입구</a></li>'
		+'				               <li><a href="#">김포공항</a></li>'
		+'				               <li><a href="#">노원</a></li>'
		+'				               <li><a href="#">독산</a></li>'
		+'				               <li><a href="#">브로드웨이(신사)</a></li>'
		+'				               <li><a href="#">서울대입구</a></li>'
		+'				            </ul>'
		+'				            </div>'
		+'			            </li>'
		+'			         </ul>'
		+'			         <br />'
		+'		            <div id="reservation_area">'
		+'		            <ul>'
		+'		            	<li><a href="#">경기/인천</a></li>'
		+'		            	<li><a href="#">충청/대전</a></li>'
		+'		            	<li><a href="#">전라/광주</a></li>'
		+'		            	<li><a href="#">경북/대구</a></li>'
		+'		            	<li><a href="#">경남/부산/울산</a></li>'
		+'		            	<li><a href="#">강원</a></li>'
		+'		            	<li><a href="#">제주</a></li>'
		+'		            </ul>'
		+'		            </div>'
		+'		         </div>'
		+'	         </td>'
		+'	         <td>'
		+'		         <ul id="reservation_movielist">'
		+'		            <li><a href="#"><img src="'+ctx+'/resources/img/movie/grade_15.png" alt="" width="24px" height="24px"/> 특별시민</a></li>'
		+'		            <li><a href="#"><img src="'+ctx+'/resources/img/movie/grade_12.png" alt="" width="24px" height="24px"/> 임금님의 사건수첩</a></li>'
		+'		            <li><a href="#"><img src="'+ctx+'/resources/img/movie/grade_15.png" alt="" width="24px" height="24px"/> 분노의 질주: 더 익스트림</a></li>'
		+'		            <li><a href="#"><img src="'+ctx+'/resources/img/movie/grade_15.png" alt="" width="24px" height="24px"/> 보안관</a></li>'
		+'		            <li><a href="#"><img src="'+ctx+'/resources/img/movie/grade_all.png" alt="" width="24px" height="24px"/> 서서평, 천천히 평온하게</a></li>'
		+'		            <li><a href="#"><img src="'+ctx+'/resources/img/movie/grade_all.png" alt="" width="24px" height="24px"/> 스머프: 비밀의 숲</a></li>'
		+'		            <li><a href="#"><img src="'+ctx+'/resources/img/movie/grade_12.png" alt="" width="24px" height="24px"/> 가디언즈 오브 갤럭시 VOL.2</a></li>'
		+'		         </ul>'
		+'	         </td>'
		+'	      </tr>'
		+'	      <tr>'
		+'		      <td colspan="2">'
		+'		      <div id="reservation_confirm">'
		+'		         <div>'
		+'		         	<h3><span>상영시간</span></h3>'
		+'		         </div>'
		+'		      </div>'
		+'		      <div id="reservation_time">'
		+'		         <h4>가산디지털</h4>'
		+'			        <div id="movie_time_line">'
		+'						<div>'
		+'							<span id="movie_title"><strong>특별시민</strong></span><img src="'+ctx+'/resources/img/icon/movieLink.png" alt="" />'
		+'						</div>'
		+'						<ul id="movie_timeline_ul">'
		+'						<a href="javascript:abb1.jquery.reservation_seat()"><li><table>'
		+'							<tr>'
		+'							<td>1관</td>'
		+'							</tr>'
		+'							<tr>'
		+'							<td><strong>12:00</strong></td>'
		+'							</tr>'
		+'							<tr>'
		+'							<td> 50석 / 100석</td>'
		+'							</tr>'
		+'						</table>'
		+'						</li></a>'
		+'						<li>'
		+'						<table>'
		+'							<tr>'
		+'							<td>1관</td>'
		+'							</tr>'
		+'							<tr>'
		+'							<td><strong>12:00</strong></td>'
		+'							</tr>'
		+'							<tr>'
		+'							<td> 50석 / 100석</td>'
		+'							</tr>'
		+'						</table>'
		+'						</li>'
		+'						<li>'
		+'						<table>'
		+'							<tr>'
		+'							<td>1관</td>'
		+'							</tr>'
		+'							<tr>'
		+'							<td><strong>12:00</strong></td>'
		+'							</tr>'
		+'							<tr>'
		+'							<td> 50석 / 100석</td>'
		+'							</tr>'
		+'						</table>'
		+'						</li>'
		+'						<li>'
		+'						<table>'
		+'							<tr>'
		+'							<td>1관</td>'
		+'							</tr>'
		+'							<tr>'
		+'							<td><strong>12:00</strong></td>'
		+'							</tr>'
		+'							<tr>'
		+'							<td> 50석 / 100석</td>'
		+'							</tr>'
		+'						</table>'
		+'						</li>'
		+'						</ul>'
		+'					</div>'
		+'		      	</div>'
		+'		      </td>'
		+'	      </tr>'
		+'	   </table>'
		+'	   </div>'
		+'	</div>';
	    $('#container').html(view);
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
	    var ctx = abb1.session.getContextPath();
	    var view = '<div id="seat">'
		+'   	  <div id="reservation_seat_form">'
		+'      <div>'
		+'         <div>'
		+'            <span>좌석 선택</span>'
		+'         </div>'
		+'	      <div>'
		+'	         <span>Screen</span>'
		+'	      </div>'
		+'	      <div id="seat_area">'
		+'	      <div>'
		+'	         <table id="seat_area_table">'
		+'	            <colgroup>'
		+'	            	<col />'
		+'	            	<col />'
		+'	            </colgroup>'
		+'		         <tr>'
		+'		            <td>A</td>'
		+'		            <td>'
		+'		               <a href="#">1</a>'
		+'		               <a href="#">2</a>'
		+'		               <span></span>'
		+'		               <a href="#">3</a>'
		+'		               <a href="#">4</a>'
		+'		               <a class="reserved" href="#">5</a>'
		+'		               <a class="reserved" href="#">6</a>'
		+'		               <a href="#">7</a>'
		+'		               <a href="#">8</a>'
		+'		               <span></span>'
		+'		               <a href="#">9</a>'
		+'		               <a href="#">10</a>'
		+'		            </td>'
		+'		         </tr>'
		+'		         <tr>'
		+'		            <td>B</td>'
		+'		            <td>'
		+'		               <a class="reserved" href="#">1</a>'
		+'		               <a href="#">2</a>'
		+'		               <span></span>'
		+'		               <a href="#">3</a>'
		+'		               <a href="#">4</a>'
		+'		               <a href="#">5</a>'
		+'		               <a href="#">6</a>'
		+'		               <a href="#">7</a>'
		+'		               <a href="#">8</a>'
		+'		               <span></span>'
		+'		               <a href="#">9</a>'
		+'		               <a class="reserved" href="#">10</a>'
		+'		            </td>'
		+'		         </tr>'
		+'		         <tr>'
		+'		            <td>C</td>'
		+'		            <td>'
		+'		               <a href="#">1</a>'
		+'		               <a href="#">2</a>'
		+'		               <span></span>'
		+'		               <a href="#">3</a>'
		+'		               <a href="#">4</a>'
		+'		               <a href="#">5</a>'
		+'		               <a href="#">6</a>'
		+'		               <a href="#">7</a>'
		+'		               <a class="reserved" href="#">8</a>'
		+'		               <span></span>'
		+'		               <a class="reserved" href="#">9</a>'
		+'		               <a class="reserved" href="#">10</a>'
		+'		            </td>'
		+'		         </tr>'
		+'		         <tr>'
		+'		            <td>D</td>'
		+'		            <td>'
		+'		               <a class="reserved" href="#">1</a>'
		+'		               <a class="reserved" href="#">2</a>'
		+'		               <span></span>'
		+'		               <a class="reserved" href="#">3</a>'
		+'		               <a class="reserved" href="#">4</a>'
		+'		               <a class="reserved" href="#">5</a>'
		+'		               <a class="reserved" href="#">6</a>'
		+'		               <a href="#">7</a>'
		+'		               <a href="#">8</a>'
		+'		               <span></span>'
		+'		               <a href="#">9</a>'
		+'		               <a href="#">10</a>'
		+'		            </td>'
		+'		         </tr>'
		+'		         <tr>'
		+'		            <td>E</td>'
		+'		            <td>'
		+'		               <a href="#">1</a>'
		+'		               <a href="#">2</a>'
		+'		               <span></span>'
		+'		               <a href="#">3</a>'
		+'		               <a href="#">4</a>'
		+'		               <a href="#">5</a>'
		+'		               <a href="#">6</a>'
		+'		               <a class="reserved" href="#">7</a>'
		+'		               <a href="#">8</a>'
		+'		               <span></span>'
		+'		               <a href="#">9</a>'
		+'		               <a href="#">10</a>'
		+'		            </td>'
		+'		         </tr>'
		+'		         <tr>'
		+'		            <td>F</td>'
		+'		            <td>'
		+'		               <a href="#">1</a>'
		+'		               <a href="#">2</a>'
		+'		               <span></span>'
		+'		               <a href="#">3</a>'
		+'		               <a href="#">4</a>'
		+'		               <a href="#">5</a>'
		+'		               <a href="#">6</a>'
		+'		               <a href="#">7</a>'
		+'		               <a href="#">8</a>'
		+'		               <span></span>'
		+'		               <a href="#">9</a>'
		+'		               <a href="#">10</a>'
		+'		            </td>'
		+'		         </tr>'
		+'		         <tr>'
		+'		            <td>G</td>'
		+'		            <td>'
		+'		               <a href="#">1</a>'
		+'		               <a href="#">2</a>'
		+'		               <span></span>'
		+'		               <a href="#">3</a>'
		+'		               <a href="#">4</a>'
		+'		               <a href="#">5</a>'
		+'		               <a href="#">6</a>'
		+'		               <a href="#">7</a>'
		+'		               <a href="#">8</a>'
		+'		               <span></span>'
		+'		               <a href="#">9</a>'
		+'		               <a href="#">10</a>'
		+'		            </td>'
		+'		         </tr>'
		+'		         <tr>'
		+'		            <td>H</td>'
		+'		            <td>'
		+'		               <a href="#">1</a>'
		+'		               <a href="#">2</a>'
		+'		               <span></span>'
		+'		               <a href="#">3</a>'
		+'		               <a href="#">4</a>'
		+'		               <a href="#">5</a>'
		+'		               <a href="#">6</a>'
		+'		               <a href="#">7</a>'
		+'		               <a href="#">8</a>'
		+'		               <span></span>'
		+'		               <a href="#">9</a>'
		+'		               <a href="#">10</a>'
		+'		            </td>'
		+'		         </tr>'
		+'		         <tr>'
		+'		            <td>'
		+'		            </td>'
		+'		            <td>'
		+'		               <img src="'+ctx+'/resources/img/reservation/exit_bottom.png" alt="" />'
		+'		            </td>'
		+'		         </tr>'
		+'	         </table>'
		+'	      </div>'
		+'	      <div>'
		+'	         <img src="'+ctx+'/resources/img/reservation/seat_info.png" alt=""/>'
		+'	      </div>'
		+'	      </div>'
		+'      </div>'
		+'      </div>'
		+'   </div>'
		+'   <div id="ticketing">'
		+'	   <div>'
		+'	      <div>'
		+'	      <table>'
		+'	         <tr id="ticketing_tr1">'
		+'	            <td>'
		+'	               <div>영화</div>'
		+'	            </td>'
		+'	            <td>'
		+'	               <div>예매정보</div>'
		+'	            </td>'
		+'	            <td><div>총 결제 금액</div></td>'
		+'	         </tr>'
		+'	         <tr id="ticketing_tr2">'
		+'	            <td>'
		+'	            <table>'
		+'	               <tr>'
		+'	                  <td><img src="'+ctx+'/resources/img/movie/movie_poster_6.png" alt="" width="127px" height="170px"/></td>'
		+'	                  <td>'
		+'		                  <div id="ticketing_movie_title">아빠는 딸</div>'
		+'		                  <div id="ticketing_movie_type">2D</div>'
		+'		                  <div id="">15세이상관람가</div>'
		+'	                  </td>'
		+'	               </tr>'
		+'	            </table>'
		+'	            </td>'
		+'	            <td>'
		+'		            <table>'
		+'	                  <tr>'
		+'	                     <td>상영일</td>'
		+'	                     <td>2017-04-27(목)</td>'
		+'	                  </tr>'
		+'	                  <tr>'
		+'	                     <td>상영시간</td>'
		+'	                     <td>19:00~21:00</td>'
		+'	                  </tr>'
		+'	                  <tr>'
		+'	                     <td>상영관</td>'
		+'	                     <td>가산디지털 1관</td>'
		+'	                  </tr>'
		+'	                  <tr>'
		+'	                     <td>좌석</td>'
		+'	                     <td>A1</td>'
		+'	                  </tr>'
		+'	                  <tr>'
		+'	                     <td id="ticketing_cost" colspan="2">9,000원</td>'
		+'	                  </tr>'
		+'	               </table>'
		+'	            </td>'
		+'	            <td id="ticketing_paying">'
		+'		            <div id="ticketing_cost_total">9,000원</div>'
		+'		            <a href="'+ctx+'/customer/mypage"><input type="button" value="결제하기"/></a>'
		+'	            </td>'
		+'	         </tr>'
		+'	      </table>'
		+'	      </div>'
		+'	   </div>'
		+'   </div>';
	    $('#container').html(view);
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
	},
	multiplex_main : function(){
	    var ctx = abb1.session.getContextPath();
	    var view = '<div>'
		+'	<img src="'+ctx+'/resources/img/multiplex/theater.jpg" alt="" />'
		+'	</div>'
		+'	<div id="multiplex_info">'
		+'		<h2><strong>가산디지털</strong></h2>'
		+'		<table id="multiplex_info_table">'
		+'			<tr>'
		+'				<td>서울 금천구 가산동,60-8 </td>'
		+'				<td><strong>총 상영관수</strong></td>'
		+'				<td>1개관</td>'
		+'				<td><strong>총 좌석수</strong></td>'
		+'				<td>100석</td>'
		+'			</tr>'
		+'		</table>'
		+'	</div>'
		+'	<div id="multiplex_info_btn">'
		+'		<ul>'
		+'		<li ><a href="#"><strong>상영시간표</strong></a></li>'
		+'		<li><a href="javascript:abb1.jquery.multiplex_map()"><strong>위치정보</strong></a></li>'
		+'		</ul>'
		+'	</div>'
		+'	<div id="multiplex_calendar">'
		+'		<span>2017-04-28</span><img src="'+ctx+'/resources/img/icon/calendar.png" width="3%" alt="" />'
		+'	</div>'
		+'	<div id="movie_time_line">'
		+'		<div>'
		+'			<span><strong>특별시민</strong></span><img src="'+ctx+'/resources/img/icon/movieLink.png" alt="" />'
		+'		</div>'
		+'		<ul>'
		+'		<li><table>'
		+'			<tr>'
		+'			<td>1관</td>'
		+'			</tr>'
		+'			<tr>'
		+'			<td><strong>12:00</strong></td>'
		+'			</tr>'
		+'			<tr>'
		+'			<td> 50석 / 100석</td>'
		+'			</tr>'
		+'		</table></li>'
		+'		<li><table>'
		+'			<tr>'
		+'			<td>1관</td>'
		+'			</tr>'
		+'			<tr>'
		+'			<td><strong>12:00</strong></td>'
		+'			</tr>'
		+'			<tr>'
		+'			<td> 50석 / 100석</td>'
		+'			</tr>'
		+'		</table></li>'
		+'		<li><table>'
		+'			<tr>'
		+'			<td>1관</td>'
		+'			</tr>'
		+'			<tr>'
		+'			<td><strong>12:00</strong></td>'
		+'			</tr>'
		+'			<tr>'
		+'			<td> 50석 / 100석</td>'
		+'			</tr>'
		+'		</table></li>'
		+'		<li><table>'
		+'			<tr>'
		+'			<td>1관</td>'
		+'			</tr>'
		+'			<tr>'
		+'			<td><strong>12:00</strong></td>'
		+'			</tr>'
		+'			<tr>'
		+'			<td> 50석 / 100석</td>'
		+'			</tr>'
		+'		</table></li>'
		+'		</ul>'
		+'	</div>';
	    $('#container').html(view);
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
		movie_time_line.find('div:first-child').addClass('abb1_padding_bottom_20');
		movie_time_line.find('div:first-child').find('span').addClass('abb1_multiplex_movie_title');
		movie_time_line.find('ul').addClass('abb1_ul_inline');
		movie_time_line.find('li').addClass('abb1_li_inline abb1_padding_right_0');
		movie_time_line.find('li').find('strong').addClass('abb1_font_size_22');
	},
	multiplex_map : function(){
	    var ctx = abb1.session.getContextPath();
	    var view = '<div>'
		+'	<img src="'+ctx+'/resources/img/multiplex/theater.jpg" alt="" />'
		+'	</div>'
		+'	<div id="multiplex_map_title">'
		+'	<h2><strong>가산디지털 위치정보</strong></h2>'
		+'	</div>'
		+'	<div id="multiplex_info_btn">'
		+'	<ul>'
		+'		<li><a href="'+ctx+'/multiplex/main"><strong>상영시간표</strong></a></li>'
		+'		<li><a href="#"><strong>위치정보</strong></a></li>'
		+'	</ul>'
		+'	</div>'
		+'	<div id="multiplex_map_api">'
		+'		<img src="'+ctx+'/resources/img/multiplex/map.JPG" alt="" />'
		+'	</div>';
	    $('#container').html(view);
		$('#container').addClass('abb1_bgcolor_beige');
		$('#multiplex_map_title').addClass('abb1_multiplex_map_title');
		var multiplex_info_btn = $('#multiplex_info_btn');
		multiplex_info_btn.addClass('abb1_margin_left_100');
		multiplex_info_btn.find('ul').addClass('abb1_ul_inline');
		multiplex_info_btn.find('li:first-child').addClass('abb1_li_inline abb1_multiplex_btn');
		multiplex_info_btn.find('li:first-child').find('a').addClass('abb1_multiplex_a');
		multiplex_info_btn.find('li:nth-child(2)').addClass('abb1_li_inline abb1_multiplex_select_btn');
		multiplex_info_btn.find('li:nth-child(2)').find('a').addClass('abb1_multiplex_select_a');
		$('#multiplex_map_api').addClass('abb1_multiplex_map');
	},
	customer_findid : function(){
	    var ctx = abb1.session.getContextPath();
	    var view='<div id="customer_find_id">'
	    	+'		<div> '
	    	+'			<h2><strong>회원 ID 찾기</strong></h2>'
	    	+'		</div>'
	    	+'		<div id="customer_find_id_div">'
	    	+'			<div>'
	    	+'				<table id="customer_find_id_table">'
	    	+'			         <tr>'
	    	+'			         	<td><strong>이름</strong></td>'
	    	+'			            <td colspan="2"><input type="text"></td>'
	    	+'			         </tr>'
	    	+'			         <tr>'
	    	+'			         	<td><strong>이메일</strong></td>'
	    	+'			            <td colspan="2"><input type="text" ></td>'
	    	+'			         </tr>'
	    	+'			         <tr>'
	    	+'			         <td><span>인증번호를 받을</span></td>'
	    	+'		         <td><span>이메일를 입력하세요.</span></td>'
	    	+'			         <td><input id="customer_send_email" type="button" value="전송"></td>'
	    	+'			         </tr>'
	    	+'			         <tr>'
	    	+'			         	<td><strong>인증번호</strong></td>'
	    	+'			            <td colspan="2"><input type="text"></td>'
	    	+'			         </tr>'
	    	+'			         <tr>'
	    	+'			         <td colspan="3" id="customer_find_id_btns">'
	    	+'			         <ul>'
	    	+'						<li>'
	    	+'							<a href="javascript:abb1.jquery.customer_login()"><input type="button" value="취소"/></a>'
	    	+'						</li>'
	    	+'						<li>'
	    	+'							<a href="javascript:abb1.jquery.customer_findidsuccess()"><input type="button" value="확인"  /></a>'
	    	+'						</li>'
	    	+'					</ul></td>'
	    	+'		         	</tr>'
	    	+'		      	</table>'
	    	+'			</div>'
	    	+'		</div>'
	    	+'	</div>';
	    $('#container').html(view);
		var customer_find_id = $('#customer_find_id');
		customer_find_id.addClass('abb1_find_id_container');
		customer_find_id.find('div:first-child').addClass('abb1_width_left');
		customer_find_id.find('div:first-child').find('h2').addClass('abb1_color_bold_brown');
		var customer_find_id_div = $('#customer_find_id_div');
		customer_find_id_div.addClass('abb1_find_id_div');
		customer_find_id_div.find('div:first-child').addClass('abb1_find_id_inner_div');
		var customer_find_id_table = $('#customer_find_id_table');
		customer_find_id_table.addClass('abb1_signup_form_control abb1_width_left');
		customer_find_id_table.find('input').addClass('abb1_find_id_table_input');
		customer_find_id_table.find('span:first-child').addClass('abb1_find_id_red_font');
		customer_find_id_table.find('span:nth-child(2)').addClass('abb1_red_font');
		$('#customer_send_email').css('background','#efebdb');
		var customer_find_id_btns = $('#customer_find_id_btns');
		customer_find_id_btns.css('text-align','center');
		customer_find_id_btns.find('ul').addClass('abb1_page_ul_inline');
		customer_find_id_btns.find('li:nth-child(1)').addClass('abb1_finc_id_cancel_btn');
		customer_find_id_btns.find('li:nth-child(1)').find('input').addClass('btn abb1_btn_lg abb1_btn_verification');
		customer_find_id_btns.find('li:nth-child(2)').addClass('abb1_page_li_inline');
		customer_find_id_btns.find('li:nth-child(2)').find('input').addClass('btn abb1_btn_lg abb1_btn_verification');
	},
	customer_findidsuccess : function(){
	    var ctx = abb1.session.getContextPath();
	    var view='<div id="customer_find_id">'
	    	+'		<div> '
	    	+'			<h2><strong>회원 ID 찾기</strong></h2>'
	    	+'		</div>'
	    	+'		<div id="customer_find_id_result">'
	    	+'			<div>'
	    	+'				<table id="customer_find_id_table">'
	    	+'		         <tr>'
	    	+'			         <td>'
	    	+'			         	<h4>회원님의 아이디는 <strong>yheisun</strong>입니다.</h4>'
	    	+'			         </td>'
	    	+'		         </tr>'
	    	+'		         <tr>'
	    	+'		         	<td>'
	    	+'			        <ul>'
	    	+'						<li>'
	    	+'							<a href="'+ctx+'/customer/login"><input type="button" value="확인"  /></a>'
	    	+'						</li>'
	    	+'					</ul>'
	    	+'					</td>'
	    	+'		         </tr>'
	    	+'		      </table>'
	    	+'			</div>'
	    	+'		</div>'
	    	+'	</div>';
	    $('#container').html(view);
		var customer_find_id = $('#customer_find_id');
		customer_find_id.addClass('abb1_find_id_container');
		customer_find_id.find('div:first-child').addClass('abb1_width_left');
		customer_find_id.find('div:first-child').find('h2').addClass('abb1_color_bold_brown');
		var customer_find_id_result = $('#customer_find_id_result');
		customer_find_id_result.addClass('abb1_find_id_div');
		customer_find_id_result.find('div:first-child').addClass('abb1_page_info abb1_width_center');
		var customer_find_id_table = $('#customer_find_id_table');
		customer_find_id_table.addClass('abb1_signup_form_control abb1_width_left');
		customer_find_id_table.find('strong').addClass('abb1_font_size_25');
		customer_find_id_table.find('td:nth-child(2)').addClass('abb1_padding_left_163');
		customer_find_id_table.find('ul').addClass('abb1_page_ul_inline');
		customer_find_id_table.find('li').addClass('abb1_page_li_inline');
		customer_find_id_table.find('input').addClass('btn abb1_btn_lg abb1_btn_verification');
	},
	customer_findpw : function(){
	    var ctx = abb1.session.getContextPath();
	    var view='<div id="customer_find_pw">'
	    	+'		<div> '
	    	+'			<h2><strong>회원 비밀번호 찾기</strong></h2>'
	    	+'		</div>'
	    	+'		<div id="customer_find_pw_div">'
	    	+'			<div>'
	    	+'				<table id="customer_find_pw_table">'
	    	+'		         <tr>'
	    	+'		         	<td><strong>아이디</strong></td>'
	    	+'		            <td colspan="2"><input type="text"></td>'
	    	+'		         </tr>'
	    	+'		         <tr>'
	    	+'		         	<td><strong>이메일</strong></td>'
	    	+'		            <td colspan="2"><input type="text"></td>'
	    	+'		         </tr>'
	    	+'		         <tr>'
	    	+'			         <td><span>인증번호를 받을</span></td>'
	    	+'			         <td><span>이메일를 입력하세요.</span></td>'
	    	+'			         <td><input id="customer_send_email" type="button" value="전송"></td>'
	    	+'		         </tr>'
	    	+'		         <tr>'
	    	+'		         	<td><strong>인증번호</strong></td>'
	    	+'		            <td colspan="2"><input type="text"></td>'
	    	+'		         </tr>'
	    	+'		         <tr>'
	    	+'		         <td colspan="3" id="customer_find_pw_btns">'
	    	+'			         <ul>'
	    	+'						<li>'
	    	+'							<a href="javascript:abb1.jquery.customer_login()"><input type="button" value="취소"  /></a>'
	    	+'						</li>'
	    	+'						<li>'
	    	+'							<a href="javascript:abb1.jquery.customer_findpwsuccess()"><input type="button" value="확인"  /></a>'
	    	+'						</li>'
	    	+'					</ul>'
	    	+'				</td>'
	    	+'		         </tr>'
	    	+'		      </table>'
	    	+'			</div>'
	    	+'		</div>'
	    	+'	</div>';
	    $('#container').html(view);
		var customer_find_pw = $('#customer_find_pw');
		customer_find_pw.addClass('abb1_find_id_container');
		customer_find_pw.find('div:first-child').addClass('abb1_width_left');
		customer_find_pw.find('div:first-child').find('h2').addClass('abb1_color_bold_brown');
		var customer_find_pw_div = $('#customer_find_pw_div');
		customer_find_pw_div.addClass('abb1_find_id_div');
		customer_find_pw_div.find('div:first-child').addClass('abb1_find_id_inner_div');
		var customer_find_pw_table = $('#customer_find_pw_table');
		customer_find_pw_table.addClass('abb1_signup_form_control abb1_width_left');
		customer_find_pw_table.find('input').addClass('abb1_find_id_table_input');
		customer_find_pw_table.find('span:first-child').addClass('abb1_find_id_red_font');
		customer_find_pw_table.find('span:nth-child(2)').addClass('abb1_red_font');
		$('#customer_send_email').css('background','#efebdb');
		var customer_find_pw_btns = $('#customer_find_pw_btns');
		customer_find_pw_btns.css('text-align','center');
		customer_find_pw_btns.find('ul').addClass('abb1_page_ul_inline');
		customer_find_pw_btns.find('li:nth-child(1)').addClass('abb1_finc_id_cancel_btn');
		customer_find_pw_btns.find('li:nth-child(1)').find('input').addClass('btn abb1_btn_lg abb1_btn_verification');
		customer_find_pw_btns.find('li:nth-child(2)').addClass('abb1_page_li_inline');
		customer_find_pw_btns.find('li:nth-child(2)').find('input').addClass('btn abb1_btn_lg abb1_btn_verification');
	},
	customer_findpwsuccess : function(){
	    var ctx = abb1.session.getContextPath();
	    var view='<div id="customer_find_pw">'
	    	+'		<div> '
	    	+'			<h2><strong>회원 비밀번호 찾기</strong></h2>'
	    	+'		</div>'
	    	+'		<div id="customer_find_pw_result">'
	    	+'			<div>'
	    	+'				<table id="customer_find_pw_table">'
	    	+'		         <tr>'
	    	+'		         	<td><strong>비밀번호</strong></td>'
	    	+'		            <td colspan="2"><input type="text"></td>'
	    	+'		         </tr>'
	    	+'		         <tr>'
	    	+'		         	<td><strong>비밀번호 확인</strong></td>'
	    	+'		            <td colspan="2"><input type="text"></td>'
	    	+'		         </tr>'
	    	+'		         <tr>'
	    	+'		         	<td colspan="3" id="customer_find_pw_btns">'
	    	+'			        <ul>'
	    	+'					<li>'
	    	+'						<a href="'+ctx+'/customer/login"><input type="button" value="취소"  /></a>'
	    	+'					</li>'
	    	+'					<li>'
	    	+'						<a href="'+ctx+'/customer/login"><input type="button" value="확인"  /></a>'
	    	+'					</li>'
	    	+'					</ul>'
	    	+'					</td>'
	    	+'		         </tr>'
	    	+'		      </table>'
	    	+'			</div>'
	    	+'		</div>'
	    	+'	</div>';
	    $('#container').html(view);
		var customer_find_pw = $('#customer_find_pw');
		customer_find_pw.addClass('abb1_find_id_container');
		customer_find_pw.find('div:first-child').addClass('abb1_width_left');
		customer_find_pw.find('div:first-child').find('h2').addClass('abb1_color_bold_brown');
		var customer_find_pw_result = $('#customer_find_pw_result');
		customer_find_pw_result.addClass('abb1_find_id_div');
		customer_find_pw_result.find('div:first-child').addClass('abb1_find_id_inner_div');
		var customer_find_pw_table = $('#customer_find_pw_table');
		customer_find_pw_table.addClass('abb1_signup_form_control abb1_width_left');
		customer_find_pw_table.find('tr:nth-child(1)').find('input').addClass('abb1_find_pw_margin');
		var customer_find_pw_btns = $('#customer_find_pw_btns');
		customer_find_pw_btns.css('text-align','center');
		customer_find_pw_btns.find('ul').addClass('abb1_page_ul_inline');
		customer_find_pw_btns.find('li:nth-child(1)').addClass('abb1_finc_id_cancel_btn');
		customer_find_pw_btns.find('li:nth-child(1)').find('input').addClass('btn abb1_btn_lg abb1_btn_verification');
		customer_find_pw_btns.find('li:nth-child(2)').addClass('abb1_page_li_inline');
		customer_find_pw_btns.find('li:nth-child(2)').find('input').addClass('btn abb1_btn_lg abb1_btn_verification');
	},
	customer_login : function(){
		var ctx = abb1.session.getContextPath();
		var customer_login_form = $('#customer_login_form');
		customer_login_form.addClass('abb1_signup_form');
		customer_login_form.find('div:first-child').addClass('abb1_signup_settings');
		customer_login_form.find('h2').addClass('abb1_login_maintext');
		$('#login_table').addClass('abb1_signup_form_control');
		$('#login_btn').addClass('btn abb1_btn_lg abb1_login_btn');
		$('#find_table').addClass('abb1_find_table');
		$('#find_table').find('tr:nth-child(1)>td').css('padding','0 0 0 82px').css('text-align','left');
		$('#find_table').find('tr:nth-child(2)>td').addClass('abb1_a_findIdPw');
		var login_footer = $('#login_footer');
		login_footer.addClass('abb1_div_login_footer');
		login_footer.find('table').addClass('abb1_width_center_w800');
		login_footer.find('td:nth-child(1)').addClass('abb1_width_448');
		login_footer.find('td:nth-child(2)').addClass('abb1_width_200');
		login_footer.find('td:nth-child(2)').find('input').addClass('btn abb1_btn_lg abb1_btn_verification').css('height','60px').css('width','120px').css('font-size','15px');
		var authId=$.cookie('authId');
		if(authId!=undefined){
			$('#customer_id').val(authId);
			$('#remember').prop("checked",true);
		}
		$('#login_btn').on('click',function(e){
			if($.trim($('#customer_id').val())==''){
				alert('아이디를 입력하세요.');
				return;
			}else if($('#customer_pw').val()==''){
				alert('비밀번호를 입력하세요.');
				return;
			}
			else{
				alert('아이디:'+$('#customer_id').val()+'비밀번호:'+$('#customer_pw').val());
				var checked=$("#remember").prop("checked");
	            if(checked){
	                $.cookie('authId', $("#customer_id").val());
	            }else{
	                $.removeCookie("username");
	            }
				e.preventDefault();
				$.ajax({
					url: ctx+'/login',
					method: 'POST',
					data: JSON.stringify({
						id: $('#customer_id').val(),
						pw: $('#customer_pw').val()
					}),
					dataType: 'json',
					contentType: 'application/json',
					success: function(data){
						if(data.exist==='0'){
							alert('아이디가 존재하지 않습니다.');
						}else if(data.permission==='admin'){
							alert('관리자로 로그인 하셨습니다.');
							abb1.jquery.admin_login();
							$('#ul_gnb').html('<li><a id="login" href="'+ctx+'">로그아웃<span class="sr-only">(current)</span></a></li>'
									+'<li><a id="FAQ" href="'+ctx+'/board/main">고객센터<span class="sr-only">(current)</span></a></li>');
						}else if(data.permission==='customer'){
							alert('로그인 성공');
							abb1.cookie.setCookie('id',data.customer.id);
							abb1.cookie.setCookie('pw',data.customer.pw);
							abb1.cookie.setCookie('name',data.customer.name);
							abb1.cookie.setCookie('gender',data.customer.gender);
							abb1.cookie.setCookie('birth',data.customer.birth);
							abb1.cookie.setCookie('phone',data.customer.phone);
							abb1.cookie.setCookie('email',data.customer.email);
							abb1.cookie.setCookie('point',data.customer.point);
							abb1.cookie.setCookie('address',data.customer.address);
							$('#ul_gnb').html('<li><a id="login" href="'+ctx+'">로그아웃<span class="sr-only">(current)</span></a></li>'
										+'<li><a id="register" href="'+ctx+'/customer/mypage">마이시네마<span class="sr-only">(current)</span></a></li>'
										+'<li><a id="FAQ" href="'+ctx+'/board/main">고객센터<span class="sr-only">(current)</span></a></li>');
							abb1.jquery.customer_mypage();
						}else{
							alert('비밀번호를 다시 확인하세요.');
						}
						$('#loginForm').submit();
					},
					error: function(xhr,status,msg){
						alert('로그인 실패이유:'+msg)
					}
				});
			}
		});
	},
	customer_mypage : function(){
	    var ctx = abb1.session.getContextPath();
	    var view='<div id="mypage">'
	    	+'		<div> '
	    	+'			<h2><strong>마이시네마</strong></h2>'
	    	+'		</div>'
	    	+'		<div id="mypageGnb">'
	    	+'			<ul>'
	    	+'				<li>'
	    	+'					<a href="#">예매/구매내역</a>'
	    	+'				</li>'
	    	+'				<li>'
	    	+'					<a href="javascript:abb1.jquery.customer_mypageInfo()">나의 정보관리</a>'
	    	+'				</li>'
	    	+'			</ul> '
	    	+'		</div>'
	    	+'		<div id="mypage_reservation_content">'
	    	+'			<ul>'
	    	+'				<li>'
	    	+'					<a href="#"><strong>예매/구매내역</strong></a>'
	    	+'				</li>'
	    	+'				<li>'
	    	+'					<a href="javascript:abb1.jquery.customer_mypageCancel()">취소내역</a>'
	    	+'				</li>'
	    	+'			</ul>'
	    	+'			<div id="mypage_reservation">'
	    	+'				<table>'
	    	+'					<tr>'
	    	+'						<td rowspan="4"><span id="reservation_pic"><img src="'+ctx+'/resources/img/movie/movie_poster_6.png" width="60%" height="60%" alt="" /></span></td>'
	    	+'						<td><span id="reservation_no">예매번호(예매일)</span></td>'
	    	+'						<td colspan="2"><span>123456789</span>(2017-04-21)</td>'
	    	+'					</tr>'
	    	+'					<tr>'
	    	+'						<td>사용상태</td>'
	    	+'						<td>취소가능</td>'
	    	+'						<td><a id="detail" href="javascript:abb1.jquery.customer_mypageReservation()">상세<img src="'+ctx+'/resources/img/icon/downarrow.png" width="3%" height="3%" alt="" /></a></td>'
	    	+'					</tr>'
	    	+'					<tr>'
	    	+'						<td>예매내역</td>'
	    	+'						<td colspan="2">아빠는 딸</td>'
	    	+'					</tr>'
	    	+'					<tr>'
	    	+'						<td>총 결제 금액</td>'
	    	+'						<td colspan="2">22,000원</td>'
	    	+'					</tr>'
	    	+'				</table>'
	    	+'			</div>'
	    	+'		</div>'
	    	+'	</div>';
	    $('#container').html(view);
		var mypage = $('#mypage');
		mypage.addClass('abb1_find_id_container');
		mypage.find('div:first-child').addClass('abb1_width_left');
		mypage.find('div:first-child').find('h2').addClass('abb1_color_bold_brown');
		$('#mypageGnb').addClass('abb1_padding_top_20 abb1_width_left');
		mypage.find('div:nth-child(2)').find('ul').addClass('abb1_page_ul_inline');
		mypage.find('div:nth-child(2)').find('li').addClass('abb1_page_li_inline');
		mypage.find('div:nth-child(2)').find('li:nth-child(1)').find('a').addClass('abb1_mypage_select_btn');
		mypage.find('div:nth-child(2)').find('li:nth-child(2)').find('a').addClass('abb1_mypage_not_select_btn');
		var mypage_reservation_content = $('#mypage_reservation_content');
		mypage_reservation_content.addClass('abb1_mypage_reservation_content');
		mypage_reservation_content.find('ul').addClass('abb1_page_ul_inline abb1_mypage_margin');
		mypage_reservation_content.find('li').addClass('abb1_page_li_inline');
		mypage_reservation_content.find('li').find('a').addClass('abb1_detail_gnb_li');
		var mypage_reservation = $('#mypage_reservation');
		mypage_reservation.addClass('abb1_page_reservation');
		mypage_reservation.find('tr:first-child').addClass('abb1_margin_left_20');
		$('#reservation_pic').addClass('abb1_margin_left_20');
		$('#reservation_no').addClass('abb1_margin_right_20');
		mypage_reservation.find('tr:nth-child(2)').find('td:nth-child(3)').addClass('abb1_text_right');
	},
	customer_mypageCancel : function(){
	    var ctx = abb1.session.getContextPath();
	    var view='<div id="mypage">'
	    	+'		<div> '
	    	+'			<h2><strong>마이시네마</strong></h2>'
	    	+'		</div>'
	    	+'		<div id="mypageGnb">'
	    	+'			<ul>'
	    	+'				<li>'
	    	+'					<a href="#">예매/구매내역</a>'
	    	+'				</li>'
	    	+'				<li>'
	    	+'					<a href="javascript:abb1.jquery.customer_mypageInfo()">나의 정보관리</a>'
	    	+'				</li>'
	    	+'			</ul> '
	    	+'		</div>'
	    	+'		<div id="mypage_reservation_content">'
	    	+'			<ul>'
	    	+'				<li>'
	    	+'					<a href="javascript:abb1.jquery.customer_mypage()"><strong>예매/구매내역</strong></a>'
	    	+'				</li>'
	    	+'				<li>'
	    	+'					<a href="#">취소내역</a>'
	    	+'				</li>'
	    	+'			</ul>'
	    	+'			<div id="mypage_reservation">'
	    	+'				<table>'
	    	+'					<tr>'
	    	+'						<td rowspan="4"><span id="reservation_pic"><img src="'+ctx+'/resources/img/movie/movie_poster_6.png" width="60%" height="60%" alt="" /></span></td>'
	    	+'						<td><span id="reservation_no">예매번호(예매일)</span></td>'
	    	+'						<td colspan="2"><span>123456789</span>(2017-04-21)</td>'
	    	+'					</tr>'
	    	+'					<tr>'
	    	+'						<td>사용상태</td>'
	    	+'						<td>취소완료(2017-04-22)</td>'
	    	+'					</tr>'
	    	+'					<tr>'
	    	+'						<td>예매내역</td>'
	    	+'						<td colspan="2">아빠는 딸</td>'
	    	+'					<tr>'
	    	+'						<td>총 결제 금액</td>'
	    	+'						<td colspan="2">22,000원</td>'
	    	+'					</tr>'
	    	+'				</table>'
	    	+'			</div>'
	    	+'		</div>'
	    	+'	</div>';
	    $('#container').html(view);
		var mypage = $('#mypage');
		mypage.addClass('abb1_find_id_container');
		mypage.find('div:first-child').addClass('abb1_width_left');
		mypage.find('div:first-child').find('h2').addClass('abb1_color_bold_brown');
		$('#mypageGnb').addClass('abb1_padding_top_20 abb1_width_left');
		mypage.find('div:nth-child(2)').find('ul').addClass('abb1_page_ul_inline');
		mypage.find('div:nth-child(2)').find('li').addClass('abb1_page_li_inline');
		mypage.find('div:nth-child(2)').find('li:nth-child(1)').find('a').addClass('abb1_mypage_select_btn');
		mypage.find('div:nth-child(2)').find('li:nth-child(2)').find('a').addClass('abb1_mypage_not_select_btn');
		var mypage_reservation_content = $('#mypage_reservation_content');
		mypage_reservation_content.addClass('abb1_mypage_reservation_content');
		mypage_reservation_content.find('ul').addClass('abb1_page_ul_inline abb1_mypage_margin');
		mypage_reservation_content.find('li').addClass('abb1_page_li_inline');
		mypage_reservation_content.find('li').find('a').addClass('abb1_detail_gnb_li');
		var mypage_reservation = $('#mypage_reservation');
		mypage_reservation.addClass('abb1_page_reservation');
		mypage_reservation.find('tr:first-child').addClass('abb1_margin_left_20');
		$('#reservation_pic').addClass('abb1_margin_left_20');
		$('#reservation_no').addClass('abb1_margin_right_20');
	},
	customer_mypageInfo : function(){
	    var ctx = abb1.session.getContextPath();
	    var view='<div id="mypage">'
	    	+'		<div> '
	    	+'			<h2><strong>마이시네마</strong></h2>'
	    	+'		</div>'
	    	+'		<div id="mypageGnb">'
	    	+'			<ul>'
	    	+'				<li>'
	    	+'					<a href="javascript:abb1.jquery.customer_mypage()">예매/구매내역</a>'
	    	+'				</li>'
	    	+'				<li>'
	    	+'					<a href="#">나의 정보관리</a>'
	    	+'				</li>'
	    	+'			</ul> '
	    	+'		</div>'
	    	+'		<div id="mypage_reservation_content">'
	    	+'			<div>'
	    	+'				<ul>'
	    	+'					<li>'
	    	+'						<a href="javascript:abb1.jquery.customer_updateInfoChPw()"><input type="button" value="회원정보변경" /></a>'
	    	+'					</li>'
	    	+'					<li>'
	    	+'						<a href="javascript:abb1.jquery.customer_withdrawal()"><input type="button" value="회원탈퇴" /></a>'
	    	+'					</li>'
	    	+'				</ul>'
	    	+'			</div>'
	    	+'		</div>'
	    	+'	</div>';
	    $('#container').html(view);
		var mypage = $('#mypage');
		mypage.addClass('abb1_find_id_container');
		mypage.find('div:first-child').addClass('abb1_width_left');
		mypage.find('div:first-child').find('h2').addClass('abb1_color_bold_brown');
		$('#mypageGnb').addClass('abb1_padding_top_20 abb1_width_left');
		mypage.find('div:nth-child(2)').find('ul').addClass('abb1_page_ul_inline');
		mypage.find('div:nth-child(2)').find('li').addClass('abb1_page_li_inline');
		mypage.find('div:nth-child(2)').find('li:nth-child(1)').find('a').addClass('abb1_mypage_select_btn');
		mypage.find('div:nth-child(2)').find('li:nth-child(2)').find('a').addClass('abb1_mypage_not_select_btn');
		var mypage_reservation_content = $('#mypage_reservation_content');
		mypage_reservation_content.addClass('abb1_mypage_reservation_content');
		mypage_reservation_content.find('div:first-child').addClass('abb1_page_info abb1_width_center');
		mypage_reservation_content.find('ul').addClass('abb1_page_ul_inline');
		mypage_reservation_content.find('li:nth-child(1)').addClass('abb1_finc_id_cancel_btn');
		mypage_reservation_content.find('li:nth-child(2)').addClass('abb1_page_li_inline');
		mypage_reservation_content.find('input').addClass('btn abb1_btn_lg abb1_btn_verification');
	},
	customer_mypageReservation : function(){
	    var ctx = abb1.session.getContextPath();
	    var view='<div id="mypage">'
	    	+'		<div> '
	    	+'			<h2><strong>마이시네마</strong></h2>'
	    	+'		</div>'
	    	+'		<div id="mypageGnb">'
	    	+'			<ul>'
	    	+'				<li>'
	    	+'					<a href="#">예매/구매내역</a>'
	    	+'				</li>'
	    	+'				<li>'
	    	+'					<a href="'+ctx+'/customer/mypageInfo">나의 정보관리</a>'
	    	+'				</li>'
	    	+'			</ul> '
	    	+'		</div>'
	    	+'		<div id="mypage_reservation_content">'
	    	+'			<ul>'
	    	+'				<li>'
	    	+'					<a href="#"><strong>예매/구매내역</strong></a>'
	    	+'				</li>'
	    	+'				<li>'
	    	+'					<a href="javascript:abb1.jquery.customer_mypageCancel()">취소내역</a>'
	    	+'				</li>'
	    	+'			</ul>'
	    	+'			<div id="mypage_reservation">'
	    	+'				<table>'
	    	+'					<tr>'
	    	+'						<td rowspan="4"><span id="reservation_pic"><img src="'+ctx+'/resources/img/movie/movie_poster_6.png" width="60%" height="60%" alt="" /></span></td>'
	    	+'						<td><span id="reservation_no">예매번호(예매일)</span></td>'
	    	+'						<td colspan="2"><span>123456789</span>(2017-04-21)</td>'
	    	+'					</tr>'
	    	+'					<tr>'
	    	+'						<td>사용상태</td>'
	    	+'						<td>취소가능</td>'
	    	+'						<td><a href="javascript:abb1.jquery.customer_mypage()">닫기<img src="'+ctx+'/resources/img/icon/uparrow.png" width="3%" height="3%" alt="" /></a></td>'
	    	+'					</tr>'
	    	+'					<tr>'
	    	+'						<td>예매내역</td>'
	    	+'						<td colspan="2">아빠는 딸</td>'
	    	+'					</tr>'
	    	+'					<tr>'
	    	+'						<td>총 결제 금액</td>'
	    	+'						<td colspan="2">22,000원</td>'
	    	+'					</tr>'
	    	+'				</table>'
	    	+'				<div id="detail_reservation">'
	    	+'					<div>'
	    	+'						<h4>상세내용</h4>'
	    	+'					</div>'
	    	+'					<div>'
	    	+'					<table>'
	    	+'						<tr>'
	    	+'							<td rowspan="4"><span id="detail_reservation_pic"><img src="'+ctx+'/resources/img/movie/movie_poster_6.png" width="60%" height="60%" alt="" /></span></td>'
	    	+'							<td colspan="2"><h4><strong>아빠는 딸</strong></h4></td>'
	    	+'						</tr>'
	    	+'						<tr>'
	    	+'							<td>상영일</td>'
	    	+'							<td>2017-04-23 | 상영시간 13:50 ~ 15:55 | 상영관 가산디지털, 1관</td>'
	    	+'						</tr>'
	    	+'						<tr>'
	    	+'							<td>관람인원</td>'
	    	+'							<td>성인2 | 좌석 E10,E11</td>'
	    	+'						</tr>'
	    	+'						<tr>'
	    	+'							<td><span>주문금액</span></td>'
	    	+'							<td>22,000원</td>'
	    	+'						</tr>'
	    	+'					</table>'
	    	+'					</div>'
	    	+'					<div>'
	    	+'						<input id="reservation_cancel" type="button" value="결제취소"  />'
	    	+'					</div>'
	    	+'				</div>'
	    	+'			</div>'
	    	+'		</div>'
	    	+'	</div>';
	    $('#container').html(view);
		var mypage = $('#mypage');
		mypage.addClass('abb1_find_id_container');
		mypage.find('div:first-child').addClass('abb1_width_left');
		mypage.find('div:first-child').find('h2').addClass('abb1_color_bold_brown');
		$('#mypageGnb').addClass('abb1_width_left abb1_padding_top_20');
		mypage.find('div:nth-child(2)').find('ul').addClass('abb1_page_ul_inline');
		mypage.find('div:nth-child(2)').find('li').addClass('abb1_page_li_inline');
		mypage.find('div:nth-child(2)').find('li:nth-child(1)').find('a').addClass('abb1_mypage_select_btn');
		mypage.find('div:nth-child(2)').find('li:nth-child(2)').find('a').addClass('abb1_mypage_not_select_btn');
		var mypage_reservation_content = $('#mypage_reservation_content');
		mypage_reservation_content.addClass('abb1_mypage_reservation_content');
		mypage_reservation_content.find('ul').addClass('abb1_page_ul_inline abb1_mypage_margin');
		mypage_reservation_content.find('li').addClass('abb1_page_li_inline');
		mypage_reservation_content.find('li').find('a').addClass('abb1_detail_gnb_li');
		var mypage_reservation = $('#mypage_reservation');
		mypage_reservation.addClass('abb1_page_reservation');
		mypage_reservation.find('tr:first-child').addClass('abb1_margin_left_20');
		$('#reservation_pic').addClass('abb1_margin_left_20');
		$('#reservation_no').addClass('abb1_margin_right_20');
		mypage_reservation.find('tr:nth-child(2)').find('td:nth-child(3)').addClass('abb1_text_right');
		var detail_reservation = $('#detail_reservation');
		detail_reservation.addClass('abb1_detail_reservation');
		detail_reservation.find('div:first-child').addClass('abb1_mypage_reservation');
		detail_reservation.find('div:nth-child(2)').addClass('abb1_find_pw_margin');
		$('#detail_reservation_pic').addClass('abb1_margin_left_20');
		$('#reservation_cancel').addClass('btn abb1_btn_lg abb1_btn_verification').css('height','40px').css('width','100px').css('font-size','15px');
	},
	customer_signup : function(){
	    var ctx = abb1.session.getContextPath();
	    var view='<div id="signUp">'
	    	+'	    <div>'
	    	+'	      <h2>회원가입</h2>'
	    	+'	      <div id="signup_tables">'
	    	+'	         <table>'
	    	+'	            <tr>'
	    	+'	               <td><input id="id" name="id" type="text" placeholder="아이디"></td>'
	    	+'	            </tr>'
	    	+'	            <tr>'
	    	+'	               <td><input id="pw" name="pw" type="password" placeholder="비밀번호"></td>'
	    	+'	            </tr>'
	    	+'	            <tr>'
	    	+'	               <td><input type="password" placeholder="비밀번호 확인"></td>'
	    	+'	            </tr>'
	    	+'	         </table>'
	    	+'	         <table>'
	    	+'	            <tr>'
	    	+'	               <td colspan="3"><input id="name" name="name" type="text" placeholder="이름"></td>'
	    	+'	            </tr>'
	    	+'	            <tr>'
	    	+'	               <td><input id="year" name="year" type="text" placeholder="생년"></td>'
	    	+'	            <td>'
	    	+'	               <select id="month" name="month">'
	    	+'	                  <option value="" selected>월</option>'
	    	+'	                  <option value="1">1</option>'
	    	+'	                  <option value="2">2</option>'
	    	+'	                  <option value="3">3</option>'
	    	+'	                  <option value="4">4</option>'
	    	+'	                  <option value="5">5</option>'
	    	+'	                  <option value="6">6</option>'
	    	+'	                  <option value="7">7</option>'
	    	+'	                  <option value="8">8</option>'
	    	+'	                  <option value="9">9</option>'
	    	+'	                  <option value="10">10</option>'
	    	+'	                  <option value="11">11</option>'
	    	+'	                  <option value="12">12</option>'
	    	+'	               </select>'
	    	+'	            </td>'
	    	+'	            <td><input id="date" name="date" type="text" placeholder="일"></td>'
	    	+'	         </tr>'
	    	+'	         <tr>'
	    	+'	            <td><input id="phone1" name="phone1" type="text" placeholder="010"></td>'
	    	+'	            <td><input id="phone2" name="phone2" type="text"></td>'
	    	+'	            <td><input id="phone3" name="phone3" type="text"></td>'
	    	+'	         </tr>'
	    	+'	      </table>'
	    	+'	      <table>'
	    	+'	         <tr>'
	    	+'	            <td><div><input type="radio" id="man" name="gender" value="male"/><label id="manLb" for="man">남자</label></div></td>'
	    	+'	            <td><div><input type="radio" id="woman" name="gender" value="female"/><label id="womanLb" for="woman">여자</label></div></td>'
	    	+'	         </tr>'
	    	+'	      </table>'
	    	+'	      <table>'
	    	+'	      	<tr>'
	    	+'	            <td><input type="text" placeholder="주소" ></td>'
	    	+'	            <td>'
	    	+'	               <input id="find_postcode" type="button" value="우편번호 검색" type="submit">'
	    	+'	            </td>'
	    	+'	         </tr>'
	    	+'	      	<tr>'
	    	+'              <td colspan="2"><input type="text" placeholder="주소"></td>'
	    	+'	        </tr>'
	    	+'	      	<tr>'
	    	+'              <td colspan="2"><input type="text" placeholder="상세주소"></td>'
	    	+'	        </tr>'
	    	+'	      </table>'
	    	+'	      <table>'
	    	+'	         <tr>'
	    	+'	            <td colspan="2"><input id="email" name="email" type="text" placeholder="이메일" ></td>'
	    	+'	            <td>'
	    	+'	               <input id="send_code" type="button" value="인증번호 발송" type="submit">'
	    	+'	            </td>'
	    	+'	         </tr>'
	    	+'	         <tr>'
	    	+'	            <td colspan="3"><input type="text" placeholder="인증번호 입력"></td>'
	    	+'	         </tr>'
	    	+'	      </table>'
	    	+'	      	<a href="javascript:abb1.jquery.customer_signupsuccess()"><input id="signup_finish" type="button" value="가입하기"/></a>'
	    	+'	      </div>'
	    	+'	   </div> '  
	    	+'	</div>';
	    $('#container').html(view);
		var signUp = $('#signUp');
		signUp.addClass('abb1_signup_form');
		signUp.find('div:first-child').addClass('abb1_signup_settings');
		signUp.find('h2:first-child').addClass('abb1_signup_maintext');
		var signup_tables = $('#signup_tables');
		signup_tables.find('table').addClass('abb1_signup_form_control');
		signup_tables.find('select').addClass('btn btn_default');
		signup_tables.find('table').find('div').addClass('abb1_sigunup_form_gender');
		$('#find_postcode').addClass('btn abb1_btn_lg abb1_btn_verification');
		$('#send_code').addClass('btn abb1_btn_lg abb1_btn_verification');
		$('#signup_finish').css('background','#453d3f').css('color','#efebdb').css('font-size','15px').addClass('btn abb1_btn_lg abb1_btn_verification abb1_btn_confirm');
	},
	customer_signupsuccess : function(){
	    var ctx = abb1.session.getContextPath();
	    var view='<div id="signupSuccess">'
	    	+'		<div> '
	    	+'			<h2><strong>가입완료</strong></h2>'
	    	+'		</div>'
	    	+'		<div id="signup_success">'
	    	+'			<div>'
	    	+'				<table>'
	    	+'		         <tr>'
	    	+'		         	<td>'
	    	+'			         	<h3><strong>염혜선</strong><span>님 환영합니다!</span></h3>'
	    	+'		         	</td>'
	    	+'		         </tr>'
	    	+'		         <tr>'
	    	+'			         <td>'
	    	+'			         <ul>'
	    	+'						 <li>'
	    	+'							<a href="'+ctx+'"><input type="button" value="확인"/></a>'
	    	+'						 </li>'
	    	+'					 </ul>'
	    	+'					 </td>'
	    	+'		         </tr>'
	    	+'		      	</table>'
	    	+'			</div>'
	    	+'		</div>'
	    	+'	</div>';
	    $('#container').html(view);
		var container = $('#container');
		$('#signupSuccess').addClass('abb1_find_id_container');
		container.find('div:first-child').find('div:first-child').addClass('abb1_width_left');
		container.find('h2').addClass('abb1_color_bold_brown');
		var signup_success = $('#signup_success');
		signup_success.addClass('abb1_signup_success_div');
		signup_success.find('div:first-child').addClass('abb1_page_info abb1_width_center');
		signup_success.find('table').addClass('abb1_signup_form_control abb1_width_left');
		signup_success.find('span').addClass('abb1_color_bold_gray');
		signup_success.find('td:nth-child(2)').addClass('abb1_padding_left_163');
		signup_success.find('ul').addClass('abb1_page_ul_inline');
		signup_success.find('li').addClass('abb1_page_li_inline');
		signup_success.find('li').find('input').addClass('btn abb1_btn_lg abb1_btn_verification').css('height','50px').css('width','150px').css('font-size','17px').css('background','#453d3f').css('color','#efebdb');
	},
	customer_updateInfo : function(){
	    var ctx = abb1.session.getContextPath();
	    var view='<div id="signUp">'
	    	+'	    <div>'
	    	+'	      <h2><strong>회원정보변경</strong></h2>'
	    	+'			<div id="updateInfo">'
	    	+'				<table>'
	    	+'					<tr>'
	    	+'						<td><strong>아이디</strong></td>'
	    	+'						<td id="id">yheisun</td>'
	    	+'					</tr>'
	    	+'					<tr>'
	    	+'						<td><strong>비밀번호</strong></td>'
	    	+'						<td><input id="pw" type="password" placeholder="비밀번호"><input type="password" placeholder="비밀번호 확인"></td>'
	    	+'					</tr>'
	    	+'					<tr>'
	    	+'						<td><strong>성명</strong></td>'
	    	+'						<td id="name">염혜선</td>'
	    	+'					</tr>'
	    	+'					<tr>'
	    	+'						<td><strong>생년</strong></td>'
	    	+'						<td id="birth">1992년 10월 15일</td>'
	    	+'					</tr>'
	    	+'					<tr>'
	    	+'						<td><strong>성별</strong></td>'
	    	+'						<td id="gender">여자</td>'
	    	+'					</tr>'
	    	+'					<tr>'
	    	+'						<td><strong>이메일</strong></td>'
	    	+'						<td id="email">yheisun@gmail.com</td>'
	    	+'					</tr>'
	    	+'					<tr>'
	    	+'				</table>'
	    	+'				<table>'
	    	+'					<tr>'
	    	+'						<td><input id="phone1" type="text" placeholder="010"></td>'
	    	+'						<td><input id="phone2" type="text"></td>'
	    	+'						<td><input id="phone3" type="text"></td>'
	    	+'					</tr>'
	    	+'				</table>'
	    	+'				<table>'
	    	+'					<tr>'
	    	+'						<td><input type="text" placeholder="주소"></td>'
	    	+'						<td><input id="find_postcode" type="button" value="우편번호 검색"></td>'
	    	+'					</tr>'
	    	+'					<tr>'
	    	+'						<td colspan="2"><input type="text" placeholder="주소"></td>'
	    	+'					</tr>'
	    	+'					<tr>'
	    	+'						<td colspan="2"><input type="text" placeholder="상세주소"></td>'
	    	+'					</tr>'
	    	+'				</table>'
	    	+'				<ul>'
	    	+'					<li>'
	    	+'						<a href="javascript:abb1.jquery.customer_mypageInfo()"><input id="cancel" type="button" value="취소"/></a>'
	    	+'					</li>'
	    	+'					<li>'
	    	+'						<a href="javascript:abb1.jquery.customer_mypageInfo()"><input id="confirm" type="button" value="확인"/></a>'
	    	+'					</li>'
	    	+'				</ul>'
	    	+'			</div>'
	    	+'		</div>'
	    	+'	</div>';
	    $('#container').html(view);
	    var signUp = $('#signUp');
	    signUp.addClass('abb1_signup_form');
	    signUp.find('div:first-child').addClass('abb1_signup_settings');
	    signUp.find('h2:first-child').addClass('abb1_signup_maintext');
	    var updateInfo = $('#updateInfo');
	    updateInfo.find('table').addClass('abb1_signup_form_control').css('text-align','left');
	    updateInfo.find('table:nth-child(2)').find('td:first-child').addClass('abb1_height_55');
	    updateInfo.find('table:nth-child(3)').find('td').addClass('abb1_height_0');
	    $('#find_postcode').addClass('btn abb1_btn_lg abb1_btn_verification');
	    updateInfo.find('ul').addClass('abb1_page_ul_inline abb1_updateinfo_margin');
	    updateInfo.find('li:first-child').addClass('abb1_finc_id_cancel_btn');
	    updateInfo.find('li:nth-child(2)').addClass('abb1_page_li_inline');
	    $('#cancel').addClass('btn abb1_btn_lg abb1_btn_verification').css('height','50px').css('width','150px').css('font-size','17px').css('color','#efebdb').css('background','#453d3f');
	    $('#confirm').addClass('btn abb1_btn_lg abb1_btn_verification').css('height','50px').css('width','150px').css('font-size','17px').css('color','#efebdb').css('background','#453d3f');
	    $('#id').text(abb1.cookie.getCookie('id'));
	    $('#name').text(abb1.cookie.getCookie('name'));
	    var cookieBirth=abb1.cookie.getCookie('birth');
	    var birth=cookieBirth.substring(0,4)+'년'+cookieBirth.substring(4,6)+'월'+cookieBirth.substring(6,8)+'일';
	    $('#birth').text(birth);
	    $('#gender').text(abb1.cookie.getCookie('gender')==='M'?'남자':'여자');
	},
	customer_updateInfoChPw : function(){
	    var ctx = abb1.session.getContextPath();
	    var view='<div id="updateInfoChPw">'
	    	+'	<div> '
	    	+'			<h2><strong>회원정보변경</strong></h2>'
	    	+'		</div>'
	    	+'		<div id="signup_success">'
	    	+'			<div>'
	    	+'				<table>'
	    	+'		         <tr>'
	    	+'		         	<td><strong>아이디</strong></td>'
	    	+'		            <td id="id">yheisun</td>'
	    	+'		         </tr>'
	    	+'		         <tr>'
	    	+'		         	<td><strong>비밀번호</strong></td>'
	    	+'		            <td><input id="pw" type="password"></td>'
	    	+'		         </tr>'
	    	+'		         <tr>'
	    	+'		         	<td colspan="2">'
	    	+'		         	<ul>'
	    	+'						<li>'
	    	+'							<a href="javascript:abb1.jquery.customer_mypageInfo()"><input type="button" value="취소"  /></a>'
	    	+'						</li>'
	    	+'						<li class="abb1_page_li_inline">'
	    	+'							<a href="#"><input id="go_update_info" type="button" value="확인"  /></a>'
	    	+'						</li>'
	    	+'					</ul>'
	    	+'					</td>'
	    	+'		         </tr>'
	    	+'		      </table>'
	    	+'			</div>'
	    	+'		</div>'
	    	+'	</div>';
	    $('#container').html(view);
	    var container = $('#container');
	    $('#updateInfoChPw').addClass('abb1_bgcolor_beige abb1_padding_top_20 abb1_padding_bottom_20');
	    container.find('td').addClass('abb1_text_left');
	    container.find('div:nth-child(1)').find('div:first-child').addClass('abb1_width_left');
	    container.find('h2').addClass('abb1_color_bold_brown');
	    var signup_success = $('#signup_success');
	    signup_success.addClass('abb1_signup_success_div');
	    signup_success.find('div:first-child').addClass('abb1_page_info abb1_width_left');
	    signup_success.find('table').addClass('abb1_signup_form_control abb1_width_left');
	    $('#customer_password').addClass('abb1_find_id_table_input');
	    signup_success.find('table').find('tr:nth-child(3)').css('text-align','center');
	    signup_success.find('table').find('tr:nth-child(3)').find('td').addClass('abb1_padding_left_73');
	    signup_success.find('ul').addClass('abb1_page_ul_inline');
	    signup_success.find('li:nth-child(1)').addClass('abb1_finc_id_cancel_btn');
	    signup_success.find('li:nth-child(2)').addClass('abb1_page_li_inline');
	    signup_success.find('li').find('input').addClass('btn abb1_btn_lg abb1_btn_verification');
	    $('#id').text(abb1.cookie.getCookie('id'));
	    $('#go_update_info').on('click',function(){
		   if($('#pw').val()===abb1.cookie.getCookie('pw')){
		    	abb1.jquery.customer_updateInfo();
		    }else{
		    	alert('비밀번호를 다시 확인하세요.');
		    	return;
		    }
	   });
	},
	customer_withdrawal : function(){
	    var ctx = abb1.session.getContextPath();
	    var view='<div id="mypageWithdrawal">'
	    	+'		<div> '
	    	+'			<h2><strong>회원탈퇴</strong></h2>'
	    	+'		</div>'
	    	+'		<div id="withdrawal">'
	    	+'			<div>'
	    	+'				<table>'
	    	+'		         <tr>'
	    	+'		         	 <td><h3>지금까지 이용해주셔서 감사드립니다!</h3></td>'
	    	+'		         </tr>'
	    	+'		         <tr>'
	    	+'			         <td>'
	    	+'				        <ul>'
	    	+'						<li>'
	    	+'							<a href="javascript:abb1.jquery.customer_mypageInfo()"><input type="button" value="취소"  /></a>'
	    	+'						</li>'
	    	+'						<li>'
	    	+'							<a href="'+ctx+'"><input id="withdrawal_btn" type="button" value="확인"  /></a>'
	    	+'						</li>'
	    	+'						</ul>'
	    	+'					</td>'
	    	+'		         </tr>'
	    	+'		      </table>'
	    	+'			</div>'
	    	+'		</div>'
	    	+'	</div>';
	    $('#container').html(view);
	    var container = $('#container');
	    $('#mypageWithdrawal').addClass('abb1_find_id_container');
	    container.find('div:first-child').find('div:first-child').addClass('abb1_width_left');
	    container.find('h2').addClass('abb1_color_bold_brown'); 
	    var withdrawal = $('#withdrawal');
	    withdrawal.addClass('abb1_signup_success_div');
	    withdrawal.find('div:first-child').addClass('abb1_page_info abb1_width_center');
	    withdrawal.find('table').addClass('abb1_signup_form_control abb1_width_left');
	    withdrawal.find('table').find('tr:first-child').css('text-align','center');
	    withdrawal.find('table').find('tr:nth-child(2)').find('td').addClass('abb1_padding_left_73');
	    withdrawal.find('ul').addClass('abb1_page_ul_inline');
	    withdrawal.find('li:nth-child(1)').addClass('abb1_finc_id_cancel_btn');
	    withdrawal.find('li:nth-child(2)').addClass('abb1_page_li_inline');
	    withdrawal.find('ul').find('input').addClass('btn abb1_btn_lg abb1_btn_verification');
	    $('#withdrawal_btn').on('click',function(e){
	    	e.preventDefault();
	    	$.ajax({
	    		url: ctx+'/withdrawal',
	    		method: 'POST',
	    		data:JSON.springify({
	    			id: abb1.cookie.getCookie('id')
	    		}),
	    		dataType:'application/json',
	    		success:function(data){
	    			alert(탈퇴성공);
	    		},
	    		error:function(xhr,status,msg){
	    			alert('탈퇴 실패 이유:'+msg);
	    		}
	    	});
	    });
	},
	movie_detail : function(seq){
	       var ctx = abb1.session.getContextPath();
	       $.ajax({
	      url: ctx+"/get/movie",
	      method: "POST",
	      data: JSON.stringify({
	          seq : seq
	      }),
	      dataType: "json",
	      contentType: "application/json",
	      success : function(data){
	         alert(data.title);
	      },
	      error : function(xhr,status,msg){
	          alert(msg);
	      }
	       });
	       var view = '<div id="movieDetail">'
	      +'      <div id="movieTrailer">'
	      +'         <img src="'+ctx+'/resources/img/movie/movie_trailer_2.PNG" alt="분노의 질주 : 더 익스트림" />'
	      +'      </div>'
	      +'      <div id="movieInfo">'
	      +'         <div>'
	      +'         <ul>'
	      +'         <li>'
	      +'            <table>'
	      +'               <tr>'
	      +'                  <td>'
	      +'                     <img src="'+ctx+'/resources/img/movie/movie_poster_2.png" width="228px" height="333.99px" alt="...">'
	      +'                  </td>'
	      +'               </tr>'
	      +'               <tr>'
	      +'                  <td></td>'
	      +'               </tr>'
	      +'               <tr>'
	      +'                  <td>'
	      +'                     <a href="#">예매하기</a>'
	      +'                  </td>'
	      +'               </tr>'
	      +'            </table>'
	      +'         </li>'
	      +'         <li>'
	      +'            <table>'
	      +'               <tr>'
	      +'                  <td colspan="4"><h3><strong>분노의 질주: 더 익스트림</strong></h3></td>'
	      +'               </tr>'
	      +'               <tr>'
	      +'                  <td><strong>예매율</strong></td>'
	      +'                  <td><span>4</span> <span>위, 13.2%</span></td>'
	      +'                  <td><strong>관람평점</strong></td>'
	      +'                  <td>9.0</td>'
	      +'               </tr>'
	      +'               <tr>'
	      +'                  <td><strong>등급</strong></td>'
	      +'                  <td colspan="3">[국내] 15세이상관람가</td>'
	      +'               </tr>'
	      +'               <tr>'
	      +'                  <td><strong>개봉일</strong></td>'
	      +'                  <td colspan="3">2017.04.12</td>'
	      +'               </tr>'
	      +'               <tr>'
	      +'                  <td><strong>기본정보</strong></td>'
	      +'                  <td colspan="3">스릴러/범죄/공포 미국(136분)</td>'
	      +'               </tr>'
	      +'            </table>'
	      +'         </li>'
	      +'      </ul>'
	      +'      </div>'
	      +'      <div>'
	      +'         <table>'
	      +'            <tr>'
	      +'               <td colspan="4"><h3><strong>시놉시스</strong></h3></td>'
	      +'            </tr>'
	      +'            <tr>'
	      +'               <td colspan="4">'
	      +'               최강의 리더 최악의 적이 되다!<br><br>'
	      +'               마침내 평화로운 일상으로 돌아온 리더 ‘도미닉’(빈 디젤)과 멤버들.'
	      +'               그러던 어느 날, 멤버들은 도미닉이 첨단 테러 조직의 리더 ‘사이퍼’(샤를리즈 테론)와 함께 사상 최악의 테러를 계획하고 있음을 알게 된다. 리더의 배신으로 위기에 놓인 멤버들은 한때 팀을 모두 전멸시키려 했던 ‘데카드 쇼’(제이슨 스타뎀)까지 영입해 최악의 적이 되어버린 도미닉과의 피할 수 없는 대결을 앞두게 되는데…'
	      +'               </td>'
	      +'            </tr>'
	      +'         </table>'
	      +'      </div>'
	      +'      <div id="donutchart"></div>'
	      +'      </div>'
	      +'      <div>'
	      +'         <div>'
	      +'            <h3>감독 및 출연</h3>'
	      +'         </div>'
	      +'         <div>'
	      +'            <ul>'
	      +'               <li><img src="'+ctx+'/resources/img/movieProfile/movie_0_pic_director.jpg" alt="" />'
	      +'                  <br><br>F. 게리 그레이<br>감독'
	      +'               </li>'
	      +'               <li><img src="'+ctx+'/resources/img/movieProfile/movie_0_pic_actor1.jpg" alt="" />'
	      +'                  <br><br>빈 디젤<br>배우'
	      +'               </li>'
	      +'               <li><img src="'+ctx+'/resources/img/movieProfile/movie_0_pic_actor2.jpg" alt="" />'
	      +'                  <br><br>드웨인 존슨<br>배우'
	      +'               </li>'
	      +'               <li><img src="'+ctx+'/resources/img/movieProfile/movie_0_pic_actor3.jpg" alt="" />'
	      +'                  <br><br>샤를리즈 테론<br>배우'
	      +'               </li>'
	      +'               <li><img src="'+ctx+'/resources/img/movieProfile/movie_0_pic_actor4.jpg" alt="" />'
	      +'                  <br><br>제이슨 스타뎀<br>배우'
	      +'               </li>'
	      +'            </ul>'
	      +'         </div>'
	      +'      </div>'
	      +'      <div>'
	      +'         <div>'
	      +'            <table>'
	      +'               <tr>'
	      +'                  <td colspan="4"><h3>평점 및 영화 리뷰</h3></td>'
	      +'                  <td colspan="2">(한글 150자/영문300자)</td>'
	      +'               </tr>'
	      +'               <tr>'
	      +'                  <td>'
	      +'                     <span><strong>평점</strong></span>'
	      +'                     <div>'
	      +'                        <span>'
	      +'                             <span>'
	      +'                               <input type="radio" name="star-input" id="p1" value="1"><label for="p1">1</label>'
	      +'                               <input type="radio" name="star-input" id="p2" value="2"><label for="p2">2</label>'
	      +'                               <input type="radio" name="star-input" id="p3" value="3"><label for="p3">3</label>'
	      +'                               <input type="radio" name="star-input" id="p4" value="4"><label for="p4">4</label>'
	      +'                               <input type="radio" name="star-input" id="p5" value="5"><label for="p5">5</label>'
	      +'                               <input type="radio" name="star-input" id="p6" value="6"><label for="p6">6</label>'
	      +'                               <input type="radio" name="star-input" id="p7" value="7"><label for="p7">7</label>'
	      +'                               <input type="radio" name="star-input" id="p8" value="8"><label for="p8">8</label>'
	      +'                               <input type="radio" name="star-input" id="p9" value="9"><label for="p9">9</label>'
	      +'                               <input type="radio" name="star-input" id="p10" value="10"><label for="p10">10</label>'
	      +'                           </span><br>'
	      +'                             <output for="star-input"><b>0</b><strong>점</strong></output>'
	      +'                        </span>'
	      +'                     </div>'
	      +'                  </td>'
	      +'                  <td colspan="4">'
	      +'                     <textarea name="" id="" cols="100" rows="5" placeholder="영화 리뷰는 로그인 후에 작성하실 수 있습니다."></textarea>'
	      +'                  </td>'
	      +'                  <td><a href=""><span>입력</span></a></td>'
	      +'               </tr>'
	      +'            </table>'
	      +'         </div>'
	      +'         <div>'
	      +'            <table id="review">'
	      +'               <tr>'
	      +'                  <td colspan="3"><strong>평점: 9</strong></td>'
	      +'               </tr>'
	      +'               <tr>'
	      +'                  <td colspan="2">최고의 영화. 추천합니다.</td>'
	      +'                  <td class="abb1_text_right">염*선</td>'
	      +'               </tr>'
	      +'               <tr>'
	      +'                  <td colspan="3">2017-04-25</td>'
	      +'               </tr>'
	      +'            </table>'
	      +'            <table id="review">'
	      +'               <tr>'
	      +'                  <td colspan="3"><strong>평점: 9</strong></td>'
	      +'               </tr>'
	      +'               <tr>'
	      +'                  <td colspan="2">최고의 영화. 추천합니다.</td>'
	      +'                  <td>염*선</td>'
	      +'               </tr>'
	      +'               <tr>'
	      +'                  <td colspan="3">2017-04-25</td>'
	      +'               </tr>'
	      +'            </table>'
	      +'            <table id="review">'
	      +'               <tr>'
	      +'                  <td colspan="3"><strong>평점: 9</strong></td>'
	      +'               </tr>'
	      +'               <tr>'
	      +'                  <td colspan="2">최고의 영화. 추천합니다.</td>'
	      +'                  <td>염*선</td>'
	      +'               </tr>'
	      +'               <tr>'
	      +'                  <td colspan="3">2017-04-25</td>'
	      +'               </tr>'
	      +'            </table>'
	      +'         </div>'
	      +'      </div>'
	      +'   </div>';
	      $('#container').html(view);
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
	         /*-- Google API Loading --*/
	         abb1.api.google(30.5, 69.5);
	         abb1.util.starRating();
	      },
	      movie_main : function(){
	          var ctx = abb1.session.getContextPath();
	          var view = '   <div id="movieMain">'
	         +'      <div>'
	         +'        <ul>'
	         +'          <li><a href="#">현재상영작</a></li>'
	         +'          <li><a href="#">상영예정작</a></li>'
	         +'        </ul>'
	         +'      </div>'
	         +'      <div id="order">'
	         +'         <ul>'
	         +'            <li><a id="order_by_rate" href="#">예매순</a></li>'
	         +'            <li><a id="order_by_gpa" href="#">평점순</a></li>'
	         +'         </ul>'
	         +'      </div>'
	         +'      <div>'
	         +'         <div id="movieList"></div>'
	         +'         <div id="movieList2"></div>'
	         +'      </div>'
	         +'   </div>';
	          $('#container').html(view);
	       }
}
/************************
 * Controller
 * abb1.controller
 * 
 ***********************/
abb1.controller = (function(){})();