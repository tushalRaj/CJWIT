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

$('.num-box').hover(function(){
    $('.num-box').removeClass('active')
    $(this).addClass('active')
})

$('.num-box').mouseenter(function(){
    if($('.boxnumber1hov').hasClass('active')){
        $('.bxhovdata').removeClass('active')
        $('.boxnumber1hovdata').addClass('active')
    }
    else if($('.boxnumber2hov').hasClass('active')){
        $('.bxhovdata').removeClass('active')
        $('.boxnumber2hovdata').addClass('active')
    }
    else if($('.boxnumber3hov').hasClass('active')){
        $('.bxhovdata').removeClass('active')
        $('.boxnumber3hovdata').addClass('active')
    }
    else if($('.boxnumber4hov').hasClass('active')){
        $('.bxhovdata').removeClass('active')
        $('.boxnumber4hovdata').addClass('active')
    }
    else if($('.boxnumber5hov').hasClass('active')){
        $('.bxhovdata').removeClass('active')
        $('.boxnumber5hovdata').addClass('active')
    }
    else if($('.boxnumber6hov').hasClass('active')){
        $('.bxhovdata').removeClass('active')
        $('.boxnumber6hovdata').addClass('active')
    }
    else if($('.boxnumber7hov').hasClass('active')){
        $('.bxhovdata').removeClass('active')
        $('.boxnumber7hovdata').addClass('active')
    }
    else if($('.boxnumber8hov').hasClass('active')){
        $('.bxhovdata').removeClass('active')
        $('.boxnumber8hovdata').addClass('active')
    }
    else if($('.boxnumber9hov').hasClass('active')){
        $('.bxhovdata').removeClass('active')
        $('.boxnumber9hovdata').addClass('active')
    }
    else if($('.boxnumber10hov').hasClass('active')){
        $('.bxhovdata').removeClass('active')
        $('.boxnumber10hovdata').addClass('active')
    }
    else if($('.boxnumber11hov').hasClass('active')){
        $('.bxhovdata').removeClass('active')
        $('.boxnumber11hovdata').addClass('active')
    }
    else if($('.boxnumber12hov').hasClass('active')){
        $('.bxhovdata').removeClass('active')
        $('.boxnumber12hovdata').addClass('active')
    }
    else if($('.boxnumber13hov').hasClass('active')){
        $('.bxhovdata').removeClass('active')
        $('.boxnumber13hovdata').addClass('active')
    }
    else if($('.boxnumber14hov').hasClass('active')){
        $('.bxhovdata').removeClass('active')
        $('.boxnumber14hovdata').addClass('active')
    }
    else if($('.boxnumber15hov').hasClass('active')){
        $('.bxhovdata').removeClass('active')
        $('.boxnumber15hovdata').addClass('active')
    }
    else if($('.boxnumber16hov').hasClass('active')){
        $('.bxhovdata').removeClass('active')
        $('.boxnumber16hovdata').addClass('active')
    }
    else if($('.boxnumber17hov').hasClass('active')){
        $('.bxhovdata').removeClass('active')
        $('.boxnumber17hovdata').addClass('active')
    }
    else if($('.boxnumber18hov').hasClass('active')){
        $('.bxhovdata').removeClass('active')
        $('.boxnumber18hovdata').addClass('active')
    }
    else if($('.boxnumber19hov').hasClass('active')){
        $('.bxhovdata').removeClass('active')
        $('.boxnumber19hovdata').addClass('active')
    }
    else if($('.boxnumber20hov').hasClass('active')){
        $('.bxhovdata').removeClass('active')
        $('.boxnumber20hovdata').addClass('active')
    }
    else if($('.boxnumber21hov').hasClass('active')){
        $('.bxhovdata').removeClass('active')
        $('.boxnumber21hovdata').addClass('active')
    }
    else if($('.boxnumber22hov').hasClass('active')){
        $('.bxhovdata').removeClass('active')
        $('.boxnumber22hovdata').addClass('active')
    }
    else if($('.boxnumber23hov').hasClass('active')){
        $('.bxhovdata').removeClass('active')
        $('.boxnumber23hovdata').addClass('active')
    }
    else if($('.boxnumber24hov').hasClass('active')){
        $('.bxhovdata').removeClass('active')
        $('.boxnumber24hovdata').addClass('active')
    }
    else if($('.boxnumber25hov').hasClass('active')){
        $('.bxhovdata').removeClass('active')
        $('.boxnumber25hovdata').addClass('active')
    }
    else if($('.boxnumber26hov').hasClass('active')){
        $('.bxhovdata').removeClass('active')
        $('.boxnumber26hovdata').addClass('active')
    }
    else if($('.boxnumber27hov').hasClass('active')){
        $('.bxhovdata').removeClass('active')
        $('.boxnumber27hovdata').addClass('active')
    }

})


$('[data-toggle="collapse"]').on('click',function(e){
    if ( $(this).parents('.accordion').find('.collapse.show') ){
        var idx = $(this).index('[data-toggle="collapse"]');
        if (idx == $('.collapse.show').index('.collapse')) {
            // prevent collapse
            e.stopPropagation();
        }
    }
});

$('.cstp_1').click(function(e){
    e.preventDefault()
    $(".cdata_1").collapse("show")
    $(".cstp_2").removeClass('active')
    $(".cstp_3").removeClass('active')
    $(this).addClass('active')
})
$('.cstp_2').click(function(e){
    e.preventDefault()
    $(".cdata_2").collapse("show")
    $('.cstp_1').removeClass('active')
    $('.cstp_3').removeClass('active')
    $(this).addClass('active')
})
$('.cstp_3').click(function(e){
    e.preventDefault()
    $(".cdata_3").collapse("show")
    $('.cstp_1').removeClass('active')
    $('.cstp_2').removeClass('active')
    $(this).addClass('active')
})

$('[data-target="#stepOne"], [data-target="#stepFour"], [data-target="#stepTen"]').on('click', function(){
    $('.cstp_2').removeClass('active')
    $('.cstp_3').removeClass('active')
    $('.cstp_1').addClass('active')
})
$('[data-target="#stepTwo"], [data-target="#stepFive"], [data-target="#stepEleven"]').on('click', function(){
    $('.cstp_1').removeClass('active')
    $('.cstp_3').removeClass('active')
    $('.cstp_2').addClass('active')
})
$('[data-target="#stepThree"], [data-target="#stepSix"], [data-target="#stepTwelve"]').on('click', function(){
    $('.cstp_1').removeClass('active')
    $('.cstp_2').removeClass('active')
    $('.cstp_3').addClass('active')
})
