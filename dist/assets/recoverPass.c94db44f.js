import"./main.93e07658.js";const t=document.querySelectorAll(".close-modal"),l=document.getElementById("submit-btn");t.forEach(e=>e.addEventListener("click",d=>{e.parentElement.parentElement.classList.add("hidden")}));l.addEventListener("click",e=>{document.getElementById("pas-rec-email").value!=="jjrojoa@gmail.com"&&document.getElementById("pas-rec-email").value!==""?document.querySelector(".error-modal").classList.remove("hidden"):document.getElementById("pas-rec-email").value=="jjrojoa@gmail.com"&&document.querySelector(".sucess-modal").classList.remove("hidden")});