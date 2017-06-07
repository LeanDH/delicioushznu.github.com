$(document).ready(function() {
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
  
    $('.heart').on("click",function() {

      var A=$(this).attr("id");
      var B=A.split("like");
      var messageID=B[1];
      var C=parseInt($("#likeCount"+messageID).html());
      $(this).css("background-position","")
        var D=$(this).attr("rel");
       
        if(D === 'like') {      
          $("#likeCount"+messageID).html(C+1);
          $(this).addClass("heartAnimation").attr("rel","unlike");
        }

        else {
          $("#likeCount"+messageID).html(C-1);
          $(this).removeClass("heartAnimation").attr("rel","like");
          $(this).css("background-position","left");
        }
    });
    
    $('#title-nav li').eq(4).addClass('b-active');
    $('#title-nav li').mouseenter(function(event) {
       $(this).addClass('b-active').siblings().removeClass('b-active');
    });

    $.extend({
    tipsBox: function (options) {
      options = $.extend({
        obj: null,  //jq对象，要在那个html标签上显示
        str: "+1",  //字符串，要显示的内容;也可以传一段html，如: "<b style='font-family:Microsoft YaHei;'>+1</b>"
        startSize: "12px",  //动画开始的文字大小
        endSize: "30px",    //动画结束的文字大小
        interval: 600,  //动画时间间隔
        color: "green",    //文字颜色
        callback: function () { }    //回调函数
      }, options);
      $("body").append("<span class='num'>" + options.str + "</span>");
      var box = $(".num");
      var left = options.obj.offset().left + options.obj.width() / 2+80;
      var top = options.obj.offset().top - options.obj.height();
      box.css({
        "position": "absolute",
        "left": left + "px",
        "top": top + "px",
        "z-index": 9999,
        "font-size": options.startSize,
        "line-height": options.endSize,
        "color": options.color
      });
      box.animate({
        "font-size": options.endSize,
        "opacity": "0",
        "top": top - parseInt(options.endSize) + "px"
      }, options.interval, function () {
        box.remove();
        options.callback();
      });
    }
  });

    $('#btn1').on('click',function(){
      if($(this).find('.fa-thumbs-up').hasClass("changeColor"))
        $(this).find('.fa-thumbs-up').removeClass("changeColor");

      else {
        $(this).find('.fa-thumbs-up').addClass("changeColor");
        $.tipsBox({
          obj: $(this),
          str: "+1",
          callback: function () {}
        });
        niceIn($(this));
      }
    });

    $('#btn2').on('click',function(){
      if($(this).find('.fa-thumbs-up').hasClass("changeColor"))
        $(this).find('.fa-thumbs-up').removeClass("changeColor");

      else {
        $(this).find('.fa-thumbs-up').addClass("changeColor");
        $.tipsBox({
          obj: $(this),
          str: "+1",
          callback: function () {}
        });
        niceIn($(this));
      }
    });
    $('#btn3').on('click',function(){
      if($(this).find('.fa-thumbs-up').hasClass("changeColor"))
        $(this).find('.fa-thumbs-up').removeClass("changeColor");

      else {
        $(this).find('.fa-thumbs-up').addClass("changeColor");
        $.tipsBox({
          obj: $(this),
          str: "+1",
          callback: function () {}
        });
        niceIn($(this));
      }
    });

    $('#btn4').on('click',function(){
      if($(this).find('.fa-thumbs-up').hasClass("changeColor"))
        $(this).find('.fa-thumbs-up').removeClass("changeColor");

      else {
        $(this).find('.fa-thumbs-up').addClass("changeColor");
        $.tipsBox({
          obj: $(this),
          str: "+1",
          callback: function () {}
        });
        niceIn($(this));
      }
    });
    $('#btn5').on('click',function(){
      if($(this).find('.fa-thumbs-up').hasClass("changeColor"))
        $(this).find('.fa-thumbs-up').removeClass("changeColor");

      else {
        $(this).find('.fa-thumbs-up').addClass("changeColor");
        $.tipsBox({
          obj: $(this),
          str: "+1",
          callback: function () {}
        });
        niceIn($(this));
      }
    });

    $('#btn6').on('click',function(){
      if($(this).find('.fa-thumbs-up').hasClass("changeColor"))
        $(this).find('.fa-thumbs-up').removeClass("changeColor");

      else {
        $(this).find('.fa-thumbs-up').addClass("changeColor");
        $.tipsBox({
          obj: $(this),
          str: "+1",
          callback: function () {}
        });
        niceIn($(this));
      }
    });
    $('#btn7').on('click',function(){
      if($(this).find('.fa-thumbs-up').hasClass("changeColor"))
        $(this).find('.fa-thumbs-up').removeClass("changeColor");

      else {
        $(this).find('.fa-thumbs-up').addClass("changeColor");
        $.tipsBox({
          obj: $(this),
          str: "+1",
          callback: function () {}
        });
        niceIn($(this));
      }
    });

    $('#btn8').on('click',function(){
      if($(this).find('.fa-thumbs-up').hasClass("changeColor"))
        $(this).find('.fa-thumbs-up').removeClass("changeColor");

      else {
        $(this).find('.fa-thumbs-up').addClass("changeColor");
        $.tipsBox({
          obj: $(this),
          str: "+1",
          callback: function () {}
        });
        niceIn($(this));
      }
    });
    $('#btn9').on('click',function(){
      if($(this).find('.fa-thumbs-up').hasClass("changeColor"))
        $(this).find('.fa-thumbs-up').removeClass("changeColor");

      else {
        $(this).find('.fa-thumbs-up').addClass("changeColor");
        $.tipsBox({
          obj: $(this),
          str: "+1",
          callback: function () {}
        });
        niceIn($(this));
      }
    });

    $('#btn10').on('click',function(){
      if($(this).find('.fa-thumbs-up').hasClass("changeColor"))
        $(this).find('.fa-thumbs-up').removeClass("changeColor");

      else {
        $(this).find('.fa-thumbs-up').addClass("changeColor");
        $.tipsBox({
          obj: $(this),
          str: "+1",
          callback: function () {}
        });
        niceIn($(this));
      }
    });
  
});

function alertMessage(){
   layui.use(['layer', 'form'], function(){
      var layer = layui.layer
      ,form = layui.form();
      
      layer.open({
        type: 1,
        area: ['300px', '150px'],
        shadeClose: true, //点击遮罩关闭
        content: '\<\div style="padding:20px;">为了不侵犯叔叔阿姨的肖像权，最后还是决定用一些食物的照片来代替头像\<\/div>'
      });
      //layer.alert('为了不侵犯叔叔阿姨的肖像权，最后还是决定用一些食物的照片来代替头像')
    });
};

function niceIn(prop){
  prop.find('i').addClass('niceIn');
  setTimeout(function(){
  prop.find('i').removeClass('niceIn'); 
  },1000);    
}



