var d,h,m,s;

function init(){
h='15';
m='15';
s='15';
clock();
}

function clock(){
s--;
if(s==0)
{
s=60;
m--;
if(m==0)
{
m=60;
h--;
if(h==0)
{
h=24;
}
}
}
change('seconds',s);
change('minutes',m);
change('hours',h);
setTimeout(clock,1000);
}

function change(id,val){
if(val<10){
val='0'+val;
}
if(id=='hr')
{
if(val<13){
val=val;
}
else{
val=val-12;
}
}
document.getElementById(id).innerHTML=val;
}

window.onload=init();