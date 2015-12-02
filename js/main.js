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


// ������� Internet Explorer?
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


/*-----------------------------------------------------------------*/  
  $('.magnific').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',
    modal: true,

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
  });

  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

});




