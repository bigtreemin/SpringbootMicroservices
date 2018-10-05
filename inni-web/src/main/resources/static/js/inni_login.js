var $button=$("#button"),
	$checkbox=$(":checkbox"),
	$error=$(".error"),
	$email=$("[name=email]"),
	$password=$("#upwd");
mailR=/^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/;
upwdR=/^(?!(?:\d+|[a-zA-Z]+)$)[\da-zA-Z]{6,}$/;
$button.click((e)=>{
	e.stopPropagation();
	e.preventDefault();
	if (!$email.val()||!$password.val()) {
		$error.html("请添加完整信息");
	}else if (!mailR.test($email.val())) {
		$error.html("邮箱格式不正确");
	}else if(!upwdR.test($password.val())){
		$error.html("密码格式不正确，密码必须由数字和字母组成！并且大于8位");
	}else{
		$.ajax({
			url:"user/login",
			type:"post",
			data:{email:$email.val(),password:$password.val()}
		}).then(data=>{
			if (data.status=='1') {
				$(".error").html(data.msg).
				addClass("correct");
				setTimeout(function(){location.href="http://localhost:8081/index"},500)
			}else{
				$(".error").html(data.msg);
			}
		})
	}
})
$(".keydowntar").keydown(function(e){
	if (e.keyCode==13) {
		$button.trigger("click");
	}
})
//隐藏购物通道点击隐藏显示状态
$(()=>{
    $("#dropDown").click((e)=>{
    e.preventDefault();
e.stopPropagation();
$(".quickShoppingHid").toggle();
})
//导航下拉鼠标移入移出事件
$.each($("li.list>a"),function(i,l){
    var $this=$(this);
    $this.attr("index",i),$this.next().attr("index",i);
})
$("li.list>a").mouseover((e)=>{
    var $tar=$(e.target),index=$tar.attr("index"),$menu=$(".subMenu").eq(index);
$menu.show();
}).mouseout((e)=>{
    var $tar=$(e.target),index=$tar.attr("index"),$menu=$(".subMenu").eq(index);
$menu.hide();
})
$(".subMenu").mouseover((e)=>{
    var $tar=$(e.target),num=$tar.attr("index")||$tar.parents(".subMenu").attr("index");
$tar.show()
$("li.list>a").eq(num).css({
    backgroundPosition:`0 -40px`,
    zIndex:1
})
}).mouseleave((e)=>{
    var $tar=$(e.target),num=$tar.attr("index")||$tar.parents(".subMenu").attr("index");
$("li.list>a").eq(num).attr("style","");
$(".subMenu").hide()
})
//畅销产品
$(".series ul li").on("click","a",(e)=>{
    e.preventDefault();
var $tar=$(e.target).parent(),index=$tar.index();
$tar.addClass("on").siblings().removeClass("on");
$(".topList").eq(index).show().siblings(".topList").hide();
})
})
// 登陆框点击更换图片为白色背景
$(".login>span>input").click((e)=>{
	$(e.target).parent().addClass("bgfff");
}).blur((e)=>{
	$(e.target).parent().removeClass("bgfff");
})
