var wh = window.innerHeight;
var ww = window.innerWidth;
if (window.innerWidth > 750) {
    wx = parseInt(wh * 750 / 1206);
    $('html,body').css({ 'width': wx + 'px', 'margin': '0 auto', 'height': wh + 'px' })
    $('.secpage,#loadpage,#page1,#page2').css({ 'width': wx + 'px' })
}
if (wh < 640) {
    $('#page1 img').eq(0).attr({
        'src': 'http://partner.qianlong.com/h5/nsbdPT/css/images/p1_1_1.png'
    });
    $('#guanka').css({ 'top': '-13%' });
    $("#picbox").css({ 'margin-top': '22%' });
    $('#success img').eq(0).css({ 'height': '70px' });
    $('.fz').css({ 'margin-top': '71px' })
    $('.dz').css({ 'margin-bottom': "0", 'font-size': '0.8em' })
    $('.fztp ul li').css({ 'margin-top': '5px' });
    $('.bangdan').css({ 'min-height': "344px" });
    $('.bangdan .paihang ul').css({ 'height': "215px" });
    $('#loadmore').css({ 'top': '342px' });
    $('#page2 img').eq(2).css({ 'height': '390px' })
}
if (ww < 330) {
    $('.bangdan .guanjun ul li div').css({ 'font-size': '0.6em' });
    $('.bangdan .paihang ul li div').css({ 'font-size': '0.6em' });
}
// loadpage首页点击按钮
$('#btn').click(function () {
    $('.p1_8,.p1_9,.p1_10').show();
})
var arrche = [
    {
        "img": "http://partner.qianlong.com/h5/nsbdPT/css/tuku/pic0.jpg",
        "origImg": 'http://partner.qianlong.com/h5/nsbdPT/css/tuku/pic0_1.jpg',
        "title": "穿黄工程",
        "desc": "穿黄工程，位于河南郑州市，堪称人类历史上最宏大的穿越大江大河工程。"
    },
    {
        "img": "http://partner.qianlong.com/h5/nsbdPT/css/tuku/pic1.jpg",
        "origImg": 'http://partner.qianlong.com/h5/nsbdPT/css/tuku/pic1_1.jpg',
        "title": "丹江口",
        "desc": "丹江口大坝，位于湖北丹江口市，是南水北调中线的大水缸。"
    },
    {
        "img": "http://partner.qianlong.com/h5/nsbdPT/css/tuku/pic2.jpg",
        "origImg": 'http://partner.qianlong.com/h5/nsbdPT/css/tuku/pic2_1.jpg',
        "title": "滹沱河",
        "desc": "滹沱河倒虹吸工程，位于河北石家庄市，是中线第一个开工建设的工程。"
    },
    {
        "img": "http://partner.qianlong.com/h5/nsbdPT/css/tuku/pic3.jpg",
        "origImg": 'http://partner.qianlong.com/h5/nsbdPT/css/tuku/pic3_1.jpg',
        "title": "惠南庄",
        "desc": "惠南庄泵站，位于北京房山区，是中线工程唯一一座大型加压泵站。"
    },
    {
        "img": "http://partner.qianlong.com/h5/nsbdPT/css/tuku/pic4.jpg",
        "origImg": 'http://partner.qianlong.com/h5/nsbdPT/css/tuku/pic4_1.jpg',
        "title": "焦作市区段",
        "desc": "焦作市区段工程，位于河南焦作市，是中线唯一穿越中心城区的工程。"
    },
    {
        "img": "http://partner.qianlong.com/h5/nsbdPT/css/tuku/pic5.jpg",
        "origImg": 'http://partner.qianlong.com/h5/nsbdPT/css/tuku/pic5_1.jpg',
        "title": "沙河渡槽",
        "desc": "沙河渡槽，位于河南省平顶山市，是中线规模最大的渡槽。"
    },
    {
        "img": "http://partner.qianlong.com/h5/nsbdPT/css/tuku/pic6.jpg",
        "origImg": 'http://partner.qianlong.com/h5/nsbdPT/css/tuku/pic6_1.jpg',
        "title": "陶岔渠首",
        "desc": "陶岔渠首，位于河南省南阳市，是中线的水龙头。"
    },
    {
        "img": "http://partner.qianlong.com/h5/nsbdPT/css/tuku/pic7.jpg",
        "origImg": 'http://partner.qianlong.com/h5/nsbdPT/css/tuku/pic7_1.jpg',
        "title": "天津外环河",
        "desc": "天津外环河出口工程，位于天津西青区，是中线天津干线工程的终点。"
    },
    {
        "img": "http://partner.qianlong.com/h5/nsbdPT/css/tuku/pic8.jpg",
        "origImg": 'http://partner.qianlong.com/h5/nsbdPT/css/tuku/pic8_1.jpg',
        "title": "团城湖",
        "desc": "团城湖明渠工程，位于北京海淀区，是中线的终点。"
    },
    {
        "img": "http://partner.qianlong.com/h5/nsbdPT/css/tuku/pic9.jpg",
        "origImg": 'http://partner.qianlong.com/h5/nsbdPT/css/tuku/pic9_1.jpg',
        "title": "西黑山",
        "desc": "西黑山分水口工程，位于河北保定市，是中线的岔路口。"
    }

]


