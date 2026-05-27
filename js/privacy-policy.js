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


function chooseLanguagePrivacy(id) {
    resetLanguagePrivacyStyles();

    const lang = id.includes("-de-") ? "de" : "en";

    document
        .getElementById(`lang-${lang}-privacy`)
        .classList.add(`chosen-${lang}`);

    document
        .getElementById(`lang-${lang}-parent-privacy`)
        .classList.add("chosen-parent");

    setLanguage(lang);
}


function resetLanguagePrivacyStyles() {
    ["de", "en"].forEach(lang => {
        document
            .getElementById(`lang-${lang}-parent-privacy`)
            .classList.remove("chosen-parent");

        document
            .getElementById(`lang-${lang}-privacy`)
            .classList.remove(`chosen-${lang}`);
    });
}