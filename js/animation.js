$(function(){
  $('body').css('background-color', '#ffffff');
  setTimeout(() => {
    $('#logo').css('opacity', 1);
    $('nav > a').css('opacity', 1);
    $('#about').css('opacity', 1);
    $('#main-visual').css('width', '100%');
    $('#works').css('opacity', 1);
    $('#about > h2').css('margin-right', 0);
    $('#works > h2').css('margin-left', 0);
  }, 1000);
});