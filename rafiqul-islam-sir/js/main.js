(function ($) {
  "use strict";




//  //typed js(for offcanvas menu)
//  var typed = new Typed('.type', {
//   strings: [
//       'speaker',
//       'Developer',
//       'Freelancer',
//   ],
//   loop: true, // Default value
//   typeSpeed: 80,
//   backSpeed: 60,
//   cursorChar: '.', // Default value
// });

// //typed js (for home section - just class change korci)
// var typed = new Typed('.home-type', {
//   strings: [
//       'Designer',
//       'Developer',
//       'Freelancer',
//   ],
//   loop: true, // Default value
//   typeSpeed: 80,
//   backSpeed: 60,
//   cursorChar: '.', // Default value
// });








  // portfolio section js start
  // Isotope jQuery plugin
  var $grid = $('.portfolio-grid').isotope({
      itemSelector: '.portfolio-item',
      percentPosition: true,
      masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: 1
      }
  });
  // filter items on button click 
  $('.portfolio-menu').on('click', 'li', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({
          filter: filterValue
      });
  });

  // masonary nav menu active JS
  $('.portfolio-menu li').on('click', function () {
      $('li').removeClass('active');
      $(this).addClass('active')
  });

  // Fancy-box
  $('[data-fancybox="gallery"]').fancybox({
      animationEffect: "zoom-in-out",
      transitionEffect: "slide",

  });
  // portfolio section js end

  

 //typed js(for offcanvas menu)
 var typed = new Typed('.type', {
  strings: [
      'speaker',
      'Developer',
      'Freelancer',
  ],
  loop: true, // Default value
  typeSpeed: 80,
  backSpeed: 60,
  cursorChar: '.', // Default value
});

//typed js (for home section - just class change korci)
var typed = new Typed('.home-type', {
  strings: [
      'Designer',
      'Developer',
      'Freelancer',
  ],
  loop: true, // Default value
  typeSpeed: 80,
  backSpeed: 60,
  cursorChar: '.', // Default value
});







})(jQuery);