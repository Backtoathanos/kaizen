(function($) {
	"use strict"

  // window.setTimeout(function(){
  //       $('#landing').fadeOut('slow');
  //   },9000); 


/*------------------------------------
     Sticky Menu
-------------------------------------- */  
  //   var windows = $(window);
  //   var stick = $(".header-sticky");
  // windows.on('scroll',function() {    
  //   var scroll = windows.scrollTop();
  //   if (scroll < 175) {
  //     stick.removeClass("sticky");
  //   }else{
  //     stick.addClass("sticky");
  //   }
  // });

  

  // $("#addresscheck").on("click",function(){
  //   $(".shipping-address").slideToggle(1000);
  // });

  // $("#payment-checkbox-bank").on("click",function(){
  //   $(".payment_methods_bank").slideToggle(700);
  // });

  // $("#payment-checkbox-cheque").on("click",function(){
  //   $(".payment_methods_cheque").slideToggle(700);
  // });

  // $("#payment-checkbox-cod").on("click",function(){
  //   $(".payment_methods_cod").slideToggle(700);
  // });

  // $("#post-resume").on("click",function(){
  //   $("#resume-field").slideToggle(700);
  // });
  
  // $("#more-jobs").click(function(){
  //     $(this).toggleClass('on');
  //     $('.hidden-job').toggle(0);
  //    });
  
  /*------------------------------------
     Franchise sidebar contact
-------------------------------------- */ 

  // $("#feedback-contactTab").click(function() {
  //   $("#feedback-contactForm").toggle("slide");
  // });
  $(document).ready(function(){
                $('.i-check, .i-radio').iCheck({
                checkboxClass: 'i-check',
                radioClass: 'i-radio'
            }); 


            $("#price-slider").ionRangeSlider({
                min: 0,
                max: 15000,
                type: 'double',
                prefix: "",
                prettify: false,
                hasGrid: false
            });
        });

// $(document).ready(function() {
  
//   var $slider = $(".slider"),
//       $slideBGs = $(".slide__bg"),
//       diff = 0,
//       curSlide = 0,
//       numOfSlides = $(".slide").length-1,
//       animating = false,
//       animTime = 1000,
//       autoSlideTimeout,
//       autoSlideDelay = 5000,
//       $pagination = $(".slider-pagi");
  
//   function createBullets() {
//     for (var i = 0; i < numOfSlides+1; i++) {
//       var $li = $("<li class='slider-pagi__elem'></li>");
//       $li.addClass("slider-pagi__elem-"+i).data("page", i);
//       if (!i) $li.addClass("active");
//       $pagination.append($li);
//     }
//   };
  
//   createBullets();
  
//   function manageControls() {
//     $(".slider-control").removeClass("inactive");
//     if (!curSlide) $(".slider-control.left").addClass("inactive");
//     if (curSlide === numOfSlides) $(".slider-control.right").addClass("inactive");
//   };
  
//   function autoSlide() {
//     autoSlideTimeout = setTimeout(function() {
//       curSlide++;
//       if (curSlide > numOfSlides) curSlide = 0;
//       changeSlides();
//     }, autoSlideDelay);
//   };
  
//   autoSlide();
  
//   function changeSlides(instant) {
//     if (!instant) {
//       animating = true;
//       manageControls();
//       $slider.addClass("animating");
//       $slider.css("top");
//       $(".slide").removeClass("active");
//       $(".slide-"+curSlide).addClass("active");
//       setTimeout(function() {
//         $slider.removeClass("animating");
//         animating = false;
//       }, animTime);
//     }
//     window.clearTimeout(autoSlideTimeout);
//     $(".slider-pagi__elem").removeClass("active");
//     $(".slider-pagi__elem-"+curSlide).addClass("active");
//     $slider.css("transform", "translate3d("+ -curSlide*100 +"%,0,0)");
//     $slideBGs.css("transform", "translate3d("+ curSlide*50 +"%,0,0)");
//     diff = 0;
//     autoSlide();
//   }

//   function navigateLeft() {
//     if (animating) return;
//     if (curSlide > 0) curSlide--;
//     changeSlides();
//   }

//   function navigateRight() {
//     if (animating) return;
//     if (curSlide < numOfSlides) curSlide++;
//     changeSlides();
//   }

//   $(document).on("mousedown touchstart", ".slider", function(e) {
//     if (animating) return;
//     window.clearTimeout(autoSlideTimeout);
//     var startX = e.pageX || e.originalEvent.touches[0].pageX,
//         winW = $(window).width();
//     diff = 0;
    
//     $(document).on("mousemove touchmove", function(e) {
//       var x = e.pageX || e.originalEvent.touches[0].pageX;
//       diff = (startX - x) / winW * 70;
//       if ((!curSlide && diff < 0) || (curSlide === numOfSlides && diff > 0)) diff /= 2;
//       $slider.css("transform", "translate3d("+ (-curSlide*100 - diff) +"%,0,0)");
//       $slideBGs.css("transform", "translate3d("+ (curSlide*50 + diff/2) +"%,0,0)");
//     });
//   });
  
//   $(document).on("mouseup touchend", function(e) {
//     $(document).off("mousemove touchmove");
//     if (animating) return;
//     if (!diff) {
//       changeSlides(true);
//       return;
//     }
//     if (diff > -8 && diff < 8) {
//       changeSlides();
//       return;
//     }
//     if (diff <= -8) {
//       navigateLeft();
//     }
//     if (diff >= 8) {
//       navigateRight();
//     }
//   });
  
//   $(document).on("click", ".slider-control", function() {
//     if ($(this).hasClass("left")) {
//       navigateLeft();
//     } else {
//       navigateRight();
//     }
//   });
  
//   $(document).on("click", ".slider-pagi__elem", function() {
//     curSlide = $(this).data("page");
//     changeSlides();
//   });
  
// });

$('#mobile-menu-active').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu-area .mobile-menu",
    });

