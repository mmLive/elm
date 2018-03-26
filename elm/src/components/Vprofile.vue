<template>
    <div id="profile">
         <div class="profile-head">
              <!-- 后退-->
             <a href="javascript:;" @click='pbackClick()' class="el-icon-arrow-left"></a>
             <h1>我的</h1>
        </div>
      <!-- 提示登录注册区域 -->
       <div class="remind" v-if="islogin">
                <img src="https://fuss10.elemecdn.com/5/d7/44772923fd21062c4f86a57eb395ejpeg.jpeg?imageMogr/format/webp/thumbnail/!96x96r/gravity/Center/crop/96x96/" alt="">
               <div>
                     <b @click="loginClick()">{{userInfo.username}}</b>
                     <span><i class="el-icon-mobile-phone">{{userInfo.telephone}}</i></span>
               </div>
                <span class="el-icon-arrow-right"></span>
        </div>
        <div class="remind"  v-else>
               <svg viewBox="0 0 122 122"><path fill="rgb(220,220,220)" fill-rule="evenodd" d="M61 121.5c33.413 0 60.5-27.087 60.5-60.5S94.413.5 61 .5.5 27.587.5 61s27.087 60.5 60.5 60.5zm12.526-45.806c-.019 3.316-.108 6.052.237 9.825 3.286 8.749 18.816 9.407 28.468 17.891-1.833 1.998-6.768 6.788-15 10.848-7.02 3.463-16.838 6.416-24.831 6.416-17.366 0-32.764-7.149-42.919-17.264 9.713-8.407 25.49-9.173 28.769-17.891.345-3.773.258-6.509.24-9.825l-.004-.002c-1.903-.985-5.438-7.268-6.01-12.571-1.492-.12-3.843-1.561-4.534-7.247-.37-3.053 1.107-4.77 2.004-5.31-5.046-19.212 1.507-33.16 20.749-34.406 5.753 0 10.18 1.52 11.909 4.523 15.35 2.702 11.756 22.658 9.328 29.882.899.54 2.376 2.258 2.004 5.31-.689 5.687-3.042 7.127-4.534 7.248-.575 5.305-3.25 10.82-5.873 12.57l-.003.003zM61 120.5C28.14 120.5 1.5 93.86 1.5 61S28.14 1.5 61 1.5s59.5 26.64 59.5 59.5-26.64 59.5-59.5 59.5z"></path></svg>
               <div>
                     <b @click="loginClick()">登录/注册</b>
                     <span><i class="el-icon-mobile-phone">登录后享受更多特权</i></span>
               </div>
                <span class="el-icon-arrow-right"></span>
        </div>
       
        <!-- 灰色背景区 -->
         <div class="info">
             <div class="info-wrap  fff">
                 <div>
                     <svg viewBox="0 0 48 48" ><path fill='#ff5f3e' fill-rule="evenodd" d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm7.6 15H16.4c.1.1.1.2.1.4.4 2.5 3.3 4.3 7.1 4.4 2.4 0 4.8-.6 6.1-1.6.4-.3 1.1-.3 1.4.2.3.5.3 1.1-.2 1.4-1.6 1.3-4.3 2.1-7.1 2.1h-.5c-3.9-.2-7-2-8.3-4.6V32c0 .5.7 1 1.4 1h15.2c.8 0 1.4-.5 1.4-1V16c0-.5-.7-1-1.4-1zM35 32c0 1.7-1.5 3-3.4 3H16.4c-1.9 0-3.4-1.3-3.4-3V16c0-1.4 1-2.5 2.5-2.9h.2c.1-.1.3-.1.4-.1h15.5c1.9 0 3.4 1.3 3.4 3v16z"></path></svg>
                     <p>红包</p>
                 </div>
                 <div>
                     <svg viewBox="0 0 48 48" ><path fill='#6ac20b' fill-rule="evenodd" d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm-9 26.8v3.3c0 1.2 3.6 2.9 9 2.9s9-1.7 9-2.9v-3.3c-2.1 1.3-5.6 1.9-9 1.9-3.4.1-6.9-.6-9-1.9zM24 15c-5.8 0-9 1.8-9 2.8 0 1 3.2 2.8 9 2.8s9-1.8 9-2.8c0-1-3.2-2.8-9-2.8zm-9 5.6V24c0 .9 3.2 2.8 9 2.8s9-1.8 9-2.8v-3.4c-2.1 1.3-5.6 1.9-9 1.9-3.4 0-6.9-.6-9-1.9zM35 24v6.1c0 3.2-5.5 4.9-11 4.9s-11-1.7-11-4.9V17.8c0-3.1 5.5-4.8 11-4.8s11 1.6 11 4.8V24z"></path></svg>
                      <p>金币</p>
                 </div>
             </div>
             <div class="address  fff">
               <svg viewBox="0 0 16 16" ><g fill="none" fill-rule="evenodd"><path fill="#FFF" fill-opacity="0" d="M0 0h16v16H0z"></path><path fill="#4AA5F0" d="M8 2.667A2.667 2.667 0 1 1 8 8a2.667 2.667 0 0 1 0-5.333M2.273 6.509a5.48 5.48 0 0 1-.051-.732 5.778 5.778 0 1 1 11.556 0 5.54 5.54 0 0 1-.085.948 5.704 5.704 0 0 1-.258.999 6.565 6.565 0 0 1-.081.22c-.016.039-.03.078-.047.116C11.932 11.45 8 13.778 8 13.778S3.734 11.273 2.535 7.64a5.756 5.756 0 0 1-.262-1.132zm8.584 6.701c2.516.124 5.143.43 5.143 1.068 0 .901-5.233 1.138-8 1.138-2.768 0-8-.237-8-1.138 0-.639 2.627-.944 5.143-1.068 1.22 1.044 2.3 1.61 2.404 1.663.14.07.296.108.453.108.156 0 .314-.038.454-.109.104-.052 1.184-.618 2.403-1.662z"></path></g></svg>
                 <span>我的地址</span>
             </div>
               <div class="coin  fff">
                 <svg viewBox="0 0 16 16"  ><g fill="none" fill-rule="evenodd"><path fill="#FFF" fill-opacity="0" d="M0 0h16v16H0z"></path><path fill="#94D94A" d="M2.257.5h11.486a1 1 0 0 1 .998.936l.757 11.728a2 2 0 0 1-1.996 2.129H2.498a2 2 0 0 1-1.996-2.129L1.26 1.436A1 1 0 0 1 2.257.5zm9.658 3.782C11.82 6.452 10.14 8.18 7.95 8.18c-2.202 0-3.925-1.747-4.003-3.933a.594.594 0 0 1 .36-1.075.596.596 0 1 1 .25 1.14c.109 1.82 1.548 3.26 3.393 3.26 1.853 0 3.263-1.455 3.357-3.287a.595.595 0 0 1 .3-1.113.595.595 0 1 1 .307 1.11z"></path></g></svg>
                 <span>金币商城</span>
             </div>
              <div class="service  fff">
                <svg viewBox="0 0 54 54" id="service" width="100%" height="100%"><g fill="none" fill-rule="evenodd"><path stroke="#4DA6F0" stroke-width="3" d="M48 28c0 11.598-9.402 21-21 21"></path><path fill="#4DA6F0" d="M43 40.012v-18h2a9 9 0 0 1 9 9 9 9 0 0 1-9 9h-2zM10 40.012H9a9 9 0 0 1-9-9 9 9 0 0 1 9-9h1v18zM27 46a3 3 0 1 0 0 6 3 3 0 1 0 0-6"></path><path fill="#4DA6F0" d="M43 24h6c0-12.426-9.574-23-22-23S4 11.574 4 24h6c0-9.098 7.902-17 17-17 9.097 0 16 7.902 16 17z"></path></g></svg>
                <span>我的客服</span>
             </div>             
        </div>
          <!-- 点击退出 -->
         <div  @click.prevent="logoutHandler"  class="logout" v-if="islogin">退出登录</div>
    </div>
    
