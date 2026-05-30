function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });
}

function handleSubmit(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        document.getElementById("formMessage").innerText = "Please fill all fields!";
        return;
    }

    document.getElementById("formMessage").innerText = "Message sent successfully!";
}