const themeButton = document.getElementById("themeButton");
const navBar = document.getElementById("nav");
const fsBgColor = document.getElementById("first-scene-wrapper");
const sswBgColor = document.getElementById("second-scene-wrapper");
const cmBgColor = document.getElementById("contact-me");
const whatIDo = document.getElementById("whatDo");
const whoIAm = document.getElementById("whoAm");
const whatIKnow = document.getElementById("whatKnow");
const amHeadingOne = document.getElementById("amh1");
const amHeadingTwo = document.getElementById("amh2");
const amHeadingThree = document.getElementById("amh3");
const projectHOne = document.getElementById("projectH1");
const gitBtn = document.getElementById("githubBtn");
const twitBtn = document.getElementById("twitterBtn");
const linkedBtn = document.getElementById("linkedInBtn");

function darkLight() {
  if (themeButton.innerText === "Dark Mode") {
    themeButton.innerText = "Light Mode";
    themeButton.className = "btn btn-light";
    navBar.className = "navbar fixed-top navbar-expand-lg navbar-dark bg-dark";
    fsBgColor.className = "bg-info";
    sswBgColor.className = "bg-dark";
    cmBgColor.className = "bg-info";
    whatIDo.className = "what-i-do-dark";
    whoIAm.className = "who-i-am-dark";
    whatIKnow.className = "what-i-know-dark";
    amHeadingOne.className = "about-me-heading-dark";
    amHeadingTwo.className = "about-me-heading-dark";
    amHeadingThree.className = "about-me-heading-dark";
    projectHOne.className = "ss-top-h1-light";
    gitBtn.className = "btn btn-lg btn-outline-dark";
    twitBtn.className = "btn btn-lg btn-outline-dark";
    linkedBtn.className = "btn btn-lg btn-outline-dark";
  } else if (themeButton.innerText === "Light Mode") {
    themeButton.innerText = "Dark Mode";
    themeButton.className = "btn btn-dark";
    navBar.className = "navbar fixed-top navbar-expand-lg navbar-light bg-info";
    fsBgColor.className = "bg-light";
    sswBgColor.className = "bg-info";
    cmBgColor.className = "bg-light";
    whatIDo.className = "what-i-do-light";
    whoIAm.className = "who-i-am-light";
    whatIKnow.className = "what-i-know-light";
    amHeadingOne.className = "about-me-heading-light";
    amHeadingTwo.className = "about-me-heading-light";
    amHeadingThree.className = "about-me-heading-light";
    projectHOne.className = "ss-top-h1-dark";
    gitBtn.className = "btn btn-lg btn-outline-info";
    twitBtn.className = "btn btn-lg btn-outline-info";
    linkedBtn.className = "btn btn-lg btn-outline-info";
  }
}

themeButton.addEventListener("click", darkLight);