</template>
<script>
 import cookSet from '../assets/js/cookie'

export default{
  name:'Vprofile',
  data(){
      return{
          islogin:false
           
      }
  },
  methods:{
       pbackClick(){
         this.$router.go(-1)
       },
       loginClick(){
           this.$router.push('/login')
       },
       logoutHandler(){
            // this.$store.state.login.loginInfo={};
            //  cookSet.clearCookie('user');
             this.islogin= false;
              let uname = cookSet.getCookie('user')
             this.$store.dispatch('logout',{username:uname})
         }
      
  },
  computed:{
      userInfo(){
           if(document.cookie.length!=0){
              this.islogin = true;
            //   当前登录用户设置session
            sessionStorage.user= JSON.stringify(this.$store.state.login.userInfo);
           
             return  this.$store.state.login.userInfo
          }
          else{
               this.islogin=false 
          }
         
      }
  },
   created(){
        if(document.cookie.length!=0){
             this.islogin = true;
             let uname = cookSet.getCookie('user')
             this.$store.dispatch('getUser',{username:uname})
        }else{
              this.islogin=false  
        }
  }

}
    
</script>
<style scoped>
  #profile{
      flex: 1;
  }

  .profile-head{
    width: 100%;
    height: .88rem;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    display: flex;
    align-items: center;
}
.profile-head a{
    color: #fff;
    font-size: .44rem;
    font-weight: 700;
    display: inline-block;
    line-height: .88rem;
    margin-left: .25rem;
   
}
.profile-head h1{
     color: #fff;
     display: inline-block;
     flex: 1;
     text-align: center;
     margin-right:.69rem; 
    font-family: 700;
     font-size: .36rem;
}

