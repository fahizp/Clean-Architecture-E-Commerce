import express, { Application, NextFunction } from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import mongoSanitize from "express-mongo-sanitize";
import helmet from "helmet";


const expressConfig = (app: Application) => {
    app.use(morgan("dev"));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(helmet({ xssFilter: true }));
    app.use(mongoSanitize());
  };
  
  export default expressConfig;