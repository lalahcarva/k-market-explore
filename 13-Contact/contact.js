fetch("http://192.168.2.22:3000/header")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.getElementById("header-container").innerHTML = data.content;
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });

var contactForm = document.querySelector("form");

contactForm.addEventListener("submit", (event) => {
    let destnyEmail = document.getElementById("form-email");
    let from = document.getElementById("form-name");
    let messageContent = document.getElementById("form-message");

    sendMail(from.value, destnyEmail.value, messageContent.value);

    event.preventDefault();
});

function sendMail(name, email, messageContent) {
    let emailBody = `
    <h1>Kensigton Explorer Contact</h1>
    <h3>Dear ${name},</h3>
    <p>This is your contact message: </p>
    <p>${messageContent}</p>
    <p><strong>Kensigton Explorer</strong> thanks you for the contact!!!</p>`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: envVars.MY_EMAIL,
        Password: envVars.MY_PASSWORD,
        To: email,
        From: envVars.MY_EMAIL,
        Subject: "Kensignton Explorer Contact",
        Body: emailBody,
    }).then((message) => alert(message));
}
