<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="header.jsp"/>
<jsp:include page="gnb.jsp"/>
<div id="wrapper">
        <div id="page-wrapper">
       		<div id="movie_register">
		        <div>영화 등록</div>
				<div>
					<div id="movie_register_table">
					<table>
						<tr>
							<td>영화명</td>
							<td><input id="" type="text"/></td>
						</tr>
						<tr>
							<td>등급</td>
							<td><input id="" type="text"/></td>
						</tr>
						<tr>
							<td>개봉일</td>
							<td><input id="" type="text"/></td>
						</tr>
						<tr>
							<td>기본정보</td>
							<td><input id="" type="text"/></td>
						</tr>
						<tr>
							<td>시놉시스</td>
							<td><textarea name="" id="" cols="30" rows="6"></textarea></td>
						</tr>
						<tr>
							<td>감독 이름</td>
							<td><input id="" type="text"/></td>
						</tr>
						<tr>
							<td>감독 사진</td>
							<td><input type="file" /></td>
						</tr>
						<tr>
							<td>배우 이름</td>
							<td><input id="" type="text"/></td>
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
							<td><span><input type="text"/></span></td>
						</tr>
						<tr id="trailer_check">
							<td><input id="" type="checkbox"/></td>
							<td>메인 페이지 트레일러로 등록</td>
						</tr>
					</table>
					</div>
					<div id="movie_register_btns">
						<input id="cancel" type="button" value="취소"/>
						<input id="confirm" type="button" value="확인"/>
					</div>
				</div>
		        </div>
       		</div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->
<jsp:include page="footer.jsp"/>
<script>
	abb1.jquery.admin_movie_register();
</script>