
$(document).ready(function() {
  var arrimg = [
    'images/logo.png',
    'images/content_bg.png',
    'images/radio.png',
    'images/radio_check.png',
    'images/false.png',
    'images/title_bg.png',
    'images/icon01.png',
    'images/icon02.png',
    'images/submit.png',
    'images/title_bg.png',
    'images/img_bg_01.png',
    'images/content_bg.jpg',
    'images/home_bg.jpg',
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg',
    'images/img4.jpg',
    'images/img5.jpg',
    'images/img6.jpg',
    'images/img7.jpg',
    'images/img8.jpg',
    'images/img9.jpg',
    'images/img10.jpg',
    'images/img11.jpg',
    'images/img12.jpg',
    'images/main_img.jpg',
    'images/score.jpg',
    'images/scroe_bg.jpg',
    

  ];
  var loadNum = 0;
  for (var i = 0; i < arrimg.length; i++) {
    var aImg = document.createElement('img');
    aImg.src = arrimg[i];
    aImg.onload = function() {
      loadNum++;
      // console.log(this);
      // console.log(loadNum*10+'%')
      $('.loadnum').html(Math.floor((loadNum / arrimg.length) * 100) + '%');
      // console.log(Math.floor(loadNum/arrimg.length)*100+'%')
      if (loadNum == arrimg.length) {
        $('.zindex').css('display', 'none');
      }
    };
  }
});

//音乐播放
// document.addEventListener('DOMContentLoaded', function () {
//    function audioAutoPlay() {
//       var audio = document.getElementById('audio');
//          audio.play();
//       document.addEventListener("WeixinJSBridgeReady",function(){WeixinJSBridge.invoke('getNetworkType',{}, function(e){document.getElementById('audio').play()})},false);
//    }
//    audioAutoPlay();
// });


// $('html,body').one('click',function(){
//    audio.play();
// });


// 初始化
$(document).ready(function() {
  var mySwiper = new Swiper('.swiper-container', {});


  var vh=$(window).height();
  var vw=$(window).width();
  var imgRatio=750/1334;
  if(vw>vh){
     $('.swiper-container').height(vh);
     $('.swiper-container').width(vh*imgRatio);
  }


  $('.start').click(function(){
    mySwiper.slideTo(1, 500, false);//切换到第一个slide，速度为.5秒
  });



  var question = $('.question');
  var start = $('.start');
  var score = 0;
  var flag = false;
  var trueTitle = ['地暖火炕','风箱','狗窝','革命烈士人数','柏抱桑榆','万历二十年',
  '敕封三元三品三官大帝','抗日战争','对月亮的崇拜','蒜臼子','拴马桩','马蹄踩踏']
  var trueDesc = [
    '在中国地面采暖可追溯到明朝末年，为皇宫王室才能拥有的取暖方式，如现存中国的故宫，在青砖地面下砌好烟道，冬天通过烟道传烟并合理配置出烟窗以达到把青砖温热而后传到室内，使室内产生温暖的效果。此物件存在于琉璃渠赵氏商宅院内，为当时官宦人家常见的采暖设备。',
    '用来产生风力的设备，由一个木箱、一个推拉的木制把手和活动木箱构成。操作人员用手拉开活动木箱，空气通过进气口使风箱的皮橐内充满空气，而且并不塌缩，再拉动其体能够将其内的空气压出，空气通过输风管，可以进入熔炼炉中，用于炼铁。最常见的一种由木箱、长方形活动木箱构成，用来鼓风，使炉火旺盛。',
    '村里人家大多都会养狗，这个洞就是狗在屋外看家的地方，也就是狗窝。',
    '在抗日战争和解放战争中，黄岭西先后有数十名青壮年参军入伍，这面墙上的红色五角星代表着当年为革命牺牲的烈士。',
    '在灵水村西火龙王庙内有两株前年古柏，均为国家一级古树，其中一株在2米高的树杈间长有一株高10余米、径粗0.7米的大榆树；另一株古柏在高约4米处的树杈间长有一株高5米、干径0.25米的桑树及一棵高2米、粗0.04米的荆蒿，甚为奇特，实为难得一见的景观。',
    '苇子水村宗祖高氏明朝从山西洪洞大槐树迁徙到此，历经600余年繁衍，百户同宗，无其他杂姓混入，几十代人辈辈传衍，家族谱系清晰明确。有文字可查的最早记载为明朝万历二十年（1592年）。',
    '京西古幡会每年正月十五、十六举行，幡会共21面幡，千军台村有10面幡，邻村庄户村也有10面幡，还有一面则由两村共有。',
    '马栏村是抗日战争时期，平西抗日根据地堡垒村和英雄村，八路军冀热察挺进军司令部所在地，至今仍保留着大量的抗战遗址和文物。此地雷发现于村内冀热察挺进军十团弹药库，已做防爆处理。',
    '许多村落中的房屋山墙上发现圆形白色的图腾镶嵌在墙体上。书写“日”字的为东山墙；书写“月”字的为西山墙。《礼记·祭义》谓“日出于东，月出于西”。这是人们对日月的心理崇拜。',
    '民间捣蒜泥用的专用器具。分为臼窝和蒜锤。蒜臼子还可以制作花生、大豆等。此物发现于沿河城村一处老宅内，为石制，具体年代不详。',
    '旧时门前用以拴马、牛等牲畜的石雕桩。雕刻精美的拴马桩称“样桩”、“看桩”。拴马桩所用石材多是灰青石、黑青石，少数用细砂石。通常拴马桩下方还有上马石和下马石。此物件发现于西胡林村一处商宅院前，其上有细纹，因年代久远已经模糊不清。',
    '石佛岭古道是迄今为止保留最完好的一段古道之一，位于王平镇境内的东石古岩村，古道穿村而过。当年驮队、马帮行走的蹄印深刻清晰，蹄窝密布保留完好，是难得的远古印记。',
  ]

  chioce()
  function chioce(){
    var option = $('.Qform > div');
    
    $('.submit').unbind('click');
    $('.submit').bind('click',function(e){
      var key = $(this).prev('.Qform').attr('key');
      // console.log('正确答案: ' + key)
      var checkedOption = $('.Qform input[type="radio"]:checked').attr('id');
      // console.log('当前： '+checkedOption);
      if(key === checkedOption){
        window.location.href="#truePage";
        score ++;
        console.log(score);
      }else{
        flag == false;
        window.location.href="#falsePage";
      }

    })
  }
  var n=1
  $('.close').click(function(){
    $('.Qform input[type="radio"]').attr('checked', false)
    n++
    $('.trueOrFalse .resultTitle').text(trueTitle[n-1])
    $('.trueOrFalse .result').text(trueDesc[n-1])
    window.location.href = "#"+n;
    chioce();

    if(n === 13){
      // alert('总成绩：' + Math.round((score*(100/12))));
      var totalScore = Math.round((score*(100/12)));
      $('.score').text(totalScore)
      window.location.href = "#scorePage"
      if(totalScore >= 92){
        $('.rate').html('说你不是卧底<br>我都不信');
      }
      if(totalScore>= 67 && totalScore<= 83){
        $('.rate').html('有文化！<br>你知道的真多');
      }
      if(totalScore>= 42 && totalScore<= 58){
        $('.rate').html('可以啊，<br>没少去玩吧？');
      }
      if(totalScore>= 17 && totalScore<= 41){
        $('.rate').html('啧啧，真可怕，<br>快去门头沟补课吧');
      }
      if(totalScore>= 0 && totalScore<= 8){
        $('.rate').html('大哥<br>蒙都蒙不对啊？');
      }
    }
  });








  
});