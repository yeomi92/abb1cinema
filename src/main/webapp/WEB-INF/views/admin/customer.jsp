<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="header.jsp"/>
<jsp:include page="gnb.jsp"/>
<div id="wrapper">
        <div id="page-wrapper">
			<div id="customer">
				<div>회원 관리</div>
					<div id="customer_management_wrapper">
						<div>
							<input id="customer_search_keyword" type="text" placeholder="아이디 or 이름" />
							<input id="customer_search_btn" type="button" value="검색"/>
						</div>
						<div>
							<div id="admin_customer_table">
								<table>
								<colgroup>
									<col />
									<col />
									<col />
									<col />
									<col />
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
										<td><input id="delete" type="button" value="x"/></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div id="customer_result">
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
    <script>
    $(function(){
    	var customer = $('#customer');
    	customer.find('div:first-child').addClass('abb1_admin_maintext');
    	$('#customer_search_keyword').addClass('abb1_admin_reservation_search_keyword');
    	$('#customer_search_btn').addClass('abb1_admin_customer_search_btn');
    	$('#customer_management_wrapper').find('div:nth-child(2)').addClass('abb1_admin_settings');
    	var admin_customer_table = $('#admin_customer_table');
    	admin_customer_table.addClass('abb1_admin_customer_table');
    	admin_customer_table.find('col:nth-child(1)').css('width','20%');
    	admin_customer_table.find('col:nth-child(2)').css('width','20%');
    	admin_customer_table.find('col:nth-child(3)').css('width','20%');
    	admin_customer_table.find('col:nth-child(4)').css('width','30%');
    	admin_customer_table.find('col:nth-child(5)').css('width','10%');
    	$('#delete').css('background','white');
    	$('#customer_result').addClass('abb1_signup_form_control abb1_admin_customer_change');
    	
    });
    </script>
<jsp:include page="footer.jsp"/>