var $mail=$("[name=email]"),$mailT=$("#emailInner"),
	$password=$(":password"),$passwordT=$("#passwordInner"),
	$name=$("[name=name]"),$nameT=$("#unameInner"),
	$phone=$("[name=phone]"),$phoneT=$("#phoneInner"),
	$tjT=$("#tjInner"),
	$form=$("#form1"),
	m=pw=n=p=false;
$mail.blur((e)=>{
	$tar=$(e.target);
	if ($tar.val()=="") {
		$mailT.html("邮箱不能为空！");
		err($mailT);
	}else{
		$.ajax({
			url:"user/email",
			type:"post",
			dataType:"json",
			data:{email:$mail.val()}
		}).then(data=>{
			if (data.status=="1") {
				rig($mailT);
				m=true;
			}else{
				err($mailT);
				m=false;
			}
			$mailT.html(data.msg);
		})
	}
})

upwdR=/^(?!(?:\d+|[a-zA-Z]+)$)[\da-zA-Z]{8,}$/;
$password.blur((e)=>{
	$tar=$(e.target);
		if ($tar.val()=="") {
			$passwordT.html("密码不能为空");
			err($passwordT,pw);
		}else if(!upwdR.test($tar.val())){
			$passwordT.html("密码必须由数字和字母组成！并且大于8位");
			err($passwordT);
			pw=false;
		}else{
			$passwordT.html("恭喜!密码通过验证！");
			rig($passwordT);
			pw=true;
		}
})
unameR=/^[\u4e00-\u9fa5]{1,7}$|^[\dA-Za-z_]{1,14}$/;
$name.blur((e)=>{
	$tar=$(e.target);
	if ($tar.val()=="") {
		$nameT.html("姓名不能为空!");
		err($nameT,n);
	}
})

$phone.blur((e)=>{
	$tar=$(e.target);
	if ($tar.val()=="") {
		$phoneT.html("手机号不能为空！");
		err($phoneT);
	}else{
		$.ajax({
			url:"user/phone",
			type:"post",
			dataType:"json",
			data:{"phone":$phone.val()}
		}).then(data=>{
			if (data.status=="1") {
				rig($phoneT);
				p=true;
			}else{
				err($phoneT);
				p=false;
			}
			$phoneT.html(data.msg);
		})
	}
})

$("#tj").click(()=>{
    console.log(m,pw,n,p)
if(m==true&&pw==true&&p==true){
    $.ajax({
        url:"user/saveUser",
        type:"post",
			dataType:"json",
			data:$form.serialize(),
		}).then(data=>{
			if (data.status=="1") {
				rig($tjT);
				setTimeout(function(){location.href="http://localhost:8081/index"},500);
			}else{
				err($tjT);
			}
			$tjT.html(data.msg);
		});
	}else{
		$("input").blur();
	}
})
function err(tar){
	tar.show().attr("class","registertest");
	// tar.prev().css("borderRightColor","red");
}
function rig(tar){
	tar.show().addClass("righttest");
	// tar.prev().css("borderRightColor","green");
}


//主页固定侧边栏
window.addEventListener("scroll",function(){
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	document.querySelector(".rightSide").className=scrollTop>=150?"rightSide":"rightSide notchangerig"
	document.querySelector(".leftSide").className=scrollTop>=150?"leftSide":"leftSide notchangeleft"
})
// 登陆框点击更换图片为白色背景
$(".login>span>input").click((e)=>{
	$(e.target).parent().addClass("bgfff");
}).blur((e)=>{
	$(e.target).parent().removeClass("bgfff");
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

})
