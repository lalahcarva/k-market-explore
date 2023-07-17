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

document.getElementById("login-user").addEventListener("submit", (event) => {
    event.preventDefault();
    let user = {
        email: document.getElementById("user-email").value,
        password: document.getElementById("user-password").value,
    };
    fetch("http://192.168.2.22:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            window.localStorage.setItem("loggedUser", JSON.stringify(data));
            window.location("../16-Profile.profile.html");
        })
        .catch((err) => {
            console.log(err);
        });
});
