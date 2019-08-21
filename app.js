  $(document).ready(function(){
    $('.hero__carousel__main').slick({
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        responsive: [
        {
          breakpoint: 640,
          settings: {
            dots: false

          }
        }
        ]
    });
  });
