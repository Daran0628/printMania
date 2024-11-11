// main.js

// *** header
// * * * nav

$(".gnb>li").hover(
  function () {
    $(this).children("ul").css("display", "flex");
  },
  function () {
    $(this).children("ul").hide();
  }
);
// * * * user_util
// // *** search

$(".search").click(function () {
  $(".search_modal").addClass("show");
  $(".search.open").hide();
});
$(".search_close").click(function () {
  $(".search_modal").removeClass("show");
  $(".search.open").show();
});
