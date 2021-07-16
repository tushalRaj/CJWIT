$("body").mousemove(function(t) {
    var i = $(".js-search").find(".eye:hover").length,
        n = $(".eye"),
        o = n.offset().left + n.width() / 2,
        s = n.offset().top + n.height() / 2,
        r = Math.atan2(t.pageX - o, t.pageY - s),
        a = r * (180 / Math.PI) * -1 + 180;
    1 !== i && n.css({
        "-webkit-transform": "rotate(" + a + "deg)",
        "-moz-transform": "rotate(" + a + "deg)",
        "-ms-transform": "rotate(" + a + "deg)",
        transform: "rotate(" + a + "deg)"
    })
})


$(document).ready(function() {
    $('.menu-icon').click(function() {
        $('.big-menu').addClass('active')
    })
    $('.closeBig_menu').click(function() {
        $('.big-menu').removeClass('active')
        $('body').removeClass('menu-open')
    })


    // step-2 image hover
    $('.num-box').click(function(e) {
        e.preventDefault()

        $('.num-box').removeClass('active')
        $(this).addClass('active')

    })



    // tab-click animation step 2

    $('.btn-black').click(function(e) {
            e.preventDefault()
            $('.btn-black').removeClass('active')
            $(this).addClass('active')


            if ($('.tab-read-link').hasClass('active')) {
                $('.tab-show-section').removeClass('active')
                $('.read-section').addClass('active')
            } else if ($('.tab-listen-link').hasClass('active')) {
                $('.tab-show-section').removeClass('active')
                $('.audio-section').addClass('active')
            } else if ($('.tab-share-link').hasClass('active')) {
                $('.tab-show-section').removeClass('active')
                $('.social-section').addClass('active')
            } else if ($('.tabs-down-link').hasClass('active')) {
                $('.tab-show-section').removeClass('active')
                $('.download-section').addClass('active')
            } else if ($('.tabs-count-link').hasClass('active')) {
                $('.tab-show-section').removeClass('active')
                $('.count-me-section').addClass('active')
            }

        })
        // step-5 crousel
    $('.carousel').carousel({
        interval: false
    })

})

$('.num-box').hover(function() {
    $('.num-box').removeClass('active')
    $(this).addClass('active')
})

$('.num-box').mouseenter(function() {
    if ($('.boxnumber1hov').hasClass('active')) {
        $('.bxhovdata').removeClass('active')
        $('.boxnumber1hovdata').addClass('active')
    } else if ($('.boxnumber2hov').hasClass('active')) {
        $('.bxhovdata').removeClass('active')
        $('.boxnumber2hovdata').addClass('active')
    } else if ($('.boxnumber3hov').hasClass('active')) {
        $('.bxhovdata').removeClass('active')
        $('.boxnumber3hovdata').addClass('active')
    } else if ($('.boxnumber4hov').hasClass('active')) {
        $('.bxhovdata').removeClass('active')
        $('.boxnumber4hovdata').addClass('active')
    } else if ($('.boxnumber5hov').hasClass('active')) {
        $('.bxhovdata').removeClass('active')
        $('.boxnumber5hovdata').addClass('active')
    } else if ($('.boxnumber6hov').hasClass('active')) {
        $('.bxhovdata').removeClass('active')
        $('.boxnumber6hovdata').addClass('active')
    } else if ($('.boxnumber7hov').hasClass('active')) {
        $('.bxhovdata').removeClass('active')
        $('.boxnumber7hovdata').addClass('active')
    } else if ($('.boxnumber8hov').hasClass('active')) {
        $('.bxhovdata').removeClass('active')
        $('.boxnumber8hovdata').addClass('active')
    } else if ($('.boxnumber9hov').hasClass('active')) {
        $('.bxhovdata').removeClass('active')
        $('.boxnumber9hovdata').addClass('active')
    } else if ($('.boxnumber10hov').hasClass('active')) {
        $('.bxhovdata').removeClass('active')
        $('.boxnumber10hovdata').addClass('active')
    } else if ($('.boxnumber11hov').hasClass('active')) {
        $('.bxhovdata').removeClass('active')
        $('.boxnumber11hovdata').addClass('active')
    } else if ($('.boxnumber12hov').hasClass('active')) {
        $('.bxhovdata').removeClass('active')
        $('.boxnumber12hovdata').addClass('active')
    } else if ($('.boxnumber13hov').hasClass('active')) {
        $('.bxhovdata').removeClass('active')
        $('.boxnumber13hovdata').addClass('active')
    } else if ($('.boxnumber14hov').hasClass('active')) {
        $('.bxhovdata').removeClass('active')
        $('.boxnumber14hovdata').addClass('active')
    } else if ($('.boxnumber15hov').hasClass('active')) {
        $('.bxhovdata').removeClass('active')
        $('.boxnumber15hovdata').addClass('active')
    } else if ($('.boxnumber16hov').hasClass('active')) {
        $('.bxhovdata').removeClass('active')
        $('.boxnumber16hovdata').addClass('active')
    } else if ($('.boxnumber17hov').hasClass('active')) {
        $('.bxhovdata').removeClass('active')
        $('.boxnumber17hovdata').addClass('active')
    } else if ($('.boxnumber18hov').hasClass('active')) {
        $('.bxhovdata').removeClass('active')
        $('.boxnumber18hovdata').addClass('active')
    } else if ($('.boxnumber19hov').hasClass('active')) {
        $('.bxhovdata').removeClass('active')
        $('.boxnumber19hovdata').addClass('active')
    } else if ($('.boxnumber20hov').hasClass('active')) {
        $('.bxhovdata').removeClass('active')
        $('.boxnumber20hovdata').addClass('active')
    } else if ($('.boxnumber21hov').hasClass('active')) {
        $('.bxhovdata').removeClass('active')
        $('.boxnumber21hovdata').addClass('active')
    } else if ($('.boxnumber22hov').hasClass('active')) {
        $('.bxhovdata').removeClass('active')
        $('.boxnumber22hovdata').addClass('active')
    } else if ($('.boxnumber23hov').hasClass('active')) {
        $('.bxhovdata').removeClass('active')
        $('.boxnumber23hovdata').addClass('active')
    } else if ($('.boxnumber24hov').hasClass('active')) {
        $('.bxhovdata').removeClass('active')
        $('.boxnumber24hovdata').addClass('active')
    } else if ($('.boxnumber25hov').hasClass('active')) {
        $('.bxhovdata').removeClass('active')
        $('.boxnumber25hovdata').addClass('active')
    } else if ($('.boxnumber26hov').hasClass('active')) {
        $('.bxhovdata').removeClass('active')
        $('.boxnumber26hovdata').addClass('active')
    } else if ($('.boxnumber27hov').hasClass('active')) {
        $('.bxhovdata').removeClass('active')
        $('.boxnumber27hovdata').addClass('active')
    }

})


