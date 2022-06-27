const rightBtn = document.querySelector(".right-btn");
const leftBtn = document.querySelector(".left-btn");
let maxOffset = 18;
let calcOffset = null;
let diffOffset = 10;
let categoriesCont = document.querySelector(".categories");
let latestCards = document.querySelector(".latest-slider");
//input - btn click state, 18% translate, percent left, and percent decreased

function rightChevronTransition() {
  if (offSet < 20) {
    categoriesCont.style = `transform: translateX(-${(offSet = offSet + 10)}%)`;
  }
  if (offSet === 20) {
    rightBtn.classList.add("hide-btns");
    leftBtn.classList.remove("hide-btns");
  } else if (offSet <= 20) {
    rightBtn.classList.remove("hide-btns");
    leftBtn.classList.remove("hide-btns");
  }
}

function leftChevronTransition() {
  if (offSet > 0) {
    categoriesCont.style = `transform: translateX(-${(offSet = offSet - 10)}%)`;
  }
  if (offSet === 0) {
    leftBtn.classList.add("hide-btns");
    rightBtn.classList.remove("hide-btns");
  } else if (offSet >= 0) {
    leftBtn.classList.remove("hide-btns");
    rightBtn.classList.remove("hide-btns");
  }
}

let offSet = 0;
rightBtn.addEventListener("click", (e) => {
  rightChevronTransition();
});
leftBtn.addEventListener("click", () => {
  leftChevronTransition();
});

let rightBtns = document.querySelectorAll(".right-btn");
let offSet2 = 0;
let counter = 0;
rightBtns.forEach((buttons) => {
  buttons.addEventListener("click", (e) => {
    if (e.target.classList.contains("latest-btn")) {
      counter++;
      if (counter < 2) {
        latestCards.style = `transform: translateX(-${(offSet2 =
          offSet2 + 15)}%)`;
      } else {
        latestCards.style = `transform: translateX(-${(offSet2 =
          offSet2 + 30)}%)`;
      }

      console.log(counter);
    }
  });
});
