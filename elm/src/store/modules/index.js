import api from '../../api/api'

// state
const state = {
    allshops:[],   //所有商家列表信息
    shop_id:'',    //商家id
    foods:[],      //单个商家所有食品
    shop:{},       //单个商家信息
    order:[]       //用户订单
    
    
}

// getters
const getters = {


}

// mutations

const  mutations = {
    // 获取所有商家
    ALLSHOPS(state,json){
        state.allshops = json
    },
    // 当前商家shop_id
    SHOPID(state,id){
        state.shop_id = id
    },

    // 当前商家信息
    THESHOP(state,obj){
        state.shop = obj
    },
    // 当前商家所有食品
    ALLFOODS(state,json){
        state.foods = json;
    }
    
   

}

// actions
const actions = {

      // 首页 获取所有商家
    getall(context){
        api.getallshops(function(res){
            context.commit('ALLSHOPS', res.data);
         //    console.log(state.allplays);
        });
    },

      // 点击商家进入商家详情 获取商家信息和所有食品信息
    getoneshop(context, id){
        // console.log(id)
        context.commit('SHOPID',id);
        let json={
             id:id
          }
        api.getshopinfo(json,function(res){
            context.commit('THESHOP', res.data[0]);  
            // console.log(res.data[0]) {}
        });
        api.getfoods(json,function(res){
            context.commit('ALLFOODS', res.data);
            console.log(res.data)  
        });
     }

   

}



export default {
    state,
    getters,
    actions,
    mutations
}