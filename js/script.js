// sticky header start
window.addEventListener("scroll", function(){
	var header = document.querySelector(".header_area");
	header.classList.toggle("sticky", window.scrollY > 0);
})
// sticky header end

//    wow js 
new WOW().init();
//    wow js 
// aos 
AOS.init({
  duration: 1200
});
// aos 

// jQ ui start
// slick slider start
$(document).ready(function(){

    $('.lazy').slick({
        lazyLode: 'ondemand',
        slidesToShow: 3,
        slideToScroll: 0,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 2000, 
        prevArrow: false,
        nextArrow: false,
     responsive: [
       {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
          // dots: false,
          // prevArrow: false,
          // nextArrow: false,
         }
       },
       {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          // dots: true,
          // prevArrow: false,
          // nextArrow: false,
         }
       },{
    
        breakpoint: 575,
        settings:{
          slidesToShow: 1,
          // dots: true,
          // prevArrow: false,
          // nextArrow: false,
        } 
      }
     ]
   });   
   });
// slick slider end 
// food gallary start
$(document).ready(function(){
  $('.lite').venobox({

  });        

}); 
// food gallary end

// jQ ui end