$("#homeSlider").nivoSlider({ 
        effect: 'fold',                 // Specify sets like: 'fold,fade,sliceDown' 
        slices: 15,                       // For slice animations 
        boxCols: 8,                       // For box animations 
        boxRows: 4,                       // For box animations 
        animSpeed: 800,                   // Slide transition speed 
        pauseTime: 4000,                  // How long each slide will show 
        startSlide: 0,                    // Set starting Slide (0 index) 
        directionNav: true,               // Next & Prev navigation 
        controlNav: true,                 // 1,2,3... navigation 
        controlNavThumbs: false,          // Use thumbnails for Control Nav 
        pauseOnHover: true,               // Stop animation while hovering 
        manualAdvance: false,             // Force manual transitions 
        prevText: '<i class="fa fa-angle-left"></i>',   // Prev directionNav text 
        nextText: '<i class="fa fa-angle-right"></i>',  // Next directionNav text 
        randomStart: true,               // Start on a random slide 
        beforeChange: function(){},       // Triggers before a slide transition 
        afterChange: function(){},        // Triggers after a slide transition 
        slideshowEnd: function(){},       // Triggers after all slides have been shown 
        lastSlide: function(){},          // Triggers when last slide is shown 
        afterLoad: function(){}             // Triggers when slider has loaded 
    });

 $(document).ready(function() {
    new WOW().init();
  });  



    // $('.featured-carousel').owlCarousel({
    //     loop:true,
    //     slideSpeed : 1000,
    //     autoplaySpeed: 5000,
    //     stopOnHover: false,
    //     autoplay: true,
    //     items:5,
    //     dotClass: true,
    //     nav:true,
    //     navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    //     responsive:{
    //         0:{
    //           items:1
    //         },
    //         420:{
    //           items:2
    //         },
    //         600:{
    //           items:3
    //         },
    //         800:{
    //           items:4
    //         },
    //         1024:{
    //           items:5
    //         },
    //         1200:{
    //           items:5
    //         },
    //         1400:{
    //           items:5
    //         },
    //         1920:{
    //           items:5
    //         }
    //     }
    // });

    //   $('.product-carousel').owlCarousel({
    //     loop:true,
    //     autoplaySpeed: 5000,
    //     stopOnHover: false,
        
    //     items:4,
    //     dots:true,
    //     dotClass: true,
    //     nav:true,
    //     navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         420:{
    //             items:2
    //         },
    //         600:{
    //             items:3
    //         },
    //         800:{
    //             items:3
    //         },
    //         1024:{
    //             items:4
    //         },
    //         1200:{
    //             items:4
    //         }
    //     }
    // });

    //   $('.arrival').owlCarousel({
    //     loop:true,
    //     slideSpeed : 1000,
    //     autoplaySpeed: 6000,
    //     stopOnHover: false,
    //     autoplay: true,
    //     items:3,
    //     dotClass: true,
    //     nav:true,
    //     navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    //     responsive:{
    //         0:{
    //           items:1
    //         },
    //         420:{
    //           items:1
    //         },
    //         600:{
    //           items:2
    //         },
    //         800:{
    //           items:3
    //         },
    //         1024:{
    //           items:3
    //         },
    //         1200:{
    //           items:3
    //         },
    //         1400:{
    //           items:3
    //         },
    //         1920:{
    //           items:3
    //         }
    //     }
    // });
      
    //   $('.today').owlCarousel({
    //     loop:true,
    //     slideSpeed : 1000,
    //     autoplaySpeed: 5000,
    //     stopOnHover: false,
    //     autoplay: true,
    //     items:3,
    //     dotClass: true,
    //     nav:true,
    //     navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    //     responsive:{
    //         0:{
    //           items:1
    //         },
    //         420:{
    //           items:1
    //         },
    //         600:{
    //           items:2
    //         },
    //         800:{
    //           items:3
    //         },
    //         1024:{
    //           items:3
    //         },
    //         1200:{
    //           items:3
    //         },
    //         1400:{
    //           items:3
    //         },
    //         1920:{
    //           items:3
    //         }
    //     }
    // });

      /*----------------------------------------
    Modal Slick Slider
------------------------------------------*/

  //   $('.single-slide-menu').slick({
  //       dots: true,
  //       arrows: false,
  //       slidesToShow: 3,
  //       responsive: [
  //           {
  //               breakpoint: 1200,
  //               settings: {
  //                   slidesToShow: 3,
  //                   slidesToScroll: 3
  //               }
  //           },
  //           {
  //               breakpoint: 991,
  //               settings: {
  //                   slidesToShow: 4,
  //                   slidesToScroll: 2
  //               }
  //           },
  //           {
  //               breakpoint: 480,
  //               settings: {
  //                   slidesToShow: 3,
  //                   slidesToScroll: 3
  //               }
  //           }
  //       ]
  // });

    /*----------------------------------------
   About  Testimonial Slick Slider
------------------------------------------*/
    // Testimonial Content
  // $('.testimonial-content-slider-active').slick({
  //   adaptiveHeight: true,
  //   autoplay: true,
  //   autoplaySpeed: 8000,
  //   arrows: false,
  //   infinite: true,
  //   pauseOnHover: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   asNavFor: '.testimonial-author-slider-active'
  // });



  // Testimonial Author
  // $('.testimonial-author-slider-active').slick({
  //   centerMode: true,
  //   autoplay: true,
  //   autoplaySpeed: 8000,
  //   arrows: false,
  //   focusOnSelect: true,
  //   infinite: true,
  //   pauseOnHover: true,
  //   slidesToShow: 3,
  //   slideToScroll: 1,
  //   asNavFor: '.testimonial-content-slider-active',
  //   responsive: [{
  //     breakpoint: 577,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1
  //     }
  //   }]
  // });

    /*------------------------------------------
    15. Product Modal
-------------------------------------------- */ 
    $('.modal').on('shown.bs.modal', function (e) {
        $('.single-slide-menu').resize();
    });
    // $('.single-slide-menu a').on('click',function(e){
    //     e.preventDefault();
    //     var $href = $(this).attr('href');
    //     $('.single-slide-menu a').removeClass('active');
    //     $(this).addClass('active');
    //     $('.product-details-large .tab-pane').removeClass('active show');
    //     $('.product-details-large '+ $href ).addClass('active show');
    // });

    // $(document).ready(function(){
    //     $('.single-tab-menu a').on('click',function(e){
    //   e.preventDefault();
    //   var imagepath=$(this).attr('href');
    //   $('.single-product-img img').fadeOut(function(){
    //       $('.single-product-img img').attr('src', imagepath);
    //       $('.single-product-img img').fadeIn();
    //   });
    // });
    // });

    $(document).ready(function() {
      // $('.color-choose input').on('click', function() {
      //     var headphonesColor = $(this).attr('href');
      //     $('.active').removeClass('active');
      //     $('.left-column-left img[data-image = ' + headphonesColor + ']').addClass('active');
      //     $(this).addClass('active');
      // });

      $('.single-left-column-right a').on('click',function(e){
        e.preventDefault();
        var imagesource=$(this).attr('href');
        $('.left-column-left img ').fadeOut(function(){
              $('.left-column-left img ').attr('src', imagesource);
              $('.left-column-left img ').fadeIn();
          });
      });

  });
    /*------------------------------------------
    15. Single Product review
-------------------------------------------- */ 
$(document).ready(function() {
    $("body").on("click", "#comments .btn-write-review", function(e) {
        e.preventDefault();
        $("#comments").hide();
        $("#review_form").show();
    });
    $("body").on("click", "#review_form .btn-back-reviews", function(e) {
        e.preventDefault();
        $("#review_form").hide();
        $("#comments").show();
    });
 });   
	
})(jQuery);

