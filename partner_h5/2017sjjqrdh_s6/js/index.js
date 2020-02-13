  var mySwiper = new Swiper ('.swiper-container', {
   direction: 'vertical',
    loop: false,
    freeMode : false,
   mousewheelControl : true,
   onInit: function(swiper){
         swiperAnimateCache(swiper);
         swiperAnimate(swiper);
      },
  onSlideChangeStart: function(swiper){
        swiperAnimate(swiper);
    },
   onSlideChangeEnd: function(swiper){ 
   swiperAnimate(swiper);     
    },
    onTransitionEnd: function(swiper){
         swiperAnimate(swiper);
    },

    watchSlidesProgress: true,
    
       onSetTransition: function(swiper, speed) {
        for (var i = 0; i < swiper.slides.length; i++){
          es = swiper.slides[i].style;
          es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = speed + 'ms';
        }
      }
       })
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