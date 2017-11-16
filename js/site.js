// /* FAQ - SHOW/HIDE FUNCTION */
// function displayFaqAnswer(sender) {
//     let svar = document.getElementById(sender);
//
//     if(svar.style.display != 'block') {
//         svar.style.display = 'block';
//     } else {
//         svar.style.display = 'none';
//     }
// }

function toggleNewMobileMenu() {
    let dropdown = document.getElementById("mobileMenuDropdown");
    let dropdownImage = document.getElementById("mobileMenuButtonImage");
    let menuButton = document.getElementById("mobileMenuText");

    if (dropdown.style.display == "none" || dropdown.style.display == "") {
        dropdown.style.display = "inherit";

        dropdownImage.src = "img/hamburger-menu-close-black.png";
        menuButton.innerHTML = "Lukk";
    }
    else {
        dropdown.style.display = "none";
        dropdownImage.src = "img/hamburger-menu-open-black.png";
        menuButton.innerHTML = "Meny";
    }
}