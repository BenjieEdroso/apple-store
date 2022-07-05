let latestSlider = document.querySelector(".latest");
let latestRightBtn = document.querySelector(".latest-right-btn");
let latestLeftBtn = document.querySelector(".latest-left-btn");
let categorySlider = document.querySelector(".slider");
let categoryLeftBtn = document.querySelector(".category-left-btn");
let categoryRightBtn = document.querySelector(".category-right-btn");

categorySlider.addEventListener("mouseover", () => {
  categoryRightBtn.classList.add("show-btn");
});
categorySlider.addEventListener("mouseleave", () => {
  categoryRightBtn.classList.remove("show-btn");
});

latestSlider.addEventListener("mouseover", () => {
  latestRightBtn.classList.add("show-btn");
});

latestSlider.addEventListener("mouseleave", () => {
  latestRightBtn.classList.remove("show-btn");
});
