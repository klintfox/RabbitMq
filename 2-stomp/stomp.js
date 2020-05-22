//Funciona STOMP 
// npm install stomp-client
var Stomp = require("stomp-client");
var QUEUE = "/queue/stompQueue";
var stompClient = new Stomp("127.0.0.1", 61613, "guest", "guest");

// client.connect(function(sessionId) {
//     client.subscribe(destination, function(body, headers) {
//       console.log('This is the body of a message on the subscribed queue:', body);
//     });

//     client.publish(QUEUE, 'Oh herrow');
// });

stompClient.connect(function () {
  stompClient.subscribe(QUEUE, function (data, headers) {
    console.log("GOT A MESSAGE", data, headers);
  });

  setTimeout(function () {
    stompClient.publish(QUEUE, "oh herrow!");
  }, 1000);
  setTimeout(function () {
    stompClient.publish(QUEUE, "wonely...");
  }, 2000);
  setTimeout(function(){
    stompClient.publish(QUEUE, 'so wonely...');
  }, 3000);
  setTimeout(function(){
    stompClient.publish(QUEUE, 'so wonely, so wonely and bwue!');
  }, 4000);
  setTimeout(function () {
    stompClient.disconnect(function () {
      console.log("DISCONNECTED");
    });
  }, 5000);
});
