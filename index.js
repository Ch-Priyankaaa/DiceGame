var player1 = prompt("Name of player 1");
var player2 = prompt("Name of player 2");

document.getElementsByClassName("players")[0].innerHTML = player1;
document.getElementsByClassName("players")[1].innerHTML = player2;

var randomNumber1 = Math.ceil(Math.random()*6);
var imagesrc1 = "dice" + randomNumber1 +".png";
document.querySelector(".img1").setAttribute("src" ,imagesrc1);

var randomNumber2 = Math.ceil(Math.random()*6);
var imagesrc2 = "dice" + randomNumber2 +".png";
document.querySelector(".img2").setAttribute("src" ,imagesrc2);

if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML = "🏳    DRAW    🏳";
}

else if(randomNumber1 > randomNumber2){
   document.querySelector("h1").innerHTML = "🚩 "  + player1 + " Wins";
}

else document.querySelector("h1").innerHTML = player2 + " Wins 🚩";
