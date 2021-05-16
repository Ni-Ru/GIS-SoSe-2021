"use strict";
var KlappBuch2_4;
(function (KlappBuch2_4) {
    KlappBuch2_4.partData = {
        blossoms: [
            { part: "rose", imageUrl: "roseblossom.png" },
            { part: "orchid", imageUrl: "orchidblossom.png" },
            { part: "daisy", imageUrl: "daisyblossom.png" }
        ],
        stems: [
            { part: "rose", imageUrl: "rosestem.png" },
            { part: "orchid", imageUrl: "orchidstem.png" },
            { part: "daisy", imageUrl: "daisystem.png" }
        ],
        vase: [
            { part: "rose", imageUrl: "rosevase.png" },
            { part: "orchid", imageUrl: "orchidvase.png" },
            { part: "daisy", imageUrl: "daisyvase.png" }
        ]
    };
    //Variable in der Ausgewählte Teile gespeichert werden
    KlappBuch2_4.chosen = {
        blossom: { part: localStorage.getItem("blossomPlant"), imageUrl: localStorage.getItem("blossomImg") },
        stem: { part: localStorage.getItem("stemPlant"), imageUrl: localStorage.getItem("stemImg") },
        vase: { part: localStorage.getItem("vasePlant"), imageUrl: localStorage.getItem("vaseImg") },
    };
    //1a) Variable wird in JSON string konvertiert --> in finalMain ist die funktion mit der man es zurück konvertiert.
    KlappBuch2_4.plantJSON = JSON.stringify(KlappBuch2_4.chosen);
})(KlappBuch2_4 || (KlappBuch2_4 = {}));
//# sourceMappingURL=data.js.map