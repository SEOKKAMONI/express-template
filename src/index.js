import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'pong' });
});

app.listen(3000, () => {
  console.log('시스템 가동 준비 완료');
});
