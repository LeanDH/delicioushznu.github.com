/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-16 20:57:34
 * @version $Id$
 */
$(init);
function init()
{
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