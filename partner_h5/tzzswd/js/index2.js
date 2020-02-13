$(document).ready(function() {
  var arrimg = [
    'css/images/p1-0.jpg',
    'css/images/p2-0.jpg',
    'css/images/p5-1.png',
    'css/images/p5-7.jpg',
    'css/images/dl.png',
    'css/images/p5-9.png',
    'css/images/p5-10.png',
    'css/images/p6.jpg',
    'css/images/p5-5.png'
  ];
  var loadNum = 0;
  for (var i = 0; i < arrimg.length; i++) {
    var aImg = document.createElement('img');
    aImg.src = arrimg[i];
    aImg.onload = function() {
      loadNum++;
      $('.loadnum').html(Math.floor((loadNum / arrimg.length) * 100) + '%');
      // console.log(Math.floor(loadNum/arrimg.length)*100+'%')
      if (loadNum == arrimg.length) {
        $('.zindex').css('display', 'none');
      }
    };
  }
});
var mySwiper = new Swiper ('.swiper-container', {
   direction: 'vertical',
    loop: false,
    freeMode : false,
   mousewheelControl : false,
   nextButton:'.swiper-button-next',
   onInit: function(swiper){
         swiperAnimateCache(swiper);
         swiperAnimate(swiper);
      },
  onSlideChangeStart: function(swiper){
        swiperAnimate(swiper);
    },
    watchSlidesProgress: true,    
       onSetTransition: function(swiper, speed) {
        for (var i = 0; i < swiper.slides.length; i++){
          es = swiper.slides[i].style;
          es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = speed + 'ms';
        }
      }
       });

// ************************* 高度设置 *************************
 var wh=window.innerHeight;
 $('.guize').css({
 	 'padding-top':wh*0.11+'px'
 })
 $('.craper a').css({
    'height':window.innerWidth*0.0933+'px'
})
 $('.xxyd a').css({
    'height':window.innerWidth*0.2104*35/101+'px'
})
$('.jgts a').css({
    'height':window.innerWidth*0.533*80/400+'px'
})
 $('html,body').height($('body')[0].clientHeight);//这里为处理安卓手机软盘代码
 //*************************输入手机号监测************************
$('#login').css({
     'visibility':"visible"
});
  $('#login').on('click',function(){
          var phone = $('#phone').val();
          var reg = /^[1][3,4,5,7,8][0-9]{9}$/
          if(!reg.test(phone)){ 
            alert('请填写正确的手机号')
            return false;
          }

          if(!phone){
            // alert('请填写手机号');
            return false;
          }else{
            $('.login_mask').show();
            $('.mask_text').html('登陆中...')
            setTimeout(function(){
              mySwiper.slideTo(2, 500, false);
              $('.login_mask').hide();
            }, 1000);
          }
    });

 var wrongArray = []; 
 var kikNum = 0; //点击次数
 var cores = 0; //总分
 var choujiang = false; //是否抽奖
 //*******************************跳转页面*******************************
