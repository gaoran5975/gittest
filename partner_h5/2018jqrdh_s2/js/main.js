//音乐播放按钮
/*
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
*/

var vh=$(window).height();
var vw=$(window).width();
var imgRatio=750/1334;
if(vw>vh){
   $('.swiper-container').height(vh);
   $('.swiper-container').width(vh*imgRatio);
}

$('.p1-line3').width(vw);

//音乐按钮
	var aniMusic;
    var sndBgd=new Howl({
        src: ['bgd.mp3'],
        autoplay: false,
        loop: true,
        volume: 0.4,
        onload: function() {
        }
    })
	$('.btnMusic').click(function(){
		if(sndBgd.playing()){
			aniMusic.pause();
			sndBgd.pause();
		}else{
			aniMusic.resume();
			sndBgd.play();
		}
		
	})
	
	function enterCover(){
		$('.pageLoading').hide();
	}
    $('a.btnEnter').click(function(){
		aniMusic=TweenMax.to($('.btnMusic'), 7.2, {rotation:360, delay:0,ease:'Linear.easeNone',repeat:99})
		sndBgd.play();
		TweenMax.to($('.pageLoading'), 2, {opacity:0,ease:'Power2.easeNone',onComplete:enterCover});
	})
    $('img').waitForImages({
        finished: function() {
			console.log("imgs loaded");
			$('.pageLoading p img').css("visibility","hidden");
			$('.txtLoading').text('加载完毕！');
			$('a.btnEnter').show();
			$('a.btnEnter').css('display','inline-block');
        },
        each: function() {

        },
        waitForAll: true
    });




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