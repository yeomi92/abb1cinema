<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../common/header.jsp"/>
<div id="container">
	<div id="reservation">
	   <div id="reservation_main_form">
		   <table>
		      <tr>
		         <td>
		         	<span>2017-04-27 <a href="#"><img src="${context}/resources/img/icon/calendar.png" alt="" width="30px" height="30px"/></a></span>
		         </td>
		      </tr>
		   </table>
	   <table id="reservation_multiplex">
	      <colgroup>
	      	<col />
	      	<col />
	      </colgroup>
	      <tr>
	         <td><span>영화관</span></td>
	         <td><span>영화</span></td>
	      </tr>
	      <tr>
	         <td>
		         <div id="reservation_tab_scroll">
			         <ul>
			            <li>
				            <span><a id="reservation_tab_cont" href="#">서울(<em>8</em>)</a></span>
				            <div id="reservation_area_list">
				            <ul>
				               <li><a href="#">가산디지털</a></li>
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
			         </ul>
			         <br />
		            <div id="reservation_area">
		            <ul>
		            	<li><a href="#">경기/인천</a></li>
		            	<li><a href="#">충청/대전</a></li>
		            	<li><a href="#">전라/광주</a></li>
		            	<li><a href="#">경북/대구</a></li>
		            	<li><a href="#">경남/부산/울산</a></li>
		            	<li><a href="#">강원</a></li>
		            	<li><a href="#">제주</a></li>
		            </ul>
		            </div>
		         </div>
	         </td>
	         <td>
		         <ul id="reservation_movielist">
		            <li><a href="#"><img src="${context}/resources/img/movie/grade_15.png" alt="" width="24px" height="24px"/> 특별시민</a></li>
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
		      <div id="reservation_confirm">
		         <div>
		         	<h3><span>상영시간</span></h3>
		         </div>
		      </div>
		      <div id="reservation_time">
		         <h4>가산디지털</h4>
			        <div id="movie_time_line">
						<div>
							<span id="movie_title"><strong>특별시민</strong></span><img src="${context}/resources/img/icon/movieLink.png" alt="" />
						</div>
						<ul id="movie_timeline_ul">
						<a href="${context}/reservation/seat"><li><table>
							<tr>
							<td>1관</td>
							</tr>
							<tr>
							<td><strong>12:00</strong></td>
							</tr>
							<tr>
							<td> 50석 / 100석</td>
							</tr>
						</table>
						</li></a>
						<li>
						<table>
							<tr>
							<td>1관</td>
							</tr>
							<tr>
							<td><strong>12:00</strong></td>
							</tr>
							<tr>
							<td> 50석 / 100석</td>
							</tr>
						</table>
						</li>
						<li>
						<table>
							<tr>
							<td>1관</td>
							</tr>
							<tr>
							<td><strong>12:00</strong></td>
							</tr>
							<tr>
							<td> 50석 / 100석</td>
							</tr>
						</table>
						</li>
						<li>
						<table>
							<tr>
							<td>1관</td>
							</tr>
							<tr>
							<td><strong>12:00</strong></td>
							</tr>
							<tr>
							<td> 50석 / 100석</td>
							</tr>
						</table>
						</li>
						</ul>
					</div>
		      	</div>
		      </td>
	      </tr>
	   </table>
	   </div>
	</div>
	<!-- reservation -->
</div>
<jsp:include page="../common/footer.jsp"/>
<script>
abb1.jquery.reservation_main();
</script>