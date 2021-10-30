import * as jimp from 'jimp';

let i = 0;

async function optimize() {
  const image = await jimp.read(
    'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
  );

  const promises: Promise<any>[] = [];
  for (let i = 0; i < 100; i++) {
    promises.push(
      image
        .cover(250, 250)
        .quality(60)
        .getBufferAsync('image/' + 'png'),
    );
  }

  await Promise.all(promises);

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
