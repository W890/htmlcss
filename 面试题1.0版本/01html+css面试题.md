# 1 说一下那些是块级元素？那些是行级元素？那些是行块级元素？
	①块级元素：独占一行，并且可以设计宽高
		div : 布局容器
		h1~h6：h1标题最大，h6标题最小
		p标签：段落标签
		table：表格
		form：表单容器
		ul li :无需列表
		
		ol li ：有序列表
		dl dt dd：自定义列表
		hr标签:水平线

	②行块级元素：在同一行显示，并且可以设置宽高
		img：图片标签
		input：表单元素

	③行级元素：在同一行显示，不可以设置宽高
		a：超链接
		span:修饰文本标签
		sub：下标
		sup：上标
		label：行元素
		
		strong或者b标签：字体加粗
		em或者i：字体倾斜
		ins或者u：下划线
		del或者s：删除线
		

# 2、面试题：src与href区别？
      href是超文本引用 表示文件的录入地址，在link，a标签上使用。href的内容是与页面有关联是引用。
      src表示来源地址，在img，script标签上使用。src的内容是引用网络地址

# 3、常用的选择器有那些？id与class的区别，并说明css的优先级
	常用的选择器有:id选择器，类名选择器，标签选择器，通配符选择器，序选择器，后代选择器，子代选择器，交集选择器，并集选择器，下一个兄弟选择器

	id与class的区别：id是唯一的，不能重复使用，一个页面只能有一个相同名称的id，并且同一个标签不可以有多个名字，多个标签可以有不相同的名称，id是给js使用
 	类名选择器可以重复使用，多个不同的标签，可以有相同的类名，并且一个标签允许多个类名存在

 	谁离得近听谁的，谁离着标签近谁的优先级高，优先级高的会覆盖优先级低的属性
		*行内式>内嵌式>链路式
		
		相同类型的选择器
		!important>谁的层级越深我听谁的>前面会替换后面的

		不同选择器中的优先级：优先级高的替换优先级低的		  	
		 !important>id选择器 >类名选择器 > 标签选择器             

# 4、css样式那些属性是可以被继承的？
	字体颜色可以继承
	以font的开头的可以继承，字体大小及加粗
	以line-开头的属性是 行高
	以text-开头的属性  居中对齐
# 5、什么是盒模型，盒模型的组成？
	从外到内：margin外边距，border边框，padding内边距，内容宽高

# 6、清除浮动的方法有那些？
第一种方法：直接给父级添加高度
第二种方法：隔墙法，但是不推荐使用，产生多余代码
第三种方法：超出隐藏，overflow:hidden
第四种方法：公共类，伪类清楚。
	类名:after{
			伪类元素内容为空
			content:"";
			转为块元素
			display:block;
			清除左右浮动
			clear:both;
	}

# 7、div中不设高度，在里面添加一张图片，box高度会自动撑开，但是div会有2-4px像素的误差。怎么解决？行块元素有2-4像素的误差，什么原因造成的？怎么解决？

	行块元素垂直对齐基准导致父级产生2-4像素误差，行块元素不是绝对垂直居中；
	
	方法1：改变行块元素的垂直居中方式
	方法2：改变他的display转为块元素

# 8、两个宽度为50%并且边框为1px的div并排显示
	将外边框改为内边框，box-sizing:border-box;

# 9、说出三种实现水平垂直居中的方式？
	方法1：
		设置绝对定位四个属性为零，matgin:auto
	方法2:
		left:50%;margin-left:负数宽度的一半
		top:50%;margin-top:负数高度的一般
	方法3:
		设置绝对定位，
		left:50%;top:50%;
		transform:translate(-50%,-50%);
	方法4：
		设置display: flex;
		/*水平居中*/
		justify-content: center;
		/*垂直居中*/
		align-items: center;

# 10、说一下定位有哪几种？有什么区别？
	相对定位、绝对定位、固定定位
	相对定位参考点：自己 不脱离文档流,原来位置会被保留
	绝对定位参考点：父辈 脱离文档流,原来位置不被保留
	固定定位参考点：浏览器 脱离文档流,原来位置不被保留

# 11、css画一个三角形
代码:	
	width: 0;
	height: 0;
	border: 20px solid;
	border-color:rgba(0,0,0,0) rgba(0,0,0,0) pink rgba(0,0,0,0);
设置宽高为0;然后设置边框为20px，边框类型为solid；上右下左四个边框的颜色
设置其中三个为透明，一个不透明，即可实现三角形

# 12、说说你对行高的理解line-height？
	行高是指行与行之间的距离
	主要作用单行文本居中:把高度的值设置为line-height值，可以实现单行文本居中，其实也可以把高度删掉。多行文本居中:需要配合padding使用

# 13、你是怎么处理浏览器的兼容性?
		1、书写样式的时候加上浏览器的前缀
		2、降级处理（当前写法不支持，那就换一个相对来说比较low的写法）
		3、用js逻辑处理

		-moz-	火狐的前缀
		-webkit- 谷歌的前缀
		-o-		 opera
		-ms-	ie浏览器

# 14、h5新特性？
	1.h5新语义元素
	2.新增表单功能
	3.本地存储
	4.SVG
	5.canvas
	6.地理定位

# 15、css3新特性？
	新增表单，属性，相邻兄弟等选择器
	新增背景渐变、盒阴影、边框、过渡、平移、旋转、动画、3d等
	
# 16、什么是页面的回流和重绘？如何避免页面重排和重绘带来的性能问题
回流：当前元素改变了自身的宽高，布局，显示或者隐藏，或者元素内容结构发生了变化，需要重新构建构建
页面的时候就是回流
重绘：重绘是在一个元素的外观被改变，但是没有改变页面的布局的情况下，比如改变了背景颜色，visibilit。

解决措施：
	尽量减少对 DOM 的操作，特别是对频繁操作的元素。
	避免使用递归，尽量使用循环。
	使用缓存，尽量避免重复计算。
	使用 CSS3 的动画和过渡，避免使用 JavaScript 来控制动画。
	尽量使用相对定位，避免使用绝对定位。
	尽量使用轻量级的元素，如 div 和 span，避免使用重量级的元素，如 table 和 form。
	当你要在 JavaScript 中操作 DOM 时，应该尽量避免使用过多的 DOM 操作，特别是对频繁操作的元素。这是因为，每次 DOM 操作都会导致浏览器进行重排和重绘，这会消耗大量的 CPU 资源，导致页面性能下降。


# 17、移动端点击事件会有多少秒的延时?什么原因造成的?如何解决?
为了对早期普通网页更好的体验，iphone设计了双击放大显示的功能--这就是300ms延迟的来源：如果用户一次点击后300ms内没有其他操作，则认为是个单击行为；否则为双击放大行为。

设置不能缩放：user-scalable=no， 不能缩放就不会有双击缩放操作。
设置显示宽度：width=device-width。

<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">

# 18、移动端0.5像素如何实现?
	方法1：给目标元素添加一个伪元素before或者after，并设置绝对定位，给伪元素添上1px的边框
          设置伪元素的宽高为目标元素的2倍，缩小0.5倍，使用border-box把border包进来
    方法2：给元素添加背景渐变，设置元素的50%为颜色，50%为透明，高度为1px