//首页动画
var img = new Image();
img.src = 'http://partner.qianlong.com/h5/nsbdPT/css/images/p0_0.jpg';
img.onload = function () {
    var ani0 = $('#loadpage img').eq(0);
    var ani1 = $('#loadpage img').eq(1);
    var ani2 = $('#loadpage img').eq(2);
    var ani3 = $('#loadpage img').eq(3);
    var ani4 = $('#loadpage img').eq(4);
    var ani5 = $('#loadpage img').eq(5);
    var ani6 = $('#loadpage img').eq(6);
    var ani7 = $('#loadpage img').eq(7);
    TweenMax.to(ani0, 1, { x: "0", opacity: 1, ease: Back.easeOut.config(1), delay: 0.2 });
    TweenMax.to(ani3, 1, { x: "0", opacity: 1, ease: Back.easeOut.config(1), delay: 1.2 });
    TweenMax.to(ani1, 1, { y: "0", opacity: 1, ease: Bounce.easeOut, delay: 2 });
    TweenMax.to(ani2, 1, { y: "0", opacity: 1, ease: Bounce.easeOut, delay: 2 });
    TweenMax.to(ani4, 1.2, { scale: 1, opacity: 1, ease: Power3.easeInOut, delay: 3 });
    TweenMax.to(ani5, 1.2, { scale: 1, opacity: 1, ease: Power3.easeInOut, delay: 3 });
    TweenMax.to(ani6, 1, { opacity: 1, ease: Power3.easeIn, delay: 4, onComplete: continueAni });
}
function continueAni() {
    var ani6 = $('#loadpage img').eq(6);
    TweenMax.to(ani6, 1, { scale: 1.02, transformOrigin: "center top", repeat: 1000, opacity: 1, yoyo: true, ease: Back.easeInOut.config(4) });
}
function getArrayItems(arr, num) {
    var temp_array = new Array();
    for (var index in arr) {
        temp_array.push(arr[index]);
    }
    var return_array = new Array();
    for (var i = 0; i < num; i++) {
        if (temp_array.length > 0) {
            var arrIndex = Math.floor(Math.random() * temp_array.length);
            return_array[i] = temp_array[arrIndex];
            temp_array.splice(arrIndex, 1);
        } else {
            break;
        }
    }
    return return_array;
}
//第一页 开始按钮
$('#btn').bind('click', function () {
    $('.know').slideDown(500);
    $('.p0_8').show();
    $('.p0_9').show();
});

$('#knowbtn').bind('click', function () {
    $('.know').slideUp(500);
    $('#loadpage').hide();
    $('#page1').css('opacity', '1');
});

//图片翻转
var boxflag = true;
var box = $(".fztp .fzdiv");
var box1 = $(".fztp .fzdiv img").eq(0);
var box2 = $(".fztp .fzdiv img").eq(1);
var boxheight;
boxheight = $(window).width() * 0.86 * 0.96;
box.css('height', boxheight)
TweenMax.set(box1, { position: 'absolute', left: 0, zIndex: 210 });
TweenMax.set(box2, { position: 'absolute', left: 0, 'rotationY': 180, zIndex: 205, opacity: 0 });
function an1() {
    TweenMax.to(box1, 1.2, { opacity: 0, rotationY: 180, zIndex: 205, ease: Linear.easeOut })
    TweenMax.to(box2, 1.2, { opacity: 1, rotationY: 0, zIndex: 210, ease: Linear.easeOut })
}
function an2() {
    TweenMax.to(box2, 1.2, { opacity: 0, rotationY: 180, zIndex: 205, ease: Linear.easeOut })
    TweenMax.to(box1, 1.2, { opacity: 1, rotationY: 0, zIndex: 210, ease: Linear.easeOut })
}
$(".fztp .fzdiv").click(function () {
    if (boxflag) {
        an1();
        $('.fz p.js').html('点击翻转卡片，返回场景拼图');
        $('.fztp ul').hide();
        $('.fztp .intro').fadeIn(1100);
        boxflag = false;
    }
    else {
        an2();
        $('.fz p.js').html('点击翻转卡片，查看炫酷实景');
        $('.fztp ul').fadeIn(1100);
        $('.fztp .intro').hide();
        boxflag = true;
    }
})

//第三页  排行榜
var liLen = $('.paihang ul li').length;
$('.paihang ul li').each(function () {
    var index = $(this).index();
    if (index > 3) {
        $(this).find('span.listNum').html(index + 1);
    }
});

var clickInx = 0, origin = 5, i = 0, showLi, step = 5, scrollStep = 260, clickflag = false;
var wh = window.innerHeight;
$('.paihang ul li:gt(4)').hide();
if (wh < 640) {
    $('.paihang ul li:gt(2)').hide();
    step = 3;
    origin = 3;
}

$('#loadmore').click(function () {
    clickflag = true;
    if (clickflag) {
        clickInx++;
        showLi = origin + step * clickInx;
        console.log(step);
        showScroTop = scrollStep * clickInx;
        if (showLi - step >= liLen) {
            $('#loadmore').hide();
            return false;
        }
        if (liLen - showLi < step) {
            $('.paihang ul li:lt(' + liLen + ')').show();
        }
        else {
            $('.paihang ul li:lt(' + showLi + ')').show();
        }
        $('.paihang ul').scrollTop(showScroTop);
        clickflag = false;
    }
});

$('#loadAgain2').click(function () {
    // document.location.reload();
});

$('#fenxiang').click(function () {
    $('.fenxiangPage').show();
});

$('#close').click(function () {
    $('.wdpm').hide();
});

$('.fenxiangPage').click(function () {
    $('.fenxiangPage').hide();
});

$('#ckcj').click(function () {
    $('#page1').hide();
    $('#page2').show();
});