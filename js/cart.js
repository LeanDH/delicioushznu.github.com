/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-16 19:44:31
 * @version $Id$
 */

 //一开始part2和part3都是隐藏状态
$(".part2check").hide();
$(".part3confirm").hide();
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
/*复选框全选或全不选效果*/

var name="";
var add="";
var tel="";
var goon=1;
var tastearray=new Array();
var sizearray=new Array();
var indextaste=0,indexsize=0;
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
                   
                   	    	
                }
          }
            var way=1;
            xmlhttp.open("GET","http://localhost:8080/phpbin/shop.php?food_id="+food_id+"&&num="+num+"&&taste="+taste+"&&size="+size,true);
            xmlhttp.send();	
}
function Toplus()
{
	var n=$('.fa-plus').index(this);
	var ans=parseInt($('.num_input').eq(n).val())+1;
	$('.num_input').eq(n).val(ans);	
	var imgname=$('.food-img').eq(n).attr('src')
	food_id1=imgname.substring(7,12);
	taste1=tastearray[n];
	size1=sizearray[n];
	Updatadb(1,food_id1,taste1,size1);
	var x=$(".price").eq(n).html();
		x=parseFloat(x);
		$('.food-total').eq(n).html(x*(ans));
    productCount();
}
$('.fa-plus').on('click',Toplus);
function Tominus()
{
	var n=$('.fa-minus').index(this);
	var que=parseInt($('.num_input').eq(n).val())
	if(que<=1)
	{
		alert("数量必须要大于等于1");
	}else{
		$('.num_input').eq(n).val(que-1);
		var imgname=$('.food-img').eq(n).attr('src')
		food_id1=imgname.substring(7,12);
		taste1=tastearray[n];
		size1=sizearray[n];
		Updatadb(-1,food_id1,taste1,size1);
		var x=$(".price").eq(n).html();
		x=parseFloat(x);
		$('.food-total').eq(n).html(x*(que-1));
    productCount();
	}
}
$('.fa-minus').on('click',Tominus);
function deletedb(num,food_id,taste,size)
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
                   
                   	    	
                  
                }
          }
            var way=1;
            xmlhttp.open("GET","http://localhost:8080/phpbin/shop.php?food_id="+food_id+"&&num="+num+"&&taste="+taste+"&&size="+size,true);
            xmlhttp.send();	
}
function deleteone()
{
	var n=$('.detail-delete').index(this);
	var imgname=$('.food-img').eq(n).attr('src')
		food_id1=imgname.substring(7,12);
		taste1=tastearray[n];
		size1=sizearray[n];
		tastearray.splice(n,1);
		sizearray.splice(n,1);
	  deletedb(-1000,food_id1,taste1,size1);
    $(this).parent().remove();
  productCount();
}
$('.detail-delete').on('click',deleteone);
function loadbuild(build)
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
                   var div=".build"+build+"-food";
                   if(xmlhttp.responseText===false)
                   {
                   		window.location.href="../log.html"; 
                      goon=0;
                   }
                   else if(xmlhttp.responseText==-1)
                   {
                       $(div).eq(0).remove();
                   }
                   else
                   {
                   	    var str=xmlhttp.responseText;
                   	    var obj=eval("("+str+")");
                   	    for(var i=0;i<obj.dataList.length;i++)
                   	    {

                   	    	var s=$(div+":first").clone(true);
                   	    	$("."+'build'+build).after(s);
                   	    	//$(s+" .detail-delete").on('click',deleteone);
                   	    }
                   	    for(var i=0;i<obj.dataList.length;i++)
                   	    {
                   	    	var ss="..\\img\\"+obj.dataList[i]['food_id']+".jpg";
                   	    	$(div+"-img").eq(i+1).attr('src',ss);
                   	    	$(div+"-name").eq(i+1).attr('href',obj.dataList[i]['food_id']+".html");
                   	    	var temp;
                   	    	tastearray[indextaste++]=obj.dataList[i]['taste'];
                          if(i==0)
                          {
                            name=obj.dataList[i]['name'];
                            tel=obj.dataList[i]['tel'];
                            add=obj.dataList[i]['address1'];
                          }
                   	    	sizearray[indexsize++]=obj.dataList[i]['size'];
                   	    	if(obj.dataList[i]['taste']!=-1)
                   	    	{
                   	    		temp=obj.dataList[i]['food_name'];
                   	    		switch(obj.dataList[i]['taste'])
                   	    		{
                   	    			case 0:
                   	    			       temp+=" 不辣";
                   	    			       break;
                   	    			case 1:
                   	    				   temp+=" 微辣";
                   	    				   break;
                   	    			case 2:
                   	    				   temp+=" 超辣"
                   	    				   break;
                   	    		}
                   	    	}
                   	    	if(obj.dataList[i]['size']!=-1)
                   	    	{
                   	    		temp=obj.dataList[i]['food_name'];
                   	    		switch(obj.dataList[i]['taste'])
                   	    		{
                   	    			case 0:
                   	    			       temp+=" 小份";
                   	    			       break;
                   	    			case 1:
                   	    				   temp+=" 普通";
                   	    				   break;
                   	    			case 2:
                   	    				   temp+=" 大份"
                   	    				   break;
                   	    		}
                   	    	}
                   	    	$(div+"-name").eq(i+1).html(obj.dataList[i]['food_name']);
                   	    	$(div+"-price").eq(i+1).html(obj.dataList[i]['price']);
                   	    	$(div+"-num").eq(i+1).val(obj.dataList[i]['num']);
                   	    	$(div+"-total").eq(i+1).html(obj.dataList[i]['num']*obj.dataList[i]['price']);
                   	    }
                   	    $(div).eq(0).remove();
                   	    $(div).css('display', 'block');
                        productCount();
                   }
                }
          }
            var way=1;
            xmlhttp.open("GET","http://localhost:8080/phpbin/cart.php?build="+build,true);
            xmlhttp.send();	
}
function Toloadbody()
{
	loadbuild(1);
  if(goon)
	loadbuild(2);
  if(goon)
	loadbuild(3);
  if(goon)
	loadbuild(4);
  if(goon)
	loadbuild(5);
  productCount();
  
}
$('body').load(Toloadbody());
function selectAll()
{
	var oInput=document.getElementsByClassName("cartCheckBox");
    for (var i=0;i<oInput.length;i++)
    {
 	    oInput[i].checked=document.getElementById("allCheckBox").checked;
	}
}

