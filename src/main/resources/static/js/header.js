const siteNavParent = document.querySelector(".site-nav-parent");
const nav = document.querySelector("nav");

siteNavParent.onmouseover = () => {
    nav.classList.remove("nav-invisible");
}
// siteNavParent.onmouseout = () => {
//     nav.classList.add("nav-invisible");
// }
nav.onmouseover = () => {
    nav.classList.remove("nav-invisible");
}
nav.onmouseout = () => {
    nav.classList.add("nav-invisible");
}