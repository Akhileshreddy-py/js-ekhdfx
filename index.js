

// Import stylesheets
import './style.css';
var est;
var enemy;
var s=document.getElementById("dino");
function jump(e)
{
s.classList.add("Dino");
setTimeout(()=>s.classList.remove("Dino"),400);
}
function detect()
{var d=getComputedStyle(s).top;
  enemy=document.getElementById("enemy");
var est=parseInt(getComputedStyle(enemy).left);
if(est<=10 && est>=0 && d<=10 && d>=0)
{ 
document.getElementById("gameover").innerHTML=est;//  alert("game ")
console.log("game over");
}
}
setInterval(detect,10);
//detect();
addEventListener("keydown",jump);