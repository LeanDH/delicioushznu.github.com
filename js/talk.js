/**
 * Created by dell on 2017/5/31.
 */
var title="";
var neirong="";
var ID=new Array();
var resindex=0;
var Myname="";
$(".canteen-box").hide();
$(".canteen-box").css("height","0");

  //食堂导航栏浮框
  $(".b-canteen").hover(
    function(){
      $(".canteen-box").show();
      $(".canteen-box").css("height","200px");
    },
    function(){
      $(".canteen-box").hide();
      $(".canteen-box").css("height","0");
    }
  );
function Toloadans(y,father)
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
                   {   
                      // alert(xmlhttp.responseText);
                      // alert(xmlhttp.responseText);
                        var ans=xmlhttp.responseText;
                            ans="("+ans+")";
                        var obj=eval(ans);
                        for(var i=0;i<obj.dataList.length;i++)
                        {
                            var s="<div class=\"onetalk\"><div class=\"username\">"+obj.dataList[i].name+"</div>:<div class=\"onetalk-message\">"+obj.dataList[i].say+"</div></div>";
                            $('.other-element-talk').eq(y).append(s);
                        }
                        
                      // window.location.reload("talk.html");
                   }
                   else
                   {
                        //alert("w");
                        //$('.price').html("5.00");
                        document.write("<h>Please Login!!</h>");
                   }
                
          }
            
        }
            xmlhttp.open("GET","http://localhost:8080/phpbin/loadres.php?father="+father,true);
            xmlhttp.send(); 
}
function Toloadbody()
{
    //var s=$('.element:first').clone(true);
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
                   {   
                      // alert(xmlhttp.responseText);
                      // alert(xmlhttp.responseText);
                        var ans=xmlhttp.responseText;
                            ans="("+ans+")";
                        var obj=eval(ans);
                        for(var i=0;i<obj.dataList.length;i++)
                        {
                            var s=$('.element:first').clone(true);
                            $('.element:first').after(s);
                        }
                        $('.element').eq(0).remove();
                        for(var i=0;i<obj.dataList.length;i++)
                        {
                            ID[i]=obj.dataList[i].ID;
                            if(obj.dataList[i].sex==1)
                            {
                                $('.headimage').eq(i).attr('src',"../img/man.jpg");
                            }else
                            {
                                $('.headimage').eq(i).attr('src',"../img/woman.jpg");
                            }

                            $('.message-talktitle').eq(i).html(obj.dataList[i].title);
                            $('.username').eq(i).html(obj.dataList[i].name);
                            $('.message-time').eq(i).html(obj.dataList[i].time);
                            $('.self-cnt').eq(i).html(obj.dataList[i].say);
                            //Toloadres();
                        }
                        for(var i=0;i<obj.dataList.length;i++)
                        {
                            Toloadans(i,ID[i]);
                        }
                      // window.location.reload("talk.html");
                   }
                   else
                   {
                        //alert("w");
                        //$('.price').html("5.00");
                        document.write("<h>Please Login!!</h>");
                   }
                
          }
            
        }
            xmlhttp.open("GET","http://localhost:8080/phpbin/addtalk.php?t="+Math.random(),true);
            xmlhttp.send();       
   // $('.element:first').after(s);
}
function Toaddres(res,fa)
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
                   {   
                      // alert(xmlhttp.responseText);
                      // alert(xmlhttp.responseText);
                      // window.location.reload("talk.html");
                      Myname=xmlhttp.responseText;
                      var s="<div class=\"onetalk\"><div class=\"username\">"+Myname+"</div>:<div class=\"onetalk-message\">"+res+"</div></div>";
                      $('.other-element-talk').eq(resindex).append(s);
                   }
                   else
                   {
                        //alert("w");
                        //$('.price').html("5.00");
                        document.write("<h>Please Login!!</h>");
                   }
                
          }
            
        }
            xmlhttp.open("GET","http://localhost:8080/phpbin/addres.php?res="+res+"&&father="+fa,true);
            xmlhttp.send();       
}

$ (document).ready(function() {
    // $(".part2createnew").css("display","none");
    $(".createnew").click(function() {
        $(".part1").css("display","none");
        // $(".part1").attr("class","part1 blur");
        $(".part2").css("display","flex");
    });
    $(".push").click(function() {
        // $(".part1").attr("class","part1 blur");
        resindex=$('.push').index(this);
        $(".part1").css("display","none");
        $(".part3").css("display","flex");
    });
    $(".nobutton").click(function() {
        $(".part1").css("display","flex");
        // $(".part1").attr("class","part1");
        $(".part2").css("display","none");
    });
    $(".yesbutton").click(function() {
        title=$('.selftitle').val();
        neirong=$('.part2-self-ju').val();
        if(title.length<=0||neirong.length<=0)
        {
            alert("不能为空");
        }
        else
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
                   {   
                       //alert(xmlhttp.responseText);
                       Myname=xmlhttp.responseText;
                       window.location.reload("talk.html");
                   }
                   else
                   {
                        //alert("w");
                        //$('.price').html("5.00");
                        document.write("<h>Please Login!!</h>");
                   }
                }
          }
            
            xmlhttp.open("GET","http://localhost:8080/phpbin/talk.php?title="+title+"&&neirong="+neirong,true);
            xmlhttp.send();       
        }

    });
    $(".part3nobutton").click(function() {
        // $(".part1").attr("class","part1");
        $(".part1").css("display","flex");
        $(".part3").css("display","none");
    });
    $(".part3yesbutton").click(function() {
        // $(".part1").attr("class","part1");
        
        var nei="";
            nei=$('.part3-self-ju').val();
        if(nei.length<=0)
        {
            alert("不能为空");
        }else
        {
            
        Toaddres(nei,ID[resindex]);
        
        $(".part1").css("display","flex");
        $(".part3").css("display","none");
        }
    });

    //显示全部和收起
    $(".showallmes").click(function() {
        var text = $(this).text();
        if(text == "显示全部") {
            $(this).prev().css("height","auto");
            $(this).parent().css("height","auto");
            $(this).parent().parent().css("height","auto");
            $(this).text("收起");
            $(this).attr("class","folder");
        }
        else {
            $(this).prev().css("height","100px");
            $(this).parent().css("height","120px");
            $(this).parent().parent().css("height","120px");
            $(this).text("显示全部");
            $(this).attr("class","showallmes");
        }
    });

    // 导航栏
    $('#title-nav li').eq(3).addClass('b-active');
    $('#title-nav li').mouseenter(function(event) {
        $(this).addClass('b-active').siblings().removeClass('b-active');
    });


});
