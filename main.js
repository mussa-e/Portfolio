
let TabIds = [
    "tab-1",
    "tab-2",
    "tab-3",
    "tab-4",
];


let TabBodies = [
    "da-bubble",
    "el-pollo-loco",
    "join",
    "ongoing-project",
];


function chooseTab(id){

    TabIds.forEach(element => {
        document.getElementById(element).classList.remove("chosen");
    });

    let chosenTab = document.getElementById(id);
    chosenTab.classList.add("chosen");

    handleTab(id);
}


function handleTab(id){

    TabBodies.forEach(element => {
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