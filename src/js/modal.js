const closeBtn = document.querySelectorAll(".close-modal");
const submitBtn = document.getElementById("submit-btn");

closeBtn.forEach((el) =>
  el.addEventListener("click", (e) => {
    let divModal = el.parentElement;
    let modal = divModal.parentElement;
    modal.classList.add("hidden");
  })
);

submitBtn.addEventListener("click", (e) => {
  if (
    document.getElementById("pas-rec-email").value !== "jjrojoa@gmail.com" &&
    document.getElementById("pas-rec-email").value !== ""
  ) {
    document.querySelector(".error-modal").classList.remove("hidden");
  } else if (
    document.getElementById("pas-rec-email").value == "jjrojoa@gmail.com"
  ) {
    document.querySelector(".sucess-modal").classList.remove("hidden");
  }
});
