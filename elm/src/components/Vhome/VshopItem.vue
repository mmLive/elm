<template>
<div id="shopItem">
      <!-- <router-link :to="{path:'/shopInfo',query: {id:shopId }}" > -->
      
        <div class="sItem" v-for="(item,index) in allshops" :key="index" @click="ItemHandler(item.shop_id)">  
        
                <div class="wrap">
                    <img :src="item.shop_img" alt="">
                    <div class="shop-info">
                        <h3>{{item.shop_name}}</h3>
                        <section>
                            <span>
                                <el-rate class="size"
                                v-model="item.shop_score"
                                disabled
                                show-score
                                text-color="#666"
                                score-template="{value}">
                            </el-rate>
                            </span>
                            <span>月销{{item.shop_monthly_sales}}单</span>
                            <span>{{item.shop_distance_way}}</span>
                        </section>
                        <div class="flex">
                            <div class="left">
                                <span>￥{{item.shop_start_price}}起送 &nbsp;|</span>
                            <span>&nbsp;配送费￥{{item.shop_distribution_price}}</span>
                            </div>
                            <div class="right">
                                <span>{{item.shop_distance}}km &nbsp;|</span>
                            <span>&nbsp;{{item.shop_time}}分钟</span>
                            </div>
                        </div>                   
                    </div>        
                </div>
                <svg viewBox="0 0 280 6" ><path fill="none" fill-rule="evenodd" stroke="#CCC" stroke-dasharray="1" stroke-width=".5" d="M0 .25L280 0"></path></svg>
                <div class="activity">
                    <div class="act">
                        <b class="shou">首</b>
                        <span>新用户下单立减20元</span>
                    </div> 
                    <div class="act">
                        <b class="zhe">折</b> 
                        <span>【七折】超值特价商品</span>
                    </div>
                    <div class="act">
                        <b class="jian">减</b>
                        <span>满30减15，满60减30</span>
                    </div>
                    <span class="huodong"  @click="actClick">3个活动<i :class="actCom"></i> </span>

                </div>
        </div>
        
</div>
</template>
<script>
import $ from 'jquery'

import {mapActions} from 'vuex'

export default{
     name:'VshopItem',
     data(){
         return{
                 className:'el-icon-caret-bottom',
                 flag:1,
         }
     },
     methods:{
         actClick(){            
             if(this.flag){
                 this.className = 'el-icon-caret-top'
                 this.flag = 0;  
             }
             else{
                  this.className = 'el-icon-caret-bottom'
                   this.flag = 1;
             }
         },
        ...mapActions(
            ['getall']  
          ),
        ItemHandler(id){
            // console.log(id)
            // this.$store.dispatch('getoneshop',id)   
            this.$router.push({ path: `/shopInfo/${id}` })          
        }
     },
  computed:{
      actCom(){
          return this.className;
      },
    //  所有商家
    allshops(){
          // 注意：多加了一个index
        return this.$store.state.index.allshops
    }

  },
  mounted(){
     //   所有商家
      this.getall()
  }


}
</script>

<style scoped>
 
   .sItem{
     padding: .3rem 0 ;
   }
 
 .wrap{
     padding: 0 .2rem;
     display: flex;
     justify-content:center;
 }
 .wrap>img{
     width: 1.3rem;
     height: 1.3rem;   
 }
  .wrap .shop-info
  {
      width: 5.8rem;
      /* height: 1.3rem; */
      padding-left: .2rem;
 }
 .wrap .shop-info h3{
     line-height: .4rem;
     font-size: .3rem;
 }
                        
 .shop-info>section  {
      width: 5.6rem;
      display: flex;
      justify-content:space-between;
 }

 /* 评分 */
 .shop-info .size {
     transform: scale(.65);
     margin-left:-.45rem;
 }

/* .el-rate__icon{
    font-size: 12px!important;
    margin-right: 4px!important;
 }
 .el-rate__text{
     font-size: 12px;
 } */
  .shop-info>section  span,
  .shop-info .flex span
 {
     font-size: .22rem;
     color:rgb(102, 102, 102);
     max-width: 2rem;
     text-overflow: ellipsis;
     white-space: nowrap;
     display: inline-block;
     padding-top: .07rem;
 }
 .shop-info>section span:nth-of-type(2){
      margin-left:-1.9rem;
 }
  .shop-info>section span:nth-of-type(3){
     background: #009aff;
     color: #fff;
     padding:0!important;
     height: .3rem!important;
     margin-top: .08rem;
     margin-bottom: -1rem;
 }
.shop-info .flex{
      display: flex;
      justify-content: space-between;
}
.sItem .activity{
      margin-left: 1.6rem;
      width: 5.8rem;
      height: .79rem; 
      overflow: hidden;
      position: relative;
 }
 .sItem svg{
       margin-left: 1.6rem;
 }

 .act .shou{
     display: inline-block;
     color: #fff;
     background: #70bc46;
     height: .28rem;
     width: .28rem;
     font-size: .22rem;
     text-align: center;
 }

 .act .jian,
  .act .zhe{
      display: inline-block;
      color: #fff;
      background: #f07373;
      height: .28rem;
      width: .28rem;
     font-size: .22rem;
     text-align: center;
     margin-top: .05rem;
}
 .act span{
   margin-left: .12rem;
   font-size: .22rem;
   line-height: .36rem;
   display: inline-block;
   color: #666;
 }
 .huodong{
 position: absolute;
 right: .1rem;
 top: .01rem;
   color: #666;
 }
 .huodong i{
      color: #666;
      font-size: .1rem;
      margin-left: .05rem;
 }
</style>
