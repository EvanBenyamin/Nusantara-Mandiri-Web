import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
// import Hammer from 'hammerjs';


document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new bootstrap.Popover(popover)
  })

//   // initialize Hammer.js on the carousel element
// var carouselElement = document.getElementById('carouselAutoplaying');
// var hammer = new Hammer(carouselElement);

//   //add swipe event handlers 
//   hammer.on('swipeleft', function(){
//     $('#carouselAutoplaying').carousel('next')
//   });
//   hammer.on('swiperight', function(){
//     $('#carouselAutoplaying').carousel('prev')
//   });



