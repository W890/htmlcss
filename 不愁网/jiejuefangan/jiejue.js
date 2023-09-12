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

        for (let i = 0; i < 8; i++) {
            $('.tab_div').click(function () {
                localStorage.setItem('productId', `${res.data.products[i].productId}`)
                id = localStorage.getItem('productId')
                location.href = ('../chanpinjieshao/chanpin.html?id=id')
                bbas()
            })
        }

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

$('.zim_h1').html('解决方案')
$('.zim_h3').html('解决方案')

$.ajax({
    type: 'get',
    url: '/stage-api/website/getHomePageInfo',
    success: function (res) {
        console.log(res);
        let solutionName = []//zimp1
        let solutionPhotoAddress = []//img
        let remark = []//zimp2
        $(res.data.solutions).each(function (i, j) {
            solutionPhotoAddress[i] = j.solutionPhotoAddress
            solutionName[i] = j.solutionName
            remark[i] = j.remark
        })
        console.log(remark);
        for (let i = 0; i < 3; i++) {
            $('.zim1').eq(i).html(`<img style="width:100%" src="${solutionPhotoAddress[i]}">`)
            $('.zimp1').eq(i).html(`${solutionName[i]}`)
            $('.zimp2').eq(i).html(`${remark[i]}`)
        }
        $('.tsp2').click(function () {
            $('.tsp2').css('color', 'green')
            $('.tsp3').css('color', 'black')
            $('.tsp4').css('color', 'black')
            for (let i = 0; i < 3; i++) {
                $('.zim1').eq(i).html(`<img style="width:100%" src="${solutionPhotoAddress[i]}">`)
                $('.zimp1').eq(i).html(`${solutionName[i]}`)
                $('.zimp2').eq(i).html(`${remark[i]}`)
            }

        })
        $('.tsp3').click(function () {
            $('.tsp2').css('color', 'black')
            $('.tsp3').css('color', 'green')
            $('.tsp4').css('color', 'black')
            let vim = 0
            for (let i = 2; i < 5; i++) {
                $('.zim1').eq(vim).html(`<img style="width:100%" src="${solutionPhotoAddress[i]}">`)
                $('.zimp1').eq(vim).html(`${solutionName[i]}`)
                $('.zimp2').eq(vim).html(`${remark[i]}`)
                vim++
            }

        })

        for (let i = 0; i < 3; i++) {
            $('.box_zim').eq(i).click(function () {
                console.log(res.data.solutions[i].solutionId);
                localStorage.setItem('solutionId', `${res.data.solutions[i].solutionId}`)
                id = localStorage.getItem('solutionId')
                console.log(id);
                jiejues()
            })
        }
    }
})


function jiejues(){
    $.ajax({
        type:'get',
        url:'/stage-api/website/getSolutionDetails',
        data:{
            solutionId:id
        },
        success:function(res){
            console.log(res);

            $(res.data.companies).each(function (i, j) {
                //跳转后右侧块
                $('.neirong_content').html('')
                $(` <div class="content_div2">
                        <div class="div2_left">
                            <div class="div2_left_1">
                                <img style="width:101px;height:57px" src="${j.companyLogoPhoto}">
                            </div>
                            <div class="div2_left_2">
                                <p>${j.caseCompanyName}</p>
                                <span style="font-size: 14px;">2021-10-18</span>
                            </div>
                        </div> 
                    </div>`).appendTo($('.neirong_content'))
            })
            //跳转后左侧块
            $(` <div class="content_div1">
                    <div>${res.data.productSolution.solutionIntroduce}</div>
                </div>`).appendTo($('.neirong_content'))
        }
    })
}

//新闻页隐藏部分切换
$('.tab_div2').click(function(){
    location.href = ('../news/news.html')
})