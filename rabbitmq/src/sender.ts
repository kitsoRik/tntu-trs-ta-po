import * as amqp from 'amqplib/callback_api';

amqp.connect('amqp://localhost', function (error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function (error1, channel) {
    if (error1) {
      throw error1;
    }
    const queue = 'test';

    for (let i = 0; i < 100000; i++) {
      channel.sendToQueue(queue, Buffer.from(`${i}) Hello receiver`));
    }
  });
});
