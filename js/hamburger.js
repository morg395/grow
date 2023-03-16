$(function () {
    'use strict';

    $('.hamburger').click(function() {
        $('.hamburger').toggleClass('hamburger--active');
        $('.menu__list').toggleClass('menu__list--show');
        $('body').toggleClass('overflow');
    })

})(jQuery);
