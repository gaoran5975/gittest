$(function(){

	var obj = {};
	obj.completeLoading = function(){
		if (document.readyState == "complete") {  //判断文档是否加载完成
			//同意添加animated类名，隐藏所有图片
			$('.section').find("img").addClass('animated');
			//$('.section').find("img").css('opacity', '0');
			var timer = new Object();
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


					if (index ==1) {

						$(".bg1").attr("src","img/10.jpg");
						$(".cover .lx").hide();
						setTimeout(function () {
							$(".bg1").attr("src","img/14.jpg");

						}, 4000);
						setTimeout(function () {
							$(".bg1").attr("src","img/15.jpg");
						}, 5000);
						setTimeout(function () {
							$(".bg1").attr("src","img/8.jpg");
							$(".cover .lx").show();
						}, 6000);

					}
					//if (index ==1) {
					//	$(".cover").css({"background":"url(img/10.jpg)top no-repeat","backgroundSize":"100% 100%"});
					//	setTimeout(function () {
					//		$(".cover").css({"background":"url(img/14.jpg)top no-repeat","backgroundSize":"100% 100%"});
                    //
					//	}, 4000);
					//	setTimeout(function () {
					//		$(".cover").css({"background":"url(img/15.jpg)top no-repeat","backgroundSize":"100% 100%"});
					//	}, 5000);
					//	setTimeout(function () {
					//		$(".cover").css({"background":"url(img/16.jpg)top no-repeat","backgroundSize":"100% 100%"});
					//	}, 6000);
                    //
					//}
					var i = 0;


					if (index ==10) {
						$("ul").css("opacity","1")
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
                    if(index==13){
						$('._downImg').css('display', 'none');
					}
					if (index ==11)
					{


						$('ul li .sele').each(function(){
							$(this).click(function(){
								$(this).find(".zq").css("display","block").parent().siblings().find(".zq").css("display","none");

							})
						})
						$('ul li.li_1 .sele').each(function(){
							$(this).click(function(){

							if($(this).index()==1){
								$(".zz").show();
								$(".da1").show();
								$(".da1 span").text("A");
							}else{
								$(".zz").show();
								$(".da2").show();
								$(".da2 span").text("A");
							}

						})
					})
						$('ul li.li_2 .sele').each(function(){
							$(this).click(function(){
							if($(this).index()==3){
								$(".zz").show();
								$(".da1").show();
								$(".da1 span").text("C");
							}else{
								$(".zz").show();
								$(".da2").show();
								$(".da2 span").text("C");
							}
							})
						})
						$('ul li.li_3 .sele').each(function(){
								$(this).click(function(){

									if($(this).index()==4){
										$(".zz").show();
										$(".da1").show();
										$(".da1 span").text("D");
									}else{
										$(".zz").show();
										$(".da2").show();
										$(".da2 span").text("D");
									}

								})
						})

						$('ul li.li_4 .sele').each(function(){
							$(this).click(function(){
							if($(this).index()==1){
								$(".zz").show();
								$(".da1").show();
								$(".da1 span").text("A");
							}else{
								$(".zz").show();
								$(".da2").show();
								$(".da2 span").text("A");
							}

						})
					})

						$('ul li.li_5 .sele').each(function(){
							$(this).click(function(){
							if($(this).index()==3){
								$(".zz").show();
								$(".da3").show();
								$(".da3 span").text("C");
								$(".da3 p").text("即使是吃饭，鲁迅也“爱憎分明”，他不喜欢“功德林”那些足以乱真的素肉、素鸡、素鱼，认为是吃素人的虚伪，心中念念不忘吃荤。")
							}else{
								$(".zz").show();
								$(".da4").show();
								$(".da4 span").text("C");
								$(".da4 p").text("即使是吃饭，鲁迅也“爱憎分明”，他不喜欢“功德林”那些足以乱真的素肉、素鸡、素鱼，认为是吃素人的虚伪，心中念念不忘吃荤。")
							}
							})
						})
						$('ul li.li_6 .sele').each(function(){
								$(this).click(function(){

									if($(this).index()==1){
										$(".zz").show();
										$(".da3").show();
										$(".da3 span").text("A");
										$(".da3 p").text("《藤野先生》是照片，《狂人日记》是小说，《野草》是文集")
									}else{
										$(".zz").show();
										$(".da4").show();
										$(".da4 span").text("A");
										$(".da4 p").text("《藤野先生》是照片，《狂人日记》是小说，《野草》是文集")
									}

								})
						})
						$('ul li.li_7 .sele').each(function(){
							$(this).click(function(){
							if($(this).index()==3){
								$(".zz").show();
								$(".da3").show();
								$(".da3 span").text("C");
								$(".da3 p").text("A出自《鲁迅杂文选》 B出自《鲁迅日记》 C出自1932年胡适北大毕业典礼演讲D出自《华盖集•青年必读书》）")
							}else{
								$(".zz").show();
								$(".da4").show();
								$(".da4 span").text("C");
								$(".da4 p").text("A出自《鲁迅杂文选》 B出自《鲁迅日记》 C出自1932年胡适北大毕业典礼演讲D出自《华盖集•青年必读书》）")
							}
							})
						})

					}
					$(".da").click(function(){
						$(".zz").hide();
						$(".da").hide();
					})
				},
				anchors: ['cover', 'second', 'third','fourth','fifth','sixth','seventh','eighth','ninth','tenth','ele','twe','thir']


			});
		}
	};








	obj.index = 0;

	obj.audio = function(){
		if (obj.index == 0) {
			$("audio")[0].pause();
			obj.index = 1;
			$("#audio_btn").removeClass('_Animate');
		}else{
			$("audio")[0].play();
			obj.index = 0;
			$("#audio_btn").addClass('_Animate');
		};
	};
	$('#audio_btn').on('click',function(){
		obj.audio();
	});
	
	document.onreadystatechange = obj.completeLoading;


})