(function () {
	"use strict";
	const headerKatalog = document.querySelector(".header__katalog");
	const headerKatalogBloc = document.querySelector(".header__katalog-bloc");
	const headerBurgerLogo = document.querySelector(".header__burger-logo");
	const heheaderMenu = document.querySelector(".header__menu");
	const styule = getComputedStyle(headerKatalogBloc);
	const section5Bloc2Btn = document.querySelector(".section5__bloc2-btn");
	const section5Bloc2Iframe = document.querySelector(".section5__bloc2-iframe");
	const section7Bloc2Yerevan = document.querySelector(
		".section7__bloc2-yerevan"
	);
	const section7Bloc2Hamburg = document.querySelector(
		".section7__bloc2-hamburg"
	);
	const section7Bloc1Btn1 = document.querySelector(".section7__bloc1-btn1");
	const section7Bloc1Btn2 = document.querySelector(".section7__bloc1-btn2");

	headerKatalog.addEventListener("click", () => {
		headerKatalogBloc.classList.toggle("active");
		if (window.innerWidth <= 1100) {
			headerKatalog.style.marginBottom = parseFloat(styule.height) + 20 + "px";
		}
		if (!headerKatalogBloc.classList.contains("active")) {
			headerKatalog.style.marginBottom = 0;
		}
	});
	headerBurgerLogo.addEventListener("click", () => {
		heheaderMenu.classList.toggle("active");
	});

	document.body.addEventListener("click", e => {
		if (
			!headerKatalog.contains(e.target) &&
			!headerKatalogBloc.contains(e.target)
		) {
			headerKatalogBloc.classList.remove("active");
			headerKatalog.style.marginBottom = 0;
		}
		if (
			!headerBurgerLogo.contains(e.target) &&
			!heheaderMenu.contains(e.target)
		) {
			heheaderMenu.classList.remove("active");
		}
	});

	if (window.innerWidth <= 480) {
		const swiper = new Swiper(".swiper.section2__swiper", {
			scrollbar: {
				el: ".swiper-scrollbar",
				draggable: true,
			},
		});
	}

	const swiper = new Swiper(".swiper.x", {
		loop: true,
		pagination: {
			el: ".swiper-pagination",
		},

		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},

		scrollbar: {
			el: ".swiper-scrollbar",
		},
		breakpoints: {
			1100: {
				slidesPerView: 2,
			},
		},
		spaceBetween: 30,
		autoHeight: true,
	});

	section5Bloc2Btn.addEventListener("click", function () {
		section5Bloc2Iframe.style.display = "block";
		section5Bloc2Btn.style.display = "none";
	});

	section7Bloc1Btn1.addEventListener("click", () => {
		section7Bloc2Yerevan.classList.remove("none");
		section7Bloc2Hamburg.classList.add("block");

	});
	section7Bloc1Btn2.addEventListener("click", () => {
		section7Bloc2Yerevan.classList.add("none");
		section7Bloc2Hamburg.classList.remove("block");

	});
})();
