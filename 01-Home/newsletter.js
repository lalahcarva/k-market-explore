var newsletterForm = document.querySelector("form");

newsletterForm.addEventListener("submit", (event) => {
    let newsEmail = document.getElementById("emailnewsletter");

    sendMail(newsEmail.value);

    event.preventDefault();
});

function sendMail(email) {
    let emailBody = `
    <h1>Kensington Explorer Newsletter</h1>
    <p>Thank you for signing up to our newsletter.</p>
    <p><strong>Kensington Explorer</strong></p>`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: envVars.MY_EMAIL,
        Password: envVars.MY_PASSWORD,
        To: email,
        From: envVars.MY_EMAIL,
        Subject: "Kensington Explorer Newsletter",
        Body: emailBody,
    }).then((message) => alert(message));
}
