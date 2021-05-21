"use strict";
var KlappBuch2_4;
(function (KlappBuch2_4) {
    //Funktion um JSON in eine Objekt von PartCollection zu verwandeln
    function convert(_plant) {
        let allData = JSON.parse(_plant);
        return allData;
    }
    KlappBuch2_4.convert = convert;
    let data = convert(KlappBuch2_4.dataJSON);
    let partHolder = data.blossoms;
    let step = 1;
    // Ein Div Container in dem die getroffene Auswahl später gezeigt wird
    let chosenOptions = document.createElement("div");
    document.getElementById("selected").appendChild(chosenOptions);
    chosenOptions.setAttribute("id", "chosenOptions");
    function createDiv(_part) {
        //Div Container in dem Optionen gezeigt werden
        let option = document.createElement("div");
        document.getElementById("selection").appendChild(option);
        //Bilder der Optionen werden eingefügt
        let img = document.createElement("img");
        img.src = _part.imageUrl;
        option.appendChild(img);
        //Buttons werden erstellt
        let button = document.createElement("button");
        button.setAttribute("class", "choose");
        option.appendChild(button);
        button.innerHTML = "select";
        button.addEventListener("click", event);
        function event(_e) {
            //Aufgabe 1b)
            //Daten werden mit localStorage gespeichert
            if (step == 1) {
                localStorage.setItem("blossomPlant", _part.part);
                localStorage.setItem("blossomImg", _part.imageUrl);
            }
            if (step == 2) {
                localStorage.setItem("stemPlant", _part.part);
                localStorage.setItem("stemImg", _part.imageUrl);
            }
            if (step == 3) {
                localStorage.setItem("vasePlant", _part.part);
                localStorage.setItem("vaseImg", _part.imageUrl);
                location.href = "finalFlower.html";
            }
            //Aufgabe 1c)
            //Seiteninhalt wird resettet
            document.getElementById("selection").innerHTML = "";
            step++;
            //Partchanger sorgt dafür, dass die nächste Auswahl angezeigt wird
            partChanger();
            // die nächste Auswahl wird angezeigt mit partChanger als parameter
            showOptions(partHolder);
            //Aufgabe 1d)
            //Der Zuletzt ausgewählte Part wird erstellt und gezeigt
            let imgChosen = document.createElement("img");
            imgChosen.src = _part.imageUrl;
            chosenOptions.appendChild(imgChosen);
        }
    }
    function partChanger() {
        if (step == 2) {
            partHolder = data.stems;
            console.log(partHolder);
        }
        if (step == 3) {
            partHolder = data.vase;
        }
    }
    function showOptions(whatPart) {
        for (let i = 0; i < whatPart.length; i++) {
            createDiv(whatPart[i]);
        }
    }
    showOptions(partHolder);
})(KlappBuch2_4 || (KlappBuch2_4 = {}));
//# sourceMappingURL=main.js.map