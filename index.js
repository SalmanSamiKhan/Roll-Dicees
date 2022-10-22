// Generating 2 random numbers between 1-6 including 6
let n1 = Math.floor(Math.random()*6+1);
let n2 = Math.floor(Math.random()*6+1);
// Creating image path string using random numbers n1 and n2
let img1 = "images/dice"+n1+".png";
let img2 = "images/dice"+n2+".png";
// Changing image paths depending on random numbers
document.querySelectorAll("img")[0].setAttribute("src", img1);
document.querySelectorAll("img")[1].setAttribute("src", img2);

// Result time!
if(n1>n2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
}
else if(n1<n2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
}
else{
    document.querySelector("h1").innerHTML = "Tie!"
}