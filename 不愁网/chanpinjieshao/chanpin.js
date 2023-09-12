// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
id = 15
bbas(id)
function getid(){
    id = localStorage.getItem('productId')
     
    console.log(id);
    bbas(id)
}
getid()

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
                productName[i] = j.productName
            }
        })
        zim.splice(4, 2)
        productName_s.splice(4, 1)//#####################################
        productName_s.splice(5, 1)//#####################################
        console.log(productName);
        console.log(productName_s);
        for (let i = 0; i <= 7; i++) {
            $('.tab_div div').eq(i).html(`<img style="margin-left:50px" src="${zim[i]}">`)
            $('.tab_div p').eq(i).html(`${productName_s[i]}`)//############################
        }
        // 隐藏部分页面跳转
        for (let i = 0; i < 8; i++) {
            $('.tab_div').eq(i).click(function () {
                $('.zim_h1').html(`${productName_s[i]}`)
                $('.zim_h3').html(`${productName_s[i]}`)
                $('.biaoti').html(`首页 > 产品介绍 >${productName_s[i]}`)//页面标题文字
                $('.content_div1 h2').html(`${productName_s[i]}`)
            })
        }
        for (let i = 0; i < 4; i++) {
            $('.tab_div').eq(i).click(function () {
                console.log(res.data.products[i].productId);
                localStorage.setItem('productId', `${res.data.products[i].productId}`)
                id = localStorage.getItem('productId')
                bbas(id)
            })
        }
        $('.tab_div').eq(4).click(function () {
            localStorage.setItem('productId', `${res.data.products[5].productId}`)
            id = localStorage.getItem('productId')
            bbas(id)
        })
        let shuzi = 7
        for (let i = 5; i < 8; i++) {
            $('.tab_div').eq(i).click(function () {
                localStorage.setItem('productId', `${res.data.products[shuzi++].productId}`)
                id = localStorage.getItem('productId')
                bbas(id)
            })
        }
    }
})
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// id = location.getItem('productId')
// bbas(id)
$('.zim_h1').html('合同放养管理解决方案')
$('.zim_h3').html('合同放养管理解决方案')
bbas()
function bbas(id) {
    // 内容部分
    $.ajax({
        // 请求方式 get post put
        type: 'get',
        url: '/stage-api/website/getProductDetails',
        data: {
            productId: id
        },
        // 成功之后的操作
        success: function (res) {
            console.log(res);
            let caseCompanyName = []//右侧公司名
            let companyLogoPhoto = []//右侧公司logo
            $(res.data.companies).each(function (i, j) {
                $(`<div class="div2_left">
                        <div class="div2_left_1">
                            <img style="width:101px;height:57px" src="${j.companyLogoPhoto}">
                        </div>
                        <div class="div2_left_2">
                            <p>${j.caseCompanyName}</p>
                            <span style="font-size: 14px;">2021-10-18</span>
                        </div>
                    </div>`).appendTo($('.content_div2'))
            })
            $('.content_div1 div').html(`${res.data.productDetails.productIntroduce}`)
        }
    })
}

//案例展示跳转
// for (let i = 0; i < 4; i++) {
//     $('.content_div2').click(function () {
//         location.href = ('../anlizhanshi/anli.html')
//         localStorage.setItem('productId', '15')
//         // console.log(`${res.data.productDetails[i].productId}`);
//         localStorage.setItem('anlibool', 'true')
//     })
// }

//案例展示跳转
console.log($('.div2_left').length);
for (let i = 0; i < 6; i++) {
    $('.content_div2').eq(i).click(function () {
        location.href = ('../anlizhanshi/anli.html')
        localStorage.setItem('caseCompanyId', '7')
        // console.log(`${res.data.companyInfo[i].caseCompanyId}`);
        localStorage.setItem('anlibool', 'true')
    })
}

//新闻页隐藏部分切换
$('.tab_div2').click(function(){
    location.href = ('../news/news.html')
})