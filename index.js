

// Import stylesheets
import './style.css';
var d;
var est;
var enemy;
var s=document.getElementById("dino");
function jump(e) 
{
s.classList.add("Dino");
setTimeout(()=>s.classList.remove("Dino"),400);
}
function detect()
{var s=document.getElementById("dino");
   var top=parseInt(getComputedStyle(s).top);
  enemy=document.getElementById("enemy");
var est=parseInt(getComputedStyle(enemy).left);
if(est<=10 && est>=0 && top<=165 && top>=155 )
{ 
document.getElementById("gameover").innerHTML=est+" top :"+top;//  alert("game ")
console.log("game over");
}
}
setInterval(detect,1 );
//detect();
addEventListener("keydown",jump);