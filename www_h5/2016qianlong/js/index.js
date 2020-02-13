$(document).ready(function() {
	var arrimg = [
		"images/1-2.jpg",
		"images/1-3.jpg",
		"images/1-4.jpg",
		"images/1-5.jpg",
		"images/1-6.jpg",
		"images/3-1.jpg",
		"images/3-2.png",
		"images/3-3.png",
		"images/4-1.jpg",
		"images/4-2.png",
		"images/4-3.png",
		"images/5-1.jpg",
		"images/5-2.png",
		"images/5-3.png",
		"images/6-1.jpg",
		"images/6-2.png",
		"images/6-3.png",
		"images/21-1.jpg",
		"images/21-2.png",
		"images/22-1.png",
		"images/22-2.jpg",
		"images/22-3.png",
		"images/23-1.png",
		"images/23-2.png",
		"images/24-1.png",
		"images/24-2.jpg",
		"images/24-3.png",
		"images/25-1.png",
		"images/25-2.jpg",
		"images/25-3.png",
		"images/31-1.png",
		"images/31-2.jpg",
		"images/31-3.png",
		"images/32-1.png",
		"images/32-2.jpg",
		"images/32-3.png",
		"images/33-1.png",
		"images/33-2.jpg",
		"images/33-3.png",
		"images/34-1.png",
		"images/34-2.jpg",
		"images/34-3.png",
		"images/35-1.png",
		"images/35-2.jpg",
		"images/35-3.png",
		"images/36-1.png",
		"images/36-2.jpg",
		"images/36-3.png",
		"images/41-1.png",
		"images/41-2.jpg",
		"images/41-3.png",
		"images/42-1.png",
		"images/42-2.jpg",
		"images/42-3.png",
		"images/43-1.png",
		"images/43-2.jpg",
		"images/43-3.png",
		"images/44-1.png",
		"images/44-2.jpg",
		"images/44-3.png",
		"images/45-1.png",
		"images/45-2.jpg",
		"images/45-3.png",
		"images/46-1.png",
		"images/46-2.jpg",
		"images/46-3.png",
		"images/home.jpg",	
		"images/home-icon.png",
		"images/home-img01.png",
		"images/home-img02.png",
		"images/home-img03.png",
		"images/home-img04.png",
		"images/home-img05.png",
		"images/page1-1.jpg",
		"images/page1-2.png",
		"images/page1-3.jpg",
		"images/page1-4.jpg",
		"images/page1-5.png",
		"images/page2-1.jpg",
		"images/page2-2.png",
		"images/page2-3.png",
		"images/toutu.jpg",
		"images/logo.png"

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
	$('#btn1').click(function(){
		mySwiper.slideNext();
	});

	$('.toHome').click(function(){
		mySwiper.slideTo(0, 200, true);
	});

	$('#btn2').click(function(){
		mySwiper.slideTo(7, 200, true);
	});
	$('#btn3').click(function(){
		mySwiper.slideTo(12, 200, true);
	});
	$('#btn4').click(function(){
		mySwiper.slideTo(17, 200, true);
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