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

    export let partData: PartCollection = {
        blossoms:[
            {part: "rose", imageUrl:"roseblossom.png" },
            {part: "orchid", imageUrl:"orchidblossom.png"},
            {part: "tulip", imageUrl:"tulipblossom.png"}
        ],
        stems:[
            {part: "rose", imageUrl:"rosestem.png" },
            {part: "orchid", imageUrl:"orchidstem.png"},
            {part: "tulip", imageUrl:"tulipstem.png"}
        ],
        vase:[
            {part: "rose", imageUrl:"rosevase.png" },
            {part: "orchid", imageUrl:"orchidvase.png"},
            {part: "tulip", imageUrl:"tulipvase.png"}
        ]
    }
}