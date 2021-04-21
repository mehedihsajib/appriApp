(function ($) {
  "use strict";

  // DATA BACKGROUND
  $("[data-background]").each(function() {
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
  });

  // COUNTER UP
  $('.counter').counterUp({
    delay: 10,
    time: 3000
  });

  // MODAL VIDEO
  $(".js-modal-btn").modalVideo();

  // SLICK SLIDER 
  $('.testimonial-text').slick({
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.testimonial-img'
  });

  $('testimonial-img').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: 'testimonial-text',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });

  // ACCORDION
  $(".accordion__header").click(function(){
    $(".accordion__header").removeClass("active");
    $(this).addClass("active");
  });

  // OWL CAROUSEL
  $('.faqs__footer-brand').owlCarousel({
    loop:true,
    autoplay: true,
    margin:30,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

// OWL TESTIMONIAL SLIDER
$("#testimonial__slider").owlCarousel({
  items: 1,
  autoplay: true,
  smartSpeed: 700,
  loop: true,
  autoplayHoverPause: true,
  nav: false,
  dots: true
});

  // MEAN MENU
  jQuery('#mobile-menu').meanmenu({
    meanScreenWidth: "767",
    meanMenuContainer: '.mobile-menu',
    meanRevealPosition: "right"
  });


})(jQuery);