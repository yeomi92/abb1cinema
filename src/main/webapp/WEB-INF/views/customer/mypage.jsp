<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../common/headerLogin.jsp"/>
<div class="abb1_bgcolor_beige abb1_padding_top_20">
<div class="abb1_width_left"> 
<h2 class="abb1_color_bold_brown">마이시네마</h2>
</div>
<div class="abb1_padding_top_20 abb1_width_left">
	<ul class="abb1_page_ul_inline">
		<li class="abb1_page_li_inline">
			<a href="" class="abb1_bgcolor_bold_brown abb1_color_bold_beige abb1_page_gnb_li">예매/구매내역</a>
		</li>
		<li class="abb1_page_li_inline">
			<a href="" class="abb1_bgcolor_beige abb1_color_bold_brown abb1_page_gnb_li">나의 정보관리</a>
		</li>
	</ul> 
</div>
<div class="abb1_width_left_content abb1_bgcolor_white">
	<ul class="abb1_page_ul_inline">
		<li class="abb1_page_li_inline">
			<a href="" class="abb1_detail_gnb_li"><strong>예매/구매내역</strong></a>
		</li>
		<li class="abb1_page_li_inline">
			<a href="" class="abb1_detail_gnb_li">취소내역</a>
		</li>
	</ul>
	<div style="margin-left:20px; margin-right:20px; border-top:1px solid #cec8ca;border-bottom:1px solid #cec8ca;">
	<table>
		<tr>
			<td rowspan="4">이미지</td>
			<td>예매번호</td>
			<td>123456789</td>
		</tr>
		<tr>
			<td>사용상태</td>
			<td>취소가능</td>
		</tr>
		<tr>
			<td>예매내역</td>
			<td>아빠는 딸</td>
		</tr>
		<tr>
			<td>총 결제 금액</td>
			<td>22,000원</td>
		</tr>
	</table>
	</div>
</div>
</div>

<!-- <nav class="navbar navbar-default">
  <div class="container-fluid">
    Brand and toggle get grouped for better mobile display
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Brand</a>
    </div>

    Collect the nav links, forms, and other content for toggling
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>
      </ul>
      <form class="navbar-form navbar-left">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </li>
      </ul>
    </div>/.navbar-collapse
  </div>/.container-fluid
</nav> -->
<jsp:include page="../common/footer.jsp"/>