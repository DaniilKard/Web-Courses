let viewport = document.getElementById("viewport").offsetWidth;
let btnNext = document.getElementById("next");
let btnPrev = document.getElementById("prev");
let slider = document.querySelector("div.comments__slider");
let viewSliders = document.querySelectorAll(".comments__viewSlide");
let viewSlide = 0;

viewSliders[0].style.border = "1px solid orange";
viewSliders[0].style.backgroundColor = "#E5E5E5";

btnNext.addEventListener("click", function () {
    viewSliders[viewSlide].style.backgroundColor = "#C4C4C4";
    viewSliders[viewSlide].style.border = "none";
    if (viewSlide < 2) {
        viewSlide++;
    } else {
        viewSlide = 0;
    }
    viewport = document.getElementById("viewport").offsetWidth;
    viewSliders[viewSlide].style.border = "1px solid orange";
    viewSliders[viewSlide].style.backgroundColor = "#E5E5E5";
    slider.style.left = -viewSlide * viewport + "px";

});

btnPrev.addEventListener("click", function () {
    viewSliders[viewSlide].style.backgroundColor = "#C4C4C4";
    viewSliders[viewSlide].style.border = "none";
    if (viewSlide > 0) {
        viewSlide--;
    } else {
        viewSlide = 2;
    }
    viewport = document.getElementById("viewport").offsetWidth;
    viewSliders[viewSlide].style.border = "1px solid orange";
    viewSliders[viewSlide].style.backgroundColor = "#E5E5E5";
    slider.style.left = -viewSlide * viewport + "px";
});