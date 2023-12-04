var start=document.querySelector("#start")
var box=document.querySelector("#box")
var stops=document.querySelector("#stop")

start.addEventListener("click",function(){
    box.style.animation=" moved 1s 0ms ease-out linear infinite"
    start.style.backgroundColor="grey"
    
})
stops.addEventListener("click",function(){
    box.style.animation="none"
    box.style.transition=" all ease .8s"

})
