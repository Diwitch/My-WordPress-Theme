// ! Pre Loader By Jquery

// $(window).on("load", function () {
//     $("#pre_Loader").fadeOut(2000);
// });


// =======================<<<<<>>>>>=======================


// ! Swiper Slider

var swiper = new Swiper(".bnnr_swiper", {
    loop: true,
    // centeredSlides: true,
    slidesPerView: 5,
    spaceBetween: 30,
  autoplay: {
       delay: 1000,
       disableOnInteraction: true,
     },
    speed: 2000,
    // direction: "vertical",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        484: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
       600: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        667: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1080: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1680: {
            slidesPerView: 5,
            spaceBetween: 20,
        }
    }
});

// Autoplay Stop on Hover

$(".bnnr_swiper").mouseenter(function () {
    swiper.autoplay.stop();
});

$(".bnnr_swiper").mouseleave(function () {
    swiper.autoplay.start();
});



// =======================<<<<<>>>>>=======================
