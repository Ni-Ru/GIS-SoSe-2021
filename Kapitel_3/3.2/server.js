"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
const Http = require("http");
const Url = require("url");
var P_3_1Server;
(function (P_3_1Server) {
    //Server startet -> wird auf der Konsole angezeigt
    console.log("Starting server");
    //Port wird auf 8100 gesetzt
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    //server wird erstellt
    let server = Http.createServer();
    //Dem Server werden Listener hinzugefügt
    //einer um requests zu handlen: Anfragen verarbeitet und den Benutzern eine Antwort zurückschickt
    server.addListener("request", handleRequest);
    //einer zum listenen
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        //sobald der server mit dem listening anfängt wird es in der Konsole angezeigt. Ab jetzt hört der Server zu
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        //erhält der Server Anfragen von Benutzern, gibt er folgendes aus:
        console.log("I hear voices!");
        //response wird erstellt
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Textsprache wird eingestellt
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Jeder kann Anfragen an den Server schicken
        let url = Url.parse(_request.url, true);
        if (url.pathname == "/html") {
            for (let key in url.query) {
                console.log(key + ": " + url.query[key]);
                _response.write(key + ": " + url.query[key]);
            }
        }
        if (url.pathname == "/json") {
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
        }
        //Um den query/path auch auf der Konsole des Servers auszugeben:
        console.log(_request.url);
        //Ende der Response:
        _response.end();
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=server.js.map