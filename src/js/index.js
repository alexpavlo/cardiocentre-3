// let burger = document.querySelector('.burger');
// let nav = document.querySelector('.nav');
//
// burger.addEventListener('click', function () {
// burger.classList.toggle('activeMenu');
// nav.classList.toggle('activeMenu')
//
// })
//
//
//
//
// let launchDate = new Date ("Aug 10, 2021 12:00:00").getTime();
//
// let timer = setInterval(tick, 1000);
//
// const tick = () => {
//     let now = new Date().getTime();
//
//     let t = launchDate - now;
//
//     if (t>0){
//         let days = Math.floor(t/(1000*60*60*24));
//         if (days < 10) { days = "0"+days;}
//
//         let hours = Math.floor((t % (1000*60*60*24))/(1000*60*60));
//         if(hours < 10){hours = "0"+hours;}
//
//         let mins = Math.floor((t%(1000*60*60))/(1000*60));
//         if(mins < 10){hours = "0"+mins;}
//
//         let secs = Math.floor((t%(1000*60))/1000);
//         if (secs < 10){secs = "0"+secs;}
//
//         let times = `${days} : ${hours} : ${mins} : ${secs}`;
//
//         document.querySelector(".counter").innerText = times;
//     }
// }

$(document).ready(function() {
    $('.burger').click(function() {
        $('.nav').toggleClass('activeMenu');
    });
});

$(document).ready(function() {
    $('.burger').click(function() {
        $('.burger').toggleClass('activeMenu');
    });
});

$(document).ready(function () {
    $(".carousel__cards").owlCarousel({
        dots: true,

        margin: 30,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 2,
                nav: false,
                pagination: true
            },
            768:{
                items: 3,
                nav: false,
                pagination: true
            },
            1000:{
                items: 5,
                nav: true,
                pagination: true
            }
        }
    })
})

$(document).ready(function () {
    $(".reviews__selectors").owlCarousel({
        nav: true,
        margin: 180,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            1000:{
                items: 5
            }
        }
    })
})

$('.owl-nav').ready(function (event) {
$(".owl-nav").removeClass('disabled')
});