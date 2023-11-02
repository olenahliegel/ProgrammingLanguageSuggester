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
window.addEventListener("load", function () {
  const developmentFocusForm = document.getElementById("developmentFocus");
  developmentFocusForm.addEventListener("click", handleUserChoice);
});