$(function(){

	var obj = {};
	obj.completeLoading = function(){
		if (document.readyState == "complete") {  //判断文档是否加载完成
			//同意添加animated类名，隐藏所有图片
			$('.section').find("img").addClass('animated');
			//$('.section').find("img").css('opacity', '0');

			var i=0,j=0;
			//设置fullpage页面布局
			$('#fullpage').fullpage({
				afterLoad: function (anchorLink, index) {  //afterLoad是滚动到某一屏后的回调函数   //index是section的索引，从1开始

					$('.section').removeClass('current');

					if (index  < 9) {
						$('._downImg').css('display', 'block');
					}else{
					$('._downImg').css('display', 'none');
					};

					$('.section').eq(index-1).addClass('current');


				},
				anchors: ['cover', 'second', 'third','fourth','fifth','sixth','seventh','eighth','ninth']


			});
		}
	};

 document.onreadystatechange = obj.completeLoading;


})