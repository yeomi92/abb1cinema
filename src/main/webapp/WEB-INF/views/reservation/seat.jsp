<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../common/header.jsp"/>
<div id="container">
   <div id="seat">
   	  <div id="reservation_seat_form">
      <div>
         <div>
            <span>좌석 선택</span>
         </div>
	      <div>
	         <span>Screen</span>
	      </div>
	      <div id="seat_area">
	      <div>
	         <table id="seat_area_table">
	            <colgroup>
	            	<col />
	            	<col />
	            </colgroup>
		         <tr>
		            <td>A</td>
		            <td>
		               <a href="#">1</a>
		               <a href="#">2</a>
		               <span></span>
		               <a href="#">3</a>
		               <a href="#">4</a>
		               <a class="reserved" href="#">5</a>
		               <a class="reserved" href="#">6</a>
		               <a href="#">7</a>
		               <a href="#">8</a>
		               <span></span>
		               <a href="#">9</a>
		               <a href="#">10</a>
		            </td>
		         </tr>
		         <tr>
		            <td>B</td>
		            <td>
		               <a class="reserved" href="#">1</a>
		               <a href="#">2</a>
		               <span></span>
		               <a href="#">3</a>
		               <a href="#">4</a>
		               <a href="#">5</a>
		               <a href="#">6</a>
		               <a href="#">7</a>
		               <a href="#">8</a>
		               <span></span>
		               <a href="#">9</a>
		               <a class="reserved" href="#">10</a>
		            </td>
		         </tr>
		         <tr>
		            <td>C</td>
		            <td>
		               <a href="#">1</a>
		               <a href="#">2</a>
		               <span></span>
		               <a href="#">3</a>
		               <a href="#">4</a>
		               <a href="#">5</a>
		               <a href="#">6</a>
		               <a href="#">7</a>
		               <a class="reserved" href="#">8</a>
		               <span></span>
		               <a class="reserved" href="#">9</a>
		               <a class="reserved" href="#">10</a>
		            </td>
		         </tr>
		         <tr>
		            <td>D</td>
		            <td>
		               <a class="reserved" href="#">1</a>
		               <a class="reserved" href="#">2</a>
		               <span></span>
		               <a class="reserved" href="#">3</a>
		               <a class="reserved" href="#">4</a>
		               <a class="reserved" href="#">5</a>
		               <a class="reserved" href="#">6</a>
		               <a href="#">7</a>
		               <a href="#">8</a>
		               <span></span>
		               <a href="#">9</a>
		               <a href="#">10</a>
		            </td>
		         </tr>
		         <tr>
		            <td>E</td>
		            <td>
		               <a href="#">1</a>
		               <a href="#">2</a>
		               <span></span>
		               <a href="#">3</a>
		               <a href="#">4</a>
		               <a href="#">5</a>
		               <a href="#">6</a>
		               <a class="reserved" href="#">7</a>
		               <a href="#">8</a>
		               <span></span>
		               <a href="#">9</a>
		               <a href="#">10</a>
		            </td>
		         </tr>
		         <tr>
		            <td>F</td>
		            <td>
		               <a href="#">1</a>
		               <a href="#">2</a>
		               <span></span>
		               <a href="#">3</a>
		               <a href="#">4</a>
		               <a href="#">5</a>
		               <a href="#">6</a>
		               <a href="#">7</a>
		               <a href="#">8</a>
		               <span></span>
		               <a href="#">9</a>
		               <a href="#">10</a>
		            </td>
		         </tr>
		         <tr>
		            <td>G</td>
		            <td>
		               <a href="#">1</a>
		               <a href="#">2</a>
		               <span></span>
		               <a href="#">3</a>
		               <a href="#">4</a>
		               <a href="#">5</a>
		               <a href="#">6</a>
		               <a href="#">7</a>
		               <a href="#">8</a>
		               <span></span>
		               <a href="#">9</a>
		               <a href="#">10</a>
		            </td>
		         </tr>
		         <tr>
		            <td>H</td>
		            <td>
		               <a href="#">1</a>
		               <a href="#">2</a>
		               <span></span>
		               <a href="#">3</a>
		               <a href="#">4</a>
		               <a href="#">5</a>
		               <a href="#">6</a>
		               <a href="#">7</a>
		               <a href="#">8</a>
		               <span></span>
		               <a href="#">9</a>
		               <a href="#">10</a>
		            </td>
		         </tr>
		         <tr>
		            <td>
		            </td>
		            <td>
		               <img src="${context}/resources/img/reservation/exit_bottom.png" alt="" />
		            </td>
		         </tr>
	         </table>
	      </div>
	      <div>
	         <img src="${context}/resources/img/reservation/seat_info.png" alt=""/>
	      </div>
	      
	      </div>
	      <!-- seat_area -->
      </div>
      </div>
      <!-- reservation_seat_form -->
   </div>
   <!-- seat -->
   <div id="ticketing">
	   <div>
	      <div>
	      <table>
	         <tr id="ticketing_tr1">
	            <td>
	               <div>영화</div>
	            </td>
	            <td>
	               <div>예매정보</div>
	            </td>
	            <td><div>총 결제 금액</div></td>
	         </tr>
	         <tr id="ticketing_tr2">
	            <td>
	            <table>
	               <tr>
	                  <td><img src="${context}/resources/img/movie/movie_poster_6.png" alt="" width="127px" height="170px"/></td>
	                  <td>
		                  <div id="ticketing_movie_title">아빠는 딸</div>
		                  <div id="ticketing_movie_type">2D</div>
		                  <div id="">15세이상관람가</div>
	                  </td>
	               </tr>
	            </table>
	            </td>
	            <td>
		            <table>
	                  <tr>
	                     <td>상영일</td>
	                     <td>2017-04-27(목)</td>
	                  </tr>
	                  <tr>
	                     <td>상영시간</td>
	                     <td>19:00~21:00</td>
	                  </tr>
	                  <tr>
	                     <td>상영관</td>
	                     <td>가산디지털 1관</td>
	                  </tr>
	                  <tr>
	                     <td>좌석</td>
	                     <td>A1</td>
	                  </tr>
	                  <tr>
	                     <td id="ticketing_cost" colspan="2">9,000원</td>
	                  </tr>
	               </table>
	            </td>
	            <td id="ticketing_paying">
		            <div id="ticketing_cost_total">9,000원</div>
		            <a href="${context}/customer/mypage"><input type="button" value="결제하기"/></a>
	            </td>
	         </tr>
	      </table>
	      </div>
	   </div>
	   <!-- ticketing_setting -->
   </div>
   <!-- ticketing -->
</div>
<jsp:include page="../common/footer.jsp"/>
<script>
	abb1.jquery.reservation_seat();
</script>