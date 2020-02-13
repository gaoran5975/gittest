$(function(){

	var obj = {};
	obj.completeLoading = function(){
		if (document.readyState == "complete") {  //判断文档是否加载完成
			//同意添加animated类名，隐藏所有图片
			$('.section').find("img").addClass('animated');
			$('.twentytwenty-container').find("img").removeClass('animated');

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
				loopHorizontal:false,

				afterLoad: function (anchorLink, index) {  //afterLoad是滚动到某一屏后的回调函数   //index是section的索引，从1开始

					$('.section').removeClass('current');
					$(".fy img").click(function(){
						$(".fy").css({"opacity":"0"});
						setTimeout(function(){
							$(".a").css({"opacity":"1"});
						},1000);

						});

					$(".back").click(function(){
						$(".fy").css({"opacity":"1"});
						$(".a").css({"opacity":"0"});
						clearTimeout;
					})
					if (index >1) {
						$('.back').css('display', 'block');
					}else{
						$('.back').css('display', 'none');
					}
					if (index  < 21) {
						$('._downImg').css('display', 'block');
					}else{
						$('._downImg').css('display', 'none');
					}

					if (index==2) {
						$(".second .tab img").click(function () {
							var i = $(this).index();
							$(".second .tabcotent img").hide().eq(i).css({"display": "block", "opacity": "1"});
							$(".second .tabcotent img").eq(0).removeClass("fadeInUp");
						})
					}else{
						$(".second .tabcotent img").eq(0).css({  "opacity": "0"});
						$(".second .tabcotent img").eq(0).addClass("fadeInUp");
					}
					if (index==7) {
						$(".fifth .tabcotent img").eq(0).show();
						$(".fifth .tab img").click(function () {
							var i = $(this).index();

							$(".fifth .tabcotent img").hide().eq(i).css({"display": "block"});

						})
					}else{
						$(".fifth .tabcotent img").eq(0).show();

					}
					if (index==15) {
						$(".eighth .tabcotent img").eq(0).show();
						$(".eighth .tab img").click(function () {
							var i = $(this).index();

							$(".eighth .tabcotent img").hide().eq(i).css({"display": "block"});

						})
					}else{
						$(".eighth .tabcotent img").eq(0).show();

					}
					if (index==12) {
						$(".twe .tabcotent img").eq(0).show();
						$(".twe .tab img").click(function () {
							var i = $(this).index();
							$(".twe .tabcotent img").hide().eq(i).css({"display": "block"});

						})
					}else{
						$(".twe .tabcotent img").eq(0).show();

					}
					if (index==17) {
						$(".fifteen .tabcotent img").eq(0).show();
						$(".fifteen .tab img").click(function () {
							var i = $(this).index();

							$(".fifteen .tabcotent img").hide().eq(i).css({"display": "block"});

						})
					}else{
						$(".fifteen .tabcotent img").eq(0).show();

					}


					$('.section').eq(index-1).addClass('current');
				},
				anchors: ['cover', 'second', 'third','third_1','third_2','fourth','fifth','sixth','seventh','tenth','ninth','twe','ele','thir','eighth','forteen','fifteen','sixteen','seventeen','ninteen','eightteen']


			});
		}
	};

 document.onreadystatechange = obj.completeLoading;


})