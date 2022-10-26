$(document).ready(function(){       
  $('.swiper-wrapper').slick({
      dots: true,
      infinite: true,
      speed: 700,
      autoplay:true,
      autoplaySpeed: 10000,
      arrows:false,
      slidesToShow: 1,
      slidesToScroll: 1,
   });
 });


   $('.swiper-wrapper-section-4').slick({
    centerMode: true,
    slidesToShow: 1,
    dots: true,
    arrows: false,
    swipe: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000,
  });