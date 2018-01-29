$(document).ready(function() {

  function displayNavbarSticky() {
      if (($(window).scrollTop()) > num || ($(window).innerWidth() < 1200)) {
          $('.navbar-sticky').addClass('fixed');
          $('.header').addClass('header-fixed');
          $('.slider').addClass('slider-sticky');
      } else if($(window).scrollTop() < num){
          $('.navbar-sticky').removeClass('fixed');
          $('.header').removeClass('header-fixed');
          $('.slider').removeClass('slider-sticky');
      }
  };


  displayNavbarSticky();
  var num = 10; //number of pixels before modifying styles
  $(window).bind('scroll', displayNavbarSticky);


  $(document).on('click', function (e) {
      if (e.originalEvent.defaultPrevented) return;
      // continue
  });

  /* slider START */
  function changeSlide($direction) {
    var $me = '.arrow-' + $direction;
    // $($me).siblings('.single-slide:first-child').addClass('removed-slide');

    if ($direction == 'right') {
      var $next = $($me).siblings('.active-slide').removeClass('active-slide').addClass('removed-slide').next('.single-slide');
      var $begining = '.single-slide:first';
    }
    else if ($direction == 'left') {
      var $next = $($me).siblings('.active-slide').removeClass('active-slide').addClass('removed-slide').prev('.single-slide');
      var $begining = '.single-slide:last';
    }

    if($next.length) {
      $next.addClass('active-slide').fadeIn('fast').removeClass('removed-slide');
    } else {
      $($me).siblings($begining).addClass('active-slide').fadeIn('fast').removeClass('removed-slide');
    };
  };


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
