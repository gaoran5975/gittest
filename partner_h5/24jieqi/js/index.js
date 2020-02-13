$( document ).ready(function() {

//动态内容数组
	var arrayJieqi=new Array(
	{
		intro: '炎热的夏天来临。这一天太阳直射地面的位置到达一年的最北端，几乎直射北回归线，此时，北半球的日照时间最长。在北京，白昼时数可长达15小时。',
		l1: '黄经90º',
		l2: '（06月21－22日）',
		link:'http://culture.qianlong.com/ztj/xz/'
	},
	{
		intro: '暑是炎热的意思。小暑就是气候开始炎热，还不十分热。意指天气开始炎热，但还没到最热，全国大部分地区基本符合。此时，全国的农作物都进入了茁壮成长阶段。',
		l1: '黄经105º',
		l2: '（07月06－08日）',
		link:'http://culture.qianlong.com/zt/xiaoshu/'
	},
	{
		intro: '大暑节气正值“三伏天”里的“中伏”前后，是一年中最热的时期，气温最高，农作物生长最快。同时，很多地区的旱、涝、风灾等各种气象灾害也最为频繁。',
		l1: '黄经120º',
		l2: '（07月22－24日）',
		link:'http://culture.qianlong.com/zt/dashu/'
	},
	{
		intro: '秋季的开始，草木开始结果，到了收获的季节。“秋”就是指暑去凉来。到了立秋，梧桐树开始落叶，因此有“落叶知秋”的成语。',
		l1: '黄经135º',
		l2: '（08月07－09日）',
		link:'http://culture.qianlong.com/zt/2018liqiu/'
	},
	{
		intro: '"处“是终止的意思，表示炎热即将过去，暑气于这一天结束，我国大部分地区气温逐渐下降。由于正值秋收之际，降水十分宝贵。',
		l1: '黄经150º',
		l2: '（08月22－24日）',
		link:'http://culture.qianlong.com/zt/chushu/'
	},
	{
		intro: '天气转凉，露凝而白。由于太阳直射点明显南移，各地气温下降很快，晚上会感到一丝丝的凉意，贴近地面的水气在草木上结成白色露珠，由此得名“白露”。',
		l1: '黄经165º',
		l2: '（09月07－09日）',
		link:'http://culture.qianlong.com/zt/bailu/'
	},
	{
		intro:'日光直射点又回到赤道，这是秋季九十天的中分点，这一天昼夜再次相等，从这一天后，北半球日短夜长。',
		l1: '黄经180º',
		l2: '（09月22－24日）',
		link:'http://culture.qianlong.com/zt/qiufen02/'
	},
	{
		intro: '露水以寒，将要结冰。此时太阳直射点开始向南移动，北半球气温继续下降，天气更冷，露水有森森寒意。这个节气表示冬季的开始，预示气候的寒凉程度将逐渐加剧。',
		l1: '黄经195º',
		l2: '（10月08－09日）',
		link:'http://culture.qianlong.com/zt/hanlu/'
	},
	{
		intro: '霜降节气含有天气渐冷、初霜出现的意思，是秋季的最后一个节气，也意味着冬天即将开始。霜降时节，养生保健尤为重要，民间有谚语“一年补透透，不如补霜降”，足见这个节气对人们的影响。',
		l1: '黄经210º',
		l2: '（10月23－24日）',
		link:'http://culture.qianlong.com/zhuanti/shuangjiang/'
	},
	{
		intro: '立冬后，就意味着冬季正式来临。草木凋零，蛰虫休眠，万物活动趋向休止。',
		l1:'黄经225º',
		l2: '（11月07－08日）',
		link:'http://culture.qianlong.com/zt/lidong/'
	},
	{
		intro: '开始下雪。北方冷空气势力增强，气温迅速下降，降水出现雪花，但此时为初雪阶段，雪星小，次数不多，黄河流域多在“小雪”节后降雪。',
		l1: '黄经240º',
		l2: '（11月22－23日）',
		link:'http://culture.qianlong.com/zt/xx2018/'
	},
	{
		intro: '降雪量增多，地面可能积雪。降雪天数和降雪量比小雪节气增多，地面渐有积雪。',
		l1: '黄经255º',
		l2: '（12月06－08日）',
		link:'http://culture.qianlong.com/zhuanti/daxuejieqi2018/'
	},
	{
		intro: '寒冷的冬天来临。此时太阳几乎直射南回归线，成为一年中白昼最短的一天。冬至以后北半球白昼渐短，气温持续下隆，并开始进入数九寒天。',
		l1: '黄经270º',
		l2: '（12月21－23日）',
		link:'http://culture.qianlong.com/zt/dongzhi/'
	},
	{
		intro: '气候开始寒冷。这个节气表示开始进入冬季最寒冷的季节，会有霜冻。',
		l1: '黄经285º',
		l2: '（01月05－07日）',
		link:'http://culture.qianlong.com/zt/xiaohan/'
	},
	{
		intro: '一年中最冷的时候。天气冷到极点，到了天寒低冻的时期，是一年中最冷的时节。',
		l1: '黄经300º',
		l2: '（01月20－21日）',
		link:'http://culture.qianlong.com/zt/dahan/'
	},
	{
		intro: '立是开始的意思，立春就是春季的开始。立春这一天记得吃春饼，传说吃了春饼和其中所包的各种蔬菜，将使农苗兴旺、六畜茁壮。',
		l1: '黄经315º',
		l2: '（02月03－05日）',
		link:'http://culture.qianlong.com/zt/2019lichun/'
	},
	{
		intro: '此时，气温回升、冰雪融化、降水增多，故取名为雨水。',
		l1: '黄经330º',
		l2: '（02月18－20日）',
		link:'http://culture.qianlong.com/zt/yushui1/'
	},
	{
		intro: '“惊”为惊醒，“蜇”为蛰伏，“惊蛰”就是指钻到泥土里越冬的小动物被雷震苏醒出来活动。',
		l1: '黄经345º',
		l2: '（03月05－07日）',
		link:'http://culture.qianlong.com/zt/jingzhe/'
	},
	{
		intro: '此时，阳在正东，阴在正西，由此昼夜平分，冷热均衡，为一年中最好的气候。',
		l1: '黄经360º',
		l2: '（03月20－22日）',
		link:'http://culture.qianlong.com/zt/chunfen/'
	},
	{
		intro: '这一时节天气晴朗、草木繁茂、万物“吐故纳新”，无论是大自然中的植被，还是与自然共处的人体，都在此时换去冬天的污浊，迎来春天的气息。' ,
		l1: '黄经15º',
		l2: '（04月04－06日）',
		link:'http://culture.qianlong.com/zt/2019qmj/'
	},
	{
		intro: '源自古人“雨生百谷”之说。谷雨节气的到来意味着寒潮天气基本结束，气温回升加快，有利于谷类农作物的生长。',
		l1: '黄经30º',
		l2: '（04月19－21日）',
		link:'http://culture.qianlong.com/zhuanti/guyu/'
	},
	{
		intro: '立夏表示即将告别春天，是夏天的开始。人们习惯上都把立夏当作是温度明显升高，炎暑将临，雷雨增多，农作物进入旺季生长的一个重要节气。',
		l1: '黄经45º',
		l2: '（05月05－07日）',
		link:'http://culture.qianlong.com/zt/lixia/'
	},
	{
		intro: '这个时候麦类等夏熟作物的籽粒开始灌浆饱满，但还未成熟，只是小满，还未大满。',
		l1: '黄经60º',
		l2: '（05月20－27日） ',
		link:'http://culture.qianlong.com/zt/xiaoman/'
	},
	{
		intro: '芒种的“芒”字，是指麦类等有芒植物的收获，芒种的“种”字，是指谷黍类作物播种的节令。芒种”到来预示着农民开始了忙碌的田间生活。',
		l1: '黄经75º',
		l2: '（06月05－07日）',
		link:'http://culture.qianlong.com/zt/mangzhong/'
	}
	
	);	
	
	
	
	var vw=$(window).width();
	var vh=$(window).height();
	$('.cover,.pageMain').height(vh);
	var bigTitleImgH=$('.bigTitle img').height();
	
	
	//背景自适应
	var viewRatio=vw/vh;
	var bgdRatio=1920/1080;
	if(viewRatio>bgdRatio){//屏幕比底图宽
		console.log("heng");
		$('.bgd,.coverBgd').css('width',vw);
		$('.bgd,.coverBgd').css('height','auto');
		$('.bgd,.coverBgd').css('top',0);
	}else{
		console.log("shuping");
		$('.bgd,.coverBgd').css('height',vh);
		$('.bgd,.coverBgd').css('width',bgdRatio*vh);
		$('.bgd').css('left',(vw-$('.bgd').width())/2);
		//$('.enterLink').text("vw="+vw+"bgd="+$('.bgd').width());
		$('.coverBgd').css('left',(vw-$('.coverBgd').width())/2);
	}
	if(vw<=480){
		$('.coverBgd').css('left','-60%');
	}
	
	//定位大标题
	var bgdW=$('.bgd').width();
	var posBigTitleL=bgdW*0.19+parseInt($('.bgd').css('left'));
	if(posBigTitleL<0){
		posBigTitleL=0;
	}
	$('.bigTitle').css('left',posBigTitleL);
	
	
	//定位轨道
	
	var scaleX=vw/1200;
	if(vw<=480){
		scaleX=vw/800;
	}
	var scaleY=scaleX;
	
	var railOrigW=$('.rail').width();
	var curJieqi=0;
	
	var posBigTitle=$('.bigTitle img').height();
	$('.aniTank').css('top',posBigTitle+$('.rail').height());
	$('.rail').css('width',railOrigW*scaleX);
	$('.rail').css('top',parseInt($('.aniTank').css('top'))-$('.rail').height()/2);
	
	
	//转换path为gsap识别的贝塞尔曲线
	var data = Snap.path.toCubic($("#svg_1").attr('d'))
		dataLength = data.length,
		points = [], //holds our series of x/y values for anchors and control points,
		pointsString = data.toString();

	// convert cubic data to GSAP bezier
	for (var i = 0; i < dataLength; i++) {
	  var seg = data[i];
	  if (seg[0] === "M") { // move (starts the path)
		var point = {};
		point.x = seg[1];
		point.y = seg[2];
		points.push(point);
	  } else { // seg[0] === "C" (Snap.path.toCubic should return only curves after first point)
		for (var j = 1; j < 6; j+=2) {
		  var point = {};
		  point.x = seg[j]*scaleX;
		  point.y = seg[j+1]*scaleY;
		  points.push(point);
		}
	  }

	}
	
	$('.earthTank,.earth,.earth img,.mask').height($('.earthTank').width());

	
	
	//地球公转
	TweenMax.set('.earthTank', {xPercent:-50,yPercent:-50});	
	TweenMax.set('.earthTank', {rotation:23.5});	
	
	var tl=new TimelineMax();
	var aniEarth=TweenMax.to(['.earthTank'], 5, {bezier:{values:points, type:"cubic"},repeat:0,ease:Linear.easeNone}); 
	tl.add(aniEarth);
	tl.pause();

	function moveOver(targetIdx){
		curJieqi=targetIdx;
		if(curJieqi>23){
			tl.seek(0);
			curJieqi=0;
		}
		showTip(targetIdx);
	}

	function moveEarth(targetIdx){
		if(curJieqi>11 && targetIdx==0){
			targetIdx=24;
		}
		if(curJieqi==0 && targetIdx>11){
			curJieqi=24;
			tl.seek(100);
		}
		$('.tip').hide();
		var percent=targetIdx/24;
		tl.tweenTo(tl.duration()*percent,{onComplete:moveOver,onCompleteParams:[targetIdx]});
		updateInfo(targetIdx);
	}
	
	function updateInfo(idx){
		if(idx==24){
			idx=0;
		}
		$('.intro').html(arrayJieqi[idx].intro);
		$('.l1').html(arrayJieqi[idx].l1);
		$('.l2').html(arrayJieqi[idx].l2);
		var strImg='css/img/bigTitle'+idx+'.png';
		$('.bigTitle img').attr('src',strImg);
		posBigTitle=$('.bigTitle img').height();
		
	}
	function showTip(idx){
		if(idx==24){
			idx=0;
		}
		$('.tip').css('left',parseInt($('.aniTank').css('left'))+$('.earthTank').position().left-$('.mask').width()/2);
		$('.tip').css('top',parseInt($('.aniTank').css('top'))+$('.earthTank').position().top-$('.earthTank').height()*0.8);
		if(vw<=480){
			
			$('.tip').css('top',parseInt($('.aniTank').css('top'))+$('.earthTank').position().top-$('.earthTank').height()*3);
		}

		$('.tip .name').html($('.navJieqi li[data_idx='+curJieqi+']').text());
		$('.tip .date').html(arrayJieqi[idx].l2);

		$('.tip').fadeIn();
		$('.navJieqi li').removeClass('cur');
		$('.navJieqi li[data_idx='+curJieqi+']').addClass('cur');
	}
	
	function init(idx){
		$('.navJieqi ul').eq(idx).show();
		$('.rail').attr('src','css/img/railTotal'+(idx+1)+'.png');
		var theFirst=$('.navJieqi ul').eq(idx).find('li:first').attr('data_idx')
		moveEarth(theFirst);
		updateSeason(idx);
	}

	$('.navJieqi li').click(function(){
		var idx=$(this).attr('data_idx');
		moveEarth(idx);
	})

	
	
	
	//地球自转
	$('.earth img').clone().prependTo(".earth");
	TweenMax.to( $(".earth"), 5, 
		{
		 x: +( $('.earth img').width()), 
		 ease: Linear.easeNone,
		 repeat: -1
		}
	);
	
	function updateSeason(idx){
		$('.navJieqi .title ul').slideUp();
		$('.navJieqi .title h3').removeClass('cur');
		$('.navJieqi .title').eq(idx).find('h3').addClass('cur');
		$('.navJieqi .title').eq(idx).find('ul').slideDown();
		var firstIdx=$('.navJieqi .title').eq(idx).find('ul li:first').attr('data_idx');
		$('.rail').attr('src','css/img/railTotal'+(idx+1)+'.png');
		$('.bgd').attr('src','css/img/bgd'+idx+'.jpg');
		$('.iconSeason').attr('src','css/img/icon'+(idx+1)+'.png');
		
		moveEarth(firstIdx);
		
		
		
		
	}
	$('.navJieqi .title h3').click(function(){
		var idxSeason=$(this).parent().index();
		updateSeason(idxSeason);
	})
	
	
	$('img').waitForImages({
        finished: function() {
			console.log("imgs loaded");
			//$('.pageLoading').css("visibility","hidden");
			$('.pageLoading').hide();
			//$('.txtLoading').text('加载完毕！');
			//$('a.btnEnter').show();
			//$('a.btnEnter').css('display','inline-block');
			//enterCover();
        },
        each: function() {

        },
        waitForAll: true
    });
	
	
	
	
	//封面
	var aniTxt1=TweenMax.from($('.coverTxt').eq(0),1,{opacity:0,y:'90%',ease:Power2.easeInOut}).pause();
	var aniTxt2=TweenMax.from($('.coverTxt').eq(1),1,{opacity:0,y:'90%',ease:Power2.easeInOut}).pause();
	var aniTxt3=TweenMax.from($('.coverTxt').eq(2),1,{opacity:0,y:'90%',ease:Power2.easeInOut}).pause();
	var aniTxt4=TweenMax.from($('.coverTxt').eq(3),1,{opacity:0,y:'90%',ease:Power2.easeInOut}).pause();
	
	if(vw>480){
		$('.btn1 a').hover(function(){
			aniTxt1.play();
		},function(){
			aniTxt1.reverse();
		})
		$('.btn2 a').hover(function(){
			aniTxt2.play();
		},function(){
			aniTxt2.reverse();
		})
		$('.btn3 a').hover(function(){
			aniTxt3.play();
		},function(){
			aniTxt3.reverse();
		})
		$('.btn4 a').hover(function(){
			aniTxt4.play();
		},function(){
			aniTxt4.reverse();
		})
	}else{
		$('.coverTxt').css('opacity',1);
		aniTxt1.seek(100);
		aniTxt2.seek(100);
		aniTxt3.seek(100);
		aniTxt4.seek(100);
	}
	
	$('.navMain a').click(function(){
		$('.cover').hide();
		$('.pageMain').show();
		var targIdx=$(this).parent('li').index();
		init(targIdx);
		
		//定位第二标题,一定要在初始化内容页后再运行
		var secTitleH=$('.secTitle').height();
		var posSecTitleT=posBigTitle-secTitleH;
		var posIcon=posBigTitle-$('.iconSeason').height();
		//var posSecTitleT=bigTitleImgH-secTitleH;
		$('.secTitle').css("top",posSecTitleT);
		$('.secTitle').css('left',posBigTitleL+$('.bigTitle').width());
		$('.enterLink').css('top',posBigTitle+10);
		$('.iconSeason').css('top',posIcon);
		$('.iconSeason').css('left',parseInt($('.secTitle').css('left'))+$('.l3').width()+20);
		if(vw<=480){
			$('.secTitle').css('left','10%');
			$('.enterLink').css('top','auto');
		}
	})
	$('.enterLink').click(function(){
		window.location.href=arrayJieqi[curJieqi].link;
	})
});