<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../common/headerLogin.jsp"/>
<div class="abb1_bgcolor_beige abb1_padding_top_20 abb1_padding_bottom_20">
<div class="abb1_width_left"> 
<h2 class="abb1_color_bold_brown"><strong>마이시네마</strong></h2>
</div>
<div class="abb1_padding_top_20 abb1_width_left">
	<ul class="abb1_page_ul_inline">
		<li class="abb1_page_li_inline">
			<a href="" class="abb1_bgcolor_bold_brown abb1_color_bold_beige abb1_page_gnb_li">예매/구매내역</a>
		</li>
		<li class="abb1_page_li_inline">
			<a href="" class="abb1_bgcolor_beige abb1_color_bold_brown abb1_page_gnb_li">나의 정보관리</a>
		</li>
	</ul> 
</div>
<div class="abb1_width_left_content abb1_bgcolor_white" style="padding-bottom: 20px;">
	<ul class="abb1_page_ul_inline">
		<li class="abb1_page_li_inline">
			<a href="" class="abb1_detail_gnb_li"><strong>예매/구매내역</strong></a>
		</li>
		<li class="abb1_page_li_inline">
			<a href="" class="abb1_detail_gnb_li">취소내역</a>
		</li>
	</ul>
	<div class="abb1_page_reservation">
	<table>
		<tr style="margin-left: 20px;">
			<td rowspan="4"><span style="margin-left: 20px;"><img src="${context}/resources/img/movie/movie_poster_6.png" width="60%" height="60%" alt="" /></span></td>
			<td><span style="margin-right: 20px;">예매번호(예매일)</span></td>
			<td colspan="2">123456789(2017-04-21)</td>
		</tr>
		<tr>
			<td>사용상태</td>
			<td>취소가능</td>
			<td style="text-align: right;"><a href="${context}/customer/mypage">닫기<img src="${context}/resources/img/icon/uparrow.png" width="3%" height="3%" alt="" /></a></td>
		</tr>
		<tr>
			<td>예매내역</td>
			<td colspan="2">아빠는 딸</td>
		</tr>
		<tr>
			<td>총 결제 금액</td>
			<td colspan="2">22,000원</td>
		</tr>
	</table>
	<div class="abb1_detail_reservation" style="margin-top: 20px;">
	<div style="border-bottom:1px solid #cec8ca;margin-left: 10px;margin-right: 10px;">
	<h4>상세내용</h4>
	</div>
	<div style="margin-top: 15px;margin-bottom: 15px;">
	<table>
		<tr>
			<td rowspan="4"><span style="margin-left: 20px;"><img src="${context}/resources/img/movie/movie_poster_6.png" width="60%" height="60%" alt="" /></span></td>
			<td colspan="2"><h4><strong>아빠는 딸</strong></h4></td>
		</tr>
		<tr>
			<td>상영일</td>
			<td>2017-04-23 | 상영시간 13:50 ~ 15:55 | 상영관 가산디지털, 1관</td>
		</tr>
		<tr>
			<td>관람인원</td>
			<td>성인2 | 좌석 E10,E11</td>
		</tr>
		<tr>
			<td><span style="margin-right: 20px;">주문금액</span></td>
			<td>22,000원</td>
		</tr>
	</table>
	</div>
	<div>
	<table>
		<tr>
			<td style="text-align: right"><input type="button" value="결제취소" class="btn abb1_btn_lg abb1_btn_verification" style="height: 40px;width: 100px;font-size: 15px;" /></td>
		</tr>
	</table>
	</div>
	</div>
	</div>
</div>
</div>
<jsp:include page="../common/footer.jsp"/>