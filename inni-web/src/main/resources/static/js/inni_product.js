
//隐藏购物通道点击隐藏显示状态
$(() => {
    //请求加载排行列表内容
    $.ajax({
        url: "item/hotItems",
        type: "get"
    }).then(data => {
        var html = "";
        console.log(data)
        $.each(data.data, function (i, d) {
            html += `
                  <li>
                      <a href="http://localhost:8081/itemView?pid=${d.pid}">
                          <span class="proImg no${d.pranking}"></span>
                          <span>
                              <img src="${d.pic}" alt="${d.ptitle}">
                          </span>
                          <span class="pName">${d.ptitle}</span>
                          <span class="price">￥${d.price}</span>
                      </a>
                  </li>
        `
        })
        $(".proList ul").html(html);
    })
    //请求加载商品列表内容
    function receive(pno) {
        $.ajax({
            url: "item/items",
            type: "get",
            data: { pno: pno }
        }).then(data => {
            var html = "";
            $.each(data.data, function (i, d) {
                html += `
                      <li>
                       <div class="thumb">
                           <a href="http://localhost:8081/itemView?pid=${d.pid}">
                               <img src="${d.pic}" alt="${d.ptitle}">
                           </a>
                           <ul class="fun">
                               <li class="fun1">
                                   <a href="#" data-id=${d.pid}>预览</a>
                               </li>
                               <li class="fun2">
                                   <a href="#">收藏夹</a>
                               </li>
                               <li class="fun3">
                                   <a href="#">购物车</a>
                               </li>
                           </ul>
                       </div>
                       <p class="proName">
                           <a href="http://localhost:8081/itemView?pid=${d.pid}">${d.ptitle} </a>
                       </p>
                       <p class="proPrice">￥${d.price}</p>
                   </li>
            `
            })
            $(".productListSub>ul").html(html);
            var html = '';
            html += `
            <a href="#" class="prev">
                <img src="./image/paging_first.gif" alt="" />
            </a>
            `
            for (let i = 0; i < data.pages; i++) {
                html += `<a href="#" class=${i + 1 == data.pno ? 'curr' : ''}>${i + 1}</a>`
            }
            html += `
            <a href="#" class="next">
                <img src="./image/paging_last.gif" alt="" />
            </a>
            `
            $(".page").html(html).data("index", data.pages);
            //页码点击
        })
    }
    receive(1)
    //分页条页面跳转
    $(".page").on('click', 'a', (e) => {
        e.preventDefault();
        $tar = $(e.currentTarget);
        $nowPage = $(".page>a.curr");
        if (!$tar.hasClass("next") && !$tar.hasClass("prev")) {
            pno = $tar.html();
        } else if ($tar.hasClass("next") && $nowPage.html() != $(".page").data("index")) {
            pno = parseInt($nowPage.html()) + 1;
        } else if ($tar.hasClass("prev") && $nowPage.html() != 1) {
            pno = parseInt($nowPage.html()) - 1;
        }
        receive(pno)
    })
    //点击出详情框
    $(".productListSub>ul").delegate('li.fun1>a', "click", (e) => {
        e.preventDefault();
        $tar = $(e.currentTarget);
        var pid = $tar.data('id');
        $.ajax({
            url: "item/item",
            type: "get",
            data: { pid: pid }
        }).then(data => {
            var $proView = $('#proView'), html;
            var html =
                `
                <div class="shadow"></div>
                <div class="popContent">
                    <!--预览头部-->
                    <div class="popHeader">
                        <a href="#">
                            <img src="./image/btn_close.png" alt="">
                        </a>
                        <h4>
                            <img src="./image/title_productPreView.png" alt="">
                        </h4>
                    </div>
                    <!--预览主体-->
                    <div class="popBody">
                        <div class="popTitle">
                            <div class="proTitle">
                                <h3>${data.data.ptitle.split(' ')[0]}
                                    <span>| ${data.data.ptitle.split(' ')[1]}</span>
                                </h3>
                            </div>
                            <img src="./image/icon_inninew.png" alt="">
                        </div>
                        <!--预览图片-->
                        <div class="productDetail">
                            <div class="proPic">
                                <img src=${data.data.bpic} alt="">
                                <div class="popBtn">
                                    <a href="#">
                                        <img src="./image/btn_productView_89x26.gif" alt="">
                                    </a>
                                </div>
                            </div>
                            <!--商品购物详情-->
                            <div class="proDesc">
                                <p>${data.data.details}</p>
                                <div class="descList">
                                    <dl>
                                        <dt>状态</dt>
                                        <dd>销售中</dd>
                                    </dl>
                                    <dl class="descPrice">
                                        <dt>优惠价</dt>
                                        <dd>￥${data.data.price}</dd>
                                    </dl>
                                    <dl class="">
                                        <dt>其他选项</dt>
                                        <dd>无</dd>
                                    </dl>
                                    <dl class="buyNum">
                                        <dt>购买数量</dt>
                                        <dd>
                                            <span class="num">
                                                <input type="text" value="1">
                                                <botton class="btnUp"></botton>
                                                <botton class="btnDown"></botton>
                                            </span>
                                            个
                                        </dd>
                                    </dl>
                                </div>
                                <!--总计金额-->
                                <p class="totalPrice">
                                    <span>总计</span>
                                    <em>￥${data.data.price}</em>
                                </p>
                                <!--购物按钮-->
                                <div class="btnShopping">
                                    <a href="#">
                                        <img src="./image/btn_buyNow.gif" alt="">
                                    </a>
                                    <a href="#">
                                        <img src="./image/btn_shoppingCart.gif" alt="">
                                    </a>
                                    <a href="#">
                                        <img src="./image/btn_wish.gif" alt="">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            `
            $proView.html(html).show()
            $('#proView .popHeader').on('click', 'a', (e) => {
                e.preventDefault();
                $proView.hide()
            })
        })
    })
    //主页固定侧边栏
    window.addEventListener("scroll", function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        document.querySelector(".rightSide").className = scrollTop >= 150 ? "rightSide" : "rightSide notchangerig"
        document.querySelector(".leftSide").className = scrollTop >= 150 ? "leftSide" : "leftSide notchangeleft"
    })
    // 登陆框点击更换图片为白色背景
    $(".login>span>input").click((e) => {
        $(e.target).parent().addClass("bgfff");
    }).blur((e) => {
        $(e.target).parent().removeClass("bgfff");
    })
    $("#dropDown").click((e) => {
        e.preventDefault();
        e.stopPropagation();
        $(".quickShoppingHid").toggle();
    })
    //导航下拉鼠标移入移出事件
    $.each($("li.list>a"), function (i, l) {
        var $this = $(this);
        $this.attr("index", i), $this.next().attr("index", i);
    })
    $("li.list>a").mouseover((e) => {
        var $tar = $(e.target), index = $tar.attr("index"), $menu = $(".subMenu").eq(index);
        $menu.show();
    }).mouseout((e) => {
        var $tar = $(e.target), index = $tar.attr("index"), $menu = $(".subMenu").eq(index);
        $menu.hide();
    })
    $(".subMenu").mouseover((e) => {
        var $tar = $(e.target), num = $tar.attr("index") || $tar.parents(".subMenu").attr("index");
        $tar.show()
        $("li.list>a").eq(num).css({
            backgroundPosition: `0 -40px`,
            zIndex: 1
        })
    }).mouseleave((e) => {
        var $tar = $(e.target), num = $tar.attr("index") || $tar.parents(".subMenu").attr("index");
        $("li.list>a").eq(num).attr("style", "");
        $(".subMenu").hide()
    })
    //产品类别切换
    $("ul.listAll>li>a").on('mouseover', (e) => {
        e.preventDefault()
        $tar = $(e.currentTarget);
        $li = $tar.parent();
        $needShow = $li.find("span,div");
        $noShow = $("ul.listAll>li.on").find("span,div");
        $noShow.hide();
        $needShow.show();
        $li.addClass("on").siblings().removeClass("on")
    })
    //按钮效果
    $(".hotList").on("click", "button", (e) => {
        $tar = $(e.target);
        var left = parseInt($(".hotList>.proList>ul").css("left"));
        console.log(left)
        function myanimate(button) {
            if (button === "next") {
                left > -558 ? left += -558 : left = 0;
            } else {
                left < 0 ? left += 558 : left = -558;
            }
            return left
        }
        if ($tar.hasClass("next")) {
            myanimate("next")
        } else {
            myanimate("prve")
        }
        $(".hotList>.proList>ul").stop().animate({ left: left + "px" })
    })
})


