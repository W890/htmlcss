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
        function upto(){
            for(let i = 0;i<8;i++){
                $('.tab_div').eq(i).click(function(){
                    localStorage.setItem('productId', `${res.data.products[i].productId}`)
                    // let ids = localStorage.getItem('productId')
                    location.href = ('../chanpinjieshao/chanpin.html')
                    console.log('点击的id',ids);
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
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
$('.zim_h1').html('案例展示 ')
$('.zim_h3').html('案例展示')


$.ajax({
    // 请求方式 get post put
    type: 'get',
    url: '/stage-api/website/getAllCaseCompany',
    data: {
        pageNum:1,
        pageSize:6
    },
    // 成功之后的操作
    success: function (res) {
        console.log(res);
        let caseCompanyName = []//anlip1
        let companyLogoPhoto = []//img
        let remark = []//anlip2
        $(res.rows).each(function(i,j){
            companyLogoPhoto[i] = j.companyLogoPhoto
            caseCompanyName[i] = j.caseCompanyName
            remark[i] = j.remark
        })
        console.log(companyLogoPhoto);
        for(let i = 0;i<6;i++){
            $('.anli_div').eq(i).html(`<img style="width:90%;
            margin-top:10px;margin-left:20px    " src="${companyLogoPhoto[i]}">`)
            $('.anlip1').eq(i).html(`${caseCompanyName[i]}`)
            $('.anlip2').eq(i).html(`${remark[i]}`)
        }
        $('.tsp2').click(function () {
            $('.tsp2').css('color', 'green')
            $('.tsp3').css('color', 'black')
            $('.tsp4').css('color', 'black')
            for(let i = 0;i<6;i++){
                $('.anli_div').eq(i).html(`<img style="width:90%;
                margin-top:10px;margin-left:20px    " src="${companyLogoPhoto[i]}">`)
                $('.anlip1').eq(i).html(`${caseCompanyName[i]}`)
                $('.anlip2').eq(i).html(`${remark[i]}`)
            }
        })
        //判断所点击盒子的id
        for (let i = 0; i < 6; i++) {
            $('.anli_four').eq(i).click(function () {
                console.log(res.rows[i].caseCompanyId);
                localStorage.setItem('caseCompanyId', `${res.rows[i].caseCompanyId}`)
                id = localStorage.getItem('caseCompanyId')
                console.log(id);
                anlishow()
            })
        }
    }
})
//外部跳转函数
function getanliid() {
    id = localStorage.getItem('caseCompanyId')
    console.log(id);
    anlishow()
}
//外部页面跳转判断是否执行
let anlibool = localStorage.getItem('anlibool')
if(anlibool == 'true'){
    getanliid()
    localStorage.removeItem('anlibool')
}

//案例展示跳转
function anlishow(){
    $.ajax({
        type:'get',
        url:'/stage-api/website/getCompanyDetails',
        data:{
            caseCompanyId:id
        },
        success:function(res){
            console.log(res);
            $('.center').html(`${res.data.caseCompanyIntroduce}`)
        }
    })
}

//新闻页隐藏部分切换
$('.tab_div2').click(function(){
    location.href = ('../news/news.html')
})
