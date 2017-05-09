<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="header.jsp"/>
<jsp:include page="gnb.jsp"/>
<div id="wrapper">
        <div id="page-wrapper">
				<div id="notice_table">
				<div>공지글 관리</div>
				<div id="notice_write_wrapper">
				<div>
					<input type="button" value="등록" />
				</div>
				<table>
					<colgroup>
						<col />
						<col />
						<col />
						<col />
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
				<div id="notice_pagination">
				   <table>
				      <tr>
				         <td>
				            <a href="#"><img src="${context}/resources/img/pagination/prev_all.gif" alt="" /></a>
				            <a href="#"><img src="${context}/resources/img/pagination/prev.gif" alt="" /></a>
				         </td>
				         <td>
				            <h4>
				            <a href="#">1</a>
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
			<div id="notice_write">
				<table>
			      <colgroup>
				      <col />
				      <col />
			      </colgroup>
			         <tr>
			            <td>제목</td>
			            <td>
			           	 <input id="notice_title" type="text" name="title" maxlength="50"/>
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
			      <div>
			         <a href="#"><input id="cancel" type="button" value="취소"/></a>
			         <a href="#"><input id="confirm" type="button" value="확인"/></a>
			      </div>
			</div>
        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->
    
<jsp:include page="footer.jsp"/>
<script>
	abb1.jquery.admin_bbs_notice(5);
</script>