function Toloadbody()
{
        //alert("HZNU");
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
            xmlhttp.open("GET","http://localhost:8080/phpbin/index.php?way="+Math.random(),true);
            xmlhttp.send();
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
    $('.zyxdish-name').mouseover(function(event) {
        $(this).fadeOut('fast',function(){$(this).next().fadeIn();});
    });
    $('.zyx-buy').mouseout(function(event) {
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
$('.zyx-nav-user').hover(function(event) {
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
        alert(q.s1+" "+r.city);
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
            scrollTop:$("#zyxsec1").offset().top
        }, 1000);  
 });
 $('.zyx-dirnav-cnt2').click(function(event) {
     /* Act on the event */
        $('html,body').animate({  
            scrollTop:$("#zyxsec2").offset().top
        }, 1000);  
 });