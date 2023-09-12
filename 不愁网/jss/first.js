var mySwiper = new Swiper('.swiper', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // 设置三秒自动轮换
    autoplay: {
        delay: 3000
    },

    // 如果需要滚动条
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    loopedSlides: 5,
})

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
        // 隐藏部分/十块部分的id本地上传
        function upto() {
            for (let i = 0; i < 8; i++) {
                // 隐藏部分
                $('.tab_div').eq(i).click(function () {
                    localStorage.setItem('productId', `${res.data.products[i].productId}`)
                    location.href = ('../chanpinjieshao/chanpin.html')
                    console.log('点击的id', ids);
                    console.log(res.data.products[i].productId);
                })
                if (i == 4 || i == 6) {
                    continue
                } else {
                    // 十块部分——八部分
                    $('.eight_div div').eq(i).click(function () {
                        localStorage.setItem('productId', `${res.data.products[i].productId}`)
                        location.href = ('../chanpinjieshao/chanpin.html')
                        console.log('点击的id', ids);
                        console.log(res.data.products[i].productId);
                    })
                }
            }
            //十块部分——二部分
            let dds = 8
            for (let i = 0; i < 2; i++) {
                $('.two_div div').eq(i).click(function () {
                    localStorage.setItem('productId', `${res.data.products[dds].productId}`)
                    location.href = ('../chanpinjieshao/chanpin.html')
                    console.log('点击的id', ids);
                    console.log(res.data.products[dds].productId);
                    dds++
                })
            }
        }
        upto()


        //新闻页跳转
        $('.tabcar_1').click(function () {
            location.href = ('../news/news.html')
            localStorage.setItem('newsId', '11')
            localStorage.setItem('newsbool', 'true')
        })
        $('.threep').click(function () {
            location.href = ('../news/news.html')
            localStorage.setItem('newsId', '11')
            localStorage.setItem('newsbool', 'true')
        })

        //案例展示跳转
        for (let i = 0; i < 4; i++) {
            $('.anli_four').eq(i).click(function () {
                location.href = ('./anlizhanshi/anli.html')
                localStorage.setItem('caseCompanyId', `${res.data.companyInfo[i].caseCompanyId}`)
                console.log(`${res.data.companyInfo[i].caseCompanyId}`);
                localStorage.setItem('anlibool', 'true')
            })
        }



        console.log(res);
        let tab_data_icon = res.data.products;
        let tab_data_icim = res.data.companyInfo
        console.log(tab_data_icon);
        let zim = []//隐藏部分图片
        let companyLogoPhoto = []//案例展示图片
        let productName = []//十块文字
        let productName_s = []//十块文字不顺序##############################
        let zim2 = []//十块图片
        let caseCompanyName = []//案例展示p1
        let remark = []//案例展示p2

        $(tab_data_icim).each(function (i, j) {
            companyLogoPhoto[i] = j.companyLogoPhoto//案例展示图片
            caseCompanyName[i] = j.caseCompanyName//案例展示p1
            remark[i] = j.remark//案例展示p2
        })
        $(tab_data_icon).each(function (i, j) {
            $('tab_div div').html(`<img src="${j.menuIcon}">`)
            zim2[i] = j.logoPhotoAddress//十块图片
            productName[i] = j.productName//十块文字
            productName_s[i] = j.productName//################################
            if (!(i == 4 || i == 5)) {
                zim[i] = j.menuIcon//隐藏部分图片
            }
        })
        console.log(productName);
        console.log(zim2);
        zim.splice(4, 2)
        productName_s.splice(4, 1)//#####################################
        productName_s.splice(5, 1)//#####################################
        for (let i = 0; i <= 7; i++) {
            $('.tab_div div').eq(i).html(`<img style="margin-left:50px" src="${zim[i]}">`)
            $('.tab_div p').eq(i).html(`${productName_s[i]}`)//############################
            $('.eight_div div').eq(i).css('background', `url(${zim2[i]})`)
            $('.eight_h2').eq(i).html(`${productName[i]}`)
            $('.eight_p2').eq(i).html(`${productName[i]}`)
        }
        let q = 0;
        for (let j = 8; j < 10; j++) {
            $('.two_div div').eq(q).css('background', `url(${zim2[j]})`)
            $('.two_h2').eq(q).html(`${productName[j]}`)
            $('.two_p2').eq(q).html(`${productName[j]}`)
            q++
        }
        for (let a = 0; a < 4; a++) {
            $('.anli_div').eq(a).html(`<img class="anli_img" src="${companyLogoPhoto[a]}">`)
            $('.anlip1').eq(a).html(`${caseCompanyName[a]}`)
            $('.anlip2').eq(a).html(`${remark[a]}`)
        }
    }

})

