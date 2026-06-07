let tabs = [
    document.getElementById("tab-1"),
    document.getElementById("tab-2"),
    document.getElementById("tab-3"),
    document.getElementById("tab-4"),
];


const originalTexts = [
    "1. Pokedex",
    "2. El Pollo Loco",
    "3. Join",
    "4. Ongoing Project",
];


/**
 * Updates the tab labels based on the current viewport width.
 * Displays shortened labels on screens with a width of 1280px or less
 * and restores the original tab texts on larger screens.
 *
 * @function
 * @returns {void}
 */
function changeTabsContent() {
    if (window.innerWidth <= 1280) {

        tabs.forEach((tab, index) => {
            tab.innerHTML = `${index + 1}. Project`;
        });

    } else {

        tabs.forEach((tab, index) => {
            tab.innerHTML = originalTexts[index];
        });
    }
}


changeTabsContent();

window.addEventListener("resize", changeTabsContent);