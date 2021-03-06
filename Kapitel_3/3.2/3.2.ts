namespace Aufgabe3_2{
    let jsonOrHtml: boolean = true;

    let submissionHTML: HTMLButtonElement =<HTMLButtonElement> document.getElementById("subHTML");
    submissionHTML.addEventListener("click", function(){
        jsonOrHtml=true;
        server();
    });
    let submissionJSON: HTMLButtonElement =<HTMLButtonElement> document.getElementById("subJSON");
    submissionJSON.addEventListener("click", function(){
        jsonOrHtml=false;
        server();
    });

    async function server(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2021nicrubner.herokuapp.com"
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        if(jsonOrHtml==true){
            url = url + "/html" + "?" + query.toString();
        }
        if(jsonOrHtml==false){
            url = url + "/json" + "?" + query.toString();
        }
        
        let serverResponse: Response = await fetch(url);
        let answerJSON: JSON;
        let answerHTML: string;
        if(jsonOrHtml==true){
            answerHTML = await serverResponse.text();
            console.log(answerHTML);
            document.getElementById("answer").innerHTML= answerHTML;
        }
        if(jsonOrHtml==false){
            answerJSON = await serverResponse.json();
            document.getElementById("answer").innerHTML="KONSOLE";
            console.log(answerJSON);
        }
    }

}
