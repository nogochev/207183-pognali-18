var businessModalpShow = document.querySelector(".rates__business-show");
var businessModal = document.querySelector(".rates-modal");
var businessModalClose = document.querySelector(".rates__business-close");

businessModalpShow.addEventListener("click", function(event) {
  event.preventDefault();
  businessModal.classList.add("rates-modal--show");
});

businessModalClose.addEventListener("click", function() {
  businessModal.classList.remove("rates-modal--show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    businessModal.classList.remove("rates-modal--show");
  }
});
