<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../common/header.jsp"/>
<div id="container">

</div>
<jsp:include page="../common/footer_white.jsp"/>

<script>
abb1.jquery.movie_main();
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
function order_by_rate(data, ctx){
    var movie_list = [];
    var review_list = []; 
    var review_total = [0, 0, 0, 0, 0, 0, 0, 0]; 
    var review_count = [0, 0, 0, 0, 0, 0, 0, 0]; 
    var total = 0;
    $.each(data.movie_list, function(i,movie){
      total += movie.count*1;
      movie_list.push(movie);
    });
    $.each(data.review_list, function(i,review){
      review_list.push(review);
    });
    
    movie_list = movie_sort(movie_list);
    
    for(var k=0; k<review_total.length; k++){
       for(var i=0; i<review_list.length; i++){
          if(movie_list[k].seq==review_list[i].movie_seq) {
            review_total[k] += review_list[i].gpa*1;
            review_count[k]++;
          }
      }
    }
    
    var gpa = 0.0;
    var list = '<ul>';
    for(var i=0; i<4; i++){
      gpa = review_count[i]!=0 ? review_total[i]/review_count[i] : 0.0;
      list +='               <li>'
         +'                  <table>'
         +'                     <tr>'
         +'                        <td><a href="javascript:abb1.jquery.movie_detail('+movie_list[i].seq+')"><img src="'+ctx+'/resources/img/movie/'+movie_list[i].pic_main+'" width="228px" height="333.99px" alt="..."></a></td>'
         +'                     </tr>'
         +'                     <tr>'
         +'                        <td><a href="javascript:abb1.jquery.movie_detail('+movie_list[i].seq+')">'+ movie_list[i].title +'</a></td>'
         +'                     </tr>'
         +'                     <tr>'
         +'                        <td>예매율 '+(movie_list[i].count/total*100).toFixed(1)+'% | 관람평점 '+ gpa.toFixed(1)+'</td>'
         +'                     </tr>'
         +'                  </table>'
         +'               </li>';
    }
    list += '</ul>';
    $('#movieList').html(list);
    list = '<ul>';
    for(var i=4; i<8; i++){
      gpa = review_count[i]!=0 ? review_total[i]/review_count[i] : 0.0;
      list +='               <li>'
         +'                  <table>'
         +'                     <tr>'
         +'                        <td><a href="javascript:abb1.jquery.movie_detail('+movie_list[i].seq+')"><img src="'+ctx+'/resources/img/movie/'+movie_list[i].pic_main+'" width="228px" height="333.99px" alt="..."></a></td>'
         +'                     </tr>'
         +'                     <tr>'
         +'                        <td><a href="javascript:abb1.jquery.movie_detail('+movie_list[i].seq+')">'+ movie_list[i].title +'</a></td>'
         +'                     </tr>'
         +'                     <tr>'
         +'                        <td>예매율 '+(movie_list[i].count/total*100).toFixed(1)+'% | 관람평점 '+ gpa.toFixed(1)+'</td>'
         +'                     </tr>'
         +'                  </table>'
         +'               </li>';
    }
    
    list += '</ul>';
    $('#movieList2').html(list);
    var movieMain=$('#movieMain');
   movieMain.find('div:nth-child(1)').addClass('abb1_movie_btns');
   movieMain.find('ul').addClass('abb1_ul_inline');
   movieMain.find('li').addClass('abb1_li_inline');
   movieMain.find('div:nth-child(1) li:nth-child(1)>a').addClass('abb1_movie_now_btn');
   movieMain.find('div:nth-child(1) li:nth-child(2)>a').addClass('abb1_movie_future_btn');
   $('#order').addClass('abb1_width_right');
   $('#order').find('li:nth-child(1) a').addClass('abb1_padding_right_5');
   
   $('#movieList').addClass('abb1_movie_list_div');
   $('#movieList2').addClass('abb1_movie_list_div');
   movieMain.find('table').addClass('abb1_movie_table');
   movieMain.find('table tr:nth-child(1)>td').addClass('abb1_nowMovie_border');
   movieMain.find('table tr:nth-child(2)>td').addClass('abb1_movie_table_title_td');
   movieMain.find('table tr:nth-child(3)>td').addClass('abb1_movie_table_rate_td');
}
function gpa_sort(review_list){
    var temp = 0;
    for(k=0; k<review_list.length; k++) {
      for(j=k+1; j<review_list.length; j++) {
         if(review_list[k].gpa*1<=review_list[j].gpa*1) {
            temp = review_list[k];
            review_list[k] = review_list[j];
            review_list[j] = temp;
         }
      }
   }
    var str = '';
    for(var i=0; i<review_list.length; i++){
      str += review_list[i].gpa + '\n';
    }
    alert(str);
    return review_list;
}
function order_by_gpa(data, ctx){
    var movie_list = []; 
    var review_list = [];
    var review_total = [0, 0, 0, 0, 0, 0, 0, 0]; 
    var review_count = [0, 0, 0, 0, 0, 0, 0, 0]; 
    var total = 0;
    $.each(data.movie_list, function(i,movie){
      total += movie.count*1;
      movie_list.push(movie);
    });
    $.each(data.review_list, function(i,review){
      review_list.push(review);
    });
    
    for(var k=0; k<review_total.length; k++){
       for(var i=0; i<review_list.length; i++){
          if(movie_list[k].seq==review_list[i].movie_seq) {
            review_total[k] += review_list[i].gpa*1;
            review_count[k]++;
          }
      }
    }
/*     진행중인 알고리즘, 월요일에 마무리 지어야함.
    조인을 하던지, 새로운 객체를 만들어서 사용하던지 해야함.
    안그러면 Movie와 Review 테이블의 정렬이 어려움 */
    var gpa = 0.0;
    var list = '<ul>';
    for(var i=0; i<4; i++){
      gpa = review_count[i]!=0 ? review_total[i]/review_count[i] : 0.0;
      list +='               <li>'
         +'                  <table>'
         +'                     <tr>'
         +'                        <td><a href="javascript:abb1.jquery.movie_detail('+i+')"><img src="'+ctx+'/resources/img/movie/'+movie_list[i].pic_main+'" width="228px" height="333.99px" alt="..."></a></td>'
         +'                     </tr>'
         +'                     <tr>'
         +'                        <td><a href="javascript:abb1.jquery.movie_detail('+i+')">'+ movie_list[i].title +'</a></td>'
         +'                     </tr>'
         +'                     <tr>'
         +'                        <td>예매율 '+(movie_list[i].count/total*100).toFixed(1)+'% | 관람평점 '+ gpa.toFixed(1)+'</td>'
         +'                     </tr>'
         +'                  </table>'
         +'               </li>';
    }
    list += '</ul>';
    $('#movieList').html(list);
    list = '<ul>';
    for(var i=4; i<8; i++){
      gpa = review_count[i]!=0 ? review_total[i]/review_count[i] : 0.0;
      list +='               <li>'
         +'                  <table>'
         +'                     <tr>'
         +'                        <td><a href="javascript:abb1.jquery.movie_detail('+i+')"><img src="'+ctx+'/resources/img/movie/'+movie_list[i].pic_main+'" width="228px" height="333.99px" alt="..."></a></td>'
         +'                     </tr>'
         +'                     <tr>'
         +'                        <td><a href="javascript:abb1.jquery.movie_detail('+i+')">'+ movie_list[i].title +'</a></td>'
         +'                     </tr>'
         +'                     <tr>'
         +'                        <td>예매율 '+(movie_list[i].count/total*100).toFixed(1)+'% | 관람평점 '+ gpa.toFixed(1)+'</td>'
         +'                     </tr>'
         +'                  </table>'
         +'               </li>';
    }
    
    list += '</ul>';
    $('#movieList2').html(list);
    var movieMain=$('#movieMain');
   movieMain.find('div:nth-child(1)').addClass('abb1_movie_btns');
   movieMain.find('ul').addClass('abb1_ul_inline');
   movieMain.find('li').addClass('abb1_li_inline');
   movieMain.find('div:nth-child(1) li:nth-child(1)>a').addClass('abb1_movie_now_btn');
   movieMain.find('div:nth-child(1) li:nth-child(2)>a').addClass('abb1_movie_future_btn');
   $('#order').addClass('abb1_width_right');
   $('#order').find('li:nth-child(1) a').addClass('abb1_padding_right_5');
   
   $('#movieList').addClass('abb1_movie_list_div');
   $('#movieList2').addClass('abb1_movie_list_div');
   movieMain.find('table').addClass('abb1_movie_table');
   movieMain.find('table tr:nth-child(1)>td').addClass('abb1_nowMovie_border');
   movieMain.find('table tr:nth-child(2)>td').addClass('abb1_movie_table_title_td');
   movieMain.find('table tr:nth-child(3)>td').addClass('abb1_movie_table_rate_td');
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
          order_by_rate(data, ctx);
          $('#order_by_rate').on('click',function(){
            order_by_rate(data, ctx);
          });
          $('#order_by_gpa').on('click',function(){
            order_by_gpa(data, ctx);
          });
      },
      error : function(xhr,status,msg){
         alert(msg);
      }
   });
    
});
</script>