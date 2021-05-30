"use strict";
let submission = document.getElementById("sub");
submission.addEventListener("click", server);
async function server() {
    let formData = new FormData(document.forms[0]);
    let url = "https://gissose2021nicrubner.herokuapp.com";
    let query = new URLSearchParams(formData);
    url = url + "?" + query.toString();
    let serverResponse = await fetch(url);
    let answer = await serverResponse.text();
    console.log(answer);
    document.getElementById("answer").innerHTML = answer;
}
//# sourceMappingURL=3.1.js.map