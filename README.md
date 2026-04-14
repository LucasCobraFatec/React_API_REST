# Typescript-POO API & Frontend

Este projeto é uma aplicação completa com backend em Node.js (TypeScript) e frontend em React, demonstrando conceitos de Estruturas Lineares (Lista, Pilha e Fila) com operações CRUD e estatísticas.

## Funcionalidades

- **Backend**
	- API RESTful para manipulação de Lista, Pilha e Fila
	- Operações: adicionar, remover, listar, buscar elementos
	- Rota de estatísticas para análise das estruturas
	- Implementado em TypeScript
	- Dockerfile para fácil deploy

- **Frontend**
	- Interface moderna em React
	- Visualização e manipulação das estruturas
	- Consumo das rotas da API
	- Separação por páginas: Lista, Pilha, Fila
	- Dockerfile para fácil deploy

## Como executar

### Usando Docker Compose (recomendado)

```bash
docker-compose up --build
```
Acesse o frontend em: http://localhost:5173
Acesse o backend em: http://localhost:3000

### Manualmente

#### Backend
```bash
cd backend
npm install
npm run dev
```

#### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Estrutura do Projeto

```
backend/
	src/
		controllers/
		models/
		routes/
		server.ts
	package.json
	tsconfig.json
frontend/
	src/
		components/
		pages/
		services/
		App.tsx
	package.json
	tsconfig.json
docker-compose.yml
```

## Tecnologias
- Node.js
- TypeScript
- Express
- React
- Vite
- Docker

## Autor
- Lucas Cobra (github.com/LucasCobraFatec)

---

Sinta-se à vontade para contribuir ou abrir issues!
# React_API_REST
