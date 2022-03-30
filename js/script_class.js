//sub js
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
   
  $('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');
 
    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');
 
    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })
 
})
 