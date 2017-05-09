<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<jsp:include page="../common/header.jsp"/>
<div id="container">
   <div id="board_notice_detail">
      <div><strong>고객센터</strong></div>
      <div>
	      <table id="board_notice_detail_table">
	         <tr>
	            <td>
	               <h3>[공지]개인정보 이용내역 안내</h3>
	               <ul>
	                  <li>
	                     <strong>영화관 : </strong><span> 전체</span>
	                  </li>
	                  <li>
	                     <strong>등록일 : </strong><span> 2017-03-09</span>
	                  </li>
	                  <li>
	                     <strong>조회수 : </strong><span> 27927</span>
	                  </li>
	               </ul>
	            </td>
	         </tr>
	         <tr>
	            <td colspan="2">
	            <div id="board_notice_content"></div>
	            <img src="${context}/resources/img/board/notice_sample.jpg" alt="" />
	            </td>
	         </tr>
	      </table>
      </div>
      <div id="board_notice_detail_btn">
         <a href="${context}/board/main"><input type="button" value="목록"/></a>
      </div>
   </div>
	<!-- board_notice_detail -->
</div>
<jsp:include page="../common/footer.jsp"/>
<script>
	abb1.jquery.board_notice_detail();
</script>