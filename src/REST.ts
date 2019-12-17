import { getQuestion } from "./services/question";

const getSingleQuestion = async (req: any, res: any) => {
  const questionId: number = parseInt(req.params.id);
  const options: string | null = req.params.opts;

  const question = await getQuestion(questionId, options);

  res.send(question);
};

export { getSingleQuestion };
