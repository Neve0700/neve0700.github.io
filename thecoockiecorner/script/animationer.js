$("#Hem").click(function() {


  $('html, body').animate({
    scrollTop: $("#box1").offset().top - 800
  }, 2000);



});

$("#omoss").click(function() {


  $('html, body').animate({
    scrollTop: $("#box1").offset().top
  }, 2000);



});

$("#recept").click(function() {


  $('html, body').animate({
    scrollTop: $("#box2").offset().top
  }, 2000);



});

$("#alergi").click(function() {


  $('html, body').animate({
    scrollTop: $("#box3").offset().top
  }, 2000);



});
