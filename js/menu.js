let menuOpen;


function openMenu(){
    menuOpen = !menuOpen;

    document.getElementById("potrait").classList.toggle("d-none");
    document.getElementById("bar-mobile").classList.toggle("active");
    document.getElementById("bar-language-mobile").classList.toggle("active");
    document.getElementById("top-right").classList.toggle("top-right-top-position");

    if(menuOpen){
        document.getElementById("menu-index-img").src = "img/close.svg";
    } else {
        document.getElementById("menu-index-img").src = "img/menu-2.svg";
    }

}