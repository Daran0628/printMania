// main.js

// *** header
// * * * nav

$(".gnb>li").hover(function () {
  console.log("it works");
  $(this).children(".depth_2").slideDown();
});
