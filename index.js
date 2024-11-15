//importing express
const express = require('express');
const UserRouter = require('./routers/userRouter');
const ProductRouter = require('./routers/productRouter');

//creating an express app

const app = express();

const port = 5000;

//middleware
app.use('/user', UserRouter);   
app.use('/product', ProductRouter);   

//route or endpoint
app.get('/',(req,res) => {
    res.send('response to express');
})

app.get('/add',(req,res) => {
    res.send('response from add')
})

app.get('/getall',(req,res) => {
    res.send('response from getall')
})

app.get('/delete',(req,res) => {
    res.send('response from delete')
})

//starting the server
app.listen(port, () => { console.log('Server Started'); })