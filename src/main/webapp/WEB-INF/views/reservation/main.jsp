<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../common/header.jsp"/>
<div id="container" class="abb1_reservation">
<div id="reservation">
   <div class="abb1_reservation_main_form">
   <table class="abb1_reservation_calendar">
      <tr>
         <td>
         <span class="abb1_font_size_25">2017-04-27 <a href="#"><img src="${context}/resources/img/icon/calendar.png" alt="" width="30px" height="30px"/></a></span>
         </td>
      </tr>
   </table>
   <table class="abb1_reservation_multiplex">
      <colgroup>
         <col class="abb1_width_60" />
         <col class="abb1_width_40" />
      </colgroup>
      <tr class="abb1_border_top_2">
         <td><span>영화관</span></td>
         <td><span>영화</span></td>
      </tr>
      <tr>
         <td>
         <div class="abb1_reservation_tab_scroll">
         <ul class="abb1_reservation_theater_zone">
            <li>
            <span class="abb1_reservation_area_zone"><a href="#" class="abb1_reservation_tab_cont on">서울(<em>8</em>)</a></span>
            <div class="abb1_reservation_area_cont on"><ul class="abb1_reservation_area_list">
               <li><a href="#" class="on">가산디지털</a></li>
               <li><a href="#">가양</a></li>
               <li><a href="#">강동</a></li>
               <li><a href="#">건대입구</a></li>
               <li><a href="#">김포공항</a></li>
               <li><a href="#">노원</a></li>
               <li><a href="#">독산</a></li>
               <li><a href="#">브로드웨이(신사)</a></li>
               <li><a href="#">서울대입구</a></li>
            </ul>
            </div>
            </li>
            <div class="abb1_reservation_area_margin">
            <br><br><br><li><a href="#" class="abb1_reservation_tab_cont on">경기/인천</a></li>
            <br><li><a href="#" class="abb1_reservation_tab_cont on">충청/대전</a></li>
            <br><li><a href="#" class="abb1_reservation_tab_cont on">전라/광주</a></li>
            <br><li><a href="#" class="abb1_reservation_tab_cont on">경북/대구</a></li>
            <br><li><a href="#" class="abb1_reservation_tab_cont on">경남/부산/울산</a></li>
            <br><li><a href="#" class="abb1_reservation_tab_cont on">강원</a></li>
            <br><li><a href="#" class="abb1_reservation_tab_cont on">제주</a></li>
            </div>
         </ul>
         </div>
         </td>
         <td>
         <ul class="abb1_reservation_movielist">
            <li><a href="#" class="on"><img src="${context}/resources/img/movie/grade_15.png" alt="" width="24px" height="24px"/> 특별시민</a></li>
            <li><a href="#"><img src="${context}/resources/img/movie/grade_12.png" alt="" width="24px" height="24px"/> 임금님의 사건수첩</a></li>
            <li><a href="#"><img src="${context}/resources/img/movie/grade_15.png" alt="" width="24px" height="24px"/> 분노의 질주: 더 익스트림</a></li>
            <li><a href="#"><img src="${context}/resources/img/movie/grade_15.png" alt="" width="24px" height="24px"/> 보안관</a></li>
            <li><a href="#"><img src="${context}/resources/img/movie/grade_all.png" alt="" width="24px" height="24px"/> 서서평, 천천히 평온하게</a></li>
            <li><a href="#"><img src="${context}/resources/img/movie/grade_all.png" alt="" width="24px" height="24px"/> 스머프: 비밀의 숲</a></li>
            <li><a href="#"><img src="${context}/resources/img/movie/grade_12.png" alt="" width="24px" height="24px"/> 가디언즈 오브 갤럭시 VOL.2</a></li>
         </ul>
         </td>
      </tr>
      <tr>
      <td colspan="2">
      <div class="abb1_reservation_confirm">
         <div class="abb1_reservation_time">
         <h3 class="sub_tit02"><span>상영시간</span><span class="sub_etc"></span></h3>
         </div>
      </div>
      <div class="abb1_reservation_time_a">
         <h4 class="abb1_reservation_timetit">가산디지털</h4>
        <div id="movie_time_line" class="abb1_padding_15">
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
      </td>
      </tr>
   </table>
   </div>
</div>
</div>
<jsp:include page="../common/footer.jsp"/>