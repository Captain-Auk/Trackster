import { routes } from './routes';

const http = require('http');
const routes = require ('./routes')
const server = http.createServer();

server.requestTimeout(routes);

app.post('/login',(req,res) => {
  const email = req.body.email;
  const password = req.body.password;

  Connection.query(
    'SELECT * FROM users WHERE email = ? AND password = ?',
    [email,password],
     (error,results,fields) => {
      if(error) throw error;
      if(results.length>0)
        res.send('Login successful');
      else
      res.send('Incorrect Emaail or password.');
     }
  );
});

//request listner
server.on('request',(req,res)=>{
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello');
  res.end();
})

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});