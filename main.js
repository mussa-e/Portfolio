function chooseTab(id){

    let TabIds = [
        "tab-1",
        "tab-2",
        "tab-3",
        "tab-4",
    ];

    TabIds.forEach(element => {
        document.getElementById(element).classList.remove("chosen");
    });

    let chosenTab = document.getElementById(id);
    chosenTab.classList.add("chosen");
}