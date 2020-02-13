$(document).ready(function() {
	var arrimg = [
		'images/7.jpg',
		'images/8-1.jpg',
		'images/8-1-1.jpg',
		'images/8-2.jpg',
		'images/8-2-1.jpg',
		'images/10.jpg',
		'images/down.png',
		'images/page01_bg.jpg',
		'images/page01_img1.png',
		'images/page01_img2.png',
		'images/page02_bg.jpg',
		'images/page02_img1.png',
		'images/page03_bg.jpg',
		'images/page03_img01.png',
		'images/page03_img02.jpg',
		'images/page03_img03.jpg',
		'images/page03_img04.png',
		'images/page03_img05.png',
		'images/page04_bg.jpg',
		'images/page04_img01.png',
		'images/page04_img02.png',
		'images/page04_img03.png',
		'images/page04_img04.png',
		'images/page04_img05.png',
		'images/page05_bg.jpg',
		'images/page05_img01.png',
		'images/page05_img02.jpg',
		'images/page05_img03.png',
		'images/page06_bg.jpg',
		'images/page06_img1.png',
		'images/page06_img2.jpg',
		'images/page06_img3.jpg',
		'images/page06_img4.jpg',
		'images/page06_img5.png',
		'images/page06_img6.png',
		'images/page07_bg.jpg',
		'images/page07_img1.png',
		'images/page07_img2.png',
		'images/page07_img3.png',
		'images/page07_img4.png',
		'images/page07_img5.png',
		'images/page08_bg.jpg',
		'images/page08_img1.png',
		'images/page08_img2.png',
		'images/page09_bg.jpg',
		'images/page09_img1.png',
		'images/page09_img2.png',


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
		};
	}
});
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
	})
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