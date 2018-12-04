const express=require("express");
const pool=require("../pool.js");
const router=express.Router();
router.get("/",(req,res)=>{
    var itemModel=req.query.itemModel;
    if(!itemModel){
        res.send("0");
    }
    var sql=`SELECT uname,title,pic,price FROM item WHERE itemModel=?`;
    pool.query(sql,[itemModel],(err,result)=>{
        if(result.length>0)
            res.send(result);
        else
            res.send("0")
    })
});
module.exports=router;
//测试 http://localhost:3000/home?itemModel=pc