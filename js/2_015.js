/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-15 08:44:45
 * @version $Id$
 */

var spicy=0;
var capcity=0;
var num=0;
var p;
var name;
var loc;
var food_id="2_015";

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

function load()
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
                   	   var str=xmlhttp.response;
                   	   var obj=eval('(' + str + ')');
                   	   p=obj.dataList[0].price;
                   	   name=obj.dataList[0].food_name;
                   	   loc=obj.dataList[0].place;
                   	   $('.l-foodname').html(name);
                       $('.price').html(p);
                       $('.l-foodplace').html(loc+"号食堂")
                   }
                   else
                   {
                        //alert("w");
                        $('.price').html("5.00");
                   }
                }
          }
            
            xmlhttp.open("GET","http://localhost:8080/phpbin/delicous.php?food_id="+food_id,true);
            xmlhttp.send();
}
function toload() {
	/* Act on the event */
	var src="../img/"+food_id+".jpg"
	$('.l-foodpic img').attr('src',src);
	load();

};

$('.l-foodchoose-amount-increase').click(function(event) {
	/* Act on the event */
	num=$('.l-foodchoose-amount-number').html();
	num++;
	$('.l-foodchoose-amount-number').html(num);
	$('.price').html(p*num);
});
$('.l-foodchoose-amount-reduce').click(function(event) {
	/* Act on the event */
	num=$('.l-foodchoose-amount-number').html();
	num--;
	if(num<=0)
	{
		alert("不加购物车可以，但是你不能搞事情啊");
		num=1;
	}
	else
	{
		$('.l-foodchoose-amount-number').html(num);
	}
	$('.price').html(p*num);
});
var taste=-1,size=-1;
$('.l-foodchoose-hotchoose').click(function(event) {
	/* Act on the event */
	if(loc!=-1)
	{
		alert("被骗了吧，你以为你能让"+loc+"食堂照顾你的感受吗");
	}else
	{
		var x=$('.l-foodchoose-hotchoose').index(this);
		if(x<3)
		{
			taste=x;
			for(var i=0;i<3;i++)
			{
				$('.l-foodchoose-hotchoose').eq(i).css({
					border: '1px solid #cccccc'
				});
			}
			$('.l-foodchoose-hotchoose').eq(x).css({
					border: '1px solid red'
			});

		}else
		{
			size=x;
			for(var i=3;i<6;i++)
			{
				$('.l-foodchoose-hotchoose').eq(i).css({
					border: '1px solid #cccccc'
				});
			}
			$('.l-foodchoose-hotchoose').eq(x).css({
					border: '1px solid red'
			});
		}

	}
});
$('.l-foodshop').click(function(event) {
	/* Act on the event */
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
                   	   
                   }
                   else
                   {
                        alert("先请登陆");
                   }
                }
          }
            
            xmlhttp.open("GET","http://localhost:8080/phpbin/shop.php?food_id="+food_id+"&&taste="+taste+"&&size="+size+"&&num="+num,true);
            xmlhttp.send();
});