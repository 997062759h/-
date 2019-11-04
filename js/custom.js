/***************************************************************************************************************
||||||||||||||||||||||||||||         CUSTOM SCRIPT FOR GREEN MAGIC            ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
||||||||||||||||||||||||||||              TABLE OF CONTENT                  ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
****************************************************************************************************************
1 revolutionSliderActiver
2 menuzord
3 Accordion
4 Client Testimonial
5 Brand Carosule
6 fancyboxInit
7 testimonialCarosule
8 Gallery masonary
9 GalleryFilter
10 GalleryFilter
11 progressBarConfig
12 CounterNumberChanger
13 Countdown Timer

****************************************************************************************************************
||||||||||||||||||||||||||||            End TABLE OF CONTENT                ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************/


"use strict";
// 1 revolutionSliderActiver
function revolutionSliderActiver () {
	if ($('.rev_slider_wrapper #slider1').length) {
		$("#slider1").revolution({
			sliderType:"standard",
			sliderLayout:"auto",
			delay:5000,
            hideTimerBar:"off",
            onHoverStop:"off",
			navigation: {
				arrows:{enable:true} 
			}, 
			responsiveLevels: [2220, 1170, 675, 400],
			gridwidth: [1170, 940, 780, 480],
            gridheight: [700, 700, 700, 500],
		});
	};
}

// 2. menuzord

jQuery(document).ready(function(){
				jQuery("#menuzord").menuzord({
					align: "right"
				});
			});
			



//3. Accordion
function accordion () {
    if($('.accordion-box').length){
        $('.accordion-box .acc-btn').on('click', function() {
        if($(this).hasClass('active')!==true){
                $('.accordion-box .acc-btn').removeClass('active');
            }

        if ($(this).next('.acc-content').is(':visible')){
                $(this).removeClass('active');
                $(this).next('.acc-content').slideUp(500);
            }
        else{
                $(this).addClass('active');
                $('.accordion-box .acc-content').slideUp(500);
                $(this).next('.acc-content').slideDown(500);	
            }
        });
    }
}

//4 Client Testimonial
function customerTestimonial () {
    if ($('.manager_text').length) {
        $('.manager_text').owlCarousel({
            loop:true,
            margin:30,
          	nav: false,

		    dots: true,
            autoplayHoverPause:false,
            autoplay: 5000,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1
                },
                700:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                },
                1100:{
                    items:1
                },
               

            }
        });    		
    }
}


// 5. Brand Carosule
function brandCarosule () {
	if ($('.brand-carousel').length) {
		$('.brand-carousel').owlCarousel({
		    loop: true,
		    margin:90,
		    nav: false,
		    dots: false,
		    autoplay: true,
		    autoplayTimeout: 3000,
		    autoplayHoverPause: true,
		    responsive: {
		        0:{
		            items:2
		        },
		        480:{
		            items:3
		        },
		        600:{
		            items:4
		        },
		        1000:{
		            items:5
		        },
		        1200:{
		            items:5
		        }
		    }
		});
	}
}



// 6. fancyboxInit
function fancyboxInit () {
	var galleryFcb = $('.fancybox');
	if(galleryFcb.length){
		galleryFcb.fancybox({
			openEffect  : 'elastic',
			closeEffect : 'elastic',
			helpers : {
				media : {}
			}
		});
	}
}


// 7. testimonialCarosule
function testimonialCarosule () {
	if ($('.testimonials-wrap').length) {
		$('.testimonials-wrap').owlCarousel({
		    loop: true,
		    margin: 20,
		    nav: true,
			navText: [
                    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                    '<i class="fa fa-angle-right" aria-hidden="true"></i>'
                ],
		    dots: false,
		    items: 2,
		    autoplay:true,
			autoplayTimeout:3000,
			autoplayHoverPause: true,
            responsive: {
                0:{
                    items:1
                },
                480:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:2
                }
            }
		});
	}
}


