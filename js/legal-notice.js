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


function chooseLanguageLegal(id) {
    resetLanguageLegalStyles();

    const lang = id.includes("-de-") ? "de" : "en";

    document
        .getElementById(`lang-${lang}-legal`)
        .classList.add(`chosen-${lang}`);

    document
        .getElementById(`lang-${lang}-parent-legal`)
        .classList.add("chosen-parent");

    setLanguage(lang);
}

function resetLanguageLegalStyles() {
    ["de", "en"].forEach(lang => {
        document
            .getElementById(`lang-${lang}-parent-legal`)
            .classList.remove("chosen-parent");

        document
            .getElementById(`lang-${lang}-legal`)
            .classList.remove(`chosen-${lang}`);
    });
}