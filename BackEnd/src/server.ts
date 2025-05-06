import fastify from "fastify";

const app = fastify();

app.get('/teste', () => {
  return 'rota de teste'
})

app.get('/categorias', () => {
  return 'lista categorias'
})
app.get('/produtos', () => {
  return 'lista produtos'
})
app.get('/unidades', () => {
  return 'Lista unidades'
})



app.listen({ port : 3333 }).then(() => {
  console.log("Server rodando !")
})