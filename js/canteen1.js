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

	//民族切换
	$('.l-choose-menu').children().click(function(){
		var ind=$('.l-choose-menu').children().index(this);
		var newname=$('.l-choose-menu').children().eq(ind).children().eq(0).html();
		var lastname=$('#l-far').html();
		$('#l-far').html(newname);
		$('.l-choose-menu').children().eq(ind).children().eq(0).html(lastname);
	});


	//翻转菜
	var clickTimes = 1;
	var lineCount = 3;
	var img3DList = document.querySelectorAll(".l-food-img-3d");
	var len = img3DList.length;
	$('.l-choose-menu').children().click(function(){
	    for (var i = 0; i< len; i++){
	    	var colNum = parseInt(i/lineCount);
	    	var rowNum = i%lineCount;
	    	var delayTime = (colNum+rowNum)*100;
	    	console.log('len');
	    	img3DList[i].style.transition = ".3s "+delayTime+"ms linear";
	    	img3DList[i].style.transform = "rotateY("+180*clickTimes+"deg)";
	    }
	    clickTimes++;
	});

	//菜品hover事件
	$('.l-food-mask').hover(function(){
		$(this).children().eq(clickTimes%2).css('display','flex');
	},function(){
		$(this).children().eq(clickTimes%2).css('display','none');
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
     	var n=$('.car').index(this);
		var str=$('.foodimg').eq(n).attr('src');                    		//alert(str+i);
		str=str.substring(7,12);
		Updatadb(1,str,-1,-1);
		//alert(str);
	});

   	
}
