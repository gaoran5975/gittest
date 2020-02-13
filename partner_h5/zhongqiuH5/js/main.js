
$(document).ready(function() {
  var arrimg = [
    'images/bg.jpg',
    'images/bg2.jpg',
    'images/btn1.png',
    'images/btn2.png',
    'images/btn3.png',
    'images/btn4.png',
    'images/btn5.png',
    'images/circle.png',
    'images/circle2.png',
    'images/circle3.png',
    'images/circle4.png',
    'images/circle5.png',
    'images/cloud1.png',
    'images/cloud2.png',
    'images/cloud3.png',
    'images/jia.png',
    'images/lantern.png',
    'images/light1.png',
    'images/light2.png',
    'images/p1-text.png',
    'images/p2-text1.png',
    'images/p2-text2.png',
    'images/p3-text1.png',
    'images/p3-text2.png',
    'images/p3-text3.png',
    'images/p3-text4.png',
    'images/p3-text5.png',
    'images/p4-text1.png',
    'images/p4-text2.png',
    'images/p5-text1.png',
    'images/p5-text2.png',
    'images/p5-text3.png',
    'images/p6-text1.png',
    'images/p6-text2.png',
    'images/p6-text3.png',
    'images/rabbit.png',
    'images/rabbit2.png',
    'images/text-1.png',
    'images/yue.png',
    'images/main_img.jpg',
    'images/down.png',
    'images/return.png',

  ];
  var loadNum = 0;
  for (var i = 0; i < arrimg.length; i++) {
    var aImg = document.createElement('img');
    aImg.src = arrimg[i];
    aImg.onload = function() {
      loadNum++;
      // console.log(this);
      // console.log(loadNum*10+'%')
      $('.loadnum').html('加载中...  ' + Math.floor((loadNum / arrimg.length) * 100) + '%');
      // console.log(Math.floor(loadNum/arrimg.length)*100+'%')
      if (loadNum == arrimg.length) {
        $('.zindex').css('display', 'none');
      }
    };
  }
});

//音乐播放
document.addEventListener('DOMContentLoaded', function () {
   function audioAutoPlay() {
      var audio = document.getElementById('audio');
         audio.play();
      document.addEventListener("WeixinJSBridgeReady",function(){WeixinJSBridge.invoke('getNetworkType',{}, function(e){document.getElementById('audio').play()})},false);
   }
   audioAutoPlay();
});


$('html,body').one('click',function(){
   audio.play();
});


// 初始化
$(document).ready(function() {
  var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: '.swiper-pagination',
    mousewheelControl: true,
    autoplayDisableOnInteraction : false,
    onInit: function(swiper) {
      swiperAnimateCache(swiper);
      swiperAnimate(swiper);
    },
    onSlideChangeEnd: function(swiper) {
      swiperAnimate(swiper);
    },
    onTransitionEnd: function(swiper) {
      swiperAnimate(swiper);
    }
  });


  var vh=$(window).height();
  var vw=$(window).width();
  var imgRatio=750/1334;
  if(vw>vh){
     $('.swiper-container').height(vh);
     $('.swiper-container').width(vh*imgRatio);
  }


$('.btn1').click(function(){
     $('.p1').after($('.p2'));
    mySwiper.slideTo(2, 500, true);
    $('.p2').removeClass('swiper-slide-prev');
    $('.p2').addClass('swiper-slide-active');
    $('.p2').siblings().removeClass('swiper-slide-active');
  });

  $('.btn2').click(function(){
    $('.p1').after($('.p3'));
    mySwiper.slideTo(2, 500, true);
    $('.p3').removeClass('swiper-slide-prev');
    $('.p3').addClass('swiper-slide-active');
    $('.p3').siblings().removeClass('swiper-slide-active');
  });

  $('.btn3').click(function(){
    $('.p1').after($('.p4'));
    mySwiper.slideTo(2, 500, true);
    $('.p4').removeClass('swiper-slide-prev');
    $('.p4').addClass('swiper-slide-active');
    $('.p4').siblings().removeClass('swiper-slide-active');
  });

  $('.btn4').click(function(){
    $('.p1').after($('.p5'));
    mySwiper.slideTo(2, 500, true);
    $('.p5').removeClass('swiper-slide-prev');
    $('.p5').addClass('swiper-slide-active');
    $('.p5').siblings().removeClass('swiper-slide-active');
  });

  $('.btn5').click(function(){
    $('.p1').after($('.p6'));
    mySwiper.slideTo(2, 500, true);
    $('.p6').removeClass('swiper-slide-prev');
    $('.p6').addClass('swiper-slide-active');
    $('.p6').siblings().removeClass('swiper-slide-active');
  });

  $('.return').click(function(){
    mySwiper.slideTo(1, 500, true);
    $('.p1 .p1-text').css('opacity', 1);
    $('.p1').removeClass('swiper-slide-active');
  });
  
});