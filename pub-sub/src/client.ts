import * as redis from 'redis';

const subscriber = redis.createClient();

let i = 0;

subscriber.on('message', function (channel, message) {
  console.log(`${i++})`, 'Incoming message:', message);

  return 123;
});
subscriber.subscribe('notification');

console.log('Client is ready to accept messages');
