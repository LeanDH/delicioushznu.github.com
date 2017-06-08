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
	    
    //window.location.href="delicious.html";
        var n=$('.l-food-cart').index(this);
        var str=$('.foodimg').eq(n).attr('src');                            //alert(str+i);
        str=str.substring(7,12);
        Updatadb(1,str,-1,-1);  
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

