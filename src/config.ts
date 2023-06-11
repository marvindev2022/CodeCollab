export const config =  {
      "/api/users/register": {
        post: {
          summary: "Registrar um novo usuário",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    name: {
                      type: "string"
                    },
                    email: {
                      type: "string"
                    },
                    password: {
                      type: "string"
                    }
                  }
                }
              }
            }
          },
          responses: {
            "200": {
              description: "Usuário registrado com sucesso!",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      success: {
                        type: "boolean",
                        example: true
                      },
                      message: {
                        type: "string",
                        example: "Usuário registrado com sucesso!"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/users/login": {
        post: {
          summary: "Login de usuário",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    email: {
                      type: "string"
                    },
                    password: {
                      type: "string"
                    }
                  }
                }
              }
            }
          },
          responses: {
            "200": {
              description: "Login bem-sucedido!",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      success: {
                        type: "boolean",
                        example: true
                      },
                      message: {
                        type: "string",
                        example: "Login bem-sucedido!"
                      },
                      token: {
                        type: "string",
                        example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/questions": {
        post: {
          summary: "Criar uma nova postagem de dúvida",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    title: {
                      type: "string"
                    },
                    content: {
                      type: "string"
                    },
                    category: {
                      type: "string"
                    },
                    tags: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  }
                }
              }
            }
          },
          responses: {
            "200": {
              description: "Postagem de dúvida criada com sucesso!",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      success: {
                        type: "boolean",
                        example: true
                      },
                      message: {
                        type: "string",
                        example: "Postagem de dúvida criada com sucesso!"
                      }
                    }
                  }
                }
              }
            }
          }
        },
        get: {
          summary: "Obter todas as postagens de dúvida",
          responses: {
            "200": {
              description: "Lista de todas as postagens de dúvida",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      success: {
                        type: "boolean",
                        example: true
                      },
                      questions: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            id: {
                              type: "string"
                            },
                            title: {
                              type: "string"
                            },
                            content: {
                              type: "string"
                            },
                            category: {
                              type: "string"
                            },
                            tags: {
                              type: "array",
                              items: {
                                type: "string"
                              }
                            },
                            createdAt: {
                              type: "string"
                            },
                            updatedAt: {
                              type: "string"
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/questions/{questionId}/comments": {
        post: {
          summary: "Adicionar um comentário a uma postagem de dúvida",
          parameters: [
            {
              in: "path",
              name: "questionId",
              schema: {
                type: "string"
              },
              required: true,
              description: "ID da postagem de dúvida"
            }
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    content: {
                      type: "string"
                    }
                  }
                }
              }
            }
          },
          responses: {
            "200": {
              description: "Comentário adicionado com sucesso!",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      success: {
                        type: "boolean",
                        example: true
                      },
                      message: {
                        type: "string",
                        example: "Comentário adicionado com sucesso!"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/notifications": {
        get: {
          summary: "Obter todas as notificações",
          responses: {
            "200": {
              description: "Lista de todas as notificações",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      success: {
                        type: "boolean",
                        example: true
                      },
                      notifications: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            id: {
                              type: "string"
                            },
                            content: {
                              type: "string"
                            },
                            createdAt: {
                              type: "string"
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  