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
	 	} //else {  
    //   entry.target.classList.remove('show');
    // }
	  });
	});

	
	const hiddenElements = document.querySelectorAll('.hidden');


	hiddenElements.forEach((el) => observer.observe(el));


//Smooth scolll toDIv -> Jquery
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


	$("button").click(function() {
		$('html, body').animate({
			scrollTop: $("#icons").offset().top
		}, 2000);
	});

	const counters = document.querySelectorAll('.counter')
	
	counters.forEach(counter =>{
		let initial_count = 0;
		const final_count = counter.dataset.count;
		console.log(final_count);
		
		const counting = setInterval(updateCounting,2);


		function updateCounting(){
			
			if (initial_count >= 100){
			initial_count += 20;
			counter.innerText = initial_count + '+';
			}
			 if (initial_count < 100){
				initial_count = initial_count+1;
				counter.innerText = initial_count + '';				
			 }
			
	
			if(initial_count >= final_count){
			clearInterval(counting)
			}
		}
	});
}); 





