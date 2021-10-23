const express=require('express');
var cors = require('cors')
const app=express();
const port = 5000;
app.use(cors())
app.use(express.json());
const users=[
    {
        id:0,
        name: "Nazim",
        phone: '019999232'
    },
    {
        id:1,
        name: "Ibrahim",
        phone: '019999232'
    },
    {
        id:2,
        name: "Tapu",
        phone: '019999232'
    },
    {
        id:3,
        name: "Tasnim",
        phone: '019999232'
    },
]
app.get('/', (req,res)=>{
    res.send('Hello World')
});
app.get('/users', (req,res)=>{
    res.send(users)
});


app.get("/users", (req, res) => {
    console.log(req.query.search);
    const search = req.query.search;
    if (search) {
      const searchResult = users.filter((user) =>
        user.name.toLocaleLowerCase().includes(search)
      );
      res.send(searchResult);
    } else {
      res.send(users);
    }
  });
  // app method
app.post('/users',(req,res)=>{
    const newUser=req.body;
    newUser.id=users.length;
    users.push(newUser);
    console.log("hitting the post",req.body);
    res.json(newUser);
})


app.get('/users/:id', (req,res)=>{
    const id=req.params.id;
    console.log(id);
    const user=users[id];
    res.send(user);
});

app.listen(port,()=>{
    console.log('Listening to ', port);
})