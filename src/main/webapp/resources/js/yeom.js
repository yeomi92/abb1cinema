/* 
 *------- useful variable 
 * var ctx = abb1.session.getContextPath();
 * var yeom = ctx+'/resources/js/yeom.js';
 */

/*==== function in index ========
@AUTHOR : Junyoung Park
@CREATE DATE : 2017-05-14
@UPDATE DATE : 2017-05-14

   index_movie_rank(data)
   play_youtube(id, src)
   show_slide()
   slide_click(add)
   slide_css(slide)
   view_index()
=================================*/
function customer_login_css(){
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
}
function customer_login_cookie(){
	var authId=$.cookie('authId');
	if(authId!=undefined){
		$('#customer_id').val(authId);
		$('#remember').prop("checked",true);
	}
	return authId;
}
function customer_login_success(data,ctx){
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
}
function customer_signup_view(){
	var view='<div id="signUp">'
    	+'	    <div>'
    	+'	      <h2>회원가입</h2>'
    	+'	      <div id="signup_tables">'
    	+'	         <table>'
    	+'	            <tr>'
    	+'	               <td><input id="id" name="id" type="text" placeholder="아이디"></td>'
    	+'	            </tr>'
    	+'	            <tr>'
    	+'	               <td id="result_id_msg"></td>'
    	+'	            </tr>'
    	+'	            <tr>'
    	+'	               <td><input id="pw" name="pw" type="password" placeholder="비밀번호"></td>'
    	+'	            </tr>'
    	+'	            <tr>'
    	+'	               <td id="result_pw_msg"></td>'
    	+'	            </tr>'
    	+'	            <tr>'
    	+'	               <td><input id="check_pw" type="password" placeholder="비밀번호 확인"></td>'
    	+'	            </tr>'
    	+'	            <tr>'
    	+'	               <td id="check_pw_msg"></td>'
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
    	+'	            <td><div><input type="radio" id="male" name="gender" value="M" checked="checked"/><label id="manLb" for="man">남자</label></div></td>'
    	+'	            <td><div><input type="radio" id="female" name="gender" value="F"/><label id="womanLb" for="woman">여자</label></div></td>'
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
}
function customer_signup_css(){
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
}
function customer_check_id(data){
	if (data.result===0) {
        if(abb1.util.checkId(id)){
        	$("#result_id_msg").text("사용 가능한 아이디입니다.");
        }else{
        	$("#result_id_msg").text("5~20자의 영문 소문자, 숫자와 특수기호( _ ),(-)만 사용 가능합니다.");
        }
    }else {
        $("#result_id_msg").text("이미 사용중인 아이디입니다.");
    }
}
function customer_check_pw(){
	if(abb1.util.checkPw($('#pw').val())){
    	$("#result_pw_msg").text("사용 가능한 비밀번호입니다.");
    }
    else{
    	$("#result_pw_msg").text("5~15자 영문 대 소문자, 숫자, 특수문자를 사용하세요.");
    }
}
function customer_correct_pw(){
	if($('#pw').val()===$('#check_pw').val()){
    	$("#check_pw_msg").text("비밀번호가 일치합니다.");
    }
}
function customer_updateInfo_view(){
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
	    	+'						<td><input id="pw" type="password" placeholder="비밀번호"><span id="result_pw_msg"></span><input id="check_pw" type="password" placeholder="비밀번호 확인"><h6 id="check_pw_msg"></h6></td>'
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
	    	+'						<a href="#"><input id="confirm" type="button" value="확인"/></a>'
	    	+'					</li>'
	    	+'				</ul>'
	    	+'			</div>'
	    	+'		</div>'
	    	+'	</div>';
	    $('#container').html(view);
}
function customer_updateInfo_css(){
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
}
function customer_updateInfo_info(){
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
}
function customer_updateInfo_phone(){
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
	return phone;
}
function customer_updateInfo_success(data){
	if(data.result===1){
		abb1.cookie.setCookie('pw',data.pw);
		abb1.cookie.setCookie('phone',data.phone);
		abb1.jquery.customer_mypageInfo();
	}
}

function customer_mypage_reservation(info_list,ctx,i){
	$('#movie_name'+i+'').text(info_list[i].movTitle);
	$('#movie_poster'+i+'').attr('src',ctx+'/resources/img/movie/'+info_list[i].movPicMain);
	$('#reservation_date'+i+'').text(info_list[i].resRegDate);
	$('#reservation_number'+i+'').text(info_list[i].resId);
	$('#reservation_price'+i+'').text(info_list[i].resPrice+'원');
	if(info_list[i].resCanceled==='N'){
		$('#canceled'+i+'').text('취소가능');
	}else if(info_list[i].resCanceled==='Y'){
		$('#canceled'+i+'').text('취소');
	}else{
		$('#canceled'+i+'').text('사용');
	}
}
function customer_mypage_reservation_table(i,ctx){
	var view='<div id="mypage_table'+i+'">	<table>'
	+'					<tr>'
	+'						<td id="movie_img'+i+'" rowspan="5"><span id="reservation_pic'+i+'"><img id="movie_poster'+i+'" src="" width="115px" height="150px" alt="" /></span></td>'
	+'						<td><span id="reservation_no'+i+'">예매번호</span></td>'
	+'						<td id="reservation_number'+i+'">123456789</td>'
	+'					</tr>'
	+'					<tr>'
	+'						<td>예매일</td>'
	+'						<td colspan="2" id="reservation_date'+i+'">2017-04-21</td>'
	+'					</tr>'
	+'					<tr>'
	+'						<td>사용상태</td>'
	+'						<td id="canceled'+i+'">취소가능</td>'
	+'						<td id="detail_icon'+i+'"><a id="detail'+i+'" href="#">상세<img src="'+ctx+'/resources/img/icon/downarrow.png" width="3%" height="3%" alt="" /></a></td>'
	+'					</tr>'
	+'					<tr>'
	+'						<td>예매내역</td>'
	+'						<td colspan="2" id="movie_name'+i+'">아빠는 딸</td>'
	+'					</tr>'
	+'					<tr>'
	+'						<td id="price_title'+i+'">총 결제 금액</td>'
	+'						<td colspan="2" id="reservation_price'+i+'">22,000원</td>'
	+'					</tr>'
	+'				</table></div>'
	return view;
}
function customer_mypage_css(length){
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
	for(var i=0;i<length;i++){
		$('#movie_img'+i+'').css('padding-right','35px');
		$('#reservation_pic'+i+'').addClass('abb1_margin_left_20');
		$('#reservation_no'+i+'').addClass('abb1_margin_right_20');
		$('#detail_icon'+i+'').css('text-align','right');
		$('#price_title'+i+'').css('padding-right','25px');
	}
}