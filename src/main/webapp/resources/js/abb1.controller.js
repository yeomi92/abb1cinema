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
		abb1.controller.onCreate();
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
		 	document.cookie = name + "=" + encodeURIComponent(value);
		},
		getCookie: function(name) {
		    var nameEQ = name + "=";
		    var ca = document.cookie.split(';');
		    for(var i=0;i < ca.length;i++) {
		        var c = ca[i];
		        while (c.charAt(0)==' ') c = c.substring(1,c.length);
		        if (c.indexOf(nameEQ) == 0) return encodeURIComponent(c.substring(nameEQ.length,c.length));
		    }
		    return null;
		},
		removeCookie : function(name) {
		    abb1.cookie.setCookie(name, "", -1);
		}
}
/*========= abb1-controller =========
@AUTHOR : Junyoung Park
@CREATE DATE : 2017-05-06
@UPDATE DATE : 2017-05-06
@DESC : controller
=================================*/
abb1.controller =(function() {
	var service, view, css;
	var onCreate = function(){
            service=$.javascript()+'/abb1.service.js';
            view=$.javascript()+'/abb1.view.js';
            css=$.javascript()+'/abb1.css.js';
            setContentView();
	};
	var setContentView = function(){
            $.when(
           	$.getScript(service),
           	$.getScript(view),
           	$.getScript(css),
           	$.Deferred(function(deferred){
           		$( deferred.resolve );
                 })
            ).done(function(){
               indexTiles();
            });
	};
	var checkLogin = function(){
	    if(abb1.cookie.getCookie('id')===null||abb1.cookie.getCookie('id')===''){
            	$('#logout').attr('id','login').text('로그인');
            	$('#mycinema').attr('id','register').text('회원가입');
        	$('#FAQ_login').attr('id','FAQ');
            }else{
            	$('#login').attr('id','logout').text('로그아웃');
        	$('#register').attr('id','mycinema').text('마이시네마');
        	$('#FAQ').attr('id','FAQ_login');
            }  
	};
        var header = function(){
            $('#header').html(headerView());
        };
        var gnb = function(){
            $('#gnb').html(gnbView());
            gnbCss();
        };
        var footer = function(){
            $('#footer').html(footerView());
            $('#footer').find('div:first-child').css('padding-top','40px').css('background','#f9f6ec');
        };
        var indexTiles = function(){
            $.ajax({
               url: $.context()+"/get/movieRank",
               method: "POST",
               data: JSON.stringify({}),
               dataType: "json",
               contentType: "application/json",
               success : function(data){
                  var rank_li = '';
                  var total = 0;
                  var movie_arr = data.movie_list;
                  $.each(data.movie_list, function(i,movie){
                      total += movie.count*1;
                  });
                  $.each(movieSort(movie_arr), function(i,movie){
                      var count = movie.count;
                      var obj = {
                      i : i,
                      movie : movie,
                      count : count,
                      total : total
                      };
                      rank_li += indexMovieRank(obj);
                  });
                  $('#rank_ul').html(rank_li);
                  findYoutube(data);
                  $('#slidePoster').html(indexSlideView());
                  indexCss();
                  var add = 0;
                  indexSlideClick(add,movie_arr);
                  var reverse_arr = reverseArr(movie_arr, 8);
                  for(var i=0; i<4; i++){
                      $('#slide'+i).html('<img src="'+$.image()+'/movie/'+reverse_arr[i+add].pic_main+'" alt="" width="188px" height="274px">');
                  }
                  indexSlideCss();
                   
                  },
               error : function(xhr,status,msg){
                  alert(msg);
               }
            });
            indexTilesClickEvent();
        };
        function indexTilesClickEvent(){
            $('.goMovie').on('click',function(){
            	necessary();
                var id = $(this).attr('id');
                var num = id.split('movie')[1];
                movieDetail(num);
                indexTilesClickEvent();
            });
            $('.goMovieDetail').on('click',function(){
            	necessary();
            	var rarr = reverseArr(data.movie_list, 8);
             	var i = $(this).attr('id').split('slide')[1];
             	movieDetail(rarr[(i*1+add*1)].seq);
             	indexTilesClickEvent();
            });
            $('#FAQ_login').on('click',function(){
            	necessary();
            	boardMain(1);
            	indexTilesClickEvent();
            });
            $('#reservation').find('a').on('click',function(){
            	necessary();
            	reservationMain(); 
            	indexTilesClickEvent();
            });
            $('#login').on('click',function(){
            	necessary();
            	customerLogin();
            	indexTilesClickEvent();
            });
            $('#register').on('click',function(){
            	necessary();
            	customerSignUp();
            	indexTilesClickEvent();
            });
            $('#ticketing').on('click',function(){
            	necessary();
                reservationMain();
                indexTilesClickEvent();
            });
            $('#movie').on('click',function(){
            	necessary();
                movieMain();
                indexTilesClickEvent();
            });
            $('#multiplex').on('click',function(){
            	necessary();
                multiplexMain(1);
                indexTilesClickEvent();
            });
            $('#FAQ').on('click',function(){
         	boardMain(1);
         	indexTilesClickEvent();
            });
        };
        var necessary=function(){
            header();
            gnb();
            footer();
            $('#home').on('click',function(){
            	index();
            });
            checkLogin();
        };
        var index=function(){
            $('#wrapper').html(indexView());
            $.ajax({
                url: $.context()+"/get/movieRank",
                method: "POST",
                data: JSON.stringify({}),
                dataType: "json",
                contentType: "application/json",
                success : function(data){
                  var rank_li = '';
                  var total = 0;
                  var movie_arr = data.movie_list;
                  $.each(data.movie_list, function(i,movie){
                      total += movie.count*1;
                  });
                  $.each(movieSort(movie_arr), function(i,movie){
                      var count = movie.count;
                      var obj = {
                      i : i,
                      movie : movie,
                      count : count,
                      total : total
                      };
                      rank_li += indexMovieRank(obj);
                  });
                  $('#rank_ul').html(rank_li);
                  findYoutube(data);
                  $('#slidePoster').html(indexSlideView());
                  indexCss();
                  var add = 0;
                  indexSlideClick(add,movie_arr);
                  var reverse_arr = reverseArr(movie_arr, 8);
                  for(var i=0; i<4; i++){
                 	   $('#slide'+i).html('<img src="'+$.image()+'/movie/'+reverse_arr[i+add].pic_main+'" alt="" width="188px" height="274px">');
                  }
                  indexSlideCss();
                  
                },
                error : function(xhr,status,msg){
                   alert(msg);
                }
            });
            indexClickEvent();
        };
        var indexSlideClick = function(add,movie_arr){
    	    var arr = reverseArr(movie_arr, 8);
    	    $('#prev').on('click',function(){
                var slide = indexSlideLi();
                add-=4;
                if(add==-4){
                   add = 4;
                }
                $('#slidePoster').find('ul').html(slide);
                for(var i=0; i<4; i++){
                	$('#slide'+i).html('<img src="'+$.image()+'/movie/'+arr[i+add].pic_main+'" alt="" width="188px" height="274px">');
                }
                indexSlideClick(add,movie_arr);
                indexSlideCss();
                $('.goMovieDetail').on('click',function(){
            	var rarr = reverseArr(movie_arr, 8);
            	var i = $(this).attr('id').split('slide')[1];
            	movieDetail(rarr[(i*1+add*1)].seq);
                });
            });
            $('#next').on('click',function(){
                var slide = indexSlideLi();
                add+=4;
                if(add>=8){
                   add = 0;
                }
                $('#slidePoster').find('ul').html(slide);
                for(var i=0; i<4; i++){
                	$('#slide'+i).html('<img src="'+$.image()+'/movie/'+arr[i+add].pic_main+'" alt="" width="188px" height="274px">');
                }
                indexSlideClick(add,movie_arr);
                indexSlideCss();
                $('.goMovieDetail').on('click',function(){
            	var rarr = reverseArr(movie_arr, 8);
            	var i = $(this).attr('id').split('slide')[1];
            	movieDetail(rarr[(i*1+add*1)].seq);
                });
            });
        };
        function indexClickEvent(){
            checkLogin();
            $('#home').on('click',function(){
            	index();
            	indexClickEvent();
            });
            $('.goMovie').on('click',function(){
            	var id = $(this).attr('id');
            	var num = id.split('movie')[1];
            	movieDetail(num);
            	indexClickEvent();
            });
            $('#FAQ').on('click',function(){
         	boardMain(1);
         	indexClickEvent();
            });
            $('#reservation').find('a').on('click',function(){
        	reservationMain(); 
        	indexClickEvent();
            });
            $('.goMovieDetail').on('click',function(){
        	var rarr = reverseArr(data.movie_list, 8);
        	var i = $(this).attr('id').split('slide')[1];
        	movieDetail(rarr[(i*1+add*1)].seq);
        	indexClickEvent();
            });
            $('#reservation').find('a').on('click',function(){
             	reservationMain(); 
             	indexClickEvent();
            });
            $('#login').on('click',function(){
             	customerLogin();
             	indexClickEvent();
            });
            $('#logout').on('click',function(){
            	abb1.cookie.removeCookie('id');
     		abb1.cookie.removeCookie('pw');
     		abb1.cookie.removeCookie('name');
     		abb1.cookie.removeCookie('gender');
     		abb1.cookie.removeCookie('birth');
     		abb1.cookie.removeCookie('phone');
     		abb1.cookie.removeCookie('email');
     		abb1.cookie.removeCookie('point');
     		abb1.cookie.removeCookie('address');
     		index();
     		indexClickEvent();
            });
            $('#mycinema').on('click',function(){
            	customerMypage();
            	indexClickEvent();
            });
        };
	var customerLogin=function(){
		$('#wrapper').html(customerLoginView());
		customerLoginCss();
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
							adminIndex();
						}else if(data.permission==='customer'){
							abb1.cookie.setCookie('id',data.customer.id);
							abb1.cookie.setCookie('pw',data.customer.pw);
							abb1.cookie.setCookie('name',data.customer.name);
							abb1.cookie.setCookie('gender',data.customer.gender);
							abb1.cookie.setCookie('birth',data.customer.birth);
							abb1.cookie.setCookie('phone',data.customer.phone);
							abb1.cookie.setCookie('email',data.customer.email);
							abb1.cookie.setCookie('point',data.customer.point);
							abb1.cookie.setCookie('address',data.customer.address);
							index();
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
		$('#findId').on('click',function(){
		    customerFindId();
		});
		$('#findPw').on('click',function(){
		    customerFindPw();
		});
		$('#register2').on('click',function(){
		    customerSignUp();
		});
	};
	var customerFindId = function(){
	    $('#wrapper').html(customerFindIdView());
	    customerFindIdCss();
	    $('#cancel').on('click',function(){
		customerLogin();
	    });
	    $('#customer_send_email').on('click',function(){
		$.ajax({
		    url: $.context()+"/get/customer/find",
		    method: "POST",
		    data: JSON.stringify({
			name : $('#name').val(),
			email : $('#email').val()
		    }),
		    dataType: "json",
		    contentType: "application/json",
		    success : function(data){
			if(data.countByName == 0){
			    alert('입력하신 정보가 존재하지 않습니다.');
			} else {
			    // TODO
			}
		    },
		    error : function(xhr,status,msg){
			alert(msg);
		    }
		});
	    });
	    $('#confirm').on('click',function(){
		$.ajax({
		    url: $.context()+"/get/customer/find",
		    method: "POST",
		    data: JSON.stringify({
			name : $('#name').val(),
			email : $('#email').val()
		    }),
		    dataType: "json",
		    contentType: "application/json",
		    success : function(data){
			var cname = $('#name').val();
			var cemail = $('#email').val();
			// 이메일 인증 API 또는 SMTP 후 만들어질 로직
			if(data.customer.name==cname && data.customer.cemail==cemail){
			    var validation = '';
			    if(validation == $('#validation').val()){
				customerFindIdSuccess(data.customer);
			    }
			}
		    },
		    error : function(xhr,status,msg){
			alert(msg);
		    }
		}); /* end of ajax */
		
	    });
	};
	var customerFindIdSuccess = function(customer){
	    $('#wrapper').html(customerFindIdSuccessView());
	    customerFindIdSuccessCss();
	    $('#customer_id').html(customer.id);
	    $('#confirm').on('click',function(){
		customerLogin();
	    });
	};
	var customerFindPw = function(){
	    $('#wrapper').html(customerFindPwView());
	    customerFindPwCss();
	    $('#cancel').on('click',function(){
		customerLogin();
	    });
	    $('#customer_send_email').on('click',function(){
		$.ajax({
		    url: $.context()+"/get/customer/find",
		    method: "POST",
		    data: JSON.stringify({
			id : $('#customer_id').val(),
			email : $('#email').val()
		    }),
		    dataType: "json",
		    contentType: "application/json",
		    success : function(data){
			if(data.countById == 0){
			    alert('입력한 아이디가 존재하지 않습니다.');
			} else {
			    // TODO
			}
		    },
		    error : function(xhr,status,msg){
			alert(msg);
		    }
		});
	    });
	    $('#confirm').on('click',function(){
		$.ajax({
		    url: $.context()+"/get/customer/find",
		    method: "POST",
		    data: JSON.stringify({
			id : $('#customer_id').val(),
			email : $('#email').val()
		    }),
		    dataType: "json",
		    contentType: "application/json",
		    success : function(data){
			var cid = $('#customer_id').val();
			var cemail = $('#email').val();
			if(data.customer.id==cid && data.customer.email==cemail){
			    // 이메일 인증 API 또는 SMTP 후 만들어질 로직
			    /*var validation = '';
			if(validation == $('#validation').val()){*/
			    customerFindPwSuccess(data.customer);
			    //}
			    
			}
		    },
		    error : function(xhr,status,msg){
			alert(msg);
		    }
		}); /* end of ajax */
		
	    });
	};
	var customerFindPwSuccess = function(customer){
	    $('#wrapper').html(customerFindPwSuccessView());
	    customerFindPwSuccessCss();
	    $('#customer_id').html(customer.id);
	    $('#cancel').on('click',function(){
		customerLogin();
	    });
	    $('#confirm').on('click',function(){
		var pw1 = $('#customer_pw1').val();
		var pw2 = $('#customer_pw2').val();
		if(pw1==pw2) {
		    $.ajax({
			    url: $.context()+"/updateInfo",
			    method: "POST",
			    data: JSON.stringify({
				id : customer.id,
				pw : pw1
			    }),
			    dataType: "json",
			    contentType: "application/json",
			    success : function(data){
				if(data.result==1){
				    alert('비밀번호가 변경되었습니다. 다시 로그인 해주세요.');
				    customerLogin();
				} else {
				    alert('변경에 실패하였습니다.');
				}
			    },
			    error : function(xhr,status,msg){
				alert(msg);
			    }
			});
		} else {
		    alert('비밀번호가 일치하지 않습니다.');
		}
	    })
	};
	var customerMypage = function(){
	    checkLogin();
	    $('#wrapper').html(customerMypageView());
		$.ajax({
			url: $.context()+'/getReservation',
			method: 'POST',
			data: JSON.stringify({
				id: abb1.cookie.getCookie('id')
			}),
			dataType: 'json',
			contentType: 'application/json',
			success: function(data){
				//포인트 출력
				var view='';
				if(data.infoList.length===0){
					$('#mypage_reservation').append('<h5 id="default_msg">예매/구매내역이 없습니다.</h5>');
					customerMypageCss();
				}else{
					$.each(data.infoList, function(i, info){
						 var canceled='';
						 if(info.resCanceled==='N'){
						 	 canceled='취소가능';
						 }else if(info.resCanceled==='Y'){
							 canceled='취소';
						 }else{
							 canceled='사용';
					   	 }
			             $('#mypage_reservation').append(reservationDetailView(i, canceled, info));
			        });
					customerMypageCss();
					reservationDetailService();
				}
			},
			error: function(xhr,status,msg){
				alert('실패 이유: '+msg)
			}
		});
		$('#mypageCancelList').on('click',function(){
			customerMypageCancel();
		});
		$('#mypageMyInfo').on('click',function(){
			customerMypageInfo();
		});
	};
	
	var customerMypageCancel = function(){
	    checkLogin();
	    $('#wrapper').html(customerMypageCancelView());
		$.ajax({
			url: $.context()+'/getCancel',
			method: 'POST',
			data: JSON.stringify({
				id: abb1.cookie.getCookie('id')
			}),
			dataType: 'json',
			contentType: 'application/json',
			success: function(data){
				$('#point').text(data.infoList[0].cusPoint);
				var view='';
				if(data.infoList.length===0){
					$('#mypage_reservation').append('<h5 id="default_msg">취소내역이 없습니다.</h5>');
				}else{
					$.each(data.infoList, function(i, info){
						 var canceled='';
						 if(info.resCanceled==='N'){
						 	 canceled='취소가능';
						 }else if(info.resCanceled==='Y'){
							 canceled='취소완료';
						 }else{
							 canceled='사용';
					   	 }
						 var view=reservationDetailView(i, canceled, info);
						 if(i==0){
							 $('#mypage_reservation').html(view);
						 }else{
							 $('#mypage_reservation').append(view);
						 }
			        });
					customerMypageCss();
					reservationDetailService();
				}
			},
			error: function(xhr,status,msg){
				alert('실패 이유: '+msg)
			}
		});
		$('#mypageReservationList').on('click',function(){
			customerMypage();
		});
		$('#mypageMyInfo').on('click',function(){
			customerMypageInfo();
		});
	};
	var reservationDetailService = function(){
	    checkLogin();
	    $('.abb1_detail_icon').on('click',function(){
		//다시 화면 그리기
		$.ajax({
			url: $.context()+'/getReservation',
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
						if(i==0){
							$('#mypage_reservation').html(view);
						}else{
							$('#mypage_reservation').append(view);
						}
						customer_mypage_reservation(info_list,$.context(),i);
					}
					customerMypageCss();
				}
			}
		});
		var i = $(this).attr('id').split('_')[1]*1;
		$.ajax({
			url: $.context()+'/getReservationDetail',
			method: 'POST',
			data: JSON.stringify({
				id: $('#reservation_number'+i).text()
			}),
			dataType: 'json',
			contentType: 'application/json',
			success: function(data){
				$('#mypage_table'+i+'').append(reservationDetailView1(i, data));
				$('#detail_icon'+i+'').html('<a id="close" href="#">닫기<img src="'+$.context()+'/resources/img/icon/uparrow.png" width="3%" height="3%" alt="" /></a>');
				reservationDetailServiceCss(i);
				 $('#close').on('click',function(){
					 	/*$(this).html('<a id="detail_icon'+i+'" href="#">상세<img src="'+$.context()+'/resources/img/icon/downarrow.png" width="3%" height="3%" alt="" /></a>');
						$('#detail_reservation'+i+'').remove();*/
					 //TODO: 다시 ajax를 부를 것인가?
				 });
				 $('#reservation_cancel'+i+'').on('click',function(){
					$.ajax({
						url: $.context()+'/putCanceled',
						method: 'POST',
						data: JSON.stringify({
							id: $('#reservation_number'+i).text()
						}),
						dataType: 'json',
						contentType: 'application/json',
						success: function(data){
                                			if(data.result===1){
                                				alert('취소되었습니다.');
                                				$.ajax({
                                					url: $.context()+'/getReservation',
                                					method: 'POST',
                                					data: JSON.stringify({
                                						id: abb1.cookie.getCookie('id')
                                					}),
                                					dataType: 'json',
                                					contentType: 'application/json',
                                					success: function(data){
                                						$('#point').text(data.infoList[0].cusPoint);
                                						var view='';
                                						if(data.infoList.length===0){
                                							$('#mypage_reservation').append('<h5 id="default_msg">예매/구매내역이 없습니다.</h5>');
                                						}else{
                                							$.each(data.infoList, function(i, info){
                                								 var canceled='';
                                								 if(info.resCanceled==='N'){
                                								 	 canceled='취소가능';
                                								 }else if(info.resCanceled==='Y'){
                                									 canceled='취소';
                                								 }else{
                                									 canceled='사용';
                                							   	 }
                                					             $('#mypage_reservation').append(reservationDetailView(i, canceled, info));
                                					        });
                                							customerMypageCss();
                                							reservationDetailService();
                                						}
                                					},
                                					error: function(xhr,status,msg){
                                						alert('실패 이유: '+msg)
                                					}
                                				});
                                			}
						},
						error: function(xhr,status,msg){
							alert('업데이트 실패 이유:')
						}
					});
					
				 });
				 reservationDetailService();
			},
			error: function(){
				alert('실패');
			}
		});
		
	});
	};
        var customerMypageInfo = function(){
            checkLogin();
            $('#wrapper').html(customerMypageInfoView());
        	customerMypageInfoCss();
        	$('#updateInfo').on('click',function(){
        		customerUpdateInfoChPw();
        	});
        	$('#withdrawal').on('click',function(){
        		customerWithdrawal();
        	});
        	$('#mypageReservationList').on('click',function(){
        		customerMypage();
        	})
        };
        var customerSignUp = function(){
        	$('#wrapper').html(customerSignUpView());
        	customerSignUpCss();
        	$('#id').keyup(function(){
                    var id = $('#id').val();
                    $.ajax({
                        url : $.context()+'/checkId',
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
        };
        var customerUpdateInfo = function(){
            checkLogin();
            	$('#wrapper').html(customerUpdateInfoView());
            	customerUpdateInfoCss();
                
                $('#id').text(abb1.cookie.getCookie('id'));
                $('#name').text(abb1.cookie.getCookie('name'));
                var cookieBirth=abb1.cookie.getCookie('birth');
                var birth=cookieBirth.substring(0,4)+'년'+cookieBirth.substring(4,6)+'월'+cookieBirth.substring(6,8)+'일';
                $('#birth').text(birth);
                var phone=abb1.cookie.getCookie('phone');
                $('#phone1').attr('placeholder',phone.substring(0,3));
                $('#phone2').attr('placeholder',phone.substring(3,7));
                $('#phone3').attr('placeholder',phone.substring(7,11));
                $('#gender').text(abb1.cookie.getCookie('gender')==='M'?'남자':'여자');
            
            	$('#pw').keyup(function(){
            	customer_check_pw();
        	});
        	$('#check_pw').keyup(function(){
        		customer_correct_pw();
        	});
            $('#confirm').on('click',function(e){
            	e.preventDefault();
            	var pw=($('#pw').val()==='')?abb1.cookie.getCookie('pw'):$('#pw').val();
            	var phoneVal='';
            	if($('#phone1').val()+$('#phone2').val()+$('#phone3').val()===''){
            		phoneVal=$('#phone1').val()+$('#phone2').val()+$('#phone3').val();
            	}
            	else if(abb1.util.checkPhone($('#phone1').val())&&abb1.util.checkPhone($('#phone2').val())&&abb1.util.checkPhone($('#phone3').val())){
            		phoneVal=$('#phone1').val()+$('#phone2').val()+$('#phone3').val();
            	}else{
            		alert('정확한 휴대폰 번호를 입력하세요.');
            		return;
            	}
            	var phone=(phoneVal==='')?abb1.cookie.getCookie('phone'):phoneVal;
            	$.ajax({
            		url: $.context()+'/updateInfo',
            		method:'POST',
            		data: JSON.stringify({
            			id: abb1.cookie.getCookie('id'),
            			pw: pw,
            			phone: phone
            		}),
            		dataType: 'json',
            		contentType: 'application/json',
            		success: function(data){
            			if(data.result===1){
            				abb1.cookie.setCookie('pw',data.pw);
            				abb1.cookie.setCookie('phone',data.phone);
            				customerMypageInfo();
            			}
            		},
            		error: function(xhr,status,msg){
            			alert('업데이트 실패 이유:'+msg);
            		}
            	});
            });
            $('#cancel').on('click',function(){
            	customerMypageInfo();
            });
        };
        var customerUpdateInfoChPw = function(){
            checkLogin();
            $('#wrapper').html(customerUpdateInfoChPwView());
            customerUpdateInfoChPwCss();
            $('#id').text(abb1.cookie.getCookie('id'));
            $('#go_update_info').on('click',function(){
        	   if($('#pw').val()===abb1.cookie.getCookie('pw')){
        	    	customerUpdateInfo();
        	    }else{
        	    	alert('비밀번호를 다시 확인하세요.');
        	    	return;
        	    }
           });
            $('#cancel').on('click',function(){
            	customerMypageInfo();
            });
        };
        var customerWithdrawal = function(){
            checkLogin();
            $('#wrapper').html(customerWithdrawalView());
            customerWithdrawalCss();
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
            $('#cancel').on('click',function(){
            	customerMypageInfo();
            });
        };
        var adminIndex = function(){
            $('#header').html('');
            $('#gnb').html(adminGnbView());
             $('#wrapper').html(adminIndexView());
             $('#footer').html('');
             adminIndexCss();
             $('#go_index').on('click',function(){
               index(); 
             });
             $('#admin_index').on('click',function(){
                adminIndex();
             });
           $('#admin_reservation').on('click',function(){
              adminReservation();
           });
           $('#manage_movie').on('click',function(){
              adminMovieManagement();
           });
           $('#regist_movie').on('click',function(){
              adminMovieRegister();
           });
           $('#manage_article').on('click',function(){
              adminBbsFaq(4);
           });
           $('#manage_notice').on('click',function(){
              adminBbsNotice(5);
           });
           $('#admin_gender').on('click',function(){
              adminStatistic();
           });
           $('#admin_member').on('click',function(){
              adminCustomer();
           })
         };
         var adminStatistic = function(){
             var ctx = $.context();
             $('#page-wrapper').html(adminStatisticView());
             $('#statistic_search_btn').on('click',function(){
                 $('#page-wrapper').html(adminStatisticChartView());
                 /*-- Google API Loading --*/
                 abb1.api.google2(20, 80);
             });
             adminStatisticCss();
         };   
         var adminMovieRegister = function(){
             var ctx = $.context();
             $('#page-wrapper').html(adminMovieRegisterView());
             adminMovieRegisterCss();
         };
         var adminCustomer = function(){
             var ctx = $.context();
             $('#page-wrapper').html(adminCustomerView());
             adminCustomerCss();
             $('#customer_id').on('click',function(){
                 $('#result').html(adminCustomerResultView());
                 adminCustomerCss();
             });
             $('#customer_name').on('click',function(){
                 $('#result').html(adminCustomerResultView());
                 adminCustomerCss();
             });
         };
         var adminReservation = function(){
             $('#page-wrapper').html(adminReservationView());
             $('#reservation_search_btn').on('click',function(){
                $.ajax({
                   url: $.context()+'/get/admin/reservation',
                   method: 'POST',
                   data: JSON.stringify({
                     category: $('#reservation_category').val(),
                     value: $('#reservation_search_keyword').val()
                   }),
                   dataType: 'json',
                   contentType: 'application/json',
                   success: function(data){
                      var male=0;
                      var female=0;
                      console.log(data.reservationList);
                      console.log(data.cancelList);
                      console.log(data.showList);
                      alert('성공');
                      $('#reservation_detail').html(adminReservationResultView());
                      if(data.reservationList.length===0){
                         $('#reservation_table').append('<tbody>'
                               +'                     <tr>'
                               +'                        <td colspan="6">예매내역이 없습니다.</td>'
                               +'                     </tr>'
                               +'                     </tbody>');
                      }else{
                         $.each(data.reservationList, function(i,list){
                            $('#reservation_table').append('<tbody>'
                                  +'                     <tr>'
                                  +'                        <td>'+list.theName+'</td>'
                                  +'                        <td>'+list.movTitle+'</td>'
                                  +'                        <td>'+list.shoStartTime+'</td>'
                                  +'                        <td>'+list.resId+'</td>'
                                  +'                        <td>'+list.resRegDate+'</td>'
                                  +'                        <td>'+list.resPrice+'</td>'
                                  +'                     </tr>'
                                  +'                     </tbody>');
                            if(list.cusGender==='M'){
                               male++;
                            }else{
                               female++;
                            }
                         });
                      }
                      if(data.cancelList.length===0){
                         $('#cancel_list_table').append('<tbody>'
                               +'                     <tr>'
                               +'                        <td colspan="6">취소내역이 없습니다.</td>'
                               +'                     </tr>'
                               +'                     </tbody>');
                      }else{
                         $.each(data.cancelList, function(i,list){
                            $('#cancel_list_table').append('<tbody>'
                                   +'                     <tr>'
                                   +'                        <td>'+list.theName+'</td>'
                                   +'                        <td>'+list.movTitle+'</td>'
                                   +'                        <td>'+list.shoStartTime+'</td>'
                                   +'                        <td>'+list.resRegDate+'</td>'
                                   +'                        <td>'+list.resPrice+'</td>'
                                   +'                     </tr>'
                                   +'                     </tbody>');
                         });
                      }
                      if(data.showList.length===0){
                         $('#movie_list_table').append('<tbody>'
                               +'                     <tr>'
                               +'                        <td colspan="6">상영정보가 없습니다.</td>'
                               +'                     </tr>'
                               +'                     </tbody>');
                      }else{
                         $.each(data.showList, function(i,list){
                            $('#movie_list_table').append('<tbody>'
                                   +'                     <tr>'
                                   +'                        <td>'+list.theName+'</td>'
                                   +'                        <td>'+list.movTitle+'</td>'
                                   +'                        <td>'+list.shoStartTime+'</td>'
                                   +'                     </tr>'
                                   +'                     </tbody>');
                         });
                      }
                        adminReservationCss();
                        if(male!=0||female!=0){
                           var maleP=male/(male+female)*100;
                           var femaleP=female/(male+female)*100;
                           abb1.api.google2(maleP,femaleP);
                        }
                   },
                   error: function(xhr,status,msg){
                      alert('실패 이유: '+msg);
                   }
                });
             });
             adminReservationCss();
         };
         var adminMovieManagement = function(){
             $('#page-wrapper').html(adminMovieManagementView());
             $('#movie_search_btn').on('click',function(){
                var seq='';
                $.ajax({
                   url: $.context()+'/get/admin/movie',
                   method: 'POST',
                   data: JSON.stringify({
                     value: $('#movie_search_keyword').val()
                   }),
                   dataType: 'json',
                   contentType: 'application/json',
                   success: function(data){
                      if(data.movie.title==='no'){
                         $('#movie_deatail').html('<div style="margin-top: 30px;">해당 영화가 없습니다.</div>');
                      }else{
                         $('#movie_deatail').html(adminMovieManagementDetailView());
                         $('#title').text(data.movie.title);
                         $('#grade').text(data.movie.grade);
                         $('#released').text(data.movie.released);
                         $('#info').text(data.movie.info);
                         $('#synopsys').text(data.movie.synopsys);
                         $('#name_director').text(data.movie.name_director);
                         $('#name_actor').text(data.movie.name_actor);
                         $('#trailer_url').text(data.movie.trailer_url);
                         $('#poster').attr('src',$.image()+'/movie/'+data.movie.pic_main);
                         adminMovieManagementCss();
                         adminMovieSearchCss();
                         seq=data.movie.seq;
                      }
                      //delete는 아직 테스트해보지 못함.
                      $('#delete').on('click',function(){
                        $.ajax({
                           url: $.context()+'/delete/admin/movie',
                           method: 'POST',
                           data: JSON.stringify({
                              value: seq
                           }),
                           dataType: 'json',
                           contentType: 'application/json',
                           success: function(data){
                              if(data.delete===1){
                                 alert('성공');
                              }
                           },
                           error: function(xhr,status,msg){
                              alert('실패 이유:'+msg)
                           }
                        }); 
                      });
                      $('#update').on('click',function(){
                         $('#movie_deatail').html(adminMovieManagementUpdateView());
                         $('#title').attr('value',data.movie.title);
                         $('#grade').attr('value',data.movie.grade);
                         $('#released').attr('value',data.movie.released);
                         $('#info').attr('value',data.movie.info);
                         $('#synopsys').text(data.movie.synopsys);
                         $('#name_director').attr('value',data.movie.name_director);
                         $('#name_actor').attr('value',data.movie.name_actor);
                         $('#trailer_url').attr('value',data.movie.trailer_url);
                         $('#poster').attr('src',$.image()+'/movie/'+data.movie.pic_main);
                         adminUpdateMovie(data,seq);
                         adminMovieManagementCss();
                         adminMovieSearchCss();
                      });
                   },
                   error: function(xhr,status,msg){
                      alert('실패 이유: '+msg);
                   }
                });
                 adminMovieSearchCss();
             });
             adminMovieManagementCss();
         };
         
         var adminUpdateMovie = function(data,seq){
            $('#update').on('click',function(){
               $.ajax({
                 url: $.context()+'/put/admin/movie',
                method: 'POST',
                data: JSON.stringify({
                   seq: seq,
                   title: $('#title').val(),
                   grade: $('#grade').val(),
                   released: $('#released').val(),
                   info: $('#info').val(),
                   synopsys: $('#synopsys').val(),
                   name_director: $('#name_director').val(),
                   name_actor: $('#name_actor').val(),
                   trailer_url: $('#trailer_url').val()
                }),
                dataType: 'json',
                contentType: 'application/json',
                success: function(data){
                   if(data.update===1){
                      alert('성공');
                      adminMovieManagement();
                   }
                },
                error: function(xhr,status,msg){
                   alert('실패 이유:'+msg)
                }
               });
           });
            
         };
         
         var adminBbsNotice = function(pageNo){
             var ctx = $.context();
             $('#page-wrapper').html(adminBbsNoticeView());
             $('#write').on('click',function(){
                 $('#notice_write_wrapper').html(adminBbsNoticeWriteView());
                 adminBbsNoticeWriteCss();
             });
             adminBbsNoticeCss(pageNo);
         };
         var adminBbsFaq = function(pageNo){
             var ctx = $.context();
             $('#page-wrapper').html(adminBbsFaqView());
             adminBbsFaqCss(pageNo);
             $('#question4').on('click',function(){
                 $('#faq_write_wrapper').html(adminBbsFaqAnswerView());
                 adminBbsFaqCss(pageNo);
             });
         };
	var boardDetail = function(seq, pageNo){
	    var cusId = 'default';
	    if(abb1.cookie.getCookie('id')!=null){
		cusId = abb1.cookie.getCookie('id');
	    }
	    $.ajax({
	      url: $.context()+"/get/board/"+seq,
	      method: "POST",
	      data: JSON.stringify({
		  customerId : cusId
	      }),
	      dataType: "json",
	      contentType: "application/json",
	      success : function(data){
        	var comment_list = [];
        	$.each(data.comment_list, function(i, comment){
        	   comment_list.push(comment); 
        	});
        	boardDetailCommentInit(comment_list);
		$('#wrapper').html(boardDetailView(data.article)+boardDetailCommentView(comment_list));
		boardDetailCss();
		if(data.customer!=null){
		    if(abb1.cookie.getCookie('id')==data.customer.id){
			$('#goBMain').before('<a id="update" href="#"><input type="button" value="수정" class="abb1_bbs_write_confirm"/></a>');
			$('#update').on('click',function(){
			    boardWrite(seq); 
			});
		    }
		}
		
		$('#goBMain').on('click',function(){
		    boardMain(pageNo);
		});
		
		var hits = data.article.hits*1;
	        $.ajax({
	    	      url: $.context()+"/updateHits",
	    	      method: "POST",
	    	      data: JSON.stringify({
	    		  group : 'Article',
	    		  hits : hits*1+1,
	    		  seq : seq
	    	      }),
	    	      dataType: "json",
	    	      contentType: "application/json",
	    	      success : function(data){},
	    	      error : function(xhr,status,msg){
	    	         alert(msg);
	    	      }
	    	});
	        $('#bbs_review_contents_submit').on('click',function(){
	            var customerId = abb1.cookie.getCookie('id');
	            if(customerId==null){
	        	alert('로그인 후 이용 가능합니다.');
	        	customerLogin();
	            } else {
	        	var content = $('#bbs_review_contents').val();
	        	$.ajax({
	        	    url: $.context()+"/post/comment",
	        	    method: "POST",
	        	    data: JSON.stringify({
	        		reg_date : getTodayValue(),
	        		content : content,
	        		customer_id : customerId,
	        		article_seq : seq
	        	    }),
	        	    dataType: "json",
	        	    contentType: "application/json",
	        	    success : function(data){
	        		boardDetail(seq, pageNo);
	        	    },
	        	    error : function(xhr,status,msg){
	        		alert(msg);
	        	    }
	        	});
	            }
	        });
	      },
	      error : function(xhr,status,msg){
	         alert(msg);
	      }
	    }); /* end of ajax */
	};
	var boardMain = function(pageNo){
	    checkLogin();
	    var ctx = $.context();
	    $.ajax({
	     url: ctx+"/get/board",
	     method: "POST",
	     data: JSON.stringify({}),
	     dataType: "json",
	     contentType: "application/json",
	     success : function(data){
	       var notice_list = [];
	       var article_list = [];
	       $.each(data.notice_list, function(i, notice){
	           notice_list.push(notice); 
	       });
	       $.each(data.article_list, function(i, article){
	           article_list.push(article);
	       });
	       
	       var count = data.article_count*1 + data.notice_count*1;
	       var view = boardMainView(count);
	       var notice_row = '';
	       for(var i=0; i<notice_list.length; i++){
	            var notice = notice_list[i];
	            notice_row += '<tr class="notice">'
	               +               '<td>-</td>'
	               +               '<td><b>전체</b></td>'
	               +               '<td><a id="notice'+notice_list[i].seq+'" class="goNotice" href="#">[공지]'+notice_list[i].title+'</a></td>'
	               +               '<td>'+notice_list[i].reg_date+'</td>'
	               +               '<td>'+notice_list[i].hits+'</td>'
	               +           ' </tr>';
	       }
	       view += notice_row;
	       
	       var article_count = 10 - notice_list.length*1;
	       var pageCount = data.article_count/article_count+1; 
	       var article = '';
	       for(var i=(pageNo-1)*article_count; i<pageNo*article_count; i++){
	           var multiplex = checkMultiplex(article_list[i].multiplex_seq*1);
	           article += '<tr>'
	              +      '<td>'+article_list[i].seq+'</td>'
	              +      '<td>'+multiplex+'</td>'
	              +      '<td><a id="detail'+article_list[i].seq+'" class="goBDetail" href="#">'+article_list[i].title+'</a></td>'
	              +      '<td>'+article_list[i].reg_date+'</td>'
	              +      '<td>'+article_list[i].hits+'</td>'
	              +   '</tr>';
	           if(article_list[i].seq==1){
	               break;
	           }
	       }
	       article +='</tbody></table></div>';
	       view += article;
	    
	       /* for pagination */
	       // 처음으로 가는 페이지 버튼
	       var pagination = '<div id="bbs_pagination" style="padding: 0 0 50px 310px;">'
	           +'         <table>'
	           +'            <tr>'
	           +'               <td>'
	           +'                  <a class="goFirstPage" href="#"><img src="'+$.context()+'/resources/img/pagination/prev_all.gif" alt="" /></a>';
	            
	       var prevPageNo = pageNo; // 이전 큰 페이지으로 가는 버튼의 페이지 넘버
	       if(pageNo%5==0) {
	             prevPageNo = prevPageNo-5;
	       } else {
	           prevPageNo = parseInt(prevPageNo/5)*5;
	       }
	       var prev_page_btn = ''; // 이전 큰 페이지으로 가는 버튼
	       
	       // 이전 큰 페이지로 가는 버튼이 출력되는지 확인하는 로직
	       if(parseInt(data.article_count*1/article_count)<=pageNo){
	          prev_page_btn = '<a class="goPrevPage" href="#"><img src="'+$.context()+'/resources/img/pagination/prev.gif" alt="" /></a>';
	       } else if((count/article_count)<5){
	           prev_page_btn = '';
	       }
	       pagination += prev_page_btn;
	       pagination += '</td><td id="bbs_pagination_number"><h4>';
	       
	       
	       var next_page_btn = ''; // 다음 큰 페이지로 가는 버튼
	       
	       // 큰 페이지의 개수가 5 미만일 때
	       if(pageCount/6==0){
	             next_page_btn = '';
	             for(var i=0; i<count/article_count; i++){
	        	 pagination += '<a id="page'+i+'" class="goPage" href="#">'+(i+1)+'</a>';
	             }
	       } else {
	          if(pageNo<=5){
	              for(var i=0; i<5; i++){
	        	  pagination += '<a id="page'+i+'" class="goPage" href="#">'+(i+1)+'</a>';
	              }
	          } else {
	              for(var i=5; i<count/article_count; i++){
	        	  pagination += '<a id="page'+i+'" class="goPage" href="#">'+(i+1)+'</a>';
	              }
	          }
	       }
	              
	       var nextPageNo = pageNo; // 다음 큰 페이지로 가는 버튼의 페이지 넘버
	       if(pageNo%5==0){ 
	          nextPageNo = nextPageNo+1; 
	       } else { 
		  nextPageNo = parseInt(nextPageNo/5)*5+6; 
	       }
	             
	       // 다음 큰 페이지로 가는 버튼이 출력되는지 확인하는 로직
	       if(parseInt(data.article_count*1/article_count)>pageNo){
		   next_page_btn = '<a class="goNextPage" href="#"><img src="'+$.context()+'/resources/img/pagination/next.gif" alt="" /></a>';
	       }
	       view += pagination;
	       view += '</h4></td><td>'+next_page_btn;
	  
	       // 마지막 큰 페이지로 가는 버튼
	       var last_page = (count/article_count).toFixed(0);
	       view += boardMainBottomView();
	  
	       $('#wrapper').html(view);
	       boardMainCss(pageNo);
	       
	       // 검색하는 로직
	       boardMainSearchEvent();
	       
	       $('#write').on('click',function(){
		   var customerId = abb1.cookie.getCookie('id');
		   if(customerId==null){
		       alert('글 작성은 로그인 후에 이용 가능합니다.');
		       customerLogin();
		   } else {
		       boardWrite(0);
		   }
	       });
               
               $('.goBDetail').on('click',function(){
                   var id = $(this).attr('id');
                   var num = $(this).attr('id').split('detail')[1]*1;
                   boardDetail(num, pageNo);
               });
               $('.goNotice').on('click',function(){
                   var id = $(this).attr('id');
                   var num = $(this).attr('id').split('notice')[1]*1;
                   boardNoticeDetail(num, pageNo);
               });
               $('#bbs_count').html(count);
                     
               $('.goFirstPage').on('click',function(){
                   boardMain(1);
               });
                    
               $('.goPrevPage').on('click',function(){
                   boardMain(prevPageNo);
               });
                    
               $('.goPage').on('click',function(){
                   var id = $(this).attr('id');
                   var num = id.split('page')[1];
                   boardMain(num*1+1);
               });
                    
               $('.goNextPage').on('click',function(){
                   boardMain(nextPageNo);
               });
                    
               $('.goLastPage').on('click',function(){
                   boardMain(last_page);
               });
                    
	     },
	     error : function(xhr,status,msg){
	        alert(msg);
	     }
	  }); /* end of ajax */
	};
	var boardMainSearchEvent = function(){
	    $('#board_main_find_search').on('click',function(){
		   var search = $('select[name=search]').val();
		   var keyword = $('#board_main_find_keyword').val();
		   $.ajax({
		      url: $.context()+"/get/board/find",
		      method: "POST",
		      data: JSON.stringify({
			  search : search,
			  keyword : keyword
		      }),
		      dataType: "json",
		      contentType: "application/json",
		      success : function(data){
			  $('#wrapper').html(boardMainSomeView());
			  $('#bbs_count').html(data.articleCount);
			  var body = '';
			  $.each(data.articleList, function(i,article){
			      var mulName = checkMultiplex(article.multiplex_seq);
			      body += '     <tr>'
				        +'        <td>'+article.seq+'</td>'
				        +'        <td><b>'+mulName+'</b></td>'
				        +'        <td><a id="detail'+article.seq+'" class="goBDetail" href="#">'+article.title+'</a></td>'
				        +'        <td>'+article.reg_date+'</td>'
				        +'        <td>'+article.hits+'</td>'
				        +'     </tr>'
			  });
			  $('#table_body').append(body);
			  
			  $('.goBDetail').on('click',function(){
		                   var id = $(this).attr('id');
		                   var num = $(this).attr('id').split('detail')[1]*1;
		                   boardDetail(num, 1);
		          });
			  $('#write').on('click',function(){
				   var customerId = abb1.cookie.getCookie('id');
				   if(customerId==null){
				       alert('글 작성은 로그인 후에 이용 가능합니다.');
				       customerLogin();
				   } else {
				       boardWrite(0);
				   }
			       });
			  boardMainCss(1);
			  boardMainSearchEvent();
		      },
		      error : function(xhr,status,msg){
		         alert(msg);
		      }
		  });
	       });  
	};
	var boardNoticeDetail = function(seq, pageNo){
	    $.ajax({
	      url: $.context()+"/get/notice/"+seq,
	      method: "POST",
	      data: JSON.stringify({}),
	      dataType: "json",
	      contentType: "application/json",
	      success : function(data){
        	var ctx = $.context();
        	var notice = data.notice;
        	var attach = attachFileCheck(notice);
        	$('#wrapper').html(boardNoticeDetailView(notice, attach));
        	boardNoticeDetailCss();
	        $('#goBMain').on('click',function(){
	            boardMain(pageNo);
	        });
	        var hits = data.notice.hits*1;
	        $.ajax({
	    	      url: $.context()+"/updateHits",
	    	      method: "POST",
	    	      data: JSON.stringify({
	    		  group : 'Notice',
	    		  hits : hits*1+1,
	    		  seq : seq
	    	      }),
	    	      dataType: "json",
	    	      contentType: "application/json",
	    	      success : function(data){},
	    	      error : function(xhr,status,msg){
	    	         alert(msg);
	    	      }
	    	  });
	      },
	      error : function(xhr,status,msg){
	         alert(msg);
	      }
	    }); /* end of ajax */
	};
	var boardWrite = function(seq){
	    if(seq!=0){
		// 업데이트 로직
		$('#wrapper').html(boardWriteView());
		boardWriteCss();
		$.ajax({
	    	      url: $.context()+"/get/board/"+seq,
	    	      method: "POST",
	    	      data: JSON.stringify({}),
	    	      dataType: "json",
	    	      contentType: "application/json",
	    	      success : function(data){
	    		  console.log(data.article);
	    		  $('#board_write_title').val(data.article.title);
	    		  $('#board_write_content').val(data.article.content);
	    		  $('#board_write_cancel').val('삭제');
	    		  $('#board_wrtie_confirm').val('수정');
	    		  $('#board_write_cancel').on('click',function(){
	    		      console.log(data.comment_list);
                	    	$.ajax({
                               	 url: $.context()+"/delete/article",
                               	 method: "POST",
                               	 data: JSON.stringify({
                               	     group : "Comment",
                               	     seq : data.comment_list[0].article_seq
                               	 }),
                               	 dataType: "json",
                               	 contentType: "application/json",
                               	 success : function(data){
                               	     console.log(data.result);
                                   },
                                   error : function(xhr,status,msg){
                                      alert(msg);
                                   }
                                });
	    		  });
	    	      },
	    	      error : function(xhr,status,msg){
	    	         alert(msg);
	    	      }
	    	  });
	    } else {
		$('#wrapper').html(boardWriteView());
		boardWriteCss();
		var multiplex = '';
		var multiplex_seq = 0;
		$('#board_write_select_multiplex').on('click',function(){
		    multiplex = '가산디지털';
		    var multiplexView = '<span>'+multiplex+'</span>';
		    $('#board_write_select_multiplex').after(multiplexView);
		    if(multiplex=='가산디지털'){
			multiplex_seq = 1;
		    }
		});
		$('#board_wrtie_confirm').on('click',function(){
		    if(multiplex_seq==0){
			alert('영화관을 선택해주세요.');
		    }
		    var title = $('#board_write_title').val();
		    var content = $('#board_write_content').val();
		    if(title=='' || content==''){
			alert('제목과 내용은 필수 입력사항입니다.');
		    } else {
			$.ajax({
			    url: $.context()+"/post/article",
			    method: "POST",
			    data: JSON.stringify({
				article_type : getKindOfArticleWrite(),
				title : title,
				content : content,
				file : '',
				reg_date : getTodayValue(), 
				hits : '0',
				customer_id : abb1.cookie.getCookie('id'),
				multiplex_seq : multiplex_seq
			    }),
			    dataType: "json",
			    contentType: "application/json",
			    success : function(data){
				if(data.result==1){
				    alert(getKindOfArticleWrite()+'글 작성이 완료되었습니다.');
				    boardMain(1);
				} else {
				    alert('알 수 없는 오류 발생');
				}
			    },
			    error : function(xhr,status,msg){
				alert(msg);
			    }
			});
		    }
		});
		$('#board_write_cancel').on('click',function(){
		    boardMain(1);
		});
	    }
	    
	};

	var reservationMain = function(){
	    $('#wrapper').html(reservationMainView());
	    $.ajax({
	       url: $.context()+"/get/reservation/",
	       method: "POST",
	       data: JSON.stringify({}),
	       dataType: "json",
	       contentType: "application/json",
	       success : function(data){
	          var info_list = data.info_list;
	          var dis_show_list = data.dis_show_list;
	          var timetable_list = data.timetable_list;
	          var json = {
	             dis_show_list : dis_show_list,
	             info_list : info_list
	          };
	          $('#reservation_movielist').html(showMovielistService(json));
	          
	          // TODO 1개씩만 선택되게 하기
	          possibleMovieClickEvent(data);
	          reservationMainCss();
	          
	       },
	       error : function(xhr,status,msg){
	     	  alert(msg);
	       }
	       
	   }); /* end of ajax */
	};
	var possibleMovieClickEvent = function(data){
	   var info_list = data.info_list;
	   var dis_show_list = data.dis_show_list;
	   var timetable_list = data.timetable_list;
	   var json = {
	            dis_show_list : dis_show_list,
	            info_list : info_list
	         };
	   var selectedMovieSeq = '', selectedMovieName = '';
	   $('.movie').on('click',function(){
	          var id = $(this).attr('id');
	          selectedMovieSeq = id.split('movie')[1];
	          $('#reservation_movielist').html(showMovielistService(json));
	          disableMovieListService(dis_show_list, selectedMovieSeq);
	          $('.disabled').on('click',function(){
	              alert('하나의 영화만 선택 가능합니다.'); 
	          });
	          $('.on').on('click',function(){
        	     $('#reservation_movielist').html(showMovielistService(json));
        	     $('#reservation_time').html('');
        	     possibleMovieClickEvent(data);
	          });
	          $('#reservation_time').html('<h4>'+checkMultiplex(1)+'</h4>');
	          for(var i=0; i<timetable_list.length; i++){
	              if(selectedMovieSeq == timetable_list[i].movSeq){
	        	  selectedMovieName = timetable_list[i].movTitle;
	        	  var json1 = {
	        		  info_list : info_list,
	        		  timetable_list : timetable_list,
	        		  i : i
	        	  };
        	          var resCount = reservationMovielist(json1).resCount;
        	          $('#reservation_time').append(reservationMainTimetableView(selectedMovieSeq, timetable_list));
        	          var shoSeq = timetable_list[i].shoSeq;
        	          $('#movieTitle'+shoSeq).html(timetable_list[i].movTitle);
        	          $('#theaterName'+shoSeq).html(timetable_list[i].theName);
        	          $('#startTime'+shoSeq).html(timetable_list[i].shoStartTime);
        	          $('#seatCount'+shoSeq).html(resCount+'석 / ' +timetable_list[i].theTotalSeat);
	              }	
	          }
	          
	          $('.goReservation').on('click',function(){
        	      var id = $(this).attr('id');
        	      var shoSeq = $(this).attr('id').split('rv')[1];
        	      reservationSeat(shoSeq);
	          });
	          $('#movieDetail').on('click',function(){
		        movieDetail(selectedMovieSeq);
		    });
	          reservationMainCss();
	      });
	};
	var reservationSeat = function(shoSeq){
	    $.ajax({
	      url: $.context()+"/get/reservation/",
	      method: "POST",
	      data: JSON.stringify({}),
	      dataType: "json",
	      contentType: "application/json",
	      success : function(data){
	         var seatCount = 0;
	         var seatReserved = [];
	         $.each(data.info_list, function(i, info){
	             if(info.shoSeq == shoSeq){
	        	 seatReserved.push(info.resId.split('-')[3]);
	             } 
	         });
	         $.each(data.timetable_list, function(i, time){
	             if(time.shoSeq == shoSeq){
	        	 seatCount = time.theTotalSeat;
	             } 
	         });
	         $('#wrapper').html(reservationSeatView());
	         $('#seat_area_table').html(reservationSeatTableView(seatCount));
	         showSeatTableService(seatCount, seatReserved);
	         makeAisleService(seatCount, [2, 8]);
	         reservationSeatCss();
	         
	         $('.reserved').on('click',function(){
	             alert('예약된 좌석은 선택할 수 없습니다.'); 
	         });
	         var json = {
	            seatCount : seatCount,
	            seatReserved : seatReserved,
	            timetable_list : data.timetable_list,
	            shoSeq : shoSeq
	         };
	         possibleSeatClickEvent(json);
	      
	      },
	      error : function(xhr,status,msg){
	           alert(msg);
	      }
	  }); /* end of ajax */
	
	};
	var possibleSeatClickEvent = function(o){
	   var seatCount = o.seatCount;
	   var seatReserved = o.seatReserved;
	   var timetable_list = o.timetable_list;
	   var shoSeq = o.shoSeq;
	   $('.can').on('click',function(){
	          var id = $(this).attr('id');
	          $('#seat_area_table').html(reservationSeatTableView(seatCount));
	          makeAisleService(seatCount, [2, 8]);
	          disableSeatTableService(seatCount, id);
	          $('.disabled').on('click',function(){
	              alert('먼저 선택한 좌석을 해제한 후 선택하세요.'); 
	          });
	          $('#seat').append(reservationSeatTicketingTableView());
	          $('#ticketing_tr2').html(reservationSeatInfoView());
	          $.each(timetable_list, function(i,time){
	              if(time.shoSeq == shoSeq){
	        	  $('#moviePoster').attr('src',$.context()+'/resources/img/movie/'+time.movPicMain);
	        	  $('#ticketing_movie_title').html(time.movTitle);
	        	  $('#ticketing_movie_type').html(time.movInfo);
	        	  var grade = '';
	        	  if(time.movGrade=='all'){
	        	      grade = '전체관람가';
	        	  } else {
	        	      grade = time.movGrade + '세이상관람가';
	        	  }
        	          $('#movGrade').html(grade);
        	          $('#showdate').html(time.shoShowDate);
        	          $('#runningTime').html(time.shoStartTime + '~' + time.shoEndTime);
        	          $('#multiplexName').html(time.mulName + ' ' + time.theName);
        	          $('#seatNum').html(id);
        	          var cost = generateCost(time.shoPrice) + '원';
        	          $('#ticketing_cost').html(cost);
        	          $('#ticketing_cost_total').html(cost);
	              }
	          });
	          reservationSeatCss();
	          $('.selected').on('click',function(){
        	      $('#wrapper').html(reservationSeatView());
        	      $('#seat_area_table').html(reservationSeatTableView(seatCount));
        	      showSeatTableService(seatCount, seatReserved);
        	      makeAisleService(seatCount, [2, 8]);
        	      reservationSeatCss();
        	      possibleSeatClickEvent(o);
	          });
	          $('#doReservation').on('click',function(){
	              var customerId = abb1.cookie.getCookie('id');
	              console.log(timetable_list);
	              alert(customerId);
		      if(abb1.cookie.getCookie('id')==null){
		      	 alert('로그인 후에 예매가 가능합니다. 로그인 페이지로 이동합니다.');
		      	 customerLogin();
		      }  else {
			  var json = {
				  timetable_list : timetable_list, 
				  seatId : id, 
				  shoSeq : shoSeq
			  };
			  var reg_date = generateReservationKey(json).reg_date;
			  var reservationId = generateReservationKey(json).reservationId;
			  var showingSeq = generateReservationKey(json).showingSeq;
			  $.ajax({
			       url: $.context()+"/post/reservation/",
			       method: "POST",
			       data: JSON.stringify({
				   id : reservationId,
				   reg_date : reg_date,
				   canceled : 'N',
				   price : '10000',
				   hcount : '1',
				   customer_id : abb1.cookie.getCookie('id'),
				   showing_seq : showingSeq
			       }),
			       dataType: "json",
			       contentType: "application/json",
			       success : function(data){
				   alert(data.result);
				   customerMypage();
			       },
			       error : function(xhr,status,msg){
			            alert(msg);
			       }
			   });
		      }
		  });
	   });
	};
	var multiplexMain = function(seq){
	    var ctx = $.context();
	    $.ajax({
	       url: ctx+"/get/multiplex/"+seq,
	       method: "POST",
	       data: JSON.stringify({}),
	       dataType: "json",
	       contentType: "application/json",
	       success : function(data){
	          var info_list = data.info_list;
	          var theater_count = data.theater_count;
	          var dis_show_list = data.dis_show_list;
	          var timetable_list = data.timetable_list;
	          // 인포메이션 리스트를 배열에 넣는 로직
	          $.each(data.info_list, function(i, info){
	              info_list.push(info); 
	          });
	          
	          // 영화관별 총 좌석 수 구하는 로직
	          var seat_total = 0;
	          $.each(data.theater_list, function(i, theater){
	              if(seq == theater.multiplex_seq){
	             seat_total += theater.total_seat*1; 
	              }
	          });
	          
	          // 영화관 이름 및 주소
	          var multiplex_name = '';
	          var multiplex_addr = '';
	          for(var i=0; i<info_list.length; i++){
	              if(seq==info_list[i].mulSeq){
	             multiplex_name = info_list[i].mulName;
	             multiplex_addr = info_list[i].mulAddress;
	              }
	          }
	          // 다중 파라미터를 간편히 입력하기 위한 JSON 생성
	          var o = {
	             ctx : ctx,
	             multiplex_name : multiplex_name,
	             multiplex_addr : multiplex_addr,
	             count : theater_count,
	             seat_total : seat_total,
	             seq : seq
	          };
	       var view = multiplexMainInfo(o);
	    
	       /* Calendar API */
	       view += multiplexMainCalendarView();
	    
	       view += multiplexMainTimetableService(data);
	       $('#wrapper').html(view);
	    
	       multiplexMainCss();
	       $('.goMain').on('click',function(){
	           multiplexMain(seq);
	              });
	         
	       $('.goMap').on('click',function(){
	           multiplexMap(seq);
	              });
	    
	       $('.goMD').on('click',function(){
	           var id = $(this).attr('id');
	           movieDetail(id);
	              });
	    
	       $('.goR').on('click',function(){
	           var id = $(this).attr('id');
	           var shoSeq = id.split('rv')[1];
	           reservationSeat(shoSeq);
	      });
	       },
	       error : function(xhr,status,msg){
	            alert(msg);
	       }
	   }); /* end of ajax */
	    
	    
	};
	var multiplexMap = function(seq){
	    $.ajax({
	         url: $.context()+"/get/multiplex/"+seq,
	         method: "POST",
	         data: JSON.stringify({}),
	         dataType: "json",
	         contentType: "application/json",
	         success : function(data){
	    var axis;
	    $.each(data.info_list, function(i, info){
	        if(info.mulSeq==seq){
	           axis = info.mulAxis;
	        }
	    })
	    
	      /* Google Map API */
	    var googlemap_api_with_key = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD9Z-OH7NHZvC5Nn-aG5BEDPl9Egpu3AIg&callback=initMap';
	    $.getScript(googlemap_api_with_key, function(){
	        initMap(axis);
	    });
	    $('#wrapper').html(multiplexMapView());
	       
	    $('.goMain').on('click',function(){
	        multiplexMain(seq);
	    });
	    multiplexMapCss();
	         },
	         error : function(xhr,status,msg){
	            alert(msg);
	         }
	     }); /* end of ajax */
	};
	    	    
	function initMap(axis) {
	    var latval = axis.split(', ')[0]*1;
	    var lngval = axis.split(', ')[1]*1;
	    var pos = {lat: latval, lng: lngval};
	    var map = new google.maps.Map(document.getElementById('map'), {
		    center: pos,
		    zoom: 17
	    });
	    var marker = new google.maps.Marker({
		    position: pos,
		    map: map
	    });
	};
	    	    
	var movieDetail = function(seq){
	      var ctx = $.context();
	      var john = ctx+'/resources/js/john.js';
	      $.ajax({
		      url: ctx+"/get/movieRank",
		      method: "POST",
		      data: JSON.stringify({
		          seq : seq
		      }),
		      dataType: "json",
		      contentType: "application/json",
		      success : function(data){
			  var rank = '', rate = '';
			  var movie_arr = [];
			  var review_list = [];
			  var total = 0;
			  
			  $.each(data.movie_list, function(i,movie){
			        total += movie.count*1;
			        movie_arr.push(movie);
			  });
			  $.each(data.review_list, function(i,review){
			      if(review.movie_seq==seq){
				  review_list.push(review);
			      }
			  });
			  movie_arr = movieSort(movie_arr);
			  var m;
			  $.each(movie_arr, function(i,movie){
			      var count = movie.count;
			      if(seq==movie.seq){
				  rank = (i+1) + '';
				  rate = (count/total*100).toFixed(1);
				  m = movie;
			      }
			  });
			  var view = movieDetailView(rank, rate, m);
			  view += makeReview((review_list.length > 3) ? 3 : review_list.length, review_list);
			  $('#wrapper').html(view);
			  movieDetailCss();
				/*-- Google API Loading --*/
			  movieStatistic(m);
			  abb1.util.starRating();
		      },
		      error : function(xhr,status,msg){
		          alert(msg);
		      }
	      }); /*end of $.ajax for movieRank*/
	      
	};
	var movieMain = function(){
	    $.ajax({
	        url: $.context()+"/get/movieRank",
	        method: "POST",
	        data: JSON.stringify({}),
	        dataType: "json",
	        contentType: "application/json",
	        success : function(data){
	          	$('#wrapper').html(movieMainView());
	          	var movie_list = data.movie_list;
	            var review_list = data.review_list; 
	            var review_total = [0, 0, 0, 0, 0, 0, 0, 0]; 
	            var review_count = [0, 0, 0, 0, 0, 0, 0, 0]; 
	            var total = 0;
	            $.each(data.movie_list, function(i,movie){
	                total += movie.count*1;
	            });
	            
	            movie_list = movieSort(movie_list);
	            countReview(movie_list, review_list, review_count, review_total);
	         
	            var gpa = 0.0;
	            var list = '<ul>';
	            for(var i=0; i<4; i++){
	                list += movieMainList(movie_list, i, calcGpa(review_count, review_total), total);
	            }
	            list += '</ul>';
	            $('#movieList').html(list);
	            
	            list = '<ul>';
	            for(var i=4; i<8; i++){
	                list += movieMainList(movie_list, i, calcGpa(review_count, review_total), total);
	         	}
	            
	            list += '</ul>';
	            $('#movieList2').html(list);
	            movieMainCss();
	            
	            $('.goMovie').on('click',function(){
	                var id = $(this).attr('id');
	                var num = $(this).attr('id').split('movie')[1]*1;
	                movieDetail(movie_list[num].seq);
	            });
	            
	  	        $('#order_by_rate').on('click',function(){
	  	            orderByRate(data);
	  	        });
	  	        $('#order_by_gpa').on('click',function(){
	  	            orderByGpa(data);
	  	        });
	        },
	        error : function(xhr,status,msg){
	           alert(msg);
	        }
	     });
	};
	var footerWhite = function(){
		$('#footer').find('div:first-child').css('margin-top','40px');
	};
	return{
	   onCreate: onCreate
	}
})();