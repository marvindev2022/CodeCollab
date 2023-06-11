import {Request, Response, Router} from "express";
import {registerUser, userLogin, userUpdate} from "../controller/user";
import {
  createQuestion,
  getAllQuestions,
  addCommentToQuestion,
  likeQuestion,
  searchQuestions,
  filterQuestionsByCategory,
  removeQuestion
} from "../controller/questios";
import {configureEmailNotifications} from "../controller/notification";
import {validateToken} from "../middleware/middleware";

const router = Router();

router.get("/", (req: Request, res: Response): any => {
  res.json("Bem-vindo à API do Fórum de Dúvidas!");
});

router.post("/users/register", registerUser);
router.post("/users/login", userLogin);
router.put("/users", validateToken, userUpdate);

router.post("/questions", validateToken, createQuestion);
router.get("/questions", validateToken, getAllQuestions);

router.put(
  "/users/notifications/email",
  validateToken,
  configureEmailNotifications
);

router.post(
  "/questions/:questionId/comments",
  validateToken,
  addCommentToQuestion
);
router.put("/questions/:questionId/like", validateToken, likeQuestion);

router.get("/questions/search", validateToken, searchQuestions);
router.get("/questions", validateToken, filterQuestionsByCategory);

router.delete("/questions/:questionId", validateToken, removeQuestion);

export default router;
