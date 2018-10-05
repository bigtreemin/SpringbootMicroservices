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
    //主页固定侧边栏
	window.addEventListener("scroll",function(){
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		document.querySelector(".rightSide").className=scrollTop>=600?"rightSide":"rightSide notchangerig"
		document.querySelector(".leftSide").className=scrollTop>=600?"leftSide":"leftSide notchangeleft"
	})
})

//左侧轮播效果
var $as=$(".page3 a"),$text=$(".page2 li"),$pics=$(".page1 li");
function move(){
	var $checkon=$(".checkon"),index=parseInt($checkon.attr("index"))+1;
	$(".page3").find(".checkon").removeClass("checkon");
	if(index<5){
		$checkon.parent().next().find("a").addClass("checkon");
	}else{
		$(".page3 li:first-child a").addClass("checkon")
		index=0
	}
	$text.eq(index).show(1000).siblings().hide(1000);
	$pics.eq(index).show(1000).siblings().hide(1000);
}
$.each($as,function(i,l){
	$(this).attr("index",i)
})
$as.click((e)=>{
	e.preventDefault();
var $tar=$(e.target),index=$tar.attr("index");
$tar.parents(".page3").find(".checkon").removeClass("checkon");
$tar.addClass("checkon")
$text.eq(index).show(1000).siblings().hide(1000);
$pics.eq(index).show(1000).siblings().hide(1000);
})
var timer;
function play(){
    timer= setInterval(move,3000);
}
play();
$('.page1,.page2').hover(function(){
    clearInterval(timer);
},function(){
    play();	
})

//右侧轮播效果
var $leftBan=$(".page4 li"),$leftPics=$(".page5 a");
function move2(){
    var $checkon=$(".onChange"),index=parseInt($checkon.attr("index"))+1;
    $(".page5").find($checkon).removeClass("onChange");
    if(index<3){
        $checkon.parent().next().find("a").addClass("onChange");
    }else{
        $(".page5 li:first-child a").addClass("onChange")
        index=0
    }
    $leftBan.eq(index).fadeIn(1000).siblings().fadeOut(1000);
}
$.each($leftPics,function(i,l){
    $(this).attr("index",i)
})
$leftPics.click((e)=>{
    e.preventDefault();
var $tar=$(e.target),index=$tar.attr("index");
$tar.parents(".page5").find(".onChange").removeClass("onChange");
$tar.addClass("onChange")
$leftBan.eq(index).fadeIn(1000).siblings().fadeOut(1000);
})
var timer2;
function play2(){
    timer2= setInterval(move2,3000);
}
play2();
$('.page4').hover(function(){
    clearInterval(timer2);
},function(){
    play2();
})
// 登陆框点击更换图片为白色背景
$(".login>span>input").click((e)=>{
	$(e.target).parent().addClass("bgfff");
}).blur((e)=>{
	$(e.target).parent().removeClass("bgfff");
})








