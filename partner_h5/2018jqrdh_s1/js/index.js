  var flag=0;
  var flag2=0;
  var mySwiper = new Swiper ('.swiper-container', {
   direction: 'vertical',
    loop: true,
    freeMode : false,
   mousewheelControl : true,
   onInit: function(swiper){
         swiperAnimateCache(swiper);
         swiperAnimate(swiper);
          $('.p1_5').addClass('imgfade1');
          $('.kq').addClass('imgfade2');  
      },
  onSlideChangeStart: function(swiper){
        swiperAnimate(swiper);
        var slideInx  = $('.swiper-slide-active').attr('data-swiper-slide-index');
        console.log(slideInx,swiper.activeIndex)
        if(swiper.activeIndex==1 || slideInx ==10){
                console.log(0)
                $('.p1_5').addClass('imgfade1');
                $('.kq').addClass('imgfade2');  
        }
        else{
              $('.p1_5').removeClass('imgfade1');
              $('.kq').removeClass('imgfade2');   
        }
    },
   onSlideChangeEnd: function(swiper){        
    },
    onTransitionEnd: function(swiper){
    },

    watchSlidesProgress: true,
    
       onSetTransition: function(swiper, speed) {
        for (var i = 0; i < swiper.slides.length; i++){
          es = swiper.slides[i].style;
          es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = speed + 'ms';
        }
      }
       })
function hideImg(){
          // $('.qcjd').removeClass('zoomOut');
          //     $('#logo').removeClass('zoomOut');
          //     $('#kuang').removeClass('zoomOut');
          //     $('#zyk').css({'opacity':"0"});
          //     $('#circle').removeClass('rotate').hide();
          //     $("#shwoimg").hide();
          //      $("#smallkuangwz").attr({
          //              'src':'css/img/page1_time.png'
          //           }); 
}
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
