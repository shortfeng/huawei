var pics =[
  {pid: 13, laptop_id: 5, sm: "img/product/sm/phone-sm1.png", md: "https://res.vmallres.com/pimages//product/6901443223473/428_428_1542936556453mp.png", lg: "https://res.vmallres.com/pimages//product/6901443223473/800_800_1542936556453mp.png"},
  {pid: 14, laptop_id: 5, sm: "img/product/sm/phone-sm2.jpg", md: "https://res.vmallres.com/pimages//product/6901443223473/group//428_428_1523151332632.jpg", lg: "https://res.vmallres.com/pimages//product/6901443223473/group//800_800_1523151332632.jpg"},
  {pid: 15, laptop_id: 5, sm: "img/product/sm/phone-sm3.jpg", md: "https://res.vmallres.com/pimages//product/6901443223473/group//428_428_1523430493553.jpg", lg: "https://res.vmallres.com/pimages//product/6901443223473/group//800_800_1523430493553.jpg"},
  {pid: 16, laptop_id: 5, sm: "img/product/sm/phone-sm4.jpg", md: "https://res.vmallres.com/pimages//product/6901443223473/group//428_428_1523151332633.jpg", lg: "https://res.vmallres.com/pimages//product/6901443223473/group//800_800_1523151332633.jpg"},
  {pid: 17, laptop_id: 5, sm: "img/product/sm/phone-sm5.jpg", md: "https://res.vmallres.com/pimages//product/6901443223473/group//428_428_1523430494113.jpg", lg: "https://res.vmallres.com/pimages//product/6901443223473/group//800_800_1523430494113.jpg"},
  {pid: 18, laptop_id: 5, sm: "img/product/sm/phone-sm6.jpg", md: "https://res.vmallres.com/pimages//product/6901443223473/group//428_428_1523151332634.jpg", lg: "https://res.vmallres.com/pimages//product/6901443223473/group//800_800_1523151332634.jpg"}
]
      var divPrev=document.getElementById("preview");
      var ul=divPrev.querySelector(
        "div>div.card-body>div>ul"
      );
      var html="";
      for(var pic of pics){
        var {sm,md,lg}=pic;
        html+=`<li class="float-left p-1">
          <img src="${sm}" data-md="${md}" data-lg="${lg}">
        </li>`
      }
      ul.innerHTML=html;
      ul.style.width=62*pics.length+"px";
      var mImg=divPrev.querySelector(
        "div>img.card-img-top"
      )
      mImg.src=pics[0].md;
      var lgDiv=document.getElementById("div-lg");
      lgDiv.style.backgroundImage=`url(${pics[0].lg})`;
      //鼠标进入每个小图片，切换中图片和大图片
      ul.onmouseover=function(e){
        if(e.target.nodeName==="IMG"){
          var img=e.target;
          var md=img.dataset.md;
          var lg=img.dataset.lg;
          mImg.src=md;
          lgDiv.style.backgroundImage=`url(${lg})`;
        }
      }
      //小图片左右移动
      var $ul=$(ul);
      var $left=//找到左边按钮-后退按钮
        $("#preview>div>div.card-body>img:first")
      //找到右边按钮-前进按钮
      var $right=$left.nextAll().last()
      //如果pics中图片总数<=4
      if(pics.length<=4)
        //为右边按钮添加disabled class
        $right.addClass("disabled")
      var moved=0;//记录已经左移的图片个数
      $left.on("click",function(){
        var $left=$(this);
        if(!$left.is(".disabled")){
          moved--;//已经左移的图片个数-1
          //ul的marginLeft始终等于:-li宽度62*左移图片个数
          $ul.css("marginLeft",-62*moved)//不用px
          $right.removeClass("disabled")
          if(moved==0)
            $left.addClass("disabled")
        }
      })
      $right.on("click",function(){
        var $right=$(this);
        if(!$right.is(".disabled")){
          moved++;//已经左移的图片个数+1
          $ul.css("marginLeft",-62*moved)
          //让左边按钮去掉disabled class
          $left.removeClass("disabled")
          //如果pics中的图片总个数-moved次数==4
          if(pics.length-moved==4)
            //为右边按钮加上disabled class
            $right.addClass("disabled")
        }
      })

      var $mImg=$(mImg),//中图片
          $lgDiv=$(lgDiv),//大图片
          $mask=$("#mask"),//半透明遮罩
          $smask=$("#super-mask");//透明玻璃板
      var MSIZE=176,//mask的大小
          MAX=352-MSIZE;//top和left的最大值
      $smask
      .hover(
        function(){
          $mask.toggleClass("d-none");
          $lgDiv.toggleClass("d-none");
        }
      )
      .mousemove(function(e){
        var left=e.offsetX-MSIZE/2;
        var top=e.offsetY-MSIZE/2;
        if(left<0) left=0; 
        else if(left>MAX) left=MAX;
        if(top<0) top=0;
        else if(top>MAX) top=MAX;
        $mask.css({left,top});
        $lgDiv.css("background-position",
          `-${16/7*left}px -${16/7*top}px`)
      })







      $(function(){
        /*-----------------获取导航栏固定效果------------------------------*/
        function fixedNav(){
            var nav=$(".navScroll");
            var win=$(window);
            var sc=$(document);
            win.scroll(function(){
                if(sc.scrollTop()>=620){
                    nav.addClass("fixed");
                    //console.log(sc.scrollTop());
                } else 
                  nav.removeClass("fixed");
            })
        }
        fixedNav();
        /*--------------------------电梯效果----------------*/
        function lift(){
            //电梯导航
            //1.获取固定导航栏的元素
            var navLi=$("li.nav-item");
            //2.获取楼层元素
            var navFl=$("div.fl");
            $(window).scroll(function(){
                var scrollTop=$(window).scrollTop();
                var liftF1=$("div.section-head").offset().top;
                if(scrollTop<liftF1){
                    navLi.eq(0).removeClass("active");
                }
                navFl.each((i,navFl)=>{
                    var $f=$(navFl);
                    var offsetTop=$f.offset().top;//当前元素距离页面顶端的距离
                    if(offsetTop<=scrollTop+100){
                        navLi.eq(i).siblings().removeClass("active");
                        navLi.eq(i).addClass("active");
                        //给当前楼层对应的li加上样式，其他的清除样式
                    }
                })
                var btn=navLi.children();
                btn.click(function(e){
                e.preventDefault();
                var $btn=$(this);
                var li=$btn.parent();
                console.log(li);
                var i=li.index();
                console.log(i);
                var $fi=$("div.fl").eq(i);
                console.log($fi);
                var offsetTop=$fi.offset().top;
                console.log(offsetTop);
                $("html").stop(true).animate({"scrollTop":offsetTop-70},1000);
                })
            })
        }
        lift();
      })


/////////////////////////返回顶部
$(function(){
        //当滚动条的位置处于距顶部liftF1像素以下时，跳转链接出现，否则消失
        $(function () {
          var liftF1=$("div.section-head").offset().top;
            $(window).scroll(function(){
                if ($(window).scrollTop()>liftF1){
                    $("#back-to-top").fadeIn(800);
                }
                else
                {
                    $("#back-to-top").fadeOut(800);
                }
            });

            //当点击跳转链接后，回到页面顶部位置
            $("#back-to-top").click(function(){
                //$('body,html').animate({scrollTop:0},1000);
        if ($('html').scrollTop()) {
                $('html').animate({ scrollTop: 0 }, 500);
                return false;
            }
            $('body').animate({ scrollTop: 0 }, 500);
                 return false;            
           });       
     });    
});
