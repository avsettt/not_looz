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

