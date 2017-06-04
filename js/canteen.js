/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-16 20:57:34
 * @version $Id$
 */
$(init);
function init()
{

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

	function change(){
		pic.children().eq(pos).fadeOut(300);
		point.children().eq(pos).removeClass('fa-circle');
		point.children().eq(pos).addClass('fa-circle-o');
		pos=(pos+1)%3;
		pic.children().eq(pos).fadeIn(300);
		point.children().eq(pos).addClass('fa-circle');
		point.children().eq(pos).removeClass('fa-circle-o');		
	};
	var lunbo=setInterval(change,3000);
	
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
		pos=(pos+1)%3;
		pic.children().eq(pos).fadeIn(300);
		point.children().eq(pos).addClass('fa-circle');
		point.children().eq(pos).removeClass('fa-circle-o');
		lunbo=setInterval(change,3000);
	});

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


	$('.l-lunbo-title').children().mouseover(function(){
		$('.l-lunbo-titlecnt').css('display','inline');
		$('.l-lunbo-titlecnt').children().eq(titlecnt).css('display','none');
		titlecnt=$('.l-lunbo-title').children().index(this);
		$('.l-lunbo-titlecnt').children().eq(titlecnt).css('display','inline');
	});

	$('.l-lunbo-title').children().mouseout(function(){
		$('.l-lunbo-titlecnt').css('display','none');
	});
		// var images = document.getElementById('l-phochange').getElementsByTagName('img');
		// var pos = 0;
		// var len = images.length;

		// function change(){
		// 	$('#l-phochange').children().eq(pos).fadeOut(300);
  //   		$('#l-page').children().eq(pos).removeClass('fa-circle');
  //   		$('#l-page').children().eq(pos).addClass('fa-circle-o');

  //   		pos = (pos+1)%len;
  //   		$('#l-page').children().eq(pos).removeClass('fa-circle-o');
  //   		$('#l-page').children().eq(pos).addClass('fa-circle');
    
  //   		$('#l-phochange').children().eq(pos).fadeIn(400);
  //   		// images[pos].style.display = 'inline';

  //   		$('#l-phochange').children().eq(pos).css('display','inline');
  //   		path=$('#l-phochange').children().eq(pos)[0].src;

  //   		$('#l-phochangebck').attr('src',path);

		// }; 





		// var lunbo=setInterval(change,3000);

		// $('.l-pre').click(function(){
		// 	clearInterval(lunbo);
		// 	images[pos].style.display = 'none';
  //   		$('#l-page').children().eq(pos).removeClass('fa-circle');
  //   		$('#l-page').children().eq(pos).addClass('fa-circle-o');       	
		// 	pos=((pos-1)+len)%len;
  //  			images[pos].style.display = 'inline';
    		
  //   		path=$('#l-phochange').children().eq(pos)[0].src;
  //   		$('#l-phochangebck').attr('src',path);

  //   		$('#l-page').children().eq(pos).removeClass('fa-circle-o');
  //   		$('#l-page').children().eq(pos).addClass('fa-circle');            
  //   		lunbo=setInterval(change,3000);
		// });
		// $('.l-next').click(function(){
		// 	clearInterval(lunbo);
		// 	images[pos].style.display = 'none';
  //   		$('#l-page').children().eq(pos).removeClass('fa-circle');
  //  			$('#l-page').children().eq(pos).addClass('fa-circle-o');        	
		// 	pos=(pos+1)%len;
  //   		images[pos].style.display = 'inline';
    		
  //   		path=$('#l-phochange').children().eq(pos)[0].src;
  //   		$('#l-phochangebck').attr('src',path);

  //   		$('#l-page').children().eq(pos).removeClass('fa-circle-o');
  //   		$('#l-page').children().eq(pos).addClass('fa-circle');  
  //   		lunbo=setInterval(change,3000);            
		// });


		var prenum=0;
		$('.l-choosebox').children().click(function(){
			var num=$(this).index();
			$('.l-followbox').children().eq(prenum).removeClass('l-follow');
			$('.l-followbox').children().eq(num).addClass('l-follow');
			prenum=num;
		});


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


		$('.l-more').click(function(){
			var foodcnt=$('.l-foodcnt:last').clone();
			$(".l-foodcnt:last").after(foodcnt);
		});


		$('.l-love').click(function(){
			var love=$('.l-love').html();
			love=love-'0'+1;
			$('.l-love').html(love);
		});


}
