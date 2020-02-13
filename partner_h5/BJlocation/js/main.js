

// 初始化
$(document).ready(function() {
  
  var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    on: {
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      } 
    },
  });


  var arrimg = 
  [ 
  ];
  var loadNum = 0;
  for (var i = 0; i < arrimg.length; i++) {
    var aImg = document.createElement('img');
    aImg.src = arrimg[i];
    aImg.onload = function() {
      loadNum++;
      $('.loadnum').html('加载中...' + (Math.floor((loadNum / arrimg.length) * 100) + '%'));
      if (loadNum == arrimg.length) {
        $('.zindex').fadeOut();
        
      }
    };
  }


  var lists = $('#options_list');
  var items = lists.find('li');
  var key = lists.attr('key')
  var flag = true;
  var next = $('#next_icon');
  var scoreText = $('#current_score_num');
  var scoreDes = $('#score_des');
  var totalScore = 0;
  var current_num = 1;
  var bigImg = $('#big_img').find('img');
  var imgWidth = bigImg.width();              // 图片宽
  var imgheight = bigImg.height();            // 图片高

  if(imgWidth > imgheight){
    $('#big_img').addClass('WImg');
  }else{
    $('#big_img').addClass('HImg');
  }

  $.each(items, function(index, val) {

    $(this).on('click', function() {
      if(flag) {
        flag = false;

        if(current_num >= 10) {
          $('#next').attr('src', 'images/view_score.jpg');
        }

        var itemKey = $(this).attr('key');

        if(itemKey === key){
          $(this).addClass('true');

          totalScore += 10;

          scoreText.text(totalScore)

          slideToAns();
        }else{

          $(this).addClass('false');

          slideToAns();
        }
      }
    })

  });

  function slideToAns() {
    setTimeout(function() {
      mySwiper.slideTo(3)
      flag = true;
    }, 1000)
  }


  // 各按钮跳转
  next.on('click', function() {
    mySwiper.slideTo(2, -1)
    removeClassName()
    current_num ++;
    $('.current_num').text(current_num);
    $('.view').show();
    console.log(current_num);
    // if(current_num > 9) {
      
    // }
    if(current_num > 10) {
      
      mySwiper.slideTo(4, -1)
      $('#total_score_num').text(totalScore);
      changeDes()
    }

    if(totalScore == 100) {
      setTimeout(function() {
        $('.info_mask_wrap').fadeIn();
      }, 1500)
    }
  })

  $('#more').on('click', function() {
    mySwiper.slideNext(-1);
  })

  $('.start').on('click', function() {
    mySwiper.slideTo(2, -1)
  })

  $('#again').on('click', function() {
    mySwiper.slideTo(0, -1);
    totalScore = 0;
    current_num = 1;
    $('#next').attr('src', 'images/next_icon.jpg');
    $('#current_score_num').text(totalScore);
    $('.current_num').text(current_num);
    $('.info_mask_wrap').hide();
  })

  $('#invite').on('click', function() {
    $('#shareMask').show();
  })

  $('#shareMask').on('click', function() {
    $(this).hide();
  })

  $('.big_img').on('touchmove', function() {
    $('.view').hide();
  })

  $('#close').on('click', function() {
    $('.info_mask_wrap').fadeOut();
  })
  function changeDes(){
    if(totalScore == 100) {
      scoreDes.text('大侠实乃旷世奇才！坐等奖品飞来吧~')
    }else if(totalScore >= 70 && totalScore <= 90) {
      scoreDes.text('成绩不错！奖品正在不远处向您招手~')
    }else if(totalScore >= 10 && totalScore <= 60) {
      scoreDes.text('发挥不佳不要紧，再猜一次吧~')
    }else{
      scoreDes.text('这不可能！赶紧再猜一次吧')
    }
  }


  function removeClassName() {
    var itemLi = document.getElementById('options_list').getElementsByTagName('li');

    for(var i=0; i<itemLi.length; i++) {
      itemLi[i].className = '';
    }
  }



  var vh=$(window).height();
  var vw=$(window).width();
  var imgRatio=750/1334;
  if(vw>vh){
     $('.swiper-container').height(vh);
     $('.swiper-container').width(vh*imgRatio);
  }


  
});