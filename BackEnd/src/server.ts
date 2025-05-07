import fastify from "fastify";

const app = fastify();

app.get('/teste', () => {
  return 'Rota de Teste'
})
app.get('/categorias', () => {
  return 'Lista Categorias'
})
app.get('/produtos', () => {
  return 'Lista Produtos'
})
app.get('/unidades', () => {
  return 'Lista Unidades'
})

app.listen({ port : 3333 }).then(() => {
  console.log("Server rodando !")
})