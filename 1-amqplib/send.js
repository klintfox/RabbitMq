//Funciona AMQ SENDER
// npm install amqplib
// npm express
var express = require('express');
var app = express();
var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (err, conn) => {
    conn.createChannel((ee, ch) => {
        var queue = 'FirstQueue';
        var message = { type : '2', content: 'HelloRabbitMq'};
        ch.assertQueue(queue, {durable: false});
        ch.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
        console.log('Message was sent');
    })
    setTimeout(() => {
       conn.close();
       process.exit(0); 
    }, 500);
});

app.listen(3001, function () {
  console.log('Example app listening on port 3000!');
});