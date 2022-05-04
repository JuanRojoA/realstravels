//Responsive Menubar Selectors
const closedNavBtn = document.querySelector("#menu-closed");
const openedNavBtn = document.querySelector("#menu-opened");
const menuBar = document.querySelector("[role='menubar']");

//Opens and closes Mobile nav menu
closedNavBtn.addEventListener("click", () => {
  menuBar.classList.remove("hidden");
  menuBar.classList.add("flex");
  closedNavBtn.classList.add("hidden");
  openedNavBtn.classList.remove("hidden");
});

openedNavBtn.addEventListener("click", () => {
  menuBar.classList.add("hidden");
  menuBar.classList.remove("flex");
  closedNavBtn.classList.remove("hidden");
  openedNavBtn.classList.add("hidden");
});
