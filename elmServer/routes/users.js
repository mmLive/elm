var express = require('express');
var router = express.Router();

//import mysql module
var mysql = require('mysql');

//create mysql connection
var connection = mysql.createConnection({
    host:'localhost',
    port:8889,
    user:'root',
    password:'root',
    database:'elm'
});
// connecte mysql
connection.connect();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Get login page
router.get('/login', function(req, res, next) {
    res.render('login');
 });
 
 router.get('/logout', function(req, res, next) {
   res.clearCookie('user');
   res.redirect('/login');
   // res.render('login');
 });
//  上面两个配置对本次外部访问服务器无影响

 //以下作为server  客户端访问接口

//register 
router.post('/registerUser',function(req,res,next){
    var username=req.body.username;
    var pwd=req.body.pwd;
    console.log(username,pwd);

    // SELECT `user_id`, `user_name`, `user_pwd` FROM `users` WHERE 1
    var sql=`SELECT *  FROM users WHERE username='${username}'`;
    console.log(sql)

    connection.query(sql,function(error,results,fields){
      if(error){
             console.log(error);
             console.log('查询用户是否存在数据库出错！');
         }
     else{
          console.log(results);
          if(results.length===0){
             // 数据库中 没有此用户 插入
             // INSERT INTO `users`(`user_id`, `user_name`, `user_pwd`) VALUES ([value-1],[value-2],[value-3])

              var sql1 = `INSERT INTO users (username, password) VALUES ('${username}','${pwd}')`;
              connection.query(sql1,function(error,results,fields){
                  if(error){console.log(error)}
                  else{
                    // console.log(results.insertId); 
                    //插入之后，再查询出来返回前端
                    connection.query(`SELECT *  FROM users WHERE user_id=${results.insertId}`,function(error,results,fields){
                      if(error){console.log(error)}
                      else{
                        console.log(666);
                        console.log(results);
                         res.json(results);//直接返回到页面，不用输入
                      }
                    })
                  }
              })
            }
          else{
             // 数据库中已存在该用户
              console.log(results);  
              res.json({state:'ok',message:'用户已注册，请直接登录！'});
              // res.json(results);
          }     
    }
  });
});

//Sign in
 router.post('/submitUser',function(req,res,next){
  var username=req.body.username;
  var pwd=req.body.pwd;
//   console.log(username,pwd);
  
   var sql=`SELECT *  FROM users WHERE username='${username}'`;

  connection.query(sql,function(error,results,fields){
    if(error){
           console.log(error);
           console.log('查询用户是否存在数据库出错！');
       }
   else{
        console.log(results);
        if(results.length===1 && results[0].username==username &&results[0].password==pwd){
            // 数据库有该用户名的用户
            
            //设置cookie
            //  res.cookie('rememberme', '1', { maxAge: 900000, httpOnly: true }) 也就是登录时选择了页面上的‘记住’ 就可以设置cookie下次（有效期内）可以直接进入页面  这里我们直接设置cookie  
              res.cookie('user', {'username':username}, { maxAge: 60000, httpOnly: false }) 
              res.send({state:'ok',message:'登录成功'});//和res.json的区别就是传字符串对象的时候 后者不用转换成json对象   
            }
        else{
             // 数据库无此用户
            // console.log(5); 
            res.json({state:'no',message:'用户不存在，请先注册！'});          
        }     
  }
   }); 
});

 //Get user information
 router.post('/getUserInfo', function(req, res, next) {
      
  var username=req.body.username
  // console.log(username)

 connection.query(`SELECT * FROM users WHERE username=${username}`,function(error,results,fields){
      if(error){
          console.log('Get all user information error!');
       }
      else{
          console.log(results)
          res.json(results);
      }
 });
});

 //Get all orders
router.post('/getAllorders', function(req, res, next) {
      
    var username=req.body.username
    console.log(username)
   
   connection.query(`SELECT user_id FROM users WHERE username=${username}`,function(error,results,fields){
        if(error){
            console.log('Get all user_id error!');
         }
        else{
          //  console.log(results) 返回json对象[]
          //  res.json(results[0].user_id);
          connection.query(`SELECT * FROM orders WHERE user_id=${results[0].user_id}`,function(error,results1,fields){
               if(error){
                       console.log('Get the newest news error!');
                }
                else{
                     console.log(results1)
                     res.json(results1);
                   }
               });

        }
   });
});

// insert order

router.post('/insertOrder', function(req, res, next) {
  console.log(req.body);
  console.log(555);
  var img=req.body.order_img;
  var title=req.body.order_title;
  var time=req.body.order_time;
  var num=req.body.order_num;
  var price=req.body.order_price;
  var state=req.body.order_state;
  var userId=req.body.user_id;
  var shopId=req.body.shop_id;
  var foodname=req.body.order_foodname;

  var sql=`INSERT INTO orders (order_img, order_title,order_time, order_num, order_price,order_state,user_id,shop_id,order_foodname) VALUES ('${img}','${title}','${time}','${num}','${price}','${state}','${userId}','${shopId}','${foodname}')`;
  console.log(222)
   connection.query(sql,function(error,results,fields){
        //  console.log(results.insertId);
      if(!error){
                 console.log(results)
                 console.log(666)
                res.json(results);
      }else{
            console.log('InsertNews error！')
            console.log(444)
      }  
   
    // res.json({state:'ok',message:'Insert into database success'});
  });
});

// //deleteNews
// router.post('/deleteNews',function(req,res,next){
//   var curId= req.body.id;
//   // DELETE FROM `news` WHERE 1
//    var sql2=`DELETE FROM news WHERE id=${curId}`;
//   connection.query(sql2,function(error,results,fields){
//    // console.log(results);
//         if(error){
//           console.log('Delete  user error!');
//         }
//       else{
//          res.json(results);
//       }    
//   })
// })


// //update

// router.post('/updateNews',function(req,res,next){
  
//     var curId= req.body.id;
//     var curTitle = req.body.title;
//     var curContent = req.body.content;
//     var curCategory = req.body.category;
    
//     var curSource =req.body.source;
//     var curTag = req.body.tag;
//     var curImg = req.body.img;
//     var curTime = req.body.time;

    
//      var sql3=`UPDATE news SET title='${curTitle}',content='${curContent}',category= '${curCategory}',source='${curSource}',tag='${curTag}',img='${curImg}',time='${curTime}' WHERE id = ${curId}`;
    
//      connection.query(sql3,function(error,results,fields){
//       console.log(results);
//           if(error){
//             console.log('Update  user error!');
//           }
//         else{
//             res.json(results);
//         }    
//     }) 
//   })


//  //search



//   router.post('/searchCategory',function(req,res,next){
//       console.log(req.body.category);
//       var category = req.body.category;

//       connection.query(`SELECT * FROM news WHERE category='${category}'`,function(error,results,fields){
//         if(error){
//           console.log('Get all users error!');
//       }
//       else{
//           // console.log(results)
//           res.json(results);
//       }

//  });

//   })

  

module.exports = router;
