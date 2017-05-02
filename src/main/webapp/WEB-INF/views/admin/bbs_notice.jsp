<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="header.jsp"/>
<jsp:include page="gnb.jsp"/>
<div id="wrapper">
        <div id="page-wrapper">
			<div id="notice_table">
			<div class="abb1_admin_maintext">공지글 관리</div>
			<div id="notice_write_wrapper">
			<div class="abb1_admin_notice_register">
				<input type="button" value="등록" />
			</div>
				<table class="abb1_admin_notice_table">
				<colgroup>
					<col style="width: 10%"/>
					<col style="width: 60%"/>
					<col style="width: 20%"/>
					<col style="width: 10%"/>
				</colgroup>
					<tr>
						<th>순번</th>
						<th>제목</th>
						<th>작성시간</th>
						<th>삭제</th>
					</tr>
					<tr>
						<td>4</td>
						<td><a href="#">개인정보 보호내역</a></td>
						<td>2017-05-02</td>
						<td><input type="button" value="x"/></td>
					</tr>
					<tr>
					<td>3</td>
						<td><a href="#">개인정보 보호내역</a></td>
						<td>2017-05-02</td>
						<td><input type="button" value="x"/></td>
					</tr>
					<tr>
					<td>2</td>
						<td><a href="#">개인정보 보호내역</a></td>
						<td>2017-05-02</td>
						<td><input type="button" value="x"/></td>
					</tr>
					<tr>
					<td>1</td>
						<td><a href="#">개인정보 보호내역</a></td>
						<td>2017-05-02</td>
						<td><input type="button" value="x"/></td>
					</tr>
				</table>
				<div class="abb1_admin_pagination abb1_pagination_notice">
				   <table class="abb1_bbs_pagination_table">
				      <tr>
				         <td>
				            <a href="#"><img src="${context}/resources/img/pagination/prev_all.gif" alt="" /></a>
				            <a href="#"><img src="${context}/resources/img/pagination/prev.gif" alt="" /></a>
				         </td>
				         <td style="width: 256px;">
				            <h4>
				            <a class="on" href="#">1</a>
				            <a href="#">2</a>
				            <a href="#">3</a>
				            <a href="#">4</a>
				            <a href="#">5</a>
				            <a href="#">6</a>
				            <a href="#">7</a>
				            <a href="#">8</a>
				            <a href="#">9</a>
				            <a href="#">10</a>
				            </h4>
				         </td>
				         <td>
				            <a href="#"><img src="${context}/resources/img/pagination/next.gif" alt="" /></a>
				            <a href="#"><img src="${context}/resources/img/pagination/next_all.gif" alt="" /></a>
				         </td>
				      </tr>
				   </table>
				  </div>
			</div>
			</div>
			<div id="">
				<table class="abb1_notice_write_table">
			      <colgroup>
			      <col style="width: 15%"/>
			      <col style="width: 80%"/>
			      </colgroup>
			         <tr>
			            <td>제목</td>
			            <td>
			               <input type="text" class="abb1_write_title" name="title" maxlength="50"/>
			            </td>
			         </tr>
			         <tr>
			            <td>내용</td>
			            <td>
			               <textarea name="contents" id="bbs_write_notice" cols="30" rows="10"></textarea>
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
			      <div class="abb1_bbs_write_btns">
			         <a href="#"><input type="button" value="취소" class="abb1_bbs_write_cancel"/></a>
			         <a href="#"><input type="button" value="확인" class="abb1_bbs_write_confirm"/></a>
			      </div>
			</div>
        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->
<jsp:include page="footer.jsp"/>