import fastify from 'fastify';
import itemRoute from './routes/items.js';

const app = fastify({ logger: true });
const PORT = 5000;

// Register plugin - itemRoute
app.register(itemRoute, { prefix: "/items" })

// Index route
app.get("/", async (req, res) => {
  res.code(211).send({ hello: 'world' });
})

// Start server
app.listen({ port: PORT }, (err) => {
  if (err) throw err
  console.log(`Server running at http://localhost:${PORT}`);
  })