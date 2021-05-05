namespace Aufgabe1 {
    console.log(min(3, 7, 1, 4, 73, 3));
    let evenNumber: number = -51;
    let unevenNumber: number = 75;
    console.log(isEven(evenNumber))
    console.log(isEven(unevenNumber))

    //a)
    function min(...number: number[]): number {


        let minimum: number = number[0];  //Array = beliebige Anzahl an zahlenwerten die übergeben werden
        for (let i: number = 1; i < number.length; i++) {
            if (number[i] < minimum) {
                minimum = number[i];
            }
        }
        return minimum;

    }

    //b
    function isEven(n: number): boolean {
        let even: boolean;
        if (n < 0) {
            n *= -1;
        }
        if (n == 0) {
            even = true;
        } else if (n == 1) {
            even = false;
        } else {
            return isEven(n - 2);  //Falls n > 1 ist, so wird n - 2 gerechnet, bis n = 1 oder = 0 ist. Falls n am ende = 0 ist, so ist n gerade. Falls es am ende 1 ist, so ist n ungerade 
            //Falls allerding 1 statt 2 abgezogen wird, so wird die Funktion so oft wiederholt, bis n = 1 ist. Der Fall n=0 kann in diesem Fall nicht eintreten  
        }
        return even;

    }

    //c
    interface Student {
        surname: String;
        name: String;
        age: number;
        matrikelNummer: String;
    }

    let student1: Student = { surname: "Rubner", name: "Nic", age: 19, matrikelNummer: "266659" }
    let student2: Student = { surname: "Mustermann", name: "Max", age: 20, matrikelNummer: "123456" }
    let student3: Student = { surname: "Bloggs", name: "Joe", age: 21, matrikelNummer: "654321" }

    let studiArray: Student[] = [student1, student2, student3];
    studiArray.push({ surname: "Doe", name: "John", age: 22, matrikelNummer: "69420" });

    console.log(studiArray[3].matrikelNummer);
    console.log(student1.name);
    console.log(studiArray[1].surname);


    function showInfo(s: Student): String {
        let info: String = s.surname + ", " + s.name + "\nAlter:" + s.age + "\nMatr.:" + s.matrikelNummer;
        return info;
    }

    for (let iStudi: number = 0; iStudi < studiArray.length; iStudi++) {
        console.log(showInfo(studiArray[iStudi]));
    }
}

namespace Aufgabe2 {




    let arr: number[] = [5, 42, 17, 2018, -10, 60, -10010];
    let arrBack: number[] = backwards(arr);
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
    function backwards(numberArray: number[]): number[] {

        let backwards: number[] = [];
        for (let i: number = 0; i < numberArray.length; i++) {
            backwards[numberArray.length - 1 - i] = numberArray[i];
        }
        return backwards;
    }

    //b
    function join(...manyArrays: number[][]): number[] {
        let forgedArray: number[] = [0];
        let index: number = 0;

        for (let addArrays: number = 0; addArrays < manyArrays.length; addArrays++) {  //addArray gibt den Array an der von addedArrays genommen wird 
            for (let addElements: number = 0; addElements < manyArrays[addArrays].length; addElements++) { //addElement gibt dass Element aus dem (von addArray bestimmten) Array an welches genommen wird.
                forgedArray[index] = manyArrays[addArrays][addElements]; //an die "index" Stelle von forgedArray kommt das "addElement" Element aus dem "addArray" Array von addedArrays
                index++;
            }
        }

        return forgedArray;

    }

    //c
    function split(splittingArray: number[], index1: number, index2: number): number[] {
        if (index1 > index2) {
            let save: number;
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
        let arraySlice: number[] = [];

        for (let splitter: number = index1 + 1; splitter <= index2; splitter++) {
            arraySlice.push(splittingArray[splitter]);
        }
        return arraySlice;
    }

}

namespace Aufgabe3 {
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myFirstCanvas");
    let context: CanvasRenderingContext2D = canvas.getContext("2d");

    //a)

    //Boden
    context.fillStyle = "green";
    context.fillRect(0, canvas.height - 100, canvas.width, 100);
    //Himmel
    context.fillStyle = "blue";
    context.fillRect(0, 0, canvas.width, 300);
    //Wolke1
    context.beginPath();
    context.arc(50, 100, 20, Math.PI * 0.5, Math.PI * 1.5);
    context.arc(100, 100, 20, Math.PI * 1.5, Math.PI * 0.5);
    context.arc(75, 80, 20, Math.PI * 1.0, 0);
    context.rect(50, 90, 50, 30);
    context.stroke();
    context.fillStyle = "white";
    context.fill();
    //Wolke2
    context.beginPath();
    context.arc(50 + 400, 100 + 40, 20, Math.PI * 0.5, Math.PI * 1.5);
    context.arc(100 + 400, 100 + 40, 20, Math.PI * 1.5, Math.PI * 0.5);
    context.arc(75 + 400, 80 + 40, 20, Math.PI * 1.0, 0);
    context.rect(50 + 400, 90 + 40, 50, 30);
    context.stroke();
    context.fillStyle = "white";
    context.fill();

    //haus Wand
    context.fillRect(100, 150, 200, 150);

    //Dach
    context.beginPath();
    context.moveTo(100, 150);
    context.lineTo(300, 150);
    context.lineTo(200, 50);
    context.closePath();
    context.stroke();
    context.fillStyle = "red";
    context.fill();

    //Baumstamm
    context.fillStyle = "brown";
    context.fillRect(350, 180, 20, 150);
    //Tür
    context.fillRect(120, 220, 40, 80);
    //Fenster
    context.fillStyle = "blue";
    context.fillRect(200, 220, 40, 40);

    //Baumkrone
    context.beginPath();
    context.arc(360, 180, 50, 0, Math.PI * 2)
    context.stroke();
    context.fillStyle = "green";
    context.fill();



    //b

    let canvas2: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("mySecondCanvas");
    let context2: CanvasRenderingContext2D = canvas2.getContext("2d");

    interface Rectangle {
        xPos: number;
        yPos: number;
        recWidth: number;
        recHeight: number;
    }

    function generateRandomColor() {
        var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        return randomColor;
        //random Color für die Rectangles


    }

    drawRect(createRect(6));

    //c
    function createRect(anzahl: number): Rectangle[] {
        let manyrecs: Rectangle[] = [];
        for (let i: number = 0; i <= anzahl; i++) {
            let rec: Rectangle = { xPos: Math.floor(Math.random() * canvas.width), yPos: Math.floor(Math.random() * canvas.height), recWidth: Math.floor(Math.random() * canvas.width) + 1, recHeight: Math.floor(Math.random() * canvas.height) + 1 };
            manyrecs.push(rec);
        }
        return manyrecs;
    }

    //d

    function drawRect(rec: Rectangle[]) {
        for (let key in rec) {
            context2.fillStyle = generateRandomColor();
            context2.fillRect(rec[key].xPos, rec[key].yPos, rec[key].recWidth, rec[key].recHeight);
        }
    }

    //f
    setInterval(function () { context2.clearRect(0, 0, canvas2.width, canvas2.height), drawRect(createRect(5)) }, 1000);



}

