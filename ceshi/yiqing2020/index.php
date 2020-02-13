<?php
require_once "../php/jssdk.php";/* 这里的文件路径视`php`文件夹所在路径而定。不一定都要一样，个人建议扔到一个所有html文件夹都可以引用的目录*/
$jssdk = new JSSDK("wx9bcf324d828ede6c", "83b277c1d7238492fbcd26c5f988a877");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    <title>疫情谣言一网打尽——千龙网</title>
    <meta name="keywords" content="" />
	<script src="jquery-1.8.3.min.js"></script>	
</head>
<body style="background: #04336d;">
	<div class="container" style="background-size: contain;">
		  <div class="banner">
		  	   <img src="css/images/p1.png" class="p1">
		  	   <div class="fsrs">
		  	   	   <ul class="riqi">
		  	   	   	    <li class="first">
		  	   	   	    	<img src="css/images/p2-1.png">
		  	   	   	    	<p>截止：<span class="nowtime"></span></p>
		  	   	   	    </li>
		  	   	   	    <li class="sec"></li> 
		  	   	   </ul>
		  	   </div>
		  </div>
		  <div  class="content"  style="padding-bottom: 1.1rem;">
		  </div>
		  <div class="footer">
		  	 <a href="http://py.qianlong.com/"><img src="css/images/p6.png"></a>
		  </div>
	</div>
		<link rel="stylesheet" href="css/style.css">
</body>
<style type="text/css">
	.container{background-size: contain;}
	.rumotag li.sec span{font-weight: bold;}
	.cardtitle p a{font-size: 0.45rem;}
	.contxq{padding-top: 3px;padding-bottom: 3px;}
	.contxq img{margin-left: 3px;}
	.sq{font-size: 0.28rem;}
	.cardcont p.cardcontent{line-height: 110%;}
	.riqi li.sec{line-height: 150%;}
	.rumotag li.sec{position: relative;}
	.rumotag li.sec span{left: 2px;right: auto;top: -1px;}
	.rumocard{margin-bottom: 0.85rem;}
