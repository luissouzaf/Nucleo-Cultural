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
});

$(document).ready(function() {
  $('#media3').carousel({
    pause: true,
    interval: false,
  });
});


