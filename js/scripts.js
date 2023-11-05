//Business logic of recommendation for FrontEnd language
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

//Business logic of recommendation for BackEnd language
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

//Business logic of recommendation for FullStack language
function recommendationFullstackLanguage(fullstackExperience, fullstackInterests, multitasker, fullstackEvents) {
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

//Business logic of displaying answers for user
function outputForStaticAnswerResult(answer) {
  if (answer === "frontEndBeginner" ||
    answer === "frontEndHTML" ||
    answer === "frontEndJS" ||
    answer === "frontEndTS")
    return "Your current experience level with coding is: ";

  if (answer === "personalBlogs" ||
    answer === "unknown" ||
    answer === "interactiveWeb" ||
    answer === "enterpriseLevel")
    return "You envision working on: ";

  if (answer === "unknownSPA" ||
    answer === "buildSPA" ||
    answer === "traditionalWeb")
    return "Your attitude in building modern, single-page applications (SPAs) is: ";

  if (answer === "styling" ||
    answer === "scripting" ||
    answer === "stronglyTyped")
    return "Your are interesting in:  "

  if (answer === "backEndBeginner" ||
    answer === "pascal" ||
    answer === "cPlusPlus" ||
    answer === "assembler")
    return "Your current experience level with coding is: ";

  if (answer === "unsure" ||
    answer === "enterpriseApps" ||
    answer === "webApps" ||
    answer === "machineLearning")
    return "You would prefer to work on: ";

  if (answer === "pieces" ||
    answer === "monolithic" ||
    answer === "confused")
    return "Your attitude in possibilities of microservices architecture: ";

  if (answer === "dataDeep" ||
    answer === "frontWeb" ||
    answer === "banter")
    return "You dream of handling server-side logic and databases:  ";

  if (answer === "fullstackBeginner" ||
    answer === "fullstackDabbler" ||
    answer === "fullstackExp" ||
    answer === "fullstackPro")
    return "Your current experience level with coding is: ";

  if (answer === "endToEnd" ||
    answer === "serverSide" ||
    answer === "interfaces" ||
    answer === "multipleLanguages")
    return "You is interested in the most: ";

  if (answer === "codeJuggler" ||
    answer === "onlyJoint" ||
    answer === "multitaskerConfused" ||
    answer === "proJuggler")
    return "You are ready to become the web's ultimate multitasker: ";

  if (answer === "codeRelay" ||
    answer === "debuggingMarathon" ||
    answer === "designDiving" ||
    answer === "languageTriathlon")
    return "If web development were an Olympic sport, you would excel in: ";
}

//Business logic of displaying answers for user
function outputForDynamicAnswerResult(answer) {
  if (answer === "frontEndBeginner")
    return "complete beginner";
  else if (answer === "frontEndHTML")
    return "some experience with HTML & CSS";
  else if (answer === "frontEndJS")
    return "familiar with JavaScript";
  else if (answer === "frontEndTS")
    return "I have experience with TypeScript";

  if (answer === "unknown")
    return "all possible projects";
  else if (answer === "personalBlogs")
    return "personal blogs and simple websites";
  else if (answer === "interactiveWeb")
    return "interactive web applications with complex features";
  else if (answer === "enterpriseLevel")
    return "enterprise-level applications with scalability in mind";

  if (answer === "unknownSPA")
    return "you are neutral to this question";
  else if (answer === "buildSPA")
    return "you would like to build SPAs";
  else if (answer === "traditionalWeb")
    return "you are more interested in traditional websites";

  if (answer === "styling")
    return "designing and styling web pages";
  else if (answer === "scripting")
    return "adding interactivity and functionality with scripting";
  else if (answer === "stronglyTyped")
    return "using a strongly-typed language for frontend development";

  if (answer === "backEndBeginner")
    return "complete beginner";
  else if (answer === "pascal")
    return "you worked with Pascal";
  else if (answer === "cPlusPlus")
    return "you worked with C++";
  else if (answer === "assembler")
    return "you know Assembler";

  if (answer === "unsure")
    return "different kind of applications";
  else if (answer === "enterpriseApps")
    return "enterprise-level applications";
  else if (answer === "webApps")
    return "web applications and microservices";
  else if (answer === "machineLearning")
    return "machine learning and data analysis projects";

  if (answer === "pieces")
    return "you want to break down your app into bite-sized pieces";
  else if (answer === "monolithic")
    return "you prefer the monolithic approach";
  else if (answer === "confused")
    return "you would like to understand the microservices architecture";

  if (answer === "dataDeep")
    return "you can't wait to dive into the data deep end";
  else if (answer === "frontWeb")
    return "you'd rather stay on the front porch of the web";
  else if (answer === "banter")
    return "you are just here for the backend banter";

  if (answer === "fullstackBeginner")
    return "you are just starting your full-stack journey";
  else if (answer === "fullstackDabbler")
    return "you had some experience in both front-end and back-end technologies";
  else if (answer === "fullstackExp")
    return "you are comfortable with a variety of technologies on both sides";
  else if (answer === "fullstackPro")
    return "you've got hands-on experience in full-stack development";

  if (answer === "endToEnd")
    return "developing end-to-end web applications";
  else if (answer === "serverSide")
    return "building robust server-side logic";
  else if (answer === "interfaces")
    return "designing intuitive user interfaces";
  else if (answer === "multipleLanguages")
    return "working with multiple languages and frameworks";

  if (answer === "codeJuggler")
    return "you was born to juggle code like a pro:=)";
  else if (answer === "onlyJoint")
    return "you are ready to join the circus just yet";
  else if (answer === "multitaskerConfused")
    return "you are good at handling one thing at a time, let alone a whole stack";
  else if (answer === "proJuggler")
    return "you've been practicing your juggling skills with flaming torches, so bring it on";

  if (answer === "codeRelay")
    return "you'd win gold in the 'Code Relay', passing data between frontend and backend like lightning";
  else if (answer === "debuggingMarathon")
    return "you'd dominate the 'Debugging Marathon', finding and fixing bugs with the speed of a super-sleuth";
  else if (answer === "designDiving")
    return "you'd be the champion of 'Design Diving', creating stunning user interfaces that make a splash";
  else if (answer === "languageTriathlon")
    return "you'd take home the 'Language Triathlon' medal, mastering multiple languages and frameworks";
}

//User Interface logic for main selection
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

//User Interface logic for FrontEnd questionary form
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

    let languageFrontEndResult = recommendFrontendLanguage(currentExp, projectEnvision, spaSelection, frontEndInterests);
    document.querySelector("span#language").innerText = languageFrontEndResult;

    document.querySelector("span#firstAnswerStatic").innerText = outputForStaticAnswerResult(currentExp);
    document.querySelector("span#secondAnswerStatic").innerText = outputForStaticAnswerResult(projectEnvision);
    document.querySelector("span#thirdAnswerStatic").innerText = outputForStaticAnswerResult(spaSelection);
    document.querySelector("span#fourthAnswerStatic").innerText = outputForStaticAnswerResult(frontEndInterests);

    document.querySelector("span#firstAnswerDynamic").innerText = outputForDynamicAnswerResult(currentExp);
    document.querySelector("span#secondAnswerDynamic").innerText = outputForDynamicAnswerResult(projectEnvision);
    document.querySelector("span#thirdAnswerDynamic").innerText = outputForDynamicAnswerResult(spaSelection);
    document.querySelector("span#fourthAnswerDynamic").innerText = outputForDynamicAnswerResult(frontEndInterests);

    //document.querySelector("span#preferring").innerText = languagePreference;
  }
  else {
    document.querySelector("div#error").removeAttribute("class");
    document.querySelector("div#result").setAttribute("class", "hidden");
    document.querySelector("div#error h3").textContent = "Please answer all questions";
  }
  document.getElementById("frontReset").removeAttribute("class");
}

