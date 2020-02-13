$(document).ready(function() {
  var arrimg = [
    '/h5/tzzswd/css/images/p1-0.jpg',
    '/h5/tzzswd/css/images/p2-0.jpg',
    '/h5/tzzswd/css/images/p5-1.png',
    '/h5/tzzswd/css/images/p5-7.jpg',
    '/h5/tzzswd/css/images/dl.png',
    '/h5/tzzswd/css/images/p5-9.png',
    '/h5/tzzswd/css/images/p5-10.png',
    '/h5/tzzswd/css/images/p6.jpg',
    '/h5/tzzswd/css/images/p5-5.png'
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

// PAGE1
$('#arrow').click(function(){
  mySwiper.slideTo(1, 500, false);
});

// PAGE2
$('#login').css({'visibility':"visible"});

var quizobj, _tested, _logid, _drawed;
$('#login').on('click',function(){
  var phone = $('#phone').val();
  if(!phone){
    alert('请填写手机号')
    return false;
  }

  var reg = /^[1][3,4,5,7,8][0-9]{9}$/
  if(!reg.test(phone)){ 
    alert('请填写正确的手机号')
    return false;
  }

  $.ajax({
    type: "get",
    async: false,
    url: "/tzzs/api/get_data?exid=" + $("#exid").val() + "&userid=" + $("#userid").val() + '&phone=' + phone,
    beforeSend: function () {
      $('.login_mask').show();
      $('.mask_text').html('读取数据中...');
      $("#login").attr({ disabled: "disabled" });
    },
    success: function(json){
      quizobj = eval('(' + json + ')');
      console.log(quizobj);
      
      if(quizobj.code == 0){
        alert('发生错误, 请稍后再试');
        return false;
      }
      else if(quizobj.code == 1){

        $("#content").html(quizobj.study);

        $('#content').css({'height':window.innerHeight*0.55+'px'});

        //统战部滚动条
        $("#content").mCustomScrollbar({  
          autoHideScrollbar: false,  
          alwaysShowScrollbar:2,
          theme:"light"
        });  

        var _div, _qus;
        for(var i=1; i<11; i++){
          _div = "#qs" + i;
          _qus = '<span>Q' + i +'</span>' + quizobj.quiz[i-1].quizs;
          $(_div).find("p").html(_qus);
          $(_div).find("label").eq(0).html('A. ' + quizobj.quiz[i-1].ans1);
          $(_div).find("label").eq(1).html('B. ' + quizobj.quiz[i-1].ans2);
          $(_div).find("label").eq(2).html('C. ' + quizobj.quiz[i-1].ans3);
          if(i>=6){
            $(_div).find("label").eq(3).html('D. '+ quizobj.quiz[i-1].ans4);
          }
        }

        _tested = parseInt(quizobj.count); // 答题次数
        _logid = quizobj.logid; // 答题日志ID
        // _drawed = quizobj.drawed; // 是否抽奖过
        if(_tested >= 1){
          $('a.jxdt img').attr('src','/h5/tzzswd/css/images/p3-4.png');
        }
        if(_tested >= 2){
          write_answer()
        }

        mySwiper.slideTo(2, 500, false);
      }
      else{
        alert(quizobj.msg);
      }


    },
    complete: function () {
      $('.login_mask').hide();
    },
    error: function(){
      alert('发生错误, 请稍后再试')
    }
  });  
});

// PAGE3
$('a.jxdt img').click(function(){
  // if(_tested >= 2){
  //   alert('答题次数已用完');
  //   return false;
  // }
  mySwiper.slideTo(3, 500, false);
});

// PAGE4
$('.xxyd a').bind('click',function(){
    mySwiper.slideTo(2, 500, false);
    $('a.jxdt img').attr('src','/h5/tzzswd/css/images/p3-4.png')
});

$.each($('.qs'), function(index, val) {
  $(this).find('input').on('click', function(){
      $(this).parents('.qsBox').find('input').removeClass('check_right');
      $(this).addClass('check_right');
  })
});

$.each($('.qsmore'), function(index, val){
    $(this).find('input').on('click', function(){
      var selectKey = $(this).attr('id');
      $(this).toggleClass('check_right');
   })
});  

var _drawid;
var _cur_test = 1;
$('#tijiao img').click(function(){

    if(_tested >=2){
      alert('答题次数已用完');
      return false;      
    }

    var _ans = new Array();

    // 确认都点过答案
    var _checked, _inputName, _count, _tmp;
    for(var i=1; i<11; i++){
      _inputName = 'q' + i;
      if(i<6){
        _checked = $("input[type='radio'][name='" + _inputName + "']:checked").val();
        if(_checked == null ){
          alert('没有答题完整');
          return false;
        }

        _ans[i-1] = _checked;
      }

      else{
        _checked = $("input[type='checkbox'][name='" + _inputName + "']");
        _count = 0;
        _tmp = '';
        for(var k=0; k<_checked.length; k++){
          if(_checked[k].checked){
            _count ++;
            _tmp += $(_checked[k]).val();
          }
        }
        if(_count == 0){
          alert('没有答题完整' + i);
          return false;  
        }

        _ans[i-1] = _tmp;
      }  
    }

    // 检查答案
    var _score = 0;
    for(var i=1; i<11; i++){
      if(quizobj.quiz[i-1].ans5 == _ans[i-1])
        _score++;
    }

    var _status = 4;
    if(_score < 10)
      _status = 3;
    //   mySwiper.slideTo(4, 500, false);

    // if(_drawed == 1){
    //   $('.jgts').hide();
    //   $('.jgts4').show();  
    //   mySwiper.slideTo(4, 500, false);  
    // }
    // else {
      $.ajax({
        type: "post",
        async: false,
        url: "/tzzs/api/upload_score",
        data: {
              phone: $('#phone').val(),
              status: _status,
              logid: _logid,
              ans: _ans
        },
        beforeSend: function () {
          //$('.login_mask').show();
          //$('.mask_text').html('读取数据中...');

          $("#tijiao img").attr({ disabled: "disabled" });
        },
        success: function(json){
          console.log(json);
          //_tested ++;
          var r = eval('(' + json + ')');
          if(r.code != 1){
            alert('发生错误, 请稍后再试');
            return false;
          }

          // 抽奖页
          if(_status == 4){
            if(r.draw == 1){  // 抽奖
              $('.jgts').hide();
              $('.jgts3').show();  
              _drawid = r.drawid;
            }
            else{             // 谢谢参与
              $('.jgts').hide();
              $('.jgts4').show();                   
            }
          }

          // 失败页
          else {
            var _c = _cur_test + _tested;
            // console.log(_cur_test);
            // console.log(_tested);
            // console.log(_c);
            // 失败2次
            if(_c >= 2){
              $('.jgts').hide();
              $('.jgts2').show();
            }
            else{
              $('.jgts').hide();
              $('.jgts1').show();
              _cur_test++;
              // 清理错误答案
              for(var i=1; i<11; i++){
                if(quizobj.quiz[i-1].ans5 != _ans[i-1]){
                  _inputName = 'q' + i;
                  // console.log(_inputName);
                  if(i<6){
                    _checked = $("input[type='radio'][name='" + _inputName + "']");
                  }
                  else{
                    _checked = $("input[type='checkbox'][name='" + _inputName + "']");
                  }

                  for(var k=0; k<_checked.length; k++){
                    $(_checked).eq(k).prop('checked', false);
                    $(_checked).eq(k).removeClass('check_right');
                  }
                }
              }

            }
          }
          mySwiper.slideTo(4, 500, false);
        },
        complete: function () {
        },
        error: function(){
          alert('发生错误, 请稍后再试')
        }
      });  
    // }
});

// PAGE5
$('.jgts1>a').click(function(){
   $('a.jxdt img').attr('src','/h5/tzzswd/css/images/p3-4.png')
   mySwiper.slides[3].scrollTop = 0;//第三页滚动到最上面
   mySwiper.slideTo(2,500,false);    
});

$('.jgts2>a').click(function(){
   window.location.reload();//重新加载页面
});

var _draw_result;
$('.jgts3>a').click(function(){ // 去抽奖

   $.ajax({
      type: "post",
      async: false,
      url: "/tzzs/api/set_draw",
      // data: {
      //     phone: '13260280678',
      //     userid: 1200,
      //     drawid: 20,
      // },
      data: {
          phone: $('#phone').val(),
          userid: $('#userid').val(),
          drawid: _drawid,
      },
      beforeSend: function () {
        $(".jgts3>a").attr({ disabled: "disabled" });
      },
      success: function(json){
        var r = eval('(' + json + ')');
        _draw_result = r.code;
        console.log(_draw_result);
        if(_draw_result == 0){
          alert("发生错误, 请稍后再试");
        }
        else{
          mySwiper.slideTo(5, 500, false);
        }

      },
      complete: function () {
      },
      error: function(){
        alert('发生错误, 请稍后再试')
      }
    });  
});

$('.jgts4>a').click(function(){
   window.location.reload();//重新加载页面
});

// PAGE6
$('.plate').css({
    'height':window.innerWidth*856/750+'px'
})
$('#plateBtn').css({
    'width':window.innerWidth*.332+'px',
    'height':window.innerWidth*.332+'px'
});

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
    var data = [0, 1, 2, 3];
    if(_draw_result == 1)
      data = [4, 5, 6, 7];
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

// PAGE7
$('.craper a').bind('click',function(){
     $('.cover2').hide();
     $('.craper').hide();
});
$('.craper div').bind('click',function(){
    window.location.reload();//重新加载页面
});
$('.fysy').click(function(){
       window.location.reload();//重新加载页面
});

function write_answer(){
    var _inputName;
    for(var i=1; i<11; i++){
      _inputName = 'q' + i;
      // console.log(_inputName);
      // quizobj.quiz[i-1].ans5
      if(i<6){
        _checked = $("input[type='radio'][name='" + _inputName + "']");
        for(var k=0; k<_checked.length; k++){
          if($(_checked).eq(k).val() == quizobj.quiz[i-1].ans5)
            $(_checked).eq(k).addClass('check_right');
          else
            $(_checked).eq(k).removeClass('check_right');
        }
      }
      else{
        _checked = $("input[type='checkbox'][name='" + _inputName + "']");
        for(var k=0; k<_checked.length; k++){
          if(quizobj.quiz[i-1].ans5.indexOf((_checked).eq(k).val()) !== -1)
            $(_checked).eq(k).addClass('check_right');
          else
            $(_checked).eq(k).removeClass('check_right');
        }

      }


  }

}