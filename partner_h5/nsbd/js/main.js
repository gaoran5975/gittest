
$(document).ready(function() {
  var arrimg = [
    'images/beijing.png',
    'images/cloud.png',
    'images/hnimg1.png',
    'images/hnimg2.png',
    'images/hnimg3.png',
    'images/hnimg4.png',
    'images/hnimg5.png',
    'images/home_item1.png',
    'images/music.png',
    'images/home_item2.png',
    'images/p2_img3.png',
    'images/p2_img4.png',
    'images/p5-img2.png',
    'images/p2_img5.png',
    'images/paopao1.png',
    'images/sun.png',
    'images/paopao2.png',
    'images/jiantou.png',
    'images/home_title.png',
    'images/text1.png',
    'images/text2.png',
    'images/text3.png',
    'images/text4.png',
    'images/text5.png',
    'images/text6.png',
    'images/text7.png',
    'images/text8.png',
    'images/text9.png',
    'images/text10.png',
    'images/text11.png',
    'images/text12.png',
    'images/tianjin.png',
    'images/tuli.png',
    'images/down.png',
    'images/foot-img1.png',
    'images/bg_bg.jpg',
    'images/hbimg.jpg',
    'images/jiangsu.jpg',
    'images/hn_bg.jpg',
    'images/hn_bg_hover.jpg',
    'images/shandong.jpg',
    'images/p7_tianjin.jpg',
    'images/p7-img1.jpg',
    'images/henan.png',
    'images/p1_img1.jpg',
    'images/p2_img1.jpg',
    'images/p2_img2.jpg',
    'images/p3_img1.jpg',
    'images/p2_img3.jpg',
    'images/p5_img1.jpg',
    'images/hebei.jpg',
    'images/main_img.jpg',
    'images/hb_bg.jpg',
    'images/hb_bg_hover.jpg',
    'images/foot-img2.jpg',
    'images/erweima.jpg',
    'images/bj-text.jpg',
    'images/bj-bg-hover.jpg',

  ];
  var loadNum = 0;
  for (var i = 0; i < arrimg.length; i++) {
    var aImg = document.createElement('img');
    aImg.src = arrimg[i];
    aImg.onload = function() {
      loadNum++;
      // console.log(this);
      // console.log(loadNum*10+'%')
      $('.loadnum').html(Math.floor((loadNum / arrimg.length) * 100) + '%');
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


// 初始�?
$(document).ready(function() {
  var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
      swiperAnimateCache(swiper); //隐藏动画元素 
      swiperAnimate(swiper); //初始化完成开始动�?
    }, 
    onSlideChangeEnd: function(swiper){ 
      swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    } 
  });


  var vh=$(window).height();
  var vw=$(window).width();
  var imgRatio=750/1334;
  if(vw>vh){
     $('.swiper-container').height(vh);
     $('.swiper-container').width(vh*imgRatio);
  }
  $('.p3_box img').css({width: vw});

  // var height = $('#foot_img1').height();
  // console.log(height);
  // $('.p8_box').css({top: height})
  


  var _liClick = $('#mapBox li');
  var showLi = $('.text_box>div')
    
  showLi.eq(0).show();

  $.each(_liClick , function(index, val) {
    val.onclick = function(){
      $(this).siblings('li').removeClass('active');
      $(this).addClass('active');
      showLi.eq(index).siblings().hide();
      showLi.eq(index).show();
    }
      
  });
  
});