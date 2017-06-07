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
	
	//店铺
	$('.l-store-cnt').hover(function(){
		$(this).children().eq(2).css('opacity','1');
		$(this).children().eq(2).css('height','300px');
	},function(){
		$(this).children().eq(2).css('opacity','0');
		$(this).children().eq(2).css('height','0');
	});

}


$('.animate-type').animatedHeadline({
    animationType: 'type'
});