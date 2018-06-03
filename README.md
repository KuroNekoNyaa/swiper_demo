# swiper_demo
自己使用了常用的swiper功能  附带了swiper官网给的案例
### swiper的scrollbar插件使用
额外需要引入一个js 和css
```
    	<link rel="stylesheet" type="text/css" href="js/swiper/idangerous.swiper.scrollbar-2.4.1.css">

	<script type="text/javascript" src="js/swiper/idangerous.swiper.scrollbar-2.4.1.min.js"></script>

```
<br>

需要额外为滚动条创建一个div ```<div class="swiper-scrollbar"></div>``` <br>
而且要给滚动条添加样式 <br>



swiper的css中.swiper-container自带margin：0 auto； 所以不用加这个也会居中<br>
同理.swiper-scrollbar也自带圆角<br>

#### 关于tab
```
<div class="tabs">
    <a href="" class="active">首页</a>
    <a href="">发现</a>
    <a href="">你的</a>
    <a href="">世界</a>
</div>

```

实现在同一行 两种做法<br>
第一种: 让a float：left ,但是有可能造成父容器塌陷，父容器overflow：hidden 清除浮动；<br>
第二种： 直接设置a display:inline-block；但是有可能出现不在一行，由于行内元素的有空白节点，去除空白节点让父元素font-size设为0<br>


### 实现四个四个图片轮播
需要中间有空格：<br>
每张图宽300px，那么如果需要50px的空白间距，那么设置swiper-container为1400px 四张图片平分  每张的div有350px 那么就会有50px的间距<br>


### tips：        autoplayDisableOnInteraction : false //解决点击pagination后不会自动播放
