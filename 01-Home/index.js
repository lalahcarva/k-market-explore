fetch("http://192.168.2.22:3000/")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.getElementById("home-container").innerHTML = data.content;
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
