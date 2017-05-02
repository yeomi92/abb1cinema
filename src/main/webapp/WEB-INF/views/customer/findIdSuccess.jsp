<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../common/headerLogin.jsp"/>
<div>
<div class="abb1_find_id_container">
<div class="abb1_width_left"> 
<h2 class="abb1_color_bold_brown"><strong>회원 ID 찾기</strong></h2>
</div>
<div class="abb1_find_id_div">
	<div class="abb1_page_info abb1_width_center">
		<table class="abb1_signup_form_control abb1_width_left">
         <tr>
         	<h4>회원님의 아이디는 <strong class="abb1_font_size_25">yheisun</strong>입니다.</h4>
         </tr>
      </table>
	<ul class="abb1_page_ul_inline">
		<li class="abb1_page_li_inline">
			<a href="${context}/customer/login"><input type="button" value="확인" class="btn abb1_btn_lg abb1_btn_verification" style="height: 50px;width: 150px;font-size: 17px;background-color: #efebdb" /></a>
		</li>
	</ul>
	</div>
</div>
</div>
</div>
<jsp:include page="../common/footer.jsp"/>