let menu=document.querySelector('.menu-icon');
let navbar=document.querySelector(".navbar");
menu.onclick = () => {
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
};
window.onscroll = () => {
    navbar.classList.remove("open-menu");
    menu.classList.remove("move");
}
let header=document.querySelector("header")
window.addEventListener('scroll', () => {
    header.classList.toggle("header-active",window.scrollY>0);
});