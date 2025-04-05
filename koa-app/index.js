const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  ctx.body = 'Hello from Koa';
});

app.listen(3000);