//
$('#arrow').click(function(){
   mySwiper.slideTo(1, 500, false);
});
//开始答题
$('a.jxdt img').click(function(){
   mySwiper.slideTo(3, 500, false);
});
//返回学习园地
$('.xxyd a').bind('click',function(){
    mySwiper.slideTo(2, 500, false);
    $('a.jxdt img').attr('src','css/images/p3-4.png')
})
//提交答案
$('#tijiao img').click(function(){
    coreCount();
    kikNum += 1;
        if(kikNum <2){
            if(cores != 10)
              { //没答对，再答一次
                $('.jgts').hide();
                $('.jgts1').show();
              } 
           else{  //够10分了 
                if(!choujiang){
                     //抽奖
                    $('.jgts').hide();
                    $('.jgts3').show();
                }
                 else{ 
                     //抽过奖了
                    $('.jgts').hide();
                    $('.jgts4').show();
                    }
              }
         }
         else{ //次数够2次了
              if(cores != 10)
                 { //没答对，拜拜
                  $('.jgts').hide();
                  $('.jgts2').show();
                } 
             else{  //够10分了 
                   if(!choujiang){
                     //抽奖
                    $('.jgts').hide();
                    $('.jgts3').show();
                     }
                    else{ 
                     //抽过奖了
                      $('.jgts').hide();
                      $('.jgts4').show();
                    }
                }
         }
    
   mySwiper.slideTo(4, 500, false);
});
//很遗憾，没答对，再来一次
$('.jgts1>a').click(function(){
   qingling();//错误答案归零 
   $('a.jxdt img').attr('src','css/images/p3-4.png')
   mySwiper.slides[3].scrollTop = 0;//第三页滚动到最上面
   mySwiper.slideTo(2, 500,false);    
});
//第二次答又没有答对
$('.jgts2>a').click(function(){
   window.location.reload();//重新加载页面
});
//答对了，中奖
$('.jgts3>a').click(function(){
   mySwiper.slideTo(5, 500, false);
});
//已经抽过奖了
$('.jgts4>a').click(function(){
   window.location.reload();//重新加载页面
});
// 抽奖页
$('.craper a').bind('click',function(){
     $('.cover2').hide();
     $('.craper').hide();
})
$('.craper div').bind('click',function(){
    window.location.reload();//重新加载页面
})
$('.fysy').click(function(){
       window.location.reload();//重新加载页面
})
 // *************************第四页选择题 ************************************
       //单选添加对勾
       $.each($('.qs'), function(index, val) {
          $(this).find('input').on('click', function(){
            	$(this).parents('.qsBox').find('input').removeClass('check_right');
            	$(this).addClass('check_right');
          })
       });
      //多选添加对勾
        $.each($('.qsmore'), function(index, val){
        		$(this).find('input').on('click', function(){
              var selectKey = $(this).attr('id');
            	$(this).toggleClass('check_right');
           })
       });  
       //选择题求分数		
      function coreCount()
      {
        var qestions = $('.timu');
        var key;
        for(var i = 1;i <= qestions.length;i++)
              {
                  key = qestions.eq(i-1).attr('key');
                  var answer=$("input[name=q"+i+"]");
                  var str='';
                  for(var j=0;j<answer.length;j++)
                  {
                       if(answer.eq(j).hasClass('check_right')){
                              answer.eq(j).attr('value','1');
                       }
                       str += answer.eq(j).attr('value');
                  }
                  if(key == str){
                      cores += 1;//答对加一分
                  }
                  else{
                       console.log(i)
                       wrongArray.push(i); //错误的题目，序号保存到数组里。
                  }
                }
            
        // alert("Your score is "+cores);
      }
      function qingling(){
          for(var i in wrongArray){
              var wrongnum = wrongArray[i];
              var wrongqes = $("input[name=q"+wrongnum+"]");
                 for(var j=0;j<wrongqes.length;j++){
                      wrongqes.eq(j).removeClass('check_right');
                       wrongqes.eq(j).attr('value','0');
                 } 
          }
          cores -= $('.timu').length - wrongArray.length;
      }      
//选择题结束



// ************************************抽奖************************************
$('.plate').css({
    'height':window.innerWidth*856/750+'px'
})
$('#plateBtn').css({
    'width':window.innerWidth*.332+'px',
    'height':window.innerWidth*.332+'px'
})
$(function(){

  var $plateBtn = $('#plateBtn');

  var $plate = $('.plate');

  var $result = $('#result');

  var $resultTxt = $('#resultTxt');

  var $resultBtn = $('#resultBtn');

  var rp = $('.rp')

  function showrp() {

    rp.show();

    $('.rp1').addClass('show1');
    $('.rp2').addClass('show2');

  }

  $plateBtn.one('click',function(){

    var data = [0, 1, 2, 3, 4, 5, 6, 7];

    data = data[Math.floor(Math.random()*data.length)];

    switch(data){

      case 1: 

        rotateFunc(1,110,'恭喜您获得5元手机充值卡');
        
        break;

      case 2: 

        rotateFunc(2,222,'恭喜您获得5元手机充值卡');
        

        break;

      case 3: 

        rotateFunc(3,250,'恭喜您获得5元手机充值卡');
        

        break;

      case 4: 

        rotateFunc(4,80,'这次没有抽中，再接再厉哦~');
        
        break;

      case 5: 

        rotateFunc(5,195,'这次没有抽中，再接再厉哦~');

        break;

      case 6: 

        rotateFunc(6,280,'这次没有抽中，再接再厉哦~');

        break;

      case 7: 

        rotateFunc(7,310,'这次没有抽中，再接再厉哦~');

        break;

      default:

        rotateFunc(0,340,'恭喜您获得5元手机充值卡');

    }

  });



  var rotateFunc = function(awards,angle,text){  //awards:奖项，angle:奖项对应的角度

    $plateBtn.stopRotate();

    $plateBtn.rotate({

      angle: 0,

      duration: 5000,

      animateTo: angle + 1440,  //angle是图片上各奖项对应的角度，1440是让指针固定旋转4圈

      callback: function(){
        console.log(angle)
        $('.prizeDesc').html(text);
        if(text == '恭喜您获得5元手机充值卡'){
            $('.craper').hide();
            $('.cover2').show();
            $('.craper1').show();
        }
        else if(text == '这次没有抽中，再接再厉哦~'){
            $('.craper').hide();
            $('.cover2').show();
            $('.craper2').show();
        }
      }

    });

  };
});