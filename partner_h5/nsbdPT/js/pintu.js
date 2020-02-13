var picbox = document.getElementById('picbox');
var pic = document.querySelectorAll('.pic');
var picWidth = pic[0].offsetWidth;
var picHeight = pic[0].offsetHeight;
var picboxWidth = picbox.offsetWidth;
var picboxHeight = picbox.offsetHeight;
var go = document.getElementById('go');
var times = document.getElementById('times');
var dizhi = document.getElementById('dizhi');
var flag = false, time1 = null, endTime = 60, time2 = null;
var dx, dy, newLeft, newtop, startTime, endTime;
var score = 0; var AnsInx = 100;
var tipindex = 0; var gwFlag = false;
var time3 = null; var pintuFlag;

function initPic() {
	for (var i = 0; i < 20; i++) {
		var a = Math.floor(Math.random() * 9);
		var b = Math.floor(Math.random() * 9);
		if (a != b) { random(a, b); }
	}
	console.log("换位成功");
}

go.addEventListener('touchstart', function () {
	go.style.display = 'none';
	picbox.style.background = "#fff";
	if (gwFlag) {
		initPic();
	}
	flag = true;
	time2 = setInterval(function () {
		endTime--;
		times.innerHTML = endTime + 's';
		if (endTime <= 0) {
			endTime = 0;
			clearTimeout(time2);
			console.log(tipindex);
			$('#fail').slideDown(1000);
			if (tipindex == 0) {
				$('#ckcj img').attr({ 'src': 'http://partner.qianlong.com/h5/nsbdPT/css/images/p1_14.png' });
				$('#ckcj').click(function () {
					$('#fail').hide();
					$('#page2').hide();
					$('.fenxiangPage').show();
				})
			}
		}
	}, 1000)

});

for (var i = 0; i < pic.length; i++) {
	pic[i].addEventListener('touchstart', function (e) {
		e.preventDefault();
		pintuFlag = true;
		this.style.zIndex = 201;
		dx = e.targetTouches[0].pageX - this.offsetLeft;
		dy = e.targetTouches[0].pageY - this.offsetTop;
		// console.log(e.targetTouches[0].pageX,dx,e.targetTouches[0].pageY,dy);
		this.startX = this.offsetLeft;
		this.startY = this.offsetTop;
		this.style.transition = 'none';
	});

	pic[i].addEventListener('touchmove', function (e) {
		e.preventDefault();
		this.style.zIndex = 101;
		newLeft = e.targetTouches[0].pageX - dx;
		newtop = e.targetTouches[0].pageY - dy;
		if (newLeft <= -picWidth / 2) {
			newLeft = -picWidth / 2;
		} else if (newLeft >= (picboxWidth - picWidth / 2)) {
			newLeft = (picboxWidth - picWidth / 2);
		}
		if (newtop <= -picHeight / 2) {
			newtop = -picWidth / 2;
		} else if (newtop >= (picboxHeight - picHeight / 2)) {
			newtop = (picboxHeight - picHeight / 2);
		}
		this.style.left = newLeft + 'px';
		this.style.top = newtop + 'px';
	});

	pic[i].addEventListener('touchend', function (e) {
		e.preventDefault();
		this.style.zIndex = 0;
		this.style.transition = 'all 0.1s ease 0s';
		this.endX = e.changedTouches[0].pageX - dx;
		this.endY = e.changedTouches[0].pageY - dy;
		var obj = change(pic, e.target, this.endX, this.endY);
		if (pintuFlag) {
			if (obj == e.target) {
				obj.style.left = this.startX + 'px';
				obj.style.top = this.startY + 'px';
			} else { //否则
				console.log(obj.style.left);
				var _left = obj.style.left;
				obj.style.left = this.startX + 'px';
				this.style.left = _left;
				var _top = obj.style.top;
				obj.style.top = this.startY + 'px';
				this.style.top = _top;
				var _index = obj.getAttribute('data-index');
				obj.setAttribute('data-index', this.getAttribute('data-index'));
				this.setAttribute('data-index', _index);
			}
			pintuFlag = false;
		}

	});

	pic[i].addEventListener('transitionend', function () {
		if (isSuccess() && flag) {
			clearTimeout(time2);
			console.log("拼图成功了");
			score += AnsInx;
			score += endTime;
			console.log(score);
			flag = false;
			endTime = 60;
			$('#success').slideDown(1000);
			if (score >= 600) {
				$('#ckph').css({
					'margin-left': '25%'
				});
				$('#next').hide();
			}
		}
		else {
		}
	})
}

function change(pic, obj, x, y) {
	for (var i = 0; i < pic.length; i++) {
		if (Math.abs(pic[i].offsetLeft - x) <= picWidth / 2 && Math.abs(pic[i].offsetTop - y) <= picHeight / 2 && pic[i] != obj)
			return pic[i];
	}
	return obj; //返回当前
}

