/*
pagination(".box1 .pagingIndex",".box1 .left",".box1 .right",6,function(row){
	console.log(row,"索引")
})
pagination(".box2 .pagingIndex",".box2 .left",".box2 .right",10,function(row){
	console.log(row,"索引")
})
*/ 
function pagination(pagingIndex,pre,next,pageNum,succes) {
	// 定义一共几页的页数
	var pages=pageNum
	// 接收box1或者box2 span
	var dom=pagingIndex
	// 获取盒子,重新赋值了
	var pagingIndex=document.querySelector(pagingIndex)
	// 获取上一页
	var oLeft=document.querySelector(pre)
	// 获取下一页
	var oRight=document.querySelector(next)
	// 定义当前页数,当前第几页
	var index=null

	// 遍历循环页数
	for(var i=0;i<pages;i++){
		// 循环追加span页码按钮
		pagingIndex.innerHTML+=`
			<span>${i+1}</span>
		`
		// 获取所有的页码
		// 获取box1下面的还是box2...box下面的
		// 获取box1 box2子节点
		var oSpan=pagingIndex.children
		// 给第一个添加类名
		oSpan[0].className="active"

		// 遍历所有的页码按钮
		for(var j=0;j<oSpan.length;j++){
			// 给每一个按钮添加点击事件
			oSpan[j].onclick=function () {
				// 默认清空所有的类名
				for(var k=0;k<oSpan.length;k++){
					oSpan[k].className=""
				}
				// 给当前点击的添加类名
				this.className="active"
				// 获取当前点击的页数
				// index=document.querySelector(".pagingIndex span.active")
				index=this.innerText
				succes(index)
			}
		}
	}
	// 点击上一页或者是下一页的时候
	oRight.onclick=oLeft.onclick=function(){
		// console.log(this.innerText)
		// 如果当前点击的按钮的内容是上一页
		if(this.innerText=="上一页"){
			// dom等价于.box1 .pagingIndex span.activ
			// dom等价于.box2 .pagingIndex span.activ
			// 获取传进来的那个div下面span
			var spanActive=document.querySelector(`${dom} span.active`)
			// previousElementSibling：获取上一个兄弟节点
			// console.log(spanActive.previousElementSibling)
			if(spanActive.previousElementSibling==null){
				alert("到头了")
			}else{
				// 没有到头,找到具有active的span元素的上一个兄弟节点，执行一下点击事件
				// oSpan[j].onclick=function ()
				spanActive.previousElementSibling.onclick()
			}
		}else{
			// 否则内容不是上一页，那就是下一页
			// 获取当前页码，当前是那一页
			var spanActive=document.querySelector(`${dom} span.active`)
			// nextElementSibling：获取下一个兄弟节点
			// console.log(spanActive.nextElementSibling)
			if(spanActive.nextElementSibling==null){
				alert("到结尾了")
			}else{
				// 没有到头,找到具有active的span元素的下一个兄弟节点，执行一下点击事件
				// oSpan[j].onclick=function ()
				spanActive.nextElementSibling.onclick()
			}
		}
	}
}