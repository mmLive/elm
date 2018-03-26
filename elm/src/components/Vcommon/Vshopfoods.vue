<template>
    <div style="height: 400px; overflow-y: auto; position: relative;">
        <yd-scrolltab style="margin-bottom:15%">
            <yd-scrolltab-panel :label="item" v-for="(item,index) in foodsType" :key="index"  icon="demo-icons-category1">
                <div style="background-color: #ffffff;">
                      <div class='yd-img' v-for="(food,ind) in allFoods" :key="ind" v-if="food.food_type == item">
                            <img :src="food.food_img" alt="">
                            <div class="info">
                                    <p>{{food.food_name}}</p>
                                    <p>{{food.food_info}}</p>
                                    <p>
                                        <span>月售{{food.food_sellCount}}份</span>
                                        <span>好评率{{food.food_rating}}</span>
                                    </p>
                                    <p>
                                        <span>￥{{food.food_price}}</span>
                                        <span @click="reduce(ind)">-</span>
                                        <span class="count">0</span>
                                        <span @click="add(ind)">+</span>
                                    </p>
                              </div>
                         </div>
                </div>
            </yd-scrolltab-panel>
        </yd-scrolltab>

        <Vshoppingcart v-bind:temorder='temorder' @reduceClick='reduce' @addClick='add'></Vshoppingcart>
    </div>
</template>
<script>
 
 import Vshoppingcart from './Vshoppingcart.vue'
 import $ from 'jquery'
export default{
    name:'Vshopfoods',
    data(){
        return{
            temorder:{}  //存放临时订单 传到购物车
            // ind:0,
            // txt:0
        }
    },
    computed:{
         // 当前商家的所有食品
        allFoods(){           
            // return this.$store.state.index.foods  //json 对象[]
            let f =  this.$store.state.index.foods
           if(f.length !=0){
                sessionStorage.foodJson = JSON.stringify(f);
                return this.$store.state.index.foods
            }
          if (sessionStorage.foodJson == null) {
             return this.$store.state.index.foods;
          }
           else {
              return $.parseJSON(sessionStorage.foodJson)
            }
        },
        //当前商家的食品类型 数组去重 
        foodsType(){
            let json = this.$store.state.index.foods ;
            let arr=[]
            if(json.length !== 0 ){
                for(let i=0;i<json.length;i++){
                    let type = json[i].food_type;
                    if(arr.indexOf(type)===-1){
                        arr.push(type)
                    }
                }
               return arr;
            }
        },
        temOrder(){

            //  let sId= JSON.parse(sessionStorage.shopObj).shop_id;
            //  let sName= JSON.parse(sessionStorage.shopObj).shop_name;
            //  let sImg= JSON.parse(sessionStorage.shopObj).shop_img;
            //  let food= JSON.parse(sessionStorage.foodJson)
            //  let price = food[this.ind].food_price * this.txt;

            //  let obj={
            //      food_id:this.ind,            //食物id
            //      shop_id:sId,                 //商家id
            //      order_title:sName,           //商家（订单title）
            //      order_foodname:food[this.ind].food_name,  //食物名字
            //      order_price:price,           //总价格
            //      order_num:this.txt,          //订单数量
            //      order_img: sImg              //商家图片
            //   } 
             
            //     //采用父子组件通信的方式传给购物车
            //     //  this.temorder.push(obj);   
            //     this.temorder=obj;   
         
                 return this.temorder;
          
        }
    },
   methods:{
       reduce(ind){ 
            let txt = Number($('.count').eq(ind).text());
            txt-=1;
            if(txt<=0){
               txt =0;
            }
           $('.count').eq(ind).text(txt)
        //    this.txt=txt;
        //    this.ind=ind;
            let sId= JSON.parse(sessionStorage.shopObj).shop_id;
             let sName= JSON.parse(sessionStorage.shopObj).shop_name;
             let sImg= JSON.parse(sessionStorage.shopObj).shop_img;
             let food= JSON.parse(sessionStorage.foodJson)
             let price = food[ind].food_price * txt;

             let obj={
                 food_id:ind,              //食物id
                 shop_id:sId,              //商家id
                 order_title:sName,        //商家（订单title）
                 order_foodname:food[ind].food_name,  //食物名字
                 order_price:price,        //总价格
                 order_num:txt,            //订单数量
                 order_img: sImg,           //商家图片
                 user_id:JSON.parse(sessionStorage.user).user_id, //用户id
                 order_state:'订单已完成',
                 order_time:'2018-1-20' 
              }
             
             //采用父子组件通信的方式传给购物车
              this.temorder=obj; 
              sessionStorage.orderObj = JSON.stringify(obj);
       },
       add(ind){
             let txt =Number($('.count').eq(ind).text());
             txt+=1;
             $('.count').eq(ind).text(txt)
               
            //    this.ind=ind;
            //    this.txt=txt;
             let sId= JSON.parse(sessionStorage.shopObj).shop_id;
             let sName= JSON.parse(sessionStorage.shopObj).shop_name;
             let sImg= JSON.parse(sessionStorage.shopObj).shop_img;
             let food= JSON.parse(sessionStorage.foodJson)
             let price = food[ind].food_price * txt;

             let obj={
                 food_id:ind,              //食物id
                 shop_id:sId,              //商家id
                 order_title:sName,        //商家（订单title）
                 order_foodname:food[ind].food_name,  //食物名字
                 order_price:price,        //总价格
                 order_num:txt,            //订单数量
                 order_img: sImg,           //商家图片
                 user_id:JSON.parse(sessionStorage.user).user_id, //用户id
                 order_state:'订单已完成',
                 order_time:'2018-1-20' 
              }
             
             //采用父子组件通信的方式传给购物车 
              this.temorder=obj;   
              sessionStorage.orderObj = JSON.stringify(obj);
          }

    },
    mounted(){
        
    },
    components:{
        Vshoppingcart
    }
}
    

