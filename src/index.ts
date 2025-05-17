import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import Routes from "./routes/index";

dotenv.config();
const app = express();

app.use(express.json());

app.use(cors());
app.options("*", cors());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// parse json request body
app.use(express.json());

app.use(bodyParser.json());

// Middleware to add db to req
app.use((req: Request, res: Response, next: NextFunction) => {
    (req as any);
    next();
});

app.use("/api/v1", Routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));