<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div id="container">
<div id="customer_login_form">
	<div>
      <h2>로그인</h2>
      <form id="loginForm">
      <table id="login_table">
         <tr>
         	<td><strong>아이디</strong></td>
            <td><input id="customer_id" name="customer_id" type="text"></td>
            <td rowspan="2">
            	<a href="#"><input id="login_btn" type="submit" value="로그인"></a>
            </td>
         </tr>
         <tr>
         	<td><strong>비밀번호</strong></td>
            <td><input id="customer_pw" name="customer_pw" type="password"></td>
         </tr>
      </table>
      </form>
      <table id="find_table">
             <tr>
                <td><input type="checkbox"/> 아이디저장</td>
             </tr>
             <tr>
               <td>
                  <a href="${context}/customer/findId">아이디 찾기</a>
                  <a href="${context}/customer/findPw">비밀번호 찾기</a>
	    	   </td>
            </tr>
        </table>
	</div>
	<div id="login_footer">
	   <table>
	      <tr>
		      <td>회원가입시 온라인/모바일을 편리하게 이용할 수 있습니다. </td>
		      <td><a href="${context}/customer/signUp"><input type="button" value="회원가입" /></a></td>
	      </tr>
	   </table>
	</div>
	</div>
</div>
<script>
abb1.jquery.customer_login();
$('#login_btn').on('click',function(event){
	alert('test');
	var loginForm=$('#loginForm');
	loginForm.attr('action','${context}/customer/main');
	loginForm.attr('method','post');
	var id=loginForm.find('input[name=customer_id]').val();
	var pw=loginForm.find('input[name=customer_pw]').val();
	if(id==''||pw==''){
		alert('아이디, 비밀번호를 입력하세요.');
	}else{
		alert('아이디:'+id+'비밀번호:'+pw);
		loginForm.submit();
	}
});
</script>