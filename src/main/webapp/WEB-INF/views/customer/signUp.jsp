<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../common/header.jsp"/>
<div id="signUp" class="abb1_bgcolor_beige abb1_div_login">
    <form class="form-signin abb1_width_center_w40">
		<h2 class="form-signin-heading text-muted">회원가입</h2>
		<table class="abb1_width_70">
			<tr>
				<td><input type="text" class="form-control" placeholder="아이디" required="" autofocus=""></td>
			</tr>
			<tr>
				<td><input type="password" class="form-control" placeholder="비밀번호" required="" autofocus=""></td>
			</tr>
			<tr>
				<td><input type="password" class="form-control" placeholder="비밀번호 확인" required="" autofocus=""></td>
			</tr>
		</table>
		<table style="margin-top: 20px;" class="abb1_width_70">
			<tr>
				<td colspan="3"><input type="text" class="form-control" placeholder="이름" required="" autofocus=""></td>
			</tr>
			<tr style="text-align: center;">
				<td><input type="radio" name="gender"/>남자</td>
				<td><input type="radio" name="gender"/>여자</td>
			</tr>
			<tr>
			<td><input style="width: 100%;padding-right: 0px;margin-right: 0px;" type="password" class="form-control" placeholder="생년" required="" autofocus=""></td>
			<td>
				<select style="width: 100%;" class="btn btn-default dropdown-toggle" name="date">
						<option value="" selected>월</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
						<option value="11">11</option>
						<option value="12">12</option>
					</select>
				</td>
				<td><input style="width: 100%;padding-right: 0px;margin-right: 0px;" type="password" class="form-control" placeholder="일" required="" autofocus=""></td>
			</tr>
			<tr>
				<td><input type="text" class="form-control" placeholder="010" required="" autofocus=""></td>
				<td><input type="text" class="form-control" required="" autofocus=""></td>
				<td><input type="text" class="form-control" required="" autofocus=""></td>
			</tr>
		</table>
		<table style="margin-top: 20px;" class="abb1_width_70">
		<tr>
				<td colspan="2"><input type="text" class="form-control" placeholder="이메일" required="" autofocus=""></td>
				<td>
					<input type="button" value="인증번호 발송" class="btn btn-lg btn-primary btn-block abb1_btn_verification" type="submit">
				</td>
			</tr>
			<tr>
				<td colspan="2"><input type="text" class="form-control" placeholder="인증번호 입력" required="" autofocus=""></td>
				<td>
					<input type="button" value="인증번호 확인" class="btn btn-lg btn-primary btn-block abb1_btn_verification" type="submit">
				</td>
			</tr>
		</table>
		<input href="${context}/login" type="button" value="가입하기" class="btn btn-lg btn-primary btn-block abb1_btn_verification"/>
	</form>
<jsp:include page="../common/footer.jsp"/>