import api from '../../api/api'
import cookSet from '../../assets/js/cookie'


// state
const state = {
     loginInfo:{},     //登录是否成功返回信息
     regInfo:{},       //注册用户
     userInfo:{},      //当前登录用户的个人信息
     allOrder:[],       //当前用户所有订单
     theOrder:{}        //新插入的订单
}

// getters
const getters = {

}

// mutations
const  mutations = {
     // 注册用户
    REGISTER(state,obj){
        state.regInfo =obj;
     },
     // 登录信息
    LOGIN(state,obj){
        state.loginInfo =obj;
     },
    //  获取用户信息
    USERINFO(state,obj){
         state.userInfo = obj
    },
     // 获取数据库中所有订单
    ALLORDER(state,json){
        state.allOrder = json;
     },
     //插入的新一条订单
     ADDORDER(state,json){
         state.theOrder = json;

     }
   
}

// actions
const actions = {
     //注册用户
     register(context,user){
        api.registerUser(user,function(res){
            // console.log(res.data[0])
           context.commit('REGISTER',res.data[0])
       })
    },
     //  登录
     login(context,userObj){
        api.loginUser(userObj,function(res){
            console.log(res.data)
             if(res.data.state == 'ok'){
                cookSet.setCookie('user',userObj.username,6000)
            }
                context.commit('LOGIN',res.data)
        })
    },
    // 获取用户信息
    getUser(context,userObj){
        api.getUserInfo(userObj,function(res){
            // console.log(res.data[0])    
            context.commit('USERINFO',res.data[0])
        })
    },
     //用户退出 
     logout(context,unameObj){
        // cookSet.clearCookie(unameObj.uname)  
        cookSet.setCookie('user', "", -1);
        console.log(11)
    },

    // 获取当前用户所有订单
    allorder(context,unameObj){
        api.getAllOrder(unameObj,function(res){
            console.log(res.data)
            context.commit('ALLORDER',res.data)
        })
    },
    // 添加订单
    addOrder(context,orderobj){
        console.log(orderobj)
        api.insertOrder(orderobj,function(res){

            console.log(res.data)
            context.commit('ADDORDER',orderobj)
        })
    }

   
    
}



export default {
    state,
    getters,
    actions,
    mutations
}