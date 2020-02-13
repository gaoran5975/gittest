  var time1=null,time2=null;var flag =true; 
  var mySwiper = new Swiper ('.swiper-container', {
   direction: 'vertical',
    loop: false,
    freeMode : false,
   mousewheelControl : false,
   nextButton:'.swiper-button-next',
   onInit: function(swiper){
         swiperAnimateCache(swiper);
         swiperAnimate(swiper);
          time1 = setTimeout(function(){
                $('.p0_2').addClass('rotateNW');  
          },1000);
          time2 = setTimeout(function(){
                $('.p0_5').addClass('pulse');  
          },3000);
      },
  onSlideChangeStart: function(swiper){
        swiperAnimate(swiper);
        flag = true;
        if(swiper.activeIndex==0){
             time1 = setTimeout(function(){
                $('.p0_2').addClass('rotateNW');  
          },1000);
             time2 = setTimeout(function(){
                $('.p0_5').addClass('pulse');  
          },3000); 
        }
        else{
             clearTimeout(time1);
              clearTimeout(time2) 
              $('.p0_2').removeClass('rotateNW');  
              $('.p0_5').removeClass('pulse'); 
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
 
$('.dt ul li').click(function(){
     if(flag){
          var self = $(this);
          if(self.hasClass('right')){
               }
          else{
              self.parent().children('li').each(function(item){
                  if($(this).hasClass('right')){
                      $(this).addClass('colorChange');   
                      $(this).find('.bgcolor').show();
                  }
              })
          }  
          self.addClass('colorChange');   
          self.find('.bgcolor').show();
     }
     flag = false;
     $(this).parent().parent().parent().find('.swiper-button-next').show();
})
$('#fenxiang').click(function(){
    $('.p11_3').show();
    $('.fxpage').show();
})
$('.p11_3,.fxpage').click(function(){
      $('.p11_3,.fxpage').hide();
})  
$('#again').click(function(){
    window.location.reload();
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