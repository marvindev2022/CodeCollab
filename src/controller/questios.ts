import {Request, Response} from "express";

export const createQuestion = (req: Request, res: Response): any => {
  return res.status(201).json("ok");
};

export const getAllQuestions = (req: Request, res: Response): any => {
  return res.status(201).json("ok");
};

export const addCommentToQuestion = (req: Request, res: Response): any => {
  return res.status(201).json("ok");
};

export const likeQuestion = (req: Request, res: Response): any => {
  return res.status(201).json("ok");
};

export const searchQuestions = (req: Request, res: Response): any => {
  return res.status(201).json("ok");
};

export const filterQuestionsByCategory = (req: Request, res: Response): any => {
  return res.status(201).json("ok");
};

export const removeQuestion = (req: Request, res: Response): any => {
  return res.status(201).json("ok");
};
