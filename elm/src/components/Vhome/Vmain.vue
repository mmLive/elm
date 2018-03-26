<template>
    <div id='main'>
        <!-- 首页分类 轮播-->
        <div class="category">
            <yd-slider >
                 <yd-slider-item>
                     <div class="cate" v-for='(item,index) in category'  :key="index">
                        <a href="javascript:;"> 
                            <div class="container">
                                <img :src="item.src" alt="">
                            </div>                       
                            <span class="title">{{item.title}}</span>
                        </a>       
                     </div>    
                </yd-slider-item>
                <yd-slider-item>
                        <div class="cate" v-for='(item,index) in category2'  :key="index">
                          <a href="javascript:;"> 
                            <div class="container">
                                <img :src="item.src" alt="">
                            </div>
                            <span class="title">{{item.title}}</span>
                         </a>       
                     </div>    
                 </yd-slider-item>
                </yd-slider>    
        </div> 
        <!-- webp格式图片不支持 -->
        <!-- <img src="../../assets/img/homeBan.webp" alt=""> -->
       <div class="main-img">
           <img src="https://fuss10.elemecdn.com/3/c8/45b2ec2855ed55d90c45bf9b07abbpng.png?imageMogr/format/webp/thumbnail/!710x178r/gravity/Center/crop/710x178/" alt="">
       </div>
     
       <!-- 商家渲染区域 -->
       <div class="main-shop">
            <p></p>
            <div class="recommend">
                <span class="el-icon-minus"></span>
                  <b>推荐商家</b>
                <span class="el-icon-minus"></span>
            </div>
        <Vshops></Vshops>

       </div>
      
    </div>
    
</template>
<script>
// import homeBan from '../../assets/img/homeBan.webp'
    import Vshops from './Vshops'

 export default{
    name:'Vmain',
    data(){
        return{
             category:[
                {title:'美食',src:'//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},
                {title:'午餐',src:'https://fuss10.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},
                {title:'商超便利',src:'https://fuss10.elemecdn.com/c/3c/0184f5b3fa72f295fc01864734218jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},
                {title:'果蔬生鲜',src:'https://fuss10.elemecdn.com/c/db/d20d49e5029281b9b73db1c5ec6f9jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},
                {title:'医药健康',src:'https://fuss10.elemecdn.com/b/e1/58aa34ef194d216c9f2328f603588jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},
                {title:'浪漫鲜花',src:'https://fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},
                {title:'地方菜系',src:'https://fuss10.elemecdn.com/7/43/0947110c24c620a767745054d798bjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},
                {title:'地方小吃',src:'https://fuss10.elemecdn.com/7/d6/6f2631288a44ec177204e05cbcb93jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'}
            ],
             category2:[
                {title:'美食',src:'//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},
                {title:'午餐',src:'https://fuss10.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},
                {title:'商超便利',src:'https://fuss10.elemecdn.com/c/3c/0184f5b3fa72f295fc01864734218jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'}
            ]
        } 
    },

    components:{
        Vshops
    }

 }
    
</script>
<style scoped>

    #main{
     flex:1;
     width:100%;
     overflow:auto;
}

.category{
    width: 100%;
    height: 3.54rem;
    display: flex;
    justify-content: flex-start;
}

.cate {
  display: inline-block;
  width: 25%;
  height: 1.28rem;
  margin-top: .22rem;
}
.cate .container{
    display: flex;
    justify-content: center;
    align-items: flex-start;
}
.cate .container img{
    width: .9rem;
    height: .9rem;
}
.cate span{
    display: block;
    width: 100%;
    line-height: .28rem;
    font-size:.24rem; 
    text-align: center;
}
.main-img{
   width: 100%;
   padding: 0 .2rem;
   box-sizing: border-box;
}
.main-img img{
    width: 7.1rem;
    height: 1.78rem;
}

.main-shop p{
    width: 100%;
    height: .21rem;
    background: #eeecec;
}
.recommend{
    width: 100%;
    display: flex;
    justify-content: center;
    height: .72rem;
}
.recommend span{
    width: .4rem;
    height: .02rem;
    margin:0  .26rem;
     line-height: .72rem;
      font-weight: 200;
     font-size: .33rem;
     color: #999;
}
.recommend  b{
    font-weight: 200;
    font-size: .33rem;
     line-height: .72rem;
}

</style>