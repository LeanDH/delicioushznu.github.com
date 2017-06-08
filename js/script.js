function Updatadb(num,food_id,taste,size)
{
    var xmlhttp;
        if (window.XMLHttpRequest)
          {// code for IE7+, Firefox, Chrome, Opera, Safari
          xmlhttp=new XMLHttpRequest();
          }
          else
          {// code for IE6, IE5
          xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
          }
        xmlhttp.onreadystatechange=function()
          {
              if (xmlhttp.readyState==4 && xmlhttp.status==200)
                {
                   
                  // alert(xmlhttp.responseText); 
                  var ans=xmlhttp.responseText;
                  if(ans==false)
                  {
                    alert("please login");
                  }       
                }
          }
            var way=1;
            xmlhttp.open("GET","http://localhost:8080/phpbin/shop.php?food_id="+food_id+"&&num="+num+"&&taste="+taste+"&&size="+size,true);
            xmlhttp.send(); 
}

function loaduser()
{
    var xmlhttp;
        if (window.XMLHttpRequest)
          {// code for IE7+, Firefox, Chrome, Opera, Safari
          xmlhttp=new XMLHttpRequest();
          }
          else
          {// code for IE6, IE5
          xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
          }
        xmlhttp.onreadystatechange=function()
          {
              if (xmlhttp.readyState==4 && xmlhttp.status==200)
                {
                   
                   //alert(xmlhttp.responseText);
                   if(xmlhttp.responseText!=false)
                   {    $('.words').html(xmlhttp.responseText);
                        $('.words').attr('href','index.html'); 
                        $('.zyx-nav-userload a').html("退出");
                        $('.zyx-nav-userinf p').html(xmlhttp.responseText+"<br>"+"欢迎来到HZNU餐厅");
                        $('.zyx-nav-userlink').html(xmlhttp.responseText);
                       
                   }
                   else
                   {
                        //alert("w");
                   }
                }
          }
            var way=1;
            xmlhttp.open("GET","http://localhost:8080/phpbin/index.php?way="+way,true);
            xmlhttp.send();
}
function loadmordish(start)
{
    var xmlhttp;
        if (window.XMLHttpRequest)
          {// code for IE7+, Firefox, Chrome, Opera, Safari
          xmlhttp=new XMLHttpRequest();
          }
          else
          {// code for IE6, IE5
          xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
          }
        xmlhttp.onreadystatechange=function()
          {
              if (xmlhttp.readyState==4 && xmlhttp.status==200)
                {
                   
                   //alert(xmlhttp.responseText);
                   var str=xmlhttp.response;
                  // alert(str+"　"+start+" "+way);
                   var obj=eval('(' + str + ')');
                   for(var i=0;i<3;i++)
                   {
                    $('.zyxbuild7-dish-img').eq(start).attr('src','img/'+obj.dataList[i].food_id+'.jpg');
                    $('.zyxdish-name').eq(start).html("<br>"+obj.dataList[i].food_name+"<br><br>"+obj.dataList[i].price+"元<br><br");
                    //$('.zyxdish-name').eq(start).html();
                    start++;
                   }
                   
                }
          }
            var way=start/3+2;
            xmlhttp.open("GET","http://localhost:8080/phpbin/index.php?way="+way+"t="+Math.random(),true);
            xmlhttp.send();
}
function loadmordish1(start)
{
    var xmlhttp;
        if (window.XMLHttpRequest)
          {// code for IE7+, Firefox, Chrome, Opera, Safari
          xmlhttp=new XMLHttpRequest();
          }
          else
          {// code for IE6, IE5
          xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
          }
        xmlhttp.onreadystatechange=function()
          {
              if (xmlhttp.readyState==4 && xmlhttp.status==200)
                {
                   
                   //alert(xmlhttp.responseText);
                   var str=xmlhttp.response;
                   //alert(str+"　"+start+" "+way);
                   var obj=eval('(' + str + ')');
                   for(var i=0;i<3;i++)
                   {
                    $('.zyxbuild2-dish-img').eq(start).attr('src','img/'+obj.dataList[i].food_id+'.jpg');
                    $('.zyxbuild2-dish-title').eq(start).html(obj.dataList[i].food_name+"<br>"+obj.dataList[i].price+"元");
                   // $('.zyxbuild2-dish-title').eq(start).html("<br>"+obj.dataList[i].price+"元<br><br>");
                    start++;
                   }
                   
                }
          }
            var way=start/3+8;
            xmlhttp.open("GET","http://localhost:8080/phpbin/index.php?way="+way+"t="+Math.random(),true);
            xmlhttp.send();
}
function Toloadbody()
{
        //alert("HZNU");
        loaduser();
        loadmordish(0);
        loadmordish(3);
        loadmordish(6);
        loadmordish(9);
        loadmordish(12);
        loadmordish(15);
        loadmordish1(0);
        loadmordish1(3); 
        loadmordish1(6);  
        loadmordish1(9);    
}

