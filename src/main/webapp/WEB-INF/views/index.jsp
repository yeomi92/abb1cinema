<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<jsp:include page="common/header.jsp"/>
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
            <img src="resources/img/common/main_trailer.jpg" alt="" width="784px"/>
            </a>
            </td>
         </tr>
         <tr>
            <td>
            <ul id="rank_ul"></ul>
            </td>
         </tr>
         <tr>
            <td id="reservation">예매하기</td>
         </tr>
      </table>
   </div>
   <div id="slidePoster">
   </div>
   <div id="bannerbox">
         <img src="resources/img/common/bannerbox.png" alt="" />
   </div>
   <div id="eventBxMain" style="background: url(resources/img/common/bg_pattern.png) repeat left top;">
         <div>
            <div>Event</div>
            <img src="resources/img/common/eventBxMain.png" alt="" />
         </div>
   </div>
   <div id="bnShortcuts">
        <img src="resources/img/common/shortList.png" alt="" />
   </div>
</div>

<jsp:include page="common/footer_white.jsp"/>
<script>
function movie_sort(movie_arr){
    var temp = 0;
    for(k=0; k<movie_arr.length; k++) {
      for(j=k+1; j<movie_arr.length; j++) {
         if(movie_arr[k].count*1<=movie_arr[j].count*1) {
            temp = movie_arr[k];
            movie_arr[k] = movie_arr[j];
            movie_arr[j] = temp;
         }
      }
   }
    return movie_arr;
}
function index_movie_rank(data){
    var rank_li = '';
    var total = 0;
    var movie_arr = [];
    $.each(data.movie_list, function(i,movie){
       total += movie.count*1;
       movie_arr.push(movie);
    });
    $.each(movie_sort(movie_arr), function(i,movie){
      var count = movie.count;
      rank_li += '<li><a href="#"><em>'+(i+1)+'</em>'
                   + '<span class="abb1_rank_grade" style="background: url(resources/img/movie/grade_'+movie.grade+'.png);"></span>'
                   + '<span class="abb1_rank_moviename">'+ movie.title +'</span>'
                   + '</a>'
                   + '<em>'+(count/total*100).toFixed(1)+'%</em>'
                   + '</li>';
    });
    $('#rank_ul').html(rank_li);
}
function play_youtube(src){
    $('#trailer').html('<iframe width="784px" height="453px" src="'+src+'?autoplay=1"></iframe>')
}
function show_slide(){
    var slide = '<div><ul><li><a id="prev"><img src="resources/img/common/prev.png" alt="" /></a></li>';
   for(var i=0; i<4; i++){
       slide += '<li><a href="javascript:abb1.jquery.movie_detail()"><img src="resources/img/movie/movie_poster_'+i+'.png" alt="" width="188px" height="274px"/></a></li>';
   }
   slide_css(slide);
}

function slide_click(add){
    $('#prev').on('click',function(){
       var slide = '<div><ul><li><a id="prev"><img src="resources/img/common/prev.png" alt="" /></a></li>';
       add-=4;
         if(add==-4){
            add = 8;
         }
       for(var i=0+add; i<4+add; i++){
          slide += '<li><a href="javascript:abb1.jquery.movie_detail()"><img src="resources/img/movie/movie_poster_'+i+'.png" alt="" width="188px" height="274px"/></a></li>'
       }
       slide_css(slide);
      slide_click(add);
   });
    $('#next').on('click',function(){
       var slide = '<div><ul><li><a id="prev"><img src="resources/img/common/prev.png" alt="" /></a></li>';
       add+=4;
       if(add>=12){
         add = 0;
       }
       for(var i=0+add; i<4+add; i++){
          slide += '<li><a href="javascript:abb1.jquery.movie_detail()"><img src="resources/img/movie/movie_poster_'+i+'.png" alt="" width="188px" height="274px"/></a></li>'
       }
       slide_css(slide);
      slide_click(add);
   });
}
function slide_css(slide){
    slide += '<li><a id="next"><img src="resources/img/common/next.png" alt="" /></a></li></ul></div>'
    var slidePoster = $('#slidePoster');
   slidePoster.html(slide);
   slidePoster.find('div:first-child').addClass('abb1_width_100 abb1_text_center');
   slidePoster.find('ul').addClass('abb1_slidePoster');
   slidePoster.find('li:first-child').addClass('abb1_slideBtn');
   slidePoster.find('li:nth-child(6)').addClass('abb1_slideBtn');
}
$(function(){
    var ctx = abb1.session.getContextPath();
    $.ajax({
      url: ctx+"/get/movieRank",
      method: "POST",
      data: JSON.stringify({}),
      dataType: "json",
      contentType: "application/json",
      success : function(data){
          index_movie_rank(data);
          $.each(data.movie_list, function(i,movie){
            if(movie.trailer_main==1){
                play_youtube(movie.trailer_url);
            }
          });
         show_slide();
         var add = 0;
         slide_click(add);
      },
      error : function(xhr,status,msg){
         alert(msg);
      }
   });
   
   
   var boxoffice = $('#boxoffice');
   var botable = boxoffice.find('table');
   botable.addClass('abb1_tbboxoffice');
   botable.find('tr:first-child').find('td:first-child').addClass('abb1_tbboxoffice_firstcol');
   botable.find('ul').addClass('abb1_rank');
   $('#reservation').addClass('abb1_main_reservebtn');
   /* var slidePoster = $('#slidePoster');
   slidePoster.find('div:first-child').addClass('abb1_width_100 abb1_text_center');
   slidePoster.find('ul').addClass('abb1_slidePoster');
   slidePoster.find('li:first-child').addClass('abb1_slideBtn');
   slidePoster.find('li:nth-child(6)').addClass('abb1_slideBtn'); */
   var eventBxMain = $('#eventBxMain');
   eventBxMain.find('div:first-child').addClass('abb1_width_100 abb1_text_center');
   eventBxMain.find('div:first-child').find('div:first-child').addClass('abb1_eventBxMain');
});

</script>