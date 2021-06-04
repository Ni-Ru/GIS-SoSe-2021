"use strict";
var Aufgabe3_2;
(function (Aufgabe3_2) {
    let submissionHTML = document.getElementById("subHTML");
    submissionHTML.addEventListener("click", serverHTML);
    let submissionJSON = document.getElementById("subJSON");
    submissionJSON.addEventListener("click", serverJSON);
    async function serverHTML() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2021nicrubner.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "/html" + "?" + query.toString();
        let serverResponse = await fetch(url);
        let answer = await serverResponse.text();
        console.log(answer);
        document.getElementById("answer").innerHTML = answer;
    }
    async function serverJSON() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2021nicrubner.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "/json" + "?" + query.toString();
        let serverResponse = await fetch(url);
        let answer = await serverResponse.text();
        console.log(answer);
        document.getElementById("answer").innerHTML = answer;
    }
})(Aufgabe3_2 || (Aufgabe3_2 = {}));
//# sourceMappingURL=3.2.js.map