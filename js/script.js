$(function(){
  //.submenu_wrap 숨기기
  $(".submenu_wrap").hide();
  //#gnb li에 마우스를 올리면
  $("#gnb li").mouseenter(function(){
    //.submenu_wrap이 나타난다
    $(".submenu_wrap").stop().slideDown();
  });
  //.submenu_wrap과 #gnb를 모두 포함하는 영역이 필요함. 현재는 #header가 있지만 나중에 필요하면 div 박스가 필요할 수도 있음
  //#header가 마우스를 벗어나면
  $("#header").mouseleave(function(){
    //.submenu_wrap이 사라진다
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