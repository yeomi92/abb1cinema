<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../common/headerLogin.jsp"/>
<div id="container">
	<div>
		<div> 
			<h2><strong>가입완료</strong></h2>
		</div>
		<div id="signup_success">
			<div>
				<table>
		         <tr>
		         	<td>
			         	<h3><strong>염혜선</strong><span>님 환영합니다!</span></h3>
		         	</td>
		         </tr>
		         <tr>
			         <td>
			         <ul>
						 <li>
							<a href="${context}/web"><input type="button" value="확인"/></a>
						 </li>
					 </ul>
					 </td>
		         </tr>
		      	</table>
			</div>
		</div>
	</div>
</div>
<jsp:include page="../common/footer.jsp"/>
<script>
abb1.jquery.customer_signupsuccess();
</script>