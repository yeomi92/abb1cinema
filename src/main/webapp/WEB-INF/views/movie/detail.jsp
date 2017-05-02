<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../common/header.jsp"/>
<div id="container">
<div class="abb1_movie_detail_trailer">
<img src="${context}/resources/img/movie/movie_trailer_2.PNG" class="abb1_movie_trailer" alt="분노의 질주 : 더 익스트림" />
</div>
<div class="abb1_movie_detail_container">
<div class="abb1_movie_detail_info">

<ul class="abb1_ul_inline">
	<li class="abb1_li_inline">
		<table>
			<tr>
				<td><img src="${context}/resources/img/movie/movie_poster_2.png" width="228px" height="333.99px" alt="..."></td>
			</tr>
			<tr>
				<td class="abb1_height_10"></td>
			</tr>
			<tr>
				<td class="abb1_movie_btn_reservation_td">
				<a href="#" class="abb1_movie_btn_reservation">예매하기</a>
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
				<td class="abb1_height_50"><strong>예매율</strong></td>
				<td><span class="abb1_movie_rate">4</span> <span class="abb1_movie_detail_font_color">위, 13.2%</span></td>
				<td class="abb1_font_bold">관람평점</td>
				<td>9.0</td>
			</tr>
			<tr>
				<td class="abb1_height_50"><strong>등급</strong></td>
				<td colspan="3" class="abb1_movie_detail_font_color">[국내] 15세이상관람가</td>
			</tr>
			<tr>
				<td class="abb1_height_50"><strong>개봉일</strong></td>
				<td colspan="3" class="abb1_movie_detail_font_color">2017.04.12</td>
			</tr>
			<tr>
				<td class="abb1_height_50"><strong>기본정보</strong></td>
				<td colspan="3" class="abb1_movie_detail_font_color">스릴러/범죄/공포 미국(136분)</td>
			</tr>
		</table>
	</li>
</ul>
</div>
<div class="abb1_movie_detail_synopsys">
<table>
			<tr>
				<td colspan="4" class="abb1_font_bold"><h3>시놉시스</h3></td>
			</tr>
			<tr>
				<td colspan="4" class="abb1_movie_detail_synopsys_content">
				최강의 리더 최악의 적이 되다!<br><br>
				마침내 평화로운 일상으로 돌아온 리더 ‘도미닉’(빈 디젤)과 멤버들.
				그러던 어느 날, 멤버들은 도미닉이 첨단 테러 조직의 리더 ‘사이퍼’(샤를리즈 테론)와 함께 사상 최악의 테러를 계획하고 있음을 알게 된다. 리더의 배신으로 위기에 놓인 멤버들은 한때 팀을 모두 전멸시키려 했던 ‘데카드 쇼’(제이슨 스타뎀)까지 영입해 최악의 적이 되어버린 도미닉과의 피할 수 없는 대결을 앞두게 되는데…
				</td>
			</tr>
		</table>
</div>
<div id="donutchart" class="abb1_movie_donutchart"></div>
</div>
<div class="abb1_bgcolor_beige">
<div class="abb1_width_left">
<h3 class="abb1_movie_actor_title">감독 및 출연</h3>
</div>
<div class="abb1_movie_detail_actor_list">
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

<div class="abb1_movie_review_div">
<div class="abb1_movie_review_box">
<table class="abb1_movie_review_table">
	<tr>
		<td colspan="4"><h3>평점 및 영화 리뷰</h3></td>
		<td colspan="2" class="abb1_text_right">(한글 150자/영문300자)</td>
	</tr>
	<tr class="abb1_nowMovie_border">
		<td class="abb1_movie_review_gpa">
			<span class="abb1_font_size_20"><strong>평점</strong></span>
			<div class="abb1_margin_top_10">
			<span class="star-input">
			  <span class="input">
			    <input type="radio" name="star-input" id="p1" value="1"><label for="p1">1</label>
			    <input type="radio" name="star-input" id="p2" value="2"><label for="p2">2</label>
			    <input type="radio" name="star-input" id="p3" value="3"><label for="p3">3</label>
			    <input type="radio" name="star-input" id="p4" value="4"><label for="p4">4</label>
			    <input type="radio" name="star-input" id="p5" value="5"><label for="p5">5</label>
			    <input type="radio" name="star-input" id="p6" value="6"><label for="p6">6</label>
			    <input type="radio" name="star-input" id="p7" value="7"><label for="p7">7</label>
			    <input type="radio" name="star-input" id="p8" value="8"><label for="p8">8</label>
			    <input type="radio" name="star-input" id="p9" value="9"><label for="p9">9</label>
			    <input type="radio" name="star-input" id="p10" value="10"><label for="p10">10</label>
			  </span><br>
			  <output for="star-input"><b>0</b><strong>점</strong></output>
			</span>
			</div>
		</td>
		<td colspan="4" class="abb1_nowMovie_border">
			<textarea name="" id="" cols="100" rows="5" placeholder="영화 리뷰는 로그인 후에 작성하실 수 있습니다."></textarea>
		</td>
		<td class="abb1_movie_review_btn">
		<a href=""><span class="abb1_movie_review_btn_text">입력</span></a></td>
	</tr>
</table>
</div>
<div class="abb1_margin_top_20">
<table id="review" class="abb1_movie_review">
	<tr>
		<td colspan="3" class="abb1_text_left"><strong>평점: 9</strong></td>
	</tr>
	<tr>
		<td colspan="2">최고의 영화. 추천합니다.</td>
		<td class="abb1_text_right">염*선</td>
	</tr>
	<tr>
		<td colspan="3" class="abb1_text_right">2017-04-25</td>
	</tr>
</table>
<table id="review" class="abb1_movie_review">
	<tr>
		<td colspan="3" class="abb1_text_left"><strong>평점: 9</strong></td>
	</tr>
	<tr>
		<td colspan="2">최고의 영화. 추천합니다.</td>
		<td class="abb1_text_right">염*선</td>
	</tr>
	<tr>
		<td colspan="3" class="abb1_text_right">2017-04-25</td>
	</tr>
</table>
<table id="review" class="abb1_movie_review">
	<tr>
		<td colspan="3" class="abb1_text_left"><strong>평점: 9</strong></td>
	</tr>
	<tr>
		<td colspan="2">최고의 영화. 추천합니다.</td>
		<td class="abb1_text_right">염*선</td>
	</tr>
	<tr>
		<td colspan="3" class="abb1_text_right">2017-04-25</td>
	</tr>
</table>
</div>
</div>
</div>
<jsp:include page="../common/footer_white.jsp"/>
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
      

var starRating = function(){
  var $star = $(".star-input"),
      $result = $star.find("output>b");
  $(document)
    .on("focusin", ".star-input>.input", function(){
    $(this).addClass("focus");
  })
    .on("focusout", ".star-input>.input", function(){
    var $this = $(this);
    setTimeout(function(){
      if($this.find(":focus").length === 0){
        $this.removeClass("focus");
      }
    }, 100);
  })
    .on("change", ".star-input :radio", function(){
    $result.text($(this).next().text());
  })
    .on("mouseover", ".star-input label", function(){
    $result.text($(this).text());
  })
    .on("mouseleave", ".star-input>.input", function(){
    var $checked = $star.find(":checked");
    if($checked.length === 0){
      $result.text("0");
    } else {
      $result.text($checked.next().text());
    }
  });
};
starRating();
</script>