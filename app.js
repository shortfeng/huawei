//使用express构建web服务器 --11:25
const express = require('express');
const bodyParser = require('body-parser');
// const cors=require("cors")
/*引入路由模块*/
const home=require("./routes/home");
const users=require("./routes/users")


var app = express();
var server = app.listen(3000);
// app.use(cors({
//     origin:'http://localhost:8080',
//     credentials:true
// }))
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
app.use(express.static('public'));
/*使用路由器来管理路由*/
app.use("/home",home);
app.use("/users",users);

// app.use("/phone",phone);


