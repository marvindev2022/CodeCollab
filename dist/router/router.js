"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controller/user");
const questios_1 = require("../controller/questios");
const notification_1 = require("../controller/notification");
const middleware_1 = require("../middleware/middleware");
const router = (0, express_1.Router)();
// Definição das rotas
router.get("/", (req, res) => {
    res.json("Bem-vindo à API do Fórum de Dúvidas!");
});
// Autenticação e gerenciamento de usuários
router.post("/users/register", user_1.registerUser);
router.post("/users/login", user_1.userLogin);
router.put("/users", middleware_1.validateToken, user_1.userUpdate);
// Publicação de dúvidas
router.post("/questions", middleware_1.validateToken, questios_1.createQuestion);
router.get("/questions", middleware_1.validateToken, questios_1.getAllQuestions);
// Notificações
router.put("/users/notifications/email", middleware_1.validateToken, notification_1.configureEmailNotifications);
// Comentários e interações
router.post("/questions/:questionId/comments", middleware_1.validateToken, questios_1.addCommentToQuestion);
router.put("/questions/:questionId/like", middleware_1.validateToken, questios_1.likeQuestion);
// Pesquisa e filtragem
router.get("/questions/search", middleware_1.validateToken, questios_1.searchQuestions);
router.get("/questions", middleware_1.validateToken, questios_1.filterQuestionsByCategory);
// Administração
router.delete("/questions/:questionId", middleware_1.validateToken, questios_1.removeQuestion);
exports.default = router;
