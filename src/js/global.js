import Swiper from 'swiper';
// import tc from 'timecircles';
// import slick from 'slick-carousel';

import themeSwitcher from './lib/themeSwitcher'; //eefe
import navPopupLogic from './lib/navPopupLogic';
import entranceKeeper from './lib/entranceKeeper';

navPopupLogic()
entranceKeeper()

// function themeSwitcher(){
// 	$('.js-theme-switcher').on('click', function(e) {
// 		e.preventDefault();

// 		$('body').toggleAttr('data-theme', 'dark', 'light');


// 	});
// }
// themeSwitcher()

$.fn.toggleAttr = function(attr, attr1, attr2) {
  return this.each(function() {
    var self = $(this);
    if (self.attr(attr) == attr1)
      self.attr(attr, attr2);
    else
      self.attr(attr, attr1);
  });
};

var sliderHomePagination = new Swiper('.js-slider-home-pagination', {
	spaceBetween: 0,
	slidesPerView: 3,
	loop: true,
	freeMode: true,
	loopedSlides: 3, // looped slides should be the same
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
});
var sliderHome = new Swiper('.js-slider-home', {
	spaceBetween: 0,
	loop:true,
		loopedSlides: 3, // looped slides should be the same
		navigation: {
			nextEl: '.js-slider-home-button-next',
			prevEl: '.js-slider-home-button-prev',
		},
		thumbs: {
			swiper: sliderHomePagination,
		},
	});

var sliderCatalogViewItemPager = new Swiper('.js-catalog-view-pagination', {
	spaceBetween: 0,
	slidesPerView: 5,
	loop: true,
	freeMode: false,
	loopedSlides: 3, // looped slides should be the same
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
});
var sliderCatalogViewItem = new Swiper('.js-catalog-view-slider', {
	spaceBetween: 0,
	loop:true,
		loopedSlides: 5, // looped slides should be the same
		navigation: {
			nextEl: '.js-catalog-view-button-next',
			prevEl: '.js-catalog-view-button-prev',
		},
		thumbs: {
			swiper: sliderCatalogViewItemPager,
		},
	});


function navigationActive(){
	let loc = window.location.pathname.slice(1);
	$('.navigation').find('a').each(function() {
		$(this).toggleClass('active', $(this).attr('href') == loc);
	});
}
navigationActive()


$('#popup-catalog, #popup-cart').on('mouseleave', function(event) {
	$(this).removeClass('active')
});



$('.js-popup-close').on('click', function(event) {
	event.preventDefault();
	$(this).closest('.js-popup').removeClass('active');
});



$('.js-tab').on('click', function() {

	let itemContent = $(this).html();
	$(this).parents('.js-tab-container').find(".js-tab").removeClass('active')
	$(this).parents('.js-tab-container').find('.js-tab-item').removeClass('active')

	$(this).addClass('active')
	$(this).parents('.js-tab-container').find("[data-tab-name='" + itemContent + "']").addClass('active')

});


$(document).ready(function(){
	$( "a.js-scrollLink" ).click(function( event ) {
		event.preventDefault();
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top
		}, 1000);
	});
});

$('.js-make-active').on('click', function(event) {
	event.preventDefault();
	$(this).toggleClass('active');
});


$('[data-catalog-type]').each(function () {

	$(this).on("click", function (e) {
		e.preventDefault();
		$('.js-catalog-switcher').removeClass('active');
		$(this).addClass('active');
		let data = $(this).attr('data-catalog-type');
		let lastClass = $('.js-catalog').attr('class').split(' ').pop();
		$('.js-catalog').removeClass(lastClass);
		$('.js-catalog').addClass(data);
	});

});

$('.js-search-input').on('input change', function(event) {
	event.preventDefault();
	$('.js-search-dropdown').addClass('active')
});
$('.js-search-input').on('focusout', function(event) {
	event.preventDefault();
	$(this).val('');
	$('.js-search-dropdown').removeClass('active');
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

