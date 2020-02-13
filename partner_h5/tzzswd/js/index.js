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
 //*************************输入手机号监测*************************
  $('#login').on('click',function(){
          alert(1)
          var phone = $('#phone').val();
          var reg = /^1[0-9]\d{9}$/
          if(!reg.test(phone)){ 
            alert('请填写正确的手机号')
            return false;
          }

          if(!phone){
            // alert('请填写手机号');
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

 // *************************第四页选择题 ************************************
      var kiknum = 0;
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
        var cores = 0;
        var qestions = document.getElementsByClassName("timu")
        //单选部分
        for(var i = 0;i < 5;i++)
              {
                  var count=0;
                  var flag=1;
                  var value = 0;
                  var answer=document.getElementsByName("q"+(i+1));
                  for(var j=0;j<answer.length;j++)
                  {
                    if(answer[j].checked)
                    {
                      value = parseFloat(answer[j].value);
                     console.log()
                      if(value*1 <= 0)
                      {
                          flag = 0;
                          break;
                      }
                        count += value*1;
                    }
                  }
                  if(flag == 1)
                    cores += count;
                }
            //多选部分    
           for(var i = 5;i < qestions.length;i++){
              var answer=document.getElementsByName("q"+(i+1));
              var flag1 = false,flag2 =false;
              var arr1 = [],arr2 = []; 
                  for(var j=0;j<answer.length;j++){
                    if(answer[j].value!=0){
                       arr1.push(j); //正确选项放入arr1
                     }
                     else{
                       arr2.push(j);//错误选项放入arr2
                     }
                  }
                 flag1 = check1(flag1,arr1,answer);
                 flag2 = check2(flag2,arr2,answer); 
                 console.log(flag1,flag2) 
                 if(flag1 && flag2)
                 {
                    cores += 1;
                 }
           }      
        alert("Your score is "+cores);
      }
            function check1(flag1,arr1,answer){ //正确选项都要勾选
                for(var m in arr1){  
                           var num = arr1[m];
                           if($(answer[num]).filter(":checked").length == 0){
                              flag1 =false;
                              return flag1;
                           }
                            flag1 = true;
                             return flag1;
                         }
            }
            function check2(flag2,arr2,answer){ //错误选项都不能勾选
                  for(var n in arr2){  
                             var num = arr2[n];
                             if($(answer[num]).filter(":checked").length != 0){
                                flag2 =false;
                                return flag2;
                             }
                              flag2 = true;
                               return flag2;
                         }
            }
$('#tijiao img').one('click',function(){
       coreCount()
})
//选择题结束

//继续答题
$('a.jxdt img').click(function(){
   mySwiper.slideTo(1, 500, false);
});
//提交答案
$('#tijiao img').click(function(){
   mySwiper.slideTo(1, 500, false);
});
$('.craper a').css({
    'height':window.innerWidth*0.0933+'px'
})

// 抽奖
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
        if(text == '恭喜您获得30元手机充值卡'){
          // showrp()
          // $('#plateBtn').addClass('plateBtn_on');
        }
      }

    });

  };
});