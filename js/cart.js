/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-16 19:44:31
 * @version $Id$
 */

 //一开始part2和part3都是隐藏状态
$(".part2check").hide();
$(".part3confirm").hide();

/*复选框全选或全不选效果*/
function selectAll()
{
	var oInput=document.getElementsByClassName("cartCheckBox");
    for (var i=0;i<oInput.length;i++)
    {
 	    oInput[i].checked=document.getElementById("allCheckBox").checked;
	}
}

/*根据单个复选框的选择情况确定全选复选框是否被选中*/
function selectSingle()
{
	var k=0;
	var oInput=document.getElementsByClassName("cartCheckBox");
	 for (var i=0;i<oInput.length;i++){
	   if(oInput[i].checked==false)
	   {
		  k=1;
		  break;
	    }
	}
	if(k==0)
	{
		document.getElementById("allCheckBox").checked=true;
	}
	else
	{
		document.getElementById("allCheckBox").checked=false;
	}
}

/*改变所购商品的数量*/
function changeNum(numId,flag)
{
	/*numId表示对应商品数量的文本框ID，flag表示是增加还是减少商品数量*/
	var numId=document.getElementById(numId);
	if(flag=="minus")
	{
		/*减少商品数量*/
		if(numId.value<=1)
		{
			alert("商品数量必须大于0");
			return false;
		}
		else
		{
			numId.value=parseInt(numId.value)-1;
			productCount();
		}
	}
	else
	{
		/*flag为add，增加商品数量*/
		numId.value=parseInt(numId.value)+1;
		productCount();
	}
}

//计算金额
function productCount()
{
	var total=0;      //商品金额总计
	var integral=0;   //可获商品积分
	var point;      //每一行商品的单品积分
	var price;     //每一行商品的单价
	var number;    //每一行商品的数量
	var subtotal;  //每一行商品的小计
     /*访问ID为goods表格中所有的行数*/
    var numgoods=$(".goods");
    for(var i=0;i<numgoods.length;i++)
    {
    	var numproduct=$(".goods:eq("+i+")").children(".product");
    	$(".goods:eq("+i+")").height(150*numproduct.length);
    	if(numproduct.length>0)
    	{
    		for(var j=0;j<numproduct.length;j++)
    		{
    			point=$(".goods:eq("+i+")").children(".product:eq("+j+")").children(".detail:eq(3)")[0].innerHTML;
    			price=$(".goods:eq("+i+")").children(".product:eq("+j+")").children(".detail:eq(4)")[0].innerHTML;
    			number=$(".goods:eq("+i+")").children(".product:eq("+j+")").children(".detail:eq(5)").children(".num_input").val();
    			integral+=point*number;
				total+=price*number;
				$(".goods:eq("+i+")").children(".product:eq("+j+")").children(".detail:eq(6)")[0].innerHTML=price*number;
    		}
    		$("#total")[0].innerHTML=total;
    		$("#integral")[0].innerHTML=integral;
    	}
    }
}
window.onload=productCount;


/*删除选中行的商品*/
$(".delete-all").click(function()
{
	$(":checked").parent().parent().remove();
	productCount();
});


//删除当前行
$(".detail-delete").click(function()
{
    $(this).parent().remove();
    productCount();
});

//悬浮到鼠标所在行时改变颜色
$(".detail").hover(
	function(){
		$(this).parent().children().css("background","#E5E5E5");
		$(this).parent().children(".detail:eq(5)").children(".num_input").css("background","#E5E5E5");
	},
	function(){
		$(this).parent().children().css("background","white");
		$(this).parent().children(".detail:eq(5)").children(".num_input").css("background","white");
	}
);

//提交事件
$(".b-bottom-commit").click(function()
{
	$(".part1shopping").css("display","none");
	$(".part2check").css("display","flex");
	$(".part3confirm").css("display","none");
});

//确认支付事件
$(".price-topay") .click(function(){
	$(".part1shopping").css("display","none");
	$(".part2check").css("display","none");
	$(".part3confirm").show();
});

//支付完成后回到主页面
$(".confirm-btn").click(function(){
	window.location.href="../index.html";
});
