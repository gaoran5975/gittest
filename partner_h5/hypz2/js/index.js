// 加载图片
    var loader = new window.PxLoader();
    var fileList = [
        'css/images/p3b_2_0.png',
        'css/images/p3b_2_1.png',
        'css/images/p3b_2_2.png',
        'css/images/p3b_2_3.png'
    ];
    var arrindex = [12,7,1,1,1,2,1];
    for (var i = 1; i <= 7; i++) {
        for (var j = 1; j <= arrindex[i]; j++) {
            var str = 'css/images/p'+i + '_' + j + '.png';
            fileList.push(str);
        }
    }
    for (var i = 0; i < fileList.length; i++) {
        var pxImage = new PxLoaderImage(fileList[i]);
        pxImage.imageNumber = i + 1;
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
// 首页动画
    function swipergo(){
               $('.swiper-container').css({'display':'block'});
               var t1 = new TimelineMax();
               t1.from($('.p1_6'), 1, {scale:0,opacity:0,ease:Power0.easeNone,transformOrigin:'top center'})
               .from($('.p1_7'), 1.2, {opacity:1, left:'100%',ease: Power2.easeOut},1.2)
               .from($('.p1_8'), 1.2, {opacity:1, left:'-100%',ease: Power2.easeOut},1.2)
               .from($('.p1_9'), 1.3, {opacity:0, ease: Power2.easeOut},2)
               .from($('.p1_10'), 1.3, {opacity:0, ease: Power2.easeOut},2)
               .from($('.p1_11'), 1.2, {opacity:0, ease: Power2.easeOut},2.8)
               .from($('.p1_12'), 1.2, {opacity:0, ease: Power2.easeOut},2.8)
               .from($('.p1_13'), 1.2, {opacity:0, ease: Power2.easeOut},3)
               .from($('.p1_2'), 1.2, {opacity:0, ease: Power2.easeOut},3)
               .to($('.p1_11'), 4, {left:'-1%', ease: Power1.easeInOut,repeat:-1},1)
               .to($('.p1_12'), 3, {left:'3%', ease: Power1.easeOut,repeat:-1},1.2)
               .to($('.p1_13'), 3, {opacity:1,scale:1.12, ease: Elastic.easeOut,repeat:-1},1.5)

         }      
//首页动画结束
//获取宽高
var phoneW  = $(window).width();
if (phoneW>750){
     phoneW = parseInt(window.innerHeight*750/1206);
}
var objW;
function getHeight(objw,orginw,orginh){// 新区块的宽， 原图片的宽，高。
  var objH;
   objW = parseInt(phoneW * objw);// 手机端的宽
   objH = parseInt(objW * orginh / orginw);
    return objH;
}
//设置高度 
    //第二页
    $('.pepMan,pepWoman').css({
        'height':getHeight(0.3467,260,246)+'px'
    });
    $('#p2_10').css({
         'height':getHeight(0.34,253,93)+'px'
    })
    //第三页
    $('.FdressA,.FdressB,.FdressC,.FdressD').css({
        'height':getHeight(0.132,120,270)+'px'
    })
     $('.MdressA,.MdressB,.MdressC,.MdressD').css({
        'height':getHeight(0.132,120,270)+'px'
    });
     $('.s3Left,.s3Right').css({
         'height':getHeight(0.34,253,93)+'px'
    })
     //第五页
      $(".btn_upload>img").css({ 
          'height':getHeight(0.7,118,141)+'px'
      });
     $("#btn_upload").css({
         'height':getHeight(0.32,238,83)+'px'
     })
     $('.s5Left,.s5Right').css({
         'height':getHeight(0.34,253,93)+'px'
    })
     //第六页
     $('.finalPic').css({
         'height':getHeight(0.7,531,639)+'px'
    });
     $('#p6Pic').css({
         'top':"13%"
     })
     $('.s6Left,.s6Right').css({
         'height':getHeight(0.393,295,88)+'px'
    });
     //第七页
     var Introtop = getHeight(1,750,840);
     $('.intro').css({
         'top':Introtop+'px',
         'height':'80px'
     });
     $('.ewm').css({
          'top':getHeight(1,750,798)+'px'
     });
     $('.p7_2,.p7b_2').css({
         'width':'94%',
         'left':'3%'
     })

//设置高度结束  
var space = 0,sex=0;var Fderess=0;var Mdress = 0;
//场景切换
$('.PicLeft').click(function(){
    $('.p2_5,.p2_2').fadeIn();
    $('.p2_6,.p2_3').fadeOut();
    space = 0
    return false;
  });
$('.PicRight').click(function(){
    $('.p2_6,.p2_3').fadeIn();
    $('.p2_5,.p2_2').fadeOut();
    space = 1
    return false;
  });
//性别切换
$('.pepMan').click(function(){
    $('.p2_8a,.p2_9b').fadeIn();
    $('.p2_8b,.p2_9a').fadeOut();
    sex = 0;
    return false;
  });
$('.pepWoman').click(function(){
    $('.p2_8b,.p2_9a').fadeIn();
    $('.p2_8a,.p2_9b').fadeOut();
    sex = 1;//女性
    return false;
  });
//女性衣服切换
$('.dress1 li').click(function(){
    var index = $(this).index();
    $('.p3_2_0,.p3_2_1,.p3_2_2,.p3_2_3').hide();
    $('.p3_2_'+index+'').show();
    Fderess = index;
    return false;
})
//男性衣服切换
$('.dress2 li').click(function(){
    var index = $(this).index();
    $('.p3b_2_0,.p3b_2_1,.p3b_2_2,.p3b_2_3').hide();
    $('.p3b_2_'+index+'').show();
    Mdress = index;
    return false;
})
//最后一页获取时间  
var str;
function getFormatDate(){
    var nowDate = new Date();
    var year = nowDate.getFullYear();
    var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
    var date = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
    return year + "." + month + "." + date+" ";
}
str = getFormatDate();
$('.shijian').html(str);

//跳转页
var slides = $('.swiper-slide');
var sky = $('.sky');
  //首页跳转
  $('#go').click(function(){
      slides.hide();
      $('.swiper-slide2').show();
      return false;
  })
  //第二页跳转
  $('#p2_10').click(function(){
     if(sex==1){
              slides.hide();
              $('.swiper-slide3a').show();
              return false;
      }
      else{
               slides.hide();
              $('.swiper-slide3b').show();
              return false;
      }
      return false;
  })
  //第三页跳转
  $('.s3Left').click(function(){
      slides.hide();
      originBg();flagBack();
      $('.swiper-slide2').show();
      return false;
  })
  $('.s3Right').click(function(){
      slides.hide();
      $('.swiper-slide5').show();
      return false;
  })
  //第五页跳转
  $('.s5Left').click(function(){
      slides.hide();
      originBg();flagBack();
      $('.swiper-slide2').show();
      return false;
  })
  $('.s5Right').click(function(){
           if(flag){
              slides.hide();
               newBg();
               $('.swiper-slide6').show();
              return false;
           }
           else{
               alert('请上传图片！');
               return false;
           }
  })
 //第六页跳转 
 end = 0;
   $('.s6Left').click(function(){
      slides.hide();
      originBg();flagBack();
      $('.swiper-slide2').show();
      return false;
  })
  $('.s6Right').click(function(){
       slides.hide();
        img0 = new Image;
        img0.src = 'css/images/bg.png'; 
       drawCanvas();
      if(space){
               $('.swiper-slide7b').show();//正义路
              return false;
      }
      else{
              $('.swiper-slide7a').show();//台基厂
              return false;
      }
      return false;
  })
  //调整背景
  function originBg(){
     sky.show();
      $('.swiper-container').removeClass('changeBg');
  }
  function newBg(){
        sky.hide();
       $('.swiper-container').addClass('changeBg');
  }
//flag 归0 上传图片回归
function flagBack(){
   $("#shangchuan").attr('src',"css/images/p5_2.png");
   // $(".btn_upload>img").attr('src',"css/images/p1_1.png");
}  
//抛出错误
    $(".errowDom,.waitingDom").click(function(){
        $(this).fadeOut("fast");
    })


//canvas 画图
 function drawCanvas(){
       phoneW = window.innerWidth;
       phoneH = window.innerHeight;
       mycanvas = document.getElementById("myCanvas");
          var ctx = mycanvas.getContext("2d");
          ctx.clearRect(0,0,phoneW,phoneH);
          ctx.globalCompositeOperation = "destination-over";
          ctx.fillStyle = '#efeded';
          ctx.fillRect(0,0,phoneW,phoneH);
            //图0 最先绘制
              img0.onload = function(){               
                // var pat=ctx.createPattern(img0,"repeat");
                // ctx.rect(0,0,canvas.width,canvas.height);
                // ctx.fillStyle=pat;
                // ctx.fill();
                 console.log(img0.complete)
                  if(img0.complete){
                      ctx.globalAlpha=1;
                      ctx.drawImage(img0,0,0,phoneW,phoneH);
                      loadNum ++;
                 }
              }
           var
              img1 = new Image,
              img2 = new Image,
              img3 = new Image;
          var src2;var end0 = 0;
          src2 = $('.swiper-slide6 .finalPic').attr('src');    
          var text1 = space ==0 ? '台基厂大街3号留念' : '正义路2号留念';
          var text2 = str;
          
              img1.src = 'css/images/p6_1.png';
              img2.src = src2;
              img3.src = space ==0 ? 'css/images/p7_2pic.png': 'css/images/p7b_2pic.png';
              mycanvas.width =phoneW;  
              mycanvas.height = phoneH;
              var loadNum = 0;
              //生成清晰图片
              var  devicePixelRatio = window.devicePixelRatio || 1,   
             backingStoreRatio = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1, 
            ratio = devicePixelRatio / backingStoreRatio;
            var oldWidth = mycanvas.width; 
            var oldHeight = mycanvas.height; 
            mycanvas.width = oldWidth * ratio; 
            mycanvas.height = oldHeight * ratio; 
            mycanvas.style.width = oldWidth + 'px'; 
            mycanvas.style.height = oldHeight + 'px'; 
            ctx.scale(ratio, ratio);

              //定义对象
               var obj = function(){};
              obj.prototype.init = function(l,t,w){
                   this.left = phoneW*l;
                   this.top = phoneH*t;
                   this.width = phoneW*w;
              }
              var pic2 = new obj();
              pic2.init(0.158,0.13,0.7);
              var pic1 =  new obj();
              pic1.init(0,0,1);
                if(window.innerHeight < 550){
                    pic2.init(0.158,0.14,0.7);
                    pic1.init(0,-0.02,1);
                }
              
              ctx.font = "1.3em 隶书";   
             var timer; 
             timer = setTimeout(function(){
                   //图1  
                  ctx.drawImage(img1,0,pic1.top,phoneW , getHeight(1,750,975));
                  loadNum ++;  
                  console.log(img1.src,loadNum) 
                 //图2 + 文字
                 ctx.globalAlpha=1;
                 ctx.drawImage(img2,pic2.left,pic2.top,pic2.width, getHeight(1,750,639));
                       //绘制文字
                      ctx.fillStyle = 'black';
                      ctx.font = "1em '楷体'";
                      ctx.textAlign = 'left';
                      ctx.shadowBlur = 10;
                      ctx.shadowOffsetX = 5;
                      ctx.shadowOffsetY = 5;
                      var text1Pos = new obj();
                      var text1left;
                      text1left = space==0 ? 0.48 : 0.57 ;
                      text1Pos.init(text1left,getHeight(1,750,840)/phoneH,0.67);
                      var text2Pos = new obj();
                      text2Pos.init(0.61,getHeight(1,750,890)/phoneH,0.67);
                      ctx.globalAlpha=0.6;
                      ctx.fillText(text1,text1Pos.left,text1Pos.top+5);
                      ctx.fillText(text2,text2Pos.left,text2Pos.top);
                       loadNum ++;
                       console.log(img2.src,loadNum)
                   //图3  
                   var img3Top = phoneH - getHeight(1,750,200);
                   if(window.innerHeight < 550){
                        img3Top = phoneH - getHeight(1,750,170);
                   }
                     ctx.globalAlpha=1;
                      ctx.drawImage(img3,0,img3Top,phoneW, getHeight(1,750,170));  
                       console.log(img3.src,loadNum)
                         if(loadNum >= 3 && img3.complete){
                          var url =  mycanvas.toDataURL("image/png")
                          //convas 变成图片
                           $('.lastimg').attr({
                            'src':url
                            })
                        }
                 
             },2000)
 }
      //画图结束    