$(document).ready(function() {
	var arrimg = [
		'images/home_bg2.jpg',
		'images/logo.png',
		'images/p1_bg.jpg',
		'images/p1_img.jpg',
		'images/p1_title.png',
		'images/p2_title.png',
		'images/p4_bg.jpg',
		'images/p4_img.jpg',
		'images/p5_img.jpg',
		'images/p5_title.png',
		'images/p6_bg.jpg',
		'images/p6_img.jpg',
		'images/p6_title.png',
		'images/p7-img1.png',
		'images/p7-img2.png',
		'images/p7-img3.png',
		'images/p7-img4.png',
		'images/p7-img5.png',
		'images/p7-img6.png',
		'images/p8_img.jpg',
		'images/p8_title.png',
		'images/p9_img.jpg',
		'images/p9_title.png',
		'images/p10_bg.jpg',
		'images/p10_img.jpg',
		'images/p10_title.png',
		'images/p11_img.jpg',
		'images/p11_title.png',
		'images/p12_img.jpg',
		'images/p12_title.png',
		'images/p13_bg.jpg',
		'images/p13_img.jpg',
		'images/p13_title.png',
		'images/p14-img1.png',
		'images/p14-img2.png',
		'images/p14-img3.png',
		'images/p14-img4.png',
		'images/p15_img.jpg',
		'images/p15_title.png',
		'images/p16_img.jpg',
		'images/p16_title.png',
		'images/p17_bg.jpg',
		'images/p17_img.jpg',
		'images/p17_title.png',
		'images/p18.jpg',
		'images/p19_img.jpg',
		'images/p19_title.png',
		'images/p20_img.jpg',
		'images/p20_title.png',
		'images/p21_bg.jpg',
		'images/p21_img.jpg',
		'images/p21_title.png',
		'images/p22.jpg',
		'images/p23_img.jpg',
		'images/p23_title.png',
		'images/p24_img.jpg',
		'images/p24_title.png',
		'images/p25_bg.jpg',
		'images/page_bg.jpg',
		'images/p25_title.png',
		'images/weixin.jpg',
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
			};
		}
	}
});
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
// $(document).ready(function() {
// 	 // $('#music').get(0).play();
// 	  var music = document.getElementById("music");
// 	  music.pause();
// 	     if(music.paused){
//             music.play();
//         }
// 	    $("#audio_btn").click(function(){
//         if(music.paused){
//             music.play();
//             $("#music_btn").attr("src","play.gif");
//             $('#audio_btn').addClass('aaa')
//         }else{
//             music.pause();
//             $("#music_btn").attr("src","pause.gif");
//             $('#audio_btn').removeClass('aaa')
//         }
//     });
// });