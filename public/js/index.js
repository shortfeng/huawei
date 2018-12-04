$(()=>{
    setInterval(function () {
        var date = new Date;
        // console.log(date.getHours())
        var nowHour = parseInt(date.getHours())
        // console.log(nowHour)
        var targetTime = nowHour +1
        // console.log(targetTime)
        $(".time-title").html(`${targetTime}:00`)
        var nowMinutes = date.getMinutes()
        var minutes = 60-nowMinutes-1
        // console.log(60-nowMinutes-1)
        if(minutes<10){
            $(".minutes").html(`0${minutes}`)
        }else{
            $(".minutes").html(`${minutes}`)
        }
        var nowSeconds = date.getSeconds()
        var seconds = 60-nowSeconds-1
        if(seconds<10){
            $(".seconds").html(`0${seconds}`)
        }else{
            $(".seconds").html(`${seconds}`)
        }
    },1000);
})/**
 * Created by web-01 on 2018/8/23.
 */
