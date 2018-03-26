<template>
<!-- 订单初始未登录页面 -->
    <div id="order">
        <div class="order-head">
              <!-- 后退-->
             <a href="javascript:;" @click='obackClick()' class="el-icon-arrow-left"></a>
             <h1>订单</h1>
        </div>
         <!-- 登录前 -->
        <div class="order-wrapper"  v-if="islogout">
              <img src="../assets/img/orderbg.png" alt="">
              <h3>登录后查看外卖订单</h3>
             
              <button @click="loginClick()">立即登录</button>
        </div>

        <!-- 登录后 -->
           <ul  class="order" v-else>
                <li v-for="(item,index) in orderInfo" :key="index">
                    <div class="orderbody">
                        <div>
                            <img :src="item.order_img" alt="">
                        </div>
                        <div>
                            <p>
                                <span>{{item.order_title}}<i style="color:#999;margin-left:.1rem;font-size:.2rem;">></i></span>
                                <span>订单已完成</span>
                            </p>    
                            <span>{{item.order_time}}</span>
                          
                        </div>
                        <div>
                                <!-- <span>{{JSON.parse(item.order_goods)[0]}}</span> -->
                                <span>{{item.order_foodname}}等{{item.order_num}}件商品</span>
                                <span>¥{{item.order_price}}</span>

                        </div>
                    </div>
               
                    <div class="orderbottom">              
                        <span>再来一单</span>
                    </div>
                </li>
            </ul>

            
        </div>

       
 
    
</template>
<script>
   import cookSet from '../assets/js/cookie'


export default{
  name:'Vorder',
  data(){
      return{
          islogout:false       
      }
  },
  methods:{
        obackClick(){
           this.$router.go(-1)
        },
        loginClick(){
          this.$router.push('/login')
        }
  },
  computed:{
      // 获取cookie 显示登录 获取所有订单
        orderInfo(){
            if(document.cookie.length!=0){
                this.islogout=false;
                return this.$store.state.login.allOrder;
              }
              else{
                  this.islogout=true
              }            
        }
  },
  mounted(){
        if(document.cookie.length!=0){
             let uname = cookSet.getCookie('user')
             this.$store.dispatch('allorder',{username:uname})
        }else{
              this.islogout=true  
        }
  }
}
    
</script>
<style scoped>

#order{
     /* 先整体 为1  order内顶部固定 再设弹性盒 */
       flex: 1; 
       display: flex;
       flex-direction: column;
}
.order-head{
    width: 100%;
    height: 1.3rem;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    display: flex;
    align-items: center;
}
.order-head a{
    color: #fff;
    font-size: .44rem;
    font-weight: 700;
    display: inline-block;
    line-height: .88rem;
    margin-left: .25rem;
   
}
.order-head h1{
     color: #fff;
     display: inline-block;
     flex: 1;
     text-align: center;
     margin-right:.69rem; 
     font-family: 700;
     font-size: .36rem;
}
.order-wrapper{
       flex: 1;
       display: flex;
       flex-direction: column;
       justify-content: center;
       margin-top: -1.5rem;
       align-items: center;
}
.order-wrapper img{
    width: 4rem;
    height: 4rem;
}
h3{
    margin: .25rem 0 .2rem 0;
    line-height: .4rem;
    font-size: .34rem;
    font-weight: 400;
    color: #6a6a6a;
}
button{
    width: 2.35rem;
    height: .77rem;
    background-color: #56d176;
    padding: .2rem;
    color: #fff;
     font-size: .29rem;
     border: none;
     border-radius: 5%;
}

/* 订单ul */
.order{
    overflow-y: auto;
}

.order li{
    margin-top: .2rem;
   background-color: #fff;
   padding: .28rem 0 0 .3rem;
   position: relative;
}
orderbody{
     width: 7.2rem;
     /* height: 1.87rem; */
}
.orderbody>div:first-of-type{
     width: .64rem;
     height: 1.8rem;
     display: inline-block;
     margin-right: .2rem;
}
.orderbody>div:first-of-type img{
      width: .62rem;
      height: .62rem;
}
.orderbody>div:nth-of-type(2) {
       width: 6.1rem;
       display: inline-block;
}
.orderbody>div:nth-of-type(2) p{
       display:flex;
       justify-content: space-between;
}
.orderbody>div:nth-of-type(2)>p span:first-of-type {
      display: inline-block;
      max-width: 3.2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: .32rem;
      line-height: .48rem;
      color: #333;
}
.orderbody>div:nth-of-type(2)>p span:nth-of-type(2) {
     font-size: .26rem;
     text-align: right;
     color: #333;
     max-width: 10em;
     overflow: hidden;
     text-overflow: ellipsis;
     white-space: nowrap;
     margin-right: .15rem;   
}
.orderbody>div:nth-of-type(2)>span{
    color: #999;
    font-size: .22rem;
    font-weight: 400;
}

.orderbody>div:nth-of-type(3) {
       width: 6.1rem;     
      position: absolute;
      left: 1.2rem;
      top: 1.4rem;
      color: #666;
      font-size: .26rem;    
}
.orderbody>div:nth-of-type(3)  span:nth-of-type(2){
     font-size: .26rem;
     color: #333;
     font-weight: 700;
     position: absolute;
     right:.5rem; 
     top: .05rem;
}
.orderbottom{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 0 0 .2rem;
}
.orderbottom span{
    padding:.1rem .2rem;
    border: .01rem solid #2395ff;
    border-radius: .05rem;
    background-color: transparent;
    font-size: .26rem;
    color: #2395ff;
    margin-right: .5rem;
}


</style>
