
$(document).ready(function() {
  var b=16;
  var c=b*b;
  for (var a=0; a<c; a++) {
    $('#container').append("<div class='box'></div>");
    }

    $('.box').on('mouseenter',function(){
       $(this).addClass('trail');
    });

});


function askGrid(){

   $('.box,.inner').remove();

  var grid=+prompt("How many squares per side would you like to make the new grid?",16);
  var c=grid*grid;
  for (var a=0; a<c; a++) {
    $('#container').append("<div class='inner'></div>");
    }

    room=640/(grid*1.1);
    border=room*0.05;

    $('.inner').css({
    "width":room+"px",
    "height":room+"px",
    "border-width":border+"px",
    "border-style":"solid",
    "float":"left",
    "margin":"0",
    "border-color":"white"

    })

   $('.inner').on('mouseenter',function(){
     $(this).addClass('trail');
   });

};
