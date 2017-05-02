<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../common/headerLogin.jsp"/>
<div id="container">
<div class="abb1_find_id_container">
<div class="abb1_width_left"> 
<h2 class="abb1_color_bold_brown"><strong>회원 비밀번호 찾기</strong></h2>
</div>
<div class="abb1_find_id_div">
	<div class="abb1_find_id_inner_div">
		<table class="abb1_signup_form_control abb1_width_left">
         <tr>
         	<td><strong>아이디</strong></td>
            <td colspan="2"><input type="text" style="margin-top: 15px;margin-bottom: 15px;"></td>
         </tr>
         <tr>
         	<td><strong>이메일</strong></td>
            <td colspan="2"><input type="text" style="margin-top: 15px;margin-bottom: 15px;"></td>
         </tr>
         <tr>
         <td><span class="abb1_find_id_red_font">인증번호를 받을</span></td>
         <td><span class="abb1_red_font">이메일를 입력하세요.</span></td>
         <td><input type="button" style="margin-top: 15px;margin-bottom: 15px;background-color: #efebdb" value="전송"></td>
         </tr>
         <tr>
         	<td><strong>인증번호</strong></td>
            <td colspan="2"><input type="text" style="margin-top: 15px;margin-bottom: 15px;"></td>
         </tr>
         <tr>
         <td colspan="2" class="abb1_padding_left_73"><ul class="abb1_page_ul_inline">
		<li class="abb1_finc_id_cancel_btn">
			<a href="${context}/customer/login"><input type="button" value="취소" class="btn abb1_btn_lg abb1_btn_verification"  /></a>
		</li>
		<li class="abb1_page_li_inline">
			<a href="${context}/customer/findPwSuccess"><input type="button" value="확인" class="btn abb1_btn_lg abb1_btn_verification"  /></a>
		</li>
	</ul></td>
         </tr>
      </table>
	</div>
</div>
</div>
</div>
<jsp:include page="../common/footer.jsp"/>