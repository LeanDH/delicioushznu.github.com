/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-16 20:57:34
 * @version $Id$
 */
$(init);
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

	//like&cart
	$('.l-fa-heart').click(function(){
		$(this).removeClass('fa-heart-o');    	
    	$(this).addClass('fa-heart');
    	$(this).css('color','#ff3232');	
	});
	$('.l-fa-cart').click(function(){
		if($(this).hasClass("l-rotatel")){ 
        	$(this).removeClass("l-rotatel");
        	$(this).addClass("l-rotater");
     	}else{
     		$(this).removeClass("l-rotater");
     		$(this).addClass("l-rotatel");
     	}   
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

