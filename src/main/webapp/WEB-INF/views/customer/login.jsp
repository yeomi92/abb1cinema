<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../common/header.jsp"/>
<div id="login" class="abb1_bgcolor_beige abb1_div_login">
    <form class="form-signin abb1_width_center_w40">
		<h2 class="form-signin-heading text-muted">로그인</h2>
		<table>
			<tr>
			<td><span class="abb1_font_bold">아이디</span></td>
				<td><input type="text" class="form-control" required="" autofocus=""></td>
				<td rowspan="2">
					<input type="button" value="로그인" class="btn btn-lg btn-primary btn-block abb1_btn_login" type="submit">
				</td>
			</tr>
			<tr>
			<td><span class="abb1_font_bold abb1_margin_right_30">비밀번호</span></td>
				<td><input type="password" class="form-control" required=""></td>
			</tr>
		</table>
		<div class="abb1_padding_top_15">
            <table style="width: 75%">
	            <tr>
	            	<td><input type="checkbox"/>아이디저장</td>
	            </tr>
	            <tr style="text-align: right;">
            		<td><a href="" class="abb1_a_findId" style="text-align: right;">아이디 찾기</a><a href="" class="abb1_a_findPw" style="text-align: right;">비밀번호 찾기</a></td>
            	</tr>
            </table>
        </div>
	</form>
</div>
<div class="abb1_bgcolor_bold_beige abb1_padding_top_20 abb1_padding_bottom_20">
	<table class="abb1_width_center_w1000" style="width: 800px;">
		<tr>
		<td>회원가입시 온라인/모바일을 편리하게 이용할 수 있습니다. </td>
		<td><input href="${context}/signUp" type="button" value="회원가입" class="btn btn-lg btn-primary btn-block abb1_btn_signup"></button></td>
		</tr>
	</table>
</div>
<jsp:include page="../common/footer.jsp"/>