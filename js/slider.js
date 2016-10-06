$(document).ready(function() {

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
      $next.addClass('active-slide').animate();
    } else {
      $($me).siblings($begining).addClass('active-slide');
    };
  };


  $('.arrow-left').on('click', function() {
    changeSlide('left');
  });

  $('.arrow-right').on('click', function() {
    changeSlide('right');
  });


  /* slider END */

});
