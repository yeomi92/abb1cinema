<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<jsp:include page="../common/header.jsp"/>
<div id="container">
   <div class="abb1_bbs_write_container">
      <div class="abb1_bbs_write_text">문의내용</div>
      <div style="text-align: right;">      
      <span style="font-size: 12px; "><span style="color: red;">*</span> 표시항목은 필수 입력 항목입니다.</span>
      </div>
      <table class="abb1_bbs_write_table">
      <colgroup>
      <col style="width: 15%"/>
      <col style="width: 80%"/>
      </colgroup>
         <tr>
            <td>문의종류 <span style="color: red;">*</span></td>
            <td class="abb1_bbs_write_radio">
               <input type="radio" name="kind" value="1" checked="checked"/><span>문의</span>
               <input type="radio" name="kind" value="2" checked="checked"/><span>칭찬</span>
               <input type="radio" name="kind" value="3" checked="checked"/><span>불만</span>
               <input type="radio" name="kind" value="4" checked="checked"/><span>건의</span>
            </td>
         </tr>
         <tr>
            <td>분류 <span style="color: red;">*</span></td>
            <td>
               <select class="abb1_write_ddl" name="category">
                  <option value="" selected>분류 선택</option>
                  <option value="theater">영화관 문의</option>
                  <option value="movie">영화 문의</option>
                  <option value="customer">회원 문의</option>
                  <option value="paying">결제 문의</option>
                  <option value="homepage">홈페이지 문의</option>
               </select> 
            </td>
         </tr>
         <tr>
            <td>영화관 <span style="color: red;">*</span></td>
            <td><input id="bbs_write_select_movie" type="button" value="영화관 선택"/></td>
         </tr>
         <tr>
            <td>제목 <span style="color: red;">*</span></td>
            <td>
               <input type="text" class="abb1_write_title" name="title" maxlength="50"/>
            </td>
         </tr>
         <tr style="height: 180px">
            <td>내용 <span style="color: red;">*</span></td>
            <td>
               <textarea name="contents" id="bbs_write_contents" cols="30" rows="10"></textarea>
            </td>
         </tr>
         <tr>
            <td>첨부파일</td>
            <td>
               <input type="file" id="file" name="file" value="파일 찾기"/>
               <span>jpg, jpeg, png, bmp, pdf (2MB × 1개)</span>
            </td>
         </tr>
         <tr>
            <td>답변 여부</td>
            <td>
               <input type="checkbox" checked="checked"/><span>이메일로 답변 알림 받기</span>
            </td>
         </tr>
      </table>
      <div class="abb1_bbs_write_btns">
         <a href="#"><input type="button" value="취소" class="abb1_bbs_write_cancel"/></a>
         <a href="#"><input type="button" value="확인" class="abb1_bbs_write_confirm"/></a>
      </div>
      
   </div>
</div>
<jsp:include page="../common/footer.jsp"/>
