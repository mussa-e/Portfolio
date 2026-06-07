let menuOpenLegal;


/**
 * Toggles the legal page navigation menu and updates the menu icon.
 * @function
 * @returns {void}
 */
function openMenuLegal(){
    
    menuOpenLegal = !menuOpenLegal;

    document.getElementById("legal-menu-wrapper").classList.toggle("active");

    if(menuOpenLegal){
        document.getElementById("menu-legal-img").src = "img/close.svg";
    } else {
        document.getElementById("menu-legal-img").src = "img/menu-2.svg";
    }
}


/**
 * Selects a language option, updates the corresponding styles,
 * and sets the application language.
 * @function
 * @param {string} id - The ID of the clicked language element.
 * @returns {void}
 */
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


/**
 * Removes all active language selection styles from the legal page.
 * @function
 * @returns {void}
 */
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