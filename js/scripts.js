//Business logic

function recommendFrontendLanguage(currentExp, projectEnvision, spaSelection, frontEndInterests) {
  if (currentExp === "frontEndTS") {
    return "Angular";
  } else if (currentExp === "frontEndJS" &&
    (projectEnvision === "interactiveWeb" ||
      projectEnvision === "enterpriseLevel" ||
      spaSelection === "buildSPA")) {
    return "Angular";
  } else if (currentExp === "frontEndJS") {
    return "TypeScript";
  } else if ((currentExp === "frontEndHTML") && (frontEndInterests === "stronglyTyped")) {
    return "TypeScript";
  } else if (currentExp === "frontEndHTML" &&
    (projectEnvision === "unknown" ||
      spaSelection === "unknownSPA")) {
    return "HTML & CSS";
  } else if (currentExp === "frontEndHTML") {
    return "Java Script";
  } else if (currentExp === "frontEndBeginner" &&
    (projectEnvision === "interactiveWeb" ||
      spaSelection === "buildSPA" ||
      frontEndInterests === "scripting")) {
    return "Java Script";
  } else if (currentExp === "frontEndBeginner") {
    return "HTML&CSS";
  } else return "Java Script";
}

//User Interface logic

function handleUserChoice() {
  const userChoice = document.querySelector("input[name='developmentFocus']:checked").value;
  if (userChoice) {
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
  const projectEnvision = document.getElementById("frontEndProjects").value;
  const spaSelection = document.getElementById("frontEndSPA").value;
  const frontEndInterests = document.querySelector("input[name='frontEndInterests']:checked").value;
  const languagePreference = document.querySelector("input#frontEndInput").value;


  if (currentExp && projectEnvision && spaSelection && frontEndInterests && languagePreference) {
    document.querySelector("div#error").setAttribute("class", "hidden");
    document.querySelector("div#result").removeAttribute("class");
    let result = recommendFrontendLanguage(currentExp, projectEnvision, spaSelection, frontEndInterests);
    document.querySelector("span#language").innerText = result;
  }
  else {
    document.querySelector("div#error").removeAttribute("class");
    document.querySelector("div#result").setAttribute("class", "hidden");
    document.querySelector("div#error h3").textContent = "Please answer all questions";
  }
  document.getElementById("reset").removeAttribute("class");
}

function updateSubmitButtonStatus() {
  const currentExp = document.querySelector("input[name='frontEndExperience']:checked").value;
  const projectEnvision = document.getElementById("frontEndProjects").value;
  const spaSelection = document.getElementById("frontEndSPA").value;
  const frontEndInterests = document.querySelector("input[name='frontEndInterests']:checked").value;
  const languagePreference = document.querySelector("input#frontEndInput").value;

  const submitButton = document.getElementById("submit");

  if (currentExp && projectEnvision && spaSelection && frontEndInterests && languagePreference) {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", "true");
  }
}



window.addEventListener("load", function () {
  const developmentFocusForm = document.getElementById("developmentFocus");
  developmentFocusForm.addEventListener("click", handleUserChoice);

  const frontEndInput = document.getElementById("frontEndInput");
  frontEndInput.addEventListener("input", updateSubmitButtonStatus);

  const frontEndFocusForm = document.getElementById("frontEndFocus");
  frontEndFocusForm.addEventListener("submit", handleFrontEndAnswers);

  const reset = document.getElementById("reset");
  reset.addEventListener("click", function () {
    document.getElementById("submit").setAttribute("disabled", "true");
    document.querySelector("input[name='frontEndExperience'][value='frontEndBeginner']").checked = true;
    document.getElementById("frontEndProjects").value = "unknown";
    document.getElementById("frontEndSPA").value = "unknownSPA"
    document.querySelector("input[name='frontEndInterests'][value='styling']").checked = true;
    document.querySelector("input#frontEndInput").value = "";
  });

});

