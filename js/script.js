$(document).ready(function () {

    // Scrolling Animation \\
    $('a.auto-scroll').click(function (e) {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        e.preventDefault();
    });

    $(".navbar").affix({
        offset: {
            top: $("#intro").outerHeight(true)
        }
    });
    $('a').css('text-decoration', 'none');

    // Workshop Description Viewr \\
    $('#op').hover(function () {
        $('#workshop_text').html('<font color="#dd3333">LEGOOS</font> Welcome to our magic world, the place where you will be helped to get a masterpiece of your personalities lego with a some of our magical spells.');
    }, function () {
        $('#workshop_text').html('WORKSHOPS');
    });

    $('#op1').hover(function () {
        $('#workshop_text').html('<font color="#81d742">SugarRush</font> is to show you guys how an android application works , how to make a great looking android application from scratch and the knowledge necessary to do so , but of course with a touch of fun,the way that COMPASS has always done it');
    }, function () {
        $('#workshop_text').html('WORKSHOPS');
    });

    $('#op2').hover(function () {
        $('#workshop_text').html('<font color="#dd9933">LAYPUZZ</font> A picture is the only way to stop time, it worth a thousand words.stop your time and take your moment make it better and put your own touch on it. in LAYPUZZ workshop, you will get to know how to add you creative touch by using PHOTOSHOP.');
    }, function () {
        $('#workshop_text').html('WORKSHOPS');
    });

    $('#op3').hover(function () {
        $('#workshop_text').html('<font color="#1e73be">PHAROPELL</font> unleash your inner imagination and strong potentials. It’s the right place to discover your brain’s rainbow of thoughts. You’ll experience different shades of professionality mixed with entertainment and uniqueness. Find your star and hunt it!');
    }, function () {
        $('#workshop_text').html('WORKSHOPS');
    });

    $('#op4').hover(function () {
        $('#workshop_text').html('<font color="#8224e3">CLICHE</font> Are You Bored From The Routine? Life Routine, Studying Routine & Thinking Routine? Wait A Second! Routine! What Routine? We Do Not Believe That Routine Exists In Our World So Let’s Replace This Thing With Our Unique Creative Touch. Routine Or Creativity? You Are Your Own Life Controller.');
    }, function () {
        $('#workshop_text').html('WORKSHOPS');
    });

    $('#op5').hover(function () {
        $('#workshop_text').html('<font color="#7c7c7c">2D.NET</font> Web is only the most widely used technology nowadays join us in making contribution to this huge field with our work and designs you will learn all the basics of web design and development while having a good time and enjoying team work and learning in a new way that will make you so eager to learn.');
    }, function () {
        $('#workshop_text').html('WORKSHOPS');
    });

    // News Tab \\
    $('.close').click(function () {
        $('.news-background').hide(200);
    });

    $('#blog .news-list .news').click(function (e) {
        $('.news-background').show(200);
        var title = $(this).find('h3').text();
        var img = $(this).find('img').attr('src');
        var des = $(this).find('p').text();
        $('.news-tab h1').text(title);
        $('.news-tab img').attr('src', img);
        $('.news-tab h4').text(des);
    });
    $(document).mouseup(function (e) {
        if (!$(".news-tab").is(e.target) && $(".news-tab").has(e.target).length === 0)
            $('.news-background').hide(200);
    });

    // Slick Animation \\
    $('.news-list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
                        },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
                        }
                    ]
    });

    $('[data-toggle="popover"]').popover();
    /*
    $('#text').fadeOut(300, function() {
        $('#text').parent().css('background-color', '#dd3333').fadeIn(300);
    });
    */
});

//////////////////////////////////////////////////////////////////////////////
$("#about .a").click(function () {
    $("#about .x").addClass("select")
    $("#about .y").removeClass("select");
    $("#about .z").removeClass("select");
    $("#about .a").css("background-color", "#e7e7e7");
    $("#about .b").css("background-color", "#fff");
    $("#about .c").css("background-color", "#fff");
});
$("#about .b").click(function () {
    $("#about .y").addClass("select")
    $("#about .x").removeClass("select");
    $("#about .z").removeClass("select");
    $("#about .b").css("background-color", "#e7e7e7");
    $("#about .a").css("background-color", "#fff");
    $("#about .c").css("background-color", "#fff");
});
$("#about .c").click(function () {

    $("#about .z").addClass("select")
    $("#about .y").removeClass("select");
    $("#about .x").removeClass("select");
    $("#about .c").css("background-color", "#e7e7e7");
    $("#about .a").css("background-color", "#fff");
    $("#about .b").css("background-color", "#fff");

});
