(function($) {
    "use strict"

$(".text_slide").owlCarousel({
         center: false,
         items: 1,
         loop: true,
         autoplay:true,
         margin: 20,
        nav: false,
         smartSpeed:200,
        });
 $(".owl-loaded ").addClass("owl-carousel");

})(jQuery);