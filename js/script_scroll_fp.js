// cover fiche intro //
$(function() {
    var introfichecover = $(".img-placeholder-cover-intro");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 1400) {
            introfichecover.addClass("img-placeholder-cover-intro-scroll");
        } else {
            introfichecover.removeClass("img-placeholder-cover-intro-scroll");
        }
    });
});



// Fiche background animation //
$(window).scroll(function(){
    if($(window).scrollTop()>200){
        $('body').addClass('project-background-scroll')
    }else{
        $('body').removeClass('project-background-scroll')
    }
});



$(function() {
    var navbottomscroll = $(".nav-bottom");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 1400) {
            navbottomscroll.addClass("nav-bottom-scroll");
        } else {
            navbottomscroll.removeClass("nav-bottom-scroll");
        }
    });
});



$(function() {
    var banner = $(".disclaimer-wrapper");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 10) {
            banner.addClass("disclaimer-wrapper-scroll");
        } else {
            banner.removeClass("disclaimer-wrapper-scroll");
        }
    });
});