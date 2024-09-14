let random1=Math.random()*5;
random1=(Number(random1.toFixed(0)));

var c= "images/"+"dice"+String(random1)+".png"
document.querySelectorAll("img")[0].setAttribute("src",c);

let random2=Math.random()*5;
random2=(Number(random2.toFixed(0)));
var c1= "images/"+"dice"+String(random2)+".png"
document.querySelectorAll("img")[1].setAttribute("src",c1);

if (random1>random2){
    document.querySelector("h1").textContent=" player 1 win";
}
else if (random2 >random1){
    document.querySelector("h1").textContent=" player 2 win";
}
else{
    document.querySelector("h1").textContent=" Draw";
}