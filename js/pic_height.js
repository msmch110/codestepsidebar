$(function() {
  let pjtWidth = $('.pjt_item').css('width');
  console.log(pjtWidth);
  let pjtHeight = calc(pjtWidth - 100);
  console.log(pjtHeight);
  $('.pjt_item').css('height', pjtHeight);
});