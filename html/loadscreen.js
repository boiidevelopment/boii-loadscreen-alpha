//------------------------------\\
//---\\ BOII | DEVELOPMENT //---\\
//------------------------------\\

$(document).ready(function(){
    window.addEventListener('mousemove', function(e) {
		cursor.style.left = e.clientX + "px"; 
    	cursor.style.top = e.clientY + "px";
	});
    $('audio').prop("volume", 0.2);
    $('video').prop("volume", 0.2);
    $(".content-btn1").click(function(){
        $("#news-container").fadeOut();
        $("#rules-container").fadeOut();
        $("#staff-container").fadeOut();
        $("#trailer-container").fadeOut();
    });
    $(".content-btn2").click(function(){
        $("#rules-container").fadeOut();
        $("#staff-container").fadeOut();
        $("#trailer-container").fadeOut();
        $('#news-container').removeClass('hidden');
        $("#news-container").fadeIn();
    });
    $(".content-btn3").click(function(){
        $("#news-container").fadeOut();
        $("#staff-container").fadeOut();
        $("#trailer-container").fadeOut();
        $('#rules-container').removeClass('hidden');
        $("#rules-container").fadeIn();
    });
    $(".content-btn4").click(function(){
        $("#news-container").fadeOut();
        $("#rules-container").fadeOut();
        $("#trailer-container").fadeOut();
        $('#staff-container').removeClass('hidden');
        $("#staff-container").fadeIn();
    });
    $(".content-btn5").click(function(){
        $("#news-container").fadeOut();
        $("#rules-container").fadeOut();
        $("#staff-container").fadeOut();
        $('#trailer-container').removeClass('hidden');
        $("#trailer-container").fadeIn();
    });
});
