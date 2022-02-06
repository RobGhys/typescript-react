import express from 'express';
const app = express();
import { calculator } from './calculator';

app.get('/ping', (_req, res) => {
    res.send('pong');
});

app.post('/calculate', (req, res) => {
    const { val1, val2, op } = req.body;

    const result = calculator(val1, val2, op);
    res.send(result);
});
const PORT = 3005;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});