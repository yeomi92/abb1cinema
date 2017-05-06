<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="header.jsp"/>
<jsp:include page="gnb.jsp"/>
<script type="text/javascript">
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawDonutChart);
function drawDonutChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['남자',     40.6],
    ['여자',     59.4]
  ]);
  var options = {
    title: '성별 선호도',
    pieHole: 0.4,
    chartArea:{left:20,top:50,width:'75%',height:'100%'}
  };
  var chart = new google.visualization.PieChart(document.getElementById('admin_movie_donut_chart'));
  chart.draw(data, options);
}
</script>
<div id="wrapper">
   <div id="page-wrapper">
		<div id="reservation">
			<div>
				<select name="" id="reservation_category">
					<option selected>카테고리 선택</option>
					<option value="multiplex">영화관</option>
					<option value="movie">영화</option>
				</select>
				<input id="reservation_search_keyword" type="text" />
				<input id="reservation_search_btn" type="button" value="검색"/>
			</div>
			<div>
				<div id="admin_reservation_list">
					<div>예매내역</div>
					<div>
					<table id="reservation_table">
						<colgroup>
							<col />
							<col />
							<col />
							<col />
							<col />
							<col />
				      	</colgroup>
				      	<thead>
							<tr>
								<th>관</th>
								<th>영화제목</th>
								<th>시작시간</th>
								<th>좌석번호</th>
								<th>예매날짜</th>
								<th>가격</th>
							</tr>
				   	   	</thead>
				     	<tbody>
							<tr>
								<td>1관</td>
								<td>아빠와 딸</td>
								<td>12:00</td>
								<td>A1</td>
								<td>2017-05-01</td>
								<td>10,000</td>
							</tr>
		   			   </tbody>
					</table>
					</div>
				</div>
				<div id="admin_cancel_list">
					<div>취소내역</div>
					<div>
					<table id="cancel_list_table">
						<colgroup>
							<col />
							<col />
							<col />
							<col />
							<col />
							<col />
				      	</colgroup>
				      	<thead>
							<tr>
								<th>관</th>
								<th>영화제목</th>
								<th>시작시간</th>
								<th>좌석번호</th>
								<th>예매날짜</th>
								<th>가격</th>
							</tr>
				      </thead>
				      <tbody>
							<tr>
								<td>1관</td>
								<td>아빠와 딸</td>
								<td>12:00</td>
								<td>A1</td>
								<td>2017-05-01</td>
								<td>10,000</td>
							</tr>
		   			   </tbody>
					</table>
					</div>
				</div>
				<div id="admin_movie_list">
					<div>영화검색</div>
					<div>
						<table id="movie_list_table">
							<colgroup>
								<col />
								<col />
								<col />
								<col />
								<col />
					      	</colgroup>
					      	<thead>
								<tr>
									<th>영화관</th>
									<th>상영관</th>
									<th>시작시간</th>
									<th>예매날짜</th>
									<th>가격</th>
								</tr>
					      	</thead>
					      	<tbody>
								<tr>
									<td>1관</td>
									<td>아빠와 딸</td>
									<td>12:00</td>
									<td>2017-05-01</td>
									<td>10,000</td>
								</tr>
			   			   </tbody>
						</table>
					</div>
				</div>
				<div id="admin_movie_donut_chart">
					
				</div>
			</div>
		
		</div>

        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->
    <script>
    $(function(){
    	$('#reservation_category').addClass('abb1_admin_reservation_category');
    	$('#reservation_search_keyword').addClass('abb1_admin_reservation_search_keyword');
    	$('#reservation_search_btn').addClass('abb1_admin_reservation_search_btn');
    	$('#reservation').find('div:nth-child(2)').addClass('abb1_admin_settings');
    	var admin_reservation_list = $('#admin_reservation_list');
    	admin_reservation_list.find('div:first-child').addClass('abb1_admin_maintext');
    	admin_reservation_list.find('div:nth-child(2)').addClass('abb1_admin_settings');
    	var reservation_table = $('#reservation_table');
    	reservation_table.addClass('abb1_admin_reservation_table');
    	reservation_table.find('col:nth-child(1)').css('width','10%');
    	reservation_table.find('col:nth-child(2)').css('width','35%');
    	reservation_table.find('col:nth-child(3)').css('width','15%');
    	reservation_table.find('col:nth-child(4)').css('width','15%');
    	reservation_table.find('col:nth-child(5)').css('width','20%');
    	reservation_table.find('col:nth-child(6)').css('width','15%');
    	var admin_cancel_list = $('#admin_cancel_list');
    	admin_cancel_list.find('div:first-child').addClass('abb1_admin_maintext');
    	admin_cancel_list.find('div:nth-child(2)').addClass('abb1_admin_settings');
    	var cancel_list_table = $('#cancel_list_table');
    	cancel_list_table.addClass('abb1_admin_reservation_table');
    	cancel_list_table.find('col:nth-child(1)').css('width','10%');
    	cancel_list_table.find('col:nth-child(2)').css('width','35%');
    	cancel_list_table.find('col:nth-child(3)').css('width','15%');
    	cancel_list_table.find('col:nth-child(4)').css('width','15%');
    	cancel_list_table.find('col:nth-child(5)').css('width','20%');
    	cancel_list_table.find('col:nth-child(6)').css('width','15%');
    	var admin_movie_list = $('#admin_movie_list');
    	admin_movie_list.find('div:nth-child(1)').addClass('abb1_admin_maintext');
    	admin_movie_list.find('div:nth-child(2)').addClass('abb1_admin_settings');
    	var movie_list_table = $('#movie_list_table');
    	movie_list_table.addClass('abb1_admin_reservation_table');
    	movie_list_table.find('col:nth-child(1)').css('width','15%');
    	movie_list_table.find('col:nth-child(2)').css('width','20%');
    	movie_list_table.find('col:nth-child(3)').css('width','25%');
    	movie_list_table.find('col:nth-child(4)').css('width','25%');
    	movie_list_table.find('col:nth-child(5)').css('width','15%');
    });
    </script>
<jsp:include page="footer.jsp"/>