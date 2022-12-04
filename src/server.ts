import * as express from "express";
import { NextFunction, Request, Response } from "express";
import { json, urlencoded } from "body-parser";
import * as cors from "cors";
import * as morgan from "morgan";
import "dotenv/config";
import config from "./config";
import userRouter from "./resources/user/user.router";
console.log("helo");
const app = express();
// const router = express.Router();

function middleware(req: Request, res: Response, next: NextFunction) {
  console.log("middleware");
  req.body.custom = 100;
  next();
}

app.get("/", middleware, middleware, (req, res) => {
  console.log(req.body);
  res.send("hello word" + req.body.custom);
});

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/user", userRouter);

const start = async () => {
  try {
    app.listen(process.env.PORT || config.port, () => {
      const port = process.env.PORT || config.port;
      console.log(`REST API on http://localhost:${port}/api`);
    });
  } catch (e) {
    console.error(e);
  }
};

export default start;
