$(function(){

	var obj = {};
	obj.completeLoading = function(){
		if (document.readyState == "complete") {  //判断文档是否加载完成
			//同意添加animated类名，隐藏所有图片
			$('.section').find("img").addClass('animated');

			var timer1 = new Object();
			var timer2 = new Object();
			var timer3 = new Object();
			var timer4 = new Object();
			var timer5 = new Object();
			var timer6 = new Object();
			var timer7 = new Object();
			var  j=0;
			//设置fullpage页面布局
			$('#fullpage').fullpage({
				afterLoad: function (anchorLink, index) {  //afterLoad是滚动到某一屏后的回调函数   //index是section的索引，从1开始

					$('.section').removeClass('current');
					if (index==1 ) {

						$(".yao").bind("click",function(){
							$(".sec1_text,.yao,.logo").hide();
							//$(".xf").animate({"top": "25%"}, 1500)
							$(".xf").animate({"bottom": "10%"}, 1500)
							//$(".xfg").animate({"top": "25%"}, 1500, function () {
							$(".xfg").animate({"bottom": "10%"}, 1500, function () {
								$(".xfg").removeClass("zoomIn");
								$(".xfg").removeClass("animated").css({"opacity":"1"});
								$(".xfg").addClass("xuanz");
								timer2=setTimeout(function(){
									$(".zxfg").removeClass("animated").css({"opacity":"1"}).addClass("xfg1");
								},1000);
								timer3=setTimeout(function(){

									$(".xzbox").css({"opacity":"1"})
									$(".xzbox").animate({"height":"600px"},3000)
									$(".down").addClass("fadeIn");
								},1000);
								timer4=setTimeout(function(){
									$(".text1").addClass("fadeInDown1");
								},3500);
								timer5=setTimeout(function(){
									$(".text2").addClass("fadeInDown1");
								},4500);
								timer6=setTimeout(function(){
									$(".text3").addClass("fadeInDown1");
								},5500);
								timer7=setTimeout(function(){
									auto();
									function auto(){
										$(".wrap").css({"opacity":"1"});
										$(".wrap img").eq(0).fadeIn();
										timer1=setInterval(function () {
											j++;
											j %= $(".wrap img").length;
											$(".wrap img").fadeOut().eq(j).fadeIn();
										}, 2000)
									}
								},6500)

							})

						})

					}else{
						$(".xf").animate({"bottom": "35%"}, 1500);
						$(".xfg").animate({"bottom": "35%"}, 1500);
						$(".xfg").addClass("zoomIn");
						$(".xfg").addClass("animated").css({"opacity":"0"});
						$(".xfg").removeClass("xuanz");
						$(".zxfg").addClass("animated").css({"opacity":"0"}).removeClass("xfg1");
						$(".xzbox").css({"opacity":"0"})
						$(".xzbox").animate({"height":"0px"})
						$(".down").removeClass("fadeIn");
						$(".sec1_text,.yao,.logo").show();
						$(".text1,.text2,.text3").removeClass("fadeInDown1");
						$(".yao").unbind();
						clearTimeout(timer2);
						clearTimeout(timer3);
						clearTimeout(timer4);
						clearTimeout(timer5);
						clearTimeout(timer6);
						clearTimeout(timer7);
						clearInterval(timer1);
						$(".wrap").css({"opacity":"0"});
						$(".wrap img").css({"display":"none"});
						j = 0;
					}
					$('.section').eq(index-1).addClass('current');
				},
				anchors: ['cover', 'second', 'third','fourth','fifth','sixth','seventh','eighth',"ninth","ten","ele","twl","tir","for","fif","sixteen"]


			});
		}
	};

 document.onreadystatechange = obj.completeLoading;


})