/*根据单个复选框的选择情况确定全选复选框是否被选中*/
function selectSingle()
{
	var k=0;
	var oInput=document.getElementsByClassName("cartCheckBox");
	 for (var i=0;i<oInput.length;i++){
	   if(oInput[i].checked==false)
	   {
		  k=1;
		  break;
	    }
	}
	if(k==0)
	{
		document.getElementById("allCheckBox").checked=true;
	}
	else
	{
		document.getElementById("allCheckBox").checked=false;
	}
}

/*改变所购商品的数量*/


//计算金额
function productCount()
{
	var length=tastearray.length;
  var pay=0.0;
  var score=0;
  for(var i=0;i<length;i++)
  {
       var y=parseFloat($('.food-total').eq(i).html());
           pay+=y;
       var x=parseInt($('.num_input').eq(i).val());
           score+=x*5
  }
  $('#total').html(pay);
  $('#integral').html(score);
}



/*删除选中行的商品*/
function deleteall()
{
	var length=tastearray.length;
	for(var i=0;i<length;i++)
	{
		if($(".cartCheckBox").eq(i).is(':checked'))
		{
			var imgname=$('.food-img').eq(i).attr('src')
			food_id1=imgname.substring(7,12);
			taste1=tastearray[i];
			size1=sizearray[i];
			tastearray[i]=-2;
		  sizearray[i]=-2;
			deletedb(-1000,food_id1,taste1,size1);
			//$(".cartCheckBox").eq(i).parent().parent().remove();
      //productCount()

		}
	}
  for(var i=0,j=0;j<length;i++,j++)
  {
    if(tastearray[i]==-2)
    {
      tastearray.splice(i,1);
      sizearray.splice(i,1);
      i--;
    }
  }
	$(":checked").parent().parent().remove();
	productCount();
}
//$(".delete-all").on('click',deleteall);
//删除当前行


//悬浮到鼠标所在行时改变颜色

$(".detail").on('mouseenter',
	function(){
		alert("yeah");
		$(this).parent().children().css("background","#E5E5E5");
		$(this).parent().children(".detail:eq(5)").children(".num_input").css("background","#E5E5E5");
});
$(".detail").on('mouseleave',function(){
		$(this).parent().children().css("background","white");
		$(this).parent().children(".detail:eq(5)").children(".num_input").css("background","white");
	}
);

//提交事件
function Topay()
{
  if(tastearray.length>1){
      $(".part1shopping").css("display","none");
      $(".part2check").css("display","flex");
      $(".part3confirm").css("display","none");
      $(".receiver-msg-num").html(name+"  "+tel);
      $(".receiver-msg-add").html(add);
      for(var i=0;i<tastearray.length;i++)
      {
        var s=$(".goods-msg-single:first").clone(true);
        $('.goods-msg').append(s);
      }
      $(".goods-msg-single").eq(0).remove();
      for(var i=0;i<tastearray.length;i++)
      {
        $('.single-name').eq(i).html($('.food-name').eq(i).html());
        $('.single-num').eq(i).html($('.num_input').eq(i).val());
        $('.single-price').eq(i).html($('.food-total').eq(i).html());
      }
      $('.paymoney').eq(0).html($('#total').html());
      $('.paymoney').eq(1).html($('#total').html());
      $('.price-total').html($('#total').html());
  }else{
    alert("请加购啊，不买别搞事啊");
  }
}
//确认支付事件
 function pricepaying()
 {
  $(".part1shopping").css("display","none");
  $(".part2check").css("display","none");
  $(".part3confirm").show();
 }
//支付完成后回到主页面
function goout(){
	window.location.href="../index.html";
}
