function reservationDetailService(){
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
						
						console.log(i);
						customer_mypage_reservation(info_list,$.context(),i);
					}
					var mypage = $('#mypage');
					mypage.addClass('abb1_find_id_container');
					$('#mypageGnb').addClass('abb1_padding_top_20 abb1_width_left');
					mypage.find('table').css('margin','15px');
					mypage.find('div:first-child');
					mypage.find('div:first-child').find('h2').addClass('abb1_color_bold_brown');
					mypage.find('div:nth-child(2)').find('ul').addClass('abb1_page_ul_inline');
					mypage.find('div:nth-child(2)').find('li').addClass('abb1_page_li_inline');
					mypage.find('div:nth-child(2)').find('li:nth-child(1)').find('a').addClass('abb1_mypage_select_btn');
					mypage.find('div:nth-child(2)').find('li:nth-child(2)').find('a').addClass('abb1_mypage_not_select_btn');
					var mypage_reservation_content = $('#mypage_reservation_content');
					mypage_reservation_content.addClass('abb1_mypage_reservation_content');
					mypage_reservation_content.find('ul').addClass('abb1_page_ul_inline abb1_mypage_margin');
					mypage_reservation_content.find('li').addClass('abb1_page_li_inline');
					mypage_reservation_content.find('li').find('a').addClass('abb1_detail_gnb_li');
					var mypage_reservation = $('#mypage_reservation');
					mypage_reservation.addClass('abb1_page_reservation');
					mypage_reservation.find('tr:first-child').addClass('abb1_margin_left_20');
					mypage_reservation.find('tr:nth-child(2)').find('td:nth-child(3)').addClass('abb1_text_right');
					mypage.find('table>tr:nth-child(3)>td:nth-child(3)').css('text-align','right');
					$('#default_msg').css('padding-left','20px');
					mypage.find('div:first-child>h4').addClass('abb1_width_right');
				}
			}
		});
		var i = $(this).attr('id').split('_')[1]*1;
		alert('i값: '+i);
		$.ajax({
			url: $.context()+'/getReservationDetail',
			method: 'POST',
			data: JSON.stringify({
				id: $('#reservation_number'+i).text()
			}),
			dataType: 'json',
			contentType: 'application/json',
			success: function(data){
				console.log(data.infoList);
				$('#mypage_table'+i+'').append('<div id="detail_reservation'+i+'">'
						+'					<div>'
						+'						<h4>상세내용</h4>'
						+'					</div>'
						+'					<div>'
					    +'					<table>'
					    +'						<tr>'
					    +'							<td rowspan="4"><span id="detail_reservation_pic'+i+'"><img id="movie_poster'+i+'" src="'+$.image()+'/movie/'+data.infoList[0].movPicMain+'" width="60%" height="60%" alt="" /></span></td>'
					    +'							<td colspan="2"><h4><strong id="movie_name'+i+'">'+data.infoList[0].movTitle+'</strong></h4></td>'
					    +'						</tr>'
					    +'						<tr>'
					    +'							<td style="padding-right: 20px;">상영일</td>'
					    +'							<td id="show_info'+i+'">'+data.infoList[0].shoShowDate+' | 상영시간 '+data.infoList[0].shoStartTime+' ~ '+data.infoList[0].shoEndTime+' | 상영관 '+data.infoList[0].mulName+', '+data.infoList[0].theName+'</td>'
					    +'						</tr>'
					    +'						<tr>'
					    +'							<td>관람인원</td>'
					    +'							<td id="customer_info'+i+'">성인'+data.infoList[0].resHcount+' | 좌석 '+data.infoList[0].resId.split('-')[3]+'</td>'
					    +'						</tr>'
					    +'						<tr>'
					    +'							<td><span>주문금액</span></td>'
					    +'							<td id="reservation_price'+i+'">'+data.infoList[0].resPrice+'원</td>'
					    +'						</tr>'
					    +'					</table>'
						+'					</div>'
						+'					<div>'
						+'						<input id="reservation_cancel'+i+'" type="button" value="결제취소"  />'
						+'					</div>'
						+'				</div>');
				$('#detail_icon'+i+'').html('<a id="close" href="#">닫기<img src="'+$.context()+'/resources/img/icon/uparrow.png" width="3%" height="3%" alt="" /></a>');
				var detail_reservation = $('#detail_reservation'+i+'');
				 detail_reservation.addClass('abb1_detail_reservation');
				 detail_reservation.find('div:first-child').addClass('abb1_mypage_reservation');
				 detail_reservation.find('div:nth-child(2)').addClass('abb1_find_pw_margin');
				 $('#detail_reservation_pic'+i+'').addClass('abb1_margin_left_20');
				 $('#reservation_cancel'+i+'').addClass('btn abb1_btn_lg abb1_btn_verification');
				 $('#close').on('click',function(){
					 	/*$(this).html('<a id="detail_icon'+i+'" href="#">상세<img src="'+$.context()+'/resources/img/icon/downarrow.png" width="3%" height="3%" alt="" /></a>');
						$('#detail_reservation'+i+'').remove();*/
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
									             $('#mypage_reservation').append('<div id="mypage_table'+i+'">	<table>'
									            			+'					<tr>'
									            			+'						<td id="movie_img'+i+'" rowspan="5"><span id="reservation_pic'+i+'"><img id="movie_poster'+i+'" src="'+$.image()+'/movie/'+info.movPicMain+'" width="115px" height="150px" alt="" /></span></td>'
									            			+'						<td><span id="reservation_no'+i+'">예매번호</span></td>'
									            			+'						<td id="reservation_number'+i+'">'+info.resId+'</td>'
									            			+'					</tr>'
									            			+'					<tr>'
									            			+'						<td>예매일</td>'
									            			+'						<td colspan="2" id="reservation_date'+i+'">'+info.resRegDate+'</td>'
									            			+'					</tr>'
									            			+'					<tr>'
									            			+'						<td>사용상태</td>'
									            			+'						<td id="canceled'+i+'">'+canceled+'</td>'
									            			+'						<td id="detail_icon'+i+'"><a id="detail_'+i+'" class="abb1_detail_icon" href="#">상세<img src="'+$.image()+'/icon/downarrow.png" width="3%" height="3%" alt="" /></a></td>'
									            			+'					</tr>'
									            			+'					<tr>'
									            			+'						<td>예매내역</td>'
									            			+'						<td colspan="2" id="movie_name'+i+'">'+info.movTitle+'</td>'
									            			+'					</tr>'
									            			+'					<tr>'
									            			+'						<td id="price_title'+i+'">총 결제 금액</td>'
									            			+'						<td colspan="2" id="reservation_price'+i+'">'+info.resPrice+'</td>'
									            			+'					</tr>'
									            			+'				</table></div>');
									        });
											var mypage = $('#mypage');
											mypage.addClass('abb1_find_id_container');
											$('#mypageGnb').addClass('abb1_padding_top_20 abb1_width_left');
											mypage.find('table').css('margin','15px');
											mypage.find('div:first-child');
											mypage.find('div:first-child').find('h2').addClass('abb1_color_bold_brown');
											mypage.find('div:nth-child(2)').find('ul').addClass('abb1_page_ul_inline');
											mypage.find('div:nth-child(2)').find('li').addClass('abb1_page_li_inline');
											mypage.find('div:nth-child(2)').find('li:nth-child(1)').find('a').addClass('abb1_mypage_select_btn');
											mypage.find('div:nth-child(2)').find('li:nth-child(2)').find('a').addClass('abb1_mypage_not_select_btn');
											var mypage_reservation_content = $('#mypage_reservation_content');
											mypage_reservation_content.addClass('abb1_mypage_reservation_content');
											mypage_reservation_content.find('ul').addClass('abb1_page_ul_inline abb1_mypage_margin');
											mypage_reservation_content.find('li').addClass('abb1_page_li_inline');
											mypage_reservation_content.find('li').find('a').addClass('abb1_detail_gnb_li');
											var mypage_reservation = $('#mypage_reservation');
											mypage_reservation.addClass('abb1_page_reservation');
											mypage_reservation.find('tr:first-child').addClass('abb1_margin_left_20');
											mypage_reservation.find('tr:nth-child(2)').find('td:nth-child(3)').addClass('abb1_text_right');
											mypage.find('table>tr:nth-child(3)>td:nth-child(3)').css('text-align','right');
											$('#default_msg').css('padding-left','20px');
											mypage.find('div:first-child>h4').addClass('abb1_width_right');
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
}
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
function indexSlideClick(add,movie_arr){
	var arr = reverseArr(movie_arr, 8);
	$('#prev').on('click',function(){
        var slide = indexSlideLi();
        add-=4;
        if(add==-4){
           add = 4;
        }
        $('#slidePoster').find('ul').html(slide);
        for(var i=0; i<4; i++){
        	$('#slide'+i).html('<img src="'+$.image()+'/movie/'+arr[i+add].pic_main+'" alt="" width="188px" height="274px">');
        }
        indexSlideClick(add,movie_arr);
        indexSlideCss();
    });
    $('#next').on('click',function(){
        var slide = indexSlideLi();
        add+=4;
        if(add>=8){
           add = 0;
        }
        $('#slidePoster').find('ul').html(slide);
        for(var i=0; i<4; i++){
        	$('#slide'+i).html('<img src="'+$.image()+'/movie/'+arr[i+add].pic_main+'" alt="" width="188px" height="274px">');
        }
        indexSlideClick(add,movie_arr);
        indexSlideCss();
    });
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
function initMap(axis) {
    var latval = axis.split(', ')[0]*1;
    var lngval = axis.split(', ')[1]*1;
    var pos = {lat: latval, lng: lngval};
    var map = new google.maps.Map(document.getElementById('map'), {
	    center: pos,
	    zoom: 17
    });
    var marker = new google.maps.Marker({
	    position: pos,
	    map: map
    });
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
    		for(var k=0; k<seatReserved.length; k++){
    		    if(combination == seatReserved[k]){
    			$('#seat_area_table').find('tr:nth-child('+i+') td:nth-child(2) a:nth-child('+j+')').addClass('reserved');
    		    } else {
    			$('#seat_area_table').find('tr:nth-child('+i+') td:nth-child(2) a:nth-child('+j+')').addClass('can');
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
	    console.log(id);
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
