// Import stylesheets
import './style.css';

var s=document.getElementById("dino");
function jump(e)
{
s.classList.add("Dino");
setTimeout(()=>s.classList.remove("Dino"),400);
}
addEventListener("keydown",jump);