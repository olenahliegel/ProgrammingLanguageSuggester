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

function recommendationBackEndLanguage(currentExp, projectTypes, microServices, backEndInterests) {
  let result = 0;

  if (currentExp === "assembler")
    result += 3;
  else if (currentExp === "cPlusPlus")
    result += 2;
  else if (currentExp === "pascal")
    result += 1;
  else
    result += 0;

  if (projectTypes === "enterpriseApps")
    result += 3;
  else if (projectTypes === "webApps")
    result += 2;
  else if (projectTypes === "machineLearning")
    result += 1;
  else
    result += 0;

  if (microServices === "monolithic")
    result += 3;
  else if (microServices === "pieces")
    result += 2;
  else if (microServices === "confused")
    result += 1;
  else
    result += 0;

  if (backEndInterests === "banter")
    result += 3;
  else if (backEndInterests === "dataDeep")
    result += 2;
  else if (backEndInterests === "frontWeb")
    result += 1;
  else
    result += 0;

  if (result <= 4)
    return "Python";
  else if (result >= 5 && result < 8)
    return "C#";
  else (result >= 8)
  return "Java";
}

function recommendationBackEndLanguage(fullstackExperience, fullstackInterests, multitasker, fullstackEvents) {
  let result = 0;
  if (fullstackExperience === "fullstackBeginner")
    result += 1;
  else if (fullstackExperience === "fullstackDabbler")
    result += 2;
  else if (fullstackExperience === "fullstackExp")
    result += 3;
  else if (fullstackExperience === "fullstackPro")
    result += 4;

  if (fullstackInterests === "interfaces")
    result += 1;
  else if (fullstackInterests === "serverSide")
    result += 2;
  else if (fullstackInterests === "endToEnd")
    result += 3;
  else if (fullstackInterests === "multipleLanguages")
    result += 4;

  if (multitasker === "codeJuggler")
    result += 1;
  else if (multitasker === "onlyJoint")
    result += 2;
  else if (multitasker === "confused")
    result += 3;
  else if (multitasker === "proJuggler")
    result += 4;

  if (fullstackEvents === "codeRelay")
    result += 1;
  else if (fullstackEvents === "debuggingMarathon")
    result += 2;
  else if (fullstackEvents === "designDiving")
    result += 3;
  else if (fullstackEvents === "languageTriathlon")
    result += 4;

  if (result <= 4)
    return "Java Script";
  else if (result >= 5 && result <= 8)
    return "Python";
  else if (result > 8 && result <= 12)
    return "Ruby";
  else
    return "Java";
}

function outputForFirstAnswerResult(answer) {
  const frontEndOutput = "Your current experience level with coding and web development is: "
  if (answer === "frontEndBeginner") {
    return frontEndOutput + "complete beginner";
  } else if (answer === "frontEndHTML") {
    return frontEndOutput + "some experience with HTML & CSS";
  } else if (answer === "frontEndJS") {
    return frontEndOutput + "experience with Java Script";
  } else if (answer === "frontEndTS") {
    return frontEndOutput + "experience with Type Script";
  }
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

//FrontEnd questionary forms
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

    let languageRecommendationResult = recommendFrontendLanguage(currentExp, projectEnvision, spaSelection, frontEndInterests);
    document.querySelector("span#language").innerText = languageRecommendationResult;
    //document.querySelector("li#experience").innerText = outputForFirstAnswerResult(currentExp);
    //document.querySelector("span#aspect").innerText = frontEndInterests;
    //document.querySelector("span#spa").innerText = spaSelection;
    //document.querySelector("span#envision").innerText = projectEnvision;
    //document.querySelector("span#preferring").innerText = languagePreference;
  }
  else {
    document.querySelector("div#error").removeAttribute("class");
    document.querySelector("div#result").setAttribute("class", "hidden");
    document.querySelector("div#error h3").textContent = "Please answer all questions";
  }
  document.getElementById("frontReset").removeAttribute("class");
}