</style>
<script src="jweixin-1.0.0.js"></script>
<script type="text/javascript">
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
            remLayout();
        }, false);
    }();
	        //ajax填充数据       
        function ajs(){
            $.ajax({
                url:"http://www.qianlong.com/qianlong-new/api/yiqing_h5.php",    //请求的url地址
                dataType:"json",   //返回格式为json
                // async:true,//请求是否异步，默认为异步，这也是ajax重要特性
                data:{},    //参数值,键值对
                type:"post",   //请求方式
                success:function(req){
                    /请求成功时处理/
                    if(req.status == 1){
                         var str = '';
                         var totalnum;
                        for(var i = 0; i<req.data.length; i++){
                                str += '<div class="rumocard">';
                                str += '<ul class="rumotag">';
                                str += '<li class="fir">';
                                str += '<img src="css/images/p4.png"><span>' + req.data[i].time_format_display + '</span></li>';
                                str += '<li class="thr">谣言No.</li>';
                                str += '<li class="sec"><span>' + req.data[i].order + '</span></li>';
                                str += '</ul>';
                                str += ' <div class="yy"><img src="css/images/p3.png"></div>';
                                str += '<div class="cardtitle">';
                                str += '<p><a href="'+req.data[i].url+'">' + req.data[i].title + '</a></p> ';
                                str += '</div>';
                                str += '<div class="cardcont">';
                                str += '<p class="cardcontent">';
                                str += '<span class="zx" style="font-weight:bold;">真相：</span>';
                                str += '<span class="maincont">' + req.data[i].description +'</span>';
                                str += '</p>';
                                str += '<div class="contxq"><span class="xq sq">展开详情</span>';
                                str += '<img src="css/images/down.png"></div>';
                                str += '</div>';
                                str += '</div>';
                            }
                            totalnum = req.data[0].order;
                            console.log(totalnum)
                            $('.content').append(str);
                 	        $('.riqi li.sec').html(totalnum);
                          } 
                	// console.log('success')
                },
                complete:function(){
                    //请求完成的处理
			        //获取当前时间
			        // console.log('complete')
			        var nowTime=getFormatDate();
					function getFormatDate(){
						    var nowDate = new Date();
						    var year = nowDate.getFullYear();
						    var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
						    var date = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
						    var hour = nowDate.getHours()< 10 ? "0" + nowDate.getHours() : nowDate.getHours();
						    var minute = nowDate.getMinutes()< 10 ? "0" + nowDate.getMinutes() : nowDate.getMinutes();
						    return year + "." + month + "." + date+" "+hour+":"+minute;
						}
						$('.riqi li.first span.nowtime').html(getFormatDate());
			        //设置每条内容的时间背景
			        		$('.rumocard').each(function(){
				        	var firSpan = $(this).find('.rumotag li.fir span');
				        	var firImg =$(this).find('.rumotag li.fir img');
				        	var firSpanHtml = firSpan.html();
				        	// console.log(firSpanHtml.length)
				        	  if(firSpanHtml.length!= 0){
				        	  	 firImg.attr({
				        	  	 	'src':'css/images/p4-2.png'
				        	  	 })
				        	  	 $(this).find('.rumotag').css('top','-0.7rem')
				        	  }

			        })		
			        //查看详情
			            $('.xq').each(function(){
			            	var self = $(this);
			            	 self.click(function(){
			            	 	var cardcontent = $(this).parent().parent().find('p.cardcontent'); 
			            	 	var cardimg = $(this).parent().find('img'); 
			            	 	var state  =  cardcontent.css('display');       	 	
			            	 	if(state == 'none'){
			            	 		cardcontent.css('display','block');
			            	 		self.html('收起详情');
			            	 		cardimg.attr('src','css/images/up.png');
			            	 	}
			            	 	else{
			            	 		cardcontent.css('display','none');
			            	 		self.html('展开详情');
			            	 		cardimg.attr('src','css/images/down.png');
			            	 	}
			            	 })
			            })
			        	//No.后面的数字调整
			        	
			        	$('.rumocard').each(function(){
			        		var num = $(this).find('.rumotag li.sec span').html();
			        		if(num>99){
			        			$(this).find('.rumotag li.sec').css('width','94px')
			        		}
			        		else if(num<10){
			        			$(this).find('.rumotag li.sec').css('width','69px')
			        		}else{
			        			$(this).find('.rumotag li.sec').css('width','83px')
			        		}
			        	})
			        	        //pad适配
					function viewport() {
						var e = window, a = 'inner';
						if (!('innerWidth' in window )) {
							a = 'client';
							e = document.documentElement || document.body;
						}
						return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
						}
						if(viewport().width>750){
								$('html,body,.footer').css('width','768px');
								$('html,body').css('margin','auto');
								$('.footer').css('left','auto');
								$('.rumocard').each(function(){
					        	var firSpan = $(this).find('.rumotag li.fir span');
					        	var firImg =$(this).find('.rumotag li.fir img');
					        	var firSpanHtml = firSpan.html();
					        	  if(firSpanHtml.length!= 0){
					        	  	 firImg.attr({
					        	  	 	'src':'css/images/p4-1o.png'
					        	  	 })
					        	  	 $(this).find('.rumotag').css('top','-0.7rem')
					        	  }

				              })
						}  
                },
                error:function(){
                    //请求出错处理
                }
           });
        }
        ajs();
        
    </script>
    <script type="text/javascript">
    	wx.config({
        debug: false,// 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。移动端会通过弹窗来提示相关信息。如果分享信息配置不正确的话，可以开了看对应报错信息
        appId: '<?php echo $signPackage["appId"];?>',
        timestamp: '<?php echo $signPackage["timestamp"];?>',
        nonceStr: '<?php echo $signPackage["nonceStr"];?>',
        signature: '<?php echo $signPackage["signature"];?>',
        jsApiList: [//需要使用的JS接口列表,分享默认这几个，如果有其他的功能比如图片上传之类的，需要添加对应api进来
            'checkJsApi',
            'onMenuShareTimeline',//
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo'
        ]
    });
  wx.ready(function(){
    console.log("ready to share");
    var obj_co = {
          title: '疫情谣言一网打尽',
          link: "https://gaoran5975.github.io/gittest/ceshi/yiqing2020/",
          imgUrl: "http://partner.qianlong.com/h5/zfyhzds/css/img/sutu.jpg",
          success: function(){
          },
          cancel: function(){}
        },
        obj_co_desc = {
          desc: '疫情谣言一网打尽'
        },
        obj_timeline = $.extend({}, obj_co),
        obj_appmsg = $.extend({}, obj_co_desc, obj_co),
        obj_qq = $.extend({}, obj_co_desc, obj_co),
        obj_wb = $.extend({}, obj_co_desc, obj_co),
        obj_qzone = $.extend({}, obj_co_desc, obj_co);

    wx.onMenuShareTimeline(obj_timeline);
    wx.onMenuShareAppMessage(obj_appmsg);
    wx.onMenuShareQQ(obj_qq);
    wx.onMenuShareWeibo(obj_wb);
    wx.onMenuShareQZone(obj_qzone);
  });
  wx.error(function (res) {
    console.log(res.errMsg);
    //alert(res.errMsg);
  });
</script>

    </script>
</html>