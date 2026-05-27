const form = document.querySelector(".formular");
let agreedTerms = false;


document.getElementById("name")
    .addEventListener("blur", () => {
        validateName();
        checkSendBtn();
    });


document.getElementById("email")
    .addEventListener("blur", () => {
        validateEmail();
        checkSendBtn();
    });


document.getElementById("message")
    .addEventListener("blur", () => {
        validateMessage();
        checkSendBtn();
    });


function toggleError(id, valid) {
    const error = document.getElementById(id);
    error.classList.toggle("d-none", valid);
}


function validateName() {
    const value = document
        .getElementById("name")
        .value
        .trim();
    const valid = value.length >= 2;
    toggleError("val-name", valid);
    
    return valid;
}


function validateEmail() {
    const value = document
        .getElementById("email")
        .value
        .trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const valid = regex.test(value);
    toggleError("val-mail", valid);
    
    return valid;
}


function validateMessage() {
    const value = document.getElementById("message").value.trim();
    const valid = value.length >= 5;
    toggleError("val-message", valid);
    
    return valid;
}


function validateTerms() {
    toggleError("val-terms", agreedTerms);
    return agreedTerms;
}


function toggleAgree() {

    let checkBox = document.getElementById("agree-img");

    if (checkBox.src.includes("check-box.svg")) {
        checkBox.src = "img/haekchen4.png";
        agreedTerms = true;
    } else {
        checkBox.src = "img/check-box.svg";
        agreedTerms = false;
    }

    validateTerms();
    checkSendBtn();
}


form.addEventListener("submit", handleSubmit);

async function handleSubmit(e) {
    e.preventDefault();

    if (!isFormValid()) return;

    try {
        const result = await sendFormData(getFormData());
        handleSubmitResult(result);
    } catch (error) {
        handleSubmitError(error);
    }
}


function isFormValid() {
    return (
        validateName() &&
        validateEmail() &&
        validateMessage() &&
        validateTerms()
    );
}


function getFormData() {
    return {
        name: getValue("name"),
        email: getValue("email"),
        message: getValue("message")
    };
}


function getValue(id) {
    return document.getElementById(id).value;
}


async function sendFormData(data) {
    const response = await fetch("/contact.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    return response.json();
}


function handleSubmitResult(result) {
    if (result.success) {
        resetFormState();
        messageSendFeedback("succeeded");
        return;
    }

    alert("Fehler: " + result.error);
}


function resetFormState() {
    form.reset();
    agreedTerms = false;
}


function handleSubmitError(error) {
    messageSendFeedback("failed");
    console.error(error);
}


function checkSendBtn() {
    let btn = document.getElementById("send-btn");

    const formValid =
        validateName() &&
        validateEmail() &&
        validateMessage() &&
        agreedTerms;

    if (formValid) {
        buttonActive(btn);
    } else {
        buttonNotActive(btn);
    }
}

function buttonActive(btn){
    btn.classList.remove("not-active");
    btn.classList.add("formular-send");
    btn.disabled = false;
}

function buttonNotActive(btn){
    btn.classList.add("not-active");
    btn.classList.remove("formular-send");
    btn.disabled = true;
}


function messageSendFeedback(value) {
    const feedback = document.getElementById("feedback");
    feedback.innerHTML = "";

    if(value === "succeeded"){
        messageSuccesful(feedback);
    }
    if(value === "failed"){
        messageFailed(feedback);
    }

    setTimeout(() => {
        feedback.classList.remove("show-success");
        feedback.classList.remove("show-failed");
        feedback.classList.add("hidden");
    }, 2500);
}


function messageSuccesful(feedback){
        feedback.innerHTML = "Message sent succesfully";
        feedback.classList.remove("hidden");
        feedback.classList.add("show-success");
}


function messageFailed(feedback){
        feedback.innerHTML = "Message could not be sent";
        feedback.classList.remove("hidden");
        feedback.classList.add("show-failed");
}