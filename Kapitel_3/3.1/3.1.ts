

    let submission: HTMLButtonElement =<HTMLButtonElement> document.getElementById("sub");
    submission.addEventListener("click", server);

    async function server(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2021nicrubner.herokuapp.com"
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        let serverResponse: Response = await fetch(url);
        let answer: string = await serverResponse.text();
        console.log(answer);
        document.getElementById("answer").innerHTML=answer;
    }

