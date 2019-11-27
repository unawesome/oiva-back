import PgPromise from "pg-promise";
const pgp = PgPromise({});

import credentials from "./credentials.json";

const db = pgp(credentials.pgpPromise);

const getSingleQuestion = function(req: any, res: any, next: any) {
  let questionID: number = parseInt(req.params.id);

  db.one("select * from questions where id = $1", questionID)
    .then(function(data: any) {
      //return `DATA:, ${JSON.stringify(data)} `;
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ONE question"
      });
    })
    .catch(function(err: any) {
      res.send({
        status: "failure",
        err: "NO_DATA"
      });
    });
};

export { getSingleQuestion };
