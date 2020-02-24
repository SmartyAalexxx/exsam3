(function($) {
    'use strict';
    
    let win = window;
    $('.carousel').carousel({
        
    })

    $(win).resize(function() {
      if ($(win).width() <= '1200'){

         console.log("small <= 1200")
          return this;}

        else   {
         console.log("big >= 1200")
          
          }

});
    $('.slider').slick(
      {
        arrows: true,
        infinite: true,
        slidesToScroll: 1,
        autoplaySpeed: 5000,      
        slidesToShow: 3,
        responsive: [
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: 2,
            infinite: true,
            
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
           
          }
        },        
        
      ]}
    );
    console.log('Complete!');
})(jQuery);