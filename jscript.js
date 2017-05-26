var mn = $(".leftbut");

$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        mn.addClass("button-scrolled");
    } else {
        mn.removeClass("button-scrolled");
    }
});