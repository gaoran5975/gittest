

//音乐播放
document.addEventListener('DOMContentLoaded', function () {
   function audioAutoPlay() {
      var audio = document.getElementById('audio');
         audio.play();
      document.addEventListener("WeixinJSBridgeReady",function(){WeixinJSBridge.invoke('getNetworkType',{}, function(e){document.getElementById('audio').play()})},false);
   }
   audioAutoPlay();
});


$('html,body').one('touchstart',function(){
  audio.play();
});

$("#audioPlay").on('click',function(){
  if(audio.paused){
      audio.play();
    $("#audioPlay").addClass('rotate');
  }else{
    audio.pause();
    $("#audioPlay").removeClass('rotate');
  }
});  


// 初始化
$(document).ready(function() {
  function newSwiper() {
    var mySwiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
      direction: 'vertical',
      on: {
        slideChangeTransitionStart: function(event) {
          // console.log(mySwiper.activeIndex);
          var index = mySwiper.activeIndex;

          if(index >= 2 && index < 20) {
            $('.swiper-pagination').show();

          }else{
            $('.swiper-pagination').hide();
          }
        },
        init: function(){
          swiperAnimateCache(this); //隐藏动画元素 
          swiperAnimate(this); //初始化完成开始动画
        }, 
        slideChangeTransitionEnd: function(){ 
          swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        } 
      },
    });
  };

  var arrimg = [ 
    'images/cloud1.png',
    'images/cloud2.png',
    'images/home_bg.jpg',
    'images/home_img1.png',
    'images/home_img2.png',
    'images/icon_active.png',
    'images/intro_bg.jpg',
    'images/intro_cloud1.png',
    'images/intro_cloud2.png',
    'images/intro_text.png',
    'images/line_left.png',
    'images/line_right.png',
    'images/p10_1.png',
    'images/p10_2.png',
    'images/p10_3.png',
    'images/p10_4.png',
    'images/p11_1.png',
    'images/p11_2.png',
    'images/p11_3.png',
    'images/p11_4.png',
    'images/p12_1.png',
    'images/p12_2.png',
    'images/p12_3.png',
    'images/p13_1.png',
    'images/p13_2.png',
    'images/p13_3.png',
    'images/p14_1.png',
    'images/p14_2.png',
    'images/p14_3.png',
    'images/p14_4.png',
    'images/p15_1.png',
    'images/p15_2.png',
    'images/p15_3.png',
    'images/p16_1.png',
    'images/p16_2.png',
    'images/p16_3.png',
    'images/p17_1.png',
    'images/p17_2.png',
    'images/p18_1.png',
    'images/p18_2.png',
    'images/p18_3.png',
    'images/p18_4.png',
    'images/p18_5.png',
    'images/p18_6.png',
    'images/p18_7.png',
    'images/p18_8.png',
    'images/p18_9.png',
    'images/p1_img1.png',
    'images/p1_img2.png',
    'images/p1_img3.png',
    'images/p2_img1.png',
    'images/p2_img2.png',
    'images/p3_img1.png',
    'images/p3_img2_box.png',
    'images/p3_img3.png',
    'images/p3_img4.png',
    'images/p3_img4_2.png',
    'images/p4_img1.png',
    'images/p4_img2.png',
    'images/p5_1.png',
    'images/p5_2.png',
    'images/p5_3.png',
    'images/p5_4.png',
    'images/p6_1.png',
    'images/p6_2.png',
    'images/p6_3.png',
    'images/p6_4.png',
    'images/p6_5.png',
    'images/p7_1.png',
    'images/p7_2.png',
    'images/p7_4.png',
    'images/p8_1.png',
    'images/p8_2.png',
    'images/p8_3.png',
    'images/p9_1.png',
    'images/p9_2.png',
    'images/p9_3.png',
    'images/p9_4.png',
    'images/page_end_1.png',
    'images/page_end_2.png',
    'images/page_end_3.png',
    'images/page_end_4.png',
    'images/page_end_5.png',
    'images/page_end_6.png',
    'images/page_end_7.png',
    'images/page_end_8.png',
    'images/page_end_9.png',
    'images/pe_cloud1.png',
    'images/pe_cloud2.png',
    'images/pe_cloud3.png',
    'images/red_cloud.png',
    'images/red_up.png',
    'images/up.png',
    'images/yanzi.png',
    'images/year2017.png',
    'images/zi.png',
    'images/gate_hand.png',
    'images/gate_img1.png',
    'images/gate_left.png',
    'images/gate_nav.png',
    'images/gate_right.png',
  ];
  var loadNum = 0;
  for (var i = 0; i < arrimg.length; i++) {
    var aImg = document.createElement('img');
    aImg.src = arrimg[i];
    aImg.onload = function() {
      loadNum++;
      // console.log(this);
      // console.log(loadNum*10+'%')
      $('.loadnum').html('加载中...' + (Math.floor((loadNum / arrimg.length) * 100) + '%'));
      // console.log(Math.floor(loadNum/arrimg.length)*100+'%')
      if (loadNum == arrimg.length) {
        // mySwiper.slideNext();
        $('.zindex').fadeOut();
        
      }
    };
  }

  $('.gate_click').on('click', function() {
    $(this).fadeOut();
    $('.gate_left').animate({
      left: '-100%'
    }, 1000);
    $('.gate_right').animate({
      left: '100%'
    }, 1000);
    $('.gate_nav').animate({
      top: '-100%'
    }, 1500)
    newSwiper();
    $(this).parents().removeClass('swiper-no-swiping');
  })


  var vh=$(window).height();
  var vw=$(window).width();
  var imgRatio=750/1334;
  if(vw>vh){
     $('.swiper-container').height(vh);
     $('.swiper-container').width(vh*imgRatio);
  }

  
});