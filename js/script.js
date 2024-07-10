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
        slideToScroll: 1,
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
         }
       },
       {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
         }
       },{
    
        breakpoint: 575,
        settings:{
          slidesToShow: 1,
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
// food gallery end

// counter me section start
$(document).ready(function(){
  $("#count_item1").countMe(10, 10);
  $("#count_item2").countMe(10, 10);
  $("#count_item3").countMe(10, 10);       
  $("#count_item4").countMe(10, 10);       
  }); 
// counter me section end
// jQ ui end
