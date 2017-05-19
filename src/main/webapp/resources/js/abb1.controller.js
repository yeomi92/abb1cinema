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
	var onCreate = function(context){
		$.getScript(context+'/resources/js/abb1.domain.js',function(){
			$.extend(new Session(context));
			setContentView();
		});
	};
	var setContentView = function(){
		abb1.jquery.onCreate();
	};
	return {
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
	},
	checkPhone : function(strValue){
		var regExp = /[0-9]$/;
		if(strValue.lenght == 0)
		{return false;}
		if (!strValue.match(regExp))
		{return false;}
		return true;
	},
	checkEmail : function(strValue){
		var regExp = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;
		if(strValue.lenght == 0)
		{return false;}
		if (!strValue.match(regExp))
		{return false;}
		return true;
	},
	checkId : function(strValue){
		//5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.
		var regExp = /[_0-9a-z-]{5,15}$/;
		if(strValue.lenght == 0)
		{return false;}
		if (!strValue.match(regExp))
		{return false;}
		return true;
	},
	checkPw : function(strValue){
		//5~15자 영문 대 소문자, 숫자, 특수문자를 사용하세요.
		var regExp = /[0-9a-zA-Z!"#$%&'()*+,./:;<=>?@\^_`{|}~-]{5,15}$/;
		if(strValue.lenght == 0)
		{return false;}
		if (!strValue.match(regExp))
		{return false;}
		return true;
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
		removeCookie : function(name) {
		    abb1.cookie.setCookie(name, "", -1);
		}
}

/*========= abb1-jquery =========
@AUTHOR : Junyoung Park
@CREATE DATE : 2017-05-06
@UPDATE DATE : 2017-05-06
@DESC : jQuery for view
=================================*/
abb1.jquery =(function() {
	 var service, view, yeom;
	 var onCreate = function(){
		  service=$.javascript()+'/abb1.service.js';
		  view=$.javascript()+'/abb1.view.js';
		  yeom=$.javascript()+'/yeom.js';
		  setContentView();
	 };
	   var setContentView = function(){
		   $.when(
				$.getScript(service),
				$.getScript(view),
				$.getScript(yeom),
				$.Deferred(function(deferred){
					$( deferred.resolve );
		        })
		   ).done(function(){
		        index();
		        customerLogin();
		   });
	   };
	   
    var header = function(){
    	//$('header').html(headerView());
    	$('#login').attr('id','logout').text('로그아웃');
		$('#register').attr('id','mycinema').text('마이시네마');
		$('#FAQ').attr('id','FAQ_login');
		gnb();
    	$('#logout').on('click',function(){
    		alert('로그아웃 버튼 클릭');
    		abb1.cookie.removeCookie('id');
			abb1.cookie.removeCookie('pw');
			abb1.cookie.removeCookie('name');
			abb1.cookie.removeCookie('gender');
			abb1.cookie.removeCookie('birth');
			abb1.cookie.removeCookie('phone');
			abb1.cookie.removeCookie('email');
			abb1.cookie.removeCookie('point');
			abb1.cookie.removeCookie('address');
			alert(abb1.cookie.getCookie('name'));
			$('#logout').attr('id','login').text('로그인').attr('href',$.context());
			$('#mycinema').attr('id','register').text('회원가입');
			$('#FAQ_login').attr('id','FAQ');
    	});
    }
	   
    var gnb = function(){
    	$('#gnb').html(gnbView());
    	var gnb = $('#gnb');
    	gnb.find('div:first-child').addClass('abb1_width_100 abb1_text_center')
    	gnb.find('div:first-child').find('div:first-child').addClass('abb1_gnb_tab abb1_width_100 abb1_text_center');
    	gnb.find('ul').addClass('abb1_gnb');
    	gnb.find('span:first-child').addClass('abb1_tooltiptext');
    	gnb.find('span:nth-child(2)').addClass('abb1_tooltiptext');
    	gnb.find('span:nth-child(3)').addClass('abb1_tooltiptext');
    	$('#movie').on('click',function(){
    		alert('영화클릭');
    		customer_mypage();
    	});
    };
    
	var index = function(){
		gnb();
		footer();
        var john = $.context()+'/resources/js/john.js';
        $.ajax({
           url: $.context()+"/get/movieRank",
           method: "POST",
           data: JSON.stringify({}),
           dataType: "json",
           contentType: "application/json",
           success : function(data){
              $.getScript(john, function(){
                  index_movie_rank(data);
                  $.each(data.movie_list, function(i,movie){
                    if(movie.trailer_main==1){
                        play_youtube('trailer', movie.trailer_url);
                    }
                  });
                  show_slide();
                  var add = 0;
                  slide_click(add);
                  index_css();
              });
           },
           error : function(xhr,status,msg){
              alert(msg);
           }
       });
     };
     
    var footer = function(){
        $('#footer').find('div:first-child').css('padding-top','40px').css('background','#f9f6ec');
    };
    
	var adminLogin= function(){
	    $('#container').html(adminLoginView());
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
	};
	
	var customer_findid = function(){
	    $('#container').html(customerFindIdView());
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
	};
	var customer_findidsuccess = function(){
	    $('#container').html(customerFindIdSuccessView());
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
	};
	var customer_findpw = function(){
	    $('#container').html(customerFindpPwView());
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
	};
	var customer_findpwsuccess = function(){
	    $('#container').html(customerFindPwSuccessView());
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
	};
	var customerLogin=function(){
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
			alert($('#a_login').attr('href'));
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
					url: $.context()+'/login',
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
							$('#ul_gnb').html('<li><a id="login" href="'+$.context()+'">로그아웃<span class="sr-only">(current)</span></a></li>'
									+'<li><a id="FAQ" href="'+$.context()+'/board/main">고객센터<span class="sr-only">(current)</span></a></li>');
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
							header();
							customer_mypage();
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
	};
	var customer_mypage = function(){
		//header();
	    var ctx = abb1.session.getContextPath();
	    $('#container').html(customerMypageView());
	    
		$.ajax({
			url: ctx+'/getReservation',
			method: 'POST',
			data: JSON.stringify({
				id: abb1.cookie.getCookie('id')
			}),
			dataType: 'json',
			contentType: 'application/json',
			success: function(data){
				var info_list=[];
			
				$.each(data.infoList, function(i, info){
		             var o = {
		            		 cusPoint : info.cusPoint,
				             resId : info.resId,
				             resRegDate : info.resRegDate,
				             resCanceled : info.resCanceled,
				             resPrice : info.resPrice,
				             movTitle : info.movTitle,
				             movPicMain : info.movPicMain,
				             shoStartTime : info.shoStartTime,
				             shoEndTime : info.shoEndTime,
				             shoShowDate : info.shoShowDate,
				             mulName : info.mulName,
				             theName : info.theName,
				             resHcount : info.resHcount
		             };
		             info_list.push(o);
		        });
				$('#point').text(info_list[0].cusPoint);
				var view='';
				if(info_list.length===0){
					$('#mypage_reservation').append('<h5 id="default_msg">예매/구매내역이 없습니다.</h5>');
				}else{
					for(var i=0;i<info_list.length;i++){
						view=customerMypageReservationTable(i);
						$('#mypage_reservation').append(view);
						console.log(i);
						customer_mypage_reservation(info_list,ctx,i);
					}
					var mypage = $('#mypage');
					mypage.addClass('abb1_find_id_container');
					$('#mypageGnb').addClass('abb1_padding_top_20 abb1_width_left');
					mypage.find('table').css('margin','15px');
					mypage.find('div:first-child').addClass('abb1_width_left');
					mypage.find('div:first-child').find('h2').addClass('abb1_color_bold_brown');
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
					mypage_reservation.find('tr:nth-child(2)').find('td:nth-child(3)').addClass('abb1_text_right');
					mypage.find('table>tr:nth-child(3)>td:nth-child(3)').css('text-align','right');
					$('#default_msg').css('padding-left','20px');
					mypage.find('div:first-child>h4').addClass('abb1_width_right');
						
					$('.abb1_detail_icon').on('click',function(){
						var i = $(this).attr('id').split('_')[1]*1;
						$('#mypage_table'+i+'').append(customerMypageDetailView(i));
						alert($('#reservation_number'+i).text());
						$.ajax({
							url: ctx+'/getReservationDetail',
							method: 'POST',
							data: JSON.stringify({
								id: $('#reservation_number'+i).text()
							}),
							dataType: 'json',
							contentType: 'application/json',
							success: function(data){
								/*$.each(data.infoList, function(i, info){
						             var o = {
						            		 cusPoint : info.cusPoint,
								             resId : info.resId,
								             resRegDate : info.resRegDate,
								             resCanceled : info.resCanceled,
								             resPrice : info.resPrice,
								             movTitle : info.movTitle,
								             movPicMain : info.movPicMain,
								             shoStartTime : info.shoStartTime,
								             shoEndTime : info.shoEndTime,
								             shoShowDate : info.shoShowDate,
								             mulName : info.mulName,
								             theName : info.theName,
								             resHcount : info.resHcount
						             };
						             detail_list.push(o);
						        });*/
								console.log(data.infoList);
								$('#movie_name'+i+'').text(data.infoList.movTitle);
							},
							error: function(){
								alert('실패');
							}
						});
						/*$('#detail_icon'+i+'').html('<a id="close" href="#">닫기<img src="'+$.context()+'/resources/img/icon/uparrow.png" width="3%" height="3%" alt="" /></a>');
						var detail_reservation = $('#detail_reservation'+i+'');
						 detail_reservation.addClass('abb1_detail_reservation');
						 detail_reservation.find('div:first-child').addClass('abb1_mypage_reservation');
						 detail_reservation.find('div:nth-child(2)').addClass('abb1_find_pw_margin');
						 $('#detail_reservation_pic'+i+'').addClass('abb1_margin_left_20');
						 $('#reservation_cancel'+i+'').addClass('btn abb1_btn_lg abb1_btn_verification').css('height','40px').css('width','100px').css('font-size','15px');
						 
						 var info=info_list[i];
						console.log('i: '+i);
						console.log('info_list[i]');
						console.log(info);
						$('#movie_poster'+i).attr('src',ctx+'/resources/img/movie/'+info.movPicMain);
						//alert(ctx+'/resources/img/movie/'+info.movPicMain);
						//alert('movie_'+$('#movie_poster'+i).attr('src'));
						$('#movie_name'+i).text(info.movTitle);
						$('#show_info'+i).text(info.shoShowDate+' | 상영시간 '+info.shoStartTime+' ~ '+info.shoEndTime+' | 상영관 '+info.mulName+', '+info.theName);
						$('#customer_info'+i).text('성인'+info.resHcount+' | 좌석 '+info.resId.split('-')[3]);
						$('#reservation_price'+i).text(info.resPrice+'원');*/
						
						
						
						//customer_mypage_detail_view(i,info_list);
					
					});
				}
				
					
					
					/*for(var i=0;i<info_list.length;i++){
						$('#movie_img'+i+'').css('padding-right','35px');
						$('#reservation_pic'+i+'').addClass('abb1_margin_left_20');
						$('#reservation_no'+i+'').addClass('abb1_margin_right_20');
						$('#detail_icon'+i+'').css('text-align','right');
						$('#price_title'+i+'').css('padding-right','25px');
					}*/
					//customer_mypage_detail(info_list,ctx);
			},
			error: function(xhr,status,msg){
				alert('실패 이유: '+msg)
			}
		});
	
		
		/*$('#detail0').on('click',function(e){
			e.preventDefault();
			alert('상세보기 클릭');
			$('#mypage_reservation').append('<div id="detail_reservation">'
			    	+'					<div>'
			    	+'						<h4>상세내용</h4>'
			    	+'					</div>'
			    	+'					<div>'
				    +'					<table>'
				    +'						<tr>'
				    +'							<td rowspan="4"><span id="detail_reservation_pic"><img id="movie_poster" src="'+ctx+'/resources/img/movie/movie_poster_6.png" width="60%" height="60%" alt="" /></span></td>'
				    +'							<td colspan="2"><h4><strong id="movie_name">아빠는 딸</strong></h4></td>'
				    +'						</tr>'
				    +'						<tr>'
				    +'							<td>상영일</td>'
				    +'							<td id="show_info">2017-04-23 | 상영시간 13:50 ~ 15:55 | 상영관 가산디지털, 1관</td>'
				    +'						</tr>'
				    +'						<tr>'
				    +'							<td>관람인원</td>'
				    +'							<td id="customer_info">성인2 | 좌석 E10,E11</td>'
				    +'						</tr>'
				    +'						<tr>'
				    +'							<td><span>주문금액</span></td>'
				    +'							<td id="reservation_price">22,000원</td>'
				    +'						</tr>'
				    +'					</table>'
			    	+'					</div>'
			    	+'					<div>'
			    	+'						<input id="reservation_cancel" type="button" value="결제취소"  />'
			    	+'					</div>'
			    	+'				</div>'
			 );
			 var detail_reservation = $('#detail_reservation');
			 detail_reservation.addClass('abb1_detail_reservation');
			 detail_reservation.find('div:first-child').addClass('abb1_mypage_reservation');
			 detail_reservation.find('div:nth-child(2)').addClass('abb1_find_pw_margin');
			 $('#detail_reservation_pic').addClass('abb1_margin_left_20');
			 $('#reservation_cancel').addClass('btn abb1_btn_lg abb1_btn_verification').css('height','40px').css('width','100px').css('font-size','15px');
			 $('#detail_icon').html('<a id="close" href="#">닫기<img src="'+ctx+'/resources/img/icon/uparrow.png" width="3%" height="3%" alt="" /></a>')
			 $.ajax({
					url: ctx+'/getReservation',
					method: 'POST',
					data: JSON.stringify({
						id: abb1.cookie.getCookie('id')
					}),
					dataType: 'json',
					contentType: 'application/json',
					success: function(data){
						$.getScript(yeom,function(){
							customer_mypage_reservation(data,ctx);
						});
					},
					error: function(xhr,status,msg){
						alert('실패 이유: '+msg)
					}
			});
		});*/
	};
	
	var detailForLoop = function(info_list){
		for(var i=0;i<info_list.length;i++){
			$('#movie_img'+i+'').css('padding-right','35px');
			$('#reservation_pic'+i+'').addClass('abb1_margin_left_20');
			$('#reservation_no'+i+'').addClass('abb1_margin_right_20');
			$('#detail_icon'+i+'').css('text-align','right');
			$('#price_title'+i+'').css('padding-right','25px');
		}
	};
	
	var customer_mypageCancel = function(){
	    $('#container').html(customerMypageCancelView());
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
	};
	var customer_mypageInfo = function(){
	    $('#container').html(customerMypageInfoView());
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
	};
	var customer_mypageReservation = function(){
	    $('#container').html(customerMypageReservationView());
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
	};
	var customer_signup = function(){
	    var ctx = abb1.session.getContextPath();
	    var yeom = ctx+'/resources/js/yeom.js';
		
			$('#container').html(customerSignUpView());
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
			$('#result_id_msg').addClass('abb1_signup_check');
			$('#result_pw_msg').addClass('abb1_signup_check');
			$('#check_pw_msg').addClass('abb1_signup_check');
			$.getScript(yeom,function(){
			$('#id').keyup(function(){
	            var id = $('#id').val();
	            $.ajax({
	                url : ctx+'/checkId',
	                method: 'POST',
	                data:JSON.stringify({
	                    id: id
	                }),
	                dateType: 'json',
	                contentType: 'application/json',
	                success : function(data) {
	                	customer_check_id(data);
	                },
	                error: function(xhr,status,msg){
	                	alert('실패 이유: '+msg);
	                }
	            });
	    });
		$('#pw').keyup(function(){
			customer_check_pw();
		});
		$('#check_pw').keyup(function(){
			customer_correct_pw();
		});
		$('#send_code').on('click',function(e){
			$.ajax({
			      type: 'POST',
			      url: 'https://mandrillapp.com/api/1.0/messages/send.json',
			      data: {
			        'key': 'VdJ0Y_O31CFpVfbWcZ86fQ',
			        'message': {
			          'from_email': 'yheisun@naver.com',
			          'to': [
			              {
			                'email': 'yheisun@naver.com',
			                'name': 'RECIPIENT NAME (OPTIONAL)',
			                'type': 'to'
			              }
			            ],
			          'autotext': 'true',
			          'subject': 'YOUR SUBJECT HERE!',
			          'html': 'YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!'
			        }
			      }
			     }).done(function(response) {
			       console.log(response); // if you're into that sorta thing
			       console.log(response); // if you're into that sorta thing
			     });
		});
		$('#signup_finish').on('click',function(e){
			e.preventDefault();
			var gender=$(':radio[name="gender"]:checked').val();
			$.ajax({
				url: ctx+'/signup',
				method: 'POST',
				data: JSON.stringify({
					id: $('#id').val(),
					pw: $('#pw').val(),
					name: $('#name').val(),
					birth: $('#year').val()+$('#month').val()+$('#date').val(),
					phone: $('#phone1').val()+$('#phone2').val()+$('#phone3').val(),
					gender: gender,
					email: $('#email').val()
				}),
				dataType: 'json',
				contentType: 'application/json',
				success: function(data){
					if(data.result===1){
						alert('가입 성공!');
						abb1.jquery.customer_login();
					}
				},
				error: function(xhr,status,msg){
					alert('가입 실패 이유: '+msg);
				}
			});
		});
	});
	};
	var customer_signupsuccess = function(){
	    $('#container').html(customerSignUpSuccessView());
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
	};
	var customer_updateInfo = function(){
	    var ctx = abb1.session.getContextPath();
	    var yeom = ctx+'/resources/js/yeom.js'
	    	$('#container').html(customerUpdateInfoView());
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
	        $('#result_pw_msg').addClass('abb1_signup_check');
	        $('#check_pw_msg').addClass('abb1_signup_check');
	        $.getScript(yeom,function(){
	    	customer_updateInfo_info();
	    $('#pw').keyup(function(){
	    	customer_check_pw();
		});
		$('#check_pw').keyup(function(){
			customer_correct_pw();
		});
	    $('#confirm').on('click',function(e){
	    	e.preventDefault();
	    	var pw=($('#pw').val()==='')?abb1.cookie.getCookie('pw'):$('#pw').val();
	    	var phone=customer_updateInfo_phone();
	    	$.ajax({
	    		url: ctx+'/updateInfo',
	    		method:'POST',
	    		data: JSON.stringify({
	    			id: abb1.cookie.getCookie('id'),
	    			pw: pw,
	    			phone: phone
	    		}),
	    		dataType: 'json',
	    		contentType: 'application/json',
	    		success: function(data){
	    			customer_updateInfo_success(data);
	    		},
	    		error: function(xhr,status,msg){
	    			alert('업데이트 실패 이유:'+msg);
	    		}
	    	});
	    });
	    });
	};
	var customer_updateInfoChPw = function(){
	    $('#container').html(customerUpdateInfoChPwView());
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
	};
	var customer_withdrawal = function(){
	    $('#container').html(customerWithdrawalView());
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
	    		url: $.context()+'/withdrawal',
	    		method: 'POST',
	    		data:JSON.stringify({
	    			id: abb1.cookie.getCookie('id')
	    		}),
	    		dataType:'json',
	    		contentType:'application/json',
	    		success:function(data){
	    			if(data.result===1){
	    				abb1.cookie.removeCookie('id');
	    				abb1.cookie.removeCookie('pw');
	    				abb1.cookie.removeCookie('name');
	    				abb1.cookie.removeCookie('gender');
	    				abb1.cookie.removeCookie('birth');
	    				abb1.cookie.removeCookie('phone');
	    				abb1.cookie.removeCookie('email');
	    				abb1.cookie.removeCookie('point');
	    				abb1.cookie.removeCookie('address');
	    				$('#comment').text('지금까지 이용해주셔서 감사드립니다!');
	    				$('#ul_btn').html('<li>'
	    								+'<a href="'+$.context()+'"><input type="button" value="확인"  /></a>'
	    								+'</li>');
	    			}
	    		},
	    		error:function(xhr,status,msg){
	    			alert('탈퇴 실패 이유:'+msg);
	    		}
	    	});
	    });
	};
	var movie_detail = function(seq){
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
	      };
	      var movieMain = function(){
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
	       };
	       return{
	    	   onCreate: onCreate
	       }
})();
/************************
 * Controller
 * abb1.controller
 * 
 ***********************/
abb1.controller = (function(){})();