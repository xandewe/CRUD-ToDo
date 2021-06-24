# API TO DO

Essa é minha primeira api em NodeJs, feita para cadastrar usuários, onde cada usuário poderá criar suas tasks, para organizar melhor seu dia.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Consulte **Implantação** para saber como implantar o projeto.

### 📋 Pré-requisitos

Para utilizar a API set as variáveis de ambiente no modelo .env.example e instale as dependências do projeto.

```
SECRET=palavrasecreta

host=localhost
database=database
user=my_user
password=1234
```

## ⚙️ Rotas

### registrando usuário:

```
ENDPOINT: /register/user

REQUEST:

{
	"name": "Jonas",
	"email": "jonas@example.com",
	"password": "123123"
}

RESPONSE:

{
  "data": {
    "name": "Jonas",
    "email": "jonas@example.com"
  }
}
```

### login de usuário:

#### obs: utilize o token do response para poder ter acesso as rotas autenticadas.

```
ENDPOINT: /login

REQUEST:

{
	"email": "jonas@example.com",
	"password": "123123"
}

RESPONSE:

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjI0NTU2ODY5fQ.DarLvY8_0pFfvs16Mj3vSN9lCcrhcl5bgEHBaMcthcg"
}
```

### registrando task:

#### obs: utilize o token do login para autenticar essa rota, caso não coloque o token, irá gerar um erro.

```
ENDPOINT: /register/task

REQUEST:

{
	"title": "Curso",
	"description": "TCC",
	"priority": 1,
	"status": "to do"
}

HEADER:

Authorization: token

RESPONSE:

{
  "data": {
    "id": 1
    "title": "Curso",
    "description": "TCC",
    "priority": 1,
    "status": "to do"
  }
}
```

### acessando tasks:

#### obs: utilize o token do login para autenticar essa rota, caso não coloque o token, irá gerar um erro.

```
ENDPOINT: /tasks

HEADER:

Authorization: token

RESPONSE:

{
  "data": [
    {
      "id": 1,
      "title": "Curso",
      "description": "TCC",
      "priority": 1,
      "status": "to do",
    },
    {
      "id": 2,
      "title": "Cozinha",
      "description": "Lavar louça",
      "priority": 3,
      "status": "to do"
    }
  ]
}
```

### acessando task pelo id:

#### obs: utilize o token do login para autenticar essa rota, caso não coloque o token, irá gerar um erro. Não se esqueça de passar o id da task na url

```
ENDPOINT: /task/1

HEADER:

Authorization: token

RESPONSE:

{
  "data": {
    "id": 1,
    "title": "Curso",
    "description": "TCC",
    "priority": 1,
    "status": "to do"
  }
}
```

### atualizando task:

#### obs: utilize o token do login para autenticar essa rota, caso não coloque o token, irá gerar um erro. Não se esqueça de passar o id da task na url

```
ENDPOINT: /register/task/1

REQUEST:

{

	"priority": 3,
	"status": "finish"
}

HEADER:

Authorization: token

RESPONSE:

{
  "data": {
    "id": 1,
    "title": "Curso",
    "description": "TCC",
    "priority": 3,
    "status": "finish"
  }
}
```

### deletando task:

#### obs: utilize o token do login para autenticar essa rota, caso não coloque o token, irá gerar um erro. Não se esqueça de passar o id da task na url

```
ENDPOINT: /register/task/1

HEADER:

Authorization: token

RESPONSE:

status 204
```

## 🛠️ Construído com

- ### expressJs - O framework web usado
- ### sequelizer - ORM utilizado para lidar com a interação com o DB
- ### jsonwebtoken - ferramenta para gerenciar autenticação
- ### postgresql - Banco de dados

---

⌨️ com ❤️ por [Alexandre Alves](https://github.com/xandewe) 😊
