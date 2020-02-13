$(function(){

	var obj = {};
	obj.completeLoading = function(){
		if (document.readyState == "complete") {  //判断文档是否加载完成
			//同意添加animated类名，隐藏所有图片
			$('.section').find("img").addClass('animated');
			//$('.section').find("img").css('opacity', '0');
			var timer = new Object();
			var timer1 = new Object();
			var i=0,j=0;
			//设置fullpage页面布局
			$('#fullpage').fullpage({
				afterLoad: function (anchorLink, index) {  //afterLoad是滚动到某一屏后的回调函数   //index是section的索引，从1开始

					$('.section').removeClass('current');
					if (index  < 13) {
						$('._downImg').css('display', 'block');
					}
					var cacheImg = $('.section').eq(index).find('img');
					var cacheImgCurrent = $('.section').eq(index-1).find('img');
					$('.section').eq(index-1).addClass('current');

					if (index ==5) {
						var a=setTimeout(function () {
							$(".fifth .bg1").addClass("fadeOut").css("opacity","0");
							$(".fifth .zjc").removeClass("fadeInDown").addClass("fadeOut").css("opacity","0");
							$(".fifth .text").removeClass("fadeInUp").addClass("fadeOut").css("opacity","0");
							$(".fifth .door").addClass("fadeIn");
						},10000);
						var b=setTimeout(function () {

							$(".fifth .door").addClass("on");
						}, 12000);
						var c=setTimeout(function () {
							$(".fifth .door").removeClass("fadeIn").css("opacity","0");

							$(".fifth .door2").addClass("fadeIn");
						}, 14000);
						var d=setTimeout(function () {

							$(".fifth .door2").addClass("on");

							$(".fifth .end").addClass("fadeIn");
							$(".fifth .circle").addClass("fadeIn");
						}, 16000);

					}else{
						clearTimeout(a);
						clearTimeout(b);
						clearTimeout(c);
						clearTimeout(d);
						$(".fifth .bg1").removeClass("fadeOut").css("opacity","1");
						$(".fifth .zjc").addClass("fadeInDown").removeClass("fadeOut").css("opacity","0");
						$(".fifth .text").removeClass("fadeOut").addClass("fadeInUp").css("opacity","0");
						$(".fifth .door").removeClass("fadeIn").css("opacity","0");
						$(".fifth .door").removeClass("on");

						$(".fifth .door2").removeClass("fadeIn").css("opacity","0");
						$(".fifth .door2").removeClass("on");
						$(".fifth .end").removeClass("fadeIn").css("opacity","0");
						$(".fifth .circle").removeClass("fadeIn").css("opacity","0");
					}
					if (index ==7) {
						$(".pic  li").click(function(){
							$(this).addClass("on").siblings().removeClass("on");
							$(".finger").hide();
						})
					}else{
						$(".finger").fadeIn();
					}


					if (index ==9) {

						var w = $(".wrap ul li").width();

						var l = $(".wrap ul li").length;
						var $ul = $(".wrap ul");
						timer=setInterval(function () {
							i++;
							$ul.stop().animate({
								"marginLeft": -i * w + "px"
							}, 300, function () {
								if (i == (l / 2)) {
									$ul.css("marginLeft", 0);
									i = 0;
								}
							});

						}, 2000)

					}else{
						clearInterval(timer);
						$(".wrap ul").css("marginLeft", 0);
						i = 0;
					}
					if (index ==10) {
						$(".wrap1 ul li").eq(0).fadeIn();
						var w = $(".wrap1 ul li").width();

						var l = $(".wrap1 ul li").length;
						var $ul = $(".wrap1 ul");
						auto();
						function auto(){
							timer1=setInterval(function () {
								j++;
								j %= $(".wrap1 ul li").length;
								$(".wrap1 ul li").fadeOut().eq(j).fadeIn();
							}, 2000)
						}


					}else{
						clearInterval(timer1);
						$(".wrap1 ul li").hide();
						j = 0;
					}


                    if(index==11){
						$('._downImg').css('display', 'none');
					}

					$(".da").click(function(){
						$(".zz").hide();
						$(".da").hide();
					})
				},
				anchors: ['cover', 'second', 'third','fourth','fifth','sixth','seventh','eighth','ninth','tenth','ele']


			});
		}
	};






	var sndBgd=new Howl({
		src: ['img/music.mp3'],
		autoplay: true,
		loop: true,
		volume: 0.4,
		onload: function() {

			makeSlideWithArrow();

		}
	})

	obj.index = 0;

	obj.audio = function(){
		if (obj.index == 0) {
			sndBgd.pause();
			obj.index = 1;
			$("#audio_btn").removeClass('_Animate');
		}else{
			sndBgd.play();
			obj.index = 0;
			$("#audio_btn").addClass('_Animate');
		};
	};
	$('#audio_btn').on('click',function(){
		obj.audio();
	});
	
	document.onreadystatechange = obj.completeLoading;


})