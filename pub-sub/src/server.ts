import * as redis from 'redis';

const publisher = redis.createClient();

for (let i = 0; i < 100000; i++) {
  publisher.publish('notification', `${i}) Hello client`, function (err, data) {
    console.log(err, data);
  });
}
