const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Database connection
mongoose.connect('mongodb://localhost/testdb')
.then(conn => console.log("Mongo connection OK"))
.catch(err => console.log("BAD MONGO CONNECTION"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Carregar os Models
const User = require('./models/user');
const Category = require('./models/category');
const News = require('./models/news');

// Carregar as Rotas
const userRoute = require('./routes/user-route');
const categoryRoute = require('./routes/category-route');
const newsRoute = require('./routes/news-route');

app.use('/user', userRoute);
app.use('/category', categoryRoute);
app.use('/news', newsRoute);

app.use(cors());

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
    next();
}


app.use(allowCrossDomain);



//const PORT = process.env.PORT || 3001;
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});