/**
 * Created by dell on 2017/5/31.
 */
$ (document).ready(function() {
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
        
    // $(".part2createnew").css("display","none");
    $(".createnew").click(function() {
        $(".part1").css("display","none");
        // $(".part1").attr("class","part1 blur");
        $(".part2createnew").css("display","flex");
    });
    $(".push").click(function() {
        // $(".part1").attr("class","part1 blur");
        $(".part1").css("display","none");
        $(".part3push").css("display","flex");
    });
    $(".nobutton").click(function() {
        $(".part1").css("display","flex");
        // $(".part1").attr("class","part1");
        $(".part2createnew").css("display","none");
    });
    $(".yesbutton").click(function() {
        $(".part1").css("display","flex");
        // $(".part1").attr("class","part1");
        $(".part2createnew").css("display","none");
    });
    $(".part3nobutton").click(function() {
        // $(".part1").attr("class","part1");
        $(".part1").css("display","flex");
        $(".part3push").css("display","none");
    });
    $(".part3yesbutton").click(function() {
        // $(".part1").attr("class","part1");
        $(".part1").css("display","flex");
        $(".part3push").css("display","none");
    });

    //显示全部和收起
    $(".showallmes").click(function() {
        var text = $(this).text();
        if(text == "显示全部") {
            $(this).prev().css("height","auto");
            $(this).parent().css("height","auto");
            $(this).parent().parent().css("height","auto");
            $(this).text("收起");
            $(this).attr("class","folder");
        }
        else {
            $(this).prev().css("height","100px");
            $(this).parent().css("height","120px");
            $(this).parent().parent().css("height","120px");
            $(this).text("显示全部");
            $(this).attr("class","showallmes");
        }
    });

    // 导航栏
    $('#title-nav li').eq(3).addClass('b-active');
    $('#title-nav li').mouseenter(function(event) {
        $(this).addClass('b-active').siblings().removeClass('b-active');
    });
});