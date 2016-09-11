// Scrolling Animation \\
$(document).ready(function(){
    $('a.auto-scroll').click(function() {
        $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
        event.preventDefault();
    });
    
    $('a').css('text-decoration', 'none');
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
