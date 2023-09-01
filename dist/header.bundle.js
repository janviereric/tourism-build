/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************************!*\
  !*** ./src/assets/javascripts/header.js ***!
  \******************************************/
var iconMobile = document.querySelector(".header-menu-icon");
var headerMenu = document.querySelector(".header-menu");
var isMenuOpen = false;
var mobileMobileDOM;
var closeMenu = function closeMenu() {
  mobileMobileDOM.classList.remove("open");
};
var createMobileMenu = function createMobileMenu() {
  mobileMobileDOM = document.createElement("div");
  mobileMobileDOM.classList.add("mobile-menu");
  mobileMobileDOM.addEventListener("click", function (event) {
    event.stopPropagation();
  });
  mobileMobileDOM.append(headerMenu.querySelector("ul").cloneNode(true));
  headerMenu.append(mobileMobileDOM);
};
var openMenu = function openMenu() {
  if (mobileMobileDOM) {} else {
    createMobileMenu();
  }
  mobileMobileDOM.classList.add("open");
};
var toggleMobileMenu = function toggleMobileMenu() {
  if (isMenuOpen) {
    closeMenu();
  } else {
    openMenu();
  }
  isMenuOpen = !isMenuOpen;
};
iconMobile.addEventListener("click", function (event) {
  event.stopPropagation();
  toggleMobileMenu();
});
window.addEventListener("click", function (event) {
  if (isMenuOpen) {
    toggleMobileMenu();
  }
});
window.addEventListener("resize", function (event) {
  if (window.innerWidth > 480 && isMenuOpen) {
    toggleMobileMenu();
  }
});
/******/ })()
;
//# sourceMappingURL=header.bundle.js.map