import * as amqp from 'amqplib/callback_api';

amqp.connect('amqp://localhost', function (error0, connection) {
  if (error0) {
    throw error0;
  }

  connection.createChannel(function (error1, channel) {
    if (error1) {
      throw error1;
    }
    let i = 0;
    channel.consume(
      'test',
      function (msg: any) {
        console.log(`${i++}) ${msg.content.toString()}`);
      },
      {
        noAck: true,
      },
    );
    console.log('Receiver is ready to accept message');
  });
});
