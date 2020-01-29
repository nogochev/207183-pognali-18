var filter = document.querySelector(".countries-filter");
var filterButton = filter.querySelector(".countries-filter__button");
var filterButtonText = filter.querySelector(".countries-filter__button-text");
var filterContent = filter.querySelector(".countries-filter__body");
var filterClose = filter.querySelector(".countries-filter__button-close");
// var filterClose = filter.querySelector(".countries-filter__button-close");

filterButton.addEventListener("click", function() {
  filterButton.classList.toggle("countries-filter__button--show");
  filterButton.classList.toggle("countries-filter__button--close");
  filterContent.classList.toggle("countries-filter__body--show");
});

filterClose.addEventListener("click", function() {
  filterButton.classList.add("countries-filter__button--show");
  filterButton.classList.remove("countries-filter__button--close");
  filterContent.classList.remove("countries-filter__body--show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    filterButton.classList.add("countries-filter__button--show");
    filterButton.classList.remove("countries-filter__button--close");
    filterContent.classList.remove("countries-filter__body--show");
  }
});

filterContent.classList.remove("countries-filter__body--no-js");
