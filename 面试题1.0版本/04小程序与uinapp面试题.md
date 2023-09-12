小程序面试题：
# 1、用过小程序吗？xxx问你问题把你难住了？
用过，有些我忘了，因为做小程序项目的时候，基本上都是去看微信开发者文档。那里面比较详细，框架里面的东西太多了记不住那么多。

# 2、小程序生命周期？

onLoad:当页面页面时触发（接收一个参数），这个参数是路由跳转过来的时候携带的参数，这个参数是对象。
onShow:监听页面显示
onHide:监听页面隐藏
监听用户下拉动作

页面上拉触底事件的处理函数
用户点击右上角分享
监听页面卸载
监听页面初次渲染完成

# 3、小程序跳转
wx.navigateTo():跳转到内页
wx.switchTab()：跳转到tabar页面

# 4、获取数据变量
this.data.变量名
修改数据变量重新赋值的方法
this.setData({变量名:'修改的值'})

bindtap="函数名"
# 阻止事件冒泡：catchtap

data-参数名
会传入到事件对象里 e.currentTarget.dataset.参数名

# 5、wx:if与hidden区别与vue v-if/v-show 区别相同
wx:if判断是否加载,可减轻浏览器的压力,在需要时加载。
hidden是否隐藏，hidden改变的只是display，的显示/隐藏样式

# 6、微信小程序记住下一次登录
	在app全局中获取用户的appid，然后拿着appid，去获取用户信息。使用本地的数据缓存，将获取到的信息缓存起来，在需要的时候取出来，判断缓存中有数据就跳转到首页否则跳转到登陆页面
	
	每次进入小程序，都需要调用登录接口，来检查登录状态，但是只需要打开小程序才需要调用，所以可以把登录接口放在app里面的onLaunch方法里执行。

# 7、小程序支付如何实现？
  1 小程序注册，要以公司的身份去去申请微信公众号及支付功能申请
  2 绑定商户号，并且在小程序中填写合法域 
  3 wx.login获取用户临时登录凭证code，发送到后端服务器换取openId
  	  然后就可以用token去做一些登录判断，没授权的，先让他去授权，再存入缓存，有授权的，直接拿缓存。
  4 在下单时，小程序需要将购买的商品Id，商品数量，以及用户的openId传送到服务器
  5 调用微信支付api，wx.requestPayment()发起微信支付，唤醒支付工作台，进行支付，填写相应的签名等信息
  获取成功的回调即可支付成功

# 8、小程序的发布流程（开发流程）
  注册微信小程序账号
  获取微信小程序的AppID
  去微信公众号配置域名
  创建demo项目
  代码上传
  提交审核
  小程序发布

uniapp面试题
# 1、简单说一下uniapp?
	uni-app是一个使用Vue.js开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、H5、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉）等多个平台。	
# 2、uniapp生命周期？
	uniapp应用的生命周期：
	onLaunch:初始化完成时触发，全局只触发一次
	onshow:当uniapp启动，或从后台进入前台显示
	onHide:当uniapp从前台进入后台
	onError:当uniapp报错时触发

	uniapp页面的生命周期
	onLoad:监听页面加载，参数为上个页面传递的参数，传递的类型为对象
	onReady:监听页面首次渲染完成
	onShow:页面监听显示
	onHide:监听页面隐藏
	onUnload:监听页面卸载
	onPullDownRefresh：监听用户下拉动作，一般用于下拉刷新
	onReachBottom：页面滚动到底部的事件，上拉加载

# 3、uniapp优缺点
	优点:
	a. 一套代码可以生成多端
	b. 学习成本低,语法是vue的,组件是小程序的
	c. 拓展能力强
	d. 使用HBuilderX开发,支持vue语法
	e. 突破了系统对H5条用原生能力的限制
	缺点:
	a. 问世时间短,很多地方不完善
	b. 社区不大
	c. 官方对问题的反馈不及时
	d. 在Android平台上比微信小程序和iOS差
	e. 文件命名受限
# 4、小程序、uni-app中的本地数据存储和接收？
	微信小程序：
	存储：通过wx.setStorage/wx.setStorageSync写数据到缓存
	接收：通过wx.getStorage/wx.getStorageSync读取本地缓存，

	uni-app：
	存储：uni.setStorage({key:“属性名”，data:“值”})
	接收：uni.getStorage({key:“属性名”,success(res){res.data}})

# 5、简述 rpx、px、em、rem、%、vh、vw的区别

	rpx	相当于把屏幕宽度分为750份，1份就是1rpx，100rpx=50px
	px	绝对单位，页面按精确像素展示
	em	相对单位，相对于它的父节点字体进行计算
	rem	相对单位，相对根节点html的字体大小来计算
	%	一般来说就是相对于父元素
	vh	视窗高度，1vh等于视窗高度的1%
	vw	视窗宽度，1vw等于视窗宽度的1%

# 6、js、vue、uni-app、小程序的页面传参方式区别
	1、 js传参
		通过url拼接参数进行传参。
		接收通过location.href
	2、 vue传参
	   vue可以通过标签router-link跳转传参
	   也可以通过事件里的this.$router.push（{}）跳转传参，传参有两种parmas和query
	   接收this.$route.parmas、this.$route.query接收
	3、 小程序传参
	通过跳转路径后面拼接参数来进行跳转传参
# 7、uniapp解决跨端兼容问题？
使用条件编译
	<!-- #ifdef H5 -->
		代码只在h5显示
	<!-- #endif -->

	<!-- #ifdef MP-WEIXIN -->
		代码只在微信小程序显示
	<!-- #endif -->
# 8、uniapp适配刘海屏
  https://www.cnblogs.com/moranjl/p/15739275.html