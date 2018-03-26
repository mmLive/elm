<template>
  <div class="shoppingcart">
 <!--购物车样式  -->
        <div class="shopping">
              <p  @click='gouwuche' >
                <span>{{temorder.order_num}}</span>
                <yd-icon name="shopcart" class="iconT" :class="{iconT1:temorder.order_num>0}"></yd-icon>
              </p>
              <p>
                <span>￥{{temorder.order_price}}</span>
                <span>配送费￥{{shop.shop_distribution_price}}</span>
              </p>
              <p class="type1" v-if='temorder.order_price<shop.shop_start_price'>
                <span>￥{{shop.shop_start_price}}起送</span>
              </p>
              <p class="type2" v-else>
                <span @click="checkOut">去结算</span>
              </p>
        </div>
<!-- 购物车弹框 -->
        <yd-popup v-model="show2" position="center" height="auto" width="100%">
          <div class="bottomX">
            <span style="font-size: 16px;margin-left: 10px">已选商品</span>
            <span class="el-icon-delete" style="margin-right: 10px"></span>
          </div>
          <ul class="bottomN">
            <li>
              <p>{{temorder.order_foodname}}</p>
              <p>
                <span>￥{{temorder.order_price}}</span>
                <span @click="reduceHandler(temorder.food_id)">-</span>
                <span>{{temorder.order_num}}</span>
                <span @click="addHandler(temorder.food_id)">+</span>
              </p>
            </li>
          </ul>
        </yd-popup>
<!-- 点击结算 提示先登录弹框 -->
    <yd-popup v-model="show1" position="center" width="90%" height="20%">  
      <button  @click="loginHandler" style="border:0;background: #f00;width: 30%;height:30px;margin: 7% 0 0 34%;font-size: 14px;color: white">
           请登录 
      </button>
    </yd-popup>

  </div>
  
</template>
<script>
    
    export default{
        name:'Vshoppingcart',
        data(){
            return{
              exist:false,
              show1: false,
              show2:false

            }
        },
        methods:{
          gouwuche(){
            this.show2 =true;
            this.exist=true;
          },
          // 传给父级组件 自定义事件
          reduceHandler(id){
                 this.$emit('reduceClick',id)
          },
          addHandler(id){
               this.$emit('addClick',id)
          },
          checkOut(){
             if(document.cookie.length!=0){
                 this.show1 = false;
                 var orderobj= JSON.parse(sessionStorage.orderObj)
                 this.$store.dispatch('addOrder',orderobj)
             }
             else{
                  this.show1 = true;
             }
           
          },
          loginHandler(){
             this.$router.push('/login')

          }

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
        },
        props:{
            temorder:Object
        }
    }

</script>
<style scoped>
.shopping{
    width: 100%;
    height: .96rem;
    position: fixed;
    bottom: 0;
    background: #505052;
    z-index: 2;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
 .shopping > p:nth-of-type(1) {
    background: #444444;
    display: flex;
    width: 14%;
    height: 110%;
    padding: 1%;
    position: absolute;
    top: -30%;
    border-radius: 50%;
    flex-direction: row;
    left: 4%;
  }
  .shopping > p:nth-of-type(1) > span {
    color: white;
    position: absolute;
    font-size: .24rem;
    background-image: linear-gradient(-90deg,#ff7416,#ff3c15 98%);
    border-radius: 50%;
    padding: 0 .09rem;
    left: 60%;
    top: -10%;
  }
  .iconT {
    font-size: 28px !important;
    color: #5f5f63;
    padding: 4px 7px;
    background: #363636;
    border-radius: 50%;
    margin: auto;
  }
  .iconT1 {
    font-size: 28px !important;
    color: #ffffff;
    padding: 4px 7px;
    background: #3190e8;
    border-radius: 50%;
    margin: auto;
  }
  .shopping > p:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 10%;
  }

  .shopping > p:nth-of-type(2) > span:nth-of-type(1) {
    font-size:.36rem;
    color: white;
  }

  .shopping > p:nth-of-type(2) > span:nth-of-type(2) {
    font-size: .2rem;
    color: #999999;
    
  }

  .type1 {
    margin-left: 20%;
  }

  .type1 > span {
    font-size: .32rem;
    color: white;
    font-weight: bold;
  }

  .type2 {
    background: #4cd964;
    height: 100%;
    width: 30%;
    position: relative;
    left: 16%;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .type2 > span {
    font-size: .32rem;
    color: white;
    font-weight: bold;
  }



  .bottomN {
    width: 100%;
    height: 100%;
    overflow: auto;
  }

  .bottomN > li {
    width: 100%;
    height: 40px;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .bottomN > li > p:nth-of-type(1) {
    height: 100%;
    font-size: 14px;
    color: black;
    margin-left: 15px;
    display: flex;
    align-items: center;
  }

  .bottomN > li > p:nth-of-type(2) {
    font-size: 16px;
    margin-right: 25px;
  }

  .bottomN > li > p:nth-of-type(2) > span:nth-of-type(1) {
    color: red;
    margin-right: 10px;
  }

  .bottomN > li > p:nth-of-type(2) > span:nth-of-type(2) {
    border: 1px solid #2395ff;
    border-radius: 50%;
    padding: 1px 6px;
    font-size: 14px;
  }

  .bottomN > li > p:nth-of-type(2) > span:nth-of-type(4) {
    border-radius: 50%;
    padding: 0px 4px;
    font-size: 16px;
    color: white;
    background: #2395ff;
  }

  .bottomN > li > p:nth-of-type(2) > span:nth-of-type(3) {
    margin: 0 5px 5px 0;
  }
</style>

