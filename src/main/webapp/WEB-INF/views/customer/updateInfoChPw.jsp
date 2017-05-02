<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../common/headerLogin.jsp"/>
<div class="abb1_bgcolor_beige abb1_padding_top_20 abb1_padding_bottom_20">
<div class="abb1_width_left"> 
<h2 class="abb1_color_bold_brown"><strong>회원정보변경</strong></h2>
</div>

<div class="abb1_signup_success_div">
	<div class="abb1_page_info abb1_width_center">
		<table class="abb1_signup_form_control abb1_width_left">
         <tr>
         	<td><strong>아이디</strong></td>
            <td>yheisun</td>
         </tr>
         <tr>
         	<td><strong>비밀번호</strong></td>
            <td><input type="password" style="margin-top: 15px;margin-bottom: 15px;"></td>
         </tr>
         <tr>
         	<td colspan="2" class="abb1_padding_left_73"><ul class="abb1_page_ul_inline">
		<li class="abb1_finc_id_cancel_btn">
			<a href="${context}/customer/mypageInfo"><input type="button" value="취소" class="btn abb1_btn_lg abb1_btn_verification" style="height: 50px;width: 150px;font-size: 17px;background-color: #efebdb" /></a>
		</li>
		<li class="abb1_page_li_inline">
			<a href="${context}/customer/updateInfo"><input type="button" value="확인" class="btn abb1_btn_lg abb1_btn_verification" style="height: 50px;width: 150px;font-size: 17px;background-color: #efebdb" /></a>
		</li>
	</ul></td>
         </tr>
      </table>
	</div>
</div>
</div>
<jsp:include page="../common/footer.jsp"/>