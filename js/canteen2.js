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

	//轮播图js
	var pos=0;
	var titlecnt=0;
	var pic=$('.l-lunbo-image');
	var point=$('.l-lunbo-point');

    //返回顶部
    $('.l-logo').click(function(){
    	$('html,body').animate({
    		scrollTop:$('body').offset().top
    	},1000);
    });
    //轮播图圈圈
	function change(){
		pic.children().eq(pos).fadeOut(300);
		point.children().eq(pos).removeClass('fa-circle');
		point.children().eq(pos).addClass('fa-circle-o');
		pos=(pos+1)%4;
		pic.children().eq(pos).fadeIn(300);
		point.children().eq(pos).addClass('fa-circle');
		point.children().eq(pos).removeClass('fa-circle-o');		
	};
	var lunbo=setInterval(change,3000);
	point.children().click(function(){
		clearInterval(lunbo);
		pic.children().eq(pos).fadeOut(300);
		point.children().eq(pos).removeClass('fa-circle');
		point.children().eq(pos).addClass('fa-circle-o');
		pos=point.children().index(this);
		pic.children().eq(pos).fadeIn(300);
		point.children().eq(pos).addClass('fa-circle');
		point.children().eq(pos).removeClass('fa-circle-o');
		lunbo=setInterval(change,3000);

	});	
	//轮播图箭头
	$('.l-lb-pre').click(function(){
		clearInterval(lunbo);
		pic.children().eq(pos).fadeOut(300);
		point.children().eq(pos).removeClass('fa-circle');
		point.children().eq(pos).addClass('fa-circle-o');
		pos=(pos-1+3)%3;
		pic.children().eq(pos).fadeIn(300);
		point.children().eq(pos).addClass('fa-circle');
		point.children().eq(pos).removeClass('fa-circle-o');
		lunbo=setInterval(change,3000);
	});
	$('.l-lb-nex').click(function(){
		clearInterval(lunbo);
		pic.children().eq(pos).fadeOut(300);
		point.children().eq(pos).removeClass('fa-circle');
		point.children().eq(pos).addClass('fa-circle-o');
		pos=(pos+1)%4;
		pic.children().eq(pos).fadeIn(300);
		point.children().eq(pos).addClass('fa-circle');
		point.children().eq(pos).removeClass('fa-circle-o');
		lunbo=setInterval(change,3000);
	});

	//轮播图上标题鼠标停留事件
	$('.l-lunbo-title').children().hover(function(){
		$('.l-lunbo-titlecnt').css('display','inline');
		$('.l-lunbo-titlecnt').children().eq(titlecnt).css('opacity','0');
		titlecnt=$('.l-lunbo-title').children().index(this);
		$('.l-lunbo-titlecnt').children().eq(titlecnt).css('opacity','1');
	},function(){
		$('.l-lunbo-titlecnt').children().eq(titlecnt).css('opacity','0');
	});

	$('.l-lunbo-titlecnt').hover(function(){
		$('.l-lunbo-titlecnt').children().eq(titlecnt).css('opacity','1');
	},function(){
		$('.l-lunbo-titlecnt').css('display','none');
	});


	//选择早中晚
	var prenum=0;
	$('.l-choosebox').children().click(function(){
		var num=$(this).index();
		$('.l-menucnt').children().eq(prenum).hide();
		$('.l-menucnt').children().eq(num).show();
		$('.l-followbox').children().eq(prenum).removeClass('l-follow');
		$('.l-followbox').children().eq(num).addClass('l-follow');
		prenum=num;
	});

	//食物hover
	$('.l-food').hover(function(){
		$('.l-foodpiccover').animate({opacity:1},300);
	},function() {
		$('.l-foodpiccover').animate({opacity:0},300);
	});

	$('.l-foodpiccover').hover(function(){
		$(this).animate({opacity:1},300);
	},function() {
		$(this).animate({opacity:0},300);
	});

	//加载更多
	$('.l-more').click(function(){
		var foodcnt=$('.l-foodcnt:last').clone();
		$(".l-foodcnt:last").after(foodcnt);
	});

	//love
	$('.l-love').click(function(){
		var love=$(this).html();
		love=love-'0'+1;
		$(this).html(love);
	});
	$('.car').click(function(){
		if($(this).hasClass("l-rotatel")){ 
        	$(this).removeClass("l-rotatel");
        	$(this).addClass("l-rotater");
     	}else{
     		$(this).removeClass("l-rotater");
     		$(this).addClass("l-rotatel");
     	}
     	var n=$('.car').index(this);
		var str=$('.foodimg').eq(n).attr('src');                    		//alert(str+i);
		str=str.substring(7,12);
		Updatadb(1,str,-1,-1);
		//alert(str);
	});

}
