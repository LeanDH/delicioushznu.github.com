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
	$('.l-choose-menu').children().click(function () {

	    for (var i = 0; i< len; i++){

	      var colNum = parseInt(i/lineCount);
	      var rowNum = i%lineCount;
	      var delayTime = (colNum+rowNum)*100;

	      img3DList[i].style.transition = ".3s "+delayTime+"ms linear";
	      img3DList[i].style.transform = "rotateY("+180*clickTimes+"deg)";
	     }

	    clickTimes++;
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
   	
}
