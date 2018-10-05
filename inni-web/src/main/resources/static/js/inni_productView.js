//主页固定侧边栏
window.addEventListener("scroll", function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    document.querySelector(".rightSide").className = scrollTop >= 150 ? "rightSide" : "rightSide notchangerig"
    document.querySelector(".leftSide").className = scrollTop >= 150 ? "leftSide" : "leftSide notchangeleft"
})
$(() => {
    function getpid() {
        var search = location.search;
        var pid = search.split("=")[1];
        return pid
    }
    $.ajax({
        url: '/item/itemView',
        type: 'get',
        data: { pid: getpid() }
    }).then(data => {
        console.log(data)
        var html =
            `
                <div class="picLeft">
                    <img src="${data.data.bpic}" alt="">
                </div>
                <div class="share">
                    <span>分享到:</span>
                    <a href="http://connect.qq.com/widget/shareqq/index.html?url=https%3A%2F%2Fwww.innisfree.cn%2FProduct.do%3Fmethod%3DproductView%26seq%3D1000008920%26tp%3D1&title=%E7%BB%BF%E8%8C%B6%E7%B2%BE%E8%90%83%E5%B9%B3%E8%A1%A1%E4%BF%9D%E6%B9%BF%E7%89%B9%E5%88%AB%E5%A5%97%E8%A3%85&source=https%3A%2F%2Fwww.innisfree.cn%2FProduct.do%3Fmethod%3DproductView%26seq%3D1000008920%26tp%3D1&desc=%E7%BB%BF%E8%8C%B6%E7%B2%BE%E8%90%83%E5%B9%B3%E8%A1%A1%E4%BF%9D%E6%B9%BF%E7%89%B9%E5%88%AB%E5%A5%97%E8%A3%85&pics=https%3A%2F%2Fwww.innisfree.cn%2Fcn_resources%2Fimages%2Flayout%2Flogo.png">
                        <img src="./image/qq.png" alt="">
                    </a>
                    <a href="http://service.weibo.com/share/share.php?url=https%3A%2F%2Fwww.innisfree.cn%2FProduct.do%3Fmethod%3DproductView%26seq%3D1000008920%26tp%3D1&title=%E7%BB%BF%E8%8C%B6%E7%B2%BE%E8%90%83%E5%B9%B3%E8%A1%A1%E4%BF%9D%E6%B9%BF%E7%89%B9%E5%88%AB%E5%A5%97%E8%A3%85&pic=https%3A%2F%2Fwww.innisfree.cn%2Fcn_resources%2Fimages%2Flayout%2Flogo.png&appkey=#_loginLayer_1511510437629">
                        <img src="./image/weibo.png" alt="">
                    </a>
                    <a href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=https%3A%2F%2Fwww.innisfree.cn%2FProduct.do%3Fmethod%3DproductView%26seq%3D1000008920%26tp%3D1&amp;title=%E7%BB%BF%E8%8C%B6%E7%B2%BE%E8%90%83%E5%B9%B3%E8%A1%A1%E4%BF%9D%E6%B9%BF%E7%89%B9%E5%88%AB%E5%A5%97%E8%A3%85&amp;desc=%E7%BB%BF%E8%8C%B6%E7%B2%BE%E8%90%83%E5%B9%B3%E8%A1%A1%E4%BF%9D%E6%B9%BF%E7%89%B9%E5%88%AB%E5%A5%97%E8%A3%85&amp;summary=%E7%BB%BF%E8%8C%B6%E7%B2%BE%E8%90%83%E5%B9%B3%E8%A1%A1%E4%BF%9D%E6%B9%BF%E7%89%B9%E5%88%AB%E5%A5%97%E8%A3%85&amp;site=https%3A%2F%2Fwww.innisfree.cn%2FProduct.do%3Fmethod%3DproductView%26seq%3D1000008920%26tp%3D1">
                        <img src="./image/qzone.png" alt="">
                    </a>
                    <a href="">
                        <img src="./image/wechat.png" alt="">
                    </a>
                </div>
                <!--产品右侧详情-->
                <div class="pdtDesc">
                    <p class="desc">${data.data.details}</p>
                    <div class="descList">
                        <dl class="code">
                            <dt>商品编码</dt>
                            <dd>${data.data.code}</dd>
                        </dl>
                        <dl class="status">
                            <dt>状态</dt>
                            <dd>销售中</dd>
                        </dl>
                        <dl class="normalprice">
                            <dt>市场价</dt>
                            <dd>¥${data.data.price} </dd>
                        </dl>
                        <dl class="point">
                            <dt>
                                <span>购物积分</span>
                                <a href="#">
                                    <img src="./image/icon_question_23x22.png" alt="">
                                </a>
                            </dt>
                            <dd>
                                <span>40%</span>
                                <span>${data.data.integral}P </span>
                            </dd>
                        </dl>
                        <dl class="manufacture">
                            <dt>产地</dt>
                            <dd>韩国 </dd>
                        </dl>
                        <dl class="quantity">
                            <dt>购买数量</dt>
                            <dd>
                                <span class="qForm">
                                    <input type="text" style="width:27px; height:19px;margin-right: 17px;" value="1">
                                    <button class="btnUp"></button>
                                    <button class="btnDonw"></button>
                                </span> 个
                            </dd>
                        </dl>
                    </div>
                    <!--总计金额/-->
                    <p class="totalPrice">
                        <span>总计</span>
                        <em id="totalPrice">¥${data.data.price}</em>
                    </p>
                    <p class="chanceDesc">
                    </p>
                    <!--购物按钮-->
                    <div class="btnShopping">
                        <a href="#">
                            <img src="./image/btn_buyNow.gif" alt="立即购买">
                        </a>
                        <a href="#">
                            <img src="./image/btn_shoppingCart.gif" alt="放入购物车">
                        </a>
                        <a href="#">
                            <img src="./image/btn_wish.gif" alt="放入收藏夹">
                        </a>
                    </div>
                    <!--用户评价-->
                    <dl class="buySatisfy">
                        <dt>
                            <img src="./image/txt_buysatisfy.gif" alt="商品评价">
                        </dt>
                        <dd class="buySatisfy_icon">
                            <img src="./image/icon_review2_4.png">
                        </dd>
                        <dd class="buyReview">
                            <ul>
                                <li class="first-child">
                                    <a href="#">分享小清新 :
                                        <span>75</span> 条 |</a>
                                </li>
                                <li>
                                    <a href="#">用户评价 :
                                        <span>505</span> 条</a>
                                </li>
                            </ul>
                        </dd>
                        <dd class="buyList">
                            <ul>
                                <li>
                                    <a href="#">绿茶套装</a>
                                </li>
                                <li>
                                    <a href="#">绿茶套装</a>
                                </li>
                                <li>
                                    <a href="#">绿茶套装</a>
                                </li>
                            </ul>
                        </dd>
                    </dl>
                </div>
            `
        $('.productDetail').html(html)
        $('.pageTitle>h3').html(data.data.ptitle)
        $('.infoLe').html(`<img src="${data.data.details_pic}" alt="">`)
    })
})
// 登陆框点击更换图片为白色背景
$(".login>span>input").click((e) => {
    $(e.target).parent().addClass("bgfff");
}).blur((e) => {
    $(e.target).parent().removeClass("bgfff");
})
//隐藏购物通道点击隐藏显示状态
$(() => {
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
})
