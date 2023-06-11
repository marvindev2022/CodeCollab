# API do Fórum de Dúvidas

Bem-vindo à API do Fórum de Dúvidas! Esta API permite o registro de usuários, publicação de dúvidas, interação com as postagens e notificações. A seguir, você encontrará uma lista de rotas disponíveis com exemplos de requisições e respostas.

## Rotas

Autenticação e gerenciamento de usuários
Registrar um novo usuário

**POST /api/users/register**

Requisição:

```


{
  "name": "John Doe",
  "email": "<john.doe@example.com>",
  "password": "secretpassword"
}

```

Resposta:

 ```
{
  "success": true,
  "message": "Usuário registrado com sucesso!"
}
```

Login de usuário

**POST /api/users/login**

Requisição:

 ```
{
  "email": "<john.doe@example.com>",
  "password": "secretpassword"
}

```

Resposta:

 ```
{
  "success": true,
  "message": "Login bem-sucedido!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

Publicação de dúvidas
Criar uma nova postagem de dúvida

**POST /api/questions**

Requisição:

 ```
{
  "title": "Como resolver um problema de recursão?",
  "content": "Estou tentando implementar uma função recursiva, mas estou tendo dificuldades. Alguém pode me ajudar?",
  "category": "Programação",
  "tags": ["recursão", "função", "ajuda"]
}

```

Resposta:

 ```
{
  "success": true,
  "message": "Postagem de dúvida criada com sucesso!"
}
```

Obter todas as postagens de dúvida

**GET /api/questions**

Resposta:

 ```
{
  "success": true,
  "questions": [
    {
      "id": "1",
      "title": "Como resolver um problema de recursão?",
      "content": "Estou tentando implementar uma função recursiva, mas estou tendo dificuldades. Alguém pode me ajudar?",
      "category": "Programação",
      "tags": ["recursão", "função", "ajuda"],
      "createdAt": "2023-06-10T14:30:00Z",
      "updatedAt": "2023-06-10T14:30:00Z"
    },
    ...
  ]
}
 ```

Notificações
Configurar notificações por email

PUT /api/users/notifications/email

Requisição:

 ```
{
  "enable": true
}
```

Resposta:

 ```
{
  "success": true,
  "message": "Notificações por email configuradas com sucesso!"
}

```

Enviar notificação de nova postagem
Quando uma nova postagem de dúvida é feita, os usuários recebem uma notificação por email.

Comentários e interações

Adicionar um comentário a uma postagem de dúvida

**POST /api/questions/:questionId/comments**

Requisição:

 ```
{
  "content": "Acredito que você possa resolver esse problema utilizando uma abordagem de divisão e conquista. Posso te ajudar com mais detalhes se quiser."
}
```

Resposta:

 ```
{
  "success": true,
  "message": "Comentário adicionado com sucesso!"
}
```

Curtir uma postagem de dúvida

**PUT /api/questions/:questionId/like**

Resposta:

 ```
{
  "success": true,
  "message": "Postagem curtida com sucesso!"
}
```

Pesquisa e filtragem
Pesquisar postagens de dúvida

**GET /api/questions/search?query=recursão**

Resposta:

 ```
{
  "success": true,
  "questions": [
    {
      "id": "1",
      "title": "Como resolver um problema de recursão?",
      "content": "Estou tentando implementar uma função recursiva, mas estou tendo dificuldades. Alguém pode me ajudar?",
      "category": "Programação",
      "tags": ["recursão", "função", "ajuda"],
      "createdAt": "2023-06-10T14:30:00Z",
      "updatedAt": "2023-06-10T14:30:00Z"
    },
    ...
  ]
}
```

Filtrar postagens de dúvida por categoria

**GET /api/questions?category=Programação**
Resposta:

 ```
{
  "success": true,
  "questions": [
    {
      "id": "1",
      "title": "Como resolver um problema de recursão?",
      "content": "Estou tentando implementar uma função recursiva, mas estou tendo dificuldades. Alguém pode me ajudar?",
      "category": "Programação",
      "tags": ["recursão", "função", "ajuda"],
      "createdAt": "2023-06-10T14:30:00Z",
      "updatedAt": "2023-06-10T14:30:00Z"
    },
    ...
  ]
}
```

Administração
Remover uma postagem de dúvida

**DELETE /api/questions/:questionId**

Resposta:

 ```
{
  "success": true,
  "message": "Postagem removida com sucesso!" 
}
```

# Documentação da API com Swagger
Esta API é documentada usando Swagger, uma ferramenta poderosa para projetar, criar e documentar APIs. A documentação detalhada da API pode ser encontrada no Swagger UI.

Para visualizar a documentação da API:

Certifique-se de que o servidor esteja em execução.

Abra o navegador e navegue para <http://localhost:4000/api-docs>.

Você será apresentado ao Swagger UI, onde poderá visualizar todas as rotas, parâmetros, solicitações e respostas.

Para interagir com a API no Swagger UI, clique em uma rota para expandi-la, clique no método desejado (por exemplo, POST), preencha os parâmetros e o corpo da solicitação, se aplicável, e clique no botão "Try it out" para enviar a solicitação.

Após enviar a solicitação, você verá a resposta retornada pela API, incluindo os códigos de status e os objetos de resposta correspondentes.

A documentação do Swagger oferece uma maneira fácil de explorar e testar as rotas da API, facilitando o desenvolvimento e a integração com a API.

Certifique-se de substituir <http://localhost:4000> pelo URL correto do seu servidor, caso esteja usando um servidor diferente.
