/*function reservationDetailService(){
	$('.abb1_detail_icon').on('click',function(){
		//다시 화면 그리기
		$.ajax({
			url: $.context()+'/getReservation',
			method: 'POST',
			data: JSON.stringify({
				id: abb1.cookie.getCookie('id')
			}),
			dataType: 'json',
			contentType: 'application/json',
			success: function(data){
				var info_list=[];
				$.each(data.infoList, function(i, info){
		             var o = {
		            		 cusPoint : info.cusPoint,
				             resId : info.resId,
				             resRegDate : info.resRegDate,
				             resCanceled : info.resCanceled,
				             resPrice : info.resPrice,
				             movTitle : info.movTitle,
				             movPicMain : info.movPicMain,
				             shoStartTime : info.shoStartTime,
				             shoEndTime : info.shoEndTime,
				             shoShowDate : info.shoShowDate,
				             mulName : info.mulName,
				             theName : info.theName,
				             resHcount : info.resHcount
		             };
		             info_list.push(o);
		        });
				$('#point').text(info_list[0].cusPoint);
				var view='';
				if(info_list.length===0){
					$('#mypage_reservation').append('<h5 id="default_msg">예매/구매내역이 없습니다.</h5>');
				}else{
					for(var i=0;i<info_list.length;i++){
						view=customerMypageReservationTable(i);
						if(i==0){
							$('#mypage_reservation').html(view);
						}else{
							$('#mypage_reservation').append(view);
						}
						customer_mypage_reservation(info_list,$.context(),i);
					}
					var mypage = $('#mypage');
					customerMypageCss();
				}
			}
		});
		var i = $(this).attr('id').split('_')[1]*1;
		$.ajax({
			url: $.context()+'/getReservationDetail',
			method: 'POST',
			data: JSON.stringify({
				id: $('#reservation_number'+i).text()
			}),
			dataType: 'json',
			contentType: 'application/json',
			success: function(data){
				$('#mypage_table'+i+'').append(reservationDetailView1(i, data));
				$('#detail_icon'+i+'').html('<a id="close" href="#">닫기<img src="'+$.context()+'/resources/img/icon/uparrow.png" width="3%" height="3%" alt="" /></a>');
				reservationDetailServiceCss(i);
				$('#close').on('click',function(){
					 	$(this).html('<a id="detail_icon'+i+'" href="#">상세<img src="'+$.context()+'/resources/img/icon/downarrow.png" width="3%" height="3%" alt="" /></a>');
						$('#detail_reservation'+i+'').remove();
					 //TODO: 다시 ajax를 부를 것인가?
				 });
				 $('#reservation_cancel'+i+'').on('click',function(){
					$.ajax({
						url: $.context()+'/putCanceled',
						method: 'POST',
						data: JSON.stringify({
							id: $('#reservation_number'+i).text()
						}),
						dataType: 'json',
						contentType: 'application/json',
						success: function(data){
							if(data.result===1){
								alert('취소되었습니다.');
								$.ajax({
									url: $.context()+'/getReservation',
									method: 'POST',
									data: JSON.stringify({
										id: abb1.cookie.getCookie('id')
									}),
									dataType: 'json',
									contentType: 'application/json',
									success: function(data){
										$('#point').text(data.infoList[0].cusPoint);
										var view='';
										if(data.infoList.length===0){
											$('#mypage_reservation').append('<h5 id="default_msg">예매/구매내역이 없습니다.</h5>');
										}else{
											$.each(data.infoList, function(i, info){
												 var canceled='';
												 if(info.resCanceled==='N'){
												 	 canceled='취소가능';
												 }else if(info.resCanceled==='Y'){
													 canceled='취소';
												 }else{
													 canceled='사용';
											   	 }
									             $('#mypage_reservation').append(reservationDetailView(i, canceled, info));
									        });
											customerMypageCss();
											reservationDetailService();
										}
									},
									error: function(xhr,status,msg){
										alert('실패 이유: '+msg)
									}
								});
							}
						},
						error: function(xhr,status,msg){
							alert('업데이트 실패 이유:')
						}
					});
					
				 });
				 reservationDetailService();
			},
			error: function(){
				alert('실패');
			}
		});
		
	});
}*/
function movieSort(movie_arr){
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
function playYoutube(id, src){
    $('#'+ id).html('<iframe width="784px" height="453px" src="'+src+'?autoplay=1"></iframe>')
}
function findYoutube(data){
    $.each(data.movie_list, function(i,movie){
        if(movie.trailer_main==1){
              playYoutube('trailer', movie.trailer_url);
        }
    });
}
function reverseArr(arr, count){
	var temp = [];
	for(var i=arr.length-1; i>arr.length-(1+count); i--){
		temp.push(arr[i]);
	}
	return temp;
}
function countReview(movie_list, review_list, review_count, review_total) {
    for (var k = 0; k < 8; k++) {
	 	for (var i = 0; i < review_list.length; i++) {
	 	    if (movie_list[k].seq == review_list[i].movie_seq) {
	 		review_total[k] += review_list[i].gpa * 1;
	 		review_count[k]++;
	 	    }
	 	}
    }
}
function calcGpa(count, total){
    var gpa = 0;
    for(var i=0; i<4; i++){
	gpa = count[i]!=0 ? total[i]/count[i] : 0.0;
    }
    return gpa;
}
function movieList(list){
    for(var i=0; i<4; i++){
        list += movieMainList(movie_list, i, calcGpa(review_count, review_total), total);
    }
    return list;
}
function orderByRate(data){
    var ctx = $.context();
    var movie_list = data.movie_list;
    var review_list = data.review_list; 
    var review_total = [0, 0, 0, 0, 0, 0, 0, 0]; 
    var review_count = [0, 0, 0, 0, 0, 0, 0, 0]; 
    var total = 0;
    $.each(data.movie_list, function(i,movie){
        total += movie.count*1;
    });
    $.each(data.review_list, function(i,review){
      review_list.push(review);
    });
    
    movie_list = movieSort(movie_list);
    countReview(movie_list, review_list, review_count, review_total);
 
    var gpa = 0.0;
    var list = '<ul>';
    for(var i=0; i<4; i++){
        list += movieMainList(movie_list, i, calcGpa(review_count, review_total), total);
    }
    list += '</ul>';
    $('#movieList').html(list);
    
    list = '<ul>';
    for(var i=4; i<8; i++){
        list += movieMainList(movie_list, i, calcGpa(review_count, review_total), total);
    }

    list += '</ul>';
    $('#movieList2').html(list);
    
    $('.goMovie').on('click',function(){
        var id = $(this).attr('id');
        var num = $(this).attr('id').split('movie')[1]*1;
        $('#'+id).on('click',function(){
    	movieDetail(movie_list[num].seq);
        });
    });
    movieMainListCss();
}
function orderByGpa(data){
    var ctx = $.context();
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
      list += movieMainList(movie_list, i, calcGpa(review_count, review_total), total);
    }
    list += '</ul>';
    $('#movieList').html(list);
    list = '<ul>';
    for(var i=4; i<8; i++){
      gpa = review_count[i]!=0 ? review_total[i]/review_count[i] : 0.0;
      list += movieMainList(movie_list, i, calcGpa(review_count, review_total), total);
    }

   list += '</ul>';
   movieMainListCss();
}
function calcGrade(m){
    var grade = '';
    if(m.grade=='all'){
 		grade = '전체';
    } else {
 		grade = m.grade + '세이상';
    }
    return grade;
}
function movieStatistic(m){
    var google_total = m.male_p*1 + m.female_p*1;
	var male = m.male_p/google_total * 100;
	var female = m.female_p/google_total * 100;
	abb1.api.google(male, female);
}
function attachFileCheck(notice){
    var attach = '';
    if(notice.file!='default'){
    	attach = '<img src="'+$.context()+'/resources/img/board/'+notice.file+'" alt="" />';
    }
    return attach;
}
function boardDetailCommentInit(comment_list){
    if(comment_list.length==0){
	    var comment = {
		    customer_id : '',
		    reg_date : '',
		    content : '댓글이 존재하지 않습니다. 첫 번째 댓글을 달아보세요!'
	    }
	    comment_list.push(comment);
	}  
}
function multiplexMainMovielist(o){
	var resCount = 0;
	var infoIdResTime = '';
	for(var k=0; k<o.info_list.length; k++){
		var infoIdMultiplexSeq = o.info_list[k].resId.split('-')[0];
		var infoIdMovieSeq = o.info_list[k].resId.split('-')[1];
		infoIdResTime = o.info_list[k].resId.split('-')[2];
		var resTime = infoIdResTime.substring(0,2) + ":" + infoIdResTime.substring(2,4);
		if(o.info_list[k].shoSeq == o.timetable_list[o.j].shoSeq && o.info_list[k].shoStartTime == resTime) {
		    resCount++;
		}
	}
	resCount=resCount/2;
	var json = {
			resCount : resCount,
			resTime : infoIdResTime
		};
	return json;
}

