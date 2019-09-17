import Swiper from 'swiper';
// import tc from 'timecircles';
// import slick from 'slick-carousel';

var galleryThumbs = new Swiper('.js-slider-home-pagination', {
	spaceBetween: 0,
	slidesPerView: 3,
	loop: true,
	freeMode: true,
		loopedSlides: 3, // looped slides should be the same
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
var galleryTop = new Swiper('.js-slider-home', {
	spaceBetween: 0,
	loop:true,
		loopedSlides: 3, // looped slides should be the same
		navigation: {
			nextEl: '.js-slider-home-button-next',
			prevEl: '.js-slider-home-button-prev',
		},
		thumbs: {
			swiper: galleryThumbs,
		},
	});

function navigationActive(){
	let loc = window.location.pathname;
	$('.navigation').find('a').each(function() {
		$(this).toggleClass('active', $(this).attr('href') == loc);
	});
}
navigationActive()

$('[data-popup]').each(function () {

	if ($(this).hasClass('js-popup-onhover')) {

		if(window.location.href === "http://localhost:8080/Catalog.html"){
			return 0
		}
		if(window.location.href === "http://localhost:8080/Catalog.html"){
			return 0
		}

		$(this).on("mouseover", function (e) {
			e.preventDefault();
			var content = $(this).attr('data-popup');
			$('.js-popup').removeClass('active');
			$('#popup-' + content).addClass('active')
		});

	} else {

		$(this).on("click", function (e) {
			e.preventDefault();
			var content = $(this).attr('data-popup');
			$('.js-popup').removeClass('active');
			$('#popup-' + content).addClass('active')
		});

	}
});

$('#popup-catalog').on('mouseleave', function(event) {
	$(this).removeClass('active')
});


$('.js-popup-close').on('click', function(event) {
	event.preventDefault();
	$(this).closest('.js-popup').removeClass('active');
});



$(document).ready(function(){
	$( "a.js-scrollLink" ).click(function( event ) {
		event.preventDefault();
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top
		}, 1000);
	});
});

// $('.js-slider').slick({
// 	infinite: true,
// 	slidesToShow: 2,
// 	slidesToScroll: 1,
// 	rows: 0,
//		 responsive: [
//		 {
//			 breakpoint: 768,
//			 settings: {
//				 slidesToShow: 1,
//				 slidesToScroll: 1,
//			 }
//		 },
//	 ]
// });

// $(".js-countdown").TimeCircles({
// 	count_past_zero: false,
// 	animation: "smooth",
// 	circle_bg_color: "#fff",
// 	start_angle: -90,
// 	fg_width: 0.03,
// 	bg_width: 0,
// 	use_background: false,
// 	time: {
// 		Days: { color: "#fff" },
// 		Hours: { color: "#fff" },
// 		Minutes: { color: "#fff" },
// 		Seconds: { color: "#fff" }
// 	}
// });

// $(".js-countdown-discounts").TimeCircles({
// 	count_past_zero: false,
// 	animation: "smooth",
// 	circle_bg_color: "#fff",
// 	start_angle: -90,
// 	fg_width: 0,
// 	bg_width: 0,
// 	use_background: false,
// 	time: {
// 		Days: { color: "#fff" },
// 		Hours: { color: "#fff" },
// 		Minutes: { color: "#fff" },
// 		Seconds: { color: "#fff" }
// 	}
// });

// function navigation(){
// 	var $element = $('.js-header');
// 	var $fixedTrigger = $('.js-nav-trigger');

// 	if ($fixedTrigger.length) {
// 		var scroll = $(window).scrollTop();
// 		var objectPosition = $fixedTrigger.offset().top;
// 		var elementHeight = $element.height();
// 		// console.log(elementHeight);
// 		if (scroll > objectPosition) {
// 			$element.addClass("fixed");
// 		} else {
// 			$element.removeClass("fixed");
// 		}
// 	}

// 	$(window).scroll(function() {
// 		var scroll = $(window).scrollTop();
// 		var objectPosition = 0;
// 		if (scroll > objectPosition) {
// 			$element.addClass("fixed");
// 		} else {
// 			$element.removeClass("fixed");
// 		}
// 	});

// }
// navigation()

// $('.js-mobile-hamburger').on('click', function(e) {
// 	e.preventDefault();
// 	$('.js-mobile-hamburger').toggleClass('active');
// 	$('.js-nav-mobile').toggleClass('active');
// });

// $('.js-popup-trigger').on('click', function(event) {
// 	event.preventDefault();
// 	$(this).closest('.js-popup').find('.js-popup-container').toggleClass('active');
// });

// $('.js-faq-trigger').on('click', function(event) {
// 	event.preventDefault();
// 	$(this).find('.js-faq-hidden').slideToggle(600);
// 	$(this).toggleClass('active');

// });

