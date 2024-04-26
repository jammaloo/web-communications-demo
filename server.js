import { WebSocketServer } from 'ws';
import express from 'express';

const wss = new WebSocketServer({ port: 8181 });

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something');
});

const app = express()
const port = 8080

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(express.static('public'))