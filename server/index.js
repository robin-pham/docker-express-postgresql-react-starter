import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import fallback from 'express-history-api-fallback';

import postsApi from './api/posts';

const app = express();
const root = path.join(__dirname, '/../public/');

app.use(express.static(root));
app.use(fallback('index.html', {root: root}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', postsApi);

export default app;
