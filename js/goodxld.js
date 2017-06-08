$(document).ready(function() {
  
  /*内部存储*/
  /*function clickCounter() {
    if(typeof(Storage)!=="undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount=Number(localStorage.clickcount)+1;
      }
      else {
        localStorage.clickcount=1;
      }
      document.getElementById("likeCount3").innerHTML=localStorage.clickcount;
    }
  }*/

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


});


