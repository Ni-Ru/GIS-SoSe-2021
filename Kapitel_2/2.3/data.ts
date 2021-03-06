namespace KlappBuch{


    export interface Part {
        part: string;
        imageUrl: string;
    }

    export interface PartCollection{
        blossoms: Part[];
        stems: Part[];
        vase: Part[];
    }

    export interface FinalPlant {
        blossom: Part;
        stem: Part;
        vase: Part;
    }

    export let saveVariable: FinalPlant = {
        blossom: null,
        stem: null,
        vase: null,
    }

    export let partData: PartCollection = {
        blossoms:[
            {part: "rose", imageUrl:"roseblossom.png" },
            {part: "orchid", imageUrl:"orchidblossom.png"},
            {part: "daisy", imageUrl:"daisyblossom.png"}
        ],
        stems:[
            {part: "rose", imageUrl:"rosestem.png" },
            {part: "orchid", imageUrl:"orchidstem.png"},
            {part: "daisy", imageUrl:"daisystem.png"}
        ],
        vase:[
            {part: "rose", imageUrl:"rosevase.png" },
            {part: "orchid", imageUrl:"orchidvase.png"},
            {part: "daisy", imageUrl:"daisyvase.png"}
        ]
    }
}