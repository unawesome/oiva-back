import express from "express";
var cors = require("cors");
const app = express();
const port: number = 3000;

const router = express.Router();

app.use(cors());

import { getSingleQuestion } from "./REST";

declare function require(path: string): any;

router.get(
  "/api/question/:id/:opts*?",
  cors({ origin: true }),
  getSingleQuestion
);

router.get("/", function(req: any, res: any) {
  res.send("index");
});

app.use("/", router);

app.listen(port, () =>
  console.log(`Oiva app back-end listening on port ${port}!`)
);
