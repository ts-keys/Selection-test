import express from 'express';
const app = express();
app.use(express.json());

app.post('/api/converter', async (req, res) => {
    const value = req.body.data;
    const characters = value.split('');
    characters.sort();
    res.json({word: characters});
})
app.listen(3000, () => {
    console.log('server running')
});
