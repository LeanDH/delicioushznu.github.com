$(document).ready(function() {

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

    $('.fa-thumbs-up').on('click',function(){
      $(this).css('color','#27C24C');
      $(this).parents('p').find('.fa-thumbs-down').css('color','#000');
    });

    $('.fa-thumbs-down').on('click',function(){
      $(this).css('color','#F05050');
      $(this).parents('p').find('.fa-thumbs-up').css('color','#000');
    })
    
});


