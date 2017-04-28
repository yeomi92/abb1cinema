<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../common/header.jsp"/>
<div style="background-color: #231f20" class="abb1_width_center">
<img src="${context}/resources/img/movie/movie_trailer_2.PNG" style="margin-top: 30px; margin-bottom: 30px;" alt="" />
</div>
<div class="abb1_width_left" style="margin-top: 30px;">

<ul class="abb1_ul_inline">
	<li class="abb1_li_inline">
		<table>
			<tr>
				<td><img src="${context}/resources/img/movie/movie_poster_2.png" width="228px" height="333.99px" alt="..."></td>
			</tr>
			<tr>
				<td style="height: 10px;"></td>
			</tr>
			<tr>
				<td style="background-color: #231f20;padding: 11px 30px;font-size: 17px;text-align: center;">
				<a href="#" style="font-size: 17px;color: #cdc197;text-decoration: none;">예매하기</a>
				</td>
			</tr>
		</table>
	</li>
	<li class="abb1_li_inline">
		<table>
			<tr>
				<td colspan="4" class="abb1_font_bold"><h3>분노의 질주: 더 익스트림</h3></td>
			</tr>
			<tr>
				<td class="abb1_font_bold" style="height: 50px;">예매율</td>
				<td><span class="abb1_font_bold abb1_font_serif abb1_font_italic" style="font-size: 25px;">4</span> <span class="abb1_movie_detail_font_color">위, 13.2%</span></td>
				<td class="abb1_font_bold">관람평점</td>
				<td>9.0</td>
			</tr>
			<tr>
				<td class="abb1_font_bold" style="height: 50px;" >등급</td>
				<td colspan="3" class="abb1_movie_detail_font_color">[국내] 15세이상관람가</td>
			</tr>
			<tr>
				<td class="abb1_font_bold" style="height: 50px;">개봉일</td>
				<td colspan="3" class="abb1_movie_detail_font_color">2017.04.12</td>
			</tr>
			<tr>
				<td class="abb1_font_bold" style="height: 50px;">기본정보</td>
				<td colspan="3" class="abb1_movie_detail_font_color">스릴러/범죄/공포 미국(136분)</td>
			</tr>
		</table>
	</li>
</ul>
</div>
<div style="margin: 0 auto;width: 920px;text-align: left; margin-top: 30px;">
<table>
			<tr>
				<td colspan="4" class="abb1_font_bold"><h3>시놉시스</h3></td>
			</tr>
			<tr>
				<td colspan="4" class="abb1_movie_detail_font_color" style="height: 120px;">
				최강의 리더 최악의 적이 되다!<br><br>
				마침내 평화로운 일상으로 돌아온 리더 ‘도미닉’(빈 디젤)과 멤버들.
				그러던 어느 날, 멤버들은 도미닉이 첨단 테러 조직의 리더 ‘사이퍼’(샤를리즈 테론)와 함께 사상 최악의 테러를 계획하고 있음을 알게 된다. 리더의 배신으로 위기에 놓인 멤버들은 한때 팀을 모두 전멸시키려 했던 ‘데카드 쇼’(제이슨 스타뎀)까지 영입해 최악의 적이 되어버린 도미닉과의 피할 수 없는 대결을 앞두게 되는데…
				</td>
			</tr>
		</table>
</div>
<script type="text/javascript">
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['남자',     40.6],
          ['여자',     59.4]
        ]);
        var options = {
          title: '성별 선호도',
          pieHole: 0.4,
        };
        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
</script>
<div id="donutchart" class="abb1_width_center" style="width: 900px; height: 450px;"></div>

<div style="background-color: #f9f6ec;">
<h3>감독 및 출연</h3>
<div class="abb1_width_center" style="margin-top: 70px;padding-bottom: 70px;">
<ul class="abb1_ul_inline">
	<li class="abb1_li_inline"><img src="${context}/resources/img/movieProfile/movie_0_pic_director.jpg" alt="" />
	<br><br>F. 게리 그레이<br>감독</li>
	<li class="abb1_li_inline"><img src="${context}/resources/img/movieProfile/movie_0_pic_actor1.jpg" alt="" />
	<br><br>빈 디젤<br>배우</li>
	<li class="abb1_li_inline"><img src="${context}/resources/img/movieProfile/movie_0_pic_actor2.jpg" alt="" />
	<br><br>드웨인 존슨<br>배우</li>
	<li class="abb1_li_inline"><img src="${context}/resources/img/movieProfile/movie_0_pic_actor3.jpg" alt="" />
	<br><br>샤를리즈 테론<br>배우</li>
	<li class="abb1_li_inline"><img src="${context}/resources/img/movieProfile/movie_0_pic_actor4.jpg" alt="" />
	<br><br>제이슨 스타뎀<br>배우</li>
</ul>
</div>
</div>

<div class="abb1_width_left" style="margin-top: 30px;margin-bottom: 30px;">
<table style="width: 1000px;">
	<tr>
		<td colspan="4"><h3>평점 및 영화 리뷰</h3></td>
		<td colspan="2" style="text-align: right;">(한글 150자/영문300자)</td>
	</tr>
	<tr class="abb1_nowMovie_border">
		<td class="abb1_nowMovie_border" style="text-align: center;">
			<h4>평점</h4>
			<h5 class="abb1_star_rating">
			    <a href="#" class="on">★</a>
			    <a href="#" class="on">★</a>
			    <a href="#" class="on">★</a>
			    <a href="#" class="on">★</a>
			    <a href="#">★</a>
			</h5>
			<h5>5점</h5>
		</td>
		<td colspan="4" class="abb1_nowMovie_border">
			<textarea style="resize: none;" name="" id="" cols="80" rows="5" placeholder="영화 리뷰는 로그인 후에 작성하실 수 있습니다."></textarea>
		</td>
		<td class="abb1_nowMovie_border" style="background-color: #231f20;padding: 11px 30px;font-size: 17px;text-align: center;">
		<a href=""><h4 style="color: #cdc197;">입력</h4></a></td>
	</tr>
</table>
</div>
<div>
<table style="border-top-color: #666666;">
	<tr>
		<td>실관람객</td>
		<td colspan="2">평점: 9</td>
	</tr>
	<tr>
		<td colspan="2">액션 스케일 너무너무 좋아요.재미있게 잘봤습니다</td>
		<td>회워ID</td>
	</tr>
	<tr>
		<td colspan="3">2017-04-25</td>
	</tr>
</table>
</div>

<jsp:include page="../common/footer.jsp"/>
<script>
$( ".abb1_star_rating a" ).click(function() {
     $(this).parent().children("a").removeClass("on");
     $(this).addClass("on").prevAll("a").addClass("on");
     return false;
});
</script>