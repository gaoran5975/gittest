// 初始化
$(document).ready(function() {
  
  var aniIndex = 8;
  var f = 1;
  var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination',
    },
    on: {
      init: function(swiper){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
        $('.swiper-pagination').hide();


      }, 
      slideChangeTransitionStart: function() {
        if(swiper.activeIndex > 0 && swiper.activeIndex < 6) {
          $('.swiper-pagination').show();
        }else{
          $('.swiper-pagination').hide();
        }


        // if(swiper.activeIndex === 1){
        //   swiper.allowSlidePrev = false;
        //   swiper.allowSlideNext = false;
        // }
      },
      slideChangeTransitionEnd: function(){
        swiperAnimate(this);
        if(swiper.activeIndex === aniIndex) {
          percentAni();
        }else{
          $('.bar-percent').width(0)
        }

        console.log(swiper.activeIndex);
        
        if(swiper.activeIndex === 2){
            audio = document.getElementById("audio");
            if(f == 1){
              $("#audioPlay").addClass('rotate');
              audio.play();
              f = 2;
            }
            $("#audioPlay").show();
        }

        if(swiper.activeIndex === 7)
          swiper.allowSlidePrev = false;

        if(swiper.activeIndex === 8)
          swiper.allowSlideNext = false;
      },
    },
  });

  // console.log("here");
  // swiper.allowSlideNext = true
  // swiper.slideTo(9,-1);
  // document.addEventListener("WeixinJSBridgeReady", function () { 
  //   document.getElementById('video').play(); 
  // }, false); 

  $.ajax({
    type: "get",
    async: true,
    url: "/bjzg2an/api/get_data",
    success: function(json){
      obj = eval('(' + json + ')');
      _z = $("#zanlist");

      $.each(obj, function(idx,val){
        id = idx + 1;
        _txt = '<li id="zanitem" class="zan-item item' + id + '" rel="' + val.id + '"><i class="zanNum">' + val.count + '</i>' + val.content + '</li>'
        _z.append(_txt);
      })

      for(i=0;i<10;i++){
        if($("#zanlist > li").eq(i) != undefined){
          update_font($("#zanlist > li").eq(i));
        }
      }
    },
    error: function(){
      console.log("server error");
    }
  });

  $("#video").on("ended", function(){
    // swiper.allowSlideNext = true;
    // swiper.slideNext();
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

  var vh=$(window).height();
  var vw=$(window).width();
  var imgRatio=750/1334;
  if(vw>vh){
     $('.swiper-container').height(vh);
     $('.swiper-container').width(vh*imgRatio);
  }

  $('.option-list li').on('click', function() {
    $(this).toggleClass('active')
  })

  $('.other-box').on('click', function() {
    $(this).find('.text-box').show();
    $(this).find('.textarea').focus();
  })


  // 点赞
  $(document).on('click', '#zanitem', function() {
    var _li = $(this);
    var zan = _li.find(".zanNum");
    zan.text(+zan.text() + 1);
    update_font(_li);

    var id = _li.attr("rel");
    $.ajax({
      type : "post",
      async : true,
      data:{
        "id": id,
      },
      url: "/bjzg2an/api/post_zan",
      success: function(json){},
      error: function(){
        console.log("server error");
      }

    });
  });


  // 百分比动画
  function percentAni() {
    var li = $('.result-item');
    $.each(li, function(index, val) {
      var percent = $(this).find('.result-percent').text();
      var barPercent = $(this).find('.bar-percent');
      if(percent === '100%') {
        barPercent.addClass('full');
      }
      barPercent.animate({
        width: percent
      },2000)
    });
  }

  $('#again').on('click', function() {
    swiper.allowSlidePrev = true;
    swiper.slideTo(2, -1)
  })

  $('#share').on('click', function() {
    $('.share-mask').fadeIn();
  })

  $('.share-mask').on('click', function() {
    $(this).fadeOut();
  })

  $(document).on("click", "#sub", function() {
    var _this = $(this);
    var _qid = _this.attr("rel");
    var _li = _this.prev("ul").find("li");
    var _ans = new Array();
    var cnt = 0;
    $.each(_li, function(index, val) {
      if($(val).hasClass("active")){
        // console.log($(val).attr("rel"));
        _ans.push($(val).attr("rel"));
        cnt ++;
      }
    });
    _txt = _this.prev("ul").find("textarea")[0];

    flag = false;
    if(cnt == 0 && _txt.value != '')
      flag = true;
    else if (cnt != 0)
      flag = true;
    if(!flag) {
      console.log('no answer!');
      return;
    }
    
    $.ajax({
      type: "post",
      data:{
        "uid": userid,
        "qid": _qid,
        "d1": _ans.toString(),
        "d2": _txt.value
      },
      url: "/bjzg2an/api/post_data",
      success: function(json){
        var obj = eval('(' + json + ')')
        $("#result-list").html('')
        switch(_qid){
          case '1' :
              $("#rtitle").text('1.你最希望看到“北京组工”推送哪些内容？');
              $("#result-list").append(result_field('A','大事要闻', get_cnt(obj.d1, 'A'), obj.d2.unt));
              $("#result-list").append(result_field('B','组工动态', get_cnt(obj.d1, 'B'), obj.d2.unt));
              $("#result-list").append(result_field('C','组工文化', get_cnt(obj.d1, 'C'), obj.d2.unt));
              $("#result-list").append(result_field('D','政策解读', get_cnt(obj.d1, 'D'), obj.d2.unt));
              $("#result-list").append(result_field('E','任前公示', get_cnt(obj.d1, 'E'), obj.d2.unt));
              $("#result-list").append(result_field('F','党务知识', get_cnt(obj.d1, 'F'), obj.d2.unt));
              $("#result-list").append(result_field('G','其他', obj.d3.cnt1, obj.d2.unt));
              break;
          case '2' :
              $("#rtitle").text('2.你最喜欢“北京组工”哪种形式的推送？');
              $("#result-list").append(result_field('A','普通图文', get_cnt(obj.d1, 'A'), obj.d2.unt));
              $("#result-list").append(result_field('B','图说图解', get_cnt(obj.d1, 'B'), obj.d2.unt));
              $("#result-list").append(result_field('C','语音播报', get_cnt(obj.d1, 'C'), obj.d2.unt));
              $("#result-list").append(result_field('D','视频动漫', get_cnt(obj.d1, 'D'), obj.d2.unt));
              $("#result-list").append(result_field('E','H5', get_cnt(obj.d1, 'E'), obj.d2.unt));
              $("#result-list").append(result_field('F','其他', obj.d3.cnt1, obj.d2.unt));
              break;
          case '3' :
              $("#rtitle").text('3.你通常在什么时间段阅读“北京组工”？');
              $("#result-list").append(result_field('A','7时至9时', get_cnt(obj.d1, 'A'), obj.d2.unt));
              $("#result-list").append(result_field('B','12时至14时', get_cnt(obj.d1, 'B'), obj.d2.unt));
              $("#result-list").append(result_field('C','18时至20时', get_cnt(obj.d1, 'C'), obj.d2.unt));
              $("#result-list").append(result_field('D','21时至23时', get_cnt(obj.d1, 'D'), obj.d2.unt));
              $("#result-list").append(result_field('E','其他', obj.d3.cnt1, obj.d2.unt));
              break;
          case '4' :
              $("#rtitle").text('4.你是通过什么方式关注“北京组工”的？');
              $("#result-list").append(result_field('A','搜索公众号名称', get_cnt(obj.d1, 'A'), obj.d2.unt));
              $("#result-list").append(result_field('B','阅读文章后关注', get_cnt(obj.d1, 'B'), obj.d2.unt));
              $("#result-list").append(result_field('C','朋友推荐', get_cnt(obj.d1, 'C'), obj.d2.unt));
              $("#result-list").append(result_field('D','单位推广', get_cnt(obj.d1, 'D'), obj.d2.unt));
              $("#result-list").append(result_field('E','其他', obj.d3.cnt1, obj.d2.unt));
              break; 
          default :
              $("#rtitle").text('访问错误，请刷新页面重试');
        }
        
        swiper.allowSlideNext = true;
        swiper.slideTo(9, -1);
        percentAni();
        swiper.allowSlideNext = false;
        nextpage = _qid;
        
      },
      error: function(){
        console.log("server error");
      }
    });    
  });


  $(document).on("click", "#sub1", function() {
    _this = $(this);
    _txt = _this.prev("div").find("textarea")[0];
    
    $.ajax({
      type: "post",
      data:{
        "uid": userid,
         "d": _txt.value
      },
      url: "/bjzg2an/api/post_data2",
      success: function(json){
        swiper.allowSlideNext = true;
        swiper.slideNext();       
      },
      error: function(){
        console.log("server error");
      }
    });    
  });

  // 下一题
  $(document).on("click", "#next", function() {
      var p = parseInt(nextpage)+2;
      swiper.allowSlidePrev = true;
      swiper.slideTo(p, -1);
      swiper.allowSlideNext = false;
  });

  $(document).on("click", "#audioPlay", function() {
    audio = document.getElementById("audio");
    if(audio.paused){
        audio.play();
      $("#audioPlay").addClass('rotate');
    }else{
      audio.pause();
      $("#audioPlay").removeClass('rotate');
    }
  });  
});

function result_field(id, text, cnt1, cnt2){

  var _t = '';
  var p = 0;
  if(parseInt(cnt2)!=0)
    p = parseInt(parseInt(cnt1)/parseInt(cnt2)*100);
  _t += '<li class="result-item">'
  _t += '<div class="item-text">'
  _t += '<span class="result-option">' + id + '. ' + text + '</span>'
  _t += '<span class="result-percent">' + p + '%</span>'
  _t += '</div>'
  _t += '<div class="item-bar">'
  _t += '<div class="bar-bg"></div>'
  _t += '<div class="bar-percent"></div>'
  _t += '</div>'
  _t += '</li>'
  return _t;
}

function get_cnt(obj, id){
    var r = 0;
    $.each(obj, function(index, val) {
      if(val.qdata === id){
        r = val.cnt;
        return false;
      }
    });
    return r;
}

// 根据zan 改变大小
function update_font(_li){
  var cnt = _li.find('.zanNum');
  // var currentSize = = parseFloat(_li.css('font-size'));
  var currentSize = 17.5
  var nextsize = currentSize + parseInt(cnt.text()/100);
  if(nextsize > currentSize + 12)
    nextsize = currentSize + 12
  _li.css({
      fontSize: nextsize
  });
}