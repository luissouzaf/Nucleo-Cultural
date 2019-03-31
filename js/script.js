$(document).ready(function () {

	$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
	});
});	

$(document).ready(function () {
  var $element = $('#nucleo-title-aside');
  var $follow = $element.find('.title-aside-wrapper');
  var followHeight = $element.find('.title-aside-wrapper').outerHeight();
  var height = $element.outerHeight();
  var window_height = $(window).height();

  $(window).scroll(function () {
    var pos = $(window).scrollTop();
    var top = $element.offset().top;


    if (top + height - followHeight < pos + (window_height / 2 - followHeight / 2) || top > pos + (window_height / 2 - followHeight / 2) ) { 
    	return; 
    } 
    var offset = parseInt($(window).scrollTop() - top + (window_height / 2 - followHeight / 2));
    
    if (offset > 0) {
    $follow.css('transform', 'translateY('+ offset +'px)');
    }
  });
});

$(document).ready(function () {
  var $element = $('#servicos-title-aside');
  var $follow = $element.find('.title-aside-wrapper');
  var followHeight = $element.find('.title-aside-wrapper').outerHeight();
  var height = $element.outerHeight();
  var window_height = $(window).height();

  $(window).scroll(function () {
    var pos = $(window).scrollTop();
    var top = $element.offset().top;


    if (top + height - followHeight < pos + (window_height / 2 - followHeight / 2) || top > pos + (window_height / 2 - followHeight / 2) ) { 
    	return; 
    } 
    var offset = parseInt($(window).scrollTop() - top + (window_height / 2 - followHeight / 2));
    
    if (offset > 0) {
    $follow.css('transform', 'translateY('+ offset +'px)');
    }
  });
});

$(document).ready(function () {
  var $element = $('#projetos-title-aside');
  var $follow = $element.find('.title-aside-wrapper');
  var followHeight = $element.find('.title-aside-wrapper').outerHeight();
  var height = $element.outerHeight();
  var window_height = $(window).height();

  $(window).scroll(function () {
    var pos = $(window).scrollTop();
    var top = $element.offset().top;


    if (top + height - followHeight < pos + (window_height / 2 - followHeight / 2) || top > pos + (window_height / 2 - followHeight / 2) ) { 
    	return; 
    } 
    var offset = parseInt($(window).scrollTop() - top + (window_height / 2 - followHeight / 2));
    
    if (offset > 0) {
    $follow.css('transform', 'translateY('+ offset +'px)');
    }
  });
});

/*$(document).ready(function () {
  var $element = $('#projetos-title-aside');
  var $follow = $element.find('.title-aside-wrapper');
  var followHeight = $element.find('.title-aside-wrapper').outerHeight();
  var height = $element.outerHeight();
  var window_height = $(window).height();

  $(window).scroll(function () {
    var pos = $(window).scrollTop();
    var top = $element.offset().top;


    if (top + height - followHeight < pos + (window_height / 2 - followHeight / 2) || top > pos + (window_height / 2 - followHeight / 2) ) { 
    	return; 
    } 
    var offset = parseInt($(window).scrollTop() - top + (window_height / 2 - followHeight / 2));
    
    if (offset > 0) {
    $follow.css('transform', 'translateY('+ offset +'px)');
    }

	});
});*/


$(document).ready(function () {
  var $element = $('#parceiros-title-aside');
  var $follow = $element.find('.title-aside-wrapper');
  var followHeight = $element.find('.title-aside-wrapper').outerHeight();
  var height = $element.outerHeight();
  var window_height = $(window).height();

  $(window).scroll(function () {
    var pos = $(window).scrollTop();
    var top = $element.offset().top;


    if (top + height - followHeight < pos + (window_height / 2 - followHeight / 2) || top > pos + (window_height / 2 - followHeight / 2) ) { 
    	return; 
    } 
    var offset = parseInt($(window).scrollTop() - top + (window_height / 2 - followHeight / 2));
    
    if (offset > 0) {
    $follow.css('transform', 'translateY('+ offset +'px)');
    }
	});
});

$(document).ready(function () {
  var $element = $('#contato-title-aside');
  var $follow = $element.find('.title-aside-wrapper');
  var followHeight = $element.find('.title-aside-wrapper').outerHeight();
  var height = $element.outerHeight();
  var window_height = $(window).height();

  $(window).scroll(function () {
    var pos = $(window).scrollTop();
    var top = $element.offset().top;


    if (top + height - followHeight < pos + (window_height / 2 - followHeight / 2) || top > pos + (window_height / 2 - followHeight / 2) ) { 
    	return; 
    } 
    var offset = parseInt($(window).scrollTop() - top + (window_height / 2 - followHeight / 2));
    
    if (offset > 0) {
    $follow.css('transform', 'translateY('+ offset +'px)');
    }
	});
});


 /* ---------------CAROUSEL PARCEIROS-------------------------------*/
