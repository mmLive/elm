function setFontSize(){
 //	根据当前屏幕的宽度动态font-size, 也就是rem的参照物
    // 2倍图
	document.documentElement.style.fontSize = document.documentElement.clientWidth/3.75/2+'px';
	
}
setFontSize();
window.onresize = function(){
	setFontSize();
}
