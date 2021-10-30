import * as jimp from 'jimp';

let i = 0;

async function optimize() {
  const image = await jimp.read(
    'https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg',
  );
  await image
    .cover(250, 250)
    .quality(60)
    .getBufferAsync('image/' + 'png');

  console.log(`Finished ${++i} optimization`);
}

async function main() {
  console.time('f');
  const promises: Promise<void>[] = [];

  for (let i = 0; i < 100; i++) {
    promises.push(optimize());
  }
  await Promise.all(promises);

  console.timeEnd('f');
}

main();
