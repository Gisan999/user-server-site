const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const users = [
    {id: 1, name: 'sabana', email: 'sabana@gmail.com'},
    {id: 2, name: 'sabnoor', email: 'sabnoor@gmail.com'},
    {id: 3, name: 'sabila', email: 'sabila@gmail.com'},
    {id: 4, name: 'sabina', email: 'sabina@gmail.com'},
]


app.get('/', (req, res) => {
    res.send('User management server is running')
})


app.get('/users', (req, res)=>{
    res.send(users);
})

app.post('/users', (req, res) =>{
    console.log('post api hitting');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port, ()=> {
    console.log(`server is running on port: ${port}`)
})