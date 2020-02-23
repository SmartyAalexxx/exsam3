(function($) {
    'use strict';
    
    let obj = {
      arrows: false,
      infinite: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,      
      slidesToShow: 3,
    }
    $('.carousel').carousel({
        
    })

    $(window).resize(function() {
      if ($(window).width() <= '1200'){
         console.log("small <= 1200")
          return this;}
        else   {
         console.log("big >= 1200")
          
          }

});
    $('.slider').slick(
      obj

      );


    
    console.log('Complete!');
})(jQuery);