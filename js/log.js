$('.button').click(function(event) {
	/* Act on the event */
	var name=$('.name').val();
	var password=$('.password').val();
	//alert(name+"!!!");
	if(name.length>0&&password.length>0)
	{
		  if (window.XMLHttpRequest)
		  {// code for IE7+, Firefox, Chrome, Opera, Safari
		  xmlhttp=new XMLHttpRequest();
		  }
		  else
		  {// code for IE6, IE5
		  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
		xmlhttp.onreadystatechange=function()
		  {
			  if (xmlhttp.readyState==4 && xmlhttp.status==200)
			    {
			       xmlhttp.responseText.trim();
			 	   //alert(xmlhttp.responseText);
			       if(xmlhttp.responseText==true)
			       {
			       		//alert("y");
			       		window.location.href="index.html";  
			       }
			       else
			       {
			       		//alert("w");
			       }
			    }
		  }
			xmlhttp.open("GET","http://localhost:8080/phpbin/log.php?name="+name+"&password="+password,true);
			xmlhttp.send();
	}
	else
	{
		return;
	} 
});