function updateFrontSubmitButtonStatus() {
  const currentExp = document.querySelector("input[name='frontEndExperience']:checked").value;
  const projectEnvision = document.getElementById("frontEndProjects").value;
  const spaSelection = document.getElementById("frontEndSPA").value;
  const frontEndInterests = document.querySelector("input[name='frontEndInterests']:checked").value;
  const languagePreference = document.querySelector("input#frontEndInput").value;
  const submitButton = document.getElementById("frontSubmit");

  if (currentExp && projectEnvision && spaSelection && frontEndInterests && languagePreference) {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", "true");
  }
}

function resetFrontForm() {
  document.getElementById("frontSubmit").setAttribute("disabled", "true");
  document.querySelector("input[name='frontEndExperience'][value='frontEndBeginner']").checked = true;
  document.getElementById("frontEndProjects").value = "unknown";
  document.getElementById("frontEndSPA").value = "unknownSPA"
  document.querySelector("input[name='frontEndInterests'][value='styling']").checked = true;
  document.querySelector("input#frontEndInput").value = "";
  document.querySelector("div#result").setAttribute("class", "hidden");
  document.querySelector("div#error").setAttribute("class", "hidden");
}


//BackEnd questionary form
function handleBackEndAnswers(event) {
  event.preventDefault();

  const currentExp = document.querySelector("input[name='backEndExperience']:checked").value;
  const projectTypes = document.getElementById("projectTypes").value;
  const microServices = document.getElementById("microServ").value;
  const backEndInterests = document.querySelector("input[name='backEndInterests']:checked").value;
  const backEndInput = document.querySelector("input#backEndInput").value;

  if (currentExp && projectTypes && microServices && backEndInterests && backEndInput) {
    document.querySelector("div#error").setAttribute("class", "hidden");
    document.querySelector("div#result").removeAttribute("class");
    let languageRecommendationResult = recommendationBackEndLanguage(currentExp, projectTypes, microServices, backEndInterests);
    document.querySelector("span#language").innerText = languageRecommendationResult;
    //document.querySelector("li#experience").innerText = outputForFirstAnswerResult(currentExp);
    //document.querySelector("span#aspect").innerText = frontEndInterests;
    //document.querySelector("span#spa").innerText = spaSelection;
    //document.querySelector("span#envision").innerText = projectEnvision;
    //document.querySelector("span#preferring").innerText = languagePreference;

  } else {
    document.querySelector("div#error").removeAttribute("class");
    document.querySelector("div#result").setAttribute("class", "hidden");
    document.querySelector("div#error h3").textContent = "Please answer all questions";
  }
  document.getElementById("backReset").removeAttribute("class");
}


function updateBackSubmitButtonStatus() {
  const currentExp = document.querySelector("input[name='backEndExperience']:checked").value;
  const projectTypes = document.getElementById("projectTypes").value;
  const microServices = document.getElementById("microServ").value;
  const backEndInterests = document.querySelector("input[name='backEndInterests']:checked").value;
  const backEndInput = document.querySelector("input#backEndInput").value;
  const submitButton = document.getElementById("backSubmit");

  if (currentExp && projectTypes && microServices && backEndInterests && backEndInput) {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", "true");
  }
}

function resetBackForm() {
  document.getElementById("backSubmit").setAttribute("disabled", "true");
  document.querySelector("input[name='backEndExperience'][value='backEndBeginner']").checked = true;
  document.getElementById("projectTypes").value = "unsure";
  document.getElementById("microServ").value = "pieces"
  document.querySelector("input[name='backEndInterests'][value='dataDeep']").checked = true;
  document.querySelector("input#backEndInput").value = "";
  document.querySelector("div#result").setAttribute("class", "hidden");
  document.querySelector("div#error").setAttribute("class", "hidden");
}

