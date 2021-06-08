import * as Http from "http";
import * as Url from "url";

export namespace P_3_1Server {
    //Server startet -> wird auf der Konsole angezeigt
    console.log("Starting server");
    //Port wird auf 8100 gesetzt
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    //server wird erstellt
    let server: Http.Server = Http.createServer();
    //Dem Server werden Listener hinzugefügt
    //einer um requests zu handlen: Anfragen verarbeitet und den Benutzern eine Antwort zurückschickt
    server.addListener("request", handleRequest);
    //einer zum listenen
    server.addListener("listening", handleListen);
    server.listen(port);

    function handleListen(): void {
        //sobald der server mit dem listening anfängt wird es in der Konsole angezeigt. Ab jetzt hört der Server zu
        console.log("Listening");
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        //erhält der Server Anfragen von Benutzern, gibt er folgendes aus:
        console.log("I hear voices!");

        let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
        if(url.pathname=="/html"){
            _response.setHeader("content-type", "text/html; charset=utf-8"); //Textsprache wird eingestellt
            _response.setHeader("Access-Control-Allow-Origin", "*"); //Jeder kann Anfragen an den Server schicken
            for (let key in url.query){
                console.log(key + ": " + url.query[key]+" ");
                _response.write(key + ": " + url.query[key]+" ");
            }
        }
        if(url.pathname == "/json"){
            _response.setHeader("content-type", "text/json; charset=utf-8"); //Textsprache wird eingestellt
            _response.setHeader("Access-Control-Allow-Origin", "*"); //Jeder kann Anfragen an den Server schicken
            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);
        }
        //Um den query/path auch auf der Konsole des Servers auszugeben:
        console.log(_request.url);
        //Ende der Response:
        _response.end();
    }
}