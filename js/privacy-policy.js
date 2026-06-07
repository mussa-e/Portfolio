let menuOpenPrivacy;


/**
 * Toggles the privacy menu visibility and updates the menu icon.
 * @function
 * @returns {void}
 */
function openMenuPrivacy(){
    menuOpenPrivacy = !menuOpenPrivacy;

    document.getElementById("privacy-menu-wrapper").classList.toggle("active");

    if(menuOpenPrivacy){
        document.getElementById("menu-privacy-img").src = "img/close.svg";
    } else {
        document.getElementById("menu-privacy-img").src = "img/menu-2.svg";
    }
}


/**
 * Selects a language option in the privacy menu and updates the UI styles.
 * @function
 * @param {string} id - The ID of the selected language element
 * @returns {void}
 */
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


/**
 * Removes all active language selection styles from the privacy menu.
 * @function
 * @returns {void}
 */
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