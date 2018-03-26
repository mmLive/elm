<template>
  
      <router-view></router-view>
  
</template>

<script>

//移动端布局 各种型号自适应尺寸  一倍图 直接除以100  rem
import './assets/js/computedFontSize.js' 
import './assets/css/reset.css'


export default {
  name: 'App',
  data(){
    return{
       
    }
  }
}
</script>

<style>
/* #app{
  height: 100%;
} */

/* VshopInfo.vue */
.yd-btn-primary{
  background-color: #fff !important;
  color: #333;
}
.mystyle{
    display: flex;
    justify-content: center;
    font-size: .22rem;
    background-color:#fff!important;
    color: #333;
    height: .3rem;
    margin-top: .3rem;
}
.mycss{
  height: .2rem!important;
  margin-bottom: -5rem;
}
.act-button  {
    background-color: #fff;
    color: #333;
}
.act-button p {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    color: #333;
}


/* 组件Vshopfoods中样式 */
.yd-scrolltab-item{
    padding: .35rem .15rem;
    line-height: .28rem;
    font-size: .24rem;

}
.yd-scrolltab-title{
    font-size: .24rem;
}
.yd-scrolltab-content-title{
    font-size: .24rem;
    font-weight: 700;
    color: #555;
    display: block;
    padding: 0;
    margin:0;
    line-height:.8rem;
    z-index: 1;
}

.yd-scrolltab-content-title:after {
    border-bottom: none; 
}

.yd-popup-content {
    overflow-y: none;
}

/* Vshoppingcart */
.shoppingcart  .yd-popup-center{
    top: 50%;
    bottom: -18%;
    overflow-y: auto;
}

</style>
