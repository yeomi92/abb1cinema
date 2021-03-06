<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../common/headerLogin.jsp"/>
<div id="wrapper">
    <div id="boxoffice">
      <table>
         <tr>
            <td>BOX OFFICE
            <div>
               <a id="orderbyticket" href="#">예매순</a>
               <a id="orderbyavg" href="#">평점순</a>
            </div>
            </td>
            <td rowspan="3"><a id="trailer" href="#">
            <img src="${context}/resources/img/common/main_trailer.jpg" alt="" width="784px"/>
            </a>
            </td>
         </tr>
         <tr>
            <td>
            <ul>
               <li><a id="rank1" href="#"><em>1.</em>
                  <span class="abb1_rank_grade" style="background: url(${context}/resources/img/movie/grade_15.png);"></span>
                  <span class="abb1_rank_moviename">특별시민</span>
               </a>
               <em id="rank1_stat">24.5%</em>
               </li>
               <li><a id="rank2" href="#"><em>2.</em>
                  <span class="abb1_rank_grade" style="background: url(${context}/resources/img/movie/grade_12.png);"></span>
                  <span class="abb1_rank_moviename">임금님의 사건수첩</span>
               </a>
               <em id="rank2_stat">19.5%</em>
               </li>
               <li><a id="rank3" href="#"><em>3.</em>
                  <span class="abb1_rank_grade" style="background: url(${context}/resources/img/movie/grade_15.png);"></span>
                  <span class="abb1_rank_moviename">보안관</span>
               </a>
               <em id="rank3_stat">15.9%</em>
               </li>
               <li><a id="rank4" href="#"><em>4.</em>
                  <span class="abb1_rank_grade" style="background: url(${context}/resources/img/movie/grade_15.png);"></span>
                  <span class="abb1_rank_moviename">분노의 질주</span>
               </a>
               <em id="rank4_stat">13.2%</em>
               </li>
               <li><a id="rank5" href="#"><em>5.</em>
                  <span class="abb1_rank_grade" style="background: url(${context}/resources/img/movie/grade_all.png);"></span>
                  <span class="abb1_rank_moviename">서서평</span>
               </a>
               <em id="rank5_stat">5.1%</em>
               </li>
               <li><a id="rank6" href="#"><em>6.</em>
                  <span class="abb1_rank_grade" style="background: url(${context}/resources/img/movie/grade_15.png);"></span>
                  <span class="abb1_rank_moviename">영웅본색2</span>
               </a>
               <em id="rank6_stat">4.1%</em>
               </li>
               <li><a id="rank7" href="#"><em>7.</em>
                  <span class="abb1_rank_grade" style="background: url(${context}/resources/img/movie/grade_12.png);"></span>
                  <span class="abb1_rank_moviename">아빠는 딸</span>
               </a>
               <em id="rank7_stat">3.1%</em>
               </li>
               <li><a id="rank8" href="#"><em>8.</em>
                  <span class="abb1_rank_grade" style="background: url(${context}/resources/img/movie/grade_12.png);"></span>
                  <span class="abb1_rank_moviename">가디언즈 오브 갤럭시</span>
               </a>
               <em id="rank8_stat">2.1%</em>
               </li>
            </ul>
            </td>
         </tr>
         <tr>
            <td id="reservation">예매하기</td>
         </tr>
      </table>
   </div>
   <div id="slidePoster">
      <div>
            <ul>
               <li><a href="#"><img src="${context}/resources/img/common/prev.png" alt="" /></a></li>
               <li><a id="slide1" href="#"><img src="${context}/resources/img/movie/movie_poster_0.png" alt="" width="188px" height="274px"/></a></li>
               <li><a id="slide2" href="#"><img src="${context}/resources/img/movie/movie_poster_1.png" alt="" width="188px" height="274px" /></a></li>
               <li><a id="slide3" href="#"><img src="${context}/resources/img/movie/movie_poster_2.png" alt="" width="188px" height="274px" /></a></li>
               <li><a id="slide4" href="#"><img src="${context}/resources/img/movie/movie_poster_3.png" alt="" width="188px" height="274px" /></a></li>
               <li><a href="#"><img src="${context}/resources/img/common/next.png" alt="" /></a></li>
            </ul>   
      </div>
   </div>
   <div id="bannerbox">
         <img src="${context}/resources/img/common/bannerbox.png" alt="" />
   </div>
   <div id="eventBxMain" style="background: url(${context}/resources/img/common/bg_pattern.png) repeat left top;">
         <div>
            <div>Event</div>
            <img src="${context}/resources/img/common/eventBxMain.png" alt="" />
         </div>
   </div>
   <div id="bnShortcuts">
        <img src="${context}/resources/img/common/shortList.png" alt="" />
   </div>
</div>
<jsp:include page="../common/footer.jsp"/>
<script>
$(function(){
	var boxoffice = $('#boxoffice');
	var botable = boxoffice.find('table');
	botable.addClass('abb1_tbboxoffice');
	botable.find('tr:first-child').find('td:first-child').addClass('abb1_tbboxoffice_firstcol');
	botable.find('ul').addClass('abb1_rank');
	$('#reservation').addClass('abb1_main_reservebtn');
	var slidePoster = $('#slidePoster');
	slidePoster.find('div:first-child').addClass('abb1_width_100 abb1_text_center');
	slidePoster.find('ul').addClass('abb1_slidePoster');
	slidePoster.find('li:first-child').addClass('abb1_slideBtn');
	slidePoster.find('li:nth-child(6)').addClass('abb1_slideBtn');
	var eventBxMain = $('#eventBxMain');
	eventBxMain.find('div:first-child').addClass('abb1_width_100 abb1_text_center');
	eventBxMain.find('div:first-child').find('div:first-child').addClass('abb1_eventBxMain');
});

init = {
   setting : function(){
       
   },
   youtube : function(){
       var trailer = $('#trailer');
       trailer.on('click',function(){
         trailer.html('<iframe width="784px" height="453px" src="https://www.youtube.com/embed/Py8g9CBJOag?autoplay=1"></iframe>')
       });
   }
};
init.setting();
init.youtube();
</script>