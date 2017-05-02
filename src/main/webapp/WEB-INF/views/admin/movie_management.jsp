<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="header.jsp"/>
<jsp:include page="gnb.jsp"/>
<div id="wrapper">
        <div id="page-wrapper">
        <div class="abb1_admin_maintext">영화 관리</div>
			<div>
				<input id="reservation_search_keyword" type="text" class="abb1_admin_reservation_search_keyword" placeholder="영화명 입력" />
			<input type="button" value="검색" class="abb1_admin_reservation_search_btn"/>
			</div>
			<div class="abb1_admin_settings">
				<div class="abb1_admin_movie_management_table">
				<table>
					<tr>
						<td rowspan="11"><img src="${context}/resources/img/movie/movie_poster_0.png" alt="" width="100%" height="100%"/></td>
						<td>영화명</td>
						<td><input id="" type="text" value="영화명"/></td>
					</tr>
					<tr>
						<td>등급</td>
						<td><input id="" type="text" value="등급"/></td>
					</tr>
					<tr>
						<td>개봉일</td>
						<td><input id="" type="text" value="개봉일"/></td>
					</tr>
					<tr>
						<td>기본정보</td>
						<td><input id="" type="text" value="기본정보"/></td>
					</tr>
					<tr>
						<td>시놉시스</td>
						<td><textarea name="" id="" cols="30" rows="6"></textarea></td>
					</tr>
					<tr>
						<td>감독 이름</td>
						<td><input id="" type="text" value="감독 이름"/></td>
					</tr>
					<tr>
						<td>감독 사진</td>
						<td><input type="file" /></td>
					</tr>
					<tr>
						<td>배우 이름</td>
						<td><input id="" type="text" value="배우 이름"/></td>
					</tr>
					<tr>
						<td>배우 사진</td>
						<td><input type="file" /></td>
					</tr>
					<tr>
						<td>영화 프로필 사진</td>
						<td><input type="file" /></td>
					</tr>
					<tr>
						<td>트레일러 URL</td>
						<td><input type="text" value="http://youtube.com/"/></td>
					</tr>
				</table>
				</div>
				<div class="abb1_admin_movie_management_btns">
				<input type="button" value="삭제"/>
				<input type="button" value="수정"/>
				</div>
			</div>
        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->
<jsp:include page="footer.jsp"/>