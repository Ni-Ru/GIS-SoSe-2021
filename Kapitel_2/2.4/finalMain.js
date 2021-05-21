"use strict";
var KlappBuch2_4;
(function (KlappBuch2_4) {
    // Funktion mit der JSON string zurück in eine Instanz gewandelt wird
    function convertFinal(_plant) {
        let plant = JSON.parse(_plant);
        return plant;
    }
    KlappBuch2_4.convertFinal = convertFinal;
    // Es wird eine Instanz von dem Objekt FinalPlant erstellt, mithilfe des Json strings
    KlappBuch2_4.finalFlower = convertFinal(KlappBuch2_4.plantJSON);
    //Aufgabe 2
    //Die Selbst erstellte Blume wird auf einer Extra Seite dargestellt
    for (let i = 0; i < 3; i++) {
        console.log("yoo");
        let url = KlappBuch2_4.finalFlower.blossom.imageUrl;
        console.log(KlappBuch2_4.finalFlower.blossom);
        if (i == 1) {
            url = KlappBuch2_4.finalFlower.stem.imageUrl;
        }
        if (i == 2) {
            url = KlappBuch2_4.finalFlower.vase.imageUrl;
        }
        let final = document.createElement("div");
        document.getElementById("final").appendChild(final);
        let finalImg = document.createElement("img");
        finalImg.src = url;
        final.appendChild(finalImg);
    }
})(KlappBuch2_4 || (KlappBuch2_4 = {}));
//# sourceMappingURL=finalMain.js.map