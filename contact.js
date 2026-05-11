const form = document.querySelector(".formular");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

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
            alert("Nachricht erfolgreich gesendet!");
            form.reset();
        } else {
            alert("Fehler: " + result.error);
        }

    } catch (error) {
        alert("Serverfehler");
        console.error(error);
    }
});