let menuOpen = false;


/**
 * Toggles the mobile menu state and updates related UI elements.
 * @function
 * @returns {void}
 */
function openMenu() {
    menuOpen = !menuOpen;

    document.getElementById("potrait").classList.toggle("d-none");
    document.getElementById("bar-mobile").classList.toggle("active");
    document.getElementById("bar-language-mobile").classList.toggle("active");
    document.getElementById("top-right").classList.toggle("top-right-top-position");

    document.getElementById("menu-index-img").src = menuOpen
        ? "img/close.svg"
        : "img/menu-2.svg";
}


/**
 * Closes the mobile menu and resets all related UI elements.
 * @function
 * @returns {void}
 */
function closeMenu() {
    if (!menuOpen) return;

    menuOpen = false;

    document.getElementById("potrait").classList.remove("d-none");
    document.getElementById("bar-mobile").classList.remove("active");
    document.getElementById("bar-language-mobile").classList.remove("active");
    document.getElementById("top-right").classList.remove("top-right-top-position");

    document.getElementById("menu-index-img").src = "img/menu-2.svg";
}


/**
 * Closes the mobile menu when a click occurs outside the menu area.
 * @function
 * @param {MouseEvent} event - The click event object.
 * @returns {void}
 */
document.addEventListener("click", function(event) {
    const menu = document.getElementById("bar-mobile");
    const button = document.getElementById("menu-button");
    const lang = document.getElementById("bar-language-mobile");

    if (
        menuOpen &&
        !menu.contains(event.target) &&
        !button.contains(event.target) &&
        !lang.contains(event.target)
    ) {
        closeMenu();
    }
});


/**
 * Closes the mobile menu when the user scrolls beyond the viewport height.
 * @function
 * @returns {void}
 */
window.addEventListener("scroll", function () {
    if (menuOpen && window.scrollY > window.innerHeight) {
        closeMenu();
    }
});


