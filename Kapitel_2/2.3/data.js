"use strict";
var KlappBuch;
(function (KlappBuch) {
    let variable = [
        {
            plant: "rose",
            blossom: {
                part: "blossom",
                plant: "rose",
                imageUrl: "roseblossom.png",
                width: 100,
                height: 100,
                blossomed: true,
                color: "red",
                smell: "good"
            },
            stem: {
                part: "stem",
                plant: "rose",
                imageUrl: "rosestem.png",
                width: 100,
                height: 100,
                thickness: "slim",
                form: "straight",
                thorns: true
            },
            vase: {
                part: "vase",
                plant: "rose",
                imageUrl: "vasestem.png",
                width: 100,
                height: 100,
                color: "brown",
                form: "round"
            }
        },
        {
            plant: "daisy",
            blossom: {
                part: "blossom",
                plant: "daisy",
                imageUrl: "daisyblossom.png",
                width: 100,
                height: 100,
                blossomed: true,
                color: "white",
                smell: "good"
            },
            stem: {
                part: "stem",
                plant: "daisy",
                imageUrl: "daisystem.png",
                width: 100,
                height: 100,
                thickness: "slim",
                form: "limp",
                thorns: false
            },
            vase: {
                part: "vase",
                plant: "daisy",
                imageUrl: "vasestem.png",
                width: 100,
                height: 100,
                color: "green",
                form: "edgy"
            }
        },
        {
            plant: "cactus",
            blossom: {
                part: "blossom",
                plant: "cactus",
                imageUrl: "cactusblossom.png",
                width: 100,
                height: 100,
                blossomed: true,
                color: "white",
                smell: "neutral"
            },
            stem: {
                part: "stem",
                plant: "cactus",
                imageUrl: "cactusstem.png",
                width: 100,
                height: 100,
                thickness: "thick",
                form: "oval",
                thorns: true
            },
            vase: {
                part: "vase",
                plant: "cactus",
                imageUrl: "cactusstem.png",
                width: 100,
                height: 100,
                color: "yellow",
                form: "round"
            }
        },
        {
            plant: "orchid",
            blossom: {
                part: "blossom",
                plant: "orchid",
                imageUrl: "orchidblossom.png",
                width: 100,
                height: 100,
                blossomed: true,
                color: "orange",
                smell: "good"
            },
            stem: {
                part: "stem",
                plant: "orchid",
                imageUrl: "orchidstem.png",
                width: 100,
                height: 100,
                thickness: "thin",
                form: "limp",
                thorns: false
            },
            vase: {
                part: "vase",
                plant: "orchid",
                imageUrl: "orchidstem.png",
                width: 100,
                height: 100,
                color: "beige",
                form: "cylinder"
            }
        }
    ];
    let chosenVariable = {
        plant: "new",
        blossom: null,
        stem: null,
        vase: null
    };
    function output(btn) {
        let id = btn.id;
        let numId = Number(id) - 1;
        chosenVariable.blossom = variable[numId].blossom; //Die ID des geklickten Buttons wird gelesen und benutzt um die Richtigen daten aus der vorhandenen Variable in die neue zu transportieren
        console.log(chosenVariable);
    }
    let x = document.getElementsByClassName("box");
    for (let i = 0; i < x.length; i++) { //Für jeden "Box" Div wird ein Button erstellt
        let button = document.createElement("button");
        let number = i + 1;
        let numberString = number.toString();
        button.innerHTML = "choice " + numberString;
        button.setAttribute("class", "choose");
        button.setAttribute("id", numberString);
        x[i].appendChild(button);
        button.addEventListener("click", function () {
            output(button);
        }, false);
    }
})(KlappBuch || (KlappBuch = {}));
//# sourceMappingURL=data.js.map