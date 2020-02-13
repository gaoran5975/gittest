$(document).ready(function() {
	var arrimg = [
		'images/down.png',
		'images/home_bg.jpg',
		'images/last_bg.jpg',
		'images/last_logo.jpg',
		'images/logo.png',
		'images/made.png',
		'images/page_bg.jpg',
		'images/page_bg2.jpg',
		'images/page1_img1.jpg',
		'images/page1_img2.jpg',
		'images/page1_img3.jpg',
		'images/page2_img1.jpg',
		'images/page2_img2.jpg',
		'images/page2_img3.jpg',
		'images/page3_img1.jpg',
		'images/page3_img2.jpg',
		'images/page3_img3.jpg',
		'images/page4_img1.jpg',
		'images/page4_img2.jpg',
		'images/page4_img3.jpg',
		'images/page5_img1.jpg',
		'images/page5_img2.jpg',
		'images/page5_img3.jpg',
		'images/page6_img1.jpg',
		'images/page6_img2.jpg',
		'images/page6_img3.jpg',
		'images/page7_img1.jpg',
		'images/page7_img2.jpg',
		'images/page7_img3.jpg',
		'images/page8_img1.jpg',
		'images/page8_img2.jpg',
		'images/page8_img3.jpg',
		'images/page9_img1.jpg',
		'images/page9_img2.jpg',
		'images/page9_img3.jpg',
		'images/page10_img1.jpg',
		'images/page10_img2.jpg',
		'images/page10_img3.jpg',
		'images/page1_title.png',
		'images/page2_title.png',
		'images/page3_title.png',
		'images/page4_title.png',
		'images/page5_title.png',
		'images/page6_title.png',
		'images/page7_title.png',
		'images/page8_title.png',
		'images/page9_title.png',
		'images/page10_title.png',
		'images/tab.png'
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