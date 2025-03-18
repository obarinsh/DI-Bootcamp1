const { fetchPosts } = require('./data/dataService.js');
const express = require('express')
const app = express()
app.use(express.json())

const PORT = 5001;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

app.get('/posts', async (req, res) => {
    try {
        const posts = await fetchPosts()
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching posts' });
    }
});
