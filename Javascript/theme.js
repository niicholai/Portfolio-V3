const themeButton = document.getElementById("themeButton");
const navBar = document.getElementById("nav");
const fsBgColor = document.getElementById("first-scene-wrapper");
const sswBgColor = document.getElementById("second-scene-wrapper");
const cmBgColor = document.getElementById("contact-me");

function darkLight() {
  if (themeButton.innerText === "Dark Mode") {
    themeButton.innerText = "Light Mode";
    themeButton.className = "btn btn-light";
    navBar.className = "navbar fixed-top navbar-expand-lg navbar-dark bg-dark";
    fsBgColor.className = "bg-info";
    sswBgColor.className = "bg-dark";
    cmBgColor.className = "bg-info";
    console.log(themeButton.innerText);
  } else if (themeButton.innerText === "Light Mode") {
    themeButton.innerText = "Dark Mode";
    themeButton.className = "btn btn-dark";
    navBar.className = "navbar fixed-top navbar-expand-lg navbar-light bg-info";
    fsBgColor.className = "bg-light";
    sswBgColor.className = "bg-info";
    cmBgColor.className = "bg-light";
    console.log(themeButton.innerText);
  }
}

themeButton.addEventListener("click", darkLight);
