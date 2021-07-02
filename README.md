# Projeto Final - PPW II | UNESC

Este repositório apresenta o desenvolvimento da avaliação do ProjetoFinal  da disciplina de Programação Web II do Curso de Ciência da Computação – UNESC do semestre 2021.1.

---

## Sobre o projeto

Criar uma API RESTful usando Node.js, a biblioteca Express.js e uma conexão com um banco   de   dados   MongoDB  que seja capaz de  manipular dados   de   maneira  estruturada usando JSON.

A API Permite a manipulação de, pelo menos, dois tipos de recursos diferentes. A estrutura da aplicação é desenvolvida utilizando a arquitetura REST (como visto em aula). Um dos recursos é uma referência para umaAPI externa, desenvolvida por outro colega.

[🚀 Acessar aplicação](https://app-ppw2.herokuapp.com)

---

## EndPoints

        GET https://app-ppw2.herokuapp.com/api/clubes

Exemplo clubes

    {
        "_id": "60ded8bdffcecc596dd1f441",
        "clube": "Real Madrid CF",
        "anoFundacao": 1902,
        "pais": "60de56cbd5a48f27e4841f94",
        "estadio": "60ded960ffcecc596dd1f446",
        "createdAt": "2021-07-02T09:13:33.903Z",
        "updatedAt": "2021-07-02T09:16:50.294Z",
        "__v": 0
    }
---
Passando o ID na URL  para personalizar a requisição.

    // GET https://app-ppw2.herokuapp.com/api/clubes/ID do clube

 ---

    {
        "_id": "60ded8bdffcecc596dd1f441",
        "clube": "Real Madrid CF",
        "anoFundacao": 1902,
        "pais": {
            "_id": "60de56cbd5a48f27e4841f94",
            "nome": "Espanha",
            "continente": "Europa",
            "sigla": "ESP",
            "capital": "Madrid",
            "createdAt": "2021-07-01T23:59:07.148Z",
            "updatedAt": "2021-07-01T23:59:07.148Z",
            "__v": 0
        },
        "estadio": {
            "_id": "60ded960ffcecc596dd1f446",
            "Estadio": "Santiago Bernabéu",
            "capacidade": 81.044,
            "pais": "60de56cbd5a48f27e4841f94",
            "clubeMandante": "60ded8bdffcecc596dd1f441",
            "createdAt": "2021-07-02T09:16:16.119Z",
            "updatedAt": "2021-07-02T09:16:16.119Z",
            "__v": 0
        },
        "createdAt": "2021-07-02T09:13:33.903Z",
        "updatedAt": "2021-07-02T09:16:50.294Z",
        "__v": 0
    }

---

Exemplo estádios

    GET https://app-ppw2.herokuapp.com/api/estadios

---

## 💻 Tecnologias

- [Git](https://git-scm.com/)
- [Node.js](https://www.npmjs.com/package/node-html-parser)
- [VSCode](https://code.visualstudio.com/)
- [Heroku](https://www.heroku.com/)

## 📚 Bibliotecas

- [Express](https://expressjs.com/pt-br/)
- [Axios](https://www.npmjs.com/package/axios)
- [Mongoose](https://mongoosejs.com/)
- [Dotenv](https://www.npmjs.com/package/dotenv)

Desenvolvido por Pedro Ventura em parceria com [Felipe Consta](https://github.com/Felipe-Cjesus).
