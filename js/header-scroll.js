$(function () {
    
    var header = $(".header");
    var logo = $('#header__logo');
    var link = $('.menu__link');
    var hamburger = $('.hamburger');
    var hamburgerItem = $('.hamburger__item');
    var scrollChange = 110;
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= scrollChange) {
            header.addClass('header-scrolling');
            header.css('background-color', '#272727');
            logo.attr('src', 'images/footer/logo.svg');
            link.addClass('menu__link--color');
            hamburgerItem.addClass('hamburger--color')
            
        } else {
            header.removeClass('header-scrolling');
            header.css('background-color', '#fff');
            logo.attr('src', 'images/main/header/logo.svg');
            link.removeClass('menu__link--color');
            hamburgerItem.removeClass('hamburger--color')
        }
    });
})