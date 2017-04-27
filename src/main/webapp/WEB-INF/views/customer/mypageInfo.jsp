<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../common/headerLogin.jsp"/>
<div class="abb1_bgcolor_beige abb1_padding_top_20 abb1_padding_bottom_20">
<div class="abb1_width_left"> 
<h2 class="abb1_color_bold_brown"><strong>마이시네마</strong></h2>
</div>
<div class="abb1_padding_top_20 abb1_width_left">
	<ul class="abb1_page_ul_inline">
		<li class="abb1_page_li_inline">
			<a href="${context}/customer/mypage" class="abb1_bgcolor_beige abb1_color_bold_brown abb1_page_gnb_li">예매/구매내역</a>
		</li>
		<li class="abb1_page_li_inline">
			<a href="#" class="abb1_bgcolor_bold_brown abb1_color_bold_beige abb1_page_gnb_li">나의 정보관리</a>
		</li>
	</ul> 
</div>
<div class="abb1_width_left_content abb1_bgcolor_white" style="padding-top:20px; padding-bottom: 20px;">
	<div class="abb1_page_info abb1_width_center">
	<ul class="abb1_page_ul_inline">
		<li class="abb1_page_li_inline" style="margin-right: 30px;">
			<a href="${context}/customer/updateInfoChPw"><input type="button" value="회원정보변경" class="btn abb1_btn_lg abb1_btn_verification" style="height: 50px;width: 150px;font-size: 17px;background-color: #efebdb" /></a>
		</li>
		<li class="abb1_page_li_inline">
			<a href="${context}/customer/withdrawal"><input type="button" value="회원탈퇴" class="btn abb1_btn_lg abb1_btn_verification" style="height: 50px;width: 150px;font-size: 17px;background-color: #efebdb" /></a>
		</li>
	</ul>
	</div>
</div>
</div>
<jsp:include page="../common/footer.jsp"/>