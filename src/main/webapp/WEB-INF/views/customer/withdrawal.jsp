<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../common/headerLogin.jsp"/>
<div class="abb1_bgcolor_beige abb1_padding_top_20 abb1_padding_bottom_20">
<div class="abb1_width_left"> 
<h2 class="abb1_color_bold_brown"><strong>회원탈퇴</strong></h2>
</div>

<div class="abb1_width_left_content abb1_bgcolor_white" style="padding-top:20px; padding-bottom: 20px;">
	<div class="abb1_page_info abb1_width_center">
		<table class="abb1_signup_form_control abb1_width_left">
         <tr>
         	<h3>지금까지 이용해주셔서 감사드립니다!</h3>
         </tr>
      </table>
	<ul class="abb1_page_ul_inline">
		<li class="abb1_page_li_inline" style="margin-right: 30px;">
			<a href="${context}/customer/mypageInfo"><input type="button" value="취소" class="btn abb1_btn_lg abb1_btn_verification" style="height: 50px;width: 150px;font-size: 17px;background-color: #efebdb" /></a>
		</li>
		<li class="abb1_page_li_inline">
			<a href="${context}/web"><input type="button" value="확인" class="btn abb1_btn_lg abb1_btn_verification" style="height: 50px;width: 150px;font-size: 17px;background-color: #efebdb" /></a>
		</li>
	</ul>
	</div>
</div>
</div>
<jsp:include page="../common/footer.jsp"/>