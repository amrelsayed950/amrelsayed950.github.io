const express = require('express');
const app = express();
const routes = require('./routes/calculate');
const cors = require('cors');

app.set('views', __dirname + '/views');

const port = 8080;

app.use(express.urlencoded({ extended: true }));

app.use(cors());

//import routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/calculator.html');
});

app.use('/', routes);

app.use(express.static('public'));

app.listen(port, () => console.log(`Server running at http://localhost:${port}...`));