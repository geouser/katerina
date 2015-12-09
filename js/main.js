// Global parameters
window.params = {
  widthFull: 750,
  maxRowHeight: 0,
  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  isIOS: /iPhone|iPad|iPod/i.test(navigator.userAgent)
};

function Main() {

  // add conditional classes
  if (params.isIOS) $('html').addClass('-ios');
  if (params.isMobile) $('html').addClass('-mobile');

}

$(function(){
  Main();
});


// Браузер Internet Explorer?
$(function(){
  if (navigator.appName == 'Microsoft Internet Explorer') {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null) {
      var v = parseFloat( RegExp.$1 );
      $('html').addClass("ie");
      $('html').addClass("ie"+v);
    }
  } else if (navigator.appName == 'Netscape') {
    var ua = navigator.userAgent;
    var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null) {
      var v = parseFloat( RegExp.$1 );
      $('html').addClass("ie");
      $('html').addClass("ie"+v);
    }
  }
});



/*
#############################
#   Main JS for ____________   #
#############################
*/

jQuery(document).ready(function($) {


  $('.href').hover(function() {
       $(this).children('img').attr('src', 'images/svg/hrefArrowWhite.svg');
  },function() {
      $(this).children('img').attr('src', 'images/svg/hrefArrow.svg');
  });

  $('button.href').hover(function() {
       $(this).children('img').attr('src', 'images/svg/hrefArrow.svg');
  },function() {
      $(this).children('img').attr('src', 'images/svg/hrefArrowWhite.svg');
  });


  if ($("#lookSlider").length > 0) {
    $("#lookSlider").smoothDivScroll({
          mousewheelScrolling: "",
          manualContinuousScrolling: true,
          autoScrollingMode: "onStart",
          touchScrolling: true,
          mousewheelScrollingStep: 1,
          hotSpotScrollingStep: 5,
          hotSpotMouseDownSpeedBooster: 10,
          easingAfterHotSpotScrolling: true
    });

    if (params.isMobile){
      $("#lookSlider").smoothDivScroll({
            mousewheelScrolling: "",
            manualContinuousScrolling: true,
            autoScrollingMode: "onStart",
            touchScrolling: true,
            mousewheelScrollingStep: 1,
            hotSpotScrolling: false
      });
    }  
  };


$(function() { // add class on scroll
  var $document = $(document),
      $element = $('.menu-button'),
      $element2 = $('nav'),
      className = 'hasScrolled';

  $document.scroll(function() {
    $element.toggleClass(className, $document.scrollTop() >= 140);
    $element2.toggleClass(className, $document.scrollTop() >= 160);
  });
});

$('.menu-button').on('click', function(event) {
  event.preventDefault();
  $(this).toggleClass('active');
  $(this).siblings('nav').fadeToggle('fast');
});

$('nav li').each(function(){
   if($(this).children().length > 1) {
        $(this).addClass('withSub');
   }
});

$('nav li.withSub').on('click', function(event) {
  event.preventDefault();
  $(this).children('ul').fadeToggle('fast');
  $(this).siblings().children('ul').fadeOut('fast');
});

if (params.isMobile){
  $('nav li.withSub').on('click', function(event) {
    event.preventDefault();
    $(this).children('ul').slideToggle('fast');
    $(this).siblings().children('ul').slideUp('fast');
  });
}  

/*-----------------------------------------------------------------*/  
  $('.magnific').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',
    modal: false,

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
  });

  /*$('.image_box').magnificPopup({
    delegate: 'img',
    type: 'image',
    overflowY: 'auto',
    fixedContentPos: false,
    fixedBgPos: true,
    tLoading: 'Loading image #%curr%...',
    mainClass: 'my-mfp-slide-bottom',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('alt');
      }
    }
  });*/

  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

/*  
    $('.image_box').slick({
      arrows: false,
      asNavFor: '.image_box_navigation',
      fade: true,
      adaptiveHeight: true
    });

*/    
  if ( $('.image_box_navigation').length > 0 ) {
    $('.image_box_navigation').slick({
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      focusOnSelect: true,
      centerMode: true
    });
  };

  
  // Instantiate EasyZoom instances
  var $easyzoom = $('.easyzoom').easyZoom();

  // Setup thumbnails example
  var api1 = $easyzoom.filter('.easyzoom--with-thumbnails').data('easyZoom');

  $('.thumbnails').on('click', 'a', function(e) {
    var $this = $(this);

    e.preventDefault();

    // Use EasyZoom's `swap` method
    api1.swap($this.data('standard'), $this.attr('href'));
  });




  $('.sizes a').on('click', function(event) {
    event.preventDefault();
    var el = $(this);
    el.addClass('active').parent().siblings().find('a').removeClass('active');
    var size = $(this).attr('href');
    $('#size').val(size);
  });

  $('.colors a').on('click', function(event) {
    event.preventDefault();
    var el = $(this);
    el.addClass('active').parent().siblings().find('a').removeClass('active');
    var color = $(this).attr('href');
    $('#color').val(color);
  });


  function carusel(operation, i){
    var i;
    if (operation == 'plus') {
      i++;
    } else if (operation == 'minus') {
      i--
    };
    if (i <= 1) {
      i = 1
    }
    return i;
  }

  function  calculate(price, count){
    return (price * count);
  }

  function sum(){
    var i = 0;
    $('input[name="sum"]').each(function(index, el) {
      var val = $(this).val();
      i += 1*val;
    });
    $('.allSum').add('.poditog').text( i );
    return i;
  };
  sum();

  $('.box-count').find('input').val('1');

  $('.box-count button').on('click', function(event) {
    event.preventDefault();
    var i = $(this).siblings('.value').text();
    var operation = $(this).attr('operation');

    i = carusel(operation, i);
    $(this).siblings('.value').text( i );
    $(this).siblings('input').val(i);

    var price = $(this).parent().parent().siblings().find('.price').text();
    $(this).parent().parent().siblings().find('.sum').text( calculate(price, i) ).siblings('input').val( calculate(price, i) );
    sum();
  });


});