// 新闻页请求
$.ajax({
    // 请求方式 get post put
    type: 'get',
    url: '/stage-api/website/getNewsList',
    data: {
        pageNum: 1,
        pageSize: 4,
        newsType: 1
    },
    // 成功之后的操作
    success: function (res) {
        console.log(res);
        let news = []
        let newsName = []
        let remark = []
        let newsp = []
        $(res.rows).each(function (i, j) {
            news[i] = j.newsPic
            newsName[i] = j.newsName
            remark[i] = j.remark
            newsp[i] = j.newsIntroduce
        })
        $('.tab_img1').html(`<img class="tabimg" src="${news[0]}">`)
        $('.tabcar_1_1 h3').html(`${newsName[0]}<br>`)
        $('.tabcar_1_1 .tabcar_1_1_P1').html(`${remark[0]}`)
        let j = 0
        for (let i = 1; i < 4; i++) {
            $('.threep .span2').eq(j++).html(`
                ${newsName[i]}`)
        }
        $('.tooa li').eq(0).click(function () {
            $('.tab_img1').html(`<img class="tabimg" src="${news[0]}">`)
            $('.tabcar_1_1 h3').html(`${newsName[0]}<br>`)
            $('.tabcar_1_1 .tabcar_1_1_P1').html(`${remark[0]}`)
            let j = 0
            for (let i = 1; i < 4; i++) {
                $('.threep .span2').eq(j++).html(`
                ${newsName[i]}`)
            }
        })
    }
})

// 新闻页请求
$.ajax({
    // 请求方式 get post put
    type: 'get',
    url: '/stage-api/website/getNewsList',
    data: {
        pageNum: 1,
        pageSize: 4,
        newsType: 2
    },
    // 成功之后的操作
    success: function (res) {
        console.log(res);
        let news = []
        let newsName = []
        let remark = []
        let newsp = []
        $(res.rows).each(function (i, j) {
            news[i] = j.newsPic
            newsName[i] = j.newsName
            remark[i] = j.remark
            newsp[i] = j.newsIntroduce
        })
        $('.tooa li').eq(1).click(function () {
            $('.tab_img1').html(`<img class="tabimg" src="${news[0]}">`)
            $('.tabcar_1_1 h3').html(`${newsName[0]}<br>`)
            $('.tabcar_1_1 .tabcar_1_1_P1').html(`${remark[0]}`)
            let j = 0
            for (let i = 1; i < 4; i++) {
                $('.threep .span2').eq(j++).html(`
                ${newsName[i]}`)
            }
        })
    }
})

$.ajax({
    // 请求方式 get post put
    type: 'get',
    url: '/stage-api/website/coo/list',
    data: {
    },
    // 成功之后的操作
    success: function (res) {
        console.log(res.rows);
        let logoUrl = []
        $(res.rows).each(function (i, j) {
            logoUrl[i] = j.logoUrl
        })
        console.log(logoUrl);
        for (let i = 0; i < 15; i++) {
            $('.biaogan_content div').eq(i).html(`<img style="width:100%" src="${logoUrl[i]}">`)
        }
    }
})

$('.aaa').click(function () {
    location.href = ('./pig/pig.html')
})
$('.bbb').click(function () {
    var newWindow = window.open();
    newWindow.location.assign('http://aiot.noworry.com/login?redirect=%2Findex')
})

for(let i = 0;i<2;i++){
    $('.tooa li').eq(i).click(function () { 
        $('.tooa li').css('color', 'black')
        $('.tooa li span').css('display', 'none')
        $('.tooa li').eq(i).css('color', 'green')
        $('.tooa li span').eq(i).css('display', 'block')  
    })  
}


 //新闻页隐藏部分切换
 $('.tab_div2').click(function(){
    location.href = ('../news/news.html')
})