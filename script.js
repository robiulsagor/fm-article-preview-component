const shareBtn = document.getElementById("card-share-button")
const shareMenu = document.getElementById("card-share")

let isShareMenuOpen = false;

const toggleShareMenu = () => {
 isShareMenuOpen = !isShareMenuOpen;
 shareMenu.classList.toggle("show", isShareMenuOpen);
}

shareBtn.addEventListener("click", toggleShareMenu)