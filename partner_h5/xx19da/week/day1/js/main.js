
$(document).ready(function() {
  var arrimg = [
    'images/logo.png',
    'images/check_false.png',
    'images/check_off.png',
    'images/check_on.png',
    'images/close.png',
    'images/content.png',
    'images/countdown.png',
    'images/dang.png',
    'images/home_bg.jpg',
    'images/home_desc.png',
    'images/main_img.jpg',
    'images/page_bg.jpg',
    'images/qs_bg.jpg',
    'images/record_bg.jpg',
    'images/login.png',
    'images/lyplate.png',
    'images/return_icon.png',
    'images/rotate-static.png',
    'images/rotate-static2.png',
    'images/RP1.png',
    'images/RP2.png',
    'images/scoreText.png',
    'images/home_title.png',
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
      }
    };
  }
});

//音乐播放
// document.addEventListener('DOMContentLoaded', function () {
//    function audioAutoPlay() {
//       var audio = document.getElementById('audio');
//          audio.play();
//       document.addEventListener("WeixinJSBridgeReady",function(){WeixinJSBridge.invoke('getNetworkType',{}, function(e){document.getElementById('audio').play()})},false);
//    }
//    audioAutoPlay();
// });


// $('html,body').one('click',function(){
//    audio.play();
// });


// 初始化
$(function(){
  var mySwiper = new Swiper('.swiper-container', {});


  var vh=$(window).height();
  var vw=$(window).width();
  var imgRatio=750/1334;
  if(vw>vh){
     $('.swiper-container').height(vh);
     $('.swiper-container').width(vh*imgRatio);
  }

  $('.return').on('click', function(){
    mySwiper.slideTo(0,-1, false);
  })

  
  $('.return_icon').on('click', function(){
    mySwiper.slideTo(5, 500, false)
  })

  $('.nextPage').on('click', function(){
    mySwiper.slideTo(1, 500, false)
  })

  $('.login').on('click',function(){
    var name = $('#name').val();
    var phone = $('#phone').val();

    if(!name || !phone){
      alert('请填写正确信息');
      return;
    }else{
      $('.login_mask').show();
      $('.mask_text').html('登陆中...')
      setTimeout(function(){
        mySwiper.slideTo(2, 500, false);
        $('.login_mask').hide();
      }, 1000);
    }
  });

  $('.mask').css({
    height: $('.qs_bg').height()
  })

  $('.start').bind('click', function(){
    mySwiper.slideTo(3, 500, false);
  })

  var qs = $('.qs');
  var n = 0;
  var mask = $('.mask');

  $('.close').on('click', function(){
    $('.mask').hide();
  });

  $.each(qs, function(index, val) {
    var key = $(this).attr('key');
    $(this).find('input').one('click', function(){
      // $(this).unbind('click');
      var selectKey = $(this).attr('id');
      if(selectKey === key){
        console.log($(this))
        $(this).parents('.qsBox').find('input').removeClass('check_false');
        $(this).addClass('check_right');
        n++
        console.log(n)
        if(n >= 3){
          $('.scoreCircle').html(n)
          setTimeout(function(){
            mySwiper.slideTo(4, 500, false);
          }, 800)
        }
      }else{
        $(this).addClass('check_false');
        console.log($(this).parents())
        $(this).parents('.qsBox').find('input').removeClass('check_right');
        $('.answerSelect').html(key.slice(0,1))
        mask.show();
      }
    })

  });

});


// 抽奖
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

        rotateFunc(1,10,'恭喜您获得30元手机充值卡');
        
        break;

      case 2: 

        rotateFunc(2,85,'恭喜您获得30元手机充值卡');
        

        break;

      case 3: 

        rotateFunc(3,173,'恭喜您获得30元手机充值卡');
        

        break;

      case 4: 

        rotateFunc(4,365,'恭喜您获得30元手机充值卡');
        
        break;

      case 5: 

        rotateFunc(5,47,'这次没有抽中，再接再厉哦~');

        break;

      case 6: 

        rotateFunc(6,125,'这次没有抽中，再接再厉哦~');

        break;

      case 7: 

        rotateFunc(7,217,'这次没有抽中，再接再厉哦~');

        break;

      default:

        rotateFunc(0,320,'这次没有抽中，再接再厉哦~');

    }

  });



  var rotateFunc = function(awards,angle,text){  //awards:奖项，angle:奖项对应的角度

    $plateBtn.stopRotate();

    $plateBtn.rotate({

      angle: 0,

      duration: 5000,

      animateTo: angle + 1440,  //angle是图片上各奖项对应的角度，1440是让指针固定旋转4圈

      callback: function(){
        $('.prizeDesc').html(text);
        if(text == '恭喜您获得30元手机充值卡'){
          showrp()
          $('#plateBtn').addClass('plateBtn_on');
        }
      }

    });

  };
});