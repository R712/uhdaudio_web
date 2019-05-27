$(document).ready(function(){
    $('.recommend-artist .owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        margin: 10,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: { items: 2 },
            375: { items: 3 },
            720: { items: 4 },
            1280: { items: 6 },
            1440: { items: 8 }
        }
    });
    $('.newest-album .owl-carousel').owlCarousel({
        loop: false,
        nav: true,
        margin: 10,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: { items: 1 },
            375: { items: 2 },
            720: { items: 3 },
            1280: { items: 4 },
            1440: { items: 6 }
        }
    });
    $('.blind, .layer .layer-close').click(function(){
       $('.layer-set').fadeOut(); 
    });
    $('.btn-sidebar').click(function(){
        $('body').toggleClass('sidebar-toggle');
        $(".sidebar").slideToggle();
    });
    $('.account-set button').click(function(){
       $('#welcome-layer').fadeIn('fast');
    });
});