const http=require('http');
const expess=require('express');
const app=expess();

app.use(expess.static('.'));

http.createServer(app).listen(3000, function () {
    console.log('listening 3000 port');
  });