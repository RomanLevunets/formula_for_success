$(window).on("load",function(){
    //Preloader
    setTimeout("$('.page-loader div').fadeOut();",200);
    setTimeout("$('.page-loader').delay(200).fadeOut('slow');",200);
    setTimeout("jQuery('.preloader_hide, .selector_open').animate({'opacity' : '1'},500)",200);
});

$(document).ready(function() {

    $('.fancybox').fancybox({
        padding:0
    });

    $(".various").fancybox({
        //maxWidth	: 800,
        //maxHeight	: 460,
        //width		: '70%',
        //height	: '70%',
        fitToView	: true,
        autoHeight  : true,
        autoSize	: true,
        autoScale   : true,
        type        : "iframe",
        closeClick	: true,
        openEffect	: 'none',
        closeEffect	: 'none',
        padding:0
    });

    $('.slider').owlCarousel({
        loop:false,
        margin:0,
        nav:false,
        autoWidth: false,
        dots:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });
    $('.slider-logo1').owlCarousel({
        loop:false,
        margin:0,
        nav:true,
        navText: ["",""],
        autoWidth: false,
        dots:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            560:{
                items:1
            },
            767:{
                items:2
            },
            992:{
                items:1
            },
            1024:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });
    $('.slider-logo2').owlCarousel({
        loop:false,
        margin:0,
        nav:true,
        navText: ["",""],
        autoWidth: false,
        dots:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            380:{
                items:1
            },
            560:{
                items:2
            },
            767:{
                items:2
            },
            992:{
                items:2
            },
            1024:{
                items:3
            },
            1200:{
                items:5
            }
        }
    });

    $(".phone").mask("+7 (999) 999-99-99");
    $("#phone").mask("+7 (999) 999-99-99");

    $('.menubut').click(function(){
        $('.menu').toggleClass('open');
        $('.menubut').toggleClass('open');
    });

    $('.leftMenu li > p').click(function () {
            var element = $(this).next();
            element.slideToggle(400);
            $('.second-menu:visible').not(element).slideUp(400);

            $('.leftMenu li > p').not($(this)).removeClass('active');
            $(this).toggleClass('active');
    });

});