//FullStack questionary form
function handleFullstackAnswers(event) {
  event.preventDefault();

  const fullstackExperience = document.querySelector("input[name='fullstackExperience']:checked").value;
  const fullstackInterests = document.getElementById("fullstackInterests").value;
  const multitasker = document.getElementById("multitasker").value;
  const fullstackEvents = document.querySelector("input[name='fullstackEvents']:checked").value;
  const fullstackInput = document.querySelector("input#fullstackInput").value;

  if (fullstackExperience && fullstackInterests && multitasker && fullstackEvents && fullstackInput) {
    document.querySelector("div#error").setAttribute("class", "hidden");
    document.querySelector("div#result").removeAttribute("class");
    let languageRecommendationResult = recommendationBackEndLanguage(fullstackExperience, fullstackInterests, multitasker, fullstackEvents);
    document.querySelector("span#language").innerText = languageRecommendationResult;
    //document.querySelector("li#experience").innerText = outputForFirstAnswerResult(currentExp);
    //document.querySelector("span#aspect").innerText = frontEndInterests;
    //document.querySelector("span#spa").innerText = spaSelection;
    //document.querySelector("span#envision").innerText = projectEnvision;
    //document.querySelector("span#preferring").innerText = languagePreference;

  } else {
    document.querySelector("div#error").removeAttribute("class");
    document.querySelector("div#result").setAttribute("class", "hidden");
    document.querySelector("div#error h3").textContent = "Please answer all questions";
  }
  document.getElementById("fullstackReset").removeAttribute("class");
}

function updateFullstackSubmitButtonStatus() {
  const currentExp = document.querySelector("input[name='fullstackExperience']:checked").value;
  const fullstackInterests = document.getElementById("fullstackInterests").value;
  const multitasker = document.getElementById("multitasker").value;
  const fullstackEvents = document.querySelector("input[name='fullstackEvents']:checked").value;
  const backEndInput = document.querySelector("input#fullstackInput").value;
  const submitButton = document.getElementById("fullstackSubmit");

  if (currentExp && fullstackInterests && multitasker && fullstackEvents && backEndInput) {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", "true");
  }
}

function resetFullStackForm() {
  document.getElementById("fullstackSubmit").setAttribute("disabled", "true");
  document.querySelector("input[name='fullstackExperience'][value='fullstackBeginner']").checked = true;
  document.getElementById("fullstackInterests").value = "endToEnd";
  document.getElementById("multitasker").value = "codeJuggler"
  document.querySelector("input[name='fullstackEvents'][value='codeRelay']").checked = true;
  document.querySelector("input#fullstackInput").value = "";
  document.querySelector("div#result").setAttribute("class", "hidden");
  document.querySelector("div#error").setAttribute("class", "hidden");
}


window.addEventListener("load", function () {
  const developmentFocusForm = document.getElementById("developmentFocus");
  developmentFocusForm.addEventListener("click", handleUserChoice);

  developmentFocusForm.addEventListener("click", function () {
    resetFrontForm();
    resetBackForm();
    resetFullStackForm();
    document.getElementById("frontReset").setAttribute("class", "hidden");
    document.getElementById("backReset").setAttribute("class", "hidden");
    document.getElementById("fullstackReset").setAttribute("class", "hidden");
  });

  const frontEndInput = document.getElementById("frontEndInput");
  frontEndInput.addEventListener("input", updateFrontSubmitButtonStatus);

  const frontEndFocusForm = document.getElementById("frontEndFocus");
  frontEndFocusForm.addEventListener("submit", handleFrontEndAnswers);

  const frontReset = document.getElementById("frontReset");
  frontReset.addEventListener("click", resetFrontForm);

  const backEndInput = document.getElementById("backEndInput");
  backEndInput.addEventListener("input", updateBackSubmitButtonStatus);

  const backEndFocusForm = document.getElementById("backEndFocus");
  backEndFocusForm.addEventListener("submit", handleBackEndAnswers);

  const backReset = document.getElementById("backReset");
  backReset.addEventListener("click", resetBackForm);

  const fullstackInput = document.getElementById("fullstackInput");
  fullstackInput.addEventListener("input", updateFullstackSubmitButtonStatus);

  const fullstackFocusForm = document.getElementById("fullstackFocus");
  fullstackFocusForm.addEventListener("submit", handleFullstackAnswers);

  const fullstackReset = document.getElementById("fullstackReset");
  fullstackReset.addEventListener("click", resetFullStackForm);
});

