namespace KlappBuch2_4 {
    export interface Part {
        part: string;
        imageUrl: string;
    }

    export interface PartCollection {
        blossoms: Part[];
        stems: Part[];
        vase: Part[];
    }

    export interface FinalPlant {
        blossom: Part;
        stem: Part;
        vase: Part;
    }
}