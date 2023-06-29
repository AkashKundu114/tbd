import users from "./users.json" assert { type: "json" };

var form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    let n = 0;
    for (let i = 0; i <= 11; i++) {
        if (users[i]["name"] == username && users[i]["password"] == password) {
            window.location = "http://www.example.com";
        }

    } 
    
    if (username === "") {
        document.getElementById("show").innerHTML =
            "<p id='error'>Please enter an Username!</p>";

    } else if (password === "") {
        document.getElementById("show").innerHTML =
            "<p id='error'>Please enter an Password!</p>";

    } else if (username === "" && password === "") {
        document.getElementById("show").innerHTML =
            "<p id='error'>Please enter Username and Password!</p>";
    } else {
        document.getElementById("show").innerHTML =
            "<p id='error'>Incorrect username or password!!</p>";

    }

});
