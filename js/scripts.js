var images = [
      '../images/wood.jpg',
      '../images/dock.jpg',
      '../images/forest.jpg',
      '../images/sand.jpg'
      // '../images/water.jpg'
    ];

$('header').css({'background-image': 'url(images/' + images[Math.floor(Math.random() *  images.length)] + ')'});


// var winWidth;

// $(function(){
//   $('header').data('size','big');
// });

// $( window ).resize(function() {
//   winWidth = $(window).width();
// });

// $(window).scroll(function(){
//   if (winWidth >= 600) {
//     if($(document).scrollTop() > 0) {
//       if($('header').data('size') === 'big') {
//         $('header').data('size','small');
//         $('header').stop().animate({
//             height:'8em'
//         },300);
//         $('h1').stop().animate({
//             top:'0%'
//         },300);
//       } else {
//         if($('header').data('size') === 'small') {
//           $('header').data('size','big');
//           $('header').stop().animate({
//               height:'17em'
//           },600);
//           $('h1').stop().animate({
//               top:'22%'
//           },600);
//         }
//       }
//     }
//   } else {
//     if($('header').data('size') === 'small') {
//       $('header').data('size','big');
//       $('header').stop().animate({
//           height:'17em'
//       },600);
//       $('h1').stop().animate({
//           top:'22%'
//       },600);
//     }
//   }
// });