// 8. Brand Carosule
function brandCarosulepag3 () {
	if ($('.brand-testimoial_pag3').length) {
		$('.brand-testimoial_pag3').owlCarousel({
		    loop: true,
		    margin:31,
		    nav: false,
		    dots: false,
		    autoplay: true,
		    autoplayTimeout: 3000,
		    autoplayHoverPause: true,
		    responsive: {
		        0:{
		            items:2
		        },
		        480:{
		            items:3
		        },
		        600:{
		            items:4
		        },
		        1000:{
		            items:5
		        },
		        1200:{
		            items:5
		        }
		    }
		});
	}
}
// 9. Gallery masonary style
function galleryMasonaryLayout () {
	if ($('.masonary-gallery').length) {
		$('.masonary-gallery').isotope({
			layoutMode:'masonry'
		});
	}
	if($('.gallery_filter.masonary').length){
		$('.gallery_filter.masonary span').on('click', function(){
			var Self = $(this);
			var selector = Self.parent().data('filter');			
			$('.gallery_filter.masonary span').parent().removeClass('active');
			Self.parent().addClass('active');
			$('.masonary-gallery').isotope({ filter: selector });
			return false;
		});
	}
}

 // 10. GalleryFilter
function GalleryFilter () {

	if ($('.portfolio_image_gallery').length) {
		$('.portfolio_image_gallery').each(function () {
			var Self = $(this);
			var filterSelector = Self.data('filter-class');
			var showItemOnLoad = Self.data('show-on-load');
			
			if (showItemOnLoad) {
				Self.mixItUp({
					load: {
						filter: '.'+showItemOnLoad
					},
					selectors: {
						filter: '.'+filterSelector
					}
				})	
			};
			Self.mixItUp({
				selectors: {
					filter: '.'+filterSelector
				}
			});
		});
	};
}
// 11. progressBarConfig
function progressBarConfig () {
  var progressBar = $('.progress');
  if(progressBar.length) {
    progressBar.each(function () {
      var Self = $(this);
      Self.appear(function () {
        var progressValue = Self.data('value');

        Self.find('.progress-bar').animate({
          width:progressValue+'%'           
        }, 100);

        Self.find('span.value').countTo({
          from: 0,
            to: progressValue,
            speed: 100
        });
      });
    })
  }

}
// 12. CounterNumberChanger
function CounterNumberChanger () {
	var sFcounter = $('.sF-counter');
	if(sFcounter.length) {
		sFcounter.appear(function () {
			sFcounter.countTo();
			
		});
	};

}

//13. Countdown Timer
	if($('#countdown-timer').length){                     
		$('#countdown-timer').countdown('2017/2/13', function(event) {
			var $this = $(this).html(event.strftime('' + '<div class="counter-column"><span class="count">%D</span><br>Days</div> ' + '<div class="counter-column"><span class="count">%H</span><span class="colon"></span><br>Hour</div>  ' + '<div class="counter-column"><span class="count">%M</span><span class="colon"></span><br>Mins</div>  ' + '<div class="counter-column"><span class="count">%S</span><span class="colon"></span><br>Sec</div>'));
		});
	}
	
//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				firstname: {
					required: true
				},
				lastname: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				message: {
					required: true
				},
				website: {
					required: true,
					website: true
				}
			}
		});
	}

	
//Preloader
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(500).fadeOut(500);
		}
	}



	

$(function () {
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fa fa-angle-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });
});


//Date Picker
	if($('.datepicker').length) {
		$('.datepicker').datetimepicker({
			dayOfWeekStart : 1,
			lang:'en',
			timepicker:false,
 			format:'d.m.Y',
			minDate:'-1970/01/02',//yesterday is minimum date(for today use 0 or -1970/01/01)
		});
	}
	
	//Time Picker
	if($('.timepicker').length) {
		$('.timepicker').datetimepicker({
			datepicker:false,
  			format:'g:i A'
		});
	}
//  Main menu
function mainmenu() {
	 //Submenu Dropdown Toggle
	 if ($('.main-menu li.dropdown ul').length) {
	  $('.main-menu li.dropdown').append('<div class="dropdown-btn"></div>');

	  //Dropdown Button
	  $('.main-menu li.dropdown .dropdown-btn').on('click', function() {
	   $(this).prev('ul').slideToggle(500);
	  });
	 }

}
// Dom Ready Function
jQuery(document).on('ready', function () {
	(function ($) {
	// add your functions
    revolutionSliderActiver ();
    accordion();
	handlePreloader();
	brandCarosulepag3 ()
    customerTestimonial ();
	progressBarConfig();
	testimonialCarosule ();
	brandCarosule();
    fancyboxInit();
	mainmenu();
	galleryMasonaryLayout ();
    GalleryFilter ();
	})(jQuery);
});
// instance of fuction while Window Load event
jQuery(window).on('load', function () {
	(function ($) {	
		CounterNumberChanger();
		progressBarConfig()		
	})(jQuery);
});






