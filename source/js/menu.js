var pageHeader = document.querySelector(".page-header");
var pageMain = document.querySelector(".page-main");
var menuToggle = pageHeader.querySelector(".page-header__toggle");
var pageHeaderMenu = pageHeader.querySelector(".page-header__menu");

window.addEventListener("scroll", function(evt) {
  evt.preventDefault();
  if (window.pageYOffset > 1) {
    pageHeader.classList.add("page-header--scrolled");
  } else {
    pageHeader.classList.remove("page-header--scrolled");
  }
});

pageHeader.classList.toggle("page-header--closed");
menuToggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  pageHeader.classList.toggle("page-header--closed");
});
menuToggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  pageHeaderMenu.classList.toggle("page-header__menu--white");
});

menuToggle.classList.remove("page-header__toggle--no-js");
pageHeader.classList.remove("page-header--no-js");
pageMain.classList.remove("page-main--no-js");
