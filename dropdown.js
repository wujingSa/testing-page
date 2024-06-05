var toggle = document.getElementsByClassName("toggle");
var toggle_on = document.querySelector("#toggle_on");
var toggle_off = document.querySelector("#toggle_off");
var dropdown = document.querySelector(".dropdown");
toggle_on.addEventListener("click", function(){
    toggle_on.style.display = "none";
    toggle_off.style.display = "block";
    dropdown.style.marginLeft = "0px";
})
toggle_off.addEventListener("click", function(){
    toggle_off.style.display = "none";
    toggle_on.style.display = "block";
    dropdown.style.marginLeft = "-1000px";
})