'use strict';
const Jimp = require('jimp');

module.exports.hello = async () => {
  const myimage = await Jimp.read(
    'https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg',
  );
  const bufferData = await myimage
    .cover(250, 250)
    .quality(60)
    .getBufferAsync('image/' + 'png');

  return bufferData;
};
