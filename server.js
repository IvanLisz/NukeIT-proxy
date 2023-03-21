import express from 'express';
import corsProxy from '@isomorphic-git/cors-proxy';

const app = express()

app.use(corsProxy)

app.listen(9999, () => {
  console.log('Proxy server listening on port 9999')
});