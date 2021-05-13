"use strict";
var KlappBuch;
(function (KlappBuch) {
    /*let chosenVariable: FinalPlant = { //neue Variable, in der die Auswahl abgespeichert wird
        blossom: null,
        stem: null,
        vase: null
    }*/
    function createDiv(_part) {
        let option = document.createElement("div");
        document.getElementById("selection").appendChild(option);
        let img = document.createElement("img");
        img.src = _part.imageUrl;
        option.appendChild(img);
        let button = document.createElement("button");
        button.setAttribute("class", "choose");
        option.appendChild(button);
        button.innerHTML = "select";
        button.addEventListener("click", event);
        function event(_e) {
            console.log(_part);
        }
    }
    for (let i = 0; i < KlappBuch.partData.blossoms.length; i++) {
        createDiv(KlappBuch.partData.blossoms[i]);
    }
})(KlappBuch || (KlappBuch = {}));
//# sourceMappingURL=main.js.map