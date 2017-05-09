<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<jsp:include page="../common/header.jsp"/>
<div id="container">
   <div id="board_write">
      <div><strong>문의내용</strong></div>
      <div>      
      	<span><span>*</span> 표시항목은 필수 입력 항목입니다.</span>
      </div>
      <table id="board_write_table">
	      <colgroup>
	      	<col />
	      	<col />
	      </colgroup>
         <tr>
            <td>문의종류 <span>*</span></td>
            <td id="board_write_radio">
               <input type="radio" name="kind" value="1" checked="checked"/><span>문의</span>
               <input type="radio" name="kind" value="2" checked="checked"/><span>칭찬</span>
               <input type="radio" name="kind" value="3" checked="checked"/><span>불만</span>
               <input type="radio" name="kind" value="4" checked="checked"/><span>건의</span>
            </td>
         </tr>
         <tr>
            <td>분류 <span>*</span></td>
            <td>
               <select id="board_write_category" name="category">
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
            <td>영화관 <span>*</span></td>
            <td><input id="board_write_select_multiplex" type="button" value="영화관 선택"/></td>
         </tr>
         <tr>
            <td>제목 <span>*</span></td>
            <td>
               <input id="board_write_title" type="text" name="title" maxlength="50"/>
            </td>
         </tr>
         <tr>
            <td>내용 <span>*</span></td>
            <td>
               <textarea name="contents" id="board_write_content" cols="30" rows="10"></textarea>
            </td>
         </tr>
         <tr>
            <td>첨부파일</td>
            <td>
               <input type="file" id="file" name="file" value="파일 찾기"/>
               <span>jpg, jpeg, png, bmp, pdf (2MB × 1개)</span>
            </td>
         </tr>
      </table>
      <div id="board_write_btns">
         <a href="#"><input id="board_write_cancel" type="button" value="취소"/></a>
         <a href="#"><input id="board_wrtie_confirm" type="button" value="확인"/></a>
      </div>
      
   </div>
   <!-- board_write -->
</div>
<jsp:include page="../common/footer.jsp"/>
<script>
	abb1.jquery.board_write();
</script>
