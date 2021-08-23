const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = 4000;

app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('My Home Page...');
});

const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

mongoose.connect('mongodb+srv://testuser001:test@test@cluster0.2eq41.mongodb.net/jobsy_api_test?retryWrites=true&w=majority', {useNewUrlParser: true}, {useUnifiedTopology: true}, () => {
    console.log('MongoDB connected...');
})

app.listen(PORT);