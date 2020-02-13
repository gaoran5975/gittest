$(document).ready(function() {
	var arrimg = [
		"images/more.png",
		"images/p1-02.png",
		"images/p1-03.png",
		"images/p1-04.png",
		"images/p1-05.png",
		"images/p1-06.png",
		"images/p1-01-1.png",
		"images/p2-1.png",
		"images/p2-2.png",
		"images/p2-3.png",
		"images/p2-4.png",
		"images/p2-5.png",
		"images/p2-6.png",
		"images/p2-7.png",
		"images/p2-8.png",
		"images/p3-1.png",
		"images/p3-2.png",
		"images/p3-3.png",
		"images/p3-4.png",
		"images/p3-5.png",
		"images/p3-6.png",
		"images/p3-7.png",
		"images/p3-8.png",
		"images/p3-9.png",
		"images/p4-1.png",
		"images/p5-1.png"
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


