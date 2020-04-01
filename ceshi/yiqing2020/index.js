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

						swiperAnimate(swiper);
				},
				onSlideChangeEnd: function(swiper) {
					swiperAnimate(swiper);
				}
	})
	}
      
})
