  var flag=0;
  var flag2=0;
  var mySwiper = new Swiper ('.swiper-container', {
   direction: 'vertical',
    loop: false,
    freeMode : false,
  //virtualTranslate : true,
   mousewheelControl : true,
   onInit: function(swiper){
         swiperAnimateCache(swiper);
         swiperAnimate(swiper);
         showImg();
      },
  onSlideChangeStart: function(swiper){
        swiperAnimate(swiper);
        if(swiper.activeIndex==0){
                $('#zyk').removeClass('zoomIn');
                showImg();
        }
        else if(flag==1 && swiper.activeIndex!=0){
              clearTimeout(a);
              clearTimeout(b);
              clearTimeout(c);
              hideImg();
              flag=0;
        }
        else{
          return;
        }
    },
   onSlideChangeEnd: function(swiper){
       //  swiperAnimate(swiper);
       // $('#zyk').removeClass('zoomIn');
        
    },
    onTransitionEnd: function(swiper){
        // swiperAnimate(swiper);
    },

    watchSlidesProgress: true,
    
       onSetTransition: function(swiper, speed) {
        for (var i = 0; i < swiper.slides.length; i++){
          es = swiper.slides[i].style;
          es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = speed + 'ms';
        }
      }
       })
function showImg(){
              a=setTimeout(function (){
              $('.qcjd').addClass('zoomOut');
              $('#logo').addClass('zoomOut');
              $('#kuang').addClass('zoomOut');
              $('#zyk').removeClass('zoomIn').hide();
           },5000);
          b=setTimeout(function(){
              $('#smallkuangwz').animate({
                  'top':'12%'
                 },1000);
                $('#smallkuang').animate({
                  'top':'10%'
                 },1000,function(){
                      $("#smallkuangwz").attr({
                       'src':'css/img/page1_qcjd.png'
                    }); 
                  }); 
             },6000);
          c=setTimeout(function(){
              $('#circle').addClass('rotate').show();
              $("#shwoimg").show();
          },7500);
          flag=1;
}
function hideImg(){
          $('.qcjd').removeClass('zoomOut');
              $('#logo').removeClass('zoomOut');
              $('#kuang').removeClass('zoomOut');
              $('#zyk').css({'opacity':"0"});
              $('#circle').removeClass('rotate').hide();
              $("#shwoimg").hide();
               $("#smallkuangwz").attr({
                       'src':'css/img/page1_time.png'
                    }); 
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