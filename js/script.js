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
    var unslider04 = $('.zyxbulid7').unslider({
        dots: true,
        speed:500
    }),
data04 = unslider04.data('unslider');
$('.zyxdish-name').mousemove(function(event) {
    $(this).fadeIn();
    $(this).next().fadeOut();
});
$('.zyx-buy').mouseleave(function(event) {
    /* Act on the event */
   //$(this).hide();
   $(this).fadeOut();
   $(this).prev().fadeIn();
});

});