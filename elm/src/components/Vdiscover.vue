<template>

    <div id="discover"> 
       <div class="discover-head">
            <!-- 后退-->
             <a href="javascript:;" @click='dbackClick()' class="el-icon-arrow-left"></a>
             <h1>发现</h1>
        </div>


    </div>
    
</template>
<script>
export default{
  name:'Vdiscover',
  data(){
      return{

      }
  },
  methods:{
       dbackClick(){
         this.$router.go(-1)
       }
  }

}
    
</script>
<style scoped>
  #discover{
         flex: 1; 
  }

  .discover-head{
    width: 100%;
    height: .88rem;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    display: flex;
     align-items: center;
}
.discover-head a{
    color: #fff;
    font-size: .44rem;
    font-weight: 700;
    display: inline-block;
    line-height: .88rem;
    margin-left: .25rem;
   
}
.discover-head h1{
     color: #fff;
     display: inline-block;
     flex: 1;
     text-align: center;
     margin-right:.69rem; 
     font-family: 700;
     font-size: .36rem;
}

</style>
