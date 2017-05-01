<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<jsp:include page="../common/header.jsp"/>
<div id="container">
   <div class="abb1_bbs_write_container">
      <div class="abb1_bbs_table_text">고객센터</div>
      <div style="margin: 0 auto; text-align: center;">
      <table class="abb1_bbs_notice_table">
         <tr>
            <td>
               <h3>[공지]개인정보 이용내역 안내</h3>
               <ul class="abb1_view_info">
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
            <td colspan="2"><img src="${context}/resources/img/board/notice_sample.jpg" alt="" /></td>
         </tr>
      </table>
      </div>
      <div class="abb1_bbs_write_btns">
         <a href="${context}/board/main"><input type="button" value="목록" class="abb1_bbs_write_confirm"/></a>
      </div>
      
   </div>
</div>
<jsp:include page="../common/footer.jsp"/>