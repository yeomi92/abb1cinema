<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="header.jsp"/>
<jsp:include page="gnb.jsp"/>
<script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawAreaChart);

      function drawAreaChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales'],
          ['2013',  1000 ],
          ['2014',  1170 ],
          ['2015',  660],
          ['2016',  1030]
        ]);

        var options = {
          title: 'Company Performance',
          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('area_chart'));
        chart.draw(data, options);
      }
      
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
          chartArea:{left:20,top:0,width:'50%',height:'75%'}
        };
        var chart = new google.visualization.PieChart(document.getElementById('donut_chart'));
        chart.draw(data, options);
      }
</script>

<div id="wrapper">
        
</div>
<jsp:include page="footer.jsp"/>
<script>
abb1.jquery.admin_index();
</script>