import {Request, Response, NextFunction} from "express";
import {knex} from "./../service/instance";
import jwt, {
  Secret,
  GetPublicKeyOrSecret,
  JwtPayload
} from "jsonwebtoken";

interface User {
  id: string;
  username: string;
  email: string;
}

interface AuthenticatedRequest extends Request {
  user?: User;
}

require("dotenv").config();

const jwtSecret: Secret | GetPublicKeyOrSecret = process.env.JWT_SECRET as
  | Secret
  | GetPublicKeyOrSecret;

declare module "jsonwebtoken" {
  export function verify(
    token: string,
    secretOrPublicKey: Secret | GetPublicKeyOrSecret,
    callback?: VerifyCallback<JwtPayload>
  ): JwtPayload | void;
}

export const validateToken = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const {authorization} = req.headers;

  try {
    if (!authorization) {
      return res.status(400).json({message: "Please log in"});
    }

    const bearer = authorization.split(" ")[1];

    const decodedToken = jwt.verify(bearer, jwtSecret) as JwtPayload;

    const {id} = decodedToken;

    const user = await knex("users").where({id}).first();

    if (!user) {
      return res.status(401).json({message: "Unauthorized user"});
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(404).json(error);
  }
};
