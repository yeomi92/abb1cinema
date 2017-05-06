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
    
<script>
$(function(){
	var notice_table = $('#notice_table');
	notice_table.find('div:first-child').addClass('abb1_admin_maintext');
	var notice_write_wrapper = $('#notice_write_wrapper');
	notice_write_wrapper.find('div:first-child').addClass('abb1_admin_notice_register');
	notice_write_wrapper.find('table').addClass('abb1_admin_notice_table');
	notice_write_wrapper.find('col:nth-child(1)').css('width','10%');
	notice_write_wrapper.find('col:nth-child(2)').css('width','60%');
	notice_write_wrapper.find('col:nth-child(3)').css('width','20%');
	notice_write_wrapper.find('col:nth-child(4)').css('width','10%');
	var notice_pagination = $('#notice_pagination');
	notice_pagination.addClass('abb1_admin_pagination abb1_pagination_faq');
	notice_pagination.find('td:nth-child(2)').css('width','256px');
	notice_pagination.find('td:nth-child(2)').find('a:nth-child(1)').addClass('on');
	var notice_write = $('#notice_write');
	notice_write.find('table').addClass('abb1_notice_write_table');
	notice_write.find('col:nth-child(1)').css('width','15%');
	notice_write.find('col:nth-child(2)').css('width','80%');
	$('#notice_title').addClass('abb1_write_title');
	notice_write.find('div').addClass('abb1_bbs_write_btns');
	$('#cancel').addClass('abb1_bbs_write_cancel');
	$('#confirm').addClass('abb1_bbs_write_confirm');
	
});
</script>
<jsp:include page="footer.jsp"/>