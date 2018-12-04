$(function(){
    //ajax("http://localhost:3000/index")
    $.ajax({
        url:"http://localhost:3000/home?itemModel=pc",
        type:"get",
        dataType:"json" //JSON.parse(res)
    })
        .then(pc=>{
            //var products=JSON.parse(res);
            var vm_f1=new Vue({
                el:"#f1",
                data:{
                    pc,
                }
            })
        });
});
$(function(){
    //ajax("http://localhost:3000/index")
    $.ajax({
        url:"http://localhost:3000/home?itemModel=mini",
        type:"get",
        dataType:"json" //JSON.parse(res)
    })
        .then(mini=>{
            //var products=JSON.parse(res);
            var vm_f1=new Vue({
                el:"#f2",
                data:{
                    mini,
                }
            })
        });
});
$(function(){
    //ajax("http://localhost:3000/index")
    $.ajax({
        url:"http://localhost:3000/home?itemModel=watch",
        type:"get",
        dataType:"json" //JSON.parse(res)
    })
        .then(watch=>{
            //var products=JSON.parse(res);
            var vm_f3=new Vue({
                el:"#f3",
                data:{
                    watch,
                }
            })
        });
});
$(function(){
    //ajax("http://localhost:3000/index")
    $.ajax({
        url:"http://localhost:3000/home?itemModel=wifi",
        type:"get",
        dataType:"json" //JSON.parse(res)
    })
        .then(wifi=>{
            //var products=JSON.parse(res);
            var vm_f4=new Vue({
                el:"#f4",
                data:{
                    wifi,
                }
            })
        });
});
$(function(){
    //ajax("http://localhost:3000/index")
    $.ajax({
        url:"http://localhost:3000/home?itemModel=other",
        type:"get",
        dataType:"json" //JSON.parse(res)
    })
        .then(other=>{
            //var products=JSON.parse(res);
            var vm_f5=new Vue({
                el:"#f5",
                data:{
                    other,
                }
            })
        });
});
$(function(){
    //ajax("http://localhost:3000/index")
    $.ajax({
        url:"http://localhost:3000/home?itemModel=phone",
        type:"get",
        dataType:"json" //JSON.parse(res)
    })
        .then(phone=>{
            //var products=JSON.parse(res);
            var vm_f6=new Vue({
                el:"#f6",
                data:{
                    phone,
                }
            })
        });
});
$(function(){
    //ajax("http://localhost:3000/index")
    $.ajax({
        url:"http://localhost:3000/home?itemModel=hot",
        type:"get",
        dataType:"json" //JSON.parse(res)
    })
        .then(hot=>{
            //var products=JSON.parse(res);
            var vm_f7=new Vue({
                el:"#f7",
                data:{
                    hot,
                }
            })
        });
});

/////////////////////////////////电梯效果////////////////////////
var oNav = $('#LoutiNav');//导航壳
var aNav = oNav.find('li');//导航
var aDiv = $('#main .mycontainer .loucengqianzhui .louceng');//楼层
var oTop = $('#goTop');
var myH=document.getElementById("mH");
var f7=document.getElementById("hotH")
var f6=document.getElementById("phoneH")
var f5=document.getElementById("pcH")
var f4=document.getElementById("miniH")
var f3=document.getElementById("watchH")
var f2=document.getElementById("wifiH")
var f1=document.getElementById("otherH")
 //回到顶部
 $(window).scroll(function(){
      //var winH = $(window).height();//可视窗口高度
      var iTop = $(window).scrollTop();//鼠标滚动的距离
      if(iTop>=myH.offsetTop){
          oNav.fadeIn();
          oTop.fadeIn();
        //console.log(iTop)
      // console.log(f7.offsetTop)
       // console.log(f6.offsetTop)
        //console.log(iTop)
        if(f6.offsetTop>iTop&&iTop>f7.offsetTop*1.1){
            console.log(1);
            aNav.removeClass("active")
            oNav.children("li:nth-child(1)").addClass("active");
        }else if(f5.offsetTop>iTop&&iTop>=f6.offsetTop){
            console.log(1);
            aNav.removeClass("active")
            oNav.children("li:nth-child(2)").addClass("active");
        }else if(f4.offsetTop>iTop&&iTop>=f5.offsetTop*1.2){
            aNav.removeClass("active")
            oNav.children("li:nth-child(3)").addClass("active");
        }else if(f3.offsetTop>iTop&&iTop>=f4.offsetTop){
            aNav.removeClass("active")
            oNav.children("li:nth-child(4)").addClass("active");
        }else if(f2.offsetTop*1.1>iTop&&iTop>=f3.offsetTop){
            aNav.removeClass("active")
            oNav.children("li:nth-child(5)").addClass("active");
        }else if(f1.offsetTop*1.1>iTop&&iTop>=f2.offsetTop){
            aNav.removeClass("active")
            oNav.children("li:nth-child(6)").addClass("active");
        }else if(iTop>=f1.offsetTop){
            aNav.removeClass("active")
            oNav.children("li:nth-child(7)").addClass("active");
        }
        
      //鼠标滑动式改变	
      }else{
          oNav.fadeOut();
          oTop.fadeOut();
      }
 })
 //点击top回到顶部
 oTop.click(function(){
     $('body,html').animate({"scrollTop":0},500)
 })
 //点击回到当前楼层
 aNav.click(function(){
     var t = aDiv.eq($(this).index()).offset().top;
     $('body,html').animate({"scrollTop":t},500);
     $(this).addClass('active').siblings().removeClass('active');
 });