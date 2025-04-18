
/*sliding carauser js codes */

$('.parterns-slider').owlCarousel({
    loop:true,
    navTimeout: 3000,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

/*Leroad home*/

document.getElementById("click").addEventListener("click", function(event) {
    location.reload();
});

const toggle = document.getElementById("Toggle");
const navLinks = document.querySelector("nav ul");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