$('[data-toggle="collapse"]').on('click', function(e) {
    if ($(this).parents('.accordion').find('.collapse.show')) {
        var idx = $(this).index('[data-toggle="collapse"]');
        if (idx == $('.collapse.show').index('.collapse')) {
            // prevent collapse
            e.stopPropagation();
        }
    }
});

$('.cstp_1').click(function(e) {
    e.preventDefault()
    $(".cdata_1").collapse("show")
    $(".cstp_2").removeClass('active')
    $(".cstp_3").removeClass('active')
    $(this).addClass('active')
})
$('.cstp_2').click(function(e) {
    e.preventDefault()
    $(".cdata_2").collapse("show")
    $('.cstp_1').removeClass('active')
    $('.cstp_3').removeClass('active')
    $(this).addClass('active')
})
$('.cstp_3').click(function(e) {
    e.preventDefault()
    $(".cdata_3").collapse("show")
    $('.cstp_1').removeClass('active')
    $('.cstp_2').removeClass('active')
    $(this).addClass('active')
})

$('[data-target="#stepOne"], [data-target="#stepFour"], [data-target="#stepTen"]').on('click', function() {
    $('.cstp_2').removeClass('active')
    $('.cstp_3').removeClass('active')
    $('.cstp_1').addClass('active')
})
$('[data-target="#stepTwo"], [data-target="#stepFive"], [data-target="#stepEleven"]').on('click', function() {
    $('.cstp_1').removeClass('active')
    $('.cstp_3').removeClass('active')
    $('.cstp_2').addClass('active')
})
$('[data-target="#stepThree"], [data-target="#stepSix"], [data-target="#stepTwelve"]').on('click', function() {
        $('.cstp_1').removeClass('active')
        $('.cstp_2').removeClass('active')
        $('.cstp_3').addClass('active')
    })
    

$('.cstp_7').click(function(e) {
    e.preventDefault()
    $(".cdata_7").collapse("show")
    $(".cstp_8").removeClass('active')
    $(".cstp_9").removeClass('active')
    $(this).addClass('active')
})
$('.cstp_8').click(function(e) {
    e.preventDefault()
    $(".cdata_8").collapse("show")
    $('.cstp_7').removeClass('active')
    $('.cstp_9').removeClass('active')
    $(this).addClass('active')
})
$('.cstp_9').click(function(e) {
    e.preventDefault()
    $(".cdata_9").collapse("show")
    $('.cstp_7').removeClass('active')
    $('.cstp_8').removeClass('active')
    $(this).addClass('active')
})

$('[data-target="#stepSeven"]').on('click', function() {
    $('.cstp_9').removeClass('active')
    $('.cstp_8').removeClass('active')
    $('.cstp_7').addClass('active')
})
$('[data-target="#stepEight"]').on('click', function() {
    $('.cstp_9').removeClass('active')
    $('.cstp_7').removeClass('active')
    $('.cstp_8').addClass('active')
})
$('[data-target="#stepNine"]').on('click', function() {
    $('.cstp_7').removeClass('active')
    $('.cstp_8').removeClass('active')
    $('.cstp_9').addClass('active')
})