$(document).ready(function() {
  $('#media').carousel({
    pause: true,
    interval: false,
  });
});

$(document).ready(function() {
  $('#media2').carousel({
    pause: true,
    interval: false,
  });
    var $follow1 = $element1.find('.title-aside-wrapper');
});

$(document).ready(function() {
  $('#media3').carousel({
    pause: true,
    interval: false,
  });
});


/*
$(document).ready(function () {

	$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
	});
	
	var $element1 = $('#nucleo-title-aside');
    var followHeight1 = $element1.find('.title-aside-wrapper').outerHeight();
    var height1 = $element1.outerHeight();
    var window_height1 = $(window).height1();
	
  var $element2 = $('#servicos-title-aside');
  var $follow2 = $element2.find('.title-aside-wrapper');
  var followHeight2 = $element2.find('.title-aside-wrapper').outerHeight();
  var height2 = $element2.outerHeight();
  var window_height2 = $(window).height2();

  var $element3 = $('#projetos-title-aside');
  var $follow3 = $element3.find('.title-aside-wrapper');
  var followHeight3 = $element3.find('.title-aside-wrapper').outerHeight();
  var height3 = $element3.outerHeight();
  var window_height3 = $(window).height3();
  
  var $element5 = $('#parceiros-title-aside');
  var $follow5 = $element5.find('.title-aside-wrapper');
  var followHeight5 = $element5.find('.title-aside-wrapper').outerHeight();
  var height5 = $element5.outerHeight();
  var window_height5 = $(window).height5();
  
  var $element4 = $('#contato-title-aside');
  var $follow4 = $element4.find('.title-aside-wrapper');
  var followHeight4 = $element4.find('.title-aside-wrapper').outerHeight();
  var height4 = $element4.outerHeight();
  var window_height4 = $(window).height4();
  
  $(window).scroll(function () {
    var pos1 = $(window).scrollTop();
    var top1 = $element1.offset().top;


    if (top1 + height1 - followHeight1 < pos1 + (window_height1 / 2 - followHeight1 / 2) || top1 > pos1 + (window_height1 / 2 - followHeight1 / 2) ) { 
    	return; 
    } 
    var offset1 = parseInt($(window).scrollTop() - top1 + (window_height1 / 2 - followHeight1 / 2));
    
    if (offset1 > 0) {
    $follow1.css('transform', 'translateY('+ offset1 +'px)');
    }
	
	var pos2 = $(window).scrollTop();
    var top2 = $element2.offset().top;


    if (top2 + height2 - followHeight2 < pos2 + (window_height2 / 2 - followHeight2 / 2) || top2 > pos2 + (window_height2 / 2 - followHeight2 / 2) ) { 
    	return; 
    } 
    var offset2 = parseInt($(window).scrollTop() - top2 + (window_height2 / 2 - followHeight2 / 2));
    
    if (offset2 > 0) {
    $follow2.css('transform', 'translateY('+ offset2 +'px)');
    }
	
	var pos3 = $(window).scrollTop();
    var top3 = $element3.offset().top;


    if (top3 + height3 - followHeight3 < pos3 + (window_height3 / 2 - followHeight3 / 2) || top3 > pos3 + (window_height3 / 2 - followHeight3 / 2) ) { 
    	return; 
    } 
    var offset3 = parseInt($(window).scrollTop() - top3 + (window_height3 / 2 - followHeight3 / 2));
    
    if (offset3 > 0) {
    $follow3.css('transform', 'translateY('+ offset3 +'px)');
    }
	
    var pos5 = $(window).scrollTop();
    var top5 = $element5.offset().top;


    if (top5 + height5 - followHeight5 < pos5 + (window_height5 / 2 - followHeight5 / 2) || top5 > pos5 + (window_height5 / 2 - followHeight5 / 2) ) { 
    	return; 
    } 
    var offset5 = parseInt($(window).scrollTop() - top5 + (window_height5 / 2 - followHeight5 / 2));
    
    if (offset5 > 0) {
    $follow5.css('transform', 'translateY('+ offset5 +'px)');
    }

    var pos4 = $(window).scrollTop();
    var top4 = $element4.offset().top;


    if (top4 + height4 - followHeight4 < pos4 + (window_height4 / 2 - followHeight4 / 2) || top4 > pos4 + (window_height4 / 2 - followHeight4 / 2) ) { 
    	return; 
    } 
    var offset4 = parseInt($(window).scrollTop() - top4 + (window_height4 / 2 - followHeight4 / 2));
    
    if (offset4 > 0) {
    $follow4.css('transform', 'translateY('+ offset4 +'px)');
    }	
  });
  
  
    $('#media').carousel({
    pause: true,
    interval: false,
  });
  
   $('#media2').carousel({
    pause: true,
    interval: false,
  });
  
    $('#media3').carousel({
    pause: true,
    interval: false,
  });
});	
*/

