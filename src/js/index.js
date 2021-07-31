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
    $('.header__link').click(function () {
        $('.nav').removeClass('activeMenu');
        $('.burger').removeClass('activeMenu')
    })
});

// $(document).ready(function () {
//     $(".carousel__cards").owlCarousel({
//         margin: 20,
//         responsive: {
//             320:{
//                 margin: 200,
//                 items: 2,
//                 nav: false,
//                 pagination: true
//             },
//             768:{
//                 items: 3,
//                 nav: false,
//                 pagination: true
//             },
//             1000:{
//                 items: 5,
//                 nav: true,
//                 pagination: true
//             }
//         }
//     })
// })

// $(document).ready(function () {
//     $(".reviews__selectors").owlCarousel({
//         margin: 20,
//         responsive: {
//             320:{
//                 margin:280,
//                 items: 2,
//                 nav: false,
//                 pagination: true
//             },
//             768:{
//                 margin: 120,
//                 items: 3,
//                 nav: false,
//                 pagination: true
//             },
//             1000:{
//                 items: 4,
//                 nav: true,
//                 pagination: true
//             }
//         }
//     })
// })


// $(document).ready(function () {
// $('.carousel__cards').slick({
//
// })
// })

$('.carousel__cards').slick({
    prevArrow: document.querySelectorAll('.prev__btn'),
    nextArrow: document.querySelectorAll('.next__btn'),
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive:[
        {
            breakpoint:768,
            settings:{
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 458,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }
    ]
});

$('.reviews__selectors').slick({
    prevArrow: document.querySelectorAll('.prev'),
    nextArrow: document.querySelectorAll('.next'),
    // prevArrow: $('.prev'),
    // nextArrow: $('.next'),
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint:768,
            settings:{
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 458,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

$('.doctors__wrapper').slick({
    // prevArrow: $('.prev'),
    // nextArrow: $('.next'),
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint:768,
            settings:{
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 458,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});




set_timer($('.counter'),[
    12,
    24,
    59,
    59
]);

$(document).ready(function () {

    var show = true
    $(window).on("scroll load resize", function () {

        if(!show) return false;

        var w_top = $(window).scrollTop();
        var e_top = $('.number').offset().top;

        var w_height = $(window).height();
        var d_height = $(document).height();

        var e_height = $('.number').outerHeight();

        console.log(w_top + 200 + " " + e_top);

        if (w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height ){
            $('.number').spincrement({
                thousandSeparator: "",
                duration: 4000
            })

            show = false
        }
    })
})

$('.number-date').spincrement({
    thousandSeparator: "/"
})


$(document).ready(function(){
    // Добавить плавную прокрутку до всех ссылок
    $("a").on('click', function(event) {

        // Убедись в этом что .hash имеет значение перед переопределением поведения по умолчанию
        if (this.hash !== "") {
            // Запретить поведение щелчка якоря по умолчанию
            event.preventDefault();

            // Хранить хэш
            var hash = this.hash;

            // Использование метода animate() jQuery для добавления плавной прокрутки страницы
            // Необязательное число (800) указывает количество миллисекунд, необходимых для прокрутки до указанной области
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 100, function(){

                // Добавить хэш (#) для URL-адреса после завершения прокрутки (поведение щелчка по умолчанию)
                window.location.hash = hash;
            });
        } // Конец, если
    });
});