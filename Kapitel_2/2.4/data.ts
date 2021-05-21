namespace KlappBuch2_4{
   

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

    //Variable in der Ausgewählte Teile gespeichert werden
    export let chosen: FinalPlant ={
        blossom:{part: localStorage.getItem("blossomPlant"),imageUrl: localStorage.getItem("blossomImg")},
        stem:{part: localStorage.getItem("stemPlant"),imageUrl: localStorage.getItem("stemImg")},
        vase:{part: localStorage.getItem("vasePlant"),imageUrl: localStorage.getItem("vaseImg")},
    } 

    //1a) Variable wird in JSON string konvertiert --> in finalMain ist die funktion mit der man es zurück konvertiert.
    //PartCollection
    export let dataJSON : string = JSON.stringify(partData);
    //FinalPlant
    export let plantJSON: string = JSON.stringify(chosen);
}