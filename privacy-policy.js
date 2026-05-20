function openMenuPrivacy(){
    document.getElementById("privacy-menu-wrapper").classList.toggle("active");
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