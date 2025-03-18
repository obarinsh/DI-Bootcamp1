const express = require('express');
const app = express();
app.use(express.json())

const PORT = 3001;


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const posts = [{
    id: 1,
    title: 'Recipes',
    content: 'New recipe is coming'
}, {
    id: 2,
    title: 'Fashion',
    content: 'New bag'
}, {
    id: 3,
    title: 'Cosmetics',
    content: 'BB cream'
}, {
    id: 4,
    title: 'Travels',
    content: 'Let go to the beach'
}]

// GET /posts: Return a list of all blog posts.
// GET /posts/:id: Return a specific blog post based on its id.

app.get('/posts/:id', (req, res) => {
    // console.log(req.params);
    const { id } = req.params
    const post = posts.find((item) => item.id == id)
    if (!post) {
        return res.status(404).json({ message: 'user not found' })
    }
    res.json(post)
});
app.get('/posts', (req, res) => {
    res.json(posts)
});

// POST /posts: Create a new blog post.

app.post('/posts', (req, res) => {
    console.log(req.body)
    const { title, content } = req.body
    const newPost = { title, content, id: posts.length + 1 }
    posts.push(newPost)
    res.json(posts)
})
// PUT /posts/:id: Update an existing blog post.

app.put('/posts/:id', (req, res) => {
    const { id } = req.params
    const { title, content } = req.body
    const index = posts.findIndex((item) => item.id == id)

    if (index === -1) {
        res.status(404).json({ message: 'post to update not found' })
        return
    }
    posts[index] = { ...posts[index], title, content }
    res.json(posts[index])
})

// DELETE /posts/:id: Delete a blog post.

app.delete('/posts/:id', (req, res) => {
    const { id } = req.params
    const index = posts.findIndex((item) => item.id == id)

    if (index === -1) {
        res.status(404).json({ message: 'user to update not found' })
        return
    }
    posts.splice(index, 1)
    res.json(posts)
})
