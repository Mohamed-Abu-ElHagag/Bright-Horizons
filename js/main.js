let loader = document.querySelector(".loader");
let myBody = document.querySelector("body");
function showPage() {
  loader.style.display = "none";
}
function myfunction() {
  setTimeout(showPage, 5000);
}
myfunction();

let myplay = document.querySelector("#play");
let vid = document.querySelector("#vid");
let textVid = document.querySelector("#textVid");
myplay.onclick = function () {
  if (myplay.textContent == "PlayVideo") {
    myplay.textContent = "Close";
  } else {
    myplay.textContent = "PlayVideo";
  }
  textVid.classList.toggle("activeVid");
  vid.classList.toggle("activeVid");
  vid.removeAttribute("controls");
  vid.currentTime = 0;
};
