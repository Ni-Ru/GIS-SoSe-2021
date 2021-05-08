namespace KlappBuch{

    export interface Plant{
    plant: string;    
    blossom: BlossomPart;
    stem: StemPart;
    vase: VasePart;
    }

    export interface Part{
        part: string;
        plant: string;
        imageUrl: string;
        width: number;
        height: number;
    }

    export interface BlossomPart extends Part{
        blossomed: boolean;
        color: string;
        smell: string;
    }

    export interface VasePart extends Part{
        color: string;
        form: string;
    }

    export interface StemPart extends Part{
        thickness: string;
        form: string;
        thorns: boolean;
    }

}