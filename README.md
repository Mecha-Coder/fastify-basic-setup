# Basic fastify setup

Packages needed
```bash
├── @fastify/static@8.3.0
├── @fastify/swagger-ui@5.2.3
├── @fastify/swagger@9.5.2
├── fastify@5.6.1
├── nodemon@3.1.10
└── uuid@13.0.0
```
---

**Fastify’s JSON Schema**

Contract that defines your input and out output structure
- For input : Validate incoming request before reaching the handler
- For output: Validate respond before sending out (optional, but good practice)

This also generate Swagger documentation automatically if you use the plugin @fastify/swagger

---

**How to run**
```bash
npm install & num run dev
```

**Access the API docs**
Go to browser => http://localhost:5000/docs#/
<img width="867" height="580" alt="image" src="https://github.com/user-attachments/assets/8c9bcd27-579b-48d6-b3bc-68909470a011" />
