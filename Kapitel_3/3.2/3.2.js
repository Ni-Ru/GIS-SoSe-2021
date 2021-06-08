"use strict";
var Aufgabe3_2;
(function (Aufgabe3_2) {
    let jsonOrHtml = true;
    let submissionHTML = document.getElementById("subHTML");
    submissionHTML.addEventListener("click", function () {
        jsonOrHtml = true;
        server();
    });
    let submissionJSON = document.getElementById("subJSON");
    submissionJSON.addEventListener("click", function () {
        jsonOrHtml = false;
        server();
    });
    async function server() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2021nicrubner.herokuapp.com";
        let query = new URLSearchParams(formData);
        if (jsonOrHtml == true) {
            url = url + "/html" + "?" + query.toString();
        }
        if (jsonOrHtml == false) {
            url = url + "/json" + "?" + query.toString();
        }
        let serverResponse = await fetch(url);
        let answerJSON;
        let answerHTML;
        if (jsonOrHtml == true) {
            answerHTML = await serverResponse.text();
            let textHTML = document.createElement("p");
            console.log(answerHTML);
            document.getElementById("answer").innerHTML = "";
            textHTML.innerHTML = answerHTML;
            document.getElementById("answer").appendChild(textHTML);
        }
        if (jsonOrHtml == false) {
            answerJSON = await serverResponse.json();
            document.getElementById("answer").innerHTML = "KONSOLE";
            console.log(answerJSON);
        }
    }
})(Aufgabe3_2 || (Aufgabe3_2 = {}));
//# sourceMappingURL=3.2.js.map