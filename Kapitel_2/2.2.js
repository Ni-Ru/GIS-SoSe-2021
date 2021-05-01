"use strict";
var Aufgabe1;
(function (Aufgabe1) {
    let zahlen = [3, 7, 1, 4, 73, 3];
    console.log(min(zahlen));
    let evenNumber = 50;
    let unevenNumber = 75;
    console.log(isEven(evenNumber));
    console.log(isEven(unevenNumber));
    //a)
    function min(numberArray) {
        let minimum = numberArray[0]; //Array = beliebige Anzahl an zahlenwerten die übergeben werden
        for (let i = 1; i < numberArray.length; i++) {
            if (numberArray[i] < minimum) {
                minimum = numberArray[i];
            }
        }
        return minimum;
    }
    //b
    function isEven(number) {
        let even;
        if (number == 0) {
            even = true;
        }
        else if (number == 1) {
            even = false;
        }
        else {
            //X (im Fall number - 1) -> number--;
            return isEven(number - 2); //Falls n > 1 ist, so wird n - 2 gerechnet, bis n = 1 oder = 0 ist.
            //wird allerdings n - 1 gerechnet so wird n - 1 gerechnet bis n = 1 ist. Der Fall n = 0 kann hiermit garnicht erfolgen außer man zieht an der mit //X markierten stelle nochmal 1 von n ab 
        }
        return even;
    }
    let student1 = { surname: "Rubner", name: "Nic", age: 19, matrikelNummer: "266659" };
    let student2 = { surname: "Mustermann", name: "Max", age: 20, matrikelNummer: "123456" };
    let student3 = { surname: "Bloggs", name: "Joe", age: 21, matrikelNummer: "654321" };
    let studiArray = [student1, student2, student3];
    studiArray.push({ surname: "Doe", name: "John", age: 22, matrikelNummer: "69420" });
    console.log(studiArray[3].matrikelNummer);
    console.log(student1.name);
    console.log(studiArray[1].surname);
    function showInfo(s) {
        let info = s.surname + ", " + s.name + "\nAlter:" + s.age + "\nMatr.:" + s.matrikelNummer;
        return info;
    }
    console.log(showInfo(studiArray[0]));
    console.log(showInfo(studiArray[1]));
    console.log(showInfo(studiArray[2]));
    console.log(showInfo(studiArray[3]));
})(Aufgabe1 || (Aufgabe1 = {}));
var Aufgabe2;
(function (Aufgabe2) {
    let arr = [5, 42, 17, 2018, -10, 60, -10010];
    let arrBack = backwards(arr);
    console.log(arr);
    console.log(arrBack);
    console.log(join(arr, [15, 9001, -440]));
    arr = split(arr, 0, 4);
    console.log(arr);
    console.log(split(arr, 1, 2));
    console.log(split(arr, 2, 0));
    console.log(split(arr, -1, 2));
    console.log(split(arr, 0, 7));
    //a
    function backwards(numberArray) {
        let backwards = [numberArray[numberArray.length - 1]];
        for (let i = numberArray.length - 2; i >= 0; i--) {
            backwards.push(numberArray[i]);
        }
        return backwards;
    }
    //b
    function join(existingArray, joiningArray) {
        let addedArrays = [existingArray, joiningArray]; // die beiden Array werden in ein Array aus Arrays zusammengefügt
        let forgedArray = [0];
        let index = 0;
        for (let addArrays = 0; addArrays < addedArrays.length; addArrays++) { //addArray gibt den Array an der von addedArrays genommen wird 
            for (let addElements = 0; addElements < addedArrays[addArrays].length; addElements++) { //addElement gibt dass Element aus dem (von addArray bestimmten) Array an welches genommen wird.
                forgedArray[index] = addedArrays[addArrays][addElements]; //an die "index" Stelle von forgedArray kommt das "addElement" Element aus dem "addArray" Array von addedArrays
                index++;
            }
        }
        return forgedArray;
    }
    //c
    function split(splittingArray, index1, index2) {
        if (index1 > index2) {
            let save;
            save = index1;
            index1 = index2;
            index2 = save;
        }
        if (index1 < 0) {
            index1 = 0;
        }
        if (index2 > splittingArray.length - 1) {
            index2 = splittingArray.length - 1;
        }
        let arraySlice = [splittingArray[index1]];
        for (let splitter = index1 + 1; splitter <= index2; splitter++) {
            arraySlice.push(splittingArray[splitter]);
        }
        return arraySlice;
    }
})(Aufgabe2 || (Aufgabe2 = {}));
var Aufgabe3;
(function (Aufgabe3) {
    let canvas = document.getElementById("myFirstCanvas");
    let context = canvas.getContext("2d");
    function generateRandomColor() {
        var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        return randomColor;
        //random Color für die Rectangles
    }
    let rec1 = createRect(); //Erstellung eines zufälligen Rectangles
    drawRect(rec1); //Rectangle wird gemalen
    let rectArray = [createRect(), createRect(), createRect(), createRect(), createRect(), createRect()]; //Array an zufälligen Rectangles wird erstellt
    for (let num of rectArray) {
        drawRect(num); //jedes Rectangle im Array wird gezeichnet       
    }
    //c
    function createRect() {
        let rec = { xPos: Math.floor(Math.random() * canvas.width) + 1, yPos: Math.floor(Math.random() * canvas.height) + 1, recWidth: Math.floor(Math.random() * canvas.width) + 1, recHeight: Math.floor(Math.random() * canvas.height) + 1 };
        return rec;
    }
    //d
    function drawRect(rec) {
        context.fillStyle = generateRandomColor();
        context.fillRect(rec.xPos, rec.yPos, rec.recWidth, rec.recHeight);
    }
})(Aufgabe3 || (Aufgabe3 = {}));
//# sourceMappingURL=2.2.js.map