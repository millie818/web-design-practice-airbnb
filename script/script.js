$(document).ready(function() {
  // Top背景画像のスライダー
  $('.top_slider').bgSwitcher({
    images: ['../images/header-top-image.png','../images/bedroom-image.png','../images/room-image.png'],
    Interval: 5000, 
      start: true, 
      loop: true, 
      shuffle: false, 
      effect: "fade", 
      duration: 1000, 
      easing: "swing", 
    });

  // よくあるご質問スライドトグル
  $('.q_box').click( function(){
    $(this).next().slideToggle(300);
  });

  // メニュースムーズスクロール
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
    });
});