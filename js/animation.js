"use strict";

function onEntry(entry) {
	entry.forEach(change => {
	  if (change.isIntersecting) {
		 change.target.classList.add('slide-up');
	  }
	});
 }
 let options = { threshold: [0.5] };
 let observer = new IntersectionObserver(onEntry, options);
 let elements = document.querySelectorAll('.about-collection__title p, .item__title p, .container-button, .darkside__title p, .darkside__subtitle, .be-ready__title p, .be-ready__subtitle p, .be-ready__date p, .corona-collection__title p');
 for (let elm of elements) {
	observer.observe(elm);
}

function visibleImage(entry) {
	entry.forEach(change => {
	  if (change.isIntersecting) {
		 change.target.classList.add('slide-image');
	  }
	});
 }
 let visible = { threshold: [0.5] };
 let view = new IntersectionObserver(visibleImage, visible);
 let images = document.querySelectorAll('.type-text__image img, .type-2-images__imagemini img, .type-2-images__image img, .type-3-images__image img, .type-3-images__image-left img, .type-3-images__image-right img, .corona-collection__image img');
 for (let img of images) {
	view.observe(img);
}

function opacityText(entry) {
	entry.forEach(change => {
	  if (change.isIntersecting) {
		 change.target.classList.add('opacity-text');
	  }
	});
 }
 let visibleOnScreen = { threshold: [0.5] };
 let visibleText = new IntersectionObserver( opacityText, visibleOnScreen);
 let txts = document.querySelectorAll('.type-text__text, .corona-collection__text');
 for (let txt of txts) {
	visibleText.observe(txt);
}