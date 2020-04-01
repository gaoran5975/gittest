$(document).ready(function() {
  var loader = new window.PxLoader();
  var fileList  = [
    
  	'css/images/p-bg.png',
   
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
        var swiperV = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination-v',
				paginationClickable: true,
				direction: 'vertical',
				spaceBetween: 0,
				mousewheelControl: true,
				onSlideChangeStart: function(swiper) {


				},
				onSlideChangeEnd: function(swiper) {
					
				}
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
