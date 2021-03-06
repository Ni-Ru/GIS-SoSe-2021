"use strict";
var a3_4;
(function (a3_4) {
    let path;
    let answer = document.getElementById("answer");
    document.getElementById("send").addEventListener("click", function () {
        path = "/add";
        handleSubmit();
    });
    document.getElementById("receive").addEventListener("click", function () {
        path = "/retrive";
        handleSubmit();
    });
    async function handleSubmit() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2021nicrubner.herokuapp.com";
        let query = new URLSearchParams(formData);
        url += path + "?" + query.toString();
        let response = await fetch(url, { method: "get" });
        let responseText = await response.text();
        if (path == "/retrive") {
            answer.innerHTML = "";
            console.log("Retrieved JSON", JSON.parse(responseText));
            let responseJSON = JSON.parse(responseText);
            for (let i = 0; i < responseJSON.length; i++) {
                let temp = document.createElement("div");
                temp.className = "databaseEntry";
                temp.innerHTML = "id: " + responseJSON[i]._id +
                    "<br> firstname: " + responseJSON[i].vorname +
                    "<br> lastname: " + responseJSON[i].nachname +
                    "<br> email: " + responseJSON[i].email + "<br>";
                let tempDelete = document.createElement("button");
                tempDelete.className = "deleteBtn";
                tempDelete.addEventListener("click", async function () {
                    await fetch("https://gissose2021nicrubner.herokuapp.com/delete?_id=" + responseJSON[i]._id, { method: "get" }); //todo change to heroku
                    temp.innerHTML = "deleted";
                });
                tempDelete.appendChild(document.createTextNode("Delete"));
                temp.appendChild(tempDelete);
                answer.appendChild(temp);
            }
        }
        else if (path == "/add") {
            console.log(responseText);
            showResponse(responseText);
            let form = document.getElementById("forms");
            form.reset();
        }
    }
    function showResponse(text) {
        answer.innerHTML = text;
    }
})(a3_4 || (a3_4 = {}));
//# sourceMappingURL=script.js.map