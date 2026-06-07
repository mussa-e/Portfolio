let tabIds = [
    "tab-1",
    "tab-2",
    "tab-3",
    "tab-4",
];


let tabBodies = [
    "da-bubble",
    "el-pollo-loco",
    "join",
    "ongoing-project",
];


let barChoice = [
    "bar-why-me",
    "bar-skills",
    "bar-projects",
    "bar-contact-me",
    "bar-why-me-mobile",
    "bar-skills-mobile",
    "bar-projects-mobile",
    "bar-contact-me-mobile",
];


let languages = [
    "lang-de",
    "lang-en",
];


/**
 * Selects a tab, updates its visual state, and displays the corresponding content section.
 * @function
 * @param {string} id - The ID of the tab to select.
 * @returns {void}
 */
function chooseTab(id){

    tabIds.forEach(element => {
        document.getElementById(element).classList.remove("chosen");
    });

    let chosenTab = document.getElementById(id);
    chosenTab.classList.add("chosen");

    handleTab(id);
}


/**
 * Displays the content section associated with the selected tab and hides all others.
 * @function
 * @param {string} id - The ID of the selected tab.
 * @returns {void}
 */
function handleTab(id){

    tabBodies.forEach(element => {
        document.getElementById(element).classList.add("d-none");
    });

    if(id == "tab-1"){
        document.getElementById("da-bubble").classList.remove("d-none");
    } else 
    
    if(id == "tab-2"){
        document.getElementById("el-pollo-loco").classList.remove("d-none");
    } else 

    if(id == "tab-3"){
        document.getElementById("join").classList.remove("d-none");
    } else 

    if(id == "tab-4"){
        document.getElementById("ongoing-project").classList.remove("d-none");
    }
}


/**
 * Selects a navigation bar item and updates its visual state.
 * @function
 * @param {string} id - The ID of the navigation bar item to select.
 * @returns {void}
 */
function chooseBar(id){

    barChoice.forEach(element => {
        document.getElementById(element).classList.remove("bar-chosen");
    });

    let chosenBar = document.getElementById(id);
    chosenBar.classList.add("bar-chosen");
}


/**
 * Switches the website language and updates the desktop language selector styles.
 * @function
 * @param {string} id - The ID of the selected language element.
 * @returns {void}
 */
function chooseLanguage(id) {
    resetLanguageStyles();

    const lang = id.includes("-de") ? "de" : "en";

    document
        .getElementById(`lang-${lang}`)
        .classList.add(`chosen-${lang}`);

    document
        .getElementById(`lang-${lang}-parent`)
        .classList.add("chosen-parent");

    setLanguage(lang);
}


/**
 * Resets all desktop language selector styles to their default state.
 * @function
 * @returns {void}
 */
function resetLanguageStyles() {
    ["de", "en"].forEach(lang => {
        document
            .getElementById(`lang-${lang}-parent`)
            .classList.remove("chosen-parent");

        document
            .getElementById(`lang-${lang}`)
            .classList.remove(`chosen-${lang}`);
    });
}


/**
 * Switches the website language and updates the mobile language selector styles.
 * @function
 * @param {string} id - The ID of the selected mobile language element.
 * @returns {void}
 */
function chooseLanguageMobile(id) {
    resetLanguageMobileStyles();

    const lang = id.includes("-de-") ? "de" : "en";

    document
        .getElementById(`lang-${lang}-mobile`)
        .classList.add(`chosen-${lang}`);

    document
        .getElementById(`lang-${lang}-parent-mobile`)
        .classList.add("chosen-parent-mobile");

    setLanguage(lang);
}


/**
 * Resets all mobile language selector styles to their default state.
 * @function
 * @returns {void}
 */
function resetLanguageMobileStyles() {
    ["de", "en"].forEach(lang => {
        document
            .getElementById(`lang-${lang}-parent-mobile`)
            .classList.remove("chosen-parent-mobile");

        document
            .getElementById(`lang-${lang}-mobile`)
            .classList.remove(`chosen-${lang}`);
    });
}
