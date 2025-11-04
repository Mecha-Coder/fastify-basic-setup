import Fastify from 'fastify';
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";

const fastify = Fastify({ logger: true });
const PORT = 5000;

// ================================================
// API documentation

fastify.register(swagger, {
  swagger: {
    info: { title: "Fastify API"},
  },
});

fastify.register(swaggerUi, {
  routePrefix: "/docs",
  uiConfig: {
    docExpansion: 'list', // full
    deepLinking: true
  },
});

// ================================================
// Dummy data

let items = [
    {id: "1", name: "Item One"},
    {id: "2", name: "Item Two"},
    {id: "3", name: "Item Three"},
]

// ================================================
// Export

export {fastify as default, PORT, items};