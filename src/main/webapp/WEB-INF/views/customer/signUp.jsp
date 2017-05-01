<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../common/header.jsp"/>
<div id="signUp" class="abb1_signup_form">
    <form>
    <div class="abb1_signup_settings">
      <h2 class="abb1_signup_maintext">회원가입</h2>
      <div>
         <table class="abb1_signup_form_control">
            <tr>
               <td><input type="text" placeholder="아이디"></td>
            </tr>
            <tr>
               <td><input type="password" placeholder="비밀번호"></td>
            </tr>
            <tr>
               <td><input type="password" placeholder="비밀번호 확인"></td>
            </tr>
         </table>
         <table class="abb1_signup_form_control">
            <tr>
               <td colspan="3"><input type="text" placeholder="이름"></td>
            </tr>
            <tr>
               <td><input type="text" placeholder="생년"></td>
            <td>
               <select class="btn btn_default" name="date">
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
            <td><input  type="text" placeholder="일"></td>
         </tr>
         <tr>
            <td><input type="text" placeholder="010"></td>
            <td><input type="text"></td>
            <td><input type="text"></td>
         </tr>
      </table>
      
      <table>
         <tr>
            <td><div class="abb1_sigunup_form_gender"><input type="radio" id="man" name="gender" value="male"/><label id="manLb" for="man">남자</label></div></td>
            <td><div class="abb1_sigunup_form_gender"><input type="radio" id="woman" name="gender" value="female"/><label id="womanLb" for="woman">여자</label></div></td>
         </tr>
      </table>
      <table class="abb1_signup_form_control">
      	<tr>
            <td><input type="text" placeholder="주소" ></td>
            <td>
               <input type="button" value="우편번호 검색" class="btn abb1_btn_lg abb1_btn_verification" type="submit">
            </td>
         </tr>
      	<tr>
               <td colspan="2"><input type="text" placeholder="주소"></td>
        </tr>
      	<tr>
               <td colspan="2"><input type="text" placeholder="상세주소"></td>
        </tr>
      </table>
      <table class="abb1_signup_form_control">
         <tr>
            <td colspan="2"><input type="text" placeholder="이메일" ></td>
            <td>
               <input type="button" value="인증번호 발송" class="btn abb1_btn_lg abb1_btn_verification" type="submit">
            </td>
         </tr>
         <tr>
            <td colspan="3"><input type="text" placeholder="인증번호 입력"></td>
         </tr>
      </table>
      <a href="${context}/customer/signUpSuccess"><input type="button" style="background-color: #453d3f;color: #efebdb;font-size: 15px;" value="가입하기" class="btn abb1_btn_lg abb1_btn_verification abb1_btn_confirm"/></a>
      </div>
   </div>   
   </form>
</div>
<jsp:include page="../common/footer.jsp"/>