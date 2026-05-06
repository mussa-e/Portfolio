
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
];

let languages = [
    "lang-de",
    "lang-en",
];

let agreedTerms = false;


function chooseTab(id){

    tabIds.forEach(element => {
        document.getElementById(element).classList.remove("chosen");
    });

    let chosenTab = document.getElementById(id);
    chosenTab.classList.add("chosen");

    handleTab(id);
}


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


function chooseBar(id){

    barChoice.forEach(element => {
        document.getElementById(element).classList.remove("bar-chosen");
    });

    let chosenBar = document.getElementById(id);
    chosenBar.classList.add("bar-chosen");
}


function chooseLanguage(id){

    let deParent = document.getElementById("lang-de-parent");
    let enParent = document.getElementById("lang-en-parent");
    let de = document.getElementById("lang-de");
    let en = document.getElementById("lang-en");

    deParent.classList.remove("chosen-parent");
    enParent.classList.remove("chosen-parent");
    de.classList.remove("chosen-de");
    en.classList.remove("chosen-en");

    if(id == "lang-de"){
        de.classList.add("chosen-de");
        deParent.classList.add("chosen-parent");
    } else 

    if(id == "lang-en"){
        en.classList.add("chosen-en");
        enParent.classList.add("chosen-parent");
    }
}


function toggleAgree() {

    let checkBox = document.getElementById("agree-img");

    if (checkBox.src.includes("check-box.svg")) {
        checkBox.src = "img/haekchen4.png";
        agreedTerms = true;
    } else {
        checkBox.src = "img/check-box.svg";
        agreedTerms = false;
    }
}

