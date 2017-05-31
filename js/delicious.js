/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-15 08:44:45
 * @version $Id$
 */

var spicy=0;
var capcity=0;
$('.l-foodchoose-hotchoose-cnt').children().click(function(){
	$('.l-foodchoose-hotchoose-cnt').children().eq(spicy).css('border','1px solid #ccc');
	spicy=$('.l-foodchoose-hotchoose-cnt').children().index(this);
	$('.l-foodchoose-hotchoose-cnt').children().eq(spicy).css('border','1px solid red');
});