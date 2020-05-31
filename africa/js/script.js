$(document).ready(function(){
    $('.slider').slick({
        dots:true,
        adaptiveHeight:true,
        slidesToShow:2,
        speed: 800,
        easing: 'ease',
        autoplay:true,
        autoplaySpeed: 1500,
        waitForAnimate:false,
        centerMode:true,
        variableWidth:true,
        vertical:false,
    });
    $('.slider__places').slick({
        dots:false,
        slidesToShow:2,
        adaptiveHeight:true,
    });
});


(function() {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 80) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
}());