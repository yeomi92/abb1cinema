<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../common/headerLogin.jsp"/>
<div>
<div class="abb1_find_id_container">
<div class="abb1_width_left"> 
<h2 class="abb1_color_bold_brown"><strong>회원탈퇴</strong></h2>
</div>

<div class="abb1_signup_success_div">
	<div class="abb1_page_info abb1_width_center">
		<table class="abb1_signup_form_control abb1_width_left">
         <tr>
         	<td style="text-align: center"><h3>지금까지 이용해주셔서 감사드립니다!</h3></td>
         </tr>
         <tr>
         <td  class="abb1_padding_left_73"><ul class="abb1_page_ul_inline">
		<li class="abb1_finc_id_cancel_btn">
			<a href="${context}/customer/mypageInfo"><input type="button" value="취소" class="btn abb1_btn_lg abb1_btn_verification"  /></a>
		</li>
		<li class="abb1_page_li_inline">
			<a href="${context}/web"><input type="button" value="확인" class="btn abb1_btn_lg abb1_btn_verification"  /></a>
		</li>
	</ul></td>
         </tr>
      </table>
	
	</div>
</div>
</div>
</div>
<jsp:include page="../common/footer.jsp"/>