(function($) {
    'use strict';
    
    $('.carousel').carousel({
        
    })

    $('.slider').slick({
      arrows: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,

    });


    
    console.log('Complete!');
})(jQuery);