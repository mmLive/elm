<template>
    <!-- 具体商家详情页面 -->
    <div id="shopInfo">
          <div class="shop-head">
              <a  @click.stop='dbackClick()' class="el-icon-arrow-left"></a>
              <img :src="shop.shop_img" alt="">
          </div>
          <div class="info">
                <yd-button size="large" type="primary" @click.native="show1 = true">
                          <h1><span>品牌</span> <b>{{shop.shop_name}}</b><i class="el-icon-caret-right"></i></h1>
                          <p>
                                <span>{{shop.shop_score}}</span><span>月售{{shop.shop_monthly_sales}}单</span>
                                <span>{{shop.shop_distance_way}}</span>
                                <span>约{{shop.shop_time}}分钟</span>
                                <span>距离{{shop.shop_distance}}km</span>
                         </p>
                         <p>欢迎光临，用餐高峰期请提前下单，谢谢</p>
                </yd-button>
                 <yd-popup  v-model="show1" position="center" width="90%">
                     <div class="popup">
                            <h2> <span>品牌</span><b>{{shop.shop_name}}</b></h2>
                            <div>
                                 <span>{{shop.shop_score}}</span><span>月售{{shop.shop_monthly_sales}}单</span>
                                 <span>{{shop.shop_distance_way}}</span>
                                 <span>约{{shop.shop_time}}分钟</span>
                                 <span>距离{{shop.shop_distance}}km</span>
                              </div>
                              <div>欢迎光临，用餐高峰期请提前下单，谢谢</div>
                     </div>       
                </yd-popup>
          </div>
            <div class="act">
                <yd-button class="mystyle" size="large" type="warning" @click.native="show2 = true"><b>首单</b><span>新用户下单立减17元(不与其他活动同享)</span> <i class="el-icon-caret-bottom"></i></yd-button>
                <yd-popup class='mycss' v-model="show2" position="bottom" height="25%">
                   <yd-button class="act-button" type="warning" style="margin: 20px;" @click.native="show2 = false">
                        <p >
                            <b >首</b>
                            <span>新用户下单立减20元</span>
                        </p> 
                        <p>
                            <b >折</b> 
                            <span>【七折】超值特价商品</span>
                        </p>
                        <p>
                            <b>减</b>
                            <span>满30减15，满60减30</span>
                        </p>
                     </yd-button>
                </yd-popup>
            </div>
            <p class="red">
                <!-- 后 可以使用YDUI插件进行弹出 -->
                <span>6元无门槛红包 &nbsp; &nbsp;领取：{{shop.shop_name}}</span>
            </p>
             <!--选项卡  点餐 评价 商家  -->    
          <yd-tab>
                <yd-tab-panel  label="点餐">
                    <Vshopfoods></Vshopfoods>
                </yd-tab-panel>
                <yd-tab-panel class='img-wrap' label="评价">
                      <img src="../../assets/img/pingjia.jpg" alt="">
                </yd-tab-panel>
                <yd-tab-panel class='img-wrap' label="商家">
                      <img src="../../assets/img/shangjia.png" alt="">
                </yd-tab-panel>
          </yd-tab>
    </div>

</template>
<script>
  import Vshopfoods from './Vshopfoods'
  import {mapActions} from 'vuex'

export default{
     name:'VshopInfo',
     data(){
         return{   
              show1: false,
              show2:false
         }
     },
     created(){
        // console.log(this.$route.params.id)
     },
    mounted(){
          // 获取当前商家信息和其所有的食品
          this.getoneshop()
    },
     methods:{
        // ...mapActions( 
        //    ['getoneshop']
        //  ), 
        getoneshop(){
             this.$store.dispatch('getoneshop',this.$route.params.id)
        },
        dbackClick(){
             this.$router.go(-1)
          },
     },
     computed:{    
        shop(){
           // return this.$store.state.index.shop    //obj
             let s= this.$store.state.index.shop 
             if(s.length!=0){
                  sessionStorage.shopObj=JSON.stringify(s);
                  return this.$store.state.index.shop  
             }
             if (sessionStorage.shopObj == null) {
                 return this.$store.state.index.shop;
            } 
            else {
               return $.parseJSON(sessionStorage.shopObj)
            }
          }
        // foods(){
        //     return this.$store.state.index.foods  //json 对象[]
        // }
         
     },
     components:{
         Vshopfoods
     }
}
</script>
<style  scoped>
#shopInfo{
     height: 100%;
     background-color: #fff;
}
  .shop-head{
    width: 100%;
    height: 1.36rem;
     background-image: linear-gradient(90deg,#c3826f,#c47a56);
    position: relative;

}
  .shop-head img{
       width: 1.3rem;
      height: 1.3rem;
      position: absolute;
      left:42%;
      top: .44rem;
  }
.shop-head a{
    color: #fff;
    font-size: .44rem;
    font-weight: 700;
    display: inline-block;
    position: absolute;
    left: .25rem;
    top: .44rem;
    z-index: 1;
}
.info{
      margin-top: .1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  
}
.info h1 {
    display: flex;
    justify-content: center;
}
.info h1 span{ 
    color: #6a3709;
    font-weight: 700;
    font-size: .23rem;
    background-image: linear-gradient(90deg,#fff100,#ffe339);
    padding: .08rem;
    margin-right: .1rem;
    text-align: center;
}
.info h1 b{
    max-width: 5.6rem;
    text-align: left;
    font-size: .41rem;
    line-height: .49rem;
    font-weight: 700;
    overflow: hidden;
   text-overflow: ellipsis;
    white-space: nowrap;
}
.info h1 i{
    margin-top: .1rem;
}
.info p:first-of-type span{
    font-size: .22rem;
    line-height: .26rem;
    color: #333;
    padding-right: .1rem;
     white-space: nowrap;
}
.info p:nth-of-type(2){
     font-size: .22rem;
     line-height: .26rem;
     color: #999;
     margin-top: .1rem;
}
.act{
    margin: .2rem 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    /* padding-top: .3rem;  */
}
.act b{
      margin:0  .1rem;
     display: inline-block;
     color: #fff;
     background: #70bc46;
     height: .28rem;
     width: .28rem;
     text-align: center;
}
.red {
     margin-top: .1rem;
     display: flex;
    flex-direction: row;
    justify-content: center; 
    margin-bottom: .1rem;
}
.red span{
    color: #594519;
    border: 1px solid #f7eebb;
    background: #fff8d7;
}
.img-wrap img{
    width: 100%;
    height: 100%;
}


 .popup{
    padding:.2rem;
}

 .popup h2 {
     display: flex;
    justify-content: center;
 }
 .popup h2 span{ 
    color: #6a3709;
    font-weight: 700;
    font-size: .2rem;
    height: .4rem;
    background-image: linear-gradient(90deg,#fff100,#ffe339);
    padding: .08rem;
    margin-right: .1rem;
    text-align: center;
}
.popup h2 b{
    width: 5.6rem;
    text-align: center;
    font-size: .41rem;
    line-height: .5rem;
    font-weight: 700;  
}
.popup div{
    display: flex;
    justify-content: space-around;
}
.popup div span{
     font-size: .3rem;
    line-height: .5rem;
    font-weight: 700; 
        color: #333; 
        margin: .3rem 0;
        
}
</style>
