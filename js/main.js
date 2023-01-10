// main.js

$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() >= 800){
            $('.top-btn').fadeIn();
        } else {
            $('.top-btn').fadeOut();
        }
    });

    $('.top-btn').click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop:0},100)
    })
})