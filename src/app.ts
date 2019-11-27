import express from "express";
const app = express();
const port: number = 3000;

const router = express.Router();

import { getSingleQuestion } from "./REST";

declare function require(path: string): any;

router.get("/api/question/:id", getSingleQuestion);

router.get("/", function(req: any, res: any) {
  res.send("index");
});

app.use("/", router);

app.listen(port, () =>
  console.log(`Oiva app back-end listening on port ${port}!`)
);
