"use strict";
window.onload = function () {
	document.body.classList.add('loaded_hiding');
	window.setTimeout(function () {
		document.body.classList.add('loaded');
		document.body.classList.remove('loaded_hiding');
	}, 100);
};
window.addEventListener('load', function() {
	document.body.classList.add('ready');
});

//Type of device
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	ios: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.ios() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};
if (isMobile.any()) {
	document.body.classList.add('_touch');

	let menuArrows = document.querySelectorAll('.slide-up__button');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener('click', function (e) {
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}
} else {
	document.body.classList.add('_pc');
}


//Burger Menu
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const mainPage = document.querySelector('.main-page__container');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		mainPage.classList.toggle('_active');
	});
}

// Dropdown header
const label = document.querySelector('.dropdown__filter-selected');
const variants = Array.from(document.querySelectorAll('.dropdown__select-option'));

variants.forEach(variant => {
	variant.addEventListener('click', () => {
		label.textContent = variant.textContent;
  });
});

document.addEventListener('click', e => {
  const toggle = document.querySelector('.dropdown__switch');
  const element = e.target;

  if (element == toggle) return;

  const isDropdownChild = element.closest('.dropdown__filter');

  if (!isDropdownChild) {
    toggle.checked = false;
  }
});


// Button count in Product Page
let buttonCountPlus = document.getElementById("buttonCountPlus");
let buttonCountMinus = document.getElementById("buttonCountMinus");
let count = document.getElementById("buttonCountNumber");
let number = 1;

buttonCountPlus.onclick = function() {
    if (number < 20) {
        number++;
        count.innerHTML = number;
    }
};

buttonCountMinus.onclick = function () {
	if (number >= 2) {
		number--;
		count.innerHTML = number;
	}
};




