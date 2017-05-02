<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../common/headerLogin.jsp"/>
<div id="container">
<div class="abb1_find_id_container">
<div class="abb1_width_left"> 
<h2 class="abb1_color_bold_brown"><strong>마이시네마</strong></h2>
</div>
<div class="abb1_padding_top_20 abb1_width_left">
	<ul class="abb1_page_ul_inline">
		<li class="abb1_page_li_inline">
			<a href="#" class="abb1_mypage_select_btn">예매/구매내역</a>
		</li>
		<li class="abb1_page_li_inline">
			<a href="${context}/customer/mypageInfo" class="abb1_mypage_not_select_btn">나의 정보관리</a>
		</li>
	</ul> 
</div>
<div class="abb1_mypage_reservation_content">
	<ul class="abb1_page_ul_inline">
		<li class="abb1_page_li_inline">
			<a href="${context}/customer/mypage" class="abb1_detail_gnb_li">예매/구매내역</a>
		</li>
		<li class="abb1_page_li_inline">
			<a href="#" class="abb1_detail_gnb_li"><strong>취소내역</strong></a>
		</li>
	</ul>
	<div class="abb1_page_reservation">
	<table>
		<tr class="abb1_margin_left_20">
			<td rowspan="4"><span class="abb1_margin_left_20"><img src="${context}/resources/img/movie/movie_poster_6.png" width="60%" height="60%" alt="" /></span></td>
			<td><span class="abb1_margin_right_20">예매번호(예매일)</span></td>
			<td>123456789(2017-04-21)</td>
		</tr>
		<tr>
			<td>사용상태</td>
			<td>취소완료(2017-04-22)</td>
		</tr>
		<tr>
			<td>예매내역</td>
			<td>아빠는 딸</td>
		</tr>
		<tr>
			<td><span class="abb1_margin_right_20">총 결제 금액</span></td>
			<td>22,000원</td>
		</tr>
	</table>
	</div>
</div>
</div>
</div>
<jsp:include page="../common/footer.jsp"/>