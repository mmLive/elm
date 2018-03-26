<template>
     <div id="header">
         <header>
           <!--绑定点击事件-->
           <div class='head'>
             <span class='el-icon-location el-icon1'></span>
             <span >东城区北京市政府</span>
             <span class='el-icon-caret-bottom el-icon2'></span>
           </div>
         </header>
          <div class='search-wrapper'>
                <a href="">
                   <svg viewBox="0 0 16 16"><path fill-opacity=".38" d="M14.778 13.732a.739.739 0 1 1-1.056 1.036l-2.515-2.565a.864.864 0 0 1-.01-1.206 4.894 4.894 0 0 0 1.357-3.651c-.126-2.492-2.156-4.52-4.648-4.647a4.911 4.911 0 0 0-5.16 5.163c.126 2.475 2.13 4.496 4.605 4.642.451.026.896-.008 1.326-.1a.739.739 0 0 1 .308 1.446c-.56.12-1.137.164-1.72.13-3.227-.19-5.83-2.815-5.995-6.042a6.39 6.39 0 0 1 6.71-6.715c3.25.165 5.884 2.8 6.05 6.048a6.37 6.37 0 0 1-1.374 4.3l2.12 2.161z"></path></svg>
                   <span>搜索商家、商品名称</span>
                </a>
         </div>
    </div>
</template>
<script>
  
  export default {
   name:'Vheader',
   data(){
       return{

       }
   }

  }
    
</script>
<style scoped>


header {
	height: .89rem;
	width: 100%;
	background: linear-gradient(90deg,#0af,#0085ff);
	color: #fff;
  padding:0.25rem 0.28rem 0;
  box-sizing:border-box;
}
header .head{
     font-size:.34rem;
     font-weight:700;
}

.head .el-icon1{
  font-size:.31rem;
}
.head .el-icon2{
  font-size:.24rem;
}

.search-wrapper{
  height:1.02rem;
  width:100%;
  background: linear-gradient(90deg,#0af,#0085ff);
  padding:.15rem  .28rem;
  box-sizing: border-box;
}
.search-wrapper a{
     width: 6.94rem;
     height: .72rem;
     display: flex;
     background: #fff;
     justify-content: center;
     align-items: center;
}
.search-wrapper a svg{
   width: .32rem;
   height: .32rem;
   margin-right: .1rem;
}
.search-wrapper a  span{
  font-size: .28rem;
  color: rgb(153,153,153);
  font-family: simsun;
}
</style>