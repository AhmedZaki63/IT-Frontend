$(document).ready(function(){
    
    // Scrolling Animation \\
    /*$('a.auto-scroll').click(function() {
        $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1500, 'easeInOutExpo');
        event.preventDefault();
    });*/
    
    $(".navbar").affix({offset: {top: $("#intro-section").outerHeight(true)} });
    $('a').css('text-decoration', 'none');
    
    // Workshop Description Viewr \\
	$('#op').hover(function(){
            $('#text').html('<font color="#dd3333">LEGOOS</font> Welcome to our magic world, the place where you will be helped to get a masterpiece of your personalities lego with a some of our magical spells.');
    }, function(){
        $('#text').html('WORKSHOPS');
    });
    
	$('#op1').hover(function(){
        $('#text').html('<font color="#81d742">SugarRush</font> is to show you guys how an android application works , how to make a great looking android application from scratch and the knowledge necessary to do so , but of course with a touch of fun,the way that COMPASS has always done it');
    }, function(){
        $('#text').html('WORKSHOPS');
    });
    
	$('#op2').hover(function(){
        $('#text').html('<font color="#dd9933">LAYPUZZ</font> A picture is the only way to stop time, it worth a thousand words.stop your time and take your moment make it better and put your own touch on it. in LAYPUZZ workshop, you will get to know how to add you creative touch by using PHOTOSHOP.');
    }, function(){
        $('#text').html('WORKSHOPS');
    });
    
	$('#op3').hover(function(){
        $('#text').html('<font color="#1e73be">PHAROPELL</font> unleash your inner imagination and strong potentials. It’s the right place to discover your brain’s rainbow of thoughts. You’ll experience different shades of professionality mixed with entertainment and uniqueness. Find your star and hunt it!');
    }, function(){
        $('#text').html('WORKSHOPS');
    });
    
	$('#op4').hover(function(){
        $('#text').html('<font color="#8224e3">CLICHE</font> Are You Bored From The Routine? Life Routine, Studying Routine & Thinking Routine? Wait A Second! Routine! What Routine? We Do Not Believe That Routine Exists In Our World So Let’s Replace This Thing With Our Unique Creative Touch. Routine Or Creativity? You Are Your Own Life Controller.');
    }, function(){
        $('#text').html('WORKSHOPS');
    });
    
	$('#op5').hover(function(){
        $('#text').html('<font color="#7c7c7c">2D.NET</font> Web is only the most widely used technology nowadays join us in making contribution to this huge field with our work and designs you will learn all the basics of web design and development while having a good time and enjoying team work and learning in a new way that will make you so eager to learn.');
    }, function(){
        $('#text').html('WORKSHOPS');
    });
    
    // News Tab \\
    $('.close').click(function(){
        $('.news-background').hide(300);
    })
    $('#blog .news-list .block').click(function(){
        $('.news-background').show(300);
    })
    
    // Slick Animation \\
    $('.single').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true
    });   
    
    $('[data-toggle="popover"]').popover();
    /*
    $('#text').fadeOut(300, function() {
        $('#text').parent().css('background-color', '#dd3333').fadeIn(300);
    });
    */
});

//////////////////////////////////////////////////////////

$(document).ready(function() {
    $(".gear").click(function(){
        
        $(".option-color").fadeToggle();
        var x = $(".option-color ul li");
        x.eq(0).css("background","#09c");
        x.eq(1).css("background","#3F6");
        x.eq(2).css("background","#F30");
        x.eq(3).css("background","#999");
        x.eq(4).css("background","#ccc");

        x.click(function(){
            $(".change").css("background",$(this).css("background"))
        })
    })
    
    /*$("#loading .spinner").fadeOut(2000, function(){
		$(this).parent().fadeOut(2000);
    });*/
});

/////////////////////////////////////////////////////////

$(document).ready(function() {
    $(".box_skitter_large").skitter({
	  
        auto_play: false ,
	    interval: 3000   
    });
});

/////////////////////////////////////////////////////////

$(document).ready(function() {
  
    var work_offset=$("#work").offset().top // 600
        $(window).scroll( function(){
		
        var pos =$(window).scrollTop();

        if(pos>=work_offset){	
            $(".navbar-default").css("background-color","rgba(102,102,102,0.7)");
        }

        else{
            $(".navbar-default").css("background-color","transparent");
        }
	});
});

/////////////////////////////////////////////////////////

$(document).ready(function() {  
    $("html").niceScroll();
	
	$("#overlay .spinner").fadeOut(5000 , function(){ 
        $("#overlay").fadeOut(2000) 
    });	
});
