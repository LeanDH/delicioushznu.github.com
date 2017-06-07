$(function(){
	//设置标杆
	var _line=parseInt($(window).height()/6);
	$(window).scroll(function(){
		//滚动100px，左侧导航固定定位
		if ($(window).scrollTop()>100) {
			$('.fl_l').css({'position':'fixed','top':10})
		}else{
			$('.fl_l').css({'position':'','top':''})
		};
		$('.fl_l li').eq(0).addClass('active');
		//滚动到标杆位置,左侧导航加active
		$('.fl_r li').each(function(){
			var _target=parseInt($(this).offset().top-$(window).scrollTop()-_line);
			var _i=$(this).index();
			if (_target<=0) {
				$('.fl_l li').removeClass('active');
				$('.fl_l li').eq(_i).addClass('active');
			}
			//如果到达页面底部，给左侧导航最后一个加active
			else if($(document).height()==$(window).scrollTop()+$(window).height()){
				$('.fl_l li').removeClass('active');
				$('.fl_l li').eq($('.fl_r li').length-1).addClass('active');
			}
		});
	});
	$('.fl_l li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var _i=$(this).index();
		 $('body, html').animate({scrollTop:$('.fl_r li').eq(_i).offset().top-_line},720);
	});

	$('.store').mouseenter(function(){
		$(this).find('.text1').css("color","#0089dc");
	})
	$('.store').mouseleave(function(){
		$(this).find('.text1').css("color","#333333");
	})

	$('.item1-child').mouseenter(function(){
		$(this).find('.item1-child-address').fadeIn(600);
		$(this).find('.item1-child-message').css("color","#ff4883");
	})

	$('.item1-child').mouseleave(function(){
		$(this).find('.item1-child-address').fadeOut(600);
		$(this).find('.item1-child-message').css("color","#000");
	})

});

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

var schoolmap = new BMap.Map("schoolmap");   

schoolmap.addControl(new BMap.NavigationControl());   
schoolmap.addControl(new BMap.ScaleControl());    
schoolmap.addControl(new BMap.OverviewMapControl());    
schoolmap.addControl(new BMap.MapTypeControl());
schoolmap.enableScrollWheelZoom(); 
schoolmap.enableContinuousZoom();   

var school=[
  [120.100953,30.286622, "西城广场商业区", "map1.png","star1.png",
  "公交方案:【332】路至【文二西路古墩路口】下车，对面即为西城广场商业区"],
  [120.10561,30.299963, "古墩印象城购物中心", "map2.png","star2.png",
  "公交方案:【332路或286路】至【骆家庄南】换乘【91路】至【杭三大桥】"],
  [120.115114,30.306728, "城西银泰城", "map3.png","star3.png",
  "公交方案:【148路】至【萍水街丰潭路口】，下车后右边就是银泰城"],
  [120.057118,30.25315, "西溪印象城", "map4.png","star4.png",
  "公交方案:【467路】至【高教路天目山路西口】换乘【356路】至【西溪湿地西区】"],
];

var content =[];
for(var i=0;i<school.length;++i){
    content[i] = "<table>" + 
                   "<tr><td>" + "<img src='img/" + school[i][3] + "'>" + "</td></tr>" + 
                   "<tr><td>" + school[i][2] + "<tr><td>" + 
                   "<tr><td>" + "<img src='img/" + school[i][4] + "'>" + "</td></tr>" + 
                   "<tr><td>" + school[i][5] + "<tr><td>" + 
                "</table>";
}
var marker = [];
var mySchool = new BMap.Geocoder();  
var center = new BMap.Point(120.100953,30.286622);
schoolmap.centerAndZoom(center, 14);
for( var i=0; i<school.length; ++i) {
	var point= new BMap.Point(school[i][0],school[i][1]);
	marker[i] = new BMap.Marker(point);   
    schoolmap.addOverlay(marker[i]);
	marker[i].addEventListener("click", function(e){
		var now=0;
		for(var i=0;i<school.length;++i){
            if(this.getPosition().lng==school[i][0])
                now=i;
		}
        var infoWindow = new BMap.InfoWindow(content[now]); // 创建信息窗口对象
		schoolmap.openInfoWindow(infoWindow, this.getPosition()); // 打开信息窗口
    });  
}	


$('.animate-type').animatedHeadline({
    animationType: 'type'
});


$('#title-nav li').eq(3).addClass('b-active');
$('#title-nav li').mouseenter(function(event) {
   $(this).addClass('b-active').siblings().removeClass('b-active');
});