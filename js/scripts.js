//Business logic
//User Interface logic

function handleUserChoice() {
  const userChoice = document.querySelector("input[name='developmentFocus']:checked").value;
  if (userChoice) {
    console.log(userChoice);
    if (userChoice === "frontEnd") {
      document.getElementById("frontEnd").removeAttribute("class");
      document.getElementById("backEnd").setAttribute("class", "hidden");
      document.getElementById("fullstack").setAttribute("class", "hidden");
    } else if (userChoice === "backEnd") {
      document.getElementById("backEnd").removeAttribute("class");
      document.getElementById("frontEnd").setAttribute("class", "hidden");
      document.getElementById("fullstack").setAttribute("class", "hidden");
    } else if (userChoice === "fullstack") {
      document.getElementById("fullstack").removeAttribute("class");
      document.getElementById("frontEnd").setAttribute("class", "hidden");
      document.getElementById("backEnd").setAttribute("class", "hidden");
    }
  }
}
function handleFrontEndAnswers(event) {
  event.preventDefault();
  const currentExp = document.querySelector("input[name='frontEndExperience']:checked").value;
  console.log(currentExp);
  const projectEnvision = document.getElementById("frontEndProjects").value;
  console.log(projectEnvision);
  const spaSelection = document.getElementById("frontEndSPA").value;
  console.log(spaSelection);
  const frontEndInterests = document.querySelector("input[name='frontEndInterests']:checked").value;
  console.log(frontEndInterests);
  const languagePreference = document.querySelector("input#frontEndInput").value;
  console.log(languagePreference);

  let result;
  if (currentExp && spaSelection) {
    if (currentExp === "frontEndTS") {
      result = "Angular";
    } else if (currentExp === "frontEndJS" &&
      (projectEnvision === "interactiveWeb" ||
        projectEnvision === "enterpriseLevel" ||
        spaSelection === "buildSPA")) {
      result = "Angular";
    } else if (currentExp === "frontEndJS") {
      result = "TypeScript";
    } else if ((currentExp === "frontEndHTML") && (frontEndInterests === "stronglyTyped")) {
      result = "TypeScript";
    } else if (currentExp === "frontEndHTML" &&
      (projectEnvision === "unknown" ||
        spaSelection === "unknownSPA")) {
      result = "HTML & CSS";
    } else if (currentExp === "frontEndHTML") {
      result = "Java Script";
    } else if (currentExp === "frontEndBeginner" &&
      (projectEnvision === "interactiveWeb" ||
        spaSelection === "buildSPA" ||
        frontEndInterests === "scripting")) {
      result = "Java Script";
    } else if (currentExp === "frontEndBeginner") {
      result = "HTML&CSS";
    } else result = "Java Script";
  } else {
    result = "ERROR";
  }
  document.querySelector("span#language").innerText = result;
}

window.addEventListener("load", function () {
  const developmentFocusForm = document.getElementById("developmentFocus");
  developmentFocusForm.addEventListener("click", handleUserChoice);
});

window.addEventListener("load", function () {
  const developmentFocusForm = document.getElementById("frontEndFocus");
  developmentFocusForm.addEventListener("submit", handleFrontEndAnswers);
});