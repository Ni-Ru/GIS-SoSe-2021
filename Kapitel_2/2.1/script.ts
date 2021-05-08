namespace Aufgabe1 {
    function a1(): void {
        let x: string = "Alles";
        console.log(x); //Zuerst wird "Alles" wiedergegeben
        func2(); // hier wird auf func2 aufgerufen, wodurch "Gute!" wiedergegeben wird
        console.log(x); //Es wird wieder die der let "Alles" wiedergegeben
        func1(); // func1 wird aufgerufen
        console.log(x); //Die Variable X wird zum 3. mal wiedergegeben
        console.log("Logo!");
    }

    a1(); //Die Funktion a1 wird ausgeführt, wodurch die ausgabe "Alles Gute! Alles klar? Alles Logo!" erscheint

    function func1(): void {
        console.log("klar?"); //Konsole gibt klar? wieder
    }

    function func2(): void {
        console.log("Gute!") //Gute wird auf der Konsole wiedergegeben
    }
}
namespace Aufgabe2 {
    function a2(): void {
        let i: number = 9; // let i wird als nummer deklariert und der Wert 9 wird zugewiesen

        do {
            console.log(i); //let i wird auf der Konsole wiedergegeben
            i = i - 1; // i wird um 1 verringert
        } while (i > 0); //i wird solange wiedergegeben bis es 0 ist
    }


    a2(); //Funktion a2 wird ausgeführt, Es wird von 9 bis 1 herunter gezählt
}

namespace Aufgabe4 {
    let x: string = "Hallo"; //Eine Globale Variable x mit dem Typ String und wert "Hallo" wird erstellt wird erstellt
    console.log(x); //Hallo
    func1(x); //Bla
    console.log(x); // Hallo
    func2(); //Blubb
    func3();
    console.log(x);//Test

    function func1(y: string): void { // Im Beispiel wird der Wert von x an y übergeben, der Wert von y ist in dieser Zeile also: "Hallo"
        y = "Bla"; //innerhalb der func1 wird der Wert von y von "Hallo" zu "Bla" geändert, die Globale Variable x verändert sich allerdings nicht
        console.log(y); //"Bla" wird wiedergegeben 
    }

    //b
    //



    function func2(): void {
        let x: string = "Blubb"; // in func2 wird eine neue Variable (eine Lokale Variable) erstellt, dieser wird der Wert: "Blubb" zugewiesen. an der Globalen Variable x verändert sich allerdings nichts.
        console.log(x); //Es wird "Blubb" wiedergegeben da der befehl innerhalb von func2 ausgeführt wird
    }

    function func3(): void {
        x = "Test"; //func3 verändert den Wert der Globalen Variable x, der neue Wert ist "Test" 
    }
}

//b
//Funktionen sowie Variablen können jeweils als Variable verwendet werden. Sie unterscheiden sich darin, dass eine Funktion in sich allein ein eigner Block ist in dem es nochmal Lokale Variablen geben kann.

namespace Aufgabe5 {
    console.log(multiply(3, 3));
    console.log(max(5, 3));
    func1();
    func2();
    console.log(factorial(0));
    leapyears();

    //a
    function multiply(a: number, b: number): number {
        let x: number = a * b;
        return x;
    }

    //b
    function max(a: number, b: number): number {
        let x: number;
        if (a > b) {
            x = a;
        } else {
            x = b;
        }
        return x;
    }

    //c
    function func1(): void {
        let x: number = 1;
        let e: number = 0;
        while (x < 101) {
            e = e + x;
            x++;
        }
        console.log(e);
    }

    //d
    function func2(): void {
        let random = new Array();
        for (let i: number = 0; i < 10; i++) {
            random[i] = Math.floor((Math.random() * 100) + 1);
        }
        console.log(random);
    }

    //e
    function factorial(a: number): number {
        let ergebnis: number = 1;
        if (a < 1) {
            ergebnis = 1;
        } else {
            for (let i: number = 1; i <= a; i++) {
                ergebnis *= i;
            }
        }
        return ergebnis;
    }

    //f
    function leapyears(): void {

        for (let i: number = 1900; i <= 2021; i++) {
            if (i % 4 === 0) {
                if (i % 100 === 0) {
                    if (i % 400 === 0) {
                        console.log(i)
                    }
                } else {
                    console.log(i);
                }
            }
        }
    }
}

namespace Aufgabe6 {

    func1();
    func2();
    func3();
    func4();
    func5(10,30)
    //a)
    function func1(): void {
        let h: String = "#";
        let s: String = h + "\n";
        for (let i: number = 1; i <= 7; i++) {
            console.log(s);
            h = h + "#";
            s = h + "\n";
        }
    }
    //b
    function func2(): void {
        for (let i: number = 1; i <= 100; i++) {
            if (i % 3 === 0) {
                console.log("Fizz");
            }
            if (i % 5 === 0 && i % 3 !== 0) {
                console.log("Buzz");
            }
            if (i % 5 !== 0 && i % 3 !== 0) {
                console.log(i);
            }
        }
    }

    //c
    function func3(): void {
        for (let i: number = 1; i <= 100; i++) {
            if (i % 3 === 0 && i % 5 !== 0) {
                console.log("Fizz");
            }
            if (i % 5 === 0 && i % 3 !== 0) {
                console.log("Buzz");
            }
            if (i % 5 === 0 && i % 3 === 0) {
                console.log("FizzBuzz");
            }
            if (i % 5 !== 0 && i % 3 !== 0) {
                console.log(i);
            }
        }
    }

    //d
    function func4(): void {
        let brett: String="";
        let d2 : number= 0;
        let d2max: number = 7;
        for (let d: number = 1; d <= 8; d++) {
            if(d%2 ===0){
                d2 = 1;
                d2max = 8;
            }else{
                d2 = 0;
                d2max = 7;
            }
            brett = brett +"\n";
            for (d2; d2 <= d2max; d2++) {
                if(d2%2 ===0){
                    brett = brett + " ";
                }else{
                    brett = brett +"#";
                }
            }
        }
        console.log(brett);
    }

    //e
    function func5(height: number, width: number): void {
        let brett: String="";
        let d2 : number= 0;
        let d2max: number = width;
        for (let d: number = 1; d <= height; d++) {
            if(d%2 ===0){
                d2 = 1;
                d2max = width;
            }else{
                d2 = 0;
                d2max = width-1;
            }
            brett = brett +"\n";
            for (d2; d2 <= d2max; d2++) {
                if(d2%2 ===0){
                    brett = brett + " ";
                }else{
                    brett = brett +"#";
                }
            }
        }
        console.log(brett);
    }

}