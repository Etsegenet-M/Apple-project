import $ from 'jquery'

$(document).ready(function () {
  $('h3').click(function () {
    $(this).nextUntil('h3').toggle();
    $(this).toggleClass('active');
  });
});
$(window).resize(function () {
  window.location.reload();
});

//Sent from Bisemagn

// $(window).on("resize", function () {
//   if ($(window).width() < 768) {
//     $(".footer-links-wrapper").addClass("evan");
//   } else {
//     $(".footer-links-wrapper").removeClass("evan");
//   }

//   $(document).on("click", ".evan h3", function () {
//     $(this).next("ul").slideToggle();
//     $(this).toggleClass("expanded");
//   });
// });

// from Tewedaj
// $(document).ready(function () {
//   if ($(window).width() <= 768) {
//     $(".footer-links-wrapper").addClass("someClass");
//   } else {
//     $(".footer-links-wrapper").removeClass("someClass");
//   }
//   $(window).on("resize", function (event) {
//     if ($(window).width() <= 768) {
//       $(".footer-links-wrapper").addClass("someClass");
//     } else {
//       $(".footer-links-wrapper").removeClass("someClass");
//       $(".footer-links-wrapper ul").show();
//     }
//   });
//   //Footer collapse functionality
//   $(document).on("click", ".someClass h3 ", function () {
//     $(this).next("ul").slideToggle();
//     $(this).toggleClass("expanded");
//   });
// });
  //search bar
//   $(".search-link").click(function (event) {
//     event.preventDefault();
//     $(".navbar-collapse.collapse").removeClass("show");
//     $(".searchbox").slideToggle();
//   });
// });