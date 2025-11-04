import fastify, { PORT } from "./config.js"
import items_route from './routes/routes.js';

//===========================================================
// Routes

fastify.register(items_route, { prefix: "/items" })

fastify.get("/", (req, res) => {
  res.send({ index: 'Basic setup for Fastify' });
})

//===========================================================
// Start server

await fastify.ready();
fastify.listen({ port: PORT }, (err) => {
  if (err) throw err
  console.log(`Server running at http://localhost:${PORT}`);
})

