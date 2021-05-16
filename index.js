// Import stylesheets
import './style.css';

// Write Javascript code!
var j=0;
var ak;
var dino=document.getElementById("dino");
var sub;
function jump()
{
sub=165-j;
dino.style.top=sub+"px";
j=j+1;
if( j>=30)
{
j=-30;
clearInterval(ak);
dino.style.top=175+"px";
ak=setInterval(jump,30)
}
}
ak=setInterval(jump,30);

