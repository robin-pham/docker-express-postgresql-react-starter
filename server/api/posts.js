import express from 'express';
import path from 'path';
import pgpFactory from 'pg-promise';

import authorMock from '../mocks/author.json';
import Post from '../class/post';

var router = express.Router();
const pgp = pgpFactory();
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '/../config/config.json'))[env];
const db = pgp(process.env[config.use_env_variable]);

router.get('/api/author', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(authorMock));
});

router.get('/api/posts', (req, res) => {
  db.any('SELECT name, content FROM "Posts"')
    .then((data) => {
      res.setHeader('Content-Type', 'application/json');
      const Posts = data.map((elem) => new Post(elem.name).content(elem.content));
      res.send(JSON.stringify(Posts));
    })
    .catch(error => {
      res.status(404).send(error);
    });
});

router.post('/api/posts', (req, res) => {
  req.accepts('application/json');
  var NewPost = new Post(req.body[0].name).content(req.body[0].content);
  db.query('INSERT INTO "Posts" (name, content, created_at, updated_at) VALUES ($1, $2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) ON CONFLICT (content) DO NOTHING',
   [NewPost.getName(), NewPost.getContent()])
    .then(() => {
      res.status(201).send();
    })
    .catch(error => {
      res.status(404).send(error);
    });
});

router.delete('/api/postremove', (req, res) => {
  req.accepts('application/json');
  db.none('DELETE FROM "Posts" WHERE NAME = $1', req.body[0].name)
    .then(() => {
      res.status(204).send();
    })
    .catch((error) => {
      res.status(409).send(error);
    });
});

export default router;
