import express from "express";
import cors from "cors";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import router from "./router/router";
import {config }from "./config";

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API do Fórum de Dúvidas",
      version: "1.0.0",
      description:
        "Bem-vindo à API do Fórum de Dúvidas! Esta API permite o registro de usuários, publicação de dúvidas, interação com as postagens e notificações."
    },
    servers: [
      {
        url: "http://localhost:4000"
      }
    ],
    paths: config 
  },
  apis: ["./router/router.ts"]
};



const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
