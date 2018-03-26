var express = require('express');
var router = express.Router();
var mysql = require('mysql');

// 时间处理插件
var moment = require('moment');

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

/* GET home page. */  
// 首页 ：作为测试  （获取所有商家 使用下面  /getAllShops） 
router.get('/', function(req, res, next) {
    connection.query('SELECT * FROM shops',function(error,results,fields){
        if(error){
            console.log('Get all shops error!');
          }
        else{
          console.log(results)
          res.json(results);
       }
   });  
});

// Get all shops information
router.get('/getAllShops', function(req, res, next) {
    connection.query('SELECT * FROM shops',function(error,results,fields){
        if(error){
            console.log('Get all shops error!');
          }
        else{
          res.json(results);
        }
   });   
});

//Get one shop information
router.post('/getOneShop', function(req, res, next) {
   var id = req.body.id;
    // console.log( req.body);
    // console.log( req.body.id);
    
  connection.query(`SELECT * FROM shops WHERE shop_id ='${id}'`,function(error,results,fields){
      if(error){
          console.log('Get the shop info error!');
        }
      else{
        //  console.log(results)
        //  console.log(1)
        res.json(results);
      }
 });   
});


//Get  information

router.post('/getAllFoods', function(req, res, next) {
  var id = req.body.id;
 connection.query(`SELECT * FROM foods WHERE shop_id ='${id}' `,function(error,results,fields){
     if(error){
         console.log('Get the shop info error!');
       }
     else{
      //  console.log(results)
      //  console.log(2)
       res.json(results);
     }
});   
});



// //Get all orders info
// router.post('/insertData',function(req,res,next){
//     console.log(req.body)
//     var author=req.body.author;
//     var comment=req.body.comment;
//     var time=req.body.time;

//     var sql=`INSERT INTO comments (author,comment,time) VALUES ('${author}','${comment}','${time}')`;
//      console.log(sql)
     
//     connection.query(sql,function(err,results,fields){
//          	if (!err) {
//                 // console.log(results);
// 					connection.query(`SELECT * FROM comments WHERE id=${results.insertId}`,function(error,results1,fields){
// 						if(error){
// 							console.log('Get the newest data error!');
// 						}
// 					  else{
//                           console.log(results1)
                        
// 						  res.json(results1);
// 					   }
// 					});
// 				}else{
//                     console.log('InsertNews error！')
// 				}                
//     })

// })

// //delete
// router.post('/deleteData',function(req,res,next){
//     var curId= req.body.id;
   
//      var sql2=`DELETE FROM comments WHERE id=${curId}`;
//     connection.query(sql2,function(error,results,fields){
  
//           if(error){
//             console.log('Delete  user error!');
//           }
//         else{
//          console.log(results);
//            res.json(results);
//         }    
//     })
//   })
 

module.exports = router;