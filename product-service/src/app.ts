import express, { Request, Response } from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import {  NotFoundError } from "@ecom-microservie/common/build";
import { routes } from "./routes";
import depentencies from "./config/depentencies";
import ErrorHandler from "./libs/utils/ErrorHandler";

const app = express();

app.set("trust proxy", true);
app.use(json());
app.use(cookieSession({ signed: false }));
app.use("/api", routes(depentencies));

app.all("*", async (req: Request, res: Response) => {
  throw new NotFoundError();
});

app.use(ErrorHandler);

export { app };
