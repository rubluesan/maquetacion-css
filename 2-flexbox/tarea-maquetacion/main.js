const hamburger = document.getElementById('burger');
const search = document.getElementById('search-lens');
const closeButton = document.getElementById('closeMenu');

const menu = document.querySelector('nav');
const searchBar = document.querySelector('.search input');

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
})

closeButton.addEventListener("click", ()=> {
    menu.classList.toggle("active");
})

search.addEventListener("click", () => {
    searchBar.classList.toggle("active");
})