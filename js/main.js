const infoBtns = document.querySelectorAll(".info-dot");
const infoHints = document.querySelectorAll(".info-hint");

for (let btn of infoBtns) {
  btn.addEventListener("click", function (event) {
    event.stopPropagation();
    this.parentNode.querySelector(".info-hint").classList.toggle("none");
  });
}

document.addEventListener("click", closeHints);

function closeHints() {
  for (let hint of infoHints) {
    hint.classList.add("none");
  }
}

for (let hint of infoHints) {
  hint.addEventListener("click", (event) => event.stopPropagation());
}

// Swiper slider
const swiper = new Swiper(".swiper", {
  sliderPerView: 4,
  spaceBetween: 42,
  // Navigation arrows
  navigation: {
    nextEl: "#sliderNext",
    prevEl: "#sliderPrev",
  },
});
