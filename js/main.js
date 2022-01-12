$(function(){
    $('.partners__slider').slick({
        arrows:false,
        slidesToShow: 6,
        slidesToScroll: 1,

        responsive: [
          {
            breakpoint: 1040,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              dots:true,
              centerMode: true,
  variableWidth: true
            }
          }
        ]
      });

      $('.slider__level-inner').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:'<button type="button" class="slick-next slick-next__material"> <img src="images/next.svg" alt="" class="sider__material-next"></button>',
        prevArrow:'<button type="button" class="slick-prev slick-prev__material"> <img src="images/prev.svg" alt="" class="sider__material-prev"></button>'
      });



      $('.teachers__inner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false,
        dots:true,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true,
              centerMode: true,
              focusOnSelect: true
            },
            breakpoint: 580,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              centerMode: true,
              focusOnSelect: true
            }
          }
        ]
      });


      $('.burger__menu').on('click', function(){
        $('.menu').toggleClass('munu__active'),
        $('.header__top').toggleClass('header__top__active')
      })
      
});