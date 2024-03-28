import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

document.onload({
    
});


document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new bootstrap.Popover(popover)
  })

