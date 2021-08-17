let jumbotron = document.querySelector(".jumbotron");
let donateBike = document.querySelector(".buttons a:first-child");
let volunteer = document.querySelector(".buttons a:nth-child(2)");
let blueBtn = document.querySelector("#blueBtn");
let orangeBtn = document.querySelector("#orangeBtn");
let greenBtn = document.querySelector("#greenBtn");
blueBtn.addEventListener("click", () => changeColor("#588fbd", "#ffa500", "black", "white"));
orangeBtn.addEventListener("click", () => changeColor("#f0ad4e", "#5751fd", "31b0d5", "white"));
greenBtn.addEventListener("click", () => changeColor("#87ca8a", "#5751fd", "8c9c08", "white"));


function changeColor(jumbColor, donateColor, volunteerBack, volunteerText) {
    jumbotron.style.backgroundColor = jumbColor;
    donateBike.style.backgroundColor = donateColor;
    volunteer.style.backgroundColor = volunteerBack;
    volunteer.style.color = volunteerText;
}


let form = document.querySelector("form");
form.addEventListener("submit", checkUserInput);
let userEmail = document.querySelector("#exampleInputEmail1");
let exampleText = document.querySelector("#example-text-input");
let textArea = document.querySelector("#exampleTextarea");
let inputs = document.querySelectorAll("input");
let inputsArray = Array.from(inputs);

userEmail.addEventListener("change", changeBackground);
exampleText.addEventListener("change", changeBackground);
textArea.addEventListener("change", changeBackground);

function changeBackground(event) {
    event.target.classList.remove("redBackground");
    event.target.classList.add("whiteBackground");

}

function checkUserInput(event) {
    event.preventDefault();
    let isEmailValid = userEmail.value.trim().includes("@");
    let isExampleTextValid = exampleText.value.trim().length > 0;
    let isTextAreaValid = textArea.value.trim().length > 0;
    if (isEmailValid && isExampleTextValid && isTextAreaValid) {
        userEmail.value = "";
        exampleText.value = "";
        textArea.value = "";

        userEmail.classList.remove("redBackground");
        userEmail.classList.add("whiteBackground");
        exampleText.classList.remove("redBackground");
        exampleText.classList.add("whiteBackground");
        textArea.classList.remove("redBackground");
        textArea.classList.add("whiteBackground");

        alert("Thank you for filling out the form");
    } else {

        if (!isEmailValid) {
            userEmail.classList.remove("whiteBackground");

            userEmail.classList.add("redBackground");
        }
        if (!isExampleTextValid) {
            exampleText.classList.remove("whiteBackground");
            exampleText.classList.add("redBackground");
        }
        if (!isTextAreaValid) {
            textArea.classList.remove("whiteBackground");
            textArea.classList.add("redBackground");
        }
    }
}