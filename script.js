const shareBtn = document.getElementById("card-share-button")
const shareMenu = document.getElementById("card-share")
const card = document.querySelector(".card")

let isShareMenuOpen = false;

const toggleShareMenu = () => {
 isShareMenuOpen = !isShareMenuOpen;
 shareMenu.classList.toggle("show", isShareMenuOpen);
 card.style.overflow = isShareMenuOpen ? "visible" : "hidden";
}

shareBtn.addEventListener("click", toggleShareMenu)