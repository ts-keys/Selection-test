import express from 'express';
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.post('/api/converter', async (req, res) => {
    const value = req.body.data;
    const characters = value.split('');
    characters.sort();
    res.json({word: characters});
})
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});