//User Interface logic for Submit button in FrontEnd questionary form
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

//User Interface logic for resetting entering results in FrontEnd questionary form
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

//User Interface logic for BackEnd questionary form
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
    let languageBackEndResult = recommendationBackEndLanguage(currentExp, projectTypes, microServices, backEndInterests);
    document.querySelector("span#language").innerText = languageBackEndResult;
    document.querySelector("span#firstAnswerStatic").innerText = outputForStaticAnswerResult(currentExp);
    document.querySelector("span#secondAnswerStatic").innerText = outputForStaticAnswerResult(projectTypes);
    document.querySelector("span#thirdAnswerStatic").innerText = outputForStaticAnswerResult(microServices);
    document.querySelector("span#fourthAnswerStatic").innerText = outputForStaticAnswerResult(backEndInterests);

    document.querySelector("span#firstAnswerDynamic").innerText = outputForDynamicAnswerResult(currentExp);
    document.querySelector("span#secondAnswerDynamic").innerText = outputForDynamicAnswerResult(projectTypes);
    document.querySelector("span#thirdAnswerDynamic").innerText = outputForDynamicAnswerResult(microServices);
    document.querySelector("span#fourthAnswerDynamic").innerText = outputForDynamicAnswerResult(backEndInterests);
    //document.querySelector("span#preferring").innerText = languagePreference;

  } else {
    document.querySelector("div#error").removeAttribute("class");
    document.querySelector("div#result").setAttribute("class", "hidden");
    document.querySelector("div#error h3").textContent = "Please answer all questions";
  }
  document.getElementById("backReset").removeAttribute("class");
}

//User Interface logic for Submit button in BackEnd questionary form
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

//User Interface logic for resetting entering results in BackEnd questionary form
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

//User Interface logic for FullStack questionary form
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

    let languageFullstackResult = recommendationFullstackLanguage(fullstackExperience, fullstackInterests, multitasker, fullstackEvents);

    document.querySelector("span#language").innerText = languageFullstackResult;
    document.querySelector("span#firstAnswerStatic").innerText = outputForStaticAnswerResult(fullstackExperience);
    document.querySelector("span#secondAnswerStatic").innerText = outputForStaticAnswerResult(fullstackInterests);
    document.querySelector("span#thirdAnswerStatic").innerText = outputForStaticAnswerResult(multitasker);
    document.querySelector("span#fourthAnswerStatic").innerText = outputForStaticAnswerResult(fullstackEvents);

    document.querySelector("span#firstAnswerDynamic").innerText = outputForDynamicAnswerResult(fullstackExperience);
    document.querySelector("span#secondAnswerDynamic").innerText = outputForDynamicAnswerResult(fullstackInterests);
    document.querySelector("span#thirdAnswerDynamic").innerText = outputForDynamicAnswerResult(multitasker);
    document.querySelector("span#fourthAnswerDynamic").innerText = outputForDynamicAnswerResult(fullstackEvents);


    //document.querySelector("span#preferring").innerText = languagePreference;

  } else {
    document.querySelector("div#error").removeAttribute("class");
    document.querySelector("div#result").setAttribute("class", "hidden");
    document.querySelector("div#error h3").textContent = "Please answer all questions";
  }
  document.getElementById("fullstackReset").removeAttribute("class");
}

//User Interface logic for Submit button in FullStack questionary form
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

//User Interface logic for resetting entering results in FullStack questionary form
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

//User interface logic: load window even Listener
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

