var selectCountry = document.querySelector(".step__country-select--choose");
var deleteCountry = document.querySelector(".step__country-del--unselected");
var modalCountries = document.querySelector(".choice-country");

selectCountry.addEventListener("click", function() {
  modalCountries.classList.toggle("choice-country--active");
  selectCountry.classList.toggle("step__country-select--blue");
  if (document.documentElement.clientWidth < 768) {
    deleteCountry.classList.toggle("step__country-del--inactive");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    modalCountries.classList.remove("choice-country--active");
    selectCountry.classList.remove("step__country-select--blue");

    if (document.documentElement.clientWidth < 768) {
      deleteCountry.classList.remove("step__country-del--inactive");
    }
  }
});
