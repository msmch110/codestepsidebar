$(function() {
  $('.hbg-menu_box, .back-black-box').on('click', function(){
    // console.log(isAnimated);
    if($('.hbg-menu_box').hasClass("isOpen")) {
      $('.hbg').css({
        'background-color': '#000'
      });
      $('.hbg-middle').css('opacity', 1);
      $('.hbg-top').css({
        'top': '4px',
        'transform': 'translateX(-50%)',
      });
      $('.hbg-bottom').css({
        'bottom': '4px',
        'transform': 'translateX(-50%)',
      });
      $('.sidebar_area_sp').animate({left: '-300px'}, 500);
    } else {
      $.when(
        $('.hbg-middle').css('background-color', '#fff')
      ).done(function(){
        $('.hbg-middle').css('opacity', 0);
      })
      $('.hbg-top').css({
        'background-color': '#fff',
        'top': '50%',
        'transform': 'translateX(-50%) translateY(-50%) rotate(-315deg)',
      });
      $('.hbg-bottom').css({
        'background-color': '#fff',
        'bottom': '50%',
        'transform': 'translateX(-50%) translateY(50%) rotate(315deg)',
      });
      $('.sidebar_area_sp').animate({left: 0}, 500);
    };
    $('.back-black-box').toggle();
    $('.hbg-menu_box').toggleClass("isOpen");
  });
});