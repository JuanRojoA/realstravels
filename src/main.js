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

setText(localStorage.theme);

themeBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  lightIcon.classList.toggle("hidden");
  darkIcon.classList.toggle("hidden");
  if (localStorage.theme === "light") {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
  setText(localStorage.theme);
});

function setText(theme) {
  const parentTheme = themeBtn.parentElement.nodeName;
  const text = document.querySelector("#theme-text");
  if (parentTheme === "UL") {
    if (theme === "dark") {
      text.textContent = "Tema oscuro";
    } else if (theme === "light") {
      text.textContent = "Tema claro";
    }
  }
}
