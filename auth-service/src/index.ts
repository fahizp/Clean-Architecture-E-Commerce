import express, { Application, NextFunction } from "express";
import http from "http";
import connectDB from "./frameworks/database/mongodb/connection";
import expressConfig from "./frameworks/webserver/express";
import routes from "./frameworks/webserver/routes/routes";
import serverConfig from "./frameworks/webserver/server";
const app:Application=express();
const server=http.createServer(app);

connectDB();
expressConfig(app);
routes(app)

app.all('*', (req,res,next:NextFunction) => {
    next(new Error('Not found'));
});

serverConfig(server).startServer()