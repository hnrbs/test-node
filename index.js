const { Hono } = require('hono')
const { serve } = require('@hono/node-server')
const app = new Hono()

app.get('/', (c) => c.text('Hono!'))

console.log("starting server")

serve({
  fetch: app.fetch,
  port: 8080,
})