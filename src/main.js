if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
// Whenever the user explicitly chooses dark mode
localStorage.theme = "dark";

// Whenever the user explicitly chooses light mode
localStorage.theme = "light";

const themeBtn = document.querySelector("#theme-btn");

themeBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

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
