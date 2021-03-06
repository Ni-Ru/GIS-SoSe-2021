namespace a3_4 {
    let path: string;
    let answer: HTMLDivElement = <HTMLDivElement>document.getElementById("answer");
    document.getElementById("send").addEventListener("click", function(): void {
        path = "/add";
        handleSubmit(); 
    });
    document.getElementById("receive").addEventListener("click", function(): void {
        path = "/retrive";
        handleSubmit();
    });

    async function handleSubmit(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: RequestInfo = "https://gissose2021nicrubner.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += path + "?" + query.toString();  
        let response: Response = await fetch(url, { method: "get"});
        let responseText: string = await response.text();

        if (path == "/retrive")  {
            answer.innerHTML = "";
            console.log("Retrieved JSON", JSON.parse(responseText));
            let responseJSON: CollectionData[] = JSON.parse(responseText);

            for (let i: number = 0; i < responseJSON.length; i++) {
                let temp: HTMLDivElement = <HTMLDivElement>document.createElement("div");
                temp.className = "databaseEntry";
                temp.innerHTML = "id: " + responseJSON[i]._id + 
                                 "<br> firstname: " + responseJSON[i].vorname +
                                 "<br> lastname: " + responseJSON[i].nachname +
                                 "<br> email: " + responseJSON[i].email + "<br>";

                let tempDelete: HTMLButtonElement = <HTMLButtonElement> document.createElement("button");
                tempDelete.className = "deleteBtn";
                tempDelete.addEventListener("click", async function(): Promise<void> {
                    await fetch("https://gissose2021nicrubner.herokuapp.com/delete?_id=" + responseJSON[i]._id, {method: "get"}); //todo change to heroku
                    temp.innerHTML = "deleted";
                } );

                tempDelete.appendChild(document.createTextNode("Delete"));
                temp.appendChild(tempDelete);
                answer.appendChild(temp);
            }
        } else if (path == "/add") {
            console.log(responseText);
            showResponse(responseText);
            let form: HTMLFormElement = <HTMLFormElement>document.getElementById("forms");
            form.reset();
        }    
    }

    function showResponse(text: string): void {
        answer.innerHTML = text;
    }

    interface FormElements {
        vorname: string;
        nachname: string;
        email: string;
    }

    interface CollectionData extends FormElements {
        _id: string;
    }
}