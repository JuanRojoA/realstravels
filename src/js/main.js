import "../styles/style.css";
import "../styles/mklb.css";

//Theme Selectors
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
const darkSelector = document.getElementById("dark-selector");
const themeSelector = document.getElementById("theme-btn");

//Responsive Menubar Selectors
const navBtn = document.querySelector("#menu");
const menuBar = document.querySelector("[role='menubar']");
const openBtn = document.querySelector("#open-btn");
const closeBtn = document.querySelector("#close-btn");

//Checks LocalStorage for preferred theme, if there isn't one it defaults to the browser's theme
if (
  localStorage.getItem("colorTheme") === "dark" ||
  (!localStorage.getItem("colorTheme") && systemTheme.matches)
) {
  darkSelector.classList.add("dark");
  themeSelector.childNodes[1].classList.remove("hidden");
} else if (
  localStorage.getItem("colorTheme") === "light" ||
  (!localStorage.getItem("colorTheme") && !systemTheme)
) {
  darkSelector.classList.remove("dark");
  themeSelector.childNodes[3].classList.remove("hidden");
}

//Changes theme and stores it in LocalStorage
themeSelector.addEventListener("click", () => {
  themeSelector.childNodes[1].classList.toggle("hidden");
  themeSelector.childNodes[3].classList.toggle("hidden");
  if (localStorage.getItem("colorTheme") === "light") {
    darkSelector.classList.add("dark");
    localStorage.setItem("colorTheme", "dark");
  } else {
    darkSelector.classList.remove("dark");
    localStorage.setItem("colorTheme", "light");
  }
});

//Opens and closes Mobile nav menu
navBtn.addEventListener("click", () => {
  const isExpanded = JSON.parse(navBtn.getAttribute("aria-expanded"));
  isExpanded
    ? navBtn.setAttribute("aria-label", "Open Menu")
    : navBtn.setAttribute("aria-label", "Close Menu");
  navBtn.setAttribute("aria-expanded", !isExpanded);
  menuBar.classList.toggle("hidden");
  menuBar.classList.toggle("flex");
  openBtn.classList.toggle("hidden");
  closeBtn.classList.toggle("hidden");
});
