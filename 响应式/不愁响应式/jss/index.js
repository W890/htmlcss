/*
	ajax({
		// 传递请求方式
		method: "get",
		// 传递接口地址
		url: "http://121.196.8.145:10000//test/getfundAll",
		// 传递参数
		data: {
			pageNum: bar,
		},
		// 请求头
		// contentType: "application/x-www-form-urlencoded",
		// 同步/异步
		aysn: true,
		// 回调
		success: function (res) {
			var obj = JSON.parse(res);
			console.log(obj)
		},
		error: function (res) {
			
		}
	})
	函数封装注意:
		1.是否会被多次使用 yes
		2.会出现哪些不确定的值
			method		请求方式
			url			请求地址
			data		传递参数
			contentType	请求头信息
			aysn		同步/异步
			success		成功
			error		失败
*/
function ajax({method, url, data, contentType, aysn, success, error}) {
	// console.log(method)
	// console.log(url)
	// console.log(querystring(data))
	// console.log(contentType)
	// console.log(aysn)
	// console.log(success)
	// console.log(error)

	// 1 创建ajax请求对象 大多数浏览器
	var xhr=new XMLHttpRequest()
	/*
		{
			tel:123,
			pa:123
		}
		querystring()封装的方法转成了tel=123&pa=123
	*/ 
	// 将参数转成字符串格式
	data=querystring(data)
	// 判断请求方式是不是get 如果是get并且传进来的对象不能为空的时候拼接口地址拼接问号
	// url等价于http://121.196.8.145:10000/test/login
	// data等价于tel=123&pa=123
	// 结果：http://121.196.8.145:10000/test/login?tel=123&pa=123

	// Object.keys(data).length对象是0那么就是false,如果对象不是空那么就是true
	// var d=data
	// if(method=="get"&&Object.keys(d).length){
	// 	url+="?"+data
	// }
	// 判断字符串是不是为空

	if(method=="get"&&data.length){
		url+="?"+data
	}
	// 2 创建http请求
	// 如果请求方式是get则http://121.196.8.145:10000/test/login?tel=123&pa=123
	// 默认不是get则直接赋值：http://121.196.8.145:10000/test/login
	xhr.open(method,url,aysn)
	
	// 设置请求头 如果有值就传递请求头
	if(contentType){
		xhr.setRequestHeader("Content-type",contentType)
	}
	// 3 发送请求
	// 判断是不是get请求 如果是get直接xhr.send()
	if(method=="get"){
		xhr.send()
	}else{
		xhr.send(data)
	}
	// 4 设置监听请求变化函数 返回数据
	xhr.onreadystatechange=function () {
		// 请求成功
		if(xhr.readyState===4&&xhr.status===200){
			// 数据请求成功之后 返回json数据 json返回的是字符串 需要先转成json对象 然后进行操作
			// var arr=JSON.parse(xhr.responseText)
			// 请求成功之后调用success()函数并且把数据传递过去
			if(success){
				success(xhr.responseText)
			}
		}else{
			// 请求失败
			if(error){
				error(xhr.responseText)
			}
		}
	}
}
function querystring(obj){
	var str=""
	for(var i in obj){
		// i属性值 
		// obj[i]对象取值方式 类似于obj.name

		// obj[tel] 等价于obj.tel
		// obj[pa] 等价于obj.pa

		// console.log(i,obj[i])
		//   属性=值&
		//   i =obj[tel]&
		//   i =obj[pa]&
		str+=i+"="+obj[i]+"&"
	}
	// tel=123456&pa=789& 删掉最后一个
	// console.log(str.length,str.length-1)
	return str.substring(0,str.length-1)
}