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

document.getElementById("register-form").addEventListener("submit", (event) => {
    event.preventDefault();
    let newUser = {
        firstName: document.getElementById("form-first-name").value,
        lastName: document.getElementById("form-last-name").value,
        age: document.getElementById("form-age").value,
        occupation: document.getElementById("form-occupation").value,
        dateOfBirth: document.getElementById("form-date-of-birth").value,
        email: document.getElementById("form-email").value,
        password: document.getElementById("form-password").value,
        profilePic: document.getElementById("form-profile-picture").value,
    };
    console.log("new user", newUser);
    fetch("http://192.168.2.22:3000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            window.localStorage.setItem("loggedUser", JSON.stringify(data));
        })
        .catch((err) => {
            console.log(err);
        });
});
