import "./style.css";

const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
const darkSelector = document.getElementById("dark-selector");
const themeSelector = document.getElementById("button");

if (
  localStorage.getItem("colorTheme") === "dark" ||
  (!localStorage.getItem("colorTheme") && systemTheme.matches)
) {
  darkSelector.classList.add("dark");
} else if (
  localStorage.getItem("colorTheme") === "light" ||
  (!localStorage.getItem("colorTheme") && !systemTheme)
) {
  darkSelector.classList.remove("dark");
}

themeSelector.addEventListener("click", () => {
  if (localStorage.getItem("colorTheme") === "light") {
    darkSelector.classList.add("dark");
    localStorage.setItem("colorTheme", "dark");
  } else {
    darkSelector.classList.remove("dark");
    localStorage.setItem("colorTheme", "light");
  }
});

const navBtn = document.querySelector("#menu");
const menuBar = document.querySelector("[role='menubar']");
const openBtn = document.querySelector("#open-btn");
const closeBtn = document.querySelector("#close-btn");

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
