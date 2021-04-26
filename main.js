var classicBtn = document.getElementById("classicGameBtn");
var difficultBtn = document.getElementById("difficultGameBtn");

var classicPageView = document.getElementById("classicGameChoices");
var difficultPageView = document.getElementById("difficultGame");

var mainPage = document.getElementById("mainGameSection");

classicBtn.addEventListener("click", classicGamePage);
difficultBtn.addEventListener("click", difficultGamePage);

function classicGamePage(){
  hide(mainPage);
  show(classicPageView);
};

function hide(element) {
  element.classList.add("hidden");
};

function show(element) {
  element.classList.remove("hidden");
};
