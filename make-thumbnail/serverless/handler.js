'use strict';
const Jimp = require('jimp');

async function fn(image) {
  await image
    .cover(250, 250)
    .quality(60)
    .getBufferAsync('image/' + 'png');
}

module.exports.hello = async () => {
  const promises = [];

  const image = await Jimp.read(
    'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
  );

  for (let i = 0; i < 100; i++) {
    promises.push(fn(image));
  }
  await Promise.all(promises);
};
