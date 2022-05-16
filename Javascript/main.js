const themeButton = document.getElementById("themeButton");
let themeButtonText = document.getElementById("themeButton").innerText;

function darkLight() {
  if (themeButtonText === "Dark Mode") {
    themeButtonText = "Light Mode";
  }
}

themeButton.addEventListener("click", darkLight);
