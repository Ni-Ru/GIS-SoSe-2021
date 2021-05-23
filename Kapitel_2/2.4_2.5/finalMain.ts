namespace KlappBuch2_4 {

   
async function sendData(): Promise<void> {
    let url: string = "https://gis-communication.herokuapp.com";
    let query: URLSearchParams = new URLSearchParams(localStorage);
    url = url + "?" + query.toString();
    let response: Promise<Response> = fetch("https://gis-communication.herokuapp.com");
    let answer: Server = await (await response).json();

    if (answer.message) {
        document.getElementById("msg").textContent = answer.message;
        document.getElementById("msg").style.color = "green";
        document.getElementById("msg").style.borderColor = "green";
    }

    if (answer.error) {
        document.getElementById("msg").textContent = answer.error;
        document.getElementById("msg").style.color = "red";
        document.getElementById("msg").style.borderColor = "red";
    }  
} sendData();


    //Die Selbst erstellte Blume wird auf einer Extra Seite dargestellt
        for (let i = 0; i < 3; i++) {
            let url: string = localStorage.getItem("blossomImg");
             if(i==1){
                 url = localStorage.getItem("stemImg");
             }if(i==2){
                url = localStorage.getItem("vaseImg");
             }
            let final: HTMLDivElement = document.createElement("div");
            document.getElementById("final").appendChild(final);

            let finalImg: HTMLImageElement = document.createElement("img");
            finalImg.src = url;
            final.appendChild(finalImg);
        }
    

  
}