function random(a, b) {
	var aEle = pic[a];
	var bEle = pic[b];
	var _left;
	_left = Math.ceil(parseInt(aEle.style.left) / 100) * 100 + 'px';;
	aEle.style.left = Math.ceil(parseInt(bEle.style.left) / 100) * 100 + 'px';
	bEle.style.left = _left;
	var _top;
	_top = Math.ceil(parseInt(aEle.style.top) / 100) * 100 + 'px';
	aEle.style.top = Math.ceil(parseInt(bEle.style.top) / 100) * 100 + 'px';
	bEle.style.top = _top;
	var _index;
	_index = aEle.getAttribute("data-index");
	aEle.setAttribute("data-index", bEle.getAttribute("data-index"));
	bEle.setAttribute("data-index", _index);
}

function isSuccess() { //判断成功标准
	var str = ''
	for (var i = 0; i < pic.length; i++) {
		str += pic[i].getAttribute('data-index');
	}
	if (str == '123456789') {
		return true;
	}
	return false;
}

var tiku;
tiku = getArrayItems(arrche, 5);

function guiwei(item) {
	for (var i = 0; i < 9; i++) {
		var arr = [[0, 0], [-100, 0], [-200, 0], [0, -100], [-100, -100], [-200, -100], [0, -200], [-100, -200], [-200, -200]];
		picbox.style.background = "url(" + tiku[item].img + ")";
		pic[i].style.background = "url(" + tiku[item].img + ")";
		pic[i].style.backgroundPosition = arr[i][0] + "px " + arr[i][1] + "px";
	}
	gwFlag = true;
}

function tianChong(index) {
	guiwei(index);
	dizhi.innerHTML = tiku[index].title;
	$("#success  .fzdiv img").eq(0).attr({
		'src': tiku[index].img
	});
	$("#success .fzdiv img").eq(1).attr({
		'src': tiku[index].origImg
	});
	$('.fztp p.dz').html(tiku[index].title);
	$('.fztp div.intro').html(tiku[index].desc);
}
tianChong(0);

var guanflag = true;
var ckph = document.getElementById('ckph');
var next = document.getElementById('next');
next.addEventListener('touchstart', function (e) {
	if (guanflag) {
		tipindex++;
		console.log(tipindex);
		if (tipindex < 5) {
			$('#success').slideUp(800);
			tianChong(tipindex);
			$('#guanka').attr({
				'src': 'http://partner.qianlong.com/h5/nsbdpt/css/images/guan' + tipindex + '.png'
			});
			$('.tishi ul li').removeClass('cur').eq(tipindex).addClass('cur');
			tianChong(tipindex);
			$('#times').html('60s');
			go.style.display = 'block';
		}
		else {
			$('#page1').hide();
			$('#page2').show();
		}

	}
});

$('#ckph').click(function () {
	$('#success').slideUp();
	$('#page1').hide();
	$('#page2').show();
	if (tipindex == 4) {
		$('.wdpm').show();
	}
});

//答案错误时 点击再次挑战，重新加载页面
$('#loadAgain,#loadAgain2').click(function () {
	document.location.reload();
});

$('.fenxiangPage').bind('click', function () {
	if (tipindex == 0 && score < 100) {
		document.location.reload();
	}
});

$('#share').bind('click', function () {
	$('.fenxiangPage').show();
});

// 分数
// $('#ckph,#ckcj').bind('click', function () {
// 	$('#score').html(score);
// 	$('#fenshu span').html(score);
// });

// 查看排行
$('#ckph, #ckcj').bind('click', function () {
	$('#score').html(score);
	$('#fenshu span').html(score);

	// 上传分数并获取当前排行信息
	$.ajax({
		type: "post",
		async: false,
		url: "http://partner.qianlong.com/nsbdpt/home/upload_score",
		data: {
		  "uid": uid,
		  "qid": qid,
		  "score": score
		},
		success: function(json){
			var data = eval("(" + json + ")");
			write_paihang(data.ph);
			$("#myname").html(data.nickname);
			$("#current").html(data.cur);
			$("#paiming").html(data.cur);
			$("#headimg").attr("src", data.headimg);

		  console.log(json);
		},
		error: function(){
		  console.log("发生错误");
		}
	  });	
});

function write_paihang(source){
	var html = "";
	var ul = $("#paihangdata").find("ul");
	ul.html("");
	for(var i=0; i<source.length; i++){
		var k = i+1;
		html += '<li>'
		if(i==0){
			html += '<img src="http://partner.qianlong.com/h5/nsbdPT/css/images/p2_3.png" class="ani">'
		}
		else if(i==1){
			html += '<img src="http://partner.qianlong.com/h5/nsbdPT/css/images/p2_4.png" class="ani">'
		}
		else if(i==2){
			html += '<img src="http://partner.qianlong.com/h5/nsbdPT/css/images/p2_5.png" class="ani">'
		}
		else{
			html += '<span class="listNum">' + k + '</span>'
		}
		html += '<div class="fir">'+ source[i].nickname + '</div>'
		html += '<div><p>' + source[i].score + '</p></div>'
		html += '</li>'
	}

	ul.html(html);
}
