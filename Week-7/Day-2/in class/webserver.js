const express = require('express');
const { log } = require('util');

const app = express();
app.use(express.json())
// body parser//

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

//CRUD
///Create-POST
//Read - GET
//UIpdate - PUT
//Delete- DELETE

//REST/RESTFUL API
// http://example.com/api/users - post


// app.get
// app.post
// app.put
// app.delete

const users = [
    { id: 1, name: 'John', email: 'dkddjdjd@gmail.com' },
    { id: 2, name: 'Alma', email: 'dkdsdsddjdjd@gmail.com' },
    { id: 3, name: 'Tommy', email: 'dk11ddjdjd@gmail.com' }
]


//Read - R - GET
app.get('/api/users', (req, res) => {
    res.json(users)
})

//Read - R - GET one user with param
app.get('/api/users/:id', (req, res) => {
    console.log(req.params);
    const { id } = req.params
    const user = users.find((item) => item.id == id)
    if (!user) {
        return res.status(404).json({ message: 'user not found' })
    }
    res.json(user)
})

// http://localhost:3001/api/search?name=john

//Read GET user by name query

// app.get('/api/search/', (req, res) => {
//     console.log(req.query);
//     res.send('ok')
//     const { name } = req.query
//     const filterUsers = users.filter(item => {
//         return item.name.toLowerCase().includes(name.toLowerCase())
//     })
//     if (filterUsers.length === 0) {
//         res.status(404).json({ message: 'no users match ur search' })
//         return
//     }
//     res.json(filterUsers)
// })


//C - Create -POST
app.post('/api/users/', (req, res) => {
    console.log(req.body)
    const { name, email } = req.body
    const newUSer = { name, email, id: users.length + 1 }
    users.push(newUSer)
    res.json(users)
})

// update U - PUT

app.put('/api/users/:id', (req, res) => {
    const { id } = req.params
    const { name, email } = req.body
    const index = users.findIndex((item) => item.id == id)

    if (index === -1) {
        res.status(404).json({ message: 'user to update not found' })
        return
    }
    users[index] = { ...users[index], name, email }
    res.json(users)
})

// D-DELETE mthod

app.delete('/api/users/:id', (req, res) => {
    const { id } = req.params
    const index = users.findIndex((item) => item.id == id)

    if (index === -1) {
        res.status(404).json({ message: 'user to update not found' })
        return
    }
    users.splice(index, 1)
    res.json(users)
})

console.log(__dirname)
app.use('/', express.static(__dirname + '/public'))