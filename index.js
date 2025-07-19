var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage="images/dice" + randomNumber1 +".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImageSource="images/dice" +randomNumber2 +".png";
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomImageSource);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="&#128681player1winner";
}
    else if(randomNumber1<randomNumber2){
        document.querySelector("h1").innerHTML="&#128681player2winner";
    }
    else{
        document.querySelector("h1").innerHTML="Match Draw";
    }
