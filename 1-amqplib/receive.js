//Funciona AMQ RECEIVER
// npm install amqplib
// npm express
var express = require('express');
var app = express();
var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (err, conn) => {
    conn.createChannel((ee, ch) => {
        var queue = 'FirstQueue';
        ch.assertQueue(queue, {durable: false});
        console.log(`Waiting for message in ${queue}`);
        ch.consume(queue, (message) => {
            console.log(`Receive ${message.content}`);
        }, {noAck: true} );
    })
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });