var isClicked = false;

document.querySelector(".icon-wrapper").addEventListener("click",function(){
    var toggle = !isClicked;
    isClicked = toggle;
    if(!isClicked){
        document.querySelector(".contact-onclick").style.display = "none";
        document.querySelector(".icon-wrapper").classList.remove("onclick-class");
    }else{
        document.querySelector(".contact-onclick").style.display = "flex";
        document.querySelector(".icon-wrapper").classList.add("onclick-class");
    }
})