"use strict";
var Aufgabe1;
(function (Aufgabe1) {
    document.querySelector("html").style.height = "100%";
    document.querySelector("body").style.minHeight = "100%";
    function getRandomNumber() {
        let size = Math.floor(Math.random() * 500) + 1;
        let sizeString = size.toString();
        return sizeString;
    }
    function getRandomPositionX() {
        let size = Math.floor(Math.random() * document.body.offsetWidth);
        let sizeString = size.toString();
        return sizeString;
    }
    function getRandomPositionY() {
        let size = Math.floor(Math.random() * 500);
        let sizeString = size.toString();
        return sizeString;
    }
    function generateRandomColor() {
        var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        return randomColor;
    }
    let numberOfRecs = 0;
    function createDiv() {
        numberOfRecs++; // jedes mal wenn ein neuer Rec erstellt wird erhöht sich die number of Recs
        let div = document.createElement("div");
        let norString = numberOfRecs.toString();
        div.setAttribute("id", norString); //Die Number of Recs wird als Id des erstellten Recs genutzt. So kann man immer auf das neu erstellte Rec zugreifen und es wird nicht immer das Oberste manipuliert
        document.getElementById("recHome").appendChild(div);
        document.getElementById(norString).style.backgroundColor = generateRandomColor();
        document.getElementById(norString).style.width = getRandomNumber() + "px";
        document.getElementById(norString).style.height = getRandomNumber() + "px";
        document.getElementById(norString).style.position = "absolute";
        document.getElementById(norString).style.left = getRandomPositionX() + "px";
        document.getElementById(norString).style.top = getRandomPositionY() + "px";
        document.getElementById(norString).style.marginTop = "100px";
    }
    function reset() {
        document.getElementById("recHome").innerHTML = "";
    }
    document.querySelector("#newRec").addEventListener("click", createDiv);
    document.querySelector("#reset").addEventListener("click", reset);
})(Aufgabe1 || (Aufgabe1 = {}));
//# sourceMappingURL=2.3.js.map