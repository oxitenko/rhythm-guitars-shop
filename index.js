const firstButton = document.querySelector(".button__first");
const secondButton = document.querySelector(".button__second");
const thirdButton = document.querySelector(".button__third");
const fourthButton = document.querySelector(".button__fourth");

const firstReviewContainer = document.querySelector(".review_first");
const secondReviewContainer = document.querySelector(".review_second");
const thirdReviewContainer = document.querySelector(".review_third");
const fourthReviewContainer = document.querySelector(".review_fourth");

function handleButtonActive(button) {
  button.classList.add("button__active");
}

function handleButtonInactive(button) {
  button.classList.remove("button__active");
}

function handleModulShow(modul) {
  if (modul.classList.contains("review_hidden")) {
    modul.classList.remove("review_hidden");
    modul.classList.add("review_active");
  }
}

function handleModulHide(modul) {
  if (modul.classList.contains("review_active")) {
    modul.classList.remove("review_active");
    modul.classList.add("review_hidden");
  }
}

firstButton.addEventListener("click", () => {
  handleButtonActive(firstButton);
  handleModulShow(firstReviewContainer);
});

secondButton.addEventListener("click", () => {
  handleButtonActive(secondButton);
  handleButtonInactive(firstButton);
  handleModulShow(secondReviewContainer);
  handleModulHide(firstReviewContainer);
});

thirdButton.addEventListener("click", () => {
  handleButtonActive(thirdButton);
  handleButtonInactive(secondButton);
  handleModulShow(thirdReviewContainer);
  handleModulHide(secondReviewContainer);
});

fourthButton.addEventListener("click", () => {
  handleButtonActive(fourthButton);
  handleButtonInactive(thirdButton);
  handleModulShow(fourthReviewContainer);
  handleModulHide(thirdReviewContainer);
});
