let bet=document.getElementById("bet")
let betNum=0
let betcount=document.getElementById("count")
let betNum2=100
let belaya=document.getElementById("belaya")
let belayatachka=document.getElementById("belayamashina")
let krasnayatachka=document.getElementById("drugayamashina")
let krasnaya=document.getElementById("krasnaya")
let betminus=document.getElementById("betminus")
let betplus=document.getElementById("betplus")
betminus.disabled=true
betplus.onclick=()=>{
    console.log(betplus);
    betNum=betNum+10
    bet.innerHTML="твоя ставка:"+betNum
    betNum2=betNum2-10
    betcount.innerHTML="твой счет:"+betNum2
    if (betNum2==0) {
        betplus.disabled=true
    }
    else{
        betminus.disabled=false
    }
}
betminus.onclick=()=>{
    betNum=betNum-10
    bet.innerHTML="твоя ставка:"+betNum
    betNum2=betNum2+10
    betcount.innerHTML="твой счет:"+betNum2
    betplus.disabled=false
    if(betNum==0){
        betminus.disabled=true
    }
}
krasnaya.onclick=()=>{
    let left=20
    let left2=20
    let winner=0
    krasnaya.disabled=true
    belaya.disabled=true
    betminus.disabled=true
    betplus.disabled=true
    let interval=setInterval(function(){
        let speed=Math.random()*2
        left=left+speed
        if (left>window.innerWidth-200) {
            clearInterval(interval)
            krasnaya.disabled=false
            if (winner==0) {
                winner="красная"
                console.log(winner);
                betNum2=betNum2+betNum*2
                if (betNum2>0) {
                    betplus.disabled=false
                }
                betcount.innerHTML="твой счет:"+betNum2
                betNum=0
                bet.innerHTML="твоя ставка:0"
            }
        }
        krasnayatachka.style.left=left+"px"
    },5)

    let interval2=setInterval(function(){
        let speed=Math.random()*2
        left2=left2+speed
        if (left2>window.innerWidth-200) {
            clearInterval(interval2)
            belaya.disabled=false
            if (winner==0) {
                winner="белая"
                console.log(winner);
                betNum=0
                bet.innerHTML="твоя ставка:0"
                if(betNum2>0){
                    betplus.disabled=false
                }

            }
        }
        belayatachka.style.left=left2+"px"
    },5)
}
belaya.onclick=()=>{
    let left=20
    let left2=20
    let winner=0
    krasnaya.disabled=true
    belaya.disabled=true
    betminus.disabled=true
    betplus.disabled=true
    let interval=setInterval(function(){
        let speed=Math.random()*2
        left=left+speed
        if (left>window.innerWidth-200) {
            clearInterval(interval)
            betplus.disabled=false
            belaya.disabled=false
            if (winner==0) {
                winner="белая"
                console.log(winner);
                betNum2=betNum2+betNum*2
                betcount.innerHTML="твой счет:"+betNum2
                if (betNum2>0) {
                    betplus.disabled=false
                }
                betcount.innerHTML="твой счет:"+betNum2
                betNum=0
                bet.innerHTML="твоя ставка:0"
            }
        }
        belayatachka.style.left=left+"px"
    },5)
    let interval2=setInterval(function(){
        let speed=Math.random()*2
        left2=left2+speed
        if (left2>window.innerWidth-200) {
            clearInterval(interval2)
            betplus.disabled=false
            krasnaya.disabled=false
            if (winner==0) {
                winner="красная"
                console.log(winner);
                betNum=0
                bet.innerHTML="твоя ставка:0"
                if (betNum2>0) {
                    betplus.disabled=false
                }
            }
        }
        krasnayatachka.style.left=left2+"px"
    },5)
}