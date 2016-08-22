// var burger = document.getElementById("burger-button");

// function close_menu(){
//     document.body.classList.toggle("open");
//     burger.classList.toggle("open");
// }



// var burger = document.getElementById("burger-button");

// burger.addEventListener("click", function (e) {
//     e.preventDefault();
//     close_menu();
// });





/***************************  SMOOTH SCROLL **************************/

// http://www.abeautifulsite.net/smoothly-scroll-to-an-element-without-a-jquery-plugin-2/


$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});




/****************** SHADE AND LAPTOP ANGLE *********************/

function shade1(){
    
    var s_width = $("#top").width();
    var s_height = $("#lapTitWrap").height() + $("#aboutHere").height() + 50;
    
    var c = document.getElementById("canvasShade1");
    var context = c.getContext("2d");
    
    $("#canvasShade1").attr({width:s_width, height:s_height});
    $("#canvasShade1").css({width: "s_width"+"px", height: "s_height"+"px"}); 
    
     // Draw a path
    context.beginPath();
    context.moveTo(0,0);   // Top Corner
    context.lineTo(s_width, s_height);  // Bottom Right
    context.lineTo(0, s_height);  // Bottom Left
    context.closePath();

    // Fill the path
    context.fillStyle = "#000";
    context.fill(); 

}


function shade2(){
    
    var s_width = $("#top").width();
    var half_width = s_width/2;
    var top_height = $("#lapTitWrap").height() + $("#aboutHere").height() + 50;
    var s_height = $("#codeHere").height() + 280 + $(".cta").height();
    /*  250 is 200 for padding on #codeHere and 50 margin on callToAction */
    
    
    var c = document.getElementById("canvasShade2");
    var context = c.getContext("2d");
    
    $("#canvasShade2").attr({width:s_width, height:s_height});
    $("#canvasShade2").css({width: "s_width"+"px", height: "s_height"+"px", top:"top_height"+"px"}); 
    
     // Draw a path
    context.beginPath();
    context.moveTo(s_width,0);   // Top Corner
    context.lineTo(half_width, s_height);  // Bottom Right
    context.lineTo(s_width, s_height);  // Bottom Left
    context.closePath();

    // Fill the path
    context.fillStyle = "#000";
    context.fill(); 
    
}




window.onload = shade1();
window.onload = shade2();

$(window).resize(function() {

    shade1();
     shade2();
    

});