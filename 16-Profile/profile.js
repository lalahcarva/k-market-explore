if (window.localStorage.getItem("loggedUser")) {
    fetch("http://192.168.2.22:3000/header")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            document.getElementById("header-container").innerHTML =
                data.content;
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
} else {
    window.location = "../01-Home/index.html";
}
