var icon = document.getElementById("my_icon");
var menujs = document.getElementById("myMenu");
icon.addEventListener("click", cntrol)
function cntrol(){

   if(menujs.className === "menu"){
    menujs.className += " jscod";
      }
    else {
        menujs.className = "menu";
    }
}











var myNorm1 = document.getElementById("norm1");
var myCard1 = document.getElementById("card1");
myNorm1.addEventListener("click", uberGrup1);

function uberGrup1(){
    if(myCard1.className === "photo_card"){
        myCard1.className += " lock";
    }
    else {
        myCard1.className = "photo_card"
    }
}


var myNorm2 = document.getElementById("norm2");
var myCard2 = document.getElementById("card2");
myNorm2.addEventListener("click", uberGrup2);

function uberGrup2(){
    if(myCard2.className === "photo_card"){
        myCard2.className += " lock";
    }
    else {
        myCard2.className = "photo_card"
    }
}

var myNorm3 = document.getElementById("norm3");
var myCard3 = document.getElementById("card3");
myNorm3.addEventListener("click", uberGrup3);

function uberGrup3(){
    if(myCard3.className === "photo_card"){
        myCard3.className += " lock";
    }
    else {
        myCard3.className = "photo_card"
    }
}
