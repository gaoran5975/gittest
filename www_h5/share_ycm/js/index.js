var  wH = window.innerHeight;
var wW = window.innerWidth;
$('.p0-1').css({
	 'height':0.41*wH+'px'
});
$('.p0-2').css({
	 'height':0.83*wH+'px'
})

$('.xuanzekuang').css({
	 'height':wW*0.7387*818/554+'px',
	 'top':(wH - wW*0.7387*818/554)/2+'px'
})
$('.p1choice').css({
	 'top':(wH - wW*0.7387*818/554)/2-50+'px'
})

$('.gz').css({
	 'height':0.65*wH+'px'
})
$('.dizhi').css({
	'height':0.61*0.63*wH+'px'
})

//音乐播放按钮
document.addEventListener('DOMContentLoaded', function () {
          function audioAutoPlay() {
              var audio = document.getElementById('audio');
                  audio.play();
              document.addEventListener("WeixinJSBridgeReady",function(){WeixinJSBridge.invoke('getNetworkType',{}, function(e){document.getElementById('audio').play()})},false);
          }
          audioAutoPlay();
      });
        $('html,body').one('touchstart',function(){
          audio.play();
        });
        $("#audioPlay").on('click',function(){
        if(audio.paused){
            audio.play();
            $("#audioPlay").addClass('rotate');
        }else{
            audio.pause();
            $("#audioPlay").removeClass('rotate');
        }
    });  
	

var mySwiper = new Swiper ('.swiper-container', {
             direction: 'vertical',
              loop: false,
              freeMode : false,
             mousewheelControl : true,
			 nextButton:'.swiper-button-next',
             onInit: function(swiper){
                   swiperAnimateCache(swiper);
                   swiperAnimate(swiper);
                },
            onSlideChangeStart: function(swiper){
                  swiperAnimate(swiper);
				   console.log(mySwiper.activeIndex)  
              },
             onSlideChangeEnd: function(swiper){ 
                     swiperAnimate(swiper);
              },
              onTransitionEnd: function(swiper){
                   swiperAnimate(swiper);
              },
              watchSlidesProgress: true,
                 onSetTransition: function(swiper, speed) {
                  for (var i = 0; i < swiper.slides.length; i++){
                    es = swiper.slides[i].style;
                    es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = speed + 'ms';
                  }
                }
})
$('.next1').click(function(){
	mySwiper.slideTo(1, 600, true);
})

$('.p1-1').click(function(){
	  mySwiper.slideTo(2, 600, true);
})
$('.p1-2').click(function(){
	   mySwiper.slideTo(3, 600, true);
})
//地址选择
var dizhi = 0;
$('.dizhi>div').click(function(){
	 dizhi = $(this).index();
	 $('.dizhi>div').each(function(){
		   $(this).find('img').eq(0).attr({
		   'src':'css/images/p2-3.png'
		});
	 })
	 $('.dizhi>div').eq(dizhi).find('img').eq(0).attr({
		   'src':'css/images/p2-4-'+dizhi+'.png'
	 })
	 $('.p4-5').attr({
		 'src':'css/images/p4-5-'+dizhi+'.png'
	 })
})
$('#retry1').click(function(){
	 //$('.dizhi>div').each(function(){
	//	   $(this).find('img').eq(0).attr({
	//	   'src':'css/images/p2-3.png'
	 //});
	 //})
	// $('.dizhi>div').eq(0).find('img').eq(0).attr({
	//	   'src':'css/images/p2-4-0.png'
	 //})
	// $('.p4-5').attr({
	//	 'src':'css/images/p4-5-0.png'
	 //})
		mySwiper.slideTo(1, 600, true);
})
$('#retry2').click(function(){
	  mySwiper.slideTo(1, 600, true);
})   
//日期设置      
       var sel1 = $('#selY');//获取select
	   var options1='';
       for ( var i = 2019; i >= 1921; i--)//循环添加年份
       {
           options1 += '<option  value="'+i+'">'+i+'</option>';
       }
	  sel1.append(options1);       
       var sel2 = $('#selM');//获取select
	   var options2='';
		       for ( var i = 1; i <= 12; i++)//循环添加月份
		       {
		           options2 += '<option  value="'+i+'">'+i+'</option>';
		       }
	  sel2.append(options2);
	   var sel1Val,sel2Val;
	   var selname;var selname2; 
	   var flag = true;
	function checkTime(){		
		 selname = $('#name1').val();
		 if (selname == null || selname == ''){
		       alert("请填写您的姓名。"); 
			   flag = false;
			   return;
		  }
		 sel1Val = sel1.find("option:selected").attr("value");
		 sel2Val = sel2.find("option:selected").attr("value");
		 if(sel1Val==2019 && sel2Val>6){
			 alert("日期错误，请重新选择。")
			flag = false;
			return;
		 }
		 else if(sel1Val==1921 && sel2Val<7){
			 alert("日期错误，请重新选择。")
		    flag = false;
			return;
		 }
          flag = true;
	}
