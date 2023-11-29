var randomnumbers1 = Math.floor(Math.random()*6)+1;  // used for creating random numbers

var dicee = "dice"+randomnumbers1+".png"; // used to create the name of the image

var randomimage1 = "images/"+dicee; // used to locate folder with image name

var image1 = document.querySelectorAll("img")[0]; // it will select the image which you want to change

image1.setAttribute("src", randomimage1); // it will chnage the image finally

var randomnumbers2 = Math.floor(Math.random() * 6 )+1;

var randomimage2 = "images/dice"+randomnumbers2+".png";;

document.querySelectorAll("img")[1].setAttribute("src", randomimage2);


if (randomnumbers1 > randomnumbers2){
    document.querySelector("h1").innerHTML="Player 1 Wins ";
}
else if(randomnumbers1 < randomnumbers2){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Match Draw";
}