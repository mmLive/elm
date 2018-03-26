
// 封装 数据交互 axios 
import axios from 'axios'
import qs from 'qs'
import cookSet from '../assets/js/cookie'

axios.defaults.withCredentials = true;

let url = 'http://127.0.0.1:3000'    //url代表服务器地址 

export default {
    // 获取所有的商家 首页
	getallshops(calback){
		axios.get(url+'/getAllShops').then(res => {
			calback(res);
		}).catch(err => {
			console.log(err);
		});
	},
	// 获取单个商家
	getshopinfo(json,calback){
		 // console.log(id) 不能传过来id  否则请求发到后台在请求体里面 就是对象了。 比如点击id为1的那一项时 后台console.log( req.body); 是  {'1':''}
		axios.post(url+'/getOneShop',json).then(res => {
			calback(res);
		}).catch(err => {
			console.log(err);
		});
	},

    // 获取单个商家的所有食品
	getfoods(json,calback){
		axios.post(url+'/getAllFoods',json).then(res => {
			calback(res);
		}).catch(err => {
			console.log(err);
		});
	},
   
	// 用户登录
	loginUser(user,calback){
		axios.post(url+'/users/submitUser',user).then(res => {
			calback(res);
		}).catch(err => {
			console.log(err);
		});
	},
	// 用户注册
	registerUser(user,calback){
		axios.post(url+'/users/registerUser',user).then(res => {
			calback(res);
		}).catch(err => {
			console.log(err);
		});
	},

	// 获取登录用户的个人信息
	getUserInfo(userObj,calback){
		axios.post(url+'/users/getUserInfo',userObj).then(res => {
			calback(res);
		}).catch(err => {
			console.log(err);
		});
	},
	
	// 获取所有订单

	getAllOrder(unameObj,calback){
		axios.post(url+'/users/getAllorders',unameObj).then(res => {
			calback(res);
		}).catch(err => {
			console.log(err);
		});

	},
	// 提交订单
	insertOrder(orderobj,calback){
		axios.post(url+'/users/insertOrder',orderobj).then(res => {
			calback(res);
		}).catch(err => {
			console.log(err);
		});

	}


   

}