function checkMultiplex(seq){
	var multiplex = '';
	if(seq==1){
		multiplex = '가산디지털';
	} else if(seq==2){
		multiplex = '가양';
	}
	return multiplex;
}
function showMovielist(o){
	var movielist = '';
	for(var i=0; i<o.dis_show_list.length; i++){
		for(var j=0; j<o.info_list.length; j++){
			if(o.dis_show_list[i].movie_seq==o.info_list[j].movSeq){
				movielist += '<li><a id="movie'+o.dis_show_list[i].movie_seq+'" class="movie" href="#"><img src="'+$.context()+'/resources/img/movie/grade_'+o.info_list[j].movGrade+'.png" alt="" width="24px" height="24px"/> '+o.info_list[j].movTitle+'</a></li>';
				break;
			}
		}
	}
	return movielist;
}
function reservationMovielist(o){
	var resCount = 0;
	var infoIdResTime = '';
	var startTime = '';
	for(var k=0; k<o.info_list.length; k++){
		var infoIdMultiplexSeq = o.info_list[k].resId.split('-')[0];
		var infoIdMovieSeq = o.info_list[k].resId.split('-')[1];
		infoIdResTime = o.info_list[k].resId.split('-')[2];
		var resTime = infoIdResTime.substring(0,2) + ":" + infoIdResTime.substring(2,4);
		if(o.info_list[k].shoSeq == o.timetable_list[o.i].shoSeq && o.info_list[k].shoStartTime == resTime) {
		    startTime = infoIdResTime;
		    resCount++;
		}
	}
	var json = {
			resCount : resCount,
			resTime : startTime
		};
	return json;
}
function getChar(param){
    var char = '';
    if(param==0){
	char = 'A';
    } else if(param==1){
	char = 'B';
    } else if(param==2){
	char = 'C';
    } else if(param==3){
	char = 'D';
    } else if(param==4){
	char = 'E';
    } else if(param==5){
	char = 'F';
    } else if(param==6){
	char = 'G';
    } else if(param==7){
	char = 'H';
    } else if(param==8){
	char = 'I';
    } else if(param==9){
	char = 'J';
    } else if(param==10){
	char = 'K';
    } else if(param==11){
	char = 'L';
    } else if(param==12){
	char = 'M';
    } else {
	char = 'Z';
    }
    return char;
}
//
function showSeatTableService(seatCount, seatReserved){
    for(var i=1; i<=seatCount/10; i++){
    	    for(var j=1; j<=10; j++){
    		var row = $('#seat_area_table').find('tr:nth-child('+i+') td:nth-child(1)').text();
    		var col = $('#seat_area_table').find('tr:nth-child('+i+') td:nth-child(2) a:nth-child('+j+')').text();
    		var combination = '';
    		if(col!='10'){
    		    combination = row+'0'+col;
    		} else {
    		    combination = row+col;
    		}
    		if(seatReserved.length==0){
    		    $('#seat_area_table').find('tr:nth-child('+i+') td:nth-child(2) a:nth-child('+j+')').addClass('can');
    		} else {
    		    for(var k=0; k<seatReserved.length; k++){
    			if(combination == seatReserved[k]){
    			    $('#seat_area_table').find('tr:nth-child('+i+') td:nth-child(2) a:nth-child('+j+')').addClass('reserved');
    			    break;
    			} else {
    			    $('#seat_area_table').find('tr:nth-child('+i+') td:nth-child(2) a:nth-child('+j+')').addClass('can');
    			    break;
    			}
    		    }
    		}
    	    }
    	}
}
function disableSeatTableService(seatCount, id){
    for(var i=0; i<seatCount/10; i++){
	for(var j=1; j<=10; j++){
	    var compare = '';
	    if(j==10){
		compare = getChar(i)+j;
	    } else {
		compare = getChar(i)+'0'+j;
	    }
	    if(compare==id){
		$('#'+id).addClass('selected');
	    } else if(j==10){
		$('#'+getChar(i)+j).addClass('disabled');
	    } else {
		$('#'+getChar(i)+'0'+j).addClass('disabled');
	    }
	}
    }
}
function makeAisleService(seatCount, arr){
    for(var a=0; a<arr.length; a++){
	for(var i=1; i<=seatCount/10; i++){
	    $('#seat_area_table').find('tr:nth-child('+i+') td:nth-child(2) a:nth-child('+arr[a]+')').after('<span></span>');
	}
    }
}
function possibleSeatClickEvent(seatCount, seatReserved){
    $('.can').on('click',function(){
    	    var id = $(this).attr('id');
    	    $('#seat_area_table').html(reservationSeatTableView(seatCount));
    	    makeAisleService(seatCount, [2, 8]);
    	    disableSeatTableService(seatCount, id);
    	    reservationSeatCss();
    	    $('.disabled').on('click',function(){
    		alert('먼저 선택한 좌석을 해제한 후 선택하세요.'); 
    	    });
    	    
    	    $('.selected').on('click',function(){
    		$('#seat_area_table').html(reservationSeatTableView(seatCount));
    		showSeatTableService(seatCount, seatReserved);
    		makeAisleService(seatCount, [2, 8]);
    		reservationSeatCss();
    		possibleSeatClickEvent(seatCount, seatReserved);
	    });
    	});
}
function showMovielistService(o){
	   var movielist = '';
	   for(var i=0; i<o.dis_show_list.length; i++){
	      for(var j=0; j<o.info_list.length; j++){
	         if(o.dis_show_list[i].movie_seq==o.info_list[j].movSeq){
	            movielist += '<li><a id="movie'+o.dis_show_list[i].movie_seq+'" class="movie" href="#"><img src="'+$.context()+'/resources/img/movie/grade_'+o.info_list[j].movGrade+'.png" alt="" width="24px" height="24px"/> '+o.info_list[j].movTitle+'</a></li>';
	            break;
	         }
	      }
	   }
	   return movielist;
}
function possibleMovieClickEvent(data){
    var info_list = data.info_list;
    var dis_show_list = data.dis_show_list;
    var timetable_list = data.timetable_list;
    var json = {
          dis_show_list : dis_show_list,
          info_list : info_list
       };
    $('.movie').on('click',function(){
           var id = $(this).attr('id');
           selectedMovieSeq = id.split('movie')[1];
           disableMovieListService(dis_show_list, selectedMovieSeq);
           $('.disabled').on('click',function(){
      alert('하나의 영화만 선택 가능합니다.'); 
           });
           $('.on').on('click',function(){
      $('#reservation_movielist').html(showMovielistService(json));
      $('#reservation_time').html('');
      possibleMovieClickEvent(data);
           });
           $('#reservation_time').html('<h4>'+checkMultiplex(1)+'</h4>');
           for(var i=0; i<timetable_list.length; i++){
          if(selectedMovieSeq == timetable_list[i].movSeq){
              selectedMovieName = timetable_list[i].movTitle;
              var json1 = {
                 info_list : info_list,
                 timetable_list : timetable_list,
                 i : i
              };
              var resCount = reservationMovielist(json1).resCount;
              infoIdResTime = reservationMovielist(json1).resTime;
              // TODO
              $('#reservation_time').append(reservationMainTimetableView(selectedMovieSeq, timetable_list));
              var shoSeq = timetable_list[i].shoSeq;
              $('#movieTitle'+shoSeq).html(timetable_list[i].movTitle);
              $('#theaterName'+shoSeq).html(timetable_list[i].theName);
              $('#startTime'+shoSeq).html(timetable_list[i].shoStartTime);
              $('#seatCount'+shoSeq).html(resCount+'석 / ' +timetable_list[i].theTotalSeat);
      }
           }
         
           reservationMainCss();
           
       });
}
function disableMovieListService(dis_show_list, selectedMovieSeq){
    for(var i=0; i<dis_show_list.length; i++){
   if(selectedMovieSeq!=dis_show_list[i].movie_seq){
       $('#movie'+dis_show_list[i].movie_seq).addClass('disabled');
   } else {
       $('#movie'+dis_show_list[i].movie_seq).addClass('on');
   }
    }
}
function generateCost(param){
    var money = '';
    if(param.length==4){
   money = param.substring(0,1) + ',' + param.substring(1,4);
    } else if(param.length==5){
   money = param.substring(0,2) + ',' + param.substring(2,5);
    }
    return money;
}
function multiplexMainTimetableService(data){
    var info_list = data.info_list;
    var theater_count = data.theater_count;
    var dis_show_list = data.dis_show_list;
    var timetable_list = data.timetable_list;
    var view = '';
    for(var i=0; i<dis_show_list.length; i++){
      var movie_title = '';
      for(var j=0; j<timetable_list.length; j++){
          if(dis_show_list[i].movie_seq == timetable_list[j].movSeq){
         movie_title = timetable_list[j].movTitle;
         break;
          }
      }
      view +='   <div id="movie_time_line">'
          +'      <div>'
          +'         <span><strong>'+movie_title+'</strong></span><a id="'+dis_show_list[i].movie_seq+'" class="goMD" href="#"><img src="'+$.context()+'/resources/img/icon/movieLink.png" alt="" /></a>'
          +'      </div>'
          +'      <ul>';
      for(var j=0; j<timetable_list.length; j++){
         if(dis_show_list[i].movie_seq == timetable_list[j].movSeq) {
            var json = {
               info_list : info_list,
               timetable_list : timetable_list,
               j : j
            };
            var resCount = multiplexMainMovielist(json).resCount;
             view +='   <a id="rv'+timetable_list[i].shoSeq+'" class="goR" href="#"><li><table>'
             +'      <tr>'
             +'      <td>'+timetable_list[i].theName+'</td>'
             +'      </tr>'
             +'      <tr>'
             +'      <td><strong>'+timetable_list[i].shoStartTime+'</strong></td>'
             +'      </tr>'
             +'      <tr>'
             +'      <td> '+resCount+'석 / '+timetable_list[i].theTotalSeat+'석</td>'
             +'      </tr>'
             +'   </table></li></a>';
         }
      }
      view +='</ul>';
       }
       view +='</div>';
       return view;
}
function convertTime(param){
    var time = param.split(':')[0] + param.split(':')[1];
    return time;
}
function generateReservationKey(o){
    var reg_date = '';
    var reservationId = '';
    var showingSeq = '';
    $.each(o.timetable_list, function(i, time){
	if(time.shoSeq == o.shoSeq){
	    reg_date = time.shoShowDate;
	    showingSeq = time.shoSeq;
	    reservationId = time.mulSeq + '-' + time.movSeq + '-' + convertTime(time.shoStartTime) + '-' + o.seatId; 
	} 
    });
    return {reg_date : reg_date, reservationId : reservationId, showingSeq : showingSeq};
}
function getTodayValue(){
    var today = abb1.util.datetime();
    var todayval = today.substring(0,4) + '-' + today.substring(4,6) + '-' + today.substring(6,8);
    return todayval;
}
function getKindOfArticleWrite(){
    var kind = $('input[name="kind"]:checked').val();
    if(kind=='1'){
        kind = '문의';
    } else if(kind=='2'){
        kind = '칭찬';
    } else if(kind=='3'){
        kind = '불만';
    } else {
        kind = '건의';
    }
    return kind;
}