 $(document).ready(function(){
    // navbar active class
   $('ul li a').click(function(){
     $('a').removeClass("active1");
     $(this).addClass('active1');
   });


//
// // carousel timer
//   $('.carousel').carousel({
//   interval: 2000
//   })
//
//
//
// /*===============================isotop ==============================*/
//   var $grid = $('.product').isotope({
// // options
//   });
//
// // filter items on button click
//   $('.filter-button').on( 'click', 'ul li', function() {
//   var filterValue = $(this).attr('data-filter');
//   $grid.isotope({ filter: filterValue });
//   });
//
//   // active class
//
//   $('#protfolio ul li').click(function(){
//     $('li').removeClass("active");
//     $(this).addClass('active');
 // });


 // silk slider
 $('.caro-fdbck').slick({
    autoplay:true,
    autoplaySpeed: 3000,
    mobileFirst: false,
    prevArrow: '<img src="../img/prev.png" class="previmg" alt=""/>',
    nextArrow: '<img src="../img/next.png" class="nextimg" alt=""/>',
  });

  $('.team-caro').slick({
    infinite: true,
    autoplay:true,
    autoplaySpeed: 3000,
    dots: true,
    prevArrow: false,
    nextArrow: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
   });

});
