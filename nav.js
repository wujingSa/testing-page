window.addEventListener("scroll", function(){
    var navbar = document.querySelector(".nav-bar");
    var scrollposition = window.scrollY || document.documentElement.scrollTop;
    if (scrollposition > 470){
        navbar.style.backgroundColor = "rgb(61, 4, 61)";
    }else{
        navbar.style.backgroundColor = "transparent";
    }
})

window.addEventListener("scroll", () => {
    var about = document.querySelector(".about");
    var experience = document.querySelector(".experience");
    var portfolio = document.querySelector(".porto");
    var education = document.querySelector(".education");
    var connect = document.querySelector(".concept");

    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    function setBackgroundColorAndTextColor(element, start, end, bgColor, textColor) {
        if (scrollPosition > start && scrollPosition < end) {
            element.style.backgroundColor = bgColor;
            element.style.color = textColor; // Change text color
            element.style.borderRadius = "10px";
        } else {
            element.style.backgroundColor = "transparent";
            element.style.color = "initial"; // Reset text color
        }
    }

    setBackgroundColorAndTextColor(about, 470, 750, "rgba(3, 86, 97, 0.8)", "black");
    setBackgroundColorAndTextColor(experience, 750, 1150, "rgba(3, 86, 97, 0.8)", "black");
    setBackgroundColorAndTextColor(portfolio, 1150, 1430, "rgba(3, 86, 97, 0.8)", "black");
    setBackgroundColorAndTextColor(education, 1430, 1900, "rgba(3, 86, 97, 0.8)", "black");
    // setBackgroundColorAndTextColor(connect, 2000, 2100, "white", "black");
});
