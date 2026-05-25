let menuOpenLegal;

function openMenuLegal(){
    
    menuOpenLegal = !menuOpenLegal;

    document.getElementById("legal-menu-wrapper").classList.toggle("active");

    if(menuOpenLegal){
        document.getElementById("menu-legal-img").src = "img/close.svg";
    } else {
        document.getElementById("menu-legal-img").src = "img/menu-2.svg";
    }
}


function chooseLanguageLegal(id){

    let deParentLegal = document.getElementById("lang-de-parent-legal");
    let enParentLegal = document.getElementById("lang-en-parent-legal");
    let deLegal = document.getElementById("lang-de-legal");
    let enLegal = document.getElementById("lang-en-legal");

    deParentLegal.classList.remove("chosen-parent");
    enParentLegal.classList.remove("chosen-parent");
    deLegal.classList.remove("chosen-de");
    enLegal.classList.remove("chosen-en");

    if(id == "lang-de-legal"){
        deLegal.classList.add("chosen-de");
        deParentLegal.classList.add("chosen-parent");
        setLanguage("de");
    } else 

    if(id == "lang-en-legal"){
        enLegal.classList.add("chosen-en");
        enParentLegal.classList.add("chosen-parent");
        setLanguage("en");
    }
}