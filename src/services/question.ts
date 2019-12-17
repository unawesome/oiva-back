import PgPromise from "pg-promise";
const pgp = PgPromise({});

const QueryResultError = pgp.errors.QueryResultError;
const qrec = pgp.errors.queryResultErrorCode;

import credentials from "../credentials.json";

const db = pgp(credentials.pgpPromise);

interface singleQuestion {
  question_id: number;
  question_content: string;
  question_letter: string;
  question_subset: number;
}

const apiQueryOptions: Array<string> = ["set", "subset"];

const getQuestionSubset = (
  questionSubset: number,
  optionsArr: Array<string | null>,
  resObj: Object
) =>
  db
    .one(
      "select id as subset_id, content as subset_content, number as subset_number, question_set from question_subsets where id = $1",
      questionSubset
    )
    .then((data: any) => {
      resObj["api"]["subset"] = data;

      if (optionsArr.includes("set")) {
        return getQuestionSet(data.question_set, resObj);
      }

      //return resObj;
    })
    .catch((error: any) => {
      if (error.code === qrec.noData) {
        return {
          status: "fail",
          err: "no_results"
        };
      } else {
        return {
          status: "fail",
          err: "unkonwn_error"
        };
      }
    });

const getQuestionSet = (questionSet: number, resObj: Object) =>
  db
    .one(
      "select id as set_id, content as set_content, letter as set_letter from question_sets where id = $1",
      questionSet
    )
    .then((data: Object) => {
      resObj["api"]["set"] = data;

      console.log(resObj);

      return resObj;
    })
    .catch((error: any) => {
      if (error.code === qrec.noData) {
        return {
          status: "fail",
          err: "no_results"
        };
      } else {
        return {
          status: "fail",
          err: "unkonwn_error"
        };
      }
    });

const getQuestion = (questionId: number, options: string) => {
  const optionsArr: Array<string | null> =
    typeof options != "undefined" ? options.split(",") : null;

  const resObj: Object = { api: {} };

  return db
    .one(
      "select id as question_id, content as question_content, letter as question_letter, question_subset from questions where id = $1",
      questionId
    )
    .then((data: any) => {
      resObj["api"]["question"] = data;

      if (optionsArr != null && optionsArr.includes("subset")) {
        return getQuestionSubset(questionId, optionsArr, resObj);
      }
      return resObj;
    })
    .catch((error: any) => {
      if (error.code === qrec.noData) {
        return {
          status: "fail",
          err: "no_results"
        };
      } else {
        return {
          status: "fail",
          err: "unkonwn_error"
        };
      }
    });
};

export { getQuestion };
