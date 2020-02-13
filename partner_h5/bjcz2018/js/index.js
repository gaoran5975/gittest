$(function(){
    //
    var loader = new window.PxLoader();
    var fileList = [
        'http://partner.qianlong.com/h5/bjcz2018/css/img/bigbg-min.png',
        'http://partner.qianlong.com/h5/bjcz2018/css/img/car.jpg',
        'http://partner.qianlong.com/h5/bjcz2018/css/img/slt.jpg'
    ];
    for(var i =3;i<14;i++){
       var str = 'http://partner.qianlong.com/h5/bjcz2018/css/images/pic'+i +'big'+ '.jpg';
       fileList.push(str);
    }
    var arrindex = [0,1, 7, 2,1,3];
    for (var i = 1; i <= 5; i++) {
        for (var j = 1; j <= arrindex[i]; j++) {
            var str = 'http://partner.qianlong.com/h5/bjcz2018/css/img/p'+i + '-' + j + '.png';
            fileList.push(str);
            //加入了一些图片
        }
    }
    for(var i =1;i<=10;i++){
        var str = 'http://partner.qianlong.com/h5/bjcz2018/css/img/p5-score'+i*10 + '.png';
        fileList.push(str);
    }
    for (var i = 0; i < fileList.length; i++) {
        var pxImage = new PxLoaderImage(fileList[i]);
        pxImage.imageNumber = i + 1;
        // console.log(pxImage)
        loader.add(pxImage);
    }
    loader.addProgressListener(function(e) {
        var percent = Math.floor(e.completedCount / e.totalCount * 100);
        $(".loadtext").html(percent + " %");

    });
    loader.addCompletionListener(function() {
       $("#loadpage").css({ display: 'none' });
       
       swipergo();
      })
      loader.start();
    //end piload
    var imgHeight = parseInt(window.innerHeight*850/1334);
    var  timuHeight =  parseInt(window.innerWidth*0.9*620/692);//题目的图片高度
    var daanHeight = parseInt(window.innerWidth*0.64*922/508);//答案的图片高度
    var ulHeight = parseInt(window.innerWidth*361/750);
    if(window.innerWidth>750){
         imgHeight = 550;
         timuHeight = 503;
         daanHeight = 600;
         ulHeight = 252;
         $('.img_info').css({
             'bottom':'20%',
             'font-size': '1.5rem'
         })
         $('.option_item,.des,.djck').css({
             'font-size': '1.2rem'
         })
         $('.p2-3').css({
           'top':'120px'
         });
         $('.gz').css({
            'top':'129px'
         })
    }
    if(window.innerWidth<750 && window.innerHeight<550){
        imgHeight = parseInt(window.innerHeight*0.65);
        $('#mycontent').css({
            'font-size':'3em'
        })
        timuHeight = 245;
        daanHeight = 377;
        $('.img_info').css({
             'bottom':'17%'
         })
    }
    if(window.innerWidth<750 && window.innerHeight>800){
        $('#mycontent').css({
            'font-size':'4em'
        });
        timuHeight =  parseInt(window.innerHeight*0.5);
        daanHeight =  parseInt(window.innerHeight*0.7);
    }
      $('.gzimg,.gzimg1').css({
          'height':imgHeight+'px'
      })
      $('.small_img,.zhegai1').css({
          'height':timuHeight+'px'
      });
      $('.big_img,.zhegai2').css({
          'height':daanHeight+'px'
      });
      $('.options_list').css({
          'height':ulHeight+'px'
      });
      $('.options_list li').css({
          'height':ulHeight/2+'px'

      });
      var time0_1 = null;
      var time0_2 = null;
      var time1_0=null;
      var time1_1=null;
      var time1_2=null;
      var time1_3=null;
      var text = $("#contentToWrite").html();
      var index = 0;
     var textLen = text.length;
     var textTrang ='';
     var textGo = null;
     var shanGo = null;
     var time1 = 200;
     var time2 = 80;
     var cont = 0;
     var zengjia = true;
     var shanchu = false;
     var newindex = textLen; 
     var mySwiper;
       function swipergo(){
               $('.swiper-container').css({'display':'block'}); 
               mySwiper = new Swiper ('.swiper-container', {
             direction: 'vertical',
              loop: false,
              freeMode : false,
             mousewheelControl : false,
              navigation: {
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev',
              },
             onInit: function(swiper){
                   swiperAnimateCache(swiper);
                   swiperAnimate(swiper);
                   donghuaP1();
                },
            onSlideChangeStart: function(swiper){
                  swiperAnimate(swiper);
                  if(mySwiper.activeIndex == 0){
                          zengjia = true;
                          shanchu = false; 
                          index = 0;
                          newindex = textLen;
                          time0_1 = null; 
                          time0_2 = null;
                          donghuaP1(); 
                           $('.gz').removeClass('heightChange');
                           $('.kstz').removeClass('scaleChange');
                           $('.rightline').removeClass('topChange');
                           $('.leftline').removeClass('bottomChange');
                  }
                  else if(mySwiper.activeIndex == 1){                                  
                       //第二页动画
                      clearTimeout(time0_1);
                      time1_0= setTimeout(function(){
                          // $('.p2-1').addClass('skewX');
                          $('.p2-2').addClass('skewX');
                      },300);
                      time1_1 = setTimeout(function(){
                          // $('.p2-1').removeClass('skewX');
                          $('.p2-2').removeClass('skewX');
                           $('.p2-2').hide();
                      }, 1800); 

                      time1_2 = setTimeout(function(){
                       $('.p2-1,.p2-2').animate({
                              'top':'0%'
                          },1000,function(){                             
                          });
                        }, 2500);
                     $('.gz').stop().delay(3500).animate({
                                'height':imgHeight+'px'
                            },1500,function(){
                                showline();
                            });
                     function showline(){
                          time1_3 = setTimeout(function(){
                          $('.rightline').addClass('topChange');
                          $('.leftline').addClass('bottomChange');
                           $('.kstz').addClass('scaleChange');
                          }, 1500);
                     }                    
                  }
                  else{
                      clearInterval(textGo); 
                      clearInterval(shanGo);
                      clearTimeout(time0_1);
                      clearTimeout(time1_0);
                      clearTimeout(time1_1);
                      clearTimeout(time1_2);
                      clearTimeout(time1_3);
                      $('.gz').removeClass('heightChange');
                      $('.kstz').removeClass('scaleChange');
                      $('.rightline').removeClass('topChange');
                      $('.leftline').removeClass('bottomChange');
                  }               
              },
             onSlideChangeEnd: function(swiper){ 
                     swiperAnimate(swiper);
              },
              onTransitionEnd: function(swiper){
                   swiperAnimate(swiper);
              }
          })
 }
           // page1 donghua
           function donghuaP1(){
                if(zengjia){
                      console.log("动画开始");
                      textGo = setInterval(function(){              
                                      if(text.charAt(index) == '<'){
                                           index += 4;
                                        textTrang +="<br>";
                                      }
                                      textTrang += text.charAt(index);
                                      $('#mycontent').html(textTrang+'<span>|</span>');
                                      index ++; 
                                            cont++;
                                        if($('#mycontent').html().length-14 >= textLen){  
                                         zengjia = false;
                                         shanchu = true;
                                         clearInterval(textGo); 
                                        }      
                                    }, time1);

                         }
                        //向第二屏滑动
                   time0_1  = setTimeout(function(){
                              $("#firstPage").bind("click",function(){
                                console.log("我是删除");
                                shanGoFUc(); 
                                setTimeout(function(){
                                    mySwiper.slideTo(1, 800, true);  
                                }, 1800);
                              });    
                            },5600);
             
           }  
             
             function shanGoFUc(){
                  console.log('a');
                    shanGo = setInterval(function(){
                     if(shanchu){
                        var newcont = $('#mycontent').html();
                        textTrang = newcont.substr(0,newindex);
                        if(textTrang.charAt(textTrang.length-1) == '>'){                        
                           newindex -= 4;
                           textTrang =newcont.substr(0,newindex);
                      }
                        $('#mycontent').html(textTrang+'<span>|</span>');
                          newindex--;
                      if(newcont == '' || newcont.length <=14){
                            $('#mycontent span').hide();
                            clearInterval(shanGo);
                            shanchu= false;
                         }
                      }
                  }, time2);
             }

     
    //第二页，开始挑战 
     $('.kstz').bind("click",function(){
             mySwiper.slideTo(2, 300, true);  
        });    


//获取不重复的随机数
function getArrayItems(arr, num) {
    //新建一个数组,将传入的数组复制过来,用于运算,而不要直接操作传入的数组;
    var temp_array = new Array();
    for (var index in arr) {
        temp_array.push(arr[index]);
    }
    //取出的数值项,保存在此数组
    var return_array = new Array();
    for (var i = 0; i<num; i++) {
        //判断如果数组还有可以取出的元素,以防下标越界
        if (temp_array.length>0) {
            //在数组中产生一个随机索引
            var arrIndex = Math.floor(Math.random()*temp_array.length);
            //将此随机索引的对应的数组元素值复制出来
            return_array[i] = temp_array[arrIndex];
            //然后删掉此索引的数组元素,这时候temp_array变为新的数组
            temp_array.splice(arrIndex, 1);
        } else {
            //数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
            break;
        }
    }
    console.log(return_array);
    return return_array;
}
var tiku;
tiku = getArrayItems(arrche,10);

// 答题页
  var score = 0;
  var ClickNum = 0;
  var tipindex = 0;
  var keyInx = '';
  var imgInx = '';
  var flag = true;
  var rightLi;
  var time3 = null;
  var AnsInx;
  var clickFlag = true;
  tianChong(0);
  CheckAns(0);
  
  function tianChong(index){
      $('.swiper-slide3 .des').html(tiku[index].qus);
      $('.options_list li').eq(0).find('.option_item').html(tiku[index].a);
      $('.options_list li').eq(1).find('.option_item').html(tiku[index].b);
      $('.options_list li').eq(2).find('.option_item').html(tiku[index].c);
      $('.options_list li').eq(3).find('.option_item').html(tiku[index].d);
      AnsInx = parseInt(tiku[index].anser);
      imgInx = tiku[index].img;
      $(".swiper-slide3 .picsmall").attr({
          'src':tiku[index].img
      })
      $('.swiper-slide4 .picbig').attr({
          'src':tiku[index].bigimg
      })
       $('.swiper-slide4 .baocun').attr({
          'src':tiku[index].bigimg
      })
      $('.swiper-slide4 .img_info').html(tiku[index].daan);
      $('#options_list li').each(function(liindex){
                $(this).css({
                        "background":'url(css/img/li'+liindex+'bg.png) no-repeat center center',
                        "background-size":'100% 100%' 
                    });
               $(this).find('.djck').hide(); 
               $(this).find('.option_item').css({
                        'color':'#fff'
                    });
       });
      $('#jdt').attr({
          'src':'css/img/p-jdt-'+index+'.png'
      });
      flag = true;
      clickFlag = true;
  }
 
  function CheckAns(tipindex){
        $('#options_list li').click(function(){
        if(flag){
            clearTimeout(time3);
             var clickInx = $(this).index();
             //li 颜色变化
               var key = $(this).attr('key');
               if(key == AnsInx){
                    $(this).find('.circle').show();
                    $(this).find('.djck').show();
                    $(this).find('.option_item').css({
                        'color':'#fff3a3'
                    });
                    score += 10;
                    // console.log(score);
                }
               else{
                    $('.options_list li').eq(clickInx).css({
                        "background":'url(css/img/libg'+clickInx+'.png) no-repeat center center',
                        "background-size":'100% 100%' 
                    });   
                   rightLi = $('#options_list li').eq(AnsInx);
                   time3 = setTimeout(function(){
                        rightLi.find('.circle').show();
                        rightLi.find('.djck').show();
                        rightLi.find('.option_item').css({
                           'color':'#fff3a3'
                         });
                    }, 800);
               }
               //分数
               $('.score span').html(score);
           }
          flag = false;
      });
  }
    
  $('.djck').click(function(){
        mySwiper.slideTo(3, -1, true);  
  });
  $('#next_icon').click(function(){
       tipindex++;
       if(tipindex > 9){
          changeSlide(score);
          mySwiper.slideTo(4, -1, true); 
       }
       else{          
           tianChong(tipindex);
           mySwiper.slideTo(2, -1, true);  
       }     
  })     

function changeSlide(score){
    $('#fenshu').attr({
        'src':'css/img/p5-score'+score+'.png'
    });
    if(score == 0){
      console.log(score);
     $('#pingjia').html('这不可能！赶紧再挑战一次吧！');
    }
    if(score > 0 && score <= 60){
       console.log(score);
       $('#pingjia').html('发挥不佳不要紧，再挑战一次吧~');
    }
    if(score > 60 && score <= 90){
       console.log(score);
       $('#pingjia').html('天呐！您真厉害！啥都瞒不过您！');
    }
    else if(score == 100){
       $('#pingjia').html('您太懂车了，已无人能敌！');
    }
}
//再猜一次
$('#again').on('click', function() {
    tiku = getArrayItems(arrche,10);
    tianChong(0);
    score = 0;
    tipindex = 0;
    //分数为0
    $('.score span').html(0);
    $("#firstPage").unbind("click");
    mySwiper.slideTo(0, -1, true); 

});


  $('#invite').on('click', function() {
    console.log(1);
    $('#shareMask').show();
  })

  $('#shareMask').on('click', function() {
    $(this).hide();
  })











})

