<template>
  <div class="register">
      <el-input class='el-input' v-model="name" id="uname" placeholder="用户名"></el-input>
      <el-input class='el-input' v-model="pwd" id='upwd' type='password' placeholder="密码"></el-input>
      <span class="remind1"></span>
       <p>
         温馨提示：注册成功代表您已同意《用户服务协议》
      </p>
      <el-button class="el-button"  type="success" @click.prevent="registerHandler">注册</el-button>
  </div>
</template>
<script>
 import $ from 'jquery'
 
    export default{
        name:'Vregister',
        data(){
            return{
                name:'',
                pwd:''
            }
        },
        methods:{
            registerHandler(){
                 if($('#uname').val() ===''||$('#upwd').val()===''){
                        $('.remind1').css({"display":"block"}).text('用户名和密码都不能为空');
                }
                else{
                        $('.remind1').css({"display":"none"}).text();
                        var user = {
                            username:$('#uname').val(),
                            pwd:$('#upwd').val()
                        }
                        this.$store.dispatch('register',user)
                    }  

            }
        },
        computed:{
              
        },


    }
</script>
<style scoped>
 /* 测量值都要乘以2 */

.register{
    margin-top: .15rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.register p{
       margin-top:.24rem;
      color: #999;
      font-size: .26rem;
      line-height: .4rem;
}

.el-input{
    margin-top: .3rem;
}
.el-button{
     margin-top: .3rem;

}


</style>

