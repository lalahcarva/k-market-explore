fetch("http://192.168.2.22:3000/explore")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.getElementById("explore-container").innerHTML = data.content;
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
