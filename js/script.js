$(document).ready(function(){
    $('.slider').slick({
        arrows:true, 
        infinite: true,
        slidesToShow:3,
        slidesToScroll: 3,
        speed: 500,
        easing: 'ease',
        draggable:false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow:2,
                    slidesToScroll: 1
                },

                breakpoint: 800,
                settings: {
                    slidesToShow:1,
                    slidesToScroll: 1
                }
            }
        ]

    });
});