document.onscroll=function()
{
    var nav = document.getElementById("zyx-dirnav");
    var total = document.body.scrollTop||document.documentElement.scrollTop;
    if(total>(500))
    {
        nav.className="zyx-nav-fix";
        $('.totop').show('fast');

    }
    else 
    {
        nav.className="zyx-nav-clearfix";
        $('.totop').hide('fast');
    }
}
$(document).ready(function(e) {
    var unslider04 = $('#b04').unslider({
        dots: true
    }),
    data04 = unslider04.data('unslider');
     
    $('.unslider-arrow04').click(function() {
        var fn = this.className.split(' ')[1];
        data04[fn]();
    });
    var unslider07 = $('.zyxbulid7').unslider({
        dots: true,
        speed:500
    }),
    data07 = unslider07.data('unslider');
    $('.zyxdish-name').mouseenter(function(event) {
        $(this).fadeOut('fast',function(){$(this).next().fadeIn();});
    });
    $('.zyx-buy').mouseleave(function(event) {
       //$(this).hide();
       $(this).fadeOut('fast',function(){$(this).prev().fadeIn();});
    });
    var unslider02 = $('.zyxbuild2').unslider({
        dots: false
    }),
    data02 = unslider02.data('unslider');
    $('.unslider-arrow02').click(function() {
            var fn = this.className.split(' ')[1];
            data02[fn]();
    });
});
$('.zyx-nav-user').click(function(event) {
    /* Act on the event */
    $('.zyx-nav-userinf').slideToggle('slow');
});
$('.zyx-nav-userload').click(function(event) {
    var xmlhttp;
    if (window.XMLHttpRequest)
          {// code for IE7+, Firefox, Chrome, Opera, Safari
          xmlhttp=new XMLHttpRequest();
          }
          else
          {// code for IE6, IE5
          xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
          }
        xmlhttp.onreadystatechange=function()
          {
              if (xmlhttp.readyState==4 && xmlhttp.status==200)
                {
                   
                   //alert(xmlhttp.responseText);
                   if(xmlhttp.responseText=="destroy")
                   {
                        //alert("wwww");
                        $('.words').html("登录");
                        $('.words').attr('href','log.html'); 
                        $('.zyx-nav-userload a').html("");
                        $('.zyx-nav-userinf p').html("登陆更加美好");
                        $('.zyx-nav-userlink').html("用户");
                   }
                   else
                   {
                        
                   }
                }
          }
            xmlhttp.open("GET","http://localhost:8080/phpbin/logout.php?",true);
            xmlhttp.send();
});
 $.getScript('http://php.weather.sina.com.cn/iframe/index/w_cl.php?code=js&day=0&city=&dfc=1&charset=utf-8',function(a){
    var s="",r="",q="";for(s in window.SWther.w){
        q=SWther.w[s][0];
        r={
            city:s,
            date:SWther.add.now.split(" ")[0]||"",
            day_weather:q.s1,
            night_weather:q.s2,
            day_temp:q.t1,
            night_temp:q.t2,
            day_wind:q.p1,
            night_wind:q.p2
        }
        $(".weather").html("天气:"+q.s1+" "+"白天温度:"+q.t1+" "+"晚上的气温:"+q.t2+"<br>"+"阿姨说:根据温度决定自己的饮食更健康哦");
        //alert(q.s1+" "+r.city);
}});
 $('.totop').click(function(event) {
     /* Act on the event */
        $('html,body').animate({  
            scrollTop:$(".zyx-nav").offset().top
        }, 1000);  
 });
 $('.zyx-dirnav-cnt1').click(function(event) {
     /* Act on the event */
        $('html,body').animate({  
            scrollTop:$(".index1").offset().top
        }, 1000);  
 });
 $('.zyx-dirnav-cnt3').click(function(event) {
   /* Act on the event */
         $('html,body').animate({  
            scrollTop:$(".index3").offset().top
        }, 1000);  

 });
 $('.zyx-dirnav-cnt4').click(function(event) {
   /* Act on the event */
         $('html,body').animate({  
            scrollTop:$(".index4").offset().top
        }, 1000);  

 });
 $('.zyx-dirnav-cnt2').click(function(event) {
     /* Act on the event */
        $('html,body').animate({  
            scrollTop:$(".index2").offset().top
        }, 1000);  
 });
 $('.zyxbuild7-dish-img').click(function(event) {
   /* Act on the event */
   var src=$(this).attr('src');
   var des="html/";
   var des=des+src.substring(4,9)+".html"
   window.location.href=des; 
 });
 $('.zyxbuild2-dish-img').click(function(event) {
   /* Act on the event */
   var src=$(this).attr('src');
   var des="html/";
   var des=des+src.substring(4,9)+".html"
   window.location.href=des; 
 });
 $('.fa-shopping-cart').click(function(){
    if($(this).hasClass("l-rotatel")){ 
          $(this).removeClass("l-rotatel");
          $(this).addClass("l-rotater");
      }else{
        $(this).removeClass("l-rotater");
        $(this).addClass("l-rotatel");
      }
      var n=$('.fa-shopping-cart').index(this);
    var str=$('.food-img').eq(n).attr('src');                       //alert(str+i);
    str=str.substring(4,9);
    Updatadb(1,str,-1,-1);
    //alert(str);
  });
 $('.l-fa-heart').click(function(){

    if($(this).hasClass('fa-heart-o')){
      $(this).removeClass('fa-heart-o');      
        $(this).addClass('fa-heart');
        $(this).css('color','#ff3232'); 
        }else
        {
          $(this).removeClass('fa-heart');
          $(this).addClass('fa-heart-o');     
        $(this).css('color','black'); 
        }
  });
