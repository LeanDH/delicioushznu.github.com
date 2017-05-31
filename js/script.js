document.onscroll=function()
{
    var nav = document.getElementById("zyx-dirnav");
    var total = document.body.scrollTop||document.documentElement.scrollTop;
    if(total>(500))
    {
        nav.className="zyx-nav-fix";
    }
    else 
    {
        nav.className="zyx-nav-clearfix";
    }
}
$(document).ready(function(e) {
    var unslider04 = $('#b04').unslider({
        dots: true
    }),
    data04 = unslider04.data('unslider');
     
    $('.unslider-arrow04').click(function() {
        var fn = this.className.split(' ')[1];
        data04[fn]();
    });
    var unslider07 = $('.zyxbulid7').unslider({
        dots: true,
        speed:500
    }),
    data07 = unslider07.data('unslider');
    $('.zyxdish-name').mouseover(function(event) {
        $(this).fadeOut('fast',function(){$(this).next().fadeIn();});
    });
    $('.zyx-buy').mouseout(function(event) {
        /* Act on the event */
       //$(this).hide();
       $(this).fadeOut('fast',function(){$(this).prev().fadeIn();});
    });
    var unslider02 = $('.zyxbuild2').unslider({
        dots: false
    }),
    data02 = unslider02.data('unslider');
    $('.unslider-arrow02').click(function() {
            var fn = this.className.split(' ')[1];
            data02[fn]();
    });
});
