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

//tab 상위 js
$(document).ready(function(){
   
  $('ul.tabs .tab-link').click(function(){
    var tab_id = $(this).attr('data-tab');
 
    $('ul.tabs .tab-link').removeClass('current');
    $('.tab-content').removeClass('current');
 
    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })
 
});



 
 // icon_click event
 $(function(){          
  $(".w1").click(function(){			
    $(".w_1").toggle();
    });	
  });
  $(function(){          
    $(".c1").click(function(){			
      $(".c_1").toggle();
    });	
  });
  $(function(){          
    $(".w2").click(function(){			
      $(".w_2").toggle();
    });	
  });
  $(function(){          
    $(".c2").click(function(){			
      $(".c_2").toggle();
    });	
  });
  $(function(){          
    $(".w3").click(function(){			
      $(".w_3").toggle();
      });	
    });
  $(function(){          
    $(".c3").click(function(){			
      $(".c_3").toggle();
    });	
  });
  $(function(){          
    $(".w4").click(function(){			
      $(".w_4").toggle();
    });	
  });
  $(function(){          
    $(".c4").click(function(){			
      $(".c_4").toggle();
    });	
  });
  $(function(){          
    $(".w5").click(function(){			
      $(".w_5").toggle();
      });	
    });
  $(function(){          
    $(".c5").click(function(){			
      $(".c_5").toggle();
    });	
  });
  $(function(){          
    $(".w6").click(function(){			
      $(".w_6").toggle();
    });	
  });
  $(function(){          
    $(".c6").click(function(){			
      $(".c_6").toggle();
    });	
  });
  $(function(){          
    $(".w7").click(function(){			
      $(".w_7").toggle();
      });	
    });
  $(function(){          
    $(".c7").click(function(){			
      $(".c_7").toggle();
    });	
  });
  $(function(){          
    $(".w8").click(function(){			
      $(".w_8").toggle();
    });	
  });
  $(function(){          
    $(".c8").click(function(){			
      $(".c_8").toggle();
    });	
  });
  $(function(){          
    $(".w9").click(function(){			
      $(".w_9").toggle();
      });	
    });
  $(function(){          
    $(".c9").click(function(){			
      $(".c_9").toggle();
    });	
  });
  $(function(){          
    $(".w10").click(function(){			
      $(".w_10").toggle();
    });	
  });
  $(function(){          
    $(".c10").click(function(){			
      $(".c_10").toggle();
    });	
  });
  $(function(){          
    $(".w11").click(function(){			
      $(".w_11").toggle();
      });	
    });
  $(function(){          
    $(".c11").click(function(){			
      $(".c_11").toggle();
    });	
  });
  $(function(){          
    $(".w12").click(function(){			
      $(".w_12").toggle();
    });	
  });
  $(function(){          
    $(".c12").click(function(){			
      $(".c_12").toggle();
    });	
  });
