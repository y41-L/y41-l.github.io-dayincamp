var mn = $(".leftbut");

$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        mn.addClass("button-scrolled");
    } else {
        mn.removeClass("button-scrolled");
    }
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

var index = 0;
show();

function show() {
    var x;
    var slide = document.getElementsByClassName("slide");
    for (x = 0; x < slide.length; x++) {
        slide[x].style.display = "none";
    }
    index++;
    if (index > slide.length) { index = 1 }
    slide[index - 1].style.display = "block";
    setTimeout(show, 2000);
}