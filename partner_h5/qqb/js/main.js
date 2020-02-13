

// 初始化
$(document).ready(function() {
  function newSwiper() {
    var mySwiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
      direction: 'vertical',
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
  }

  var arrimg = 
  [ 
    'images/common_nav.png',
    'images/down.png',
    'images/home_1.png',
    'images/home_2.png',
    'images/home_3.png',
    'images/home_4.png',
    'images/home_5.png',
    'images/home_6.png',
    'images/home_bg.jpg',
    'images/main_img.jpg',
    'images/map.jpg',
    'images/p10.jpg',
    'images/p11.jpg',
    'images/p12.jpg',
    'images/p2.jpg',
    'images/p3.jpg',
    'images/p4.jpg',
    'images/p5.jpg',
    'images/p6.jpg',
    'images/p7.jpg',
    'images/p8.jpg',
    'images/p9.jpg' 
  ];
  var loadNum = 0;
  for (var i = 0; i < arrimg.length; i++) {
    var aImg = document.createElement('img');
    aImg.src = arrimg[i];
    aImg.onload = function() {
      loadNum++;
      // console.log(this);
      // console.log(loadNum*10+'%')
      $('.loadnum').html('加载中...' + (Math.floor((loadNum / arrimg.length) * 100) + '%'));
      // console.log(Math.floor(loadNum/arrimg.length)*100+'%')
      if (loadNum == arrimg.length) {
        $('.zindex').fadeOut();
        newSwiper();
      }
    };
  }




  var vh=$(window).height();
  var vw=$(window).width();
  var imgRatio=750/1334;
  if(vw>vh){
     $('.swiper-container').height(vh);
     $('.swiper-container').width(vh*imgRatio);
  }

  
});