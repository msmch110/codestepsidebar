$(function() {
  $('.scroll-top').on('click', function(){
    $('html, body').animate({scrollTop:0}, 500)
  })
  $(window).scroll(function(){
    let scroll = $(this).scrollTop();
    if(scroll < 900) {
      $('.scroll-top').fadeOut();
    } else {
      $('.scroll-top').fadeIn();
    }
  })
});