<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../common/header.jsp"/>
<ul>
<li>
<div class="abb1_movie_curr_box">
<span class="abb1_movie_img">
<a href=""> <img src="${context}/resources/img/movie/movie_poster_0.png" alt="임금님의 사건수첩" /> </a>
</span>
</div>
<div class="abb1_movie_layer_hover">
<a href="" class="abb1_movie_brn_reserve">예매하기</a>
<a href="" class="abb1_movie_view">상세보기</a>
</div>
<dl class="abb1_movie_list_text">
<dt>
<a href="">임금님의 사건수첩</a>
</dt>
<dd>
<span class="abb1_movie_rate">예매율 12.2%</span>
<span class="abb1_movie_list_score">관람평점 7.6</span>
</dd>
</dl>
</li>
</ul>

<div>
<h3>star test</h3>
<span class="star-input">
  <span class="input">
    <input type="radio" name="star-input" id="p1" value="1"><label for="p1">1</label>
    <input type="radio" name="star-input" id="p2" value="2"><label for="p2">2</label>
    <input type="radio" name="star-input" id="p3" value="3"><label for="p3">3</label>
    <input type="radio" name="star-input" id="p4" value="4"><label for="p4">4</label>
    <input type="radio" name="star-input" id="p5" value="5"><label for="p5">5</label>
    <input type="radio" name="star-input" id="p6" value="6"><label for="p6">6</label>
    <input type="radio" name="star-input" id="p7" value="7"><label for="p7">7</label>
    <input type="radio" name="star-input" id="p8" value="8"><label for="p8">8</label>
    <input type="radio" name="star-input" id="p9" value="9"><label for="p9">9</label>
    <input type="radio" name="star-input" id="p10" value="10"><label for="p10">10</label>
  </span>
  <output for="star-input"><b>0</b>점</output>
</span>
</div>


<script>
var starRating = function(){
  var $star = $(".star-input"),
      $result = $star.find("output>b");
  $(document)
    .on("focusin", ".star-input>.input", function(){
    $(this).addClass("focus");
  })
    .on("focusout", ".star-input>.input", function(){
    var $this = $(this);
    setTimeout(function(){
      if($this.find(":focus").length === 0){
        $this.removeClass("focus");
      }
    }, 100);
  })
    .on("change", ".star-input :radio", function(){
    $result.text($(this).next().text());
  })
    .on("mouseover", ".star-input label", function(){
    $result.text($(this).text());
  })
    .on("mouseleave", ".star-input>.input", function(){
    var $checked = $star.find(":checked");
    if($checked.length === 0){
      $result.text("0");
    } else {
      $result.text($checked.next().text());
    }
  });
};
starRating();
</script>
<jsp:include page="../common/footer.jsp"/>