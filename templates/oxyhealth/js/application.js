var height, width;
var main_slider;
var position;
var slide;
var white_bg_position;
var model_slide;

function drag() {

    $('.drag').each(function () {
        var rndT = getRandomInt(-5, 5);
        var rndL = getRandomInt(-5, 5);
        $(this).css({y: rndT + 'px'});
        $(this).css({x: rndL + 'px'});

    });

    setTimeout(function () {
        drag();
    }, 500);

}

function autopad(h) {
    if (h > 650) {
        var pad = (h - 650) / 2;
        //$('.slide2wrapper, .slide3wrapper, #slide5 .titleB, #slide4, #slide6').css('padding-top',pad + 'px');
        $('#slide5').css('background-position-y', pad + 'px');
        //$('#comps').css('bottom','100px');
    }
    ;
}

function fio() {

    $('#playbuttonmain').fadeOut(750).fadeIn(750);
    setTimeout(function () {
        fio();
    }, 500);

}
$(document).ready(function () {
    $('.fancybox').fancybox({
        helpers: {
            title: {
                type: 'inside'
            }
        }
    });
});
$(document).ready(function () {

    $('.application .input > span').click(function () {
        $(this).next('input').focus();
    });
    $('.applbuy2').click(function () {
        var name = $('#nameinput2').val();
        var phone = $('#phoneinput2').val();

        if (name == '' || phone == '') {
            alert('Поля ИМЯ и ТЕЛЕФОН обязательны для заполнения.');
            return false;
        }
        ;
        $.post('/ajax.php?action=feedback', {
            name: name,
            phone: phone
        }, function () {
            alert('Ваша заявка успешно отправлена. В ближайшее время с вами свяжется наш менеджер!');
            $.fancybox.close();
            ga('send', 'event', 'buy', 'buy');
            yaCounter27413060.reachGoal('buy');
        });

    });
    $('.applbuy').click(function () {
        var name = $('#nameinput').val();
        var phone = $('#phoneinput').val();

        if (name == '' || phone == '') {
            alert('Поля ИМЯ и ТЕЛЕФОН обязательны для заполнения.');
            return false;
        }
        ;
        $.post('/ajax.php?action=feedback', {
            name: name,
            phone: phone
        }, function () {
            alert('Ваша заявка успешно отправлена. В ближайшее время с вами свяжется наш менеджер!');
            $.fancybox.close();
            ga('send', 'event', 'buy', 'buy');
            yaCounter27413060.reachGoal('buy');
        });

    });
    $('.applbuyi').click(function () {
        var name = $('#namei').val();
        var email = $('#emaili').val();
        var mes = $('#mesi').val();

        if (name == '' || email == '' || name == 'Имя:' || email == 'E-mail:') {
            alert('Поля ИМЯ и EMAIl обязательны для заполнения.');
            return false;
        }
        ;
        $.post('/ajax.php?action=mess', {
            name: name,
            email: email,
            mes: mes
        }, function () {
            alert('Ваше сообщение успешно отправлено. В ближайшее время с Вами свяжется наш менеджер!');
            $.fancybox.close();
            ga('send', 'event', 'buy', 'buy');
            yaCounter27413060.reachGoal('buy');
        });

    });
    $('.applbuy3').click(function () {
        var name = $('#nameinput3').val();
        var phone = $('#phoneinput3').val();

        if (name == '' || phone == '') {
            alert('Поля ИМЯ и ТЕЛЕФОН обязательны для заполнения.');
            return false;
        }
        ;
        $.post('/ajax.php?action=feedback', {
            name: name,
            phone: phone
        }, function () {
            alert('Ваша заявка успешно отправлена. В ближайшее время с вами свяжется наш менеджер!');
            $.fancybox.close();
            ga('send', 'event', 'buy', 'buy');
            yaCounter27413060.reachGoal('buy');
        });

    });

    $('#phoneinput, #phoneinput2, #phoneinput3').mask("+7 (999) 999 - 99 - 99");

    $('.margin').each(function () {
        var fh = $(window).height() - 100;
        if (fh > $(this).data('height')) {
            $(this).css('padding-top', (fh - $(this).data('height')) / 2 + 'px');
        }
        ;
    });

    $('#ellipse ul li').click(function () {
        $('.ali').removeClass('ali');
        $(this).addClass('ali');

        $('#menu_arrow').css('top', $(this).data('top'));
        $('#menu_arrow').css('height', $(this).data('height'));
        $('#menu_arrow').css('border-top', $(this).data('btop') + 'px dashed #304f92');
        $('#menu_arrow').css('border-bottom', $(this).data('bbottom') + 'px dashed #304f92');

        $('.morelink').attr('href', $(this).data('link'));

        $('.parallax').fadeOut(300);
        $('#' + $(this).data('type')).fadeIn(300);

        $('.veltitle').text($(this).text());
        $('.pp').html($(this).data('text'));

    });

    $(document).mousemove(function (e) {

        $('.lep, .tab, .list, .ball').each(function () {

            $(this).css({y: (e.pageY - height / 2) / 10 * $(this).data('coef') + 'px'});
            $(this).css({x: (e.pageX - width / 2) / 10 * $(this).data('coef') + 'px'});

        });

    });

    height = $(window).height();
    width = $(window).width();

    //$('body').css('height', height);
    //$('body').css('width', width);
    //$('body').css('overflow', 'hidden');

    autopad(height - 80);

    position = 0;
    white_bg_position = 0;
    slide = 0;
    var padding =
        $('.content, .slide, .main_wrapper, .slide2wrapper').css('height', (height - 80) + 'px');
    $('.content, .slide, .main_wrapper, .slide2wrapper').css('max-height', (height - 80) + 'px');
    $('#forma').css('height', (height - 200) + 'px');
    $('#forma').css('width', (height - 150) + 'px');
    $('.content2').css('min-height', (height - 80) + 'px');

    main_slider = $('.slider').bxSlider({
        mode: 'vertical',
        speed: 500
    });

    var newsslider = $('.newsslider').bxSlider({
        mode: 'horizontal',
        pager: false
    });
    var newssliderin = $('.newssliderin').bxSlider({
        mode: 'horizontal',
        pager: false,
        slideWidth: '1000'
    });


    $('.n1').click(function () {
        newssliderin.goToPrevSlide();
    });
    $('.r1').click(function () {
        newssliderin.goToNextSlide();
    });

    $('#navleft').click(function () {
        newsslider.goToPrevSlide();
    });
    $('#navright').click(function () {
        newsslider.goToNextSlide();
    });

    var rec = $('.wrapper875 ul').bxSlider({
        mode: 'fade',
        pager: false,
        infiniteLoop: true
    });

    $('.left_rec').click(function () {
        rec.goToPrevSlide();
    });

    $('.right_rec').click(function () {
        rec.goToNextSlide();
    });

    var product = $('.product').bxSlider({
        mode: 'fade',
        pager: false,
        speed: 500
    });

    drag();
    fio();
    setTimeout(function () {
        drag();
    }, 500);


    //TODO поправить скролл !
    $('#scroll').click(function () {
        if (slide > 5 && slide < 6) {
            //no
        }
        else {
            slide = $('#index').data('index');
        }
        ;
        if (slide == 5) {//do first
            console.log(slide);
            $('.tohide').css('opacity', '0');
            $('.main_slide4 img').css({x: '617px'});
            $('#right_part_4').css('opacity', '0');
            $('#left_part_4').css('opacity', '1');
            $('#slide4bg').css({x: '600px'});
            position = 16;
            slide = 5.5;
            return true;
        }
        ;
        if (position > 15 && slide == 5.5) {//do first
            console.log(slide);
            $('.main_slide4 img').css({x: '-640px'});
            $('#slide4bg').css({x: '-600px'});
            $('#right_part_4').css('opacity', '1');
            $('#left_part_4').css('opacity', '0');
            position = 26;
            slide = 5.7;
            return true;
        }
        ;
        if (position > 25 && slide == 5.7) {//do first
            console.log(slide);
            slide = 6;
            $('.main_slide4 img').css({x: '0px'});
            $('.tohide').css('opacity', '1');
            $('#slide4bg').css({x: '0px'});
            $('#right_part_4').css('opacity', '0');
            $('#left_part_4').css('opacity', '0');
            main_slider.goToNextSlide();
            position = 0;
            return true;
        }
        ;

        if (slide < 5 || slide >= 6) {
            main_slider.goToNextSlide();
            position = 0;
        }
        ;

    });

    $('#scrollup').click(function () {
        main_slider.goToSlide(0);
        position = 0;
    });

    $('.more.button').click(function () {
        $('#scroll').fadeOut(300);

        $('.info_menu').fadeOut(300);
        product.goToSlide($(this).data('prod'));
    });

    $('.backbutton').click(function () {
        $('.info_menu').fadeIn(300);
        product.goToSlide(model_slide);
        $('#scroll').fadeIn(300);
    });

    model_slide = 0;

    $('.another_model').click(function () {
        $('.activeAM').removeClass('activeAM');
        $(this).addClass('activeAM');
        product.goToSlide($(this).data('model'));

        model_slide = $(this).data('model');

    });

    if (document.location.pathname == '/') {

        $(document).on('mousewheel DOMMouseScroll', function (e) {
            e.preventDefault();

            if ((e.originalEvent.wheelDelta / 350 > 0) || (-(40 * e.originalEvent.deltaY) / 350 > 0)) {
                position -= 6;
                white_bg_position -= 6;
            } else {
                position += 6;
                white_bg_position += 6;
            }

            slide = $('#index').data('index');

            if (slide == 0) {
                $('.bx-pager-item a').css('color', 'white');
            } else {
                $('.bx-pager-item a').css('color', '#40434f');
            }

            $('.white_bg').css('top', (-white_bg_position * 0) + 'px');

            if (position > 5 && slide == 5) {//do first
                $('.tohide').css('opacity', '0');
                $('.main_slide4 img').css({x: '617px'});
                $('#right_part_4').css('opacity', '0');
                $('#left_part_4').css('opacity', '1');
                $('#slide4bg').css({x: '600px'});
            }
            ;
            if (position > 15 && slide == 5) {//do first
                $('.main_slide4 img').css({x: '-640px'});
                $('#slide4bg').css({x: '-600px'});
                $('#right_part_4').css('opacity', '1');
                $('#left_part_4').css('opacity', '0');
            }
            ;
            if (position > 25 && slide == 5) {//do first
                slide = 5.1;
                $('.main_slide4 img').css({x: '0px'});
                $('.tohide').css('opacity', '1');
                $('#slide4bg').css({x: '0px'});
                $('#right_part_4').css('opacity', '0');
                $('#left_part_4').css('opacity', '0');
            }
            ;

            if (position > 5 && slide != 5) {
                main_slider.goToNextSlide();
                position = 0;
                slide++;
                $('#right_part_4').css('opacity', '0');
                $('#left_part_4').css('opacity', '0');
            }
            ;

            if (position < -5) {
                main_slider.goToPrevSlide();
                position = 0;
                slide++;
                $('.main_slide4 img').css({x: '0px'});
                $('.tohide').css('opacity', '1');
                $('#slide4bg').css({x: '0px'});
                $('#right_part_4').css('opacity', '0');
                $('#left_part_4').css('opacity', '0');
            }
            ;

        });

    }

    var pager_i = 0;
    $('.bx-has-pager').each(function () {
        $(this).addClass('pager_' + pager_i);
        pager_i++;
    });

    $('.pager_0').css('top', (height - 230) / 2 + 'px');


    $('.menu-adaptive__toggle').on('click', function(e) {
        var sibling = e.currentTarget.nextElementSibling;

        if (! sibling.classList.contains('menu-adaptive__show')) {
            sibling.classList.add('menu-adaptive__show');
        } else {
            sibling.classList.remove('menu-adaptive__show');
        }

    });
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}