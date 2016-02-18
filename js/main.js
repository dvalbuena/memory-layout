$(function () {
  'use strict';

// yay for multiple classes - hopefully this will help in selecting the class open
// and keeping boxes open if they match

// $('.fa.fa-fort-awesome.fa-2x.open').on('click', function(){
//   $(this).animate({
//     rotateY(180deg);
//   });

// this rotates the icon 180 deg
// $('.fa.fa-fort-awesome.fa-2x.open').on('click', function(){
//   $(this).css({
//     'transform': 'rotateY(180deg)',
//   });
// });

$('.card').on('click', function(){
  $(this).css({
    'transform': 'rotateY(180deg)',
  });
});



});
