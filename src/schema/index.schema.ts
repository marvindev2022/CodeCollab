import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

// Exemplo de criação de usuário
async function createUser(name: string, email: string) {
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email
      }
    });

    console.log("Usuário criado:", user);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
  }
}

// Exemplo de consulta de usuários
async function getUsers() {
  try {
    const users = await prisma.user.findMany();

    console.log("Usuários:", users);
  } catch (error) {
    console.error("Erro ao obter usuários:", error);
  }
}

// Chame as funções para testar
createUser("John Doe", "john.doe@example.com");
getUsers();