$(document).ready(function() {

    // slick slider
   
    // $('.slickmg').slick({
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay:false,
    //     prevArrow: '<div class="class-to-style prev-btn"><i class="fas fa-caret-left"></i><span class="sr-only">Prev</span></div>',
    //     nextArrow: '<div class="class-to-style next-btn"><i class="fas fa-caret-right"></i><span class="sr-only">Next</span></div>',
    // });
    
    // $('.slick-demo').slick();
    var navslide = $('.mob_sliderNav')
    $(navslide).slick({
        loop:false,
        infinite: false,
        initialSlide: 0,
        margin:10,
        nav:true,
        items:1,
        autoplay:false,
        prevArrow:'<i class="fas fa-chevron-left left_arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-right right_arrow"></i>',
        draggable:false
    })
    var hold = false;

    navslide.slick("slickSetOption", "accessibility", hold);
    navslide.slick("slickSetOption", "draggable", hold);
    navslide.slick("slickSetOption", "swipe", hold);
    navslide.slick("slickSetOption", "touchMove", hold);
  
    hold = !hold;
    $(".cdata_1").addClass('current')
    navslide.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        // var i = (currentSlide ? currentSlide : 0) + 1;
        console.log(currentSlide)
    // next slide/page
        if(currentSlide == 0){
            $(".cdata_1").collapse("show")
            $('.cstp_2').removeClass('active')
            $('.cstp_3').removeClass('active')
            $(".cdata_3").removeClass('current')
            $(".cdata_1").addClass('current')
        }else if(currentSlide == 1){
            $('.left_arrow').show()
            $(".cdata_2").collapse("show")
            $('.cstp_1').removeClass('active')
            $('.cstp_3').removeClass('active')
             $(".cdata_3").removeClass('current')
             $(".cdata_1").removeClass('current')
        }else if((currentSlide == 2)){
            $(".cdata_1").removeClass('current')
            $(".cdata_3").addClass('current')
            $(".cdata_3").collapse("show")
            $('.cstp_1').removeClass('active')
            $('.cstp_2').removeClass('active')

            $('.right_arrow').click(function(){
                if($('.step-3-main').hasClass('current')){
                    console.log('hi')
                    window.location.href = "./vlog.html"
                }
            })
        }
         if((currentSlide == 2)){
            $(".cdata_3").addClass('current')
            $(".cdata_3").collapse("show")
            $('.cstp_1').removeClass('active')
            $('.cstp_2').removeClass('active')

            $('.right_arrow').click(function(){
                if($('.step-6-main').hasClass('current')){
                    console.log('hi')
                    window.location.href = "./about.html"
                }
            })
        }
        
         if((currentSlide == 2)){
            $(".cdata_3").addClass('current')
            $(".cdata_3").collapse("show")
            $('.cstp_1').removeClass('active')
            $('.cstp_2').removeClass('active')
            $('.right_arrow').click(function(){
                if($('.step-9-main').hasClass('current')){
                    console.log('hi')
                    window.location.href = "./social.html"
                }
            })
        }
         if((currentSlide == 2)){
            $(".cdata_3").addClass('current')
            $(".cdata_3").collapse("show")
            $('.cstp_1').removeClass('active')
            $('.cstp_2').removeClass('active')
            $('.right_arrow').click(function(){
                if($('.step-12-main').hasClass('current')){
                    console.log('hi')
                    window.location.href = "./academy.html"
                }
            })
        }

        // prev slide/page
        $('.left_arrow ').click(function(){
            if($('.step-4-main').hasClass('current')){
                window.location.href = "./index.html"
            }
        })
        $('.left_arrow ').click(function(){
            if($('.step-7-main').hasClass('current')){
                window.location.href = "./vlog.html"
            }
        })
        $('.left_arrow ').click(function(){
            if($('.step-10-main').hasClass('current')){
                window.location.href = "./about.html"
            }
        })
        $('.left_arrow ').click(function(){
            if($('.step-13-main').hasClass('current')){
                window.location.href = "./social.html"
            }
        })
        
        // hide arrows
        if($('.step-15-main').hasClass('current')){
            $('.right_arrow').hide()
        }else{
            $('.right_arrow').show()
        }
        
    });
    if($('.step-1-main').hasClass('current')){
        $('.left_arrow').hide()
    }
  

  $(this).toggleClass("disabled");
    var owl = $('.owl-carousel')
    owl.owlCarousel({
        dots: false,
        loop:true,
        nav: true,
        navText: ["<img src='./images/prev.svg'>","<img src='./images/next.svg'>"],
        items: 1,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true
    })


    $('#play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
        $(this).hide()
        $('#stop').show()
        console.log('stoped')
    })
    $('#stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
        $(this).hide()
        $('#play').show()
        console.log('played')
    })

    
})