function checkTime2(){
	 selname2  = $('#name2').val();
		 if (selname2 == null || selname2 == ''){
		       alert("请填写您的姓名。"); 
			   flag = false;
			   return;
		  }
		  flag =true;
}	
var name; 
var num=0;
var nowyear = 2019, nowmonth = 6;
var dangling = 0;	
$('#queding1').click(function(){
	   checkTime();
	  if(flag){
		     num++; //点击人数统计
			 $('.name').html(selname);
			 $('.year').html(sel1Val);
			 $('.month').html(sel2Val);
			 if((sel1Val == 2018&& sel2Val>6)|| sel1Val == 2019){ //尚在预备期
				 $('.p1,.p3').hide();
				 $('.p2').show();
			 }
			 else if((sel1Val == 2017 && sel2Val>=7) || ( sel1Val == 2018 && sel2Val<=6)){ //入党不够1年
				  $('.p1,.p2').hide();
				  $('.p3').show();
			 }
			 else{
				 dangling =  sel2Val <= nowmonth ?  (nowyear-sel1Val-1) : (nowyear-sel1Val-2); 
				 $('.dltime').html(dangling);
				  $('.p3,.p2').hide();
				  $('.p1').show();
			 }	
			console.log(dangling)
			mySwiper.slideTo(4, 600, true);
	   }	  
})


$('#queding2').click(function(){
	 checkTime2();
     if(flag){
		  num++; //点击人数统计
		  $('.name').html(selname2);
		   mySwiper.slideTo(5, 600, true);
	 }
})	

//canvas 画图
function getHeight(objw,orginw,orginh){// 新区块的宽， 原图片的宽，高。
  var objH;
   //objW = parseInt(wW * objw);// 手机端的宽
   objH = parseInt(objw * orginh / orginw);
    return objH;
}

function drawCanvas(){
       mycanvas = document.getElementById("myCanvas");
          //alert(mycanvas.width)
		     phoneW = mycanvas.width;
             phoneH = mycanvas.height;
		  var ctx = mycanvas.getContext("2d");
          ctx.clearRect(0,0,phoneW,phoneH);
          //ctx.globalCompositeOperation = "destination-over";
          ctx.fillStyle = '';
          ctx.fillRect(0,0,mycanvas.width,mycanvas.height);
            //图0 最先绘制
			  img0 = new Image;
			  img0.src = 'css/images/bg3.jpg';
              img0.onload = function(){               
                 console.log(img0.complete)
                  if(img0.complete){
                      ctx.globalAlpha=1;
                      ctx.drawImage(img0,0,0,wW,wH);
                 }
              }
			  img1 = new Image;
			  img1.src = 'css/images/p5-1.png';
              var height1 = getHeight(0.25*wW,192,266);
			  console.log(height1)
			  setTimeout(function(){
				  ctx.drawImage(img1,0,phoneH*0.76,0.25*mycanvas.width,height1);
			  },3000)
			  
		//定义对象
               var obj = function(){};
              obj.prototype.init = function(l,t,w){
                   this.left = phoneW*l;
                   this.top = phoneH*t;
                   this.width = phoneW*w;
              }
			  
		var text1 = 	'同志';
	    var text2 = '欢迎你向党组织靠拢！';
        ctx.font = "1.3em 隶书";  
		ctx.fillStyle = '#f2e872';
	  ctx.font = "1em '楷体'";
	  ctx.textAlign = 'left';
	  ctx.shadowBlur = 10;
	  ctx.shadowOffsetX = 5;
	  ctx.shadowOffsetY = 5;
	  var text1Pos = new obj();
	  var text1left;
	  text1left = 0.48  ;
	  text1Pos.init(text1left,getHeight(1,750,840)/phoneH,0.67);
	  var text2Pos = new obj();
	  text2Pos.init(0.61,getHeight(1,750,890)/phoneH,0.67);
	  ctx.globalAlpha=0.6;
	  ctx.fillText(text1,text1Pos.left,text1Pos.top+5);

 }
 
 drawCanvas();
      //画图结束    
