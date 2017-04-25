<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
<title>ABB1Cinema</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<script src="/resources/js/fileupload.js"></script>
<script src="/resources/js/abb1_john.js"></script>
<script src="/resources/js/abb1_yeom.js"></script>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<link rel="stylesheet" href="${context}/resources/css/abb1.css" type="text/css"/>
</head>
<body>
<div id="header">
   <div class="abb1_no_padding abb1_width_100 abb1_text_center">
      <div style="margin: 0 auto;">
         <a href="/web"><img src="${context}/resources/img/common/main_logo.png" alt=""/></a>
      </div>
   </div>
   <nav id="boot-nav" class="navbar navbar-default">
      <div class="container-fluid">
         <div class="navbar-header">
            <a id="brand" class="navbar-brand" href="https://www.facebook.com/LotteCinema.kr"><span style="font-size: 14px;"><img src="${context}/resources/img/common/facebook.png" alt="" width="25px" height="25px"/> 롯데시네마 페이스북</span></a>
         </div>
         <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
               <li><a id="login" href="#">로그인<span class="sr-only">(current)</span></a></li>
               <li><a id="register" href="#">회원가입<span class="sr-only">(current)</span></a></li>
               <li><a id="FAQ" href="#">고객센터<span class="sr-only">(current)</span></a></li>
            </ul>
         </div>
      </div>
   </nav>
</div>
<div id="gnb">
   <div class="abb1_gnb_tab abb1_width_100 abb1_text_center">
      <div class="abb1_width_100 abb1_text_center">
         <ul class="abb1_gnb">
            <li><a id="ticketing" href="#">예매</a></li>
            <li><a id="movie" href="${context}/movieList">영화</a></li>
            <li><a id="theater" href="#">영화관</a></li>
            <li><a class="abb1_tooltip" href="#">스위트샵<span class="abb1_tooltiptext">미구현</span></a></li>
            <li><a class="abb1_tooltip" href="#">이벤트<span class="abb1_tooltiptext">미구현</span></a></li>
            <li><a class="abb1_tooltip" href="#">기프트샵<span class="abb1_tooltiptext">미구현</span></a></li>
         </ul>
      </div>
   </div>
</div>