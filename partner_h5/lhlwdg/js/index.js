
	
	
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
	
});




$.ajax({
type: "get",
async: true,
url: "http://partner.qianlong.com/api/weixin/share/qianlong",
dataType: "jsonp",
data: {
"weburl": location.href.split("#")[0]
},
success: function(json){
//console.log(json);
wx.config({
debug: false,
appId: json.appId,
timestamp: json.timestamp,
nonceStr: json.nonceStr,
signature: json.signature,
jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone']
});
},
error: function(){
console.log("share error");
}
});

wx.ready(function(){
console.log("ready to share");
var obj_co = {
title: "H5 | 厉害了，我的国",
link: "http://partner.qianlong.com/h5/lhlwdg",
imgUrl: "http://partner.qianlong.com/h5/lhlwdg/images/suoluetu.jpg",
success: function(){
},
cancel: function(){}
},
obj_co_desc = {
desc: "厉害了，我的南水北调"
},
obj_timeline = $.extend({}, obj_co),
obj_appmsg = $.extend({}, obj_co_desc, obj_co),
obj_qq = $.extend({}, obj_co_desc, obj_co),
obj_wb = $.extend({}, obj_co_desc, obj_co),
obj_qzone = $.extend({}, obj_co_desc, obj_co);

wx.onMenuShareTimeline(obj_timeline);
wx.onMenuShareAppMessage(obj_appmsg);
wx.onMenuShareQQ(obj_qq);
wx.onMenuShareWeibo(obj_wb);
wx.onMenuShareQZone(obj_qzone);


});

wx.error(function (res) {
console.log(res.errMsg);
//alert(res.errMsg);
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




$(".btnMusic").on('click',function(){
   if(audio.paused){
      audio.play();
   	$(".btnMusic").addClass('romote');
	}else{
   	audio.pause();
   	$(".btnMusic").removeClass('romote');
	}
});  





  