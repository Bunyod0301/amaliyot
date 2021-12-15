
function scrls() {
   const  cnt = window.scrollY
   if(cnt>=800) {
       document.getElementById("scrlk").style.zIndex = '999'
       document.getElementById("scrlk").style.display = 'inline-block'
   }
   else {
       document.getElementById("scrlk").style.display = "none"
   }
   if(cnt>=100) {
       document.getElementById("menu1").style.position = "fixed"
       document.getElementById('menu1').style.zIndex = '999'
       document.getElementById("menu1").style.width = "100%"
       document.getElementById("menu1").style.transform = 'translate(0px, -80px)'
   }
   else {
       document.getElementById("menu1").style.position = "relative"
       document.getElementById("menu1").style.transform = 'translate(0px, 0px)'
   }
   if(cnt>=1901) {
        document.getElementById("rasm1").style.display = 'block'
        document.getElementById("rasm1").style.position = 'relative'
      setInterval(function(){
        document.getElementById("rasm1").style.marginLeft = '100px'
      },1500) 
   }
   if(cnt>=2300) {
            document.getElementById("rasm2").style.display = 'block'
            document.getElementById("rasm2").style.position = 'relative'
        setInterval(function(){
            document.getElementById("rasm2").style.marginLeft = '100px'
        },1500)
   }
   console.log(cnt)                                                                                                                                                                                                                                                                               
}