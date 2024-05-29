import express from 'express';
import http from 'node:http';
import { Server as WebSocketServer } from 'socket.io';
import { logger } from './utils/index.js';
import sockets from './sockets.js';
import './config/db.js';  // Configura la conexión a la base de datos
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import router from "./routes/index.routes.js";
import "./config/passport.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const server = http.createServer(app);
const io = new WebSocketServer(server);

// Configuracion de sockets
sockets(io);
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("public"));
app.use(compression());
app.use(cookieParser());
app.use(router);

// View Engine
app.set("view engine", "ejs");
app.set("views", "./public/views");

export default app;

server.listen(PORT, () => {
  logger.info(`🚀 Server running on http://localhost:${PORT}...`);
});
