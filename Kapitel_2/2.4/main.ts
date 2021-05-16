namespace KlappBuch2_4 {

    let partHolder: Part[] = partData.blossoms;
    let step: number = 1;

    // Ein Div Container in dem die getroffene Auswahl später gezeigt wird
    let chosenOptions: HTMLDivElement = document.createElement("div");
    document.getElementById("selected").appendChild(chosenOptions);
    chosenOptions.setAttribute("id", "chosenOptions");

    function createDiv(_part: Part): void {
        //Div Container in dem Optionen gezeigt werden
        let option: HTMLDivElement = document.createElement("div");
        document.getElementById("selection").appendChild(option);
        //Bilder der Optionen werden eingefügt
        let img: HTMLImageElement = document.createElement("img");
        img.src = _part.imageUrl;
        option.appendChild(img);
        //Buttons werden erstellt
        let button: HTMLButtonElement = document.createElement("button");
        button.setAttribute("class", "choose");
        option.appendChild(button);
        button.innerHTML = "select";
        button.addEventListener("click", event)

        function event(_e: Event): void {
            //Aufgabe 1b)
            //Daten werden mit localStorage gespeichert
            if (step == 1) {
                localStorage.setItem("blossomPlant", _part.part)
                localStorage.setItem("blossomImg", _part.imageUrl)
            } if (step == 2) {
                localStorage.setItem("stemPlant", _part.part)
                localStorage.setItem("stemImg", _part.imageUrl)
            } if (step == 3) {
                localStorage.setItem("vasePlant", _part.part)
                localStorage.setItem("vaseImg", _part.imageUrl)
                location.href = "finalFlower.html"; 
                
            }

            //Aufgabe 1c)
            //Seiteninhalt wird resettet
            document.getElementById("selection").innerHTML = "";
            step++;
            //Partchanger sorgt dafür, dass die nächste Auswahl angezeigt wird
            partChanger();
            // die nächste Auswahl wird angezeigt mit partChanger als parameter
            showOptions(partHolder);

            //Aufgabe 1d)
            //Der Zuletzt ausgewählte Part wird erstellt und gezeigt
            let imgChosen: HTMLImageElement = document.createElement("img");
            imgChosen.src = _part.imageUrl;
            chosenOptions.appendChild(imgChosen);
        }
    }

    function partChanger(): void {
        if (step == 2) {
            partHolder = partData.stems;
            console.log(partHolder);
        }
        if (step == 3) {
            partHolder = partData.vase;
        }
    }

    function showOptions(whatPart: Part[]): void {

        for (let i = 0; i < whatPart.length; i++) {
            createDiv(whatPart[i])
        }
    }



    showOptions(partHolder);


}