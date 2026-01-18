(function($) {

	'use strict';
	
	// Header Sticky JS
	$(window).on('scroll', function() {
		if ($(this).scrollTop() >150){  
			$('.navbar-area').addClass("is-sticky");
		}
		else{
			$('.navbar-area').removeClass("is-sticky");
		};
	});

	// Mobile Menu JS
	$('.for-mobile-menu').meanmenu({
		meanScreenWidth: "991",
	});

	// Go Top JS
	$('.back-to-top').on('click', function() {
		$("html, body").animate({ scrollTop: "0" }, 50);
	});
	$(window).on('scroll', function() {
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) $('.back-to-top').addClass('active');
		if (scrolled < 300) $('.back-to-top').removeClass('active');
	});

	// Preloader JS
	$(window).on('load', function() {
		$('.preloader').addClass('preloader-deactivate');
	}) 

	// scrollCue JS
	scrollCue.init();

	// Countdown JS
	var launchDate = new Date("2029/12/31 00:00:00").getTime();

    var countdown = setInterval(function () {
        var now = new Date().getTime();
        var distance = launchDate - now;

        if (distance < 0) {
            clearInterval(countdown);
            $("#days, #hours, #minutes, #seconds").text("00");
            return;
        }

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $("#days").text(days < 10 ? "0" + days : days);
        $("#hours").text(hours < 10 ? "0" + hours : hours);
        $("#minutes").text(minutes < 10 ? "0" + minutes : minutes);
        $("#seconds").text(seconds < 10 ? "0" + seconds : seconds);

    }, 1000);

	// Partner Slide JS
	$('.partner-slide').owlCarousel({
		items: 1,
		loop: true,
		margin: 25,
		nav: false,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		center: true,
		responsive: {
			0: {
				items: 2,
			},
			300: {
				items: 3,
			},
			576: {
				items: 4,
			},
			768: {
				items: 5,
			},
			992: {
				items: 6,
			},
			1200: {
				items: 7,
			},
		},
	});

	// Partner Slide JS
	$('.partner-slide-three').owlCarousel({
		items: 1,
		loop: true,
		margin: 25,
		nav: false,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		center: true,
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 2,
			},
			768: {
				items: 3,
			},
			992: {
				items: 3.9,
			},
		},
	});

	// Partner Slide JS
	$('.partner-slide-four').owlCarousel({
		items: 1,
		loop: true,
		margin: 25,
		nav: false,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		center: true,
		rtl: true,
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 2,
			},
			768: {
				items: 3,
			},
			992: {
				items: 3.5,
			},
		},
	});

	// Testimonial Slide JS
	$('.testimonial-slide').owlCarousel({
		items: 1,
		loop: true,
		margin: 25,
		nav: true,
		dots: false,
		autoplay: false,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		center: false,
		navText: [
			"<i class='ri-arrow-left-line'></i>",
			"<i class='ri-arrow-right-line'></i>",
		],
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			992: {
				items: 2,
			},
			1200: {
				items: 3,
			},
		},
	});

	// Active Removed Class JS
	let hide = true;

	// Remove all .active classes when clicking anywhere
	document.body.addEventListener('click', function () {
		if (hide) {
			document.querySelectorAll('.accordion-item.active').forEach(el => {
				el.classList.remove('active');
			});
		}
		hide = true;
	});

	// Add and remove .active on .accordion-item
	document.body.addEventListener('click', function (event) {
		const item = event.target.closest('.accordion-item');

		if (item) {
			if (item.classList.contains('active')) {
				document.querySelectorAll('.accordion-item.active').forEach(el => {
					el.classList.remove('active');
				});
				event.preventDefault();
				return;
			}

			document.querySelectorAll('.accordion-item.active').forEach(el => {
				el.classList.remove('active');
			});

			item.classList.add('active');
			hide = false;
		}
	});

	// Edu next Show Slide JS
	$('.edu-nest-show-slide').owlCarousel({
		items: 1,
		loop: true,
		margin: 25,
		nav: true,
		dots: false,
		autoplay: false,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		center: false,
		navText: [
			"<i class='ri-arrow-left-line'></i>",
			"<i class='ri-arrow-right-line'></i>",
		],
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			992: {
				items: 3,
			},
			1200: {
				items: 4,
			},
		},
	});

	// Testimonial Slide Three JS
	$('.testimonial-slide-three').owlCarousel({
		items: 1,
		loop: true,
		margin: 25,
		nav: false,
		dots: true,
		autoplay: false,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		center: false,
	});

	// Team Slide Three JS
	$('.team-slide-three').owlCarousel({
		items: 1,
		loop: true,
		margin: 25,
		nav: true,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		center: false,
		navText: [
			"<i class='ri-arrow-left-long-line'></i>",
			"<i class='ri-arrow-right-long-line'></i>",
		],
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 2,
			},
			768: {
				items: 3,
			},
			992: {
				items: 4,
			},
		},
	});

	// Instructor Slide JS
	$('.instructor-slide').owlCarousel({
		items: 1,
		loop: true,
		margin: 25,
		nav: false,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		center: false,
		navText: [
			"<i class='ri-arrow-left-long-line'></i>",
			"<i class='ri-arrow-right-long-line'></i>",
		],
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 1,
			},
			768: {
				items: 2,
			},
			992: {
				items: 3,
			},
		},
	});

	// Partners Slide Two JS
	$('.partners-slide-two').owlCarousel({
		items: 1,
		loop: true,
		margin: 25,
		nav: false,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		center: false,
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 2,
			},
			768: {
				items: 3,
			},
			992: {
				items: 5,
			},
		},
	});

	// Testimonials Slide Two JS
	$('.testimonials-slide-two').owlCarousel({
		items: 1,
		loop: true,
		margin: 60,
		nav: true,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		center: false,
		navText: [
			"<i class='ri-arrow-left-long-line'></i>",
			"<i class='ri-arrow-right-long-line'></i>",
		],
		responsive: {
			0: {
				items: 1,
				margin: 25,
			},
			768: {
				items: 2,
				margin: 25,
			},
			992: {
				items: 2,
			},
			1200: {
				items: 3,
			},
		},
	});

	// 14 Counter JS
    $('.counter').counterUp({
        time: 1000
    });

	// Funfact Slider JS
	$('.funfact-slider-info').owlCarousel({
		items: 1,
		loop: true,
		margin: 25,
		nav: false,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		center: true,
		responsive: {
			320: {
				items: 2,
			},
			576: {
				items: 3,
			},
			768: {
				items: 5,
			},
			992: {
				items: 6,
			},
			1200: {
				items: 8,
			},
		},
	});

	// Course Slider JS
	$('.course-slider-info').owlCarousel({
		items: 1,
		loop: true,
		margin: 25,
		nav: true,
		dots: false,
		autoplay: true,
		smartSpeed: 1100,
		autoplayHoverPause: true,
		center: false,
		navText: [
			"<i class='ri-arrow-left-long-line'></i>",
			"<i class='ri-arrow-right-long-line'></i>",
		],
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 2,
			},
			768: {
				items: 2,
			},
			992: {
				items: 3,
			},
			1200: {
				items: 4,
			},
		},
	});

	// Mixit UP Js
	document.addEventListener("DOMContentLoaded", function () {
		var container = document.querySelector('#Container');

		if (container) {
			mixitup(container);
		}
	});

	// 14. panel pin section
	if (window.gsap && window.ScrollTrigger) {
		gsap.registerPlugin(ScrollTrigger);
		gsap.matchMedia().add("(min-width: 1199px)", () => {
			document.querySelectorAll('.tp-panel-pin').forEach((section) => {
				ScrollTrigger.create({
					trigger: section,
					pin: section,
					scrub: 1,
					start: 'top 10%',
					end: 'bottom 80%',
					endTrigger: '.tp-panel-pin-area',
					pinSpacing: true,
					markers: false,
				});
			});
		});
	}

})(jQuery);
