<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../common/header.jsp"/>
<div id="container" class="abb1_bgcolor_beige">
<div>
<img src="${context}/resources/img/multiplex/theater.jpg" alt="" />
</div>
<div class="abb1_margin_left_100 abb1_padding_top_20">
<h2><strong>가산디지털</strong></h2>
<table id="multiplex_info">
	<tr>
		<td>서울 금천구 가산동,60-8 </td>
		<td class="abb1_multiplex_border_right"><strong>총 상영관수</strong></td>
		<td>1개관</td>
		<td class="abb1_multiplex_border_right"><strong>총 좌석수</strong></td>
		<td>100석</td>
	</tr>
</table>
</div>
<div class="abb1_margin_left_100">
<ul class="abb1_ul_inline">
<li class="abb1_li_inline abb1_multiplex_select_btn" ><a href="#" class="abb1_multiplex_select_a"><strong>상영시간표</strong></a></li>
<li class="abb1_li_inline abb1_multiplex_btn"><a href="${context}/multiplex/map" class="abb1_multiplex_a"><strong>위치정보</strong></a></li>
</ul>
</div>
<div  class="abb1_multiplex_calander">
<span class="abb1_font_size_22">2017-04-28</span><img src="${context}/resources/img/icon/calendar.png" width="3%" alt="" />
</div>
<div id="movie_time_line" class="abb1_movie_time_line">
<div class="abb1_padding_bottom_20">
<span class="abb1_multiplex_movie_title"><strong>특별시민</strong></span><img src="${context}/resources/img/icon/movieLink.png" alt="" />
</div>
<ul class="abb1_ul_inline">
<li class="abb1_li_inline abb1_padding_right_0"><table>
	<tr>
	<td>1관</td>
	</tr>
	<tr>
	<td><strong class="abb1_font_size_22">12:00</strong></td>
	</tr>
	<tr>
	<td> 50석 / 100석</td>
	</tr>
</table></li>
<li class="abb1_li_inline abb1_padding_right_0"><table>
	<tr>
	<td>1관</td>
	</tr>
	<tr>
	<td><strong class="abb1_font_size_22">12:00</strong></td>
	</tr>
	<tr>
	<td> 50석 / 100석</td>
	</tr>
</table></li>
<li class="abb1_li_inline abb1_padding_right_0"><table>
	<tr>
	<td>1관</td>
	</tr>
	<tr>
	<td><strong class="abb1_font_size_22">12:00</strong></td>
	</tr>
	<tr>
	<td> 50석 / 100석</td>
	</tr>
</table></li>
<li class="abb1_li_inline abb1_padding_right_0"><table>
	<tr>
	<td>1관</td>
	</tr>
	<tr>
	<td><strong class="abb1_font_size_22">12:00</strong></td>
	</tr>
	<tr>
	<td> 50석 / 100석</td>
	</tr>
</table></li>
</ul>
</div>
</div>
<jsp:include page="../common/footer.jsp"/>