/* 提醒登录 */
 .remind{
    width: 100%;
    height: 2.2rem;
    padding: .5rem .3rem;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    display: flex;
    justify-content: flex-start;
 }
 .remind svg
 {
      width: 1.2rem;
      height: 1.2rem;
      margin-left: .1rem;
      margin-right: .4rem;
 }
  .remind img{
       width: 1.2rem;
      height: 1.2rem;
       margin-left: .1rem;
       margin-right: .4rem;
      border-radius: 50%;
  }
 .remind b{
     color: #fff;
     font-size: .42rem;
     font-weight: 700;
 }

.remind>div>span{
      display: block;
      color: #fff;
     font-size: .24rem;
     font-weight: 400;
     margin-top: .1rem;
  }

 .remind>span{
       color: #fff;
       font-size: .26rem;
       font-weight: 400;
       margin: .2rem 0 0  2.4rem;
 }

 /* 灰色背景区 */
 .info{
     background: #f5f5f5;
 }
 .fff{
     background: #fff;
 }
.info-wrap{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 .3rem;
}
.info-wrap>div{
    height: 1.68rem;
}
.info-wrap>div svg{
     margin-top: .4rem;
}
.info>div:not(.info-wrap){
    line-height: .33rem;
    padding: .28rem .2rem .28rem 0;
    margin-top: .3rem;
}
.info>div:not(.info-wrap) svg{
    width: .5rem;
    height: .5rem;
    margin:0 .3rem 0 .4rem;
}
.info>div:not(.info-wrap) span{
    display: inline-block;
    font-size: .32rem;
    line-height: .34rem;
    
}

/* 退出 */
.logout{
     display: flex;
     justify-content: center;
     margin-top: 1rem;
     background: #ffffff;
     height:1rem;
     line-height: 1rem;
     color: #ff5339;
     font-size: .38rem;
     font-weight: 700;
}
</style>
