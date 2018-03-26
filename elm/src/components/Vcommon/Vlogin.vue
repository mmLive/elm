<template>
  <div class="login">
      <el-input v-model="input1" id="username" placeholder="用户名"></el-input>
      <el-input v-model="input2" id="pwd" type='password' placeholder="密码"></el-input>
        <span  class='remind' style="color:red;dispaly:none"></span>
       <p>
          温馨提示：请您先注册帐号，注册成功之后，才能正常登录。且代表您已同意《用户服务协议》
      </p>
      <el-button type="success" @click="loginHandler">登录</el-button>
      {{loginInfo}}
  </div>
</template>
<script>
 import $ from 'jquery'

    export default{
        name:'Vlogin',
        data(){
            return{
                 input1: '',
                 input2: ''
            }
        },
        methods:{
            loginHandler(){
                if($('#username').val() ===''||$('#pwd').val()===''){
                        $('.remind').css({"display":"block"}).text('用户名和密码都不能为空');
                }
                else{
                     $('.remind').css({"display":"none"}).text();
                        var userObj = {
                            username:$('#username').val(),
                            pwd:$('#pwd').val()
                        }
                        this.$store.dispatch('login',userObj)
                    }  
            }
        },
        computed:{
            loginInfo(){
                 if(this.$store.state.login.loginInfo.state ==='ok'){
                      this.$router.push('/profile')           
                 }
                 else if(this.$store.state.login.loginInfo.state==='no'){
                     let msg=this.$store.state.login.loginInfo.message
                     $('.remind').css({"display":"block"}).text(msg);
                 }  
            }
             
        },
        mounted(){
           
        }

    }
</script>
<style scoped>

.login{
    margin-top: .15rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.login p{
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

