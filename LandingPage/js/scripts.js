// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
// import Hammer from 'hammerjs';




document.addEventListener("DOMContentLoaded", () => {

	/*Carousel Code */
	const buttons = document.querySelectorAll("[data-carousel-button]")

	buttons.forEach(button =>{
		button.addEventListener("click",()=>{
		const offset = button.dataset.carouselButton === "next" ? 1:-1;
		const slides = button
		.closest("[data-carousel]")
		.querySelector("[data-slides]")

		const activeSlide = slides.querySelector("[data-active]");
		let newIndex = [...slides.children].indexOf(activeSlide) + offset;
		if (newIndex < 0) newIndex = slides.children.length - 1;
		if (newIndex >= slides.children.length) newIndex = 0;

		slides.children[newIndex].dataset.active = true;
		delete activeSlide.dataset.active;
		});
	});

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver((entries) => {
	  entries.forEach((entry) => {
      
		if (entry.isIntersecting) {
		  entry.target.classList.add('show');
	 	} //else {  *USE ELSE IF TO GET A REACOURING ANIMATION
    //   entry.target.classList.remove('show');
    // }
	  });
	});

	// Get all the elements with the .animate class applied
	const hiddenElements = document.querySelectorAll('.hidden');

	// Add the observer to each of those elements
	hiddenElements.forEach((el) => observer.observe(el));


//Smooth scolll toDIv
	$("#home").click(function() {
		$('html, body').animate({
			scrollTop: $("#jumbotron").offset().top
		}, 500);
	});

	$("#layanan").click(function() {
		$('html, body').animate({
			scrollTop: $("#services").offset().top
		}, 1500);
	});

	$(window).scroll(function(){
		$('nav').toggleClass('scrolled',$(this).scrollTop()>50);
	});

}); 





