

var mySwiper = new Swiper('.swiper-container', {});
var vh=$(window).height();
var vw=$(window).width();
var imgRatio=750/1334;
if(vw>vh){
    $('.swiper-container').height(vh);
    $('.swiper-container').width(vh*imgRatio);
}
	
$(document).ready(function() {

	var qid = 0;	// 答题卡号码
	var qidx = 1;	// 问题顺序码
	var url = "/weixin/quiz19da/getdata";
	var anslist = new Array([100]);

	// 开始按钮
	$('#start').click(function(){

		$("#index").html("正在获取题目");
		$("#zindex").show();

		$.ajax({
            type: "get",
            url: url,
            data: {action:'1'},
            cache: false,
            dataType: 'json',
            success: function(data) {    
                var obj = eval("("+data+")");
                if(obj.status == 'SEC'){
                	qid = obj.qid;
                	set_qusdata(obj);
	    			mySwiper.slideTo(1, 500, false);                	
                }
                else {
                	$("#index").html("发生错误. 请刷新页面重试");
                }
            }
        });

		setTimeout(function (){
			$("#zindex").hide();
		}, 500);
		return false;
  	});

	// 下一题
	$("#nextQ").click(function(){

		$("#index").html("正在获取题目");
		$("#zindex").show();

		// 检查有没有选择答案
		var checkVal = $('input:radio[name="radio"]:checked').val();  
		if(checkVal == null){
			$("#index").html("没有选择的答案");
			setTimeout(function (){
				$("#zindex").hide();
			}, 500);
			return false;
		}

		// 添加答案
		anslist[qidx-1]  = checkVal;
		// console.log(anslist);

		// 常规下一题
		if(qidx < 100){	

			// 获取下一题
			$.ajax({
	            type: "get",
	            url: url,
	            data: {action:'2', qid:qid, idx: qidx},
	            cache: false,
	            dataType: 'json',
	            success: function(data) {
	            	//console.log(data);
	            	var obj = eval("("+data+")");
	                if(obj.status == 'SEC'){
	                	qidx++;
	                	set_qusdata(obj);
		    			mySwiper.slideTo(1, 500, false);
						setTimeout(function (){
							$("#zindex").hide();
						}, 500);            	
	                }
	                else {
	                	$("#index").html("发生错误. 请刷新页面重试");
	                }
	            }
	        });				
		}

		// 最后一题， 提交答案
		else{
			// 获取下一题
			$("#index").html("正在提交答案");
			$.ajax({
	            type: "get",
	            url: url,
	            data: {action:'3', qid:qid, ans:anslist.join(",")},
	            cache: false,
	            dataType: 'json',
	            success: function(data) {
	            	//console.log(data);
	            	var obj = eval("("+data+")");
	                if(obj.status == 'SEC'){
	                	$("#score").html(obj.score);
	                	$("#score2").html(obj.score);
		    			mySwiper.slideTo(2, 500, false);

		    			var score = $('#score').text();
						var scoreBg = $('#scoreBg');

						if(score == 100){
							scoreBg.attr('src', 'images/100.png');
						}
						else if(score<100 && score>=90){
							scoreBg.attr('src', 'images/90up.png');
						}else if(score>=80 && score<90){
						    scoreBg.attr('src', 'images/80up.png');
						}else if(score>=60 && score<80){
							scoreBg.attr('src', 'images/60up.png');
						}else{
						    scoreBg.attr('src', 'images/60down.png');
						}

						setTimeout(function (){
							$("#zindex").hide();
						}, 500);			                	
	                }
	                else {
	                	$("#index").html("发生错误. 请刷新页面重试");
	                }
	            }
	        });	
		}

		setTimeout(function (){
			$("#zindex").hide();
		}, 500);
		return false;
	});

	// 上一题
	$("#prevQ").click(function(){

		$("#index").html("正在获取题目");
		$("#zindex").show();

		if(qidx > 1){
			qidx--;
			// 获取上一题
			$.ajax({
	            type: "get",
	            url: url,
	            data: {action:'2', qid:qid, idx: qidx-1},
	            cache: false,
	            dataType: 'json',
	            success: function(data) {
	            	//console.log(data);
	            	var obj = eval("("+data+")");
	                if(obj.status == 'SEC'){
	                	set_qusdata(obj);
		    			mySwiper.slideTo(1, 500, false);  
						setTimeout(function (){
							$("#zindex").hide();
						}, 500);		    			              	
	                }
	                else {
	                	$("#index").html("发生错误. 请刷新页面重试");
	                }
	            }
	        });		
	    }
	    else{
	    	$("#index").html("已经是第一题了");
	    }
		// setTimeout(function (){
		// 	$("#zindex").hide();
		// }, 500);
		return false;
	});	

	// 提交信息
	$("#submit2").click(function(){
		mySwiper.slideTo(3, 500, false);   
	});

	// 设置答题
	function set_qusdata(data){
		$("#qus").html(data.qus);
		$("#num").html(qidx + ".");
		$("#ans1").html('A ' + data.a);
		$("#ans2").html('B ' + data.b);
		$("#ans3").html('C ' + data.c);
		$("#ans4").html('D ' + data.d);	

		$('input:radio[name="radio"]').attr("checked", false);
		$("#zindex").hide();
	}

	// 单位变更， 同时提交部门变更
	var qlwlist = new Array('总编室', '总裁办', '时政中心', '产经中心', '文化教育体育中心', '图像发展中心', '千引视听发展中心', '兔爷动漫发展中心', '千龙智库', '市场运营中心', '技术中心', '综合行政事务中心', '其他');
	var xjjlist = new Array('行政推广部', '报告部', '文化博览部', '文库部', '专题部', '评论部', '新媒体部', '影视部', '设计部', '运维部');
	$('#office').change(function(){ 
		var office = $(this).children('option:selected').val();
		$("#department").empty();
		$("#department").prepend("<option value='0'>请选择</option>");    
		if(office == 'qlw'){
			$('#department').removeAttr("disabled");
			for(var i=0; i<qlwlist.length; i++){
				$("#department").append("<option value='" + qlwlist[i] + "'>" + qlwlist[i]  + "</option>");
			}
		}
		else if(office == 'xjj'){
			$('#department').removeAttr("disabled");
			for(var i=0; i<xjjlist.length; i++){
				$("#department").append("<option value='" + xjjlist[i] + "'>" + xjjlist[i]  + "</option>");
			}
		}
		else
			 $('#department').attr("disabled","disabled");
	});
		

	// 提交用户信息
	var finish = false;
	$("#submit").click(function(){

		$("#zindex").show();
		var flag = false;

		if(finish == true){
			flag = true;
			$("#index").html("已经提交过");		
		}

		var username = $.trim($("input#username").val());
		if(flag == false && username == ''){
			flag = true;
			$("#index").html("用户名不能为空");		
		}
		// console.log(username);

		var office = $("#office").children('option:selected').val();
		if(flag == false && office == 0){
			flag = true;
			$("#index").html("请选择单位");		
		}
		// console.log(office);

		var department = $("#department").children('option:selected').val();
		if(flag == false && (office != 'xlw' && department == 0)){
			flag = true;
			$("#index").html("请选择部门");		
		}
		// console.log(department);		

		// phone 检查么
		var phone = $.trim($("input#phone").val());
		// console.log(phone);
		// if(flag == false && phone == ''){
		// 	flag = true;
		// 	$("#index").html("电话不能为空");		
		// }

		// 检查结束 / 提交数据
		if(flag == false){
			$("#index").html("正在提交信息");		
			$.ajax({
	            type: "get",
	            url: url,
	            data: {action:'4', qid:qid, username:username, office:office, depart:department, phone:phone},
	            cache: false,
	            dataType: 'json',
	            success: function(data) {
	            	//console.log(data);
	            	var obj = eval("("+data+")");
	                if(obj.status == 'SEC'){
           				$("#index").html("提交成功");
           				finish = true;

	           			setTimeout(function (){
							location.reload();
						}, 3000);
	                }
	                else {
	                	$("#index").html("发生错误. 请刷新页面重试");
	                }
	            }
	        });	
		}
		
		setTimeout(function (){
			$("#zindex").hide();
		}, 800);
		return false;
		
	});

  	$.ajax({
	    type: "get",
	    async: true,
	    url: "http://partner.qianlong.com/api/weixin/share/qianlong",
	    dataType: "jsonp",
	    data: {
	      "weburl": location.href.split("#")[0]
	    },
	    success: function(json){
	      //console.log(json);
	      wx.config({
	        debug: false,
	        appId: json.appId,
	        timestamp: json.timestamp,
	        nonceStr: json.nonceStr,
	        signature: json.signature,
	        jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone']
	      });
	    },
	    error: function(){
	      console.log("share error");
	    }
	  });
	  wx.ready(function(){
	    console.log("ready to share");
	    var obj_co = {
	          title: "喜迎十九大,百题大竞赛",
	          link: "http://partner.qianlong.com/h5/19da_dati/index.html",
	          imgUrl: "http://partner.qianlong.com/h5/19da_dati/images/share.jpg",
	          success: function(){
	          },
	          cancel: function(){}
	        },
	        obj_co_desc = {
	          desc: "千龙网党委组织“喜迎十九大，百题大竞赛”活动。"
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
});
