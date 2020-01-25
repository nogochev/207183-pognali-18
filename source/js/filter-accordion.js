var accordion = document.querySelector(".companions-filter__accordion");

var accordionButton = accordion.querySelectorAll(
  ".companions-filter__accordion-button"
);

var accordionList = accordion.querySelectorAll(
  ".companions-filter__accordion-list"
);

var accordionRange = accordion.querySelector(
  ".companions-filter__accordion-range"
);

for (var i = 0; i < accordionButton.length; i++) {
  if (
    document.documentElement.clientWidth < 768 ||
    document.documentElement.clientWidth >= 1440
  ) {
    accordionRange.classList.add("companions-filter__accordion-range--hidden");
    for (var j = 0; j < accordionList.length; j++) {
      accordionList[j].classList.add(
        "companions-filter__accordion-list--hidden"
      );
    }
    accordionButton[i].addEventListener("click", function() {
      var title = this.querySelector(".companions-filter__accordion-title");
      title.classList.toggle("companions-filter__accordion-title--collapse");
      var accordionList = this.nextElementSibling;
      if (accordionList === accordionRange) {
        accordionRange.classList.toggle(
          "companions-filter__accordion-range--hidden"
        );
      } else {
        accordionList.classList.toggle(
          "companions-filter__accordion-list--hidden"
        );
      }
    });
  }
}
