<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="header.jsp"/>
<jsp:include page="gnb.jsp"/>
<div id="wrapper">
        <div id="page-wrapper">
			<div id="faq_table">
			<div>문의글 관리</div>
			<div id="faq_write_wrapper">
				<table>
				<colgroup>
					<col />
					<col />
					<col />
					<col />
					<col />
					<col />
				</colgroup>
					<tr>
						<th>순번</th>
						<th>제목</th>
						<th>작성자</th>
						<th>작성시간</th>
						<th>문답여부</th>
						<th>삭제</th>
					</tr>
					<tr>
					<td>4</td>
						<td><a href="#">그것이 문제로다</a></td>
						<td>박준용</td>
						<td>2017-05-02</td>
						<td>X</td>
						<td><input type="button" value="x"/></td>
					</tr>
					<tr>
					<td>3</td>
						<td><a href="#">그것이 문제로다</a></td>
						<td>박준용</td>
						<td>2017-05-02</td>
						<td>X</td>
						<td><input type="button" value="x"/></td>
					</tr>
					<tr>
					<td>2</td>
						<td><a href="#">그것이 문제로다</a></td>
						<td>박준용</td>
						<td>2017-05-02</td>
						<td>X</td>
						<td><input type="button" value="x"/></td>
					</tr>
					<tr>
					<td>1</td>
						<td><a href="#">그것이 문제로다</a></td>
						<td>박준용</td>
						<td>2017-05-02</td>
						<td>X</td>
						<td><input type="button" value="x"/></td>
					</tr>
				</table>
				<div id="faq_pagination">
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
			<div id="faq_answer">
			<div>
		      <table>
		         <tr>
		            <td>
		               <h3>영화관 관련 질문</h3>
		               <ul>
		                  <li>
		                     <strong>카테고리 : </strong><span> 영화관</span>
		                  </li>
		                  <li>
		                     <strong>등록일 : </strong><span> 2017-04-21</span>
		                  </li>
		                  <li>
		                     <strong>조회수 : </strong><span> 27851</span>
		                  </li>
		               </ul>
		            </td>
		         </tr>
		         <tr>
		            <td colspan="2">
		            <div id="faq_question_content">
		            <span>국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다.</span>
		            </div>
		            </td>
		         </tr>
		         <tr>
		            <td>
		            <table id="faq_answer_content">
		               <colgroup>
			               <col />
			               <col />
		               </colgroup>
		               <tr>
		                  <td><textarea name="bbs_review_contents" id="bbs_review_contents" cols="30" rows="5"  placeholder="Write a comment..."></textarea></td>
		                  <td><input id="bbs_review_contents_submit" type="submit" value="입력"/></td>
		               </tr>
		            </table>
		            </td>
		         </tr>
		      </table>
		      </div>
			</div>
        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->
<script>
$(function(){
	var faq_table = $('#faq_table');
	faq_table.find('div:first-child').addClass('abb1_admin_maintext');
	var faq_write_wrapper = $('#faq_write_wrapper');
	faq_write_wrapper.find('table').addClass('abb1_admin_faq_table');
	faq_write_wrapper.find('col:nth-child(1)').css('width','10%');
	faq_write_wrapper.find('col:nth-child(2)').css('width','45%');
	faq_write_wrapper.find('col:nth-child(3)').css('width','10%');
	faq_write_wrapper.find('col:nth-child(4)').css('width','20%');
	faq_write_wrapper.find('col:nth-child(5)').css('width','10%');
	faq_write_wrapper.find('col:nth-child(6)').css('width','10%');
	var faq_pagination = $('#faq_pagination');
	faq_pagination.addClass('abb1_admin_pagination abb1_pagination_faq');
	faq_pagination.find('td:nth-child(2)').css('width','256px');
	faq_pagination.find('td:nth-child(2)').find('a:nth-child(1)').addClass('on');
	var faq_answer = $('#faq_answer');
	faq_answer.find('div:first-child').addClass('abb1_bbs_pagination_table');
	faq_answer.find('table:first-child').addClass('abb1_bbs_notice_table');
	faq_answer.find('ul').addClass('abb1_view_info');
	$('#faq_question_content').addClass('abb1_view_content');
	var faq_answer_content = $('#faq_answer_content');
	faq_answer_content.find('col:nth-child(1)').css('width','90%');
	faq_answer_content.find('col:nth-child(2)').css('width','10%');
});
</script>

<jsp:include page="footer.jsp"/>