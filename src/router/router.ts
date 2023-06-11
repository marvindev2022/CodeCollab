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

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Registrar um novo usuário
 *     responses:
 *       200:
 *         description: Usuário registrado com sucesso
 */
router.post("/users/register", registerUser);

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Login de usuário
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 */
router.post("/users/login", userLogin);

/**
 * @swagger
 * /api/questions:
 *   post:
 *     summary: Criar uma nova postagem de dúvida
 *     responses:
 *       200:
 *         description: Postagem de dúvida criada com sucesso
 */
router.post("/questions", validateToken, createQuestion);

/**
 * @swagger
 * /api/questions:
 *   get:
 *     summary: Obter todas as postagens de dúvida
 *     responses:
 *       200:
 *         description: Lista de postagens de dúvida obtida com sucesso
 */
router.get("/questions", validateToken, getAllQuestions);

/**
 * @swagger
 * /api/questions/{questionId}/comments:
 *   post:
 *     summary: Adicionar um comentário a uma postagem de dúvida
 *     parameters:
 *       - in: path
 *         name: questionId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da postagem de dúvida
 *     responses:
 *       200:
 *         description: Comentário adicionado com sucesso
 */
router.post(
  "/questions/:questionId/comments",
  validateToken,
  addCommentToQuestion
);

/**
 * @swagger
 * /api/questions/{questionId}/like:
 *   put:
 *     summary: Adicionar um like a uma postagem de dúvida
 *     parameters:
 *       - in: path
 *         name: questionId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da postagem de dúvida
 *     responses:
 *       200:
 *         description: Like adicionado com sucesso
 */
router.put("/questions/:questionId/like", validateToken, likeQuestion);

/**
 * @swagger
 * /api/users/notifications/email:
 *   put:
 *     summary: Configurar notificações por e-mail para o usuário
 *     responses:
 *       200:
 *         description: Notificações por e-mail configuradas com sucesso
 */
router.put(
  "/users/notifications/email",
  validateToken,
  configureEmailNotifications
);

/**
 * @swagger
 * /api/questions/{questionId}:
 *   delete:
 *     summary: Deletar uma postagem de dúvida
 *     parameters:
 *       - in: path
/**
 *         name: questionId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da postagem de dúvida
 *     responses:
 *       200:
 *         description: Postagem de dúvida removida com sucesso
 */
router.delete("/questions/:questionId", validateToken, removeQuestion);

/**
 * @swagger
 * /api/users:
 *   put:
 *     summary: Atualizar informações do usuário
 *     responses:
 *       200:
 *         description: Informações do usuário atualizadas com sucesso
 */
router.put("/users", validateToken, userUpdate);

export default router;
