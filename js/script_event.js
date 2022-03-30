/*submenu*/ 
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


//tab js
$(document).ready(function(){
  $(".tab_title li").click(function(){
    var idx = $(this).index();
    $(".tab_title li").removeClass("on");
    $(".tab_title li").eq(idx).addClass("on");
    $(".tab_cont > div").hide();
    $(".tab_cont > div").eq(idx).show();
  })
});


 // icon_click event
 $(function(){          
  $("img.sub_icon_click").click(function(){			
    $(this).css({"opacity":"1"});
    
  });	
});
