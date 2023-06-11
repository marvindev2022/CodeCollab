import {Request, Response} from "express";

export const configureEmailNotifications = (
  req: Request,
  res: Response
): any => {
  return res.status(404).json("teste");
};
