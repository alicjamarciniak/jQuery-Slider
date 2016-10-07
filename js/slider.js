$(document).ready(function() {

  var num = 10; //number of pixels before modifying styles
  $(window).bind('scroll', function (e) {
    e.preventDefault();
      if ($(window).scrollTop() > num) {
          $('.navbar-sticky').addClass('fixed');
          $('.header').addClass('header-fixed');
      } else {
          $('.navbar-sticky').removeClass('fixed');
          $('.header').removeClass('header-fixed');
      }
  });

  $(document).on('click', function (e) {
      if (e.originalEvent.defaultPrevented) return;
      // continue
  });

  /* slider START */
  function changeSlide($direction) {
    var $me = '.arrow-' + $direction;

    if ($direction == 'left') {
      var $next = $($me).siblings('.active-slide').removeClass('active-slide').next('.single-slide');
      var $begining = '.single-slide:first';
    }
    else if ($direction == 'right') {
      var $next = $($me).siblings('.active-slide').removeClass('active-slide').fadeOut('slow').prev('.single-slide');
      var $begining = '.single-slide:last';
    }

    if($next.length) {
      $next.addClass('active-slide');
    } else {
      $($me).siblings($begining).addClass('active-slide');
    };
  };

  // function changeSlide($direction) {
  //   var $me = '.arrow-' + $direction;
  //
  //   if ($direction == 'left') {
  //     var $next = $($me).siblings('.active-slide').fadeOut('slow', function() {
  //     $next = $next.removeClass('active-slide').next('.single-slide');
  //   });
  //     var $begining = '.single-slide:first';
  //   }
  //   else if ($direction == 'right') {
  //     var $next = $($me).siblings('.active-slide').fadeOut('slow', function() {
  //     $next = $next.removeClass('active-slide').prev('.single-slide');
  //   });
  //     var $begining = '.single-slide:last';
  //   }
  //
  //   if($next.length) {
  //     $next.fadeIn('slow', function() {
  //       $(this).addClass('active-slide');
  //     });
  //   } else {
  //     $($me).siblings($begining).fadeIn('slow', function() {
  //       $(this).addClass('active-slide');
  //     });
  //   };
  // };


  $('.arrow-left').on('click', function() {
    changeSlide('left');
  });

  $('.arrow-right').on('click', function() {
    changeSlide('right');
  });


  /* slider END */

  /* articles START */
    $('.article-hexagon').on('click', function() {
      $(this).siblings('.article-content').slideToggle('slow');
    });
  /* articles END */
});
