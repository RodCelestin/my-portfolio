// HP intro background animation
$(window).scroll(function(){
    
    if($(window).scrollTop()>200){
        $('body').addClass('background-scroll')
    }else{
        $('body').removeClass('background-scroll')
    }
});

// 1st card background animation deskop
$(function() {
    var introscroll = $(".louvre");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 64) {
            introscroll.addClass("louvre-scroll");
        } else {
            introscroll.removeClass("louvre-scroll");
        }
    });
});

// Start CTA
$(function() {
    var introscroll = $(".start-wrapper");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 800) {
            introscroll.addClass("start-scroll");
        } else {
            introscroll.removeClass("start-scroll");
        }
    });
});