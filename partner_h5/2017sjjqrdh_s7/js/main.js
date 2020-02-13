// $(document).ready(function() {
//    var arrimg = [
//       'images/ball.png',
//       'images/home_bg.jpg',
//       'images/logo.png',
//       'images/p1-img1.png',
//       'images/p1-img2.png',
//       'images/p1-line1.png',
//       'images/p1-line2.png',
//       'images/p1-line3.png',
//       'images/p2_bg.jpg',
//       'images/p3_bg.jpg',
//       'images/p4_bg.jpg',
//       'images/p2-img1.png',
//       'images/p3-img1.jpg',
//       'images/p3-img2.png',
//       'images/p4-img1.png',
//       'images/p5-img1.png',
//       'images/p6-img1.png',
//       'images/p7-img1.png',
//       'images/p8-img1.png',
//       'images/p6-img2.png',
//       'images/p6-img3.png',
//       'images/p6-img4.png',
//       'images/p6-img5.png',
//    ];
//    var loadNum = 0;
//    for (var i = 0; i < arrimg.length; i++) {
//       var aImg = document.createElement('img');
//       aImg.src = arrimg[i];
//       aImg.onload = function() {
//          loadNum++;
//          // console.log(this);
//          // console.log(loadNum*10+'%')
//          $('.loadnum').html(Math.floor((loadNum / arrimg.length) * 100) + '%');
//          // console.log(Math.floor(loadNum/arrimg.length)*100+'%')
//          if (loadNum == arrimg.length) {
//             $('.zindex').css('display', 'none');
//          }
//       };
//    }
// });

//音乐播放按钮
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

var vh=$(window).height();
var vw=$(window).width();
var imgRatio=750/1334;
if(vw>vh){
   $('.swiper-container').height(vh);
   $('.swiper-container').width(vh*imgRatio);
}





$('.p1-line3').width(vw);






// 初始化
$(document).ready(function() {
   var mySwiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      pagination: '.swiper-pagination',
      mousewheelControl: true,
      onInit: function(swiper) {
         swiperAnimateCache(swiper);
         swiperAnimate(swiper);
      },
      onSlideChangeEnd: function(swiper) {
         swiperAnimate(swiper);
      },
      onTransitionEnd: function(swiper) {
         swiperAnimate(swiper);
      },
      onTransitionStart:function(swiper){
         swiperAnimate(swiper);
         
      },

      onSlideChangeStart: function(swiper){
         swiperAnimate(swiper);
         
      }

   });
});