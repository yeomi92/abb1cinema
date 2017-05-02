<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="header.jsp"/>
<jsp:include page="gnb.jsp"/>
<div id="wrapper">
        <div id="page-wrapper">
			<div>
			<div class="abb1_admin_maintext">회원 관리</div>
			<div id="customer_management_wrapper">
			<div>
				<input id="reservation_search_keyword" type="text" class="abb1_admin_reservation_search_keyword" placeholder="아이디 or 이름" />
				<input type="button" value="검색" class="abb1_admin_reservation_search_btn"/>
			</div>
			<div class="abb1_admin_settings">
				<div class="abb1_admin_customer_table">
					<table>
					<colgroup>
						<col style="width: 20%"/>
						<col style="width: 20%"/>
						<col style="width: 20%"/>
						<col style="width: 30%"/>
						<col style="width: 10%"/>
					</colgroup>
					<thead>
						<tr>
						<th>ID</th>
						<th>이름</th>
						<th>성별</th>
						<th>생년월일</th>
						<th>삭제</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><a href="#">abccd</a></td>
							<td><a href="#">박준용</a></td>
							<td>남</td>
							<td>1990-05-18</td>
							<td><input type="button" style="background: white" value="x"/></td>
						</tr>
					</tbody>
					</table>
				</div>
			</div>
			<div class="abb1_signup_form_control abb1_admin_customer_change">
			<table>
				<tr>
					<td>아이디</td>
					<td><input type="text" value="abccd"/></td>
				</tr>
				<tr>
					<td>비밀번호</td>
					<td><input type="password" value="abccd"/></td>
				</tr>
				<tr>
					<td>이름</td>
					<td><input type="text" value="박준용"/></td>
				</tr>
				<tr>
					<td>생년월일</td>
					<td><input type="text" value="19900518"/></td>
				</tr>
				<tr>
					<td>전화번호</td>
					<td><input type="text" value="010-2206-8900"/></td>
				</tr>
				<tr>
					<td>성별</td>
					<td><input type="text" value="M"/></td>
				</tr>
				<tr>
					<td>우편번호</td>
					<td><input type="text" value="01175"/></td>
				</tr>
				<tr>
					<td>상세주소</td>
					<td><input type="text" value="710호"/></td>
				</tr>
				<tr>
					<td>이메일</td>
					<td><input type="text" value="babungv@gmail.com"/></td>
				</tr>
				<tr>
					<td colspan="2"><input type="button" value="저장"/></td>
				</tr>
			</table>
			</div>
			</div>
			</div>
        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->
<jsp:include page="footer.jsp"/>