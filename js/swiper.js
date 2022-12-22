// Swiper
const swiper = new Swiper('.also-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	autoHeight: false,
	slidesPerView: 3,
	spaceBetween: 24,
	watchOverflow: true,
	loop: true,
	speed: 800,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
		1440: {
			slidesPerView: 4,
		},
	},
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
 });