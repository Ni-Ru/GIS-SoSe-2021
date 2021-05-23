"use strict";
var KlappBuch2_4;
(function (KlappBuch2_4) {
    async function sendData() {
        let url = "https://gis-communication.herokuapp.com";
        let query = new URLSearchParams(localStorage);
        url = url + "?" + query.toString();
        let response = fetch("https://gis-communication.herokuapp.com");
        let answer = await (await response).json();
        if (answer.message) {
            document.getElementById("msg").textContent = answer.message;
            document.getElementById("msg").style.color = "green";
            document.getElementById("msg").style.borderColor = "green";
        }
        if (answer.error) {
            document.getElementById("msg").textContent = answer.error;
            document.getElementById("msg").style.color = "red";
            document.getElementById("msg").style.borderColor = "red";
        }
    }
    sendData();
    //Die Selbst erstellte Blume wird auf einer Extra Seite dargestellt
    for (let i = 0; i < 3; i++) {
        let url = localStorage.getItem("blossomImg");
        if (i == 1) {
            url = localStorage.getItem("stemImg");
        }
        if (i == 2) {
            url = localStorage.getItem("vaseImg");
        }
        let final = document.createElement("div");
        document.getElementById("final").appendChild(final);
        let finalImg = document.createElement("img");
        finalImg.src = url;
        final.appendChild(finalImg);
    }
})(KlappBuch2_4 || (KlappBuch2_4 = {}));
//# sourceMappingURL=finalMain.js.map