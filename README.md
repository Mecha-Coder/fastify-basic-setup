## About
Basic fastify setup

Packages installed
```bach
├── @fastify/static@8.3.0
├── @fastify/swagger-ui@5.2.3
├── @fastify/swagger@9.5.2
├── fastify@5.6.1
├── nodemon@3.1.10
└── uuid@13.0.0
```

**Fastify’s JSON Schema**
Contract that defines your input and out output structure
- For input : Validate incoming request before reaching the handler
- For output: Validate respond before sending out (optional, but good practice)

This also generate Swagger documentation automatically if you use the plugin @fastify/swagger
