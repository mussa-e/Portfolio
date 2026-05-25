let menuOpenPrivacy;

function openMenuPrivacy(){
    menuOpenPrivacy = !menuOpenPrivacy;

    document.getElementById("privacy-menu-wrapper").classList.toggle("active");

    if(menuOpenPrivacy){
        document.getElementById("menu-privacy-img").src = "img/close.svg";
    } else {
        document.getElementById("menu-privacy-img").src = "img/menu-2.svg";
    }
}


function chooseLanguagePrivacy(id){

    let deParentPrivacy = document.getElementById("lang-de-parent-privacy");
    let enParentPrivacy = document.getElementById("lang-en-parent-privacy");
    let dePrivacy = document.getElementById("lang-de-privacy");
    let enPrivacy = document.getElementById("lang-en-privacy");

    deParentPrivacy.classList.remove("chosen-parent");
    enParentPrivacy.classList.remove("chosen-parent");
    dePrivacy.classList.remove("chosen-de");
    enPrivacy.classList.remove("chosen-en");

    if(id == "lang-de-privacy"){
        dePrivacy.classList.add("chosen-de");
        deParentPrivacy.classList.add("chosen-parent");
        setLanguage("de");
    } else 

    if(id == "lang-en-privacy"){
        enPrivacy.classList.add("chosen-en");
        enParentPrivacy.classList.add("chosen-parent");
        setLanguage("en");
    }
}