<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../common/header.jsp"/>
<div id="container" class="abb1_bgcolor_beige">
<div>
<img src="${context}/resources/img/multiplex/theater.jpg" alt="" />
</div>
<div class="abb1_margin_left_100" style="padding-top: 20px;">
<h2><strong>가산디지털 위치정보</strong></h2>
</div>
<div class="abb1_margin_left_100">
<ul class="abb1_ul_inline">
<li class="abb1_li_inline abb1_multiplex_btn"><a href="${context}/multiplex/main" class="abb1_multiplex_a"><strong>상영시간표</strong></a></li>
<li class="abb1_li_inline abb1_multiplex_select_btn"><a href="#" class="abb1_multiplex_select_a"><strong>위치정보</strong></a></li>
</ul>
</div>
<div class="abb1_multiplex_map">
<img src="${context}/resources/img/multiplex/map.JPG" alt="" />
</div>
</div>
<jsp:include page="../common/footer.jsp"/>