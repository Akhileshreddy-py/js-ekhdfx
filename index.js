

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
{
enemy=document.getElementById("enemy");
var est=getComputedStyle(enemy).left;
console.log(est);
}

detect();
addEventListener("keydown",jump);
