
$(function(){
	$("#start").on("click",function(){
		window.location = "#Q1";
	})

	$("#send1").on('click',function(){
		var val = $("input[name='radio']:checked").val();
		if(val == 3){
			sAlert("恭喜您，回答正确！")
			setTimeout(function(){
				window.location = "#Q2"
				$("input[type='radio']").removeAttr('checked');
			},1500);
			
		}else{
			window.location = "#wrong";
			$("input[type='radio']").removeAttr('checked');
		}
	})

	$("#send2").on('click',function(){
		var val = $("input[name='radio']:checked").val();
		var text = $("#wrong #w1 .p2");
		
		if(val == 1){
			sAlert("恭喜您，回答正确！")
			setTimeout(function(){
				window.location = "#Q3"
				$("input[type='radio']").removeAttr('checked');
			},1500);
		}else{
			text.html('正确答案：<br>A  意大利有18人来自本国联赛，<br>俄罗斯有22人，而奥地利只有1<br>人。');
			window.location = "#wrong";
			$("#next1").attr("id","next2");
			$('#next2').on('click',function(){
				window.location = "#Q3";
				$("input[type='radio']").removeAttr('checked');
				$("#next2").attr("id","next1");
			})
			return false
		}
	})
	$("#send3").on('click',function(){
		var val = $("input[name='radio']:checked").val();
		var text = $("#wrong #w1 .p2");
		
		if(val == 3){
			sAlert("恭喜您，回答正确！")
			setTimeout(function(){
				window.location = "#Q4"
				$("input[type='radio']").removeAttr('checked');
			},1500);
		}else{
			text.html('正确答案：<br>C  本届欧洲杯共有49位球员来<br />自于非顶级联赛球队，其中36<br />人出自英格兰，含英冠31人、<br />英甲4人、英乙1人。');
			window.location = "#wrong";
			$("#next1").attr("id","next3");
			$('#next3').on('click',function(){
				window.location = "#Q4";
				$("input[type='radio']").removeAttr('checked');
				$("#next3").attr("id","next1");
			})
			return false
		}
	})


	$("#send4").on('click',function(){
		var val = $("input[name='radio']:checked").val();
		var text = $("#wrong #w1 .p2");
		
		if(val == 2){
			sAlert("恭喜您，回答正确！")
			setTimeout(function(){
				window.location = "#Q5"
				$("input[type='radio']").removeAttr('checked');
			},1500);
		}else{
			text.html('正确答案：<br>B  本届欧洲杯法甲贡献22人，<br />土超贡献36人，俄超贡献32<br />人，西甲贡献34人。');
			window.location = "#wrong";
			$("#next1").attr("id","next4");
			$('#next4').on('click',function(){
				window.location = "#Q5";
				$("input[type='radio']").removeAttr('checked');
				$("#next4").attr("id","next1");
			})
			return false
		}
	})

	$("#send5").on('click',function(){
		var val = $("input[name='radio']:checked").val();
		var text = $("#wrong #w1 .p2");
		
		if(val == 1){
			sAlert("恭喜您，回答正确！")
			setTimeout(function(){
				window.location = "#Q6"
				$("input[type='radio']").removeAttr('checked');
			},1500);
		}else{
			text.html('正确答案：<br>A  英格兰前锋拉什福德出生于<br />1997年10月31日，是本届杯<br />赛最年轻的球员。');
			window.location = "#wrong";
			$("#next1").attr("id","next5");
			$('#next5').on('click',function(){
				window.location = "#Q6";
				$("input[type='radio']").removeAttr('checked');
				$("#next5").attr("id","next1");
			})
			return false
		}
	})

	$("#send6").on('click',function(){
		var val = $("input[name='radio']:checked").val();
		var text = $("#wrong #w1 .p2");
		
		if(val == 2){
			sAlert("恭喜您，回答正确！")
			setTimeout(function(){
				window.location = "#Q7"
				$("input[type='radio']").removeAttr('checked');
			},1500);
		}else{
			text.html('正确答案：<br>B  本届欧洲杯唯一来自中超联<br />赛的球员是土耳其队的伊尔马<br />兹，目前在北京国安队效力。');
			window.location = "#wrong";
			$("#next1").attr("id","next6");
			$('#next6').on('click',function(){
				window.location = "#Q7";
				$("input[type='radio']").removeAttr('checked');
				$("#next6").attr("id","next1");
			})
			return false
		}
	})

	$("#send7").on('click',function(){
		var val = $("input[name='radio']:checked").val();
		var text = $("#wrong #w1 .p2");
		
		if(val == 2){
			sAlert("恭喜您，回答正确！")
			setTimeout(function(){
				window.location = "#Q8"
				$("input[type='radio']").removeAttr('checked');
			},1500);
		}else{
			text.html('正确答案：<br>B   冰岛队23人中有22人来自不<br />同球会俱乐部，只有门将克里斯<br />丁松和后卫赛瓦尔松同在哈马比<br />队效力。');
			window.location = "#wrong";
			$("#next1").attr("id","next7");
			$('#next7').on('click',function(){
				window.location = "#Q8";
				$("input[type='radio']").removeAttr('checked');
				$("#next7").attr("id","next1");
			})
			return false
		}
	})

	$("#send8").on('click',function(){
		var val = $("input[name='radio']:checked").val();
		var text = $("#wrong #w1 .p2");
		
		if(val == 4){
			sAlert("恭喜您，回答正确！")
			setTimeout(function(){
				window.location = "#Q9"
				$("input[type='radio']").removeAttr('checked');
			},1500);
		}else{
			text.html('正确答案：<br>D   西班牙共有19人参加了2015/<br />16赛季欧冠联赛，德国队16人参<br />赛，法国队15人参赛，意大利队<br />13人参赛。');
			window.location = "#wrong";
			$("#next1").attr("id","next8");
			$('#next8').on('click',function(){
				window.location = "#Q9";
				$("input[type='radio']").removeAttr('checked');
				$("#next8").attr("id","next1");
			})
			return false
		}
	})

	$("#send9").on('click',function(){
		var val = $("input[name='radio']:checked").val();
		var text = $("#wrong #w1 .p2");
		
		if(val == 3){
			sAlert("恭喜您，回答正确！")
		setTimeout(function(){
				window.location = "#Q10"
				$("input[type='radio']").removeAttr('checked');
			},1500);
		}else{
			text.html('正确答案：<br>C  瑞典队平均身高1.86米，德<br />国队平均身高1.85米，俄罗斯<br />队1.83米，罗马尼亚队1.82米。');
			window.location = "#wrong";
			$("#next1").attr("id","next9");
			$('#next9').on('click',function(){
				window.location = "#Q10";
				$("input[type='radio']").removeAttr('checked');
				$("#next9").attr("id","next1");
			})
			return false
		}
	})

	$("#send10").on('click',function(){
		var val = $("input[name='radio']:checked").val();
		var text = $("#wrong #w1 .p2");
		
		if(val == 3){
			sAlert("恭喜您，回答正确！")
			window.location = "#final-page"
		}else{
			text.html('正确答案：<br>C   匈牙利门将基拉利出生于<br />1976年4月1日，比爱尔兰门<br />将吉文早出生19天，布冯和<br />卡瓦略均生于1978年。');
			window.location = "#wrong";
			$("#next1").attr("id","next10");
			$('#next10').on('click',function(){
				window.location = "#final-page";
			})
			return false
		}
	})



	$('#next1').on('click',function(){
		window.location = "#Q2";
	})
	
})




