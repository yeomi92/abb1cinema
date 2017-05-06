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
			<div id="statistic">
				<select name="" id="statistic_category">
					<option selected>카테고리 선택</option>
					<option value="multiplex">영화관</option>
					<option value="movie">영화</option>
				</select>
				<input id="statistic_search_keyword" type="text"/>
				<input id="statistic_search_btn" type="button" value="검색"/>
			</div>
			<div id="admin_movie_donut_chart">
				
			</div>
        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->
    <script> 
   /*  $(function(){
    	var statistic_category = $('#statistic_category');
    	statistic_category.addClass('abb1_admin_reservation_category');
    	$('#statistic_search_keyword').addClass('abb1_admin_reservation_search_keyword');
    	$('#statistic_search_btn').addClass('abb1_admin_reservation_search_btn');
    }); */
    </script>
<jsp:include page="footer.jsp"/>