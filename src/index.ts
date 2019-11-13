import * as http from "http";

import app from "./app";
import { normalizePort, onError, onListening } from "./utils/utils";

const server = http.createServer(app);
const port = normalizePort(process.env.PORT || 3000);

server.listen(port);
server.on("error", onError(server));
server.on("listening", onListening(server));

// app.listen(3000, () => {
// 	console.log("Servidor rodando na porta", 3000);
// });