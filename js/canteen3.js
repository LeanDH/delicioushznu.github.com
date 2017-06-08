/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-16 20:57:34
 * @version $Id$
 */
$(init);
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
function init()
{
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

	//切换菜单
	var pre=0;
	$('.l-menu-title').children().eq(pre).css('color','#EB3F2F');
	$('.l-menu-title').children().click(function(){
		var ind=$('.l-menu-title').children().index(this);
		$('.l-food-cnt').children().eq(pre).hide();
		$('.l-food-cnt').children().eq(ind).show();		
		$('.l-menu-title').children().eq(pre).css('color','black');		
		$('.l-menu-title').children().eq(ind).css('color','#EB3F2F');
		pre=ind;
	});

	//介绍
	var ipre=0;
	$('.l-intro-word-cnt').click(function(){
		var ind=$('.l-intro').children().index($(this).parent());
		$('.l-bigg').css('display','inline');
		$('.l-bigg').children().eq(ind).css('display','inline');
		$('.l-chopsticks').css('filter','blur(5px)');
		$('.l-spoon').css('filter','blur(5px)');
		$('.l-intro').css('filter','blur(5px)');
		ipre=ind;	
	});
	$('.l-bigg').click(function(){
		$('.l-bigg').children().eq(ipre).fadeOut(1000);
		$('.l-bigg').fadeOut(1000);
		$('.l-chopsticks').css('filter','blur(0px)');
		$('.l-spoon').css('filter','blur(0px)');
		$('.l-intro').css('filter','blur(0px)');		
	});

	//菜介绍
	$('.l-circle').hover(function(){
		$(this).children().eq(1).css('height','250px');
		$(this).children().eq(1).css('width','250px');
		$(this).children().eq(1).css('opacity','1');
		},function(){
		$(this).children().eq(1).css('height','0px');
		$(this).children().eq(1).css('width','0px');
		$(this).children().eq(1).css('opacity','0');

	});

	//like&carta
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
	$('.l-fa-cart').click(function(){
		if($(this).hasClass("l-rotatel")){ 
        	$(this).removeClass("l-rotatel");
        	$(this).addClass("l-rotater");
     	}else{
     		$(this).removeClass("l-rotater");
     		$(this).addClass("l-rotatel");
     	}
     	var n=$('.fa-shopping-cart').index(this);
		var str=$('.food-img').eq(n).attr('src');                    		//alert(str+i);
		str=str.substring(7,12);
		Updatadb(1,str,-1,-1);
		//alert(str);
	});


	//矩形食物hover
	$('.l-square').hover(function(){
		$(this).children().eq(2).css('top','0');
		$(this).css('box-shadow','8px 0 5px -8px #ccc');
		$(this).css('box-shadow','-8px 0 5px -8px #ccc');
		$(this).css('box-shadow','0 5px 5px #ccc');				
	},function(){
		$(this).children().eq(2).css('top','20%');
		$(this).css('box-shadow','0px 0px 0px 0px #ccc');
	});

	//早餐的第三种矩形hover
	$('.l-square2').hover(function(){
		$(this).children().eq(1).css('opacity','1');
		$(this).children().eq(1).css('height','80%');
		$(this).children().eq(1).css('width','80%');	
		$(this).children().eq(1).css('top','-90%');
		$(this).children().eq(1).css('left','10%');
		$(this).children().eq(1).children().eq(1).children('.l-fa-circle').css('height','50px');
		$(this).children().eq(1).children().eq(1).children('.l-fa-circle').css('width','50px');

	},function(){
		$(this).children().eq(1).css('opacity','0');	
		$(this).children().eq(1).css('height','100%');
		$(this).children().eq(1).css('width','100%');
		$(this).children().eq(1).css('top','-100%');
		$(this).children().eq(1).css('left','0%');
		$(this).children().eq(1).children().eq(1).children('.l-fa-circle').css('height','0px');
		$(this).children().eq(1).children().eq(1).children('.l-fa-circle').css('width','0px');				
	});

}
function Togetfood(build,type,num)
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
                   var ans=xmlhttp.responseText;
                   var data=eval("("+ans+")");
                   if(xmlhttp.responseText!=false)
                   {    
                   	     if(type==2){
	                         for(var i=0;i<data.dataList.length;i++)
	                         {
	                         	$('.mor-food-img').eq(i).attr("src","../img/"+data.dataList[i]['food_id']+".jpg");
	                         	$('.mor-food-name').eq(i).html(data.dataList[i]['food_name']);
	                         	$('.mor-food-price').eq(i).html(data.dataList[i]['price']+"元");
	                         } 
	                    } 
	                    if(type==1){
	                         for(var i=0;i<data.dataList.length;i++)
	                         {
	                         	$('.aft-food-img').eq(i).attr("src","../img/"+data.dataList[i]['food_id']+".jpg");
	                         	$('.aft-food-name').eq(i).html(data.dataList[i]['food_name']);
	                         	$('.aft-food-price').eq(i).html(data.dataList[i]['price']+"元");
	                         } 
	                         for(var i=0;i<10;i++)
	                    	{

	                    		var x="../html/";
	                    		var str=$(".mor-cicle").eq(i).attr('src');
	                    		if(str==undefined)
	                    			break;
	                    		//alert(str+i);
	                    	    str=str.substring(7,12);
	                    	    x=x+str+".html"
	                    		$(".circle-href").eq(i).attr("href",x);
	                    	}
	                    } 
	                    
                   }
                   else
                   {
                        //alert("w");
                   }
                }
          }
            xmlhttp.open("GET","http://localhost:8080/phpbin/food.php?num="+num+"&&type="+type+"&&build="+build,true);
            xmlhttp.send();
}
function ToloadBody()
{
	
	Togetfood(3,2,16);
	Togetfood(3,1,15);
	
}
$('.others').click(function(event) {
	/* Act on the event */
	var x="../html/";
	var str=$(this).attr('src');                    		//alert(str+i);
	str=str.substring(7,12);
	x=x+str+".html";
	window.open(x);
});

