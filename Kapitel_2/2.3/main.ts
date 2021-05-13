namespace KlappBuch{

    /*let chosenVariable: FinalPlant = { //neue Variable, in der die Auswahl abgespeichert wird
        blossom: null,
        stem: null,
        vase: null
    }*/

function createDiv(_part: Part):void{

    let option: HTMLDivElement = document.createElement("div"); 
    document.getElementById("selection").appendChild(option);

    let img: HTMLImageElement = document.createElement("img");
    img.src = _part.imageUrl;
    option.appendChild(img);
    
    let button: HTMLButtonElement= document.createElement("button");
    button.setAttribute("class", "choose");
    option.appendChild(button);
    button.innerHTML="select";
    button.addEventListener("click", event)

    function event(_e: Event): void{
        console.log(_part);
    }
}

for(let i = 0; i<partData.blossoms.length; i++){
createDiv(partData.blossoms[i])
}

    
    
}