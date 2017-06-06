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
    });

    //购物车事件
   $('.l-food-cart').click(function(){   
	    window.location.href="delicious.html";  
	})

   	//菜品切换
    var unslider02 = $('.l-food-menu-m').unslider({
        dots: true,
        speed: 1000
    }),
    data02 = unslider02.data('unslider');
    $('.unslider-arrow02').click(function() {
        var fn = this.className.split(' ')[1];
        data02[fn]();
    });
    var unslider01 = $('.l-food-menu-a').unslider({
        dots: true,
        speed: 1000      
    }),
    data01 = unslider01.data('unslider');
    $('.unslider-arrow01').click(function() {
        var fn = this.className.split(' ')[1];
        data01[fn]();
    });

    var unslider0 = $('.l-food-menu-n').unslider({
        dots: true,
        speed: 1000
    }),
    data0 = unslider0.data('unslider');
    $('.unslider-arrow0').click(function() {
            var fn = this.className.split(' ')[1];
            data0[fn]();
    });    

    //早中晚菜单切换
    $('.l-food-choose-m').click(function(){
        $(this).hide();
        $(this).parent().children('.l-food-choose-a').show();
        $(this).parent().parent().children('.l-food-menu').children('.l-food-menu-cnta').css('opacity','1');
        $(this).parent().parent().children('.l-food-menu').children('.l-food-menu-cntm').css('opacity','0');              
        $(this).parent().parent().children('.l-food-menu').children('.l-food-menu-cnta').css('z-index','1000');
        $(this).parent().parent().children('.l-food-menu').children('.l-food-menu-cntm').css('z-index','0');     	 	
    });
    $('.l-food-choose-a').click(function(){
        $(this).hide();
        $(this).parent().children('.l-food-choose-n').show();
        $(this).parent().parent().children('.l-food-menu').children('.l-food-menu-cntn').css('opacity','1');
        $(this).parent().parent().children('.l-food-menu').children('.l-food-menu-cnta').css('opacity','0');    	
        $(this).parent().parent().children('.l-food-menu').children('.l-food-menu-cntn').css('z-index','1000');
        $(this).parent().parent().children('.l-food-menu').children('.l-food-menu-cnta').css('z-index','0');  
    });
    $('.l-food-choose-n').click(function(){
        $(this).hide();
        $(this).parent().children('.l-food-choose-m').show();
        $(this).parent().parent().children('.l-food-menu').children('.l-food-menu-cntm').css('opacity','1');
        $(this).parent().parent().children('.l-food-menu').children('.l-food-menu-cntn').css('opacity','0');     	 	
        $(this).parent().parent().children('.l-food-menu').children('.l-food-menu-cntm').css('z-index','1000');
        $(this).parent().parent().children('.l-food-menu').children('.l-food-menu-cntn').css('z-index','0');  
    });        
}

