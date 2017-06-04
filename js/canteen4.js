/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-16 20:57:34
 * @version $Id$
 */
$(init);
function init()
{
	//顶部轮播
    var unslider04 = $('#b04').unslider({
        dots: true
    }),
    data04 = unslider04.data('unslider');
    $('.unslider-arrow04').click(function() {
        var fn = this.className.split(' ')[1];
        data04[fn]();
    });

    //返回顶部
    $('.l-logo').click(function(){
    	$('html,body').animate({
    		scrollTop:$('body').offset().top
    	},1000);
    });

    //喜欢事件
    $('.l-food-love').click(function(){
        $(this).children("#l-food-love").removeClass('fa-heart-o');
        $(this).children("#l-food-love").addClass('fa-heart');
        $(this).children("#l-food-love").css('color','#ff3232');
        $(this).css('border','1px solid #ff3232');
		// $('#l-food-love').removeClass('fa-heart-o');    	
  //   	$('#l-food-love').addClass('fa-heart');
  //   	$('#l-food-love').css('color','#ff3232');
  //   	$('.l-food-love').css('border','1px solid #ff3232');
    });

    //购物车事件
   $('.l-food-cart').click(function(){   
	    window.location.href="delicious.html";  
	})

   	//早上菜品切换
    // var unslider02 = $('.l-food-m-lunbo').unslider({
    //     dots: false
    // }),
    // data02 = unslider02.data('unslider');
    // $('.unslider-arrow02').click(function() {
    //         var fn = this.className.split(' ')[1];
    //         data02[fn]();
    // });

    //早中晚菜单切换
    var m=0,a=0,n=0;
    $('.l-food-choose-m').click(function(){
    	$('.l-food-choose-m').css('display','none');
    	$('.l-food-choose-a').css('display','flex');
    	$('.l-food-menu-a').css('display','flex');   
    	$('.l-food-menu-m').css('display','none');
    	 	
    });
    $('.l-food-choose-a').click(function(){
    	$('.l-food-choose-a').css('display','none');
    	$('.l-food-choose-n').css('display','flex');
    	$('.l-food-menu-n').css('display','flex');   
    	$('.l-food-menu-a').css('display','none');
    	 	
    });
    $('.l-food-choose-n').click(function(){
    	$('.l-food-choose-n').css('display','none');
    	$('.l-food-choose-m').css('display','flex');
    	$('.l-food-menu-m').css('display','flex');   
    	$('.l-food-menu-n').css('display','none');
    	 	
    });        
}

