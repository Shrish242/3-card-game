// for first player
var randomc01 = Math.floor(Math.random()*13) + 1;
var randomcard01 = "images/" + randomc01 + ".png"; 
document.querySelector(".card1").setAttribute("src", randomcard01);

var randomc02 = Math.floor(Math.random()*13) + 1;
var randomcard02 = "images/" + randomc02 + ".png"; 
document.querySelector(".card2").setAttribute("src", randomcard02);

var randomc03 = Math.floor(Math.random()*13) + 1;
var randomcard03 = "images/" + randomc03 + ".png"; 
document.querySelector(".card3").setAttribute("src", randomcard03);

//for second player
var randomc21 = Math.floor(Math.random()*13) + 1;
var randomcard21 = "images/" + randomc21 + ".png"; 
document.querySelector(".card21").setAttribute("src", randomcard21);

var randomc22 = Math.floor(Math.random()*13) + 1;
var randomcard22 = "images/" + randomc22 + ".png"; 
document.querySelector(".card22").setAttribute("src", randomcard22);

var randomc23 = Math.floor(Math.random()*13) + 1;
var randomcard23 = "images/" + randomc23 + ".png"; 
document.querySelector(".card23").setAttribute("src", randomcard23);

//for third player
var randomc31 = Math.floor(Math.random()*13) + 1;
var randomcard31 = "images/" + randomc31 + ".png"; 
document.querySelector(".card31").setAttribute("src", randomcard31);

var randomc32 = Math.floor(Math.random()*13) + 1;
var randomcard32 = "images/" + randomc32 + ".png"; 
document.querySelector(".card32").setAttribute("src", randomcard32);

var randomc33 = Math.floor(Math.random()*13) + 1;
var randomcard33 = "images/" + randomc33 + ".png"; 
document.querySelector(".card33").setAttribute("src", randomcard33);

//for fourth player
var randomc41 = Math.floor(Math.random()*13) + 1;
var randomcard41 = "images/" + randomc41 + ".png"; 
document.querySelector(".card41").setAttribute("src", randomcard41);

var randomc42 = Math.floor(Math.random()*13) + 1;
var randomcard42 = "images/" + randomc42 + ".png"; 
document.querySelector(".card42").setAttribute("src", randomcard42);

var randomc43 = Math.floor(Math.random()*13) + 1;
var randomcard43 = "images/" + randomc43 + ".png"; 
document.querySelector(".card43").setAttribute("src", randomcard43);

//comparison
var a = randomc01 + randomc02 + randomc03;
var b = randomc21 + randomc22 + randomc23;
var c = randomc31 + randomc32 + randomc33;
var d = randomc41 + randomc42 + randomc43;

if (a > b && a > c && a > d) {
    document.querySelector("h1").innerHTML = "PLAYER 1 WINS!!! YAYYY";
}
else if (b > a && b > c && b > d) {
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS!!! YAYYY";
}
else if ( c > a && c > b && c > d) {
    document.querySelector("h1").innerHTML = ("PLAYER 3 WINS!!! YAYYY");
}
else if( d > a && d > b && d > c)
{
    document.querySelector("h1").innerHTML = ("PLAYER 4 WINS!!! YAYYY");
}
else{
    document.querySelector("h1").innerHTML = ("draw");
}