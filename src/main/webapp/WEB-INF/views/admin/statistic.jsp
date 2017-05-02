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
			<div>
			<select name="" id="reservation_category" class="abb1_admin_reservation_category">
				<option selected>카테고리 선택</option>
				<option value="multiplex">영화관</option>
				<option value="movie">영화</option>
			</select>
			<input id="reservation_search_keyword" type="text" class="abb1_admin_reservation_search_keyword" />
			<input type="button" value="검색" class="abb1_admin_reservation_search_btn"/>
			</div>
			<div id="admin_movie_donut_chart">
				
			</div>
        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->
<jsp:include page="footer.jsp"/>