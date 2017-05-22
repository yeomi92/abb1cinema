<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div id="wrapper">
<div id="customer_login_form">
	<div>
      <h2>로그인</h2>
      <!-- <form id="loginForm"> -->
      <table id="login_table">
         <tr>
         	<td><strong>아이디</strong></td>
            <td><input id="customer_id" name="customer_id" tabindex="1" type="text"></td>
            <td id="td_login" rowspan="2">
            	<a id="a_login" href="${context}"><input id="login_btn" type="submit" tabindex="3" value="로그인"></a>
            </td>
         </tr>
         <tr>
         	<td><strong>비밀번호</strong></td>
            <td><input id="customer_pw" name="customer_pw" tabindex="2" type="password"></td>
         </tr>
      </table>
      <!-- </form> -->
      <table id="find_table">
             <tr>
                <td><input id="remember" name="remember" type="checkbox"/> 아이디저장</td>
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