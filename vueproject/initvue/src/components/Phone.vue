<template id="temp">
    <div>
        <van-button type="primary">主要按钮</van-button>
        <van-cell is-link @click="showPopup">展示弹出层</van-cell>
        <van-popup position="bottom" v-model="show">
            <van-picker title="标题" value-key="value" show-toolbar :columns="list" @confirm="onConfirm" @cancel="onCancel"
                @change="onChange" />
        </van-popup>
    </div>
</template>

<script>
export default {
    name: 'Phone',
    data() {
        return {
            show: false,

            columns: [
                {
                    text: '浙江',
                    children: [
                        {
                            text: '杭州',
                            children: [{ text: '西湖区' }, { text: '余杭区' }],
                        },
                        {
                            text: '温州',
                            children: [{ text: '鹿城区' }, { text: '瓯海区' }],
                        },
                    ],
                },
                {
                    text: '福建',
                    children: [
                        {
                            text: '福州',
                            children: [{ text: '鼓楼区' }, { text: '台江区' }],
                        },
                        {
                            text: '厦门',
                            children: [{ text: '思明区' }, { text: '海沧区' }],
                        },
                    ],
                },
            ],
            list: [],
            weather:{}
        };

    },

    methods: {
        showPopup() {
            this.show = true
        },
        // 选中操作
        onConfirm(v) {
            console.log(v);
            this.show = false
            // 处理数据
            let str = v[v.length - 1].replace(/省|市|县|区|自治区|特别行政区|壮族|回族|维吾尔|盟/g, "");
            console.log(str);
            this.getweather(str)
        },
        onCancel() {
            this.show = false
        },
        onChange(e) {
            console.log(e);
        },
        // 获取天气
    async getweather(city) {
        let res =await this.$http.get('/list?city=' + city)
        let { data: { result } } = res
        this.weatherList = result
        console.log(this.weatherList);
        localStorage.setItem('weather', JSON.stringify(this.weatherList))
        console.log(res);
    },
    },
    
    created() {
        this.$http.get('/citylist').then(res => {
            console.log(res.data.citydata);
            this.list = res.data.citydata
        })
    }
}
</script>