</script>
<style scoped>
.yd-img{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin:.3rem 0;
}
 .yd-img img{
     width: 25%;
     height: 1.52rem;
 }
 .yd-img  .info {
      width: 75%;
     padding-left: .13rem;
     display: flex;
     flex-direction: column;
     justify-content: space-around;
  }

 .yd-img .info p:nth-of-type(1) {
    font-size: .3rem;
    line-height: .36rem;
    font-weight: bold;
  }
  .yd-img .info p:nth-of-type(2) {
    font-size: .19rem;
    line-height: .3rem;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 3.7rem;
    
  }
 .yd-img .info  p:nth-of-type(3) {
        color: #666;
        font-size: .22rem;
        line-height: .25rem;
 }
 .yd-img .info  p:nth-of-type(3) span:first-of-type{
        margin-right: .15rem;
 }
 .yd-img .info  p:nth-of-type(4) {
        display: flex;
        justify-content:flex-start;  
  }
 .yd-img .info  p:nth-of-type(4) > span:nth-of-type(1) {
      font-size: .28rem;
      color: #f60;
      font-weight: bold;
      width: 60%;
  }
  
 .yd-img .info  p:nth-of-type(4) > span:nth-of-type(2) {
        font-size: .30rem;
        color: #2395ff;
        border: .03rem solid #2395ff;
        border-radius: 50%;
        padding: 0 .1rem;
        margin-left: .2rem;
  }

  .yd-img .info p:nth-of-type(4) > span:nth-of-type(3) {
      font-size: .30rem;
      margin: 0 .1rem;
      color: #666666;
      text-align: center;
      margin:  .05rem .15rem 0;
  }

  .yd-img .info p:nth-of-type(4) > span:nth-of-type(4) {
     font-size: .30rem;
     color: white;
     background: #2395ff;
     border-radius: 50%;
     padding: .03rem .1rem 0;
  }


</style>
