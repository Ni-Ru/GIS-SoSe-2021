"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
const Http = require("http");
var P_3_1Server;
(function (P_3_1Server) {
    //Server startet
    console.log("Starting server");
    //Port wird auf 8100 gesetzt
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    //server wird erstellt
    let server = Http.createServer();
    //Dem Server werden Listener hinzugefügt
    //einer um requests zu handlen
    server.addListener("request", handleRequest);
    //einer zum listenen
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        //sobal der server mit dem listening anfängt wird es in der Konsole angezeigt
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        //erhält der Server Requests gibt er folgendes aus:
        console.log("I hear voices!");
        //response wird erstellt
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //Inhalt der Response:
        _response.write(_request.url);
        //Um den query/path auch auf der Konsole des Servers auszugeben:
        console.log(_request.url);
        //Ende der Response:
        _response.end();
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=server.js.map