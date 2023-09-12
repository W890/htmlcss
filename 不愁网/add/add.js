// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// 请求首页中隐藏图片
$.ajax({
    // 请求方式 get post put
    type: 'get',
    url: '/stage-api/website/getHomePageInfo',
    data: {
        pageNum: 1
    },
    // 成功之后的操作
    success: function (res) {

        // 隐藏部分的id本地上传
        function upto() {
            for (let i = 0; i < 8; i++) {
                $('.tab_div').eq(i).click(function () {
                    localStorage.setItem('productId', `${res.data.products[i].productId}`)
                    // let ids = localStorage.getItem('productId')
                    location.href = ('../chanpinjieshao/chanpin.html')
                    console.log('点击的id', ids);
                    console.log(res.data.products[i].productId);
                })
            }
        }
        upto()

        console.log(res);
        let tab_data_icon = res.data.products;
        let tab_data_icim = res.data.companyInfo
        console.log(tab_data_icon);
        let zim = []//隐藏部分图片
        let productName = []//十块文字
        let productName_s = []//十块文字不顺序##############################
        $(tab_data_icon).each(function (i, j) {
            $('tab_div div').html(`<img src="${j.menuIcon}">`)
            productName[i] = j.productName//十块文字
            productName_s[i] = j.productName//################################
            if (!(i == 4 || i == 5)) {
                zim[i] = j.menuIcon//隐藏部分图片
            }
        })
        zim.splice(4, 2)
        productName_s.splice(4, 1)//#####################################
        productName_s.splice(5, 1)//#####################################
        for (let i = 0; i <= 7; i++) {
            $('.tab_div div').eq(i).html(`<img style="margin-left:50px" src="${zim[i]}">`)
            $('.tab_div p').eq(i).html(`${productName_s[i]}`)//############################
        }
    }
})
$('.zim_h1').html('加入我们')
$('.zim_h3').html('加入我们')
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// tab切换点击颜色切换
for (let i = 0; i < 4; i++) {
    $('.tab_divv li').eq(i).click(function () {
        $('.tab_divv li').css('color', 'black')
        $('.tab_divv li span').css('display', 'none')
        $('.tab_divv li').eq(i).css('color', 'green')
        $('.tab_divv li span').eq(i).css('display', 'block')
    })
}
// tab切换
$('.tab_divv li').eq(3).click(function () {
    $('.center_div').css('display', 'none')
    $('.center_div1').css('display', 'block')
})
for (let i = 0; i < 3; i++) {
    $('.tab_divv li').eq(i).click(function () {
        $('.center_div').css('display', 'block')
        $('.center_div1').css('display', 'none')
    })
}

// 数据渲染
let p1 = ['Java开发工程师',
    'Java中级开发工程师',
    '图像算法工程师',
    '视觉图像算法工程师',
    '自动化工程师',
    'it设备运维',
    '算法实习生',
    '项目经理',
    '测试工程师',
    '前端工程师',
    '实施顾问',
    '项目助理',
    '项目经理销售专员']
let span1 = ['青岛',
    '青岛',
    '青岛',
    '青岛',
    '青岛',
    '青岛',
    '青岛',
    '青岛',
    '青岛',
    '青岛',
    '青岛',
    '青岛',
    '广州',
    '广州']
let span2 = ['1-3年',
    '1-3年',
    '经验不限',
    '经验不限',
    '经验不限',
    '经验不限',
    '经验不限',
    '经验不限',
    '1-3年',
    '1-3年',
    '1-3年',
    '在校/应届',
    '1-3年',
    '经验不限']
let span3 = ['本科',
    '专科',
    '本科',
    '本科',
    '本科',
    '专科',
    '专科',
    '本科',
    '本科',
    '本科',
    '本科',
    '本科',
    '本科',
    '本科']
let p3 = ['5-9k',
    '6-10k',
    '10-15k',
    '15-25k',
    '8-13k',
    '5-7k',
    '3-5k',
    '11-16k',
    '6-10k',
    '7-12k',
    '8-12k',
    '4-8k',
    '9-14k',
    '8-13k']
let p4 = ['Java',
    'Linux、Java、Web前端',
    '深度学习算法、视觉图像算法、C++、Python',
    '深度学习算法、视觉图像算法、C++、Python',
    '电路设计、C++、硬件测试、PLC工程师、CAD',
    '网络运维、机房运维',
    '视觉图像算法、Python、人工智能、硬件',
    '项目经理、大数据、人工智能、物联网、畜牧养殖',
    '测试工程师、功能测试、性能测试、接口测试、Jmeter',
    '前端开发、Vue、移动端、大数据、人工智能、SaaS',
    'ERP、实施工程师/顾问、IT项目经理、项目经理',
    '需求分析、项目管理、实施',
    '售前支持、售后支持、需求采集、产品内部评审',
    '有猪场一线工作经验者优先']

for (let i = 0; i < 6; i++) {
    $('.center_div .p111').eq(i).html(`${p1[i]}`)
    $('.center_div .span111').eq(i).html(`${span1[i]}`)
    $('.center_div .span222').eq(i).html(`${span2[i]}`)
    $('.center_div .span322').eq(i).html(`${span3[i]}`)
    $('.center_div .p333').eq(i).html(`${p3[i]}`)
    $('.center_div .p444').eq(i).html(`${p4[i]}`)

}
$('.center_div1 .p111').html(`${p1[6]}`)
$('.center_div1 .span111').html(`${span1[6]}`)
$('.center_div1 .span222').html(`${span2[6]}`)
$('.center_div1 .span322').html(`${span3[6]}`)
$('.center_div1 .p333').html(`${p3[6]}`)
$('.center_div1 .p444').html(`${p4[6]}`)
$('.gre').click(function () {
    var newWindow = window.open();
    newWindow.location.assign('https://www.zhipin.com/web/geek/job?query=%E4%B8%8D%E6%84%81%E7%BD%91&city=101120200')
})

$('.tsp2').click(function () {
    $('.tsp2').css('color', 'green')
    $('.tsp3').css('color', 'black')
    $('.tsp4').css('color', 'black')
    for (let i = 0; i < 6; i++) {
        $('.p111').eq(i).html(`${p1[i]}`)
        $('.span111').eq(i).html(`${span1[i]}`)
        $('.span222').eq(i).html(`${span2[i]}`)
        $('.span322').eq(i).html(`${span3[i]}`)
        $('.p333').eq(i).html(`${p3[i]}`)
        $('.p444').eq(i).html(`${p4[i]}`)
    }

})
$('.tsp3').click(function () {
    $('.tsp2').css('color', 'black')
    $('.tsp3').css('color', 'green')
    $('.tsp4').css('color', 'black')
    let vim = 0
    for (let i = 6; i < 12; i++) {
        $('.p111').eq(vim).html(`${p1[i]}`)
        $('.span111').eq(vim).html(`${span1[i]}`)
        $('.span222').eq(vim).html(`${span2[i]}`)
        $('.span322').eq(vim).html(`${span3[i]}`)
        $('.p333').eq(vim).html(`${p3[i]}`)
        $('.p444').eq(vim).html(`${p4[i]}`)
        vim++
    }

})

//新闻页隐藏部分切换
$('.tab_div2').click(function(){
    location.href = ('../news/news.html')
})