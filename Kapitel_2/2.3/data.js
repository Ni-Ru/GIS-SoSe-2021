"use strict";
var KlappBuch;
(function (KlappBuch) {
    KlappBuch.saveVariable = {
        blossom: null,
        stem: null,
        vase: null,
    };
    KlappBuch.partData = {
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
})(KlappBuch || (KlappBuch = {}));
//# sourceMappingURL=data.js.map