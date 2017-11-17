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

        dropdownImage.src = "img/hamburger-menu-close.png";
        menuButton.innerHTML = "Lukk";
    }
    else {
        dropdown.style.display = "none";
        dropdownImage.src = "img/hamburger-menu-open.png";
        menuButton.innerHTML = "Meny";
    }
}

//Fadder Javascript
function Fadder(name, info, imagePath) {
    this.name = name;
    this.info = info;
    this.imagePath = imagePath;
}

let faddere = {};
faddere[0] = new Fadder("Anders", "Han går dataingeniør på HiOA. Han elsker alt som finnes av ballsport, fotball, innebandy, basketball you name it! Ansvarlig for planlegging av turneringer i helgene der alle fadderbarn kan delta og vinne premier.", "img/anders.jpg");
faddere[1] = new Fadder("Si-Jane Woo", "Hun går dataingeniør på HiOA. Hun er tidliger profesjonell dans utøver og hun elsker å lære bort det hun kan. Hun har også en lidenskap for mat og snakker fire språk flytende.","img/cj.jpg");
faddere[2] = new Fadder("Kristoffer Farstad", "Han går dataingeniør på HiOA. Han liker dataspill, fotball og fjellturer. Han er aktiv i ledelsen og planlegger stadig større events for Friminutt, slik at alle skal få en fantastisk opplevelse.", "img/kristoffer.jpg");

function changeFadder(index) {
    let fadder = faddere[index];

    let name = document.getElementById("fadder-name");
    let text = document.getElementById("fadder-text");
    let image = document.getElementById("fadder-image");

    name.innerHTML = fadder.name;
    text.innerHTML = fadder.info;
    image.src = fadder.imagePath;

    //console.log(fadder);
}