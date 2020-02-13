$(function(){
  //首页load
     //loading列表
    var loader = new window.PxLoader();
    var basePath = "http://partner.qianlong.com/h5/2018bjjfdt/css/img/";
    //声明资源文件列表
    var fileList = [
        'bg0.jpg',
        'go.png',
        'rightarrow.png',
        'rightline.png',
        'shutiao.jpg',
        'leftline.png',
        'kuang.gif'
    ];
    var arrindex = [7, 5, 9, 6, 2, 2, 2, 2, 5, 2, 2,2,3,2,2];
    for (var i = 0; i <= 12; i++) {
        for (var j = 1; j <= arrindex[i]; j++) {
            var str = 'p'+i + '_' + j + '.png';
            fileList.push(str);
            //加入了一些图片
        }
    }
    console.log(fileList);
    for (var i = 0; i < fileList.length; i++) {
        var pxImage = new PxLoaderImage(basePath + fileList[i]);
        pxImage.imageNumber = i + 1;
        // console.log(pxImage)
        loader.add(pxImage);
    }
    console.log(loader)
    loader.addProgressListener(function(e) {
        var percent = Math.floor(e.completedCount / e.totalCount * 100);
        $(".loadtext").html(percent + " %");

    });
    loader.addCompletionListener(function() {

        $("#loadpage").css({ display: 'none' });
       
        swipergo();
      })
    loader.start();
  // load end
  flag = 1;
  function swipergo(){

         $('.swiper-container').css({'display':'block'});  
        var mySwiper = new Swiper ('.swiper-container', {
             direction: 'vertical',
              loop: false,
              freeMode : false,
             mousewheelControl : true,
             onInit: function(swiper){
                   swiperAnimateCache(swiper);
                   swiperAnimate(swiper);
                },
            onSlideChangeStart: function(swiper){
                  swiperAnimate(swiper);
                  if(mySwiper.activeIndex == 1){
                      kaiping();
                  }               
              },
             onSlideChangeEnd: function(swiper){ 
                     swiperAnimate(swiper);
              },
              onTransitionEnd: function(swiper){
                   swiperAnimate(swiper);
              },

              watchSlidesProgress: true,
              
                 onSetTransition: function(swiper, speed) {
                  for (var i = 0; i < swiper.slides.length; i++){
                    es = swiper.slides[i].style;
                    es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = speed + 'ms';
                  }
                }
     })  
       // page1 select onchange
      chooseProvince();
      function chooseProvince(){
          var obj = document.getElementById("province");
          var sele = obj.options;
          obj.onchange = function(){
              var index = obj.selectedIndex;
              if(index > 0){
                  console.log(sele[index].value);
                  var newhref = sele[index].value;
                  $('#turn a').attr({
                      'value':newhref
                  })
              }       
          }
      }

      $('#turn').click(function(){
        var index = $(this).find('a').attr('value');
         mySwiper.slideTo(index, -1, true);  
      })
      //回首页
      $('.fhsy').click(function(){
          mySwiper.slideTo(0, -1, true);  
      })
  }
     //竖条动画   
      function kaiping(){
        if(flag){
            //竖条1/
             $("#shutiao1").stop().animate({
              'left':'3%',
                  'opacity':'0.8',
              },400,'swing',function(){
                $(this).animate({
                  'left':'-3%' 
                },400,'swing',function(){
                   $(this).animate({
                      'left':'500%' 
                   },800,'swing',function(){
                       return;
                   })
                })
              })
              //竖条2/
              $("#shutiao2").stop().animate({
                  'left':'-3%',
                  'opacity':'0.8',
              },400,'swing',function(){
                $(this).animate({
                  'left':'3%' 
                },400,'swing',function(){
                   $(this).animate({
                      'left':'-500%' 
                   },800,'swing',function(){
                      return;
                   })
                })
              })
        }
      }
    //竖条动画结束   


})

