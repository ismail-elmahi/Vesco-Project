 /* js service wow*/
 new WOW().init();
 /* js work popup*/
 $(function () {
     $("#work").magnificPopup({
         delegate: 'a',
         type: 'image',
         gallery: {
             enabled: true,
         }
     });
 });
 /* js team silderr*/
 $(function () {
     $("#team-members").owlCarousel({
         items: 3,
         autoplay: true,
         smartSpeed: 700,
         loop: true,
         autoplayHoverPause: true,
           responsive :{
            0 : {
                 items :1
             },
             488: {
                 items :2
             },
             768 : {
                 items :3
             },
                   
         }

     });
 });
 /* js customers-testimonials silderr*/
 $(function () {
     $("#customers-testimonials").owlCarousel({
         items: 1,
         autoplay: true,
         smartSpeed: 700,
         loop: true,
         autoplayHoverPause: true

     });
 });
 /* stats counter p*/
 $(function () {
     $('.counter').counterUp({
         delay: 10,
         time: 2000,
         offset: 70,

     });
 });

 /* js clients silderr*/
 $(function () {
     $("#clients-list").owlCarousel({
         items: 6,
         autoplay: true,
         smartSpeed: 700,
         loop: true,
         autoplayHoverPause: true,
         responsive :{
            0 : {
                 items :1
             },
             480 : {
                 items :3
             },
             768 : {
                 items :5
             },
             992 : {
                 items :6
             }        
         }

     });
 });

/* js navigation*/
 $(function () {
     $(window).scroll(function(){
         
         if($(this).scrollTop() < 50 ) {
             
            // $("nav").removeClass("vesco-top-nav");
             $("#back-to-top").fadeOut();
         }else{
             
          //  $("nav").addClass("vesco-top-nav"); 
             $("#back-to-top").fadeIn();
         }
     });
 });

/* js navigation*/
 $(function () {
     $("a.smoth-scroll").click(function(event){
         event.preventDefault();
         var section = $(this).attr("href");
         $("html, body").animate({
             scrollTop : $(section).offset().top -70
         }, 1250);
     });
 });
/* close mobile menu on click*/
$(function () {
     $(".navbar-collapse ul li a ").on("click touch", function(){
         
         $(".navbar-toggle").click();
     });
 });








