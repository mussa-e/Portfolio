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


form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const valid =
        validateName() &&
        validateEmail() &&
        validateMessage() &&
        validateTerms();

    if (!valid) return;


    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    try {
        const response = await fetch("contact.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            // alert("Nachricht erfolgreich gesendet!");
            messageSendFeedback("succeeded");
            form.reset();
            agreedTerms = false;
        } else {
            alert("Fehler: " + result.error);
        }

    } catch (error) {
        // alert("Serverfehler");
        messageSendFeedback("failed");
        console.error(error);
    }
});


function checkSendBtn() {
    let btn = document.getElementById("send-btn");

    const formValid =
        validateName() &&
        validateEmail() &&
        validateMessage() &&
        agreedTerms;

    if (formValid) {
        btn.classList.remove("not-active");
        btn.classList.add("formular-send");
        btn.disabled = false;
    } else {
        btn.classList.add("not-active");
        btn.classList.remove("formular-send");
        btn.disabled = true;
    }
}


function messageSendFeedback(value) {
    const feedback = document.getElementById("feedback");
    feedback.innerHTML = "";

    if(value === "succeeded"){
        feedback.innerHTML = "Message sent succesfully";
        feedback.classList.remove("hidden");
        feedback.classList.add("show-success");
    }
    if(value === "failed"){
        feedback.innerHTML = "Message could not be sent";
        feedback.classList.remove("hidden");
        feedback.classList.add("show-failed");
    }

    setTimeout(() => {
        feedback.classList.remove("show-success");
        feedback.classList.remove("show-failed");
        feedback.classList.add("hidden");
    }, 2500);
}