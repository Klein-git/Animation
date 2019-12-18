// JavaScript Document
//打开浏览器时运行
window.onload = function () {
	wateFall();
}
//改变窗口大小时运行
window.onresize = function () {
	if ($(document).width() > 1100) {//浏览器宽度大于840px时执行
		wateFall()
	};
}

function wateFall() {
	// 获取所有盒子
	var boxs = $('.box');
	// 获取每个盒子的宽度
	var w = $(boxs).eq(0).outerWidth(true);
	// 获取列数
	var cols = Math.floor($(window).width() / w);
	for (var i = 0; i < cols; i++) {
		boxs[i].style.top = 0;
		boxs[i].style.left = i * w + 'px'
	}

	// 设置mian宽度并居中
	$('#main').css({
		'width': w * cols + 'px',
		'margin': '0 auto'
	})
	// 创建数组
	var hArr = [];
	$.each(boxs, function (index, value) {//获取第一行盒子
		var h = $(value).outerHeight(true);
		if (index < cols) {//拿到第一行盒子
			hArr[index] = h
		} else {//其他的盒子
			//获取最矮的盒子
			var minh = Math.min.apply(null, hArr);
			console.log(minh)
			//获取最矮盒子的位置
			var minhIndex = $.inArray(minh, hArr);
			console.log(minhIndex)
			$(value).css({
				'position': 'absolute',
				'top': minh + 'px',
				'left': minhIndex * w + 'px',
			})
			//更新数组中最矮的高度
			hArr[minhIndex] += h
		}
	})
}