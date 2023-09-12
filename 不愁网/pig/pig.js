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
$('.zim_h1').html('生猪交易平台')
$('.zim_h3').html('生猪交易平台')
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

$.ajax({
    // 请求方式 get post put
    type: 'get',
    url: '/stage-api/website/getProductDetails',
    data: {
        productId: 13
    },
    // 成功之后的操作
    success: function (res) {
        console.log(res);
        let companyLogoPhoto = []//图片
        let caseCompanyName = []//标题
        console.log(res.data.productDetails);
        $('.content_div1 div').html(`${res.data.productDetails.productIntroduce
            }`)
        $(res.data.companies).each(function (i, j) {
            companyLogoPhoto[i] = j.companyLogoPhoto
            caseCompanyName[i] = j.caseCompanyName
        })
        for (let i = 0; i < 2; i++) {
            $('.div2_left_1').eq(i).html(`<img style="width:100%" src="${companyLogoPhoto[i]}">`)
            $('.div2_left_2 p').eq(i).html(`${caseCompanyName[i]}`)
        }
    }
})

//案例展示跳转
console.log($('.div2_left').length);
for (let i = 0; i < 6; i++) {
    $('.content_div2').eq(i).click(function () {
        location.href = ('../anlizhanshi/anli.html')
        localStorage.setItem('caseCompanyId', '8')
        // console.log(`${res.data.companyInfo[i].caseCompanyId}`);
        localStorage.setItem('anlibool', 'true')
    })
}