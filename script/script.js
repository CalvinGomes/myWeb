
//Enable smooth scrolling of sections using localScroll Jquery Extension
/*We can call the localScroll  Function by using the dot operator and the navigation elements can be targeted easily  
  using Jquery Selectors which is basically equivalent to CSS selectors*/
$(".nav").localScroll(); //Targeting the navbar elements
$("header").localScroll(); //Targeting the button in the landing page

// Navbar scroll effect
// $(window).scroll(function() {

//     if($(document).scrollTop() > 50) {

//         $("nav").addClass("navbar-fade"); 
//         $("nav").removeClass("navbar-custom");

//     }
//       else {

//         $("nav").removeClass("navbar-fade");
//         $("nav").addClass("navbar-custom");

//     }

// });