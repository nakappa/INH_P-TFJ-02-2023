===================================
## RODANDO A API
===================================

1º. Abra um terminal e vá até a pasta do projeto;

2º. Depois, instale as dependências usando o comomando: npm i
    Exemplo:
        C:/Users/.../projeto> npm i

3º. Crie uma instância ou várias instâncias de usuário no db, q se encontra na pasta /backend/data
    Exemplo:
        export const users: Array<User> = [
            {
                id: 0,
                name: 'João das Couves',
                cpf: 29109875077,
                password: '123123',
                tasks: [
                    {
                        id: 0,
                        act: true,
                        description: 'Testando o projeto',
                        title: 'Teste'
                    },
                    {
                        id: 1,
                        act: false,
                        description: 'Testando',
                        title: 'Tarefa'
                    },
                ]
            }
        ]

4º. No terminal de o: comando npx nodemon server.ts, para iniciar a API



===================================
## INICIANDO A APLICAÇÃO
===================================

1º. Abra um terminal e vá até a pasta do projeto;

2º. Depois, instale as dependências usando o comomando: npm i
    Exemplo:
        C:/Users/.../projeto> npm i

3º. Agora volte ao terminal e de comando:

## Para rodar como desenvolvedor
    npm run dev

## Para rodar os teste
    npm run test:unit



===================================
## IDEIA DO PROJETO
===================================

O projeto consiste em simular adição remoção, marcando como concluída as
tarefas e uma pequena simulão de consulta de dados a uma API onde:
    - Só se pode adicionar ou remover tarefas logado
    - No momento que se logo terá acesso a todas as tarefas do usuário