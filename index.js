// alert("Welcome");

var randomNumber1 = Math.random();
var randomNumber2 = Math.random();
randomNumber1 = Math.floor((randomNumber1 * 6)) + 1;
randomNumber2 = Math.floor((randomNumber2 * 6)) + 1;

if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player 1 Wins !";
}
else if(randomNumber1 < randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player 2 Wins !";
}
else
{
  document.querySelector("h1").innerHTML = "Draw!";
}


var i1 = "images/dice"+randomNumber1+".png";
var i2 = "images/dice"+randomNumber2+".png";
var x = document.getElementById('img1');
var y = document.getElementById('img2');
x.setAttribute('src' , i1 );
y.setAttribute('src' , i2);
