<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../common/headerLogin.jsp"/>
<div id="container">
<div id="login_form" class="abb1_signup_form">
<div class="abb1_signup_settings">
    <form>
      <h2 class="abb1_login_maintext">로그인</h2>
      <table class="abb1_signup_form_control">
         <tr>
         <td><strong>아이디</strong></td>
            <td><input type="text"></td>
            <td rowspan="2">
            <input type="button" value="로그인" class="btn abb1_btn_lg abb1_login_btn" type="submit">
            </td>
         </tr>
         <tr>
         <td><strong>비밀번호</strong></td>
            <td><input type="password"></td>
         </tr>
      </table>
        <table class="abb1_find_table">
             <tr>
                <td><input type="checkbox"/> 아이디저장</td>
             </tr>
             <tr>
               <td class="abb1_a_findIdPw">
                  <a href="${context}/customer/findId">아이디 찾기</a>
                  <a href="${context}/customer/findPw">비밀번호 찾기</a>
               </td>
            </tr>
        </table>
   </form>
</div>
<div class="abb1_div_login_footer">
   <table class="abb1_width_center_w800">
      <tr>
      <td class="abb1_width_448">회원가입시 온라인/모바일을 편리하게 이용할 수 있습니다. </td>
      <td class="abb1_width_200"><a href="${context}/customer/signUp"><input type="button" value="회원가입" class="btn abb1_btn_lg abb1_btn_verification" style="height: 60px;width: 120px;font-size: 15px;" /></a></td>
      </tr>
   </table>
</div>
</div>
</div>
<jsp:include page="../common/footer.jsp"/>