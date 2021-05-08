

namespace Aufgabe1 {
    document.querySelector("html").style.height="100%";
    document.querySelector("body").style.minHeight = "100%";

    function getRandomNumber(): string { // Random Nummer für die Größe der Rechtecke wird bestimmt
        let size: number = Math.floor(Math.random() * 500) + 1;
        let sizeString: string = size.toString();
        return sizeString;
    }

    function getRandomPositionX(): string { //Random Nummer für die X-Position der Recs
        let size: number = Math.floor(Math.random() * document.body.offsetWidth);
        let sizeString: string = size.toString();
        return sizeString;
    }

    function getRandomPositionY(): string { //Random Nummer für die Y-Position der Recs
        let size: number = Math.floor(Math.random() * 500);
        let sizeString: string = size.toString();
        return sizeString;
    }

    function generateRandomColor() {    //Random Farbe für die Recs
        var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        return randomColor;
    }

    let numberOfRecs: number = 0;
    function createDiv() {
        numberOfRecs++; // jedes mal wenn ein neuer Rec erstellt wird erhöht sich die number of Recs
        let div: HTMLDivElement = document.createElement("div");
        let norString: string = numberOfRecs.toString();
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
}


