"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = void 0;
const instance_1 = require("../service/instance");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv").config();
const jwtSecret = process.env.JWT_SECRET;
const validateToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { authorization } = req.headers;
    try {
        if (!authorization) {
            return res.status(400).json({ message: "Please log in" });
        }
        const bearer = authorization.split(" ")[1];
        const decodedToken = jsonwebtoken_1.default.verify(bearer, jwtSecret);
        const { id } = decodedToken;
        const user = yield (0, instance_1.knex)("users").where({ id }).first();
        if (!user) {
            return res.status(401).json({ message: "Unauthorized user" });
        }
        req.user = user;
        next();
    }
    catch (error) {
        res.status(404).json(error);
    }
});
exports.validateToken = validateToken;
