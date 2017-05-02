<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../common/headerLogin.jsp"/>
<div id="container">
<div class="abb1_find_id_container">
<div class="abb1_width_left"> 
<h2 class="abb1_color_bold_brown"><strong>마이시네마</strong></h2>
</div>
<div class="abb1_padding_top_20 abb1_width_left">
	<ul class="abb1_page_ul_inline">
		<li class="abb1_page_li_inline">
			<a href="${context}/customer/mypage" class="abb1_mypage_not_select_btn">예매/구매내역</a>
		</li>
		<li class="abb1_page_li_inline">
			<a href="#" class="abb1_mypage_select_btn">나의 정보관리</a>
		</li>
	</ul> 
</div>
<div class="abb1_mypage_reservation_content">
	<div class="abb1_page_info abb1_width_center">
	<table>
		<tr>
			<td>
				<ul class="abb1_page_ul_inline">
					<li class="abb1_finc_id_cancel_btn">
						<a href="${context}/customer/updateInfoChPw"><input type="button" value="회원정보변경" class="btn abb1_btn_lg abb1_btn_verification" /></a>
					</li>
					<li class="abb1_page_li_inline">
						<a href="${context}/customer/withdrawal"><input type="button" value="회원탈퇴" class="btn abb1_btn_lg abb1_btn_verification" /></a>
					</li>
				</ul>
			</td>
		</tr>
	</table>
	
	</div>
</div>
</div>
</div>
<jsp:include page="../common/footer.jsp"/>