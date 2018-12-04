//创建mysql连接池
"use strict";
const mysql = require('mysql');
var pool = mysql.createPool({
    host:"127.0.0.1",
    port:3306,
    user:"root",
    password:"",
    charset:"utf8",
    database:"huawei",
    connectionLimit:10,
    multipleStatements:true
});
//把创建好的连接池导出
module.exports = pool;




