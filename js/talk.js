/**
 * Created by dell on 2017/5/31.
 */
$ (document).ready(function() {
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

});