$(function() {
    var navbottomscroll = $(".nav-bottom");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 2400) {
            navbottomscroll.addClass("nav-bottom-scroll");
        } else {
            navbottomscroll.removeClass("nav-bottom-scroll");
        }
    });
});