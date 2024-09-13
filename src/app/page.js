import React from 'react';

import { readFile, writeFile } from '../helpers/file-helpers';
import HitCounter from '../components/HitCounter';

const DATABASE_PATH = '/src/database.json';

/*
`readFile` takes 1 argument:
• the path to the file:

readFile('/path/to/file');

`writeFile` takes 2 arguments:
• The path to the file
• The new contents for the file

writeFile(
  '/path/to/file',
  '{ "hello": "world" }'
);
*/

function Home() {
  let { hits } = JSON.parse(readFile(DATABASE_PATH));
  const newHits = hits + 1;

  writeFile(DATABASE_PATH, JSON.stringify({ hits: newHits }));

  return (
    <main>
      <h1>Welcome!</h1>
      <HitCounter hits={newHits} />
    </main>
  );
}

export default Home;