// 自定义alert
function sAlert(str){ 
    var msgw,msgh,bordercolor; 
    msgw=350;//Width
    msgh=100;//Height 
    titleheight=25 //title Height
    bordercolor="#4b9541";//boder color
    titlecolor="#4b9541";//title color
   
    var sWidth,sHeight; 
    sWidth=document.body.offsetWidth; 
    sHeight=screen.height; 
    var bgObj=document.createElement("div"); 
    bgObj.setAttribute('id','bgDiv'); 
    bgObj.style.position="absolute"; 
    bgObj.style.top="0"; 
    bgObj.style.background="#777"; 
    bgObj.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=3,opacity=25,finishOpacity=75"; 
    bgObj.style.opacity="0.6"; 
    bgObj.style.left="0"; 
    bgObj.style.width=sWidth + "px"; 
    bgObj.style.height=sHeight + "px"; 
    bgObj.style.zIndex = "10000"; 
    document.body.appendChild(bgObj); 
     
    var msgObj=document.createElement("div") 
    msgObj.setAttribute("id","msgDiv"); 
    msgObj.setAttribute("align","center"); 
    msgObj.style.background="white"; 
    msgObj.style.border="1px solid " + bordercolor; 
    msgObj.style.borderRaidus = "10px";
    msgObj.style.position = "fixed"; 
    msgObj.style.left = "60%"; 
    msgObj.style.top = "45%"; 
    msgObj.style.font="12px/1.6em Verdana, Geneva, Arial, Helvetica, sans-serif"; 
    msgObj.style.marginLeft = "-215px" ; 
    msgObj.style.marginTop = -75+document.documentElement.scrollTop+"px"; 
    msgObj.style.width = msgw + "px"; 
    msgObj.style.height =msgh + "px"; 
    msgObj.style.textAlign = "center"; 
    msgObj.style.lineHeight ="60px"; 
    msgObj.style.zIndex = "10001"; 
     
    var title=document.createElement("h4"); 
    title.setAttribute("id","msgTitle"); 
    title.setAttribute("align","right"); 
    title.style.margin="0"; 
    title.style.padding="3px"; 
    title.style.background=bordercolor; 
    title.style.filter="progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);"; 
    title.style.opacity="0.75"; 
    title.style.border="1px solid " + bordercolor; 
    title.style.height="18px"; 
    title.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif"; 
    title.style.color="white"; 
    title.style.cursor="pointer"; 
    title.innerHTML="关闭"; 
    title.onclick=function(){ 
           document.body.removeChild(bgObj); 
           document.getElementById("msgDiv").removeChild(title); 
           document.body.removeChild(msgObj); 
         } 
    document.body.appendChild(msgObj); 
    document.getElementById("msgDiv").appendChild(title); 
    var txt=document.createElement("p"); 
    txt.style.margin="1em 0" 
    txt.setAttribute("id","msgTxt"); 
    txt.innerHTML=str; 
    document.getElementById("msgDiv").appendChild(txt); 
 } 
