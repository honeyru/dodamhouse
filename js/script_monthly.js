//submenu
$(function(){
  $(".submenu_wrap").hide();
  $("#gnb li").mouseenter(function(){
    $(".submenu_wrap").stop().slideDown();
  });
  $("#header").mouseleave(function(){
    $(".submenu_wrap").stop().slideUp();
  });
});


$(document).ready(function(){ 

  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header_wrap').addClass('header-scrolled');
    } else {
      $('#header_wrap').removeClass('header-scrolled');
    }
  })

 });