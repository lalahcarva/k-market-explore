fetch("http://192.168.2.22:3000/about")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.getElementById("about-container").innerHTML = data.content;
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
