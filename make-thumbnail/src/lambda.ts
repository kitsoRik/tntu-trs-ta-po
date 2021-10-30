import { Lambda } from 'aws-sdk';

const client = new Lambda({
  region: 'eu-central-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCOUNT_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

let i = 0;

async function optimize() {
  await client
    .invoke({
      FunctionName: 'thumbnail-dev-hello',
    })
    .promise();

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
