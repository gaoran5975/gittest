$(document).ready(function() {
  var loader = new window.PxLoader();
  var fileList  = [
    'css/images/p1-1.png',
    'css/images/p1-2.png',
    'css/images/p1-3.png',
    'css/images/p1-4.png',
    'css/images/p1-5.png',
    'css/images/p1-6.png',
    'css/images/p1-7.png',
    'css/images/p2-1.png',
    'css/images/p2-2.png',
    'css/images/p3-1.png',
    'css/images/p3-2.png',
  	'css/images/p-bg.png',
    'css/images/p4-1.png',
    'css/images/p4-2.png',
    'css/images/p4-3.png',
    'css/images/p4-4.png',
    'css/images/p5-1.png',
    'css/images/p5-2.png',
    'css/images/p5-3.png',
    'css/images/p5-4.png',
    'css/images/p6-1.png',
    'css/images/p6-2.png',
    'css/images/p7-1.png',
    'css/images/p7-2.png',
    'css/images/p7-3.png',
    'css/images/p8-1.png',
    'css/images/p8-2.png',
    'css/images/p8-3.png',
    'css/images/p4pre-0.png',
    'css/images/p4pre-1.png',
    'css/images/p4pre-2.png',
    'css/images/p4pre-3.png',
    'css/images/p4pre-4.png',
    'css/images/p4pre-5.jpg',
    'css/images/p6pre-1.png',
    'css/images/p6pre-2.png',
    'css/images/p6pre-3.png',
    'css/images/p7pre-1.png',
    'css/images/p7pre-2.png',
    'css/images/p7pre-3.png',
    'css/images/p7pre-4.png',
    'css/images/p8pre-1.png',
    'css/images/p8pre-3.png',
    'css/images/p-fx.png',
    'css/images/p-xh.png',
    'css/images/p4pre-1.png',
    'css/images/jieshu.png',
    'css/images/ysks.png',
    'css/images/tygy.png',
    'css/images/duige.png',
    'css/images/yingxiong.jpg'
  ];
  //加载图片
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
       //程序开始
       swipergo();
       
})
loader.start(); 

  var winWidth = window.innerWidth;
  var winHeight = window.innerHeight;
  var myVideos = document.getElementsByTagName('video');
  if(winWidth > 750){
  	var wx;
            	 wx=parseInt(winHeight*750/1206);
					      $('html,body').css({
					        'width':wx+'px',
					        'margin':'0 auto',
					        'height':winHeight+'px'
					      })
            }
function swipergo(){
	   //设置高度尺寸
       + function() {
        remLayout();

        function remLayout() {
            var w = document.documentElement.clientWidth;
            w = w > 768 ? 768 : w;
            w = w <= 320 ? 320 : w;
            document.documentElement.style.fontSize = w / 7.5 + 'px';
        }
        window.addEventListener('resize', function() {
            // remLayout();
            console.log(winWidth)
            if(winWidth<750){
            	  $('html,body,.swiper-container,.swiper-slide').css({
			 	       width:winWidth,
			 	       height:winHeight
			      })
            }
        }, false);
    }();
      if(winWidth<750){
            	  $('html,body,.swiper-container,.swiper-slide').css({
			 	       width:winWidth,
			 	       height:winHeight
			      })
            }
		$('.swiper-container').css('display','block')
        var p62 = $('.p6-2').hasClass('scalebig');
        var mySwiper = new Swiper ('.swiper-container', {
	           direction: 'vertical',
	            loop: false,
	            freeMode : false,
	           mousewheelControl : true,
             touchRatio:0.8,
              spaceBetween: 0,
              preloadImages:false,
	           onInit: function(swiper){
	                 swiperAnimateCache(swiper);
	                 swiperAnimate(swiper);
	              },
	          onSlideChangeStart: function(swiper){
	                swiperAnimate(swiper);
                    var index = mySwiper.activeIndex;
                            for(i=0;i<myVideos.length;i++){
                              myVideos[i].pause();
                            }        

                    if(index==7){
                         $('.p6-2').removeClass('scalebig').hide();
                    }
                    else if(index==12){
                         $('#mask,#fxts').hide();
                    }
                    else{}
	            },
	           onSlideChangeEnd: function(swiper){ 
	                  // swiperAnimate(swiper);    
                    var index = mySwiper.activeIndex;
                    console.log(index)
                    if(winHeight < 620 ){
                          if(index==11 || index ==12) {
                                //设备适配
                                 console.log('short phone')
                                  $('.p8-0').css('top','-0.2rem')
                                  $('.p8-1').css('height','8.7rem')
                                  $('.jiyan').css({
                                    'top':'1.7rem',
                                    'height':  '6.8rem'
                                  }) 
                          }

                       }    
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
       $('#xh').click(function(){
            $('#xh').fadeOut(300);
            $('.p6-2').addClass('scalebig');
            if(winHeight < 620){
                   console.log('short phone')
                   $('#xhzc').css({
                       'bottom':'-60px'
                   })
            }
            setTimeout(function(){
               $('#xhzc').fadeIn(300)
            },3500)
      }) 
      $('#addMessage').click(function(){
      	  var name = $('#name').val();
      	  var grade = $('#grade').val();
      	  var school = $('#school').val();
      	  var comment = $('#commentArea').val();
          　console.log(name,grade,school,comment)
      	   $.ajax({
                      type: "get",
                      url: 'http://partner.qianlong.com/sjsjy/qmjyl2020/message',
                      data: {
                          name: name,
                          grade:grade,
                          school:school,
                          content:comment
                      },
                      dataType: "json",
                      success: function(res) {
                          console.log(res)
                          $('html,body').css({'position':'relative','height':'100%'})
                          mySwiper.slideTo(12);
                      }, 
                      complete:function(){
                        //请求完成的处理
                       },
      			    error:function(res){                   
      			        //请求出错处理
      			        console.log(res)
                    mySwiper.slideTo(12);
      			    }

      			})
      	});

        $('#next').click(function(){
              mySwiper.slideTo(12);
        })
         $('#fenxiang').click(function(){
            $('#mask,#fxts').show();
            myVideos[5].pause()
         })
       
        $('#mask,#fxts').click(function(){
            $('#mask,#fxts').hide();
            myVideos[5].pause()
         })
  }//swipergo. 结束
      function blur() {

            setTimeout(function () {

            var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0

              window.scrollTo(0, Math.max(scrollHeight - 1, 0))

            }, 100)
      }  
      $('input,textarea').on('blur',function( ){
          $('html,body').css({'height':winHeight})
          window.scroll(0,0);
      });

})
