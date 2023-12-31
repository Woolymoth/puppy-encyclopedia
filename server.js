const methodOverride = require('method-override');
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Add the method-override middleware
  server.use(methodOverride('_method'));

  server.all('*', (req, res) => {
    // Your routing logic here
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
