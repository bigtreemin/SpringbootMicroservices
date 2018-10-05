  $(document).ready(function(){
	    var skey = getCookie("INNI-COOKIE");
		
		if(skey){
			removelogin();
			adduser(skey);
		}
	});
	function getCookie(cookieName){
	    var cookieValue="";
		if (document.cookie && document.cookie != '') { 
			var cookies = document.cookie.split(';');
			for (var i = 0; i < cookies.length; i++) { 
				 var cookie = cookies[i];
				 if (cookie.substring(0, cookieName.length + 2).trim()) {
					   cookieValue = cookie.substring(cookieName.length + 1, cookie.length); 
					   break;
				 }
			 }
		} 
		return cookieValue;
	}
	
	function removelogin(){
		$(".login").remove();
	}
    function adduser(skey){
    	$(".user").prepend("<li><a href='http://localhost:8081/user/logout'><img src='./image/logout.png'/><a></li>")
    	$(".user").prepend("<li style='text-align: center;display:block;color:#919191;font-size:13px'>"+"欢迎您 &nbsp;&nbsp;&nbsp;"+skey+"</li>")
    }
    
    
    
    