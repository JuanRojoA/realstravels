const themeBtn = document.querySelector("#theme-btn");
const darkIcon = document.querySelector("#dark-theme");
const lightIcon = document.querySelector("#light-theme");

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  lightIcon.classList.toggle("hidden");
  localStorage.theme = "dark";
} else {
  document.documentElement.classList.remove("dark");
  darkIcon.classList.toggle("hidden");
  localStorage.theme = "light";
}

themeBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  lightIcon.classList.toggle("hidden");
  darkIcon.classList.toggle("hidden");
  if (localStorage.theme === "light") {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
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
