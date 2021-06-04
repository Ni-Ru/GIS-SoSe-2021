namespace Aufgabe3_2{
    let submissionHTML: HTMLButtonElement =<HTMLButtonElement> document.getElementById("subHTML");
    submissionHTML.addEventListener("click", serverHTML);
    let submissionJSON: HTMLButtonElement =<HTMLButtonElement> document.getElementById("subJSON");
    submissionJSON.addEventListener("click", serverJSON);

    async function serverHTML(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2021nicrubner.herokuapp.com"
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/html" + "?" + query.toString();
        let serverResponse: Response = await fetch(url);
        let answer: string = await serverResponse.text();
        console.log(answer);
        document.getElementById("answer").innerHTML=answer;
    }

    async function serverJSON(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2021nicrubner.herokuapp.com"
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/json" + "?" + query.toString();
        let serverResponse: Response = await fetch(url);
        let answer: string = await serverResponse.text();
        console.log(answer);
        document.getElementById("answer").innerHTML=answer;
    }
}
