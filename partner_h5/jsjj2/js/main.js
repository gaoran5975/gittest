
$(document).ready(function() {
  var arrimg = [
    'images/logo.png',
    'images/banner.png',
    'images/bg.jpg',
    'images/false1.png',
    'images/false2.png',
    'images/false3.png',
    'images/false4.png',
    'images/false5.png',
    'images/false6.png',
    'images/false7.png',
    'images/false8.png',
    'images/false9.png',
    'images/false10.png',
    'images/last_bg.png',
    'images/q1.png',
    'images/q1a.png',
    'images/q1b.png',
    'images/q1c.png',
    'images/q1d.png',
    'images/q2.png',
    'images/q2a.png',
    'images/q2b.png',
    'images/q2c.png',
    'images/q2d.png',
    'images/q3.png',
    'images/q3a.png',
    'images/q3b.png',
    'images/q4.png',
    'images/q4a.png',
    'images/q4b.png',
    'images/q4c.png',
    'images/q4d.png',
    'images/q5.png',
    'images/q5a.png',
    'images/q5b.png',
    'images/q5c.png',
    'images/q5d.png',
    'images/q6.png',
    'images/q6a.png',
    'images/q6b.png',
    'images/q6c.png',
    'images/q6d.png',
    'images/q7.png',
    'images/q7a.png',
    'images/q7b.png',
    'images/q7c.png',
    'images/q7d.png',
    'images/q8.png',
    'images/q8a.png',
    'images/q8b.png',
    'images/q8c.png',
    'images/q8d.png',
    'images/q9.png',
    'images/q9a.png',
    'images/q9b.png',
    'images/q9c.png',
    'images/q9d.png',
    'images/q10.png',
    'images/q10a.png',
    'images/q10b.png',
    'images/q10c.png',
    'images/q10d.png',
    'images/score.png',
    'images/start.png',
    'images/submit.png',
    'images/text.png',
    'images/true.png',

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


// 初始化
$(document).ready(function() {
  var mySwiper = new Swiper('.swiper-container', {});


  var vh=$(window).height();
  var vw=$(window).width();
  var imgRatio=750/1334;
  if(vw>vh){
     $('.swiper-container').height(vh);
     $('.swiper-container').width(vh*imgRatio);
  }


  $('.start').click(function(){
    mySwiper.slideTo(1, 500, false);//切换到第一个slide，速度为.5秒
  });



  var question = $('.question');
  var _img = question.find('img:not(:first-child)');
  var score = 0;
  _img.bind('click', function(e){
    var _key = $(this).parents().attr('key'); // 获取正确答案
    var _id= $(this).parents().attr('id');    // 获取题目id
    var _option = $(this).attr('option');     // 获取选项

    if(_option == _key){
      console.log('答对了');
      location.href="#truePage";
      score += 10;
    }else{
      console.log('答错了');
      $('.falseNext').attr('src', 'images/false'+ _id +'.png');   // 答错调取对应的错误页面
      location.href="#falsePage";
    }
    console.log(score);
    return score;
  });


  var n=1;
  $('.trueNext').bind('click', function(){
    n++;
    nextQuestion(n);
    console.log('n: '+n);
  });

  $('.falseNext').bind('click', function(){
    n++;
    nextQuestion(n);
    console.log('n: '+n);
  });
  
  function nextQuestion(n){
    location.href="#" + n;

    if(n>=11){
      // console.log('答题结束，您的分数为：' + score);
      $('.score').text(score + ' 分');
      location.href="#scorePage";
    }
  }

  $('.scoreNext').bind('click', function(){
    location.href="#msgPage";
  });


  
  $('.submit').bind('click', function(){
    var name = $('.name').val();
    var phone = $('.phone').val();

    //if(name === ''){
      // alert('请填写姓名');
      // return;
    //  location.href="#lastPage";
    //  return;
    //}
    var postData = {
      name : name,
      phone : phone,
      score : score
    };

    $.ajax({
      url: 'http://partner.qianlong.com/weixin/jsjj/savedata',
      type: 'get',
      dataType: 'json',
      data : postData
    })
    .done(function(data) {
      console.log(data);
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
    alert('提交成功');
    location.href="#lastPage";

    
  });
  
});