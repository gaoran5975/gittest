var flag = [0,0,0,0,0,0];
var pageArr = ['#page1','#page2','#page3','#page4','#page5','#page6'];
var originLoc,newLoc,newNum,newtitle,lasStr,mytimer;
var arrpage = ['谢谢你的坚守，让我们的年更踏实','谢谢你的坚守，让我们的年更安全','谢谢你的坚守，让我们的年更幸福','谢谢你的坚守，让我们的年更舒适','谢谢你的坚守，让我们的年更便捷','谢谢你的坚守，让我们的年更安心'];
var loadpageFlag = 0;
//如果网页是#page
originLoc = window.location.hash;
lasStr = originLoc.substr(originLoc.length-1,1);
console.log(originLoc,lasStr)
if (pageArr.indexOf(originLoc) == -1){
	loadpageFlag = 1;
	$('#loadpage').show();
}
else{
	$('#loadpage').hide();
    checkAct(originLoc,lasStr); 
}
$('.ys').click(function(){
	changeLoc('#page1');
})
$('.jc').click(function(){
	changeLoc('#page2');
})
$('.hc').click(function(){
	changeLoc('#page3');
})
$('.hw').click(function(){
	changeLoc('#page4');
})
$('.gj').click(function(){
	changeLoc('#page5');
})
$('.bf').click(function(){
	changeLoc('#page6');
})

 function changeLoc(ahash){
     newLoc = "http://partner.qianlong.com/h5/xxndjs_ceshi/"+ahash;
     newNum = parseInt(ahash.substr(ahash.length-1,1));
     newtitle = arrpage[newNum-1<0?0:newNum-1];
     console.log(newLoc,newNum,newtitle)
     checkAct(ahash,newNum);
 }

 function checkAct(ahash,newNum){
 	$('.secpage').hide();
 	$(ahash).show();
    $('.secpage').removeClass('cur');
     $(ahash).addClass('cur');
 }

function showloadP(){
	if(loadpageFlag == 0)
		{
		   $('#loadpage').show();
		   loadpageFlag = 1;		
		}
	else{
		 return;
	}	
} 