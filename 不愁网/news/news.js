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
        console.log(res);

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


        let tab_data_icon = res.data.products;
        let tab_data_icim = res.data.companyInfo
        console.log(tab_data_icon);
        let zim = []//隐藏部分图片
        let productName = []//十块文字
        let productName_s = []//十块文字不顺序##############################
        let zim2 = []//十块图片
        $(tab_data_icon).each(function (i, j) {
            $('tab_div div').html(`<img src="${j.menuIcon}">`)
            productName[i] = j.productName//十块文字
            zim2[i] = j.logoPhotoAddress//十块图片
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
        for (let i = 0; i < 5; i++) {
            $('.eight_h2').eq(i).html(`${productName[i]}`)
            $('.eight_p2').eq(i).html(`${productName[i]}`)
            $('.right_div_1').eq(i).css('background', `url(${zim2[i]})`)
        }
        //右侧栏跳转
        function upto() {
            for (let i = 0; i < 4; i++) {
                $('.right_div_1').eq(i).click(function () {
                    localStorage.setItem('productId', `${res.data.products[i].productId}`)
                    location.href = ('../chanpinjieshao/chanpin.html')
                    console.log('点击的id', ids);
                    console.log(res.data.products[i].productId);


                })
            }
        }
        upto()
    }
})
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
$('.zim_h1').html('公司动态')
$('.zim_h3').html('公司动态')

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
        let news = []//新闻图片
        let newsName = []//标题
        let remark = []//内容
        $(res.rows).each(function (i, j) {
            news[i] = j.newsPic
            newsName[i] = j.newsName
            remark[i] = j.remark
        })
        for (let i = 0; i < 3; i++) {
            $('.leftimg').eq(i).html(`<img style="width:100%" src="${news[i]}">`)
            $('.zim').eq(i).html(`${newsName[i]}<br>`)
            $('.zim1').eq(i).html(`${remark[i]}`)
        }
        console.log(news);

        $('.tsp2').click(function () {
            $('.tsp2').css('color', 'green')
            $('.tsp3').css('color', 'black')
            $('.tsp4').css('color', 'black')
            for (let i = 0; i <= 2; i++) {
                $('.leftimg').eq(i).html(`<img style="width:100%" src="${news[i]}">`)
                $('.zim').eq(i).html(`${newsName[i]}<br>`)
                $('.zim1').eq(i).html(`${remark[i]}`)
            }

        })
        $('.tsp3').click(function () {
            $('.tsp2').css('color', 'black')
            $('.tsp3').css('color', 'green')
            $('.tsp4').css('color', 'black')
            let vim = 0
            for (let i = 2; i >= 0; i--) {
                $('.leftimg').eq(vim).html(`<img style="width:100%" src="${news[i]}">`)
                $('.zim').eq(vim).html(`${newsName[i]}<br>`)
                $('.zim1').eq(vim).html(`${remark[i]}`)
                vim++
            }
        })
        //新闻页隐藏部分切换
        $('.tab_div2').eq(1).click(function(){
            for (let i = 0; i <= 2; i++) {
                $('.leftimg').eq(i).html(`<img style="width:100%" src="${news[i]}">`)
                $('.zim').eq(i).html(`${newsName[i]}<br>`)
                $('.zim1').eq(i).html(`${remark[i]}`)
            }
        })
        $('.tab_div2').eq(0).click(function(){
            let vim = 0
            for (let i = 2; i >= 0; i--) {
                $('.leftimg').eq(vim).html(`<img style="width:100%" src="${news[i]}">`)
                $('.zim').eq(vim).html(`${newsName[i]}<br>`)
                $('.zim1').eq(vim).html(`${remark[i]}`)
                vim++
            }
        })
        

        for (let i = 0; i < 3; i++) {
            $('.centers .left_div .left_div_1').eq(i).click(function () {
                console.log(res.rows[i].newsId);
                localStorage.setItem('newsId', `${res.rows[i].newsId}`)
                id = localStorage.getItem('newsId')
                console.log(id);
                shownews()
            })
        }
    }
})

function getnewsid() {
    id = localStorage.getItem('newsId')
    console.log(id);
    shownews()
}
let newbool = localStorage.getItem('newsbool')
if(newbool == 'true'){
    getnewsid()
    localStorage.removeItem('newsbool')
}

//新闻页面根据id选择跳转方法
function shownews() {
    $.ajax({
        type: 'get',
        url: '/stage-api/website/getNewDetails',
        data: {
            newsId: id
            // newsId:11
        },
        success: function (res) {
            console.log(res);

            $('.centers').html(`${res.data.newsIntroduce}`)
        }
    })
}

