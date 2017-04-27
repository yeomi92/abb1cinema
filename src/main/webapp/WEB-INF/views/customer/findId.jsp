<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../common/headerLogin.jsp"/>
<div class="abb1_bgcolor_beige abb1_padding_top_20 abb1_padding_bottom_20">
<div class="abb1_width_left"> 
<h2 class="abb1_color_bold_brown"><strong>회원 ID 찾기</strong></h2>
</div>
<div class="abb1_width_left_content abb1_bgcolor_white" style="padding-top:20px; padding-bottom: 20px;">
	<div class="abb1_page_info abb1_width_center" style="padding-top: 0px;">
		<table class="abb1_signup_form_control abb1_width_left">
         <tr>
         	<td><strong>이름</strong></td>
            <td colspan="2"><input type="text" style="margin-top: 15px;margin-bottom: 15px;"></td>
         </tr>
         <tr>
         	<td><strong>이메일</strong></td>
            <td colspan="2"><input type="text" style="margin-top: 15px;margin-bottom: 15px;"></td>
         </tr>
         <tr>
         <td><span class="abb1_red_font" style="margin-right: -45px;">인증번호를 받을</span></td>
         <td><span class="abb1_red_font">이메일를 입력하세요.</span></td>
         <td><input type="button" style="margin-top: 15px;margin-bottom: 15px;background-color: #efebdb" value="전송"></td>
         </tr>
         <tr>
         	<td><strong>인증번호</strong></td>
            <td colspan="2"><input type="text" style="margin-top: 15px;margin-bottom: 15px;"></td>
         </tr>
      </table>
	<ul class="abb1_page_ul_inline">
		<li class="abb1_page_li_inline" style="margin-right: 30px;">
			<a href="${context}/customer/login"><input type="button" value="취소" class="btn abb1_btn_lg abb1_btn_verification" style="height: 50px;width: 150px;font-size: 17px;background-color: #efebdb" /></a>
		</li>
		<li class="abb1_page_li_inline">
			<a href="${context}/customer/findIdSuccess"><input type="button" value="확인" class="btn abb1_btn_lg abb1_btn_verification" style="height: 50px;width: 150px;font-size: 17px;background-color: #efebdb" /></a>
		</li>
	</ul>
	</div>
</div>
</div>
<jsp:include page="../common/footer.jsp"/>