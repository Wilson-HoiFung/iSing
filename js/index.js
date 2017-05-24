$(document).ready(function() {

  $(".like").click(function() {
    $(".like").toggleClass('animate_heart');
    $(".hidden").toggleClass('animate_shown');
    $(".shown").toggleClass('animate_hidden